const menu = document.getElementById('menu');
menu.addEventListener('change', (event) => {
    console.log(menu.value);
});
  
const display = document.getElementById('display');
menu.addEventListener('change', (event) => {
    display.textContent = `You selected: ${menu.value}`;
});