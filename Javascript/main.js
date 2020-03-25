window.addEventListener('DOMContentLoaded', () => {

    const arrowDown = document.querySelector('.section__about-arrowIcon');
    const btnMain = document.querySelector('.main__btn');
    const arrowUp = document.querySelector('.arrow__up-icon');
    const secPro = document.querySelector('.section__project-box');
    const navArea = document.querySelector('#navbar');


    const slideDown = () => {
        secPro.scrollIntoView();
    }
    arrowDown.addEventListener('click', slideDown);


    const toProject = () => {
        secPro.scrollIntoView();
    }
    btnMain.addEventListener('click', toProject);


    const toMain = () => {
        navArea.scrollIntoView();
    }
    arrowUp.addEventListener('click', toMain);

    const spinner = document.querySelector('.spinner__box');

    setTimeout(function () {

        spinner.style.display = 'none';

    }, 1400);

});