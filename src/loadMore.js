import { fetchPictures } from "./index";
import { refs } from "./index";
import { endOfPictures } from "./index";
import { fetchData } from "./index";
import { page } from "./index";

let resultLength; 
let totalHits;

refs.loadMoreBtn.addEventListener('click', loadMore);

function loadMore(e) {
    // const resultLength = data.hits.length;
    // totalHits = data.totalHits;
    // if (resultLength >= totalHits) {
    //     return endOfPictures;
    // }
    fetchPictures(e);
    SmoothScroll();
    resultLength = fetchData.hits;
    totalHits = fetchData.totalHits;
    const numberOfPages = Math.round(totalHits / 4);
    console.log(page);
    console.log(numberOfPages);
    if (page >= numberOfPages) {
        endOfPictures();
    }
}

function SmoothScroll() {
    const { height: cardHeight } = document
  .querySelector(".gallery")
  .firstElementChild.getBoundingClientRect();

    window.scrollBy({
    top: cardHeight * 2,
    behavior: "smooth",
    })
};

function endOfPictures() {
    refs.loadMoreBtn.style.display = "none";
    Notify.info("We're sorry, but you've reached the end of search results")
    
  }
