document.addEventListener("DOMContentLoaded", () => {
    
    // 1. POPULATE PROFILE
    const heroImgContainer = document.querySelector('.hero-img');
    
    document.getElementById('profile-name').textContent = data.profile.name;
    document.getElementById('profile-title').textContent = data.profile.title;
    document.getElementById('profile-bio').innerHTML = data.profile.bio;
    
    // INJECT PROFILE STRUCTURE (Front + Back, No Icon)
    heroImgContainer.innerHTML = `
        <div class="profile-wrapper" id="profile-card">
            <div class="profile-inner">
                <div class="profile-face profile-front">
                    <img src="${data.profile.photo}" alt="Profile Photo">
                </div>
                <div class="profile-face profile-back">
                    <h3>Hey don't flip me!</h3>
                    <h3>I can't see anything!</h3>
                </div>
            </div>
        </div>
    `;
    
    // Buttons
    const btnContainer = document.getElementById('hero-btns');
    btnContainer.innerHTML = `
        <a href="mailto:${data.profile.email}" class="btn btn-primary"><i class="fas fa-envelope"></i> Email</a>
        <a href="${data.profile.linkedin}" target="_blank" class="btn btn-outline"><i class="fab fa-linkedin"></i> LinkedIn</a>
        <a href="${data.profile.github}" target="_blank" class="btn btn-outline"><i class="fab fa-github"></i> GitHub</a>
    `;

    // --- HELPER FUNCTION TO CREATE FLIP CARDS ---
    const createFlipCard = (title, subtitle, date, headerRight, desc, details, tags = null) => {
        const tagsHtml = tags ? `<div class="skill-tags" style="margin-top:15px">${tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>` : '';
        
        return `
        <div class="card-wrapper">
            <div class="card-inner">
                <div class="card-face card-front">
                    <div class="card-header">
                        <span class="card-date">${date}</span>
                        ${headerRight}
                    </div>
                    <h3>${title}</h3>
                    ${subtitle ? `<h4>${subtitle}</h4>` : ''}
                    <p>${desc}</p>
                    ${tagsHtml}
                    <i class="fas fa-sync-alt flip-icon"></i>
                </div>

                <div class="card-face card-back">
                    <h3 style="font-size:1.2rem; margin-bottom:15px;">Details</h3>
                    <div class="details-text">${details}</div>
                    <i class="fas fa-undo flip-icon"></i>
                </div>
            </div>
        </div>`;
    };

    // 2. POPULATE EXPERIENCE
    const expContainer = document.getElementById('experience-grid');
    data.experience.forEach(job => {
        const locHtml = `<a href="${job.mapUrl}" target="_blank" class="card-location hover-link" onclick="event.stopPropagation()"><i class="fas fa-map-marker-alt"></i> ${job.location}</a>`;
        expContainer.innerHTML += createFlipCard(job.role, job.company, job.date, locHtml, job.desc, job.details);
    });

    // 3. POPULATE EDUCATION
    const eduContainer = document.getElementById('education-grid');
    data.education.forEach(edu => {
        const locHtml = `<a href="${edu.mapUrl}" target="_blank" class="card-location hover-link" onclick="event.stopPropagation()"><i class="fas fa-map-marker-alt"></i> ${edu.location}</a>`;
        const desc = `<strong>Grade:</strong> ${edu.grade}<br><strong>Relevant Courses:</strong> ${edu.courses}`;
        eduContainer.innerHTML += createFlipCard(edu.degree + edu.specialization, edu.school, edu.date, locHtml, desc, edu.details);
    });

    // 4. POPULATE PROJECTS
    const projContainer = document.getElementById('projects-grid');
    data.projects.forEach(proj => {
        let icon = 'fa-link';
        if (proj.linkText.toLowerCase().includes('github')) icon = 'fa-github';
        if (proj.linkText.toLowerCase().includes('colab')) icon = 'fa-google';
        if (proj.linkText.toLowerCase().includes('thingiverse')) icon = 'fa-cube';

        const linkHtml = `<a href="${proj.url}" target="_blank" class="card-location project-link" onclick="event.stopPropagation()"><i class="fab ${icon}"></i> ${proj.linkText}</a>`;
        projContainer.innerHTML += createFlipCard(proj.title, null, proj.type, linkHtml, proj.desc, proj.details, proj.tags);
    });

    // 5. POPULATE SKILLS
    const skillsContainer = document.getElementById('skills-grid');
    for (const [category, skillsList] of Object.entries(data.skills)) {
        const tagsHtml = skillsList.map(skill => `<span class="tag">${skill}</span>`).join('');
        skillsContainer.innerHTML += `<div class="skill-category"><h4>${category}</h4><div class="skill-tags">${tagsHtml}</div></div>`;
    }

    // 6. GENERAL INTERACTIVITY
    document.querySelectorAll('.card-wrapper').forEach(card => {
        card.addEventListener('click', () => { card.classList.toggle('flipped'); });
    });

    document.querySelectorAll('.card-face, .glass, .profile-face').forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            element.style.setProperty('--x', `${e.clientX - rect.left}px`);
            element.style.setProperty('--y', `${e.clientY - rect.top}px`);
        });
    });

    // 7. PROFILE INTERACTIVITY (TILT + FLIP)
    const profileCard = document.getElementById('profile-card');
    if(profileCard) {
        // FLIP: Click toggles the class
        profileCard.addEventListener('click', () => {
            profileCard.classList.toggle('flipped');
        });

        // TILT: Mousemove calculates rotation
        const maxTilt = 6; 
        
        profileCard.addEventListener('mousemove', (e) => {
            const rect = profileCard.getBoundingClientRect();
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const mouseX = e.clientX - rect.left - centerX;
            const mouseY = e.clientY - rect.top - centerY;
            
            // Calculate rotation
            const rotateX = -1 * (mouseY / centerY) * maxTilt; 
            const rotateY = (mouseX / centerX) * maxTilt;

            // Apply Transform to the WRAPPER (Parent)
            profileCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        // RESET TILT: Mouseleave
        profileCard.addEventListener('mouseleave', () => {
            profileCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    }
});