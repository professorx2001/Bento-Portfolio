document.addEventListener('DOMContentLoaded', () =>{
    const projectList = document.getElementById('project-list')

    const projects = [
        {
            id : 1,
            name : "Login & Registration System (C++)",
            url : "https://github.com/professorx2001/Login-Registration",
            desc : "User authentication system with sign-up, login, and password recovery functionalities, with a clear CLI. Ensured username uniqueness by checking against a master list and stored passwords in individual files for security."
        },
        {
            id : 2,
            name : "VidTube ( MEN Stack )",
            url : "https://github.com/professorx2001/Youtube-Backend-Clone",
            desc : "A Backend system replicating core YouTube functionalities, developed with Node.js, Express.js, and MongoDB. It includes features like user authentication, video management, commenting, and subscriptions, providing a solid foundation for a video-sharing platform."
        },

        {
            id : 3,
            name : "Shortify-URL ( MEN Stack )",
            url : "https://github.com/professorx2001/Shortify-URL-Shortener",
            desc : "A URL shortening service developed using Node.js, Express.js, and MongoDB. It enables users to convert long URLs into concise, shareable links, facilitating efficient link management and redirection."
        },

        {
            id : 4,
            name : "Leads Tracker ( Chrome Extension )",
            url : "https://github.com/professorx2001/LeadTracker-ChromeExtension",
            desc : "Save web links of your leads, so you can easily find and connect with them later. Used Chrome API to capture active tab URLs seamlessly in one click and used local storage for persistent data."
        },
        {
            id : 5,
            name : "Smart Gate ( IOT )",
            url : "https://github.com/professorx2001/SmartGate",
            desc : "Arduino-based automatic gate opener system designed to provide convenience and security for gate access. It aims to simplify gate access for various applications."
        },
        {
            id : 6,
            name : "Tic Tac Toe Game ( C++ )",
            url : "https://github.com/professorx2001/SKYBUG/blob/main/Tic-Tac-Toe.cpp",
            desc : "A console-based Tic Tac Toe game in C++ with interactive user input, reset functionality, and support for multiple rounds. Implemented features like username uniqueness, player sign-up, random symbol assignment, and alternating turns."
        },
        {
            id : 7,
            name : "Random Password Generator ( JS )",
            url : "https://randompasswordx.netlify.app/",
            desc : "A simple tool designed to create secure and unique passwords for improved online safety. It generates passwords using a combination of uppercase and lowercase letters, numbers, and special characters based on user-defined preferences like length and character types."
        },
        {
            id : 8,
            name : "To Do List ( JS )",
            url : "https://todolistplanx.netlify.app",
            desc : "A simple application that helps users manage tasks efficiently. It allows users to add new tasks, delete completed or unwanted tasks, and ensures data persistence by storing the tasks locally on the user's device. "
        },

        {
            id : 9,
            name : "Bento Portfolio ( TailwindCSS )",
            url : "https://mdzakihussain.netlify.app",
            desc : "A simple Bento Grid Insipired Portfolio Website. It is a responsive website built using Tailwind CSS, showcasing projects, skills, and contact information in a clean and organized layout."
        },

        {
            id : 10,
            name : "Weather App ( JS )",
            url : "https://github.com/professorx2001/Weather-App",
            desc : "A weather application that provides real-time weather information based on user input. It fetches data from the OpenWeatherMap API and displays details like temperature and weather conditions for the specified location."
        }
    ]

    projects.forEach( project => {
        const divEl = document.createElement('div')
        divEl.classList.add('pl-2')
        divEl.innerHTML = `
            <h3 class="text-xl leading-none font-semibold">${project.id}. <a href="${project.url}" target = "_blank">${project.name}</a></h3>
            <p class ="p-2 leading-none sm:text-sm md:text-base lg:text-lg sm:leading-none md:leading-none lg:leading-none font-extralight"">${project.desc}</p>
        `
        projectList.appendChild(divEl)
    })
})