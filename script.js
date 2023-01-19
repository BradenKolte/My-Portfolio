const activePage = window.location.pathname;
const navLink = document.querySelectorAll('div a')
navLink.forEach(link =>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})