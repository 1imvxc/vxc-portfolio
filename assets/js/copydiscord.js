const discordItem = document.querySelector('.social-item');
const copiedText = discordItem.querySelector('.copied-text');
const discordIcon = discordItem.querySelector('.discord-icon');

discordIcon.addEventListener('click', (e) => {
  e.preventDefault();
  navigator.clipboard.writeText('imvxc'); // copy your username

  copiedText.style.opacity = 1;           // show label
  setTimeout(() => {
    copiedText.style.opacity = 0;         // hide after 1.5s
  }, 1500);
});