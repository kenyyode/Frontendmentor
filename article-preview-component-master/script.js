
const mainShare = document.getElementById("target"); // Main share button
const activeShare = document.getElementById("target2"); // Second share button
const main = document.getElementById("profile"); // Div containing profile info
const mainChild = document.getElementById("profile-child"); // Div containing other info

const mediaQuery = window.matchMedia('(min-width: 768px)');

// Function to toggle elements based on screen width
function toggleElements() {
    if (mediaQuery.matches) {
        mainChild.classList.toggle("active-show");
    } else {
        main.classList.toggle("hidden");
        mainChild.classList.toggle("active-show");
    }
}

// Assign event listeners once
mainShare.addEventListener("click", toggleElements);

activeShare.addEventListener("click", () => {
    if (!mediaQuery.matches) {
        main.classList.toggle("hidden");
        mainChild.classList.toggle("active-show");
    }
});


// Media query listener to handle any setup or teardown logic if needed
mediaQuery.addEventListener('change', () => {
    // Example: Reset classes on screen size change if necessary
    if (mediaQuery.matches) {
        main.classList.remove("hidden");
    }
});


/* const mainShare = document.getElementById("target") /// this gets the main share button 
const activeShare = document.getElementById("target2") // this gets the second share button 
const main = document.getElementById("profile") // this gets the div containig the profile info
const mainChild = document.getElementById("profile-child") // this gets the div contaning the other info v

const mediaQuery = window.matchMedia('(min-width: 600px)'); // remove this line if any abnormal behavior 

mediaQuery.addEventListener('change', (event) => {
    if (event.matches) {
        mainShare.addEventListener("click", () => {
            mainChild.classList.toggle("active-show")
    })} else {
        mainShare.addEventListener("click", () => {
            main.classList.toggle("hidden")
            mainChild.classList.toggle("active-show")
        })
        
        activeShare.addEventListener("click", () => {
            main.classList.toggle("hidden")
            mainChild.classList.toggle("active-show")
        })
    }})

/*
mainShare.addEventListener("click", () => {
    mainChild.classList.toggle("active-show")
}) */


/*
mainShare.addEventListener("click", () => {
    main.classList.toggle("hidden")
    mainChild.classList.toggle("active-show")
})

activeShare.addEventListener("click", () => {
    main.classList.toggle("hidden")
    mainChild.classList.toggle("active-show")
})  */

/* share.forEach((element) => {
        element.addEventListener("click", () => {
            defaultContainer.classList.toggle("hidden");
            activeContainer.classList.toggle("active-show");
        });
    });


// const mediaQuerry = matchMedia("(max-width: 720px)")

// mediaQuerry.addEventListener("change", (media, matches) => {
    
})


*/


