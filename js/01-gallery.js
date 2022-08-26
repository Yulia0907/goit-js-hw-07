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
<div class="gallery__item">
  <a class="gallery__link" href = "${original}" >
    <img
      class="gallery__image"
      src= "${preview}"
      data-source = "${original}"
      alt = "${description}" />
  </a>
</div>`;
	})
	.join('');
}


galleryCard.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
		return
	}

    const selectedImage = event.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src = "${selectedImage}" width="800" height="600">
`)

    instance.show()
    
    galleryCard.addEventListener('keydown', event => {
		if (event.key === 'Escape') {
			instance.close()
		}
	})
})