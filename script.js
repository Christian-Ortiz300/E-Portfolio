/*Active Navbar Link*/
let sections = document.querySelector('section'); 
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.array.forEach(element => {
        
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