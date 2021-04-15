import $ from 'jquery';
import './style.scss';

const interval = 1000;
let num = 0;
setInterval(() => {
  num += interval / 1000;
  $('#main').html(`You've been on this page for ${num} seconds.`);
}, 1000);
