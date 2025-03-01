document.addEventListener("DOMContentLoaded", async () => {
    const projectList = document.getElementById("project-list");
  
    try {
      const response = await fetch("./assets/projects.json");
      const projects = await response.json();
  
      projects.forEach((project, index) => {
        const divEl = document.createElement("div");
        divEl.classList.add("pl-2");
        divEl.innerHTML = `
                  <h3 class="text-xl leading-none font-semibold">${
                    index + 1
                  }. <a href="${project.url}" target="_blank">${
          project.name
        }</a></h3>
                  <p class="p-2 leading-none sm:text-sm md:text-base lg:text-lg sm:leading-none md:leading-none lg:leading-none font-extralight">${
                    project.desc
                  }</p>
              `;
        projectList.appendChild(divEl);
      });
    } catch (error) {
      console.error("Error loading JSON:", error);
    }
  });