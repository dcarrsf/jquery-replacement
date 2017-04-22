import $ from './$.js';

// READY
$.ready((event) => {
  const body = $('body');
  if (body) {
    console.log(event);
  }
});