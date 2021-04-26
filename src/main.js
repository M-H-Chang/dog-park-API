import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ParkFinder from './src/js/finder.js';
console.log($);
console.log(ParkFinder);

$('#submit').on('click', (event) => {
  event.preventDefault();
  let zipcode = $('#zipcode').val();

});