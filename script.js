document.addEventListener("DOMContentLoaded", () => {
    
    // 1. POPULATE PROFILE
    const profilePhoto = document.getElementById('profile-photo');
    
    document.getElementById('profile-name').textContent = data.profile.name;
    document.getElementById('profile-title').textContent = data.profile.title;
    document.getElementById('profile-bio').textContent = data.profile.bio;
    profilePhoto.src = data.profile.photo;
    
    const btnContainer = document.getElementById('hero-btns');
    btnContainer.innerHTML = `
        <a href="mailto:${data.profile.email}" class="btn btn-primary"><i class="fas fa-envelope"></i> Email</a>
        <a href="${data.profile.linkedin}" target="_blank" class="btn btn-outline"><i class="fab fa-linkedin"></i> LinkedIn</a>
        <a href="${data.profile.github}" target="_blank" class="btn btn-outline"><i class="fab fa-github"></i> GitHub</a>
    `;
    
    // 2. POPULATE EXPERIENCE
    const expContainer = document.getElementById('experience-grid');
    data.experience.forEach(job => {
        expContainer.innerHTML += `
            <div class="card glass">
                <div class="card-header">
                    <span class="card-date">${job.date}</span>
                    <a href="${job.mapUrl}" target="_blank" class="card-location hover-link">
                        <i class="fas fa-map-marker-alt"></i> ${job.location}
                    </a>
                </div>
                <h3>${job.role}</h3>
                <h4>${job.company}</h4>
                <p>${job.desc}</p>
            </div>
        `;
    });

    // 3. POPULATE EDUCATION
    const eduContainer = document.getElementById('education-grid');
    data.education.forEach(edu => {
        eduContainer.innerHTML += `
            <div class="card glass">
                <div class="card-header">
                    <span class="card-date">${edu.date}</span>
                    <a href="${edu.mapUrl}" target="_blank" class="card-location hover-link">
                        <i class="fas fa-map-marker-alt"></i> ${edu.location}
                    </a>
                </div>
                <h3>${edu.degree}${edu.specialization}</h3> 
                <h4>${edu.school}</h4>
                <p><strong>Grade:</strong> ${edu.grade}<br>
                <p style="margin-top: 10px;"><strong>Relevant Courses:</strong> ${edu.courses}</p>
            </div>
        `;
    });

    // 4. POPULATE PROJECTS
    const projContainer = document.getElementById('projects-grid');
    data.projects.forEach(proj => {
        const tagsHtml = proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        let icon = 'fa-link';
        if (proj.linkText.toLowerCase().includes('github')) icon = 'fa-github';
        if (proj.linkText.toLowerCase().includes('colab')) icon = 'fa-google';
        if (proj.linkText.toLowerCase().includes('thingiverse')) icon = 'fa-google';

        projContainer.innerHTML += `
            <div class="card glass">
                <div class="card-header">
                    <span class="card-date">${proj.type}</span>
                    <a href="${proj.url}" target="_blank" class="card-location project-link">
                        <i class="fab ${icon}"></i> ${proj.linkText}
                    </a>
                </div>
                <h3>${proj.title}</h3>
                <p>${proj.desc}</p>
                <div class="skill-tags" style="margin-top:15px">
                    ${tagsHtml}
                </div>
            </div>
        `;
    });

    // 5. POPULATE SKILLS
    const skillsContainer = document.getElementById('skills-grid');
    for (const [category, skillsList] of Object.entries(data.skills)) {
        const tagsHtml = skillsList.map(skill => `<span class="tag">${skill}</span>`).join('');
        skillsContainer.innerHTML += `
            <div class="skill-category">
                <h4>${category}</h4>
                <div class="skill-tags">${tagsHtml}</div>
            </div>
        `;
    }

    // 6. INTERACTIVE GLASS EFFECT
    document.querySelectorAll('.glass').forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;
            element.style.setProperty('--x', `${x}px`);
            element.style.setProperty('--y', `${y}px`);
        });
    });

    // 7. PROFILE PHOTO TILT EFFECT
    const maxTilt = 5; 

    profilePhoto.addEventListener('mousemove', (e) => {
        const rect = profilePhoto.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const mouseX = e.clientX - rect.left - centerX;
        const mouseY = e.clientY - rect.top - centerY;
        
        const percentX = (mouseX / centerX);
        const percentY = (mouseY / centerY);
        
        const tiltY = maxTilt * percentX;
        const tiltX = -maxTilt * percentY;

        profilePhoto.style.transform = `scale(1.05) perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    profilePhoto.addEventListener('mouseleave', () => {
        profilePhoto.style.transform = 'scale(1) perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
});