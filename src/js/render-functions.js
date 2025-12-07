import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let galleryLightbox;
export function createGallery(images) {
    const ulElem = document.querySelector("ul.gallery");
    const markup = images.map((image) => `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${image.webformatURL}"
                    data-source="${image.largeImageURL}"
                    alt="${image.tags}"
                />
            </a>
            <ul class="image-info">
                <li class="image-info-item">
                    <p class="info-p">Likes</p>
                    <span class="info-span">${image.likes}</span>
                </li>
                <li class="image-info-item">
                    <p class="info-p">Views</p>
                    <span class="info-span">${image.views}</span>
                </li>
                <li class="image-info-item">
                    <p class="info-p">Comments</p>
                    <span class="info-span">${image.comments}</span>
                </li>
                <li class="image-info-item">
                    <p class="info-p">Downloads</p>
                    <span class="info-span">${image.downloads}</span>
                </li>
            </ul>
        </li>`
    ).join('');
    ulElem.insertAdjacentHTML('beforeend', markup);
    if (!galleryLightbox) {
        galleryLightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
        });
    } else {
        galleryLightbox.refresh();
    }
}

export function clearGallery() {
    const ulElem = document.querySelector(".gallery");
    if (ulElem) {
        ulElem.innerHTML = "";
    }
}

export function showLoader() {
    const loader = document.querySelector('.js-loader');
    loader.classList.add("loader");
    console.log(loader);
}

export function hideLoader() {
    const loader = document.querySelector('.js-loader');
    loader.classList.remove("loader");
}

export function showLoadButton() {
    const LoadButton = document.querySelector(".load-button");
    LoadButton.style = "display: block";
}

export function hideLoadButton() {
    const LoadButton = document.querySelector(".load-button");
    LoadButton.style = "display: none";
}