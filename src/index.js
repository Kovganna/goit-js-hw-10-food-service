import menuList from './templates/list-gallery.hbs';
import elements from './menu.json';

const createGallery = document.querySelector('.js-menu');
const cardMarcup = createCardMarcup(elements);

function createCardMarcup(elements) {
    return menuList(elements);
}
createGallery.insertAdjacentHTML('beforeend', cardMarcup);

// // изменение фона

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
  const bodyContainer = document.queryCommandEnabled('body');
  const colorTheme = document.querySelector('.theme-switch__toggle');
  const newTheme = localStorage.getItem('new-theme');

  // bodyContainer.classList.add(
  //   localStorage.getItem("theme") ? localStorage.getItem("theme") : theme.LIGHT
  // );
 
   if (newTheme === Theme.DARK) {
    bodyContainer.classList.add(Theme.DARK);
     colorTheme.checked = true;
     localStorage.setItem('new-theme', bodyContainer.classList.value);
  } else {
    bodyContainer.classList.add(Theme.LIGHT);
      localStorage.setItem('new-theme', bodyContainer.classList.value);
   };
   
   colorTheme.addEventListener('click', bodyContainerChange);
   
   function bodyContainerChange(colorTheme) {
    if (colorTheme.checked) {
      toggleTheme(Theme.DARK, Theme.LIGHT);
      localStorage.setItem('new-theme', bodyContainer.classList.value);
    
    } else {
      toggleTheme(Theme.LIGHT, Theme.DARK);
      localStorage.setItem('new-theme', bodyContainer.classList.value);
    }
   };

function toggleTheme(add, remove) {
  bodyContainer.classList.replace(remove, add);
}