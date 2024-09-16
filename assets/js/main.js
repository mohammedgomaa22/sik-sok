// ********** Sidebar Toggler **********
const sidebarToggler = () => {
    const sidebar = document.querySelector("nav .sidebar");
    
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("toggler")) {
            sidebar.classList.toggle("-translate-x-[100%]");
        } else {
            sidebar.classList.add("-translate-x-[100%]");
        }
    });
};
sidebarToggler();
// ***************************************************

// Chose nav active
const navActive = () => {
    const links = document.querySelectorAll("[nav-active]");
    links.forEach((link) => {
        link.addEventListener("click", () => {
            // Delete Class
            links.forEach((link) => { link.classList.remove("nav-active"); });
            // Add Class
            link.classList.add("nav-active");
        })
    })
};
navActive();
// ***************************************************

const openVideo = () => {
    const model = document.getElementById("model");
    const getVideo = document.querySelectorAll("[data-getVideo]");
    // const setVideo = document.querySelector("[data-setVideo]");
    document.querySelector("[data-close]").addEventListener("click", () => {
        model.style.display = "none";
    });

    getVideo.forEach((vid) => {
        vid.addEventListener("click", () => {
            // setVideo.src = "";
            model.style.display = "flex";
        })
    })
    
};
openVideo();
