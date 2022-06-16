// const query = document.querySelector('.searchInput').value;
// let page = 1;
// const BASE_URL = 'https://pixabay.com/api/';


//    function fetchPictures(e) {
//     e.preventDefault();

//         const options = {
//             headers:{
//                 key: '28076639-0feb76057bbd5c0e620bbf417',
//             }
//         }

//         const url = `https://pixabay.com/api?q=${query}&per_page=20&page=${this.page}`;

//         return fetch(url, options)
//             .then(r => r.json())
//             .then(data => {
//                 this.incrementPage();
//                 return data.json();
//             })
//             .then(this.renderMarkup(pictures))
//             .catch(error => console.log(error))       
//     }

   
//    function renderMarkup(pictures) {
//             const markup = pictures.reduce(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
//                     return acc + `
//                     <li class="gallery__item">
//                         <a class="gallery__item" href="${largeImageURL}">
//                             <img class="gallery__image" src="${webformatURL}" alt="${tags}" />
//                         </a>
//                     </li>`
//             }, '')
//         const list = document.querySelector('.pictures-list')
//         list.insertAdjacentHTML('afterbegin', markup);
//     };
    


// function incrementPage() {
//         page += 1;
//     }

// function resetPage() {
//         page = 1;
// }

   