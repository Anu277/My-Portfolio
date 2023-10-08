const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const uiElements = [
    document.querySelector('.ui'),
    document.querySelector('.ui-2'),
    document.querySelector('.ui-3'),
    document.querySelector('.ui-4'),
    document.querySelector('.ui-5')
];
uiElements[0].style.display="inline-block";
uiElements[1].style.display="none";
uiElements[2].style.display="none";
uiElements[3].style.display="none";
uiElements[4].style.display="none";

let interval = null;

function roller(ui) {
    let iteration = 0;

    clearInterval(interval);
    ui.style.display="inline-block";
    interval = setInterval(() => {
        ui.innerText = ui.dataset.value
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return ui.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iteration >= ui.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1;
    }, 30);
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fun() {
    setInterval(async function () {
        let i=0;
        while(1){
            console.log(`Updating UI ${i + 1}`);
            roller(uiElements[i]);
            await sleep(3000);
            uiElements[0].style.display="none";
            uiElements[1].style.display="none";
            uiElements[2].style.display="none";
            uiElements[3].style.display="none";
            uiElements[4].style.display="none";
            i++;
            if(i==uiElements.length)
            i=0;
        }
    }, 3000);
}
// Call the fun() function to start the animation
fun();

document.addEventListener('DOMContentLoaded', function () {
    // Your ScrollReveal initialization and animation code here
    // Initialize ScrollReveal
        const sr = ScrollReveal({
        origin: 'bottom', // Animation starting point (from the bottom)
        distance: '40px', // Distance the element moves during the animation
        duration: 1000,   // Animation duration in milliseconds
        // reset: true,      // Reset animation on reveal so it triggers each time the element is scrolled to
    });
  
  // Define the elements to be animated
    const revealElements = document.querySelectorAll('.reveal');
  
  // Apply the animation to each element
    revealElements.forEach((element) => {
        sr.reveal(element);
    });
  });
  

  