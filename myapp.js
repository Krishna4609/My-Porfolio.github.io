const navSlide = () => {
    const menu = document.querySelector('.menu');
    const navlists = document.querySelectorAll('.navlists li');
    const nav = document.querySelector('.navlists');

    menu.addEventListener('click',() => {
        nav.classList.toggle('navclick');

        navlists.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation= '';
            }
            else{
            link.style.animation = `navLinkFade 1s ease forwards ${index/10+0.5}s`;
            
            }
        });
    });
}

const main = () => {
    navSlide();
}

main();