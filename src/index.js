// import { galleryItems } from './gallery-items.js';
// // Change code below this line
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

// const axios = require('axios').default;



const form = document.querySelector('.search-form');
const searchBtn = document.querySelector('#searchBtn')

form.addEventListener('submit', fetchPosts);

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

function fetchPosts() {
  const query = document.querySelector('[name="searchQuery"]').value;
  const url = 'https://pixabay.com/api/';

  // const params = new URLSearchParams({
  //   page: 1,
  //   q: query,
  //   per_page: 20,
  //   key: 280766390-feb76057bbd5c0e620bbf417,
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  // });

  return fetch(`https://pixabay.com/api/?key=28076639-0feb76057bbd5c0e620bbf417&q=${query}&page=1&per_page=20`).then(
  // return fetch(url, params)


    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      console.log("Found");
      return response.json();
    }
  );
}

// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p class="post-body">${body}</p>
//         </li>`;
//     })
//     .join("");
//   userList.innerHTML = markup;


// function addGalleryItems (galleryItems) {
  //    const pictures = galleryItems.reduce((acc, {preview, original, description}) => {
  //         return acc + `
  //         <li class="gallery__item">
  //             <a class="gallery__item" href="${original}">
  //                 <img class="gallery__image" src="${preview}" alt="${description}" />
  //             </a>
  //         </li>`
  
  
  //     }, '')
  
  //     gallery.insertAdjacentHTML('afterbegin', pictures);
  // };
  
  // addGalleryItems(galleryItems);
  
  // new SimpleLightbox('.gallery a', { fadeSpeed: 500, captionDelay: 250, captionsData: "alt", scrollZoom: true, });
  
  
// }