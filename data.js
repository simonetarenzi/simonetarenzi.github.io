const data = {
    profile: {
        name: "Simone Tarenzi",
        title: "Software & Data Engineer",
        location: "Lugano, CH",
        bio: "M.Sc. in Informatics and Co-Founder of the Google Developer Student Club at USI. Passionate about AI, Robotics, and anything to do with computers.",
        email: "simonetarenzi97@gmail.com",
        linkedin: "https://linkedin.com/in/simone-tarenzi",
        github: "https://github.com/Bluxen",
        photo: "professional_photo_cropped.png"
    },
    experience: [
        {
            role: "Vice-President",
            company: "Google Developer Student Club (USI)",
            date: "Aug 2023 - Jun 2024",
            location: "Lugano, CH",
            mapUrl: "https://www.google.com/maps/place/Lugano,+Switzerland",
            desc: "Created and expanded the community to 50+ members. Helped manage workshops and guest speaker events. Taught 3D printing techniques."
        },
        {
            role: "Data Engineer & 3D Modeler",
            company: "Independent Dental Technician Assistance",
            date: "Sep 2020 - Sep 2022",
            location: "Varese, IT",
            mapUrl: "https://www.google.com/maps/place/Varese,+Italy",
            desc: "Managed prosthetic tracking, performed 3D scanning for digital processing, and created 3D prototypes of dental prosthetics."
        }
    ],
    education: [
        {
            degree: "M.Sc. in Informatics<br>",
            specialization: "(AI Specialization)",
            school: "Università della Svizzera Italiana (USI)",
            date: "Aug 2022 - Jun 2025",
            location: "Lugano, CH",
            mapUrl: "https://www.google.com/maps/place/USI+Universit%C3%A0+della+Svizzera+italiana/@46.010733,8.9555832,17z/data=!3m1!4b1!4m6!3m5!1s0x47842d98369b06c3:0x618f9f987d4b4b09!8m2!3d46.010733!4d8.9581581!16zL20vMDcxOHRs?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
            grade: "Magna Cum Laude",
            courses: "Artificial Intelligence, Machine Learning, Data Analytics, Graph Deep Learning, Robotics, Algorithms & Complexity, High-Performance Computing, Quantum Computing, Software Design & Modeling"
        },
        {
            degree: "Bachelor in Informatics",
            specialization: "",
            school: "Università degli Studi dell'Insubria",
            date: "Aug 2017 - Jul 2022",
            location: "Varese, IT",
            mapUrl: "https://www.google.com/maps/place/Universit%C3%A0+degli+Studi+dell'Insubria+-+Campus+Bizzozero/@45.8007344,8.8416162,16.75z/data=!4m10!1m2!2m1!1sinsubria!3m6!1s0x478680c821d56f7b:0xb1074c5d88e629a9!8m2!3d45.7981484!4d8.8482614!15sCghpbnN1YnJpYSIDiAEBkgEKdW5pdmVyc2l0eaoBSgoNL2cvMTFieW10MF9zbAoJL20vMGN3aGJoEAEyHhABIhqbOGdnBvKEG9B_MIiILeWgdSzSJUZRbBySoTIMEAIiCGluc3Vicmlh4AEA!16s%2Fg%2F11b6gk_tfv?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
            grade: "99/110",
            courses: "Algorithms & Data Structures, Databases, Automatons & Languages, Programming"
        }
    ],
    projects: [
        {
            title: "LLMs as a Depression Diagnostic Tool",
            type: "Master's Thesis",
            desc: "Automated depression screening using RAG and LLMs on social media comments. Achieved >87% accuracy.",
            tags: ["Python", "LLMs", "RAG"],
            linkText: "GitHub",
            url: "https://github.com/Bluxen/Master-Thesis"
        },
        {
            title: "Final Robotics Project",
            type: "Robotics",
            desc: "Designed a ROS system where a DJI Robomaster locates objects using visual servoing and coordinates with a Thymio robot.",
            tags: ["ROS", "OpenCV", "CoppeliaSim"],
            linkText: "GitHub",
            url: "https://github.com/Bluxen/Robotics-Project"
        },
        {
            title: "GraphCleaner",
            type: "Reproducibility Challenge",
            desc: "Reproduced framework to detect mislabelled nodes in graph datasets. Validated effectiveness on standard benchmarks.",
            tags: ["Python", "ML", "Graphs"],
            linkText: "Colab",
            url: "https://colab.research.google.com/drive/16TZ1vq1fAzQ09X9qea6uZh_KCWHvTtGb##scrollTo=C0bc2Xh_yviN"
        },
        {
            title: "PillsKeeper",
            type: "Android Development",
            desc: "Android app for medication inventory with cloud sync, automatic reminders, and Google Maps integration.",
            tags: ["Android", "Kotlin", "SQLite"],
            linkText: "GitHub",
            url: "https://github.com/MarvinTM62/PillsKeeper"
        },
        {
            title: "3D Modeling Projects",
            type: "3D Modeling",
            desc: "Various projects using 3D modeling CAD software and tools.",
            tags: ["3D Modeling", "Fusion 360", "PrusaSlicer"],
            linkText: "Thingiverse",
            url: "https://www.thingiverse.com/Bluxen/designs"
        }
    ],
    skills: {
        "Programming": ["Python", "Java", "C++", "SQL", "NoSQL", "HTML", "CSS", "Javascript", "Kotlin", "Matlab", "LaTeX"],
        "Libraries": ["NumPy", "PyTorch", "TensorFlow", "SciPy", "scikit-learn", "Matplotlib", "seaborn", "pandas", "OpenCV", "ROS"],
        "Databases": ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Chroma", "FAISS"],
        "Tools": ["Git", "Docker", "Tableau", "Microsoft 365", "Fusion 360", "PrusaSlicer", "Photoshop", "Illustrator", "Lightroom", "DaVinci Resolve"],
        "Languages": ["Italian (Native)", "English (CAE C1 - 200/210)", "German (Beginner)"],
        "Interests": ["Guitar", "Traveling", "Photography", "Video Editing", "3D Modeling", "3D Scanning", "Model Kit Building"]
    }
};