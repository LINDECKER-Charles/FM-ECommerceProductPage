const articles = document.querySelectorAll('article');
console.log(articles);

articles.forEach(article => {
    const figure = article.querySelector('figure');
    const p = article.querySelector('p');
    const imgs = figure.querySelectorAll('img');
    /* console.log(figure, p, imgs); */
    imgs.forEach(img => {
        img.addEventListener('click', () => {
            imgs[0].classList.toggle('hidden');
            imgs[1].classList.toggle('hidden');
            p.classList.toggle('accordion-body-open');
        });
    });
    
});