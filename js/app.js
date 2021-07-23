
const galleryRef = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
// const lightboxOverlay = document.querySelector('.lightbox__overlay');
const lightboxImg = document.querySelector('.lightbox__image');
const lightboxBtn = document.querySelector('button[data-action="close-lightbox"]');
// let currentItem;


galleryRef.innerHTML = galleryItems.map( ({ preview, original, description }) => {
  return `
  <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
}).join(' ');


const linkEls = document.querySelectorAll('a');
linkEls.forEach(function (linkEl) {
  linkEl.onclick = function(e) {
    e.preventDefault();
  }
});

galleryEl.addEventListener('click', openModal);
function openModal (e) {
  lightbox.classList.add('is-open');
  lightboxImg.src = e.target.dataset.source;
};


lightboxBtn.addEventListener('click', closeModal);
function closeModal () {
  lightbox.classList.remove('is-open');
  lightboxImg.src = '';
}

