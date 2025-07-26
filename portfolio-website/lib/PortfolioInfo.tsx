export const portfolioData = {
    name: "AmirHasan Pezhman",
    title: "Frontend Developer",
    email: "amirhasanpezhman@gmail.com",
    phone: "09134778703",
    location: "Iran, Tehran & Kerman",
    linkedin: "https://www.linkedin.com/in/amirhasan-pezhman-a51143362",
    github: "https://github.com/toursodis",
    profile: "Enthusiastic and rapidly developing Frontend Developer committed to crafting clean, responsive web applications using React.js, Redux, and Tailwind CSS. Proficient with REST API integration and focused on user-centric design. Brings a strong learning aptitude and a proactive, motivated approach to mastering new technologies and contributing effectively to team success.",
    skills: {
        primary: ["React.js", "Redux", "Tailwind CSS", "TypeScript", "HTML & CSS", "JavaScript (ES6+)"],
        secondary: ["Python", "C++", "WebSocket", "Bootstrap", "Postman", "Git & GitHub"],
    },
    interests: [
        { title: "Backend Development", description: "Motivated to expand into backend technologies to become a more well-rounded developer and contribute to full-stack projects." },
        { title: "Artificial Intelligence", description: "Eager to explore AI technologies and apply them in future projects to enhance interactivity and user engagement." },
        { title: "Vue.js", description: "Planning to explore Vue.js to broaden my expertise and stay current with evolving frontend frameworks." }
    ],
    education: {
        degree: "Bachelor of Science in Computer Engineering",
        university: "Iran University of Science and Technology (IUST)",
        location: "Tehran, Iran",
        duration: "Sep 2022 - Present (Expected Graduation: 2026)",
        details: "IUST is a leading institution in engineering and technology in Iran. My studies are providing me with a strong theoretical and practical foundation in computer science.",
        courses: ["Data Structures & Algorithms", "Web Application Development", "Object-Oriented Programming", "Database Systems", "Computer Networks", "Software Engineering"],
    },
    projects: [
        {
            title: "BatBooks - Social Reading and Writing Platform",
            description: "A book-centric social platform with real-time chat and dynamic user interfaces.",
            points: [
                "Developed responsive user interfaces using React.js and Tailwind CSS.",
                "Implemented real-time chat functionality utilizing WebSockets.",
                "Built dynamic components including comment sections, book listings, and profile pages.",
                "Collaborated with backend services through RESTful APIs and managed state with Redux Toolkit.",
                "Incorporated TypeScript to enhance type safety and code maintainability.",
                "Implemented robust authorization and authentication mechanisms using Redux."
            ],
            tags: ["React.js", "Tailwind CSS", "Redux", "TypeScript", "WebSocket"],
            address:"https://batbooks-frontend.liara.run/"
        },
        {
            title: "Search Engine & Text Analysis Project",
            description: "A Python-based TF-IDF search engine for analyzing and retrieving relevant documents.",
            points: [
                "Built a TF-IDF search engine for over 50k documents.",
                "Used NLTK for text preprocessing (tokenization, stop-word removal).",
                "Ranked documents by cosine similarity for effective query matching.",
                "Used scikit-learn for TF-IDF, PCA, and K-Means implementations.",
                "Performed PCA & K-Means clustering for thematic analysis and visualization."
            ],
            tags: ["Python", "NLTK", "Scikit-learn", "Data Science"],
            address:"https://github.com/toursodis/DS_proj"
        },
        {
            title: "Automata-Based Image Processing & Recognition",
            description: "An image recognition system converting binary images into minimized DFAs for classification.",
            points: [
                "Engineered a Python system converting binary images into minimized DFAs.",
                "Developed the full pipeline: image-to-DFA, verification, and reconstruction.",
                "Implemented core DFA/NFA classes with state management and JSON serialization.",
                "Integrated standard NFA operations like union, concatenation, and Kleene star."
            ],
            tags: ["Python", "Computer Science", "Algorithms", "Image Processing"],
            address:"https://github.com/toursodis/tla"
        }
    ]
};