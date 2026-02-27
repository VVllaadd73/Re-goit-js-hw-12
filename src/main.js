// src/main.js

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { loaderOn, nextOff, getImagesPageQuery, clearGallery } from './js/render-functions';

let query;
let nPage = 1;
const cHits = 15;

document.querySelector('.form').addEventListener('submit', onSubmit);
document.querySelector('.next').addEventListener('click', onNext);

function onSubmit(event) {
   event.preventDefault();

   query = document.querySelector('.input').value.trim();
   document.querySelector('.input').value = '';

   if (!query) {
      iziToast.warning({
         title: 'Warning',
         message: 'Please enter a search query.'
      });
      return;
   };

   loaderOn();

   clearGallery();

   getImagesPageQuery(query, nPage, cHits);
};

function onNext(event) {
   event.preventDefault();

   nextOff();
   loaderOn();

   nPage++;

   getImagesPageQuery(query, nPage, cHits);
};
