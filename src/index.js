import menuList from './templates/list-gallery.hbs';
import elements from './menu.json';

const createGallery = document.querySelector('.js-menu');
const cardMarcup = createCardMarcup(elements);

function createCardMarcup(elements) {
    return menuList(elements);
}
createGallery.insertAdjacentHTML('beforeend', cardMarcup);


// import menuCardsTpl from "./templates/gallerygrid.hbs";

// import items from './menu.json';


// const menuContainer = document.querySelector('.js-menu');
// const menuMarkup = createMenuCardsMarkup(items);



// menuContainer.insertAdjacentHTML('beforeend', menuMarkup);



// function createMenuCardsMarkup(items) {
// return menuCardsTpl(items);
// }