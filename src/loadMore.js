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
}