
function myFunction() {
const element = document.querySelector('.drop-items');
const closeres = document.querySelector('.close-responsive');

  element.classList.toggle("drop-open");
  closeres.classList.toggle("close-respon");
}

function closeRes() {
    const element = document.querySelector('.drop-items');
    const closeres = document.querySelector('.close-responsive');

    element.classList.remove("drop-open")
    closeres.classList.remove("close-respon");
}