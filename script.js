/* =====================================
   MOBILE NAVIGATION
===================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if(menuToggle){

    menuToggle.addEventListener("click", () => {

        if(navLinks.style.display === "flex"){

            navLinks.style.display = "none";

        }else{

            navLinks.style.display = "flex";

            navLinks.style.flexDirection = "column";

            navLinks.style.position = "absolute";

            navLinks.style.top = "70px";

            navLinks.style.right = "20px";

            navLinks.style.padding = "1rem";

            navLinks.style.borderRadius = "12px";

            navLinks.style.background = "#111827";

        }

    });

}


/* =====================================
   FADE UP ANIMATIONS
===================================== */

const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.classList.add("fade-up");
});

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{
    threshold:0.15
}

);

sections.forEach(section=>{
    observer.observe(section);
});
/* =====================================
   HERO CANVAS ANIMATION
===================================== */

const canvas = document.getElementById("heroCanvas");

if(canvas){

    const ctx = canvas.getContext("2d");

    function resizeCanvas(){

        canvas.width = window.innerWidth;

        canvas.height = window.innerHeight;

    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    const particles = [];

    for(let i=0;i<60;i++){

        particles.push({

            x:Math.random()*canvas.width,

            y:Math.random()*canvas.height,

            r:Math.random()*2+1,

            dx:(Math.random()-0.5)*0.5,

            dy:(Math.random()-0.5)*0.5

        });

    }

    function drawGrid(){

        ctx.strokeStyle = "rgba(0,212,255,0.04)";
        ctx.lineWidth = 1;

        const gridSize = 50;

        for(let x=0;x<canvas.width;x+=gridSize){

            ctx.beginPath();
            ctx.moveTo(x,0);
            ctx.lineTo(x,canvas.height);
            ctx.stroke();

        }

        for(let y=0;y<canvas.height;y+=gridSize){

            ctx.beginPath();
            ctx.moveTo(0,y);
            ctx.lineTo(canvas.width,y);
            ctx.stroke();

        }

    }

    function drawParticles(){

        particles.forEach(p=>{

            p.x += p.dx;
            p.y += p.dy;

            if(p.x < 0 || p.x > canvas.width)
                p.dx *= -1;

            if(p.y < 0 || p.y > canvas.height)
                p.dy *= -1;

            ctx.beginPath();

            ctx.arc(
                p.x,
                p.y,
                p.r,
                0,
                Math.PI*2
            );

            ctx.fillStyle="rgba(0,212,255,0.4)";
            ctx.fill();

        });

    }

    let waveOffset = 0;

    function drawWave(){

        ctx.beginPath();

        ctx.strokeStyle = "rgba(0,212,255,0.25)";

        ctx.lineWidth = 2;

        for(let x=0;x<canvas.width;x++){

            const y =
                canvas.height/2 +
                Math.sin((x+waveOffset)*0.01)*30;

            if(x===0){

                ctx.moveTo(x,y);

            }else{

                ctx.lineTo(x,y);

            }

        }

        ctx.stroke();

        waveOffset += 2;

    }

    function animate(){

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        drawGrid();

        drawParticles();

        drawWave();

        requestAnimationFrame(
            animate
        );

    }

    animate();

}
