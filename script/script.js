

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 5,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
function toggleTab(tab) {
    document.getElementById('mountain1-container').style.display = 'none';
    document.getElementById('mountain2-container').style.display = 'none';

    document.getElementById('tab-mountain1').classList.remove('active');
    document.getElementById('tab-mountain2').classList.remove('active');

    if (tab === 'mountain1') {
        document.getElementById('mountain1-container').style.display = 'block';
        document.getElementById('tab-mountain1').classList.add('active');
    } else if (tab === 'mountain2') {
        document.getElementById('mountain2-container').style.display = 'block';
        document.getElementById('tab-mountain2').classList.add('active');
    }
}

window.onscroll = function() {
    var wrapper = document.querySelector('.Wrapper');
    var stickyHeader = document.querySelector('.sticky-header');
    var wrapperHeight = wrapper.offsetHeight;

    if (window.pageYOffset >= wrapperHeight) {
        stickyHeader.classList.add('sticky'); 
    } else {
        stickyHeader.classList.remove('sticky'); 
    }
};

