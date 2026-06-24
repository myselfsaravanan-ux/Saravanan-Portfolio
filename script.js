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
