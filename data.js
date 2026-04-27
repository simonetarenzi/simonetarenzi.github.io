const data = {
    profile: {
        name: "Simone Tarenzi",
        title: "Software & Data Engineer",
        location: "Varese, IT",
        bio: "Junior Software Engineer at Intesa Sanpaolo. <br> M.Sc. in Informatics with AI Specialization and Co-Founder of the Google Developer Student Club at USI. <br> Passionate about AI, Robotics, and anything to do with computers.",
        email: "simonetarenzi97@gmail.com",
        linkedin: "https://linkedin.com/in/simone-tarenzi",
        github: "https://github.com/simonetarenzi",
        photo: "images/profile_picture.png"
    },
    experience: [
        {
            role: "Junior Software Engineer",
            company: "Intesa Sanpaolo",
            date: "Mar 2026 - Current",
            location: "Milan, IT",
            mapUrl: "https://www.google.com/maps/place/Intesa+Sanpaolo+Vita/@45.4854873,9.1942645,16z/data=!3m1!5s0x4786c6ce0e50fb7f:0x64c17ba744fe5fb1!4m15!1m8!3m7!1s0x4786c6ce0e50fb7f:0xba36fae02fe50c56!2sVia+Melchiorre+Gioia,+22,+20124+Milano+MI!3b1!8m2!3d45.4854873!4d9.1968394!16s%2Fg%2F11cpp1n4_1!3m5!1s0x4786c128426e41f9:0x7c605f2eacedc5c6!8m2!3d45.4854874!4d9.1968394!16s%2Fg%2F1tvw3thk?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D",
            desc: "Developing cloud-native microservices using the Quarkus framework for core banking data management. <br> Orchestrating API integration to retrieve and display complex customer anagraphical data and product relationships. <br> Managing data visualization and access for modernized MongoDB database infrastructures.",
            details: "At Intesa Sanpaolo, I am part of a new team responsible for modernizing how the bank handles and retrieves core customer information. <br> I focus on building high-performance applications with Quarkus to interface with a newly migrated MongoDB environment. <br> My work involves handling large-scale datasets, including customer anagraphics, geographical data (cities/regions/nations), and the intricate relationships between clients and various banking products."
        },
        {
            role: "Data Engineer & 3D Modeler",
            company: "Independent Dental Technician Assistance",
            date: "Sep 2020 - Sep 2022",
            location: "Varese, IT",
            mapUrl: "https://www.google.com/maps/place/Varese,+Italy",
            desc: "Managed a database of dental prosthetic jobs, ensuring accurate tracking and workflow progression. <br> Performed 3D scanning of dental impressions and models for digital processing. <br> Created 3D prototypes of dental prosthetics.",
            details: "After Covid a lot of professions turned towards digitalizing a lot of their procedures, one of which was the dental industry and how they handle orders and prosthesis creation. During those two years I helped my dad in managing jobs and clients, as well as using 3D scanners and CAD programs for creating prototypes of dental models that would later be processed further. <br> In particular I used PostgreSQL for database management, and Dental Wings and 3Shape scanners and CAD software for 3D scanning and modeling."
        }
    ],
    organizations: [
        {
            role: "Vice-President",
            company: "Google Developer Student Club (USI)",
            date: "Aug 2023 - Jun 2024",
            location: "Lugano, CH",
            mapUrl: "https://www.google.com/maps/place/USI+Universit%C3%A0+della+Svizzera+italiana/@46.010733,8.9555832,17z/data=!3m1!4b1!4m6!3m5!1s0x47842d98369b06c3:0x618f9f987d4b4b09!8m2!3d46.010733!4d8.9581581!16zL20vMDcxOHRs?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
            desc: "Created and expanded the community to 50+ members. <br> Helped manage workshops and guest speaker events. <br> Hosted and taught an introductory workshop on 3D printing techniques.",
            details: "Four other fellow colleagues and I created the first ever Google Developer Student Club in USI, both as a challenge to ourselves, and to provide a community for students interested in modern technologies and software development in general. <br> This was an incredible opportunity to improve my leadership and organizational skills, and also share my passion for 3D printing with others while strengthening my public speaking abilities."
        }
    ],
    education: [
        {
            degree: "M.Sc. in Informatics",
            specialization: "(AI Specialization)",
            school: "Università della Svizzera Italiana (USI)",
            date: "Aug 2022 - Jun 2025",
            location: "Lugano, CH",
            mapUrl: "https://www.google.com/maps/place/USI+Universit%C3%A0+della+Svizzera+italiana/@46.010733,8.9555832,17z/data=!3m1!4b1!4m6!3m5!1s0x47842d98369b06c3:0x618f9f987d4b4b09!8m2!3d46.010733!4d8.9581581!16zL20vMDcxOHRs?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
            grade: "Magna Cum Laude",
            courses: "Artificial Intelligence, Machine Learning, Data Analytics, Graph Deep Learning, Robotics, Algorithms & Complexity, High-Performance Computing, Quantum Computing, Software Design & Modeling",
            details: "The place where not only I deepened my knowledge of computer science and artificial intelligence, but also where I learned to truly understand and appreciate the importance of teamwork and collaboration, allowing me to approach problems in a more structured and efficient way. <br> The courses all being taught in English also immensely helped me improve my technical vocabulary, and made me more confident and easy-going in speaking with other people."
        },
        {
            degree: "Bachelor in Informatics",
            specialization: "",
            school: "Università degli Studi dell'Insubria",
            date: "Aug 2017 - Jul 2022",
            location: "Varese, IT",
            mapUrl: "https://www.google.com/maps/place/Universit%C3%A0+degli+Studi+dell'Insubria+-+Campus+Bizzozero/@45.8007344,8.8416162,16.75z/data=!4m10!1m2!2m1!1sinsubria!3m6!1s0x478680c821d56f7b:0xb1074c5d88e629a9!8m2!3d45.7981484!4d8.8482614!15sCghpbnN1YnJpYSIDiAEBkgEKdW5pdmVyc2l0eaoBSgoNL2cvMTFieW10MF9zbAoJL20vMGN3aGJoEAEyHhABIhqbOGdnBvKEG9B_MIiILeWgdSzSJUZRbBySoTIMEAIiCGluc3Vicmlh4AEA!16s%2Fg%2F11b6gk_tfv?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
            grade: "99/110",
            courses: "Algorithms & Data Structures, Computer Architecture, Procedural and Object-Oriented Programming, Concurrent and Distributed Programming, Databases, Software Design, Automatons & Languages, Image Processing, Calculus",
            details: "I wouldn't say I found my passion for programming here, but it certainly strengthened it. The courses were all very interesting and I had the chance to learn a lot of different programming languages and paradigms, as well as most theoretical computer science topics. <br> I only regret it being interrupted by Covid-19, which made the last courses and exams way more difficult than they should have been."
        }
    ],
    projects: [
        {
            title: "LLMs as a Depression Diagnostic Tool",
            type: "Master's Thesis",
            desc: "Automatic depression screening tool using social media comments by employing RAG and LLMs, with an accuracy of more than 87%. <br> Outperformed ML and NLP techniques on the same dataset of CLEF's eRisk competition.",
            tags: ["Python", "Large Language Models", "Retrieval Augmented Generation", "Natural Language Processing", "Machine Learning"],
            linkText: "GitHub",
            url: "https://github.com/Bluxen/Master-Thesis",
            details: "My Master's thesis and the work I'm probably the most proud of. The idea was to create an automatic depression screening tool using social media comments, specifically from Reddit, by leveraging the power of Large Language Models and Retrieval Augmented Generation techniques. <br> After proving the effectiveness of this methodology, I created a full simulation of two agents, a doctor and a patient, in which they would engage in a conversation to assess the patient's mental state."
        },
        {
            title: "Robotics Project",
            type: "Robotics",
            desc: "Robotic system in ROS where a DJI Robomaster EP locates, picks up, and transports ArUco-tagged objects using visual servoing, then autonomously follows a Thymio robot. <br> Integrated OpenCV, CoppeliaSim, and custom control logic for alignment, grasping, and motor coordination.",
            tags: ["Python", "Robot Operating System", "OpenCV", "ArUco", "CoppeliaSim"],
            linkText: "GitHub",
            url: "https://github.com/Bluxen/Robotics-Project",
            details: "The final project for the Robotics course at USI, where we had to invent and implement any kind of robotic system using ROS and simulated using CoppeliaSim. Our team decided to create a system where a DJI Robomaster EP would have to find, pick up, and transport objects marked with ArUco tags using visual servoing techniques, and then follow another robot (a Thymio) autonomously. <br> I was mainly responsible for the computer vision part using OpenCV and ArUco libraries, as well as the control logic for alignment and grasping."
        },
        {
            title: "GraphCleaner",
            type: "Reproducibility Challenge",
            desc: "Reproduction of the GraphCleaner framework to detect and correct mislabelled nodes in graph datasets using ML techniques, validating its effectiveness on standard benchmarks. <br> Evaluated robustness under extreme noise levels and extended experiments beyond the original settings with artificial datasets.",
            tags: ["Python", "PyTorch", "TensorFlow", "Graphs", "Machine Learning", "Deep Learning"],
            linkText: "Colab",
            url: "https://colab.research.google.com/drive/16TZ1vq1fAzQ09X9qea6uZh_KCWHvTtGb##scrollTo=C0bc2Xh_yviN",
            details: "The final project of the Deep Learning Lab course at USI, where the challenge was to reproduce the results of a scientific paper. In this case, the paper presented GraphCleaner, a framework to identify and fix mislabelled nodes in graph datasets using machine learning techniques. <br> This was the perfect opportunity to test my knowledge of neural networks and deep learning in general."
        },
        {
            title: "Decision Diagram Builder",
            type: "Bachelor's Thesis",
            desc: "Java application for the creation and automatic representation of three-valued logic formulas through graphs. <br> Implemented both background logic and a user-friendly GUI for formula input and graph visualization.",
            tags: ["Java", "Logic", "Graphs"],
            linkText: "GitHub",
            url: "https://github.com/Bluxen/Decision_DB",
            details: "My Bachelor's thesis involved creating a Java application that could take three-valued logic formulas as input and represent them as decision diagrams. The most difficult part was to not only create a graph representing the formula itself, but also a way to simplify it so that it was legible. In the end I decided to show the various steps of simplification as well, so it would be easier to understand how the final graph was obtained."
        },
        {
            title: "PillsKeeper",
            type: "App Development",
            desc: "Android app for keeping and managing a personal inventory of medications, with online database support for data synchronization, automatic reminders, prescription email templates, and Google Maps integration.",
            tags: ["Android", "Kotlin", "Firebase", "Google Maps"],
            linkText: "GitHub",
            url: "https://github.com/MarvinTM62/PillsKeeper",
            details: "The first 'real' app I developed during my Bachelor's degree, created as a university project with a team of 3 people. <br> I was mainly responsible for the database design and implementation in Firebase, as well as the reminders system using Android's AlarmManager."
        },
        {
            title: "Wi-Finder",
            type: "App Development",
            desc: "Android app for locating nearby Wi-Fi networks by approximating their location, and displaying their details, including signal strength and security type.",
            tags: ["Android", "Java", "SQLite", "Google Maps"],
            linkText: "GitHub",
            url: "",
            details: "The final project for the Mobile & Wearable Computing course in USI, built with another student. <br> I was responsible for the UI and overall navigation of the app, while my partner handled the Wi-Fi scanning and location approximation algorithms."
        },
        {
            title: "3D Modeling Projects",
            type: "3D Modeling",
            desc: "Various 3D modeling projects like an adapter for a rearview mirror, a bluetooth speaker, a board game, and more. <br> Designed with Fusion 360 and produced using PrusaSlicer and FDM printing technology.",
            tags: ["3D Modeling", "Fusion 360", "PrusaSlicer", "FDM Printing"],
            linkText: "Thingiverse",
            url: "https://www.thingiverse.com/Bluxen/designs",
            details: "My profile page on Thingiverse where I upload some of my 3D modeling projects and designs for others to download and use. I am particularly proud of my rearview mirror adapter, which I designed to fit my dad's Mercedes and encloses a dashcam, and that I also sanded and painted. <br> But the board game is cool too!"
        },
        {
            title: "Portfolio Website",
            type: "Website",
            desc: "Personal portfolio website to showcase my skills, experience, and projects. <br> Built with HTML, CSS, and JavaScript, featuring a responsive design and interactive elements.",
            tags: ["HTML", "CSS", "JavaScript"],
            linkText: "GitHub",
            url: "https://simonetarenzi.github.io",
            details: "My own personal website. <br> I wanted to have a very modern looking website where I can put whatever doesn't fit in my curriculum. <br> It follows the so called \"Liquid Glass\" design by Apple, or what I like to call \"Windows Vista 2025\"."
        }
    ],

    skills: {
        "Programming": ["Python", "Java", "C++", "SQL", "NoSQL", "HTML", "CSS", "Javascript", "Kotlin", "Matlab", "LaTeX"],
        "Data Science, AI & ML": ["NumPy", "PyTorch", "TensorFlow", "SciPy", "scikit-learn", "Matplotlib", "seaborn", "pandas", "LangChain", "OpenCV"],
        "Databases": ["MySQL", "PostgreSQL", "SQLite", "Firebase", "MongoDB", "Chroma", "FAISS"],
        "DevOps & Frameworks": ["Git", "Docker", "ROS", "Kubernetes", "Spring Boot", "Quarkus", "Kafka", "JUnit"],
        "Management & Visualization": ["Jira", "Confluence", "Tableau", "Microsoft 365"],
        "Professional Software": ["Fusion 360", "PrusaSlicer", "Photoshop", "Illustrator", "Lightroom", "DaVinci Resolve"],
        "Languages": ["Italian (Native)", "English (CAE C1 - 200/210)", "German (Beginner)"],
        "Interests": ["Guitar", "Traveling", "Photography", "Video Editing", "3D Modeling", "3D Scanning", "Model Kit Building"]
    }
};