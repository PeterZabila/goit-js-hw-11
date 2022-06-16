// import { galleryItems } from './gallery-items.js';
// // Change code below this line
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

// const axios = require('axios').default;



// 
// async function getPic() {
//   const query = document.querySelector('.searchInput').value;
//     try {
//       const response = await axios.get(`https://pixabay.com/api/?key=28076639-0feb76057bbd5c0e620bbf417&q=${query}&page=1&per_page=20`);
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }



// const fetchPostsBtn = document.querySelector("#searchBtn");

// const galleryEl = document.querySelector(".gallery");

// fetchPostsBtn.addEventListener("click", () => {
//   fetchPosts()
//     .then((posts) => renderPosts(posts))
//     .catch((error) => console.log(error));
// });

// ===================================================================================================
// const form = document.querySelector('.search-form');
// const searchBtn = document.querySelector('#searchBtn')

// form.addEventListener('submit', fetchPosts);


// function fetchPosts() {
//   const query = document.querySelector('[name="searchQuery"]').value;
//   const url = 'https://pixabay.com/api/';

//   return fetch(`https://pixabay.com/api/?key=28076639-0feb76057bbd5c0e620bbf417&q=${query}&page=1&per_page=20`).then(
//     // return fetch(url, params)
  
//       (response) => {
//         if (!response.ok) {
//           throw new Error(response.status);
//         }
//         console.log("Found");
//         return response.json();
//       }
//     );
//   }
// ======================================================================================================

  // const params = new URLSearchParams({
  //   page: 1,
  //   q: query,
  //   per_page: 20,
  //   key: 280766390-feb76057bbd5c0e620bbf417,
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  // });


  
  // addGalleryItems(galleryItems);
  
  // new SimpleLightbox('.gallery a', { fadeSpeed: 500, captionDelay: 250, captionsData: "alt", scrollZoom: true, });
  
  
// }


import { searchImages } from 'pixabay-api';

const refs = {
  form: document.querySelector('#search-form'),
  searchBtn: document.querySelector('#searchBtn'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]')
}

const searchQuery = document.querySelector('.searchInput').value;
const AUTH_KEY = '28076639-0feb76057bbd5c0e620bbf417';

const options = {
  q: searchQuery,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  
};

searchImages(AUTH_KEY, "cat", options).then((r) => console.log(r));

function fetchSearch() {
  searchImages(AUTH_KEY, `${searchQuery}`, options).then((r) => console.log(r));
}

refs.searchBtn.addEventListener('click', fetchSearch)

// const query = document.querySelector('.searchInput').value;
// let page = 1;


// const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&per_page=20&page=1`;
// const options = {
//   headers:{
//       key: '28076639-0feb76057bbd5c0e620bbf417',
//   }
// }

// function handleSearchBtn() {
//   e.preventDefault();
//  return fetch(url, options)
//     .then(r => r.json())
//     .then(data => console.log(data))
//     .catch(er => console.log(er))
// }


// refs.form.addEventListener('submit', handleSearchBtn);





// refs.form.addEventListener('submit', onSearch);
// refs.loadMoreBtn.addEventListener('click', onLoadMore);

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

