import { fetchPictures } from "./index";
import { refs } from "./index";
import { endOfPictures } from "./index";
import { fetchData } from "./index";
import { page } from "./index";

let resultLength; 
let totalHits;

refs.loadMoreBtn.addEventListener('click', loadMore);

function loadMore(e) {
    totalHits = fetchData.totalHits;
    const numberOfPages = Math.round(totalHits / 4);
    
    if (page >= numberOfPages) {
        endOfPictures();
    }
   
    fetchPictures(e);
   
    // resultLength = fetchData.hits;
   
   
    console.log(page);
    // console.log(numberOfPages);
    // SmoothScroll();
    
}

function endOfPictures() {
    refs.loadMoreBtn.style.display = "none";
    Notify.info("We're sorry, but you've reached the end of search results")
    
}

// function SmoothScroll() {
//     const { height: cardHeight } = document.querySelector(".gallery").firstElementChild.getBoundingClientRect();

//     window.scrollBy({
//     top: cardHeight * 2,
//     behavior: "smooth",
//     })
// };
