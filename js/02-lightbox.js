import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryCard = document.querySelector('.gallery')
const items = []

galleryItems.forEach(element => {
	const galleryItem = document.createElement('a')
	galleryItem.classList.add('gallery__item');
	galleryItem.href = element.original
	const galleryImage = document.createElement('img')
    galleryImage.classList.add('gallery__image');
    galleryImage.src = element.preview;
    galleryImage.alt = element.description;

	galleryItem.append(galleryImage)
	items.push(galleryItem)
})

galleryCard.append(...items)