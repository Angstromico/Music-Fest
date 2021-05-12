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