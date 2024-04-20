// header scroll
document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');

    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
})



// accordion
const accordionItemHeaders = document.querySelectorAll('.accordion__item__header');

accordionItemHeaders.forEach(accordionItemHeader => {
    
    accordionItemHeader.addEventListener('click', event => {
        accordionItemHeader.classList.toggle('active');
        

        const accordionItemBody = accordionItemHeader.nextElementSibling;

        if (accordionItemHeader.classList.contains('active')) {
            accordionItemBody.style.display = "block";
            
        } else {
            accordionItemBody.style.display = "none";
        }
    });
});


