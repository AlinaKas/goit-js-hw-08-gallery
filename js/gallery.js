// Разбей задание на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
// Реализация делегирования на галерее ul.js - gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data - action= "close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image.Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.




// const galleryRef = document.querySelector('.js-gallery');
// const lightbox = document.querySelector('.js-lightbox');
// // const lightboxOverlay = document.querySelector('.lightbox__overlay');
// const lightboxImg = document.querySelector('.lightbox__image');
// const lightboxBtn = document.querySelector('button[data-action="close-lightbox"]');
// // let currentItem;


// galleryRef.innerHTML = galleryItems.map( ({ preview, original, description }) => {
//   return `
//   <li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="${original}"
//   >
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </li>`;
// }).join(' ');


// const linkEls = document.querySelectorAll('a');
// linkEls.forEach(function (linkEl) {
//   linkEl.onclick = function(e) {
//     e.preventDefault();
//   }
// });

// galleryEl.addEventListener('click', openModal);
// function openModal (e) {
//   lightbox.classList.add('is-open');
//   lightboxImg.src = e.target.dataset.source;
// };


// lightboxBtn.addEventListener('click', closeModal);
// function closeModal () {
//   lightbox.classList.remove('is-open');
//   lightboxImg.src = '';
// }







// // === OPEN MODAL ===
// const openModal = () => {
//   modal.classList.add('is-open');
//   overlay.addEventListener('click', onOverlayClick);
//   window.addEventListener('keydown', onBtnPress);
// };
// // === CLOSE MODAL ===
// const closeModal = () => {
//   modal.classList.remove('is-open');
//   largeImage.src = '#';
//   window.removeEventListener('keydown', onBtnPress);
//   overlay.removeEventListener('click', onOverlayClick);
// };

// const onGalleryClick = event => {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }

//   let imageRef = event.target;
//   let largeImageURL = imageRef.dataset.source;
//   largeImage.src = largeImageURL;
//   currentIndex = +imageRef.dataset.index;
//   openModal();
// };

// const onOverlayClick = event =>
//     event.currentTarget === event.target ? closeModal() : '';

// const onBtnPress = event => {
//   if (event.code === 'Escape') {
//     closeModal();
//   } else if (event.code === 'ArrowLeft') {
//     currentIndex -= 1;
//     currentIndex < 0 ? (currentIndex = galleryItems.length - 1) : '';
//     largeImage.src = galleryItems[currentIndex].original;
//   } else if (event.code === 'ArrowRight') {
//     currentIndex += 1;
//     currentIndex > galleryItems.length - 1 ? (currentIndex = 0) : '';
//     largeImage.src = galleryItems[currentIndex].original;
//   }
// };

// renderGallery(galleryItems);
// gallery.addEventListener('click', onGalleryClick);
// closeBtn.addEventListener('click', closeModal);

