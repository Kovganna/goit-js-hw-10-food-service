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
  const bodyContainer = document.querySelector('body');
  const colorTheme = document.querySelector('.theme-switch__toggle');
    
  colorTheme.addEventListener('change', toClickThemeDark);

 function toClickThemeDark() {
   const check = colorTheme.checked;
   if (check) {    
     bodyContainer.classList.add(Theme.DARK);
     bodyContainer.classList.remove(Theme.LIGHT);
     
   } else {
    bodyContainer.classList.add(Theme.LIGHT);
    bodyContainer.classList.remove(Theme.DARK);
    
   }
  };

  colorTheme.addEventListener('change', localStorageInput);

  function localStorageInput() {
    const check = colorTheme.checked;
    if(check) {
      localStorage.setItem('theme', Theme.DARK);
    } else {
      localStorage.removeItem('theme');
      localStorage.setItem('theme', Theme.LIGHT);
    }
  }
  const toTheme = localStorage.getItem('theme');
  if (toTheme === Theme.DARK) {
    bodyContainer.classList.add(Theme.DARK);
    colorTheme.checked = true;
  } 