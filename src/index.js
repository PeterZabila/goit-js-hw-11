import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

function addGalleryItems (galleryItems) {
   const pictures = galleryItems.reduce((acc, {preview, original, description}) => {
        return acc + `
        <li class="gallery__item">
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`


    }, '')

    gallery.insertAdjacentHTML('afterbegin', pictures);
};

addGalleryItems(galleryItems);

new SimpleLightbox('.gallery a', { fadeSpeed: 500, captionDelay: 250, captionsData: "alt", scrollZoom: true, });


async function getUser() {
    try {
      const response = await axios.get('/user?ID=12345');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }