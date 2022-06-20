import { fetchPictures } from "./index";
import { refs } from "./index";

refs.loadMoreBtn.addEventListener('click', loadMore);
console.log(refs.loadMoreBtn)

function loadMore(e) {
    fetchPictures(e);
}