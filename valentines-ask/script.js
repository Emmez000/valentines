// Elements

const envelope = document.getElementById("envelope-contaner");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Open envelope on click
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);

    });

//Making the Yes btn grow
let yesScale = 1;
yesBtn.style.position = "relative"
yesBtn.style.transformOrigin = "center";
yesBtn.style.transition = "transform 0.2s ease";

noBtn.addEventListener("click", () => {
    yesScale += 2;

    if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";   
        yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }else {
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }
});

// Yes btn click
yesBtn.addEventListener("click", () => {
    title.textContent = "I KNEW IT! 😎❤️";
    catImg.src = "cat_dance.gif ";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});