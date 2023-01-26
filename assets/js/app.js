import '../scss/app.scss';

// require.context('../images', false);
require.context('../fonts', false);

const iconElement = document.getElementById('js--menu-icon');
const catagory = document.getElementsByClassName('catagory');
iconElement.addEventListener('click', function() {
    catagory[0].classList.toggle('catagory-show');
});
