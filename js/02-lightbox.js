import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.innerHTML = addGalleryItems(galleryItems);

var lightbox = new SimpleLightbox('.gallery__item', {
    enableKeyboard: true,
    captionDelay: 250,
   
});

console.log(lightbox)
gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
    
    lightbox.overlay = true;
});


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
