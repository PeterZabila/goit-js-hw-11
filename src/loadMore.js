import { fetchPictures } from "./index";
import { refs } from "./index";
import { endOfPictures } from "./index";

refs.loadMoreBtn.addEventListener('click', loadMore);

function loadMore(e) {
    // const resultLength = data.hits.length;
    // totalHits = data.totalHits;
    // if (resultLength >= totalHits) {
    //     return endOfPictures;
    // }
    fetchPictures(e);
    SmoothScroll();
}

function SmoothScroll() {
    const { height: cardHeight } = document
  .querySelector(".gallery")
  .firstElementChild.getBoundingClientRect();

    window.scrollBy({
    top: cardHeight * 2,
    behavior: "smooth",
    });
}