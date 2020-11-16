const toggleButton = document.querySelector(".darkmode-btn");
const body = document.querySelector("body");

toggleButton.addEventListener("click", toggle);
function toggle(){

    toggleButton.classList.toggle("active");

    if (toggleButton.classList.contains("active")){
        body.classList.add("dark-theme");
    }

    else {
        body.classList.remove("dark-theme");
    }
}


