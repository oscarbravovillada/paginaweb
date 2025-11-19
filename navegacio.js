
const images = document.querySelectorAll('.image-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
const nextBtn = document.querySelector('.lightbox .next');
const prevBtn = document.querySelector('.lightbox .prev');

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

// Cerrar lightbox al hacer click fuera de la imagen
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});
// Tancar lightbox amb la tecla ESC

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") { // si premem ESC
    lightbox.style.display = 'none';
  }
});


const fechaInput = document.getElementById('fecha');
const hoy = new Date();
const yyyy = hoy.getFullYear();
let mm = hoy.getMonth() + 1; 
let dd = hoy.getDate();

if(dd < 10) dd = '0' + dd;
if(mm < 10) mm = '0' + mm;

fechaInput.value = `${yyyy}-${mm}-${dd}`;
