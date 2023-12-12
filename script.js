const body = document.querySelector("body"),
        sidenav = body.querySelector(".sidenav"),
        toggle = body.querySelector(".toggle"),
        modeSwitch = body.querySelector(".toggleswitch"),
        modeText = body.querySelector(".mode-text");

        toggle.addEventListener("click",()=>{
            sidenav.classList.toggle("close")
        });

        modeSwitch.addEventListener("click",()=>{
            body.classList.toggle("night")
        });