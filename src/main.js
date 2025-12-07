import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api.js";
import { clearGallery, showLoader, hideLoader, createGallery, showLoadButton, hideLoadButton } from "./js/render-functions.js";

let page = 1;
let query = "";
const perPage = 15;
const form = document.querySelector(".form");
const loadButton = document.querySelector(".load-button");
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputValue = document.querySelector("input").value.trim();
    if (inputValue === "") {
        return;
    }
    page = 1;
    query = inputValue;

    clearGallery();
    hideLoadButton();
    showLoader();

    try {
        const data = await getImagesByQuery(query, page);
        if (data.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
            hideLoader();
            form.reset();
            return;
        }

        createGallery(data.hits);
        hideLoader();

        if (data.totalHits > perPage) {
            showLoadButton();
        }

    } catch (error) {
        console.error(error);
        iziToast.error({
            message: 'Something went wrong! Please try again later.',
            position: 'topRight',
        });
        hideLoader();
    } finally {
        form.reset();
    }
});

loadButton.addEventListener("click", async () => {
    page += 1;
    hideLoadButton();
    showLoader();

    try {
        const data = await getImagesByQuery(query, page);

        createGallery(data.hits);
        hideLoader();

        const card = document.querySelector(".gallery-item");
        if (card) {
            const cardHeight = card.getBoundingClientRect().height;
            window.scrollBy({
                top: cardHeight * 2,
                behavior: "smooth",
            });
        }
        const totalPages = Math.ceil(data.totalHits / perPage);
        if (page >= totalPages) {
            hideLoadButton();
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
            });
        } else {
            showLoadButton();
        }

    } catch (error) {
        console.error(error);
        iziToast.error({
            message: 'Error loading more images',
            position: 'topRight',
        });
        hideLoader();
    }
});