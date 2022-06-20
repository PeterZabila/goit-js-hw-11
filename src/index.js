import SimpleLightbox from "simplelightbox";
import * as basicLightbox from 'basiclightbox'
import "simplelightbox/dist/simple-lightbox.min.css";
import "basiclightbox/dist/basicLightbox.min.css";


import axios from 'axios';

const refs = {
  form: document.querySelector('#search-form'),
  searchBtn: document.querySelector('#searchBtn'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
  searchInput: document.querySelector('.searchInput'),
}

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '28076639-0feb76057bbd5c0e620bbf417';
let page = 1;

refs.form.addEventListener('submit', fetchPictures);

async function fetchPictures(e) {
    e.preventDefault();

    try {
      const result = await axios.get(`${BASE_URL}`, {
        params: {
          key: API_KEY,
          q: refs.searchInput.value,
          image_type: "photo",
          orientation: "horizontal",
          safesearch: true,
          per_page: 20,
          page: page,
        }

      })     
      console.log(result);
      
        const data = await result.data.hits;
      console.log(data);
      
       const markup = await createGalleryItemMarkup(data);
       refs.gallery.insertAdjacentHTML('afterbegin', markup);
      //  refs.loadMoreBtn.classList.toggle("hidden");
    } catch (error) {
      console.log(error);
    } 
}

new SimpleLightbox('.gallery .gallery__item', { fadeSpeed: 500, captionDelay: 250, captionsData: "alt", scrollZoom: true, });

function createGalleryItemMarkup(hits) {
  return hits.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {

    return refs.gallery.innerHTML = `
    <div class="gallery__item">
      <a class="gallery__link" href="${largeImageURL}"><img class="gallery__image" src="${webformatURL}", alt="${tags}" data-source="${largeImageURL}"/></a>
      <div class="info">
        <p class="info-item">
          <b>Likes:<br>${likes}</b>
        </p>
        <p class="info-item">
          <b>Views:<br>${views}</b>
        </p>
        <p class="info-item">
          <b>Comments:<br>${comments}</b>
        </p>
        <p class="info-item">
          <b>Downloads:<br>${downloads}</b>
        </p>
      </div>
    </div>
  `;
    
  }).join("");
};

refs.gallery.addEventListener('click', onClickModal);

function onClickModal(e) {
    e.preventDefault();
    if(e.target.nodeName !== "IMG") {
        return;
    }

   const instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`,
    { onShow: () => {window.addEventListener('keydown', onEsc) }},)

    instance.show();

    function onEsc(e) {
        if (e.key === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', onEsc);
        }
    }
};




// ====================================================

// import { searchImages } from 'pixabay-api';

// searchImages(AUTH_KEY, "cat", options).then((r) => console.log(r));

// async function fetchSearch() {
//  const pictures = await axios.get(searchImages(AUTH_KEY, `${searchQuery}`, options))
//   console.log(pictures);
// }

// refs.searchBtn.addEventListener('click', fetchSearch)

// ====================================================

// function onSearch(e) {
//   e.preventDefault;

//   query = e.currentTarget.elements.searchQuery.value;
//  resetPage();
//   fetchPictures().then(pictures => {
//     clearPicturesContainer();
//     appendPicturesMarkup();
//   });
// }

// function onLoadMore() {
//   fetchPictures().then(appendPicturesMarkup);
// }

// function appendPicturesMarkup(pictures) {
//   refs.gallery.insertAdjacentElement('beforebegin', renderMarkup(pictures))
// }

// function clearPicturesContainer() {
//   refs.gallery.innerHTML = "";
// }

