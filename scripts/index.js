document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {height: 800, indicators: false});

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});