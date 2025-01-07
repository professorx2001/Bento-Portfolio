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
            name : "Leads Tracker ( Chrome Extension )",
            url : "https://github.com/professorx2001/LeadTracker-ChromeExtension",
            desc : "Save web links of your leads, so you can easily find and connect with them later. Used Chrome API to capture active tab URLs seamlessly in one click and used local storage for persistent data."
        },
        {
            id : 3,
            name : "Smart Gate ( IOT )",
            url : "https://github.com/professorx2001/SmartGate",
            desc : "Arduino-based automatic gate opener system designed to provide convenience and security for gate access. It aims to simplify gate access for various applications."
        },
        {
            id : 4,
            name : "Tic Tac Toe Game ( C++ )",
            url : "https://github.com/professorx2001/SKYBUG/blob/main/Tic-Tac-Toe.cpp",
            desc : "A console-based Tic Tac Toe game in C++ with interactive user input, reset functionality, and support for multiple rounds. Implemented features like username uniqueness, player sign-up, random symbol assignment, and alternating turns."
        },
        {
            id : 5,
            name : "Random Password Generator ( JS )",
            url : "https://randompasswordx.netlify.app/",
            desc : "A simple tool designed to create secure and unique passwords for improved online safety. It generates passwords using a combination of uppercase and lowercase letters, numbers, and special characters based on user-defined preferences like length and character types."
        },
        {
            id : 5,
            name : "To Do List ( JS )",
            url : "https://todolistplanx.netlify.app/",
            desc : "A simple application that helps users manage tasks efficiently. It allows users to add new tasks, delete completed or unwanted tasks, and ensures data persistence by storing the tasks locally on the user's device. "
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