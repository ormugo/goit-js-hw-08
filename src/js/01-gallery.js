import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';

const galleryMarkUp = document.querySelector('.gallery');

const galleryEl = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>`
  )
  .join('');

galleryMarkUp.insertAdjacentHTML('beforeend', galleryEl);

const lightbox = new SimpleLightbox('.gallery__item a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 0,
});

galleryMarkUp.addEventListener('click', onImgClick);

function onImgClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  lightbox.open();
}