// ================= Typing Animation =================

new Typed(".typing", {
    strings: [
        "Full Stack Developer",
        "AI Enthusiast",
        "Java Programmer",
        "Problem Solver"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
});


// ================= Scroll Progress Bar =================

window.addEventListener("scroll", () => {

    let scrollTop = document.documentElement.scrollTop;

    let height = document.documentElement.scrollHeight -
                 document.documentElement.clientHeight;

    let progress = (scrollTop / height) * 100;

    const bar = document.getElementById("progress-bar");

    if(bar){
        bar.style.width = progress + "%";
    }

});


// ================= AOS Animation =================

AOS.init({
    duration:1000,
    once:true
});


// ================= Smooth Scrolling =================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if(target){

            target.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});


// ================= Active Navbar =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");


window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 100;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link=>{

        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


// ================= Theme Toggle =================


const themeBtn = document.getElementById("themeToggle");


if(themeBtn){

    themeBtn.addEventListener("click",()=>{


        document.body.classList.toggle("light-mode");


        const icon = themeBtn.querySelector("i");


        if(document.body.classList.contains("light-mode")){


            icon.classList.remove("fa-moon");

            icon.classList.add("fa-sun");


        }

        else{


            icon.classList.remove("fa-sun");

            icon.classList.add("fa-moon");


        }


    });

}



// ================= Loader =================


window.addEventListener("load",()=>{


    const loader = document.getElementById("loader");


    if(loader){


        loader.style.opacity="0";


        setTimeout(()=>{


            loader.style.display="none";


        },500);


    }


});
// ================= Counter Animation =================


const counters = document.querySelectorAll(".counter");


counters.forEach(counter => {


    counter.innerText = "0";


    const updateCounter = () => {


        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;


        const increment = target / 100;


        if(current < target){


            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter,20);


        }
        else{

            counter.innerText = target + "+";

        }


    };


    updateCounter();


});
// ================= Back To Top =================


const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }


});


if(topBtn){

topBtn.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});

}
// ================= Custom Cursor =================


const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");


document.addEventListener("mousemove",(e)=>{


    if(cursor && follower){


        cursor.style.left = e.clientX + "px";

        cursor.style.top = e.clientY + "px";


        follower.style.left = e.clientX + "px";

        follower.style.top = e.clientY + "px";


    }


});
// ================= Mouse Particle Effect =================


const canvas = document.getElementById("particleCanvas");

if(canvas){

const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let particles = [];


window.addEventListener("resize",()=>{

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});



document.addEventListener("mousemove",(e)=>{


    for(let i=0;i<5;i++){


        particles.push({

            x:e.clientX,

            y:e.clientY,

            size:Math.random()*5+1,

            speedX:(Math.random()-0.5)*3,

            speedY:(Math.random()-0.5)*3,

            life:100

        });


    }


});



function animateParticles(){


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach((particle,index)=>{


        particle.x += particle.speedX;

        particle.y += particle.speedY;

        particle.life--;


        ctx.beginPath();

        ctx.arc(
            particle.x,
            particle.y,
            particle.size,
            0,
            Math.PI*2
        );


        ctx.fillStyle="#00d4ff";

        ctx.fill();



        if(particle.life<=0){

            particles.splice(index,1);

        }


    });



    requestAnimationFrame(animateParticles);


}


animateParticles();

}
// ================= EmailJS Contact Form =================

(function(){

    emailjs.init("wPCMtE2dP0z6sZORQ");

})();


const contactForm = document.getElementById("contactForm");


if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();


        emailjs.sendForm(
            "Akashsbf-541",
            "template_10o9q8f",
            this
        )

        .then(()=>{

            document.getElementById("formMessage").innerHTML =
            "✅ Message sent successfully!";

            contactForm.reset();

        })


        .catch((error)=>{

            document.getElementById("formMessage").innerHTML =
            "❌ Message failed!";

            console.log(error);

        });

    });

}
// ================= Project Filter =================


const filterBtns = document.querySelectorAll(".filter-btn");

const projects = document.querySelectorAll(".project-card");


filterBtns.forEach(btn=>{


    btn.addEventListener("click",()=>{


        let filter = btn.dataset.filter;


        projects.forEach(project=>{


            if(filter==="all" || project.dataset.category===filter){

                project.classList.remove("hide");

            }

            else{

                project.classList.add("hide");

            }


        });


    });


});



// ================= Project Modal =================


const modal = document.querySelector(".project-modal");

const closeModal = document.querySelector(".close-modal");

const viewBtns = document.querySelectorAll(".view-project");


viewBtns.forEach(btn=>{


    btn.addEventListener("click",()=>{


        modal.style.display="flex";


    });


});



closeModal.addEventListener("click",()=>{

    modal.style.display="none";

});
// ================= GitHub API =================

const githubUsername = "akasharpan99-prog";


fetch(`https://api.github.com/users/${githubUsername}`)

.then(response => response.json())

.then(data => {

    document.getElementById("repoCount").innerHTML =
    data.public_repos;


    document.getElementById("followers").innerHTML =
    data.followers;


    document.getElementById("following").innerHTML =
    data.following;

})

.catch(error => {

    console.log(error);

});

// ================= AI Chatbot =================


const chatBtn = document.getElementById("chatBtn");

const chatWindow = document.getElementById("chatWindow");

const closeChat = document.getElementById("closeChat");


chatBtn.onclick = ()=>{

    chatWindow.style.display="block";

};


closeChat.onclick = ()=>{

    chatWindow.style.display="none";

};



const sendBtn = document.getElementById("sendBtn");

const userInput = document.getElementById("userInput");

const chatBody = document.getElementById("chatBody");



sendBtn.onclick = ()=>{


    let msg = userInput.value.toLowerCase();


    let reply="";


    if(msg.includes("skill")){

        reply="Akash skills include Full Stack Development, Java, C++, React, Node.js and AI/ML.";

    }

    else if(msg.includes("project")){

        reply="Akash projects include Monastery360, Meditech, AI Prescription Reader and Portfolio Website.";

    }

    else if(msg.includes("education")){

        reply="Akash is a B.Tech IT student.";

    }

    else if(msg.includes("contact")){

        reply="Email: akasharpan99@gmail.com";

    }

    else{

        reply="Please ask about skills, projects, education or contact.";

    }


    chatBody.innerHTML += 
    `<p><b>You:</b> ${msg}</p>
     <p><b>AI:</b> ${reply}</p>`;


    userInput.value="";


};
//================ THREE JS BACKGROUND ================

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

camera.position.z=60;

const renderer=new THREE.WebGLRenderer({
alpha:true,
antialias:true
});

renderer.setSize(window.innerWidth,window.innerHeight);

document.getElementById("bg").appendChild(renderer.domElement);

const geometry=new THREE.BufferGeometry();

const vertices=[];

for(let i=0;i<2500;i++){

vertices.push(

(Math.random()-0.5)*220,
(Math.random()-0.5)*220,
(Math.random()-0.5)*220

);

}

geometry.setAttribute(
'position',
new THREE.Float32BufferAttribute(vertices,3)
);

const material=new THREE.PointsMaterial({

color:0x00d4ff,
size:0.8

});

const points=new THREE.Points(
geometry,
material
);

scene.add(points);

function animate(){

requestAnimationFrame(animate);

points.rotation.y+=0.0008;
points.rotation.x+=0.0004;

renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(
window.innerWidth,
window.innerHeight
);

});