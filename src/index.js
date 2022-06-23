import SimpleLightbox from "simplelightbox";
import * as basicLightbox from 'basiclightbox'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
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

  export { refs };
  export { fetchPictures };
  export { fetchData };
  export { page };

let fetchData;
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '28076639-0feb76057bbd5c0e620bbf417';
let page = 1;


refs.loadMoreBtn.style.display = "none";

  refs.form.addEventListener('submit', fetchPictures);
  refs.searchInput.addEventListener('input', onInput);

  function onInput() {
    refs.gallery.innerHTML = "";
    refs.loadMoreBtn.style.display = "none"; 
  }

async function fetchPictures(e) {
    e.preventDefault();
    if(refs.searchInput.value === "") {
      refs.gallery.innerHTML = "";
      page = 1;
      refs.loadMoreBtn.style.display = "none";
      return;
    };
  
    try {
      const result = await axios.get(`${BASE_URL}`, {
        params: {
          key: API_KEY,
          q: refs.searchInput.value,
          image_type: "photo",
          orientation: "horizontal",
          safesearch: true,
          per_page: 4,
          page: page,
        }

      })     

      console.log(result.data.hits);
      if(result.data.hits.length === 0) {
        Notify.failure("Sorry, there are no images matching your search query. Please try again.");
        return;
      }
      
        const data = await result.data.hits;

        fetchData = result.data;
          createGalleryItemMarkup(data);
        page += 1;
        refs.loadMoreBtn.style.display = "block";
    
    } catch (error) {
      console.log(error);
      Notify.failure(`❌ Please enter existing entity `);
    } 
}

let gallery = new SimpleLightbox('.gallery .gallery__item', { fadeSpeed: 500, captionDelay: 250, captionsData: "alt", scrollZoom: true, });
gallery.on('show.simplelightbox', fetchPictures);

function createGalleryItemMarkup(hits) {
  const markup = hits.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads, id}) => {
    return `<div class="gallery__item">
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
  refs.gallery.insertAdjacentHTML('beforeend', markup);
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

