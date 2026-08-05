// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        menuBtn.innerHTML = navLinks.classList.contains("active")
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });
}


// ==============================
// TYPING EFFECT
// ==============================

if (document.getElementById("typing")) {

    new Typed("#typing", {

        strings: [
            "Full Stack Developer",
            "Java Developer",
            "AI Enthusiast",
            "Problem Solver"
        ],

        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1500,
        loop: true

    });

}


// ==============================
// LOADER
// ==============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";
        loader.style.transition = "0.5s";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});


// ==============================
// THEME TOGGLE
// ==============================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    if (localStorage.getItem("theme") === "light") {

        document.body.classList.add("light");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {

            localStorage.setItem("theme", "light");

            themeBtn.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "dark");

            themeBtn.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        }

    });

}


// ==============================
// STICKY NAVBAR
// ==============================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});


// ==============================
// ACTIVE NAV LINK
// ==============================

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            current = section.id;

        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==============================
// SMOOTH SCROLL
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ==============================
// SCROLL TO TOP
// ==============================

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ==============================
// SCROLL PROGRESS BAR
// ==============================

window.addEventListener("scroll", () => {

    const progress =
        document.getElementById("progressBar");

    if (!progress) return;

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    progress.style.width =
        (scrollTop / scrollHeight) * 100 + "%";

});


// ==============================
// FADE ANIMATION
// ==============================

const fadeObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    fadeObserver.observe(section);

});


// ==============================
// ANIMATED COUNTER
// ==============================

const counters =
document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target =
        +counter.dataset.target;

    let count = 0;

    const update = () => {

        const increment =
            Math.ceil(target / 50);

        if (count < target) {

            count += increment;

            if (count > target) {

                count = target;

            }

            counter.innerText = count;

            setTimeout(update, 30);

        } else {

            counter.innerText =
                target + "+";

        }

    };

    update();

};

const counterObserver =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});
const canvas = document.getElementById("bgCanvas");

const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);


const renderer = new THREE.WebGLRenderer({
    canvas:canvas,
    alpha:true
});


renderer.setSize(
    window.innerWidth,
    window.innerHeight
);



camera.position.z = 5;



// Particles

const particlesGeometry = new THREE.BufferGeometry();

const particlesCount = 1500;


const positions = new Float32Array(
    particlesCount * 3
);


for(let i=0;i<particlesCount*3;i++){

    positions[i]=(Math.random()-0.5)*20;

}


particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
        positions,
        3
    )
);



const particlesMaterial = new THREE.PointsMaterial({

    size:0.03,

    color:0x00d4ff

});



const particles = new THREE.Points(
    particlesGeometry,
    particlesMaterial
);


scene.add(particles);



// Mouse movement

let mouseX=0;
let mouseY=0;


document.addEventListener(
"mousemove",
(event)=>{

mouseX =
(event.clientX/window.innerWidth)-0.5;


mouseY =
(event.clientY/window.innerHeight)-0.5;

});



// Animation

function animate(){

requestAnimationFrame(animate);


particles.rotation.y +=0.0015;

particles.rotation.x +=0.0008;


camera.position.x +=
(mouseX*2-camera.position.x)*0.02;


camera.position.y +=
(-mouseY*2-camera.position.y)*0.02;



renderer.render(
scene,
camera
);

}


animate();



// Responsive

window.addEventListener(
"resize",
()=>{

camera.aspect =
window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();


renderer.setSize(
window.innerWidth,
window.innerHeight
);

});
// ==========================
// CUSTOM CURSOR
// ==========================

const cursor=document.querySelector(".cursor");
const dot=document.querySelector(".cursor-dot");


document.addEventListener(
"mousemove",
(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";


dot.style.left=e.clientX+"px";
dot.style.top=e.clientY+"px";


});
// =====================
// AKASH AI CHATBOT
// =====================


const chatBtn=document.getElementById("chatBtn");

const chatBox=document.getElementById("chatBox");

const closeChat=document.getElementById("closeChat");


chatBtn.onclick=()=>{

chatBox.classList.toggle("active");

}


closeChat.onclick=()=>{

chatBox.classList.remove("active");

}



document.getElementById("sendBtn").onclick=()=>{


let input=document.getElementById("userInput");

let msg=input.value;


let body=document.getElementById("chatBody");


body.innerHTML+=
`
<p><b>You:</b> ${msg}</p>
`;



let reply="";


if(msg.toLowerCase().includes("skill")){

reply=
"I am a Full Stack Developer skilled in Java, React, Node.js, AI and Machine Learning.";

}

else if(msg.toLowerCase().includes("project")){

reply=
"My projects include AI Prescription Reader, Monastery360, Medical Shop Management System and Portfolio.";

}

else if(msg.toLowerCase().includes("contact")){

reply=
"You can contact Akash through LinkedIn, GitHub or email.";

}

else{

reply=
"You can ask about my skills, projects, internship or experience.";

}



body.innerHTML+=
`
<p><b>Akash AI:</b> ${reply}</p>
`;


input.value="";


body.scrollTop=body.scrollHeight;


}