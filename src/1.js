const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  
  const bodyContainer = document.querySelector('body');
  const onInputRef = document.querySelector('.theme-switch__toggle');
  const savedTheme = localStorage.getItem('my-theme'); 
  
  if (savedTheme === Theme.DARK) {
    bodyContainer.classList.add(Theme.DARK);
    onInputRef.checked = true;
    localStorage.setItem('my-theme', bodyContainer.classList.value);
  } else
  {
  bodyContainer.classList.add(Theme.LIGHT);
  localStorage.setItem('my-theme', bodyContainer.classList.value); };
  
  onInputRef.addEventListener('change', onInputChange);
  
  function onInputChange() {
  
    if (onInputRef.checked) {
      bodyContainer.classList.add(Theme.DARK);
      bodyContainer.classList.remove(Theme.LIGHT);
      localStorage.setItem('my-theme', bodyContainer.classList.value);
    
  
          
    } else {
      bodyContainer.classList.remove(Theme.DARK);
      bodyContainer.classList.add(Theme.LIGHT);
      localStorage.setItem('my-theme', bodyContainer.classList.value);
      
     }
   }