// Dark Mode
let isDarkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.getElementById('dark_mode_switcher');
const buttons = document.getElementsByClassName('button');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.add('darkmode');
  }
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('darkmode');
  }
  localStorage.setItem('darkMode', null);
};

if (isDarkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  isDarkMode = localStorage.getItem('darkMode');
  console.log(darkModeToggle.classList);
  if (isDarkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
  console.log(darkModeToggle.classList);
});
