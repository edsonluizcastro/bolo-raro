const actionCta = document.getElementById('cta');
const actionCta2 = document.getElementById('cta2');

actionCta.addEventListener('click', () => {
  window.location.href = "https://api.whatsapp.com/send?phone=46695078"
});

actionCta2.addEventListener('click', () => {
  window.location.href = "https://api.whatsapp.com/send?phone=46695078"
});

async function displayButton(){
  // alterar somente o numero dos minutos
  // const minute = 150;
  // const timeInMiliseconds = await convertMinutesToMiliseconds(minute);

  setTimeout(() => {
    actionCta.style.display = "flex";
    actionCta2.style.display = "flex";
  }, 205000);
}

// async function convertMinutesToMiliseconds(minutes){
//   const seconds = minutes * 150;

//   const miliseconds = seconds * 150;

//   return miliseconds;
// }

displayButton();

// right click
document.addEventListener('contextmenu', event => event.preventDefault());

// f12
document.onkeypress = function (event) {
  event = (event || window.event);
  if (event.keyCode == 123) {
    return false;
  }
}
document.onmousedown = function (event) {
  event = (event || window.event);
  if (event.keyCode == 123) {
    return false;
  }
}
document.onkeydown = function (event) {
  event = (event || window.event);
  if (event.keyCode == 123) {
    return false;
  }
}

document.onkeydown = function (event) {
  var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();

  if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
    return false;
  }
}

document.onkeydown = function (event) {
  if (event.keyCode == 123) { // Prevent F12
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
    return false;
  }
}
