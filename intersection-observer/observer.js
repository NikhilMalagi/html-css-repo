const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px" // When should the oberver inform (dist in the viewport)
};
const fadeInOptions = {
    threshold : 1, // Value => 0 / 1 ; Informs observer whether the whole thing should be visible when observing
    rootMargin  : "0px 0px -100px 0px"
};
// const slideInOptions = {
//     threshold : 1, // Value => 0 / 1 ; Informs observer whether the whole thing should be visible when observing
//     rootMargin  : "0px 0px -100px 0px"
// };

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    // console.log(entry.target)
    // console.log(entry.isIntersecting)
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
// sectionOneObserver.observe(header);


const fadinObserver = new IntersectionObserver(function(enteries,fadinObserver){
    enteries.forEach((entry) => {
        // console.log(entry.target)
        if(!entry.isIntersecting){ return;}
        else{
            entry.target.classList.add("appear");
            fadinObserver.unobserve(entry.target)
        }
    })
},fadeInOptions)

// const slideinObserver = new IntersectionObserver(function(enteries,slideinObserver){
//     enteries.forEach((entry) => {
//         if(!entry.isIntersecting){ return;}
//         else{
//             entry.target.classList.add("appear");
//             fadinObserver.unobserve(entry.target)
//         }
//     })
// },slideinObserver)

// fadinObserver.observe(fader)
faders.forEach((fader) => {
    fadinObserver.observe(fader)
})
sliders.forEach((slider) => {
    fadinObserver.observe(slider)
})
