console.log('DaFuck')
document.addEventListener('DOMContentLoaded', function()  {
    makingGallery();
});
function makingGallery() {
    const gallery = document.querySelector('.gallery-img');
    for(let i = 1; i <= 16; i++) {
        const img = document.createElement('IMG');
        img.src = `shield/img/${i}.jpg`;
        img.dataset.imgID = i;
        img.onclick = showPics;
        img.classList.add('size')
        console.log(img);
        const list = document.createElement('LI');
        list.appendChild(img);
        gallery.appendChild(list);
    }
};
function showPics(e) {
    console.log(e.target.dataset);
    const id = parseInt(e.target.dataset.imgID);
    console.log(id);
    //Generate IMG
    const img = document.createElement('IMG');
        img.src = `shield/img/${id}.jpg`;
        console.log(img);
        const overlay = document.createElement('DIV');
        overlay.appendChild(img);
        overlay.classList.add('overlay');
        //Button
        const close = document.createElement('P');
        close.textContent = 'X';
        close.classList.add('close-button');
        overlay.appendChild(close);
        //close when it is push
        close.onclick = function  () {
            overlay.remove();
        };
        overlay.onclick = function() {
            overlay.remove();
        }
        //Add to HTMl
        const body = document.querySelector('body');
        body.appendChild(overlay);  
};


document.addEventListener('DOMContentLoaded', function () {
    ScrollNav();
});
function ScrollNav() {
    const links = document.querySelectorAll('.nav a');
    console.log(links);
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log(e.target.attributes.href.value);
            const selection = document.querySelector(e.target.attributes.href.value);
            selection.scrollIntoView({
                behavior: 'smooth',
            });
        })
        console.log(link);
    })
}