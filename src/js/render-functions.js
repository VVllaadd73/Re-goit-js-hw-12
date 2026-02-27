// src/js/render-functions.js

import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import { getImagesByQuery } from './pixabay-api';

let lightbox;

function nextOn() { document.querySelector('.next').classList.remove('off'); };

export function nextOff() { document.querySelector('.next').classList.add('off'); };

export function loaderOn() { document.querySelector('.loader').classList.remove('off'); };

function loaderOff() { document.querySelector('.loader').classList.add('off'); };

export function clearGallery() { document.querySelector('.gallery').innerHTML = ''; }

export function getImagesPageQuery(query, nPage, cHits) {
   getImagesByQuery(query, nPage, cHits)
      .then(data => {
         const totalPage = Math.trunc(data.totalHits / cHits);
         const images = data.hits;
         if (images.length === 0) {
            iziToast.info({
               message: 'No images found'
            });
            return;
         }

         createGallery(images);
         if (nPage <= totalPage) {
            nextOn();
         } else {
            nextOff();
            iziToast.info({
               message: 'We\'re sorry, but you\'ve reached the end of search results.'
            });
         }

         if (lightbox) {
            lightbox.refresh();
         } else {
            lightbox = new SimpleLightbox('.gallery a', {
               captionsData: 'alt',
               captionDelay: 250
            });
         }
      })

      .catch(err => console.log(err))
      .finally(() => loaderOff());
};

function createGallery(images) {
   const markup = images.map((image) => {
      return `
         <li class="cart">
            <a class="photo_link" href="${image.largeImageURL}">
               <img 
                  class="photo_image"
                  src="${image.webformatURL}"
                  alt="${image.tags}"
                  height="152px" />
            </a>
            <div class="photo_info">
               <p><b>Likes:</b> ${image.likes}</p>
               <p><b>Views:</b> ${image.views}</p>
               <p><b>Comments:</b> ${image.comments}</p>
               <p><b>Downloads:</b> ${image.downloads}</p>
            </div>
         </li>`;
   }).join('');
   document.querySelector('.gallery').insertAdjacentHTML('beforeend', markup);
};
