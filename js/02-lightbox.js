import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryCard = document.querySelector('.gallery');
const galleryImageCard = galleryImageCardMarkup(galleryItems);

galleryCard.insertAdjacentHTML('beforeend', galleryImageCard);

function galleryImageCardMarkup(galleryItems) {
	return galleryItems
	.map(({ preview, original, description}) => {
		return `
  <a class="gallery__link" href = "${original}" >
    <img
      class="gallery__image"
      src= "${preview}"
      alt = "${description}" />
  </a>`;
	})
	.join('');
}

new SimpleLightbox('.gallery a', {
	captionDelay: 250
	captionPosition: "${description}"


})

new SimpleLightbox('.gallery a', {
	captionsData: "${description}",
	captionDelay: 250,
});
