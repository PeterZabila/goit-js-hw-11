// import { galleryItems } from './gallery-items.js';
// // Change code below this line
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

// const axios = require('axios').default;

import axios from 'axios';

const refs = {
  form: document.querySelector('#search-form'),
  searchBtn: document.querySelector('#searchBtn'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]')
}


// const query = document.querySelector('.searchInput').value;
// let page = 1;
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '28076639-0feb76057bbd5c0e620bbf417';


refs.form.addEventListener('submit', fetchPictures);

async function fetchPictures(e) {
    e.preventDefault();

    try {
      const result = await axios.get(`${BASE_URL}`, {
        params: {
          key: API_KEY,
          q: e.target.value,
          image_type: "photo",
          orientation: "horizontal",
          safesearch: true,
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


function createGalleryItemMarkup(hits) {
  return hits.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
    const card = document.createElement('div');
    card.classList.add('.photo-card');
    return card.innerHTML = `
    <div class="img-wrapper"><img class="img" src="${largeImageURL}", alt="${tags}" /></div>
    <div class="info">
      <p class="info-item">
        <b>Likes:<br>${likes}</b>
      </p>
      <p class="info-item">
        <b>Likes:<br>${views}</b>
      </p>
      <p class="info-item">
        <b>Likes:<br>${comments}</b>
      </p>
      <p class="info-item">
        <b>Likes:<br>${downloads}</b>
      </p>
    </div>`;
    
}).join("");

}


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

