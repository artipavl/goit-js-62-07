import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.innerHTML = addGalleryItems(galleryItems);

const options = {
  enableKeyboard: true,
  captionDelay: 250,
};

const lightBox = new SimpleLightbox(".gallery__item", options);

gallery.addEventListener("click", openLightBox)
  
function openLightBox(event) {
  lightBox.overlay = true;
}

function addGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" title ="${description}" />
                </a>
            `;
    })
    .join("");
}
