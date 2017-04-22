
import $ from './lib/$.js';
import '../sass/main.scss';

// READY
$.ready((event) => {
  const body = $('body');
  if (body) {
    console.log(event);
  }
});