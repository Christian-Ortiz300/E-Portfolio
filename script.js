/*Active Navbar Link*/
let sections = document.querySelectorAll('section'); 
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.array.forEach(element => {
        let top = window.scrollY; 
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight; 
        let id = sec.getAttribute('id'); 

        if(top >= offset && top < offset + height){ 

        };
    });
}; 


/*Sticky navbar */
window.onscroll = () => {
let header = document.querySelector('.header'); 

header.classList.toggle('sticky', window.scrollY > 100); 
};

/*Dark light mode*/ 
let darkModeIcon = document.querySelector('#darkMode-icon'); 

darkModeIcon.onclick = () => { 
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode'); 

}