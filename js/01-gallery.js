import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.innerHTML = addGalleryItems(galleryItems);

gallery.addEventListener("click", openImgBasicLightbox);

function openImgBasicLightbox(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const options = {
    onShow: () => {
      window.addEventListener("keydown", onLightboxKeydown);
    },
    onClose: () => {
      window.removeEventListener("keydown", onLightboxKeydown);
    },
  };

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">`,
    options
  );

  instance.show();

  function onLightboxKeydown(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}

function addGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
