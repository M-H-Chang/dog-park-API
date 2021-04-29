import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ParkFinder from '../src/js/finder.js';

function getParksList(park) {
  let htmlForParksList = "";
  park.results.forEach(newPark => {
    if (newPark.photos) {
      htmlForParksList += (`<div class="card">
      <div class="card-body">
      <h3 class="card-header">${newPark.name}</h3>
      <li class="card-text">${newPark.vicinity}</li>
      <li class="card-text">Rating: ${newPark.rating} stars</li>
      </div>
      </div>`);
    } else {
      htmlForParksList += (`<div class="card">
      <div class="card-body">
      <h3 class="card-header">${newPark.name}</h3>
      <li class="card-text">${newPark.vicinity}</li>
      <li class="card-text">Rating: ${newPark.rating} stars</li>
      </div>
      </div>`);
    }
  });
  $("#results").html(htmlForParksList);
}

$('#submit').on('click', async (event) => {
  event.preventDefault();
  let zip = $('#zipcode').val();
  const park = await ParkFinder.getPark(zip);
  
  console.log(park);
  getParksList(park);
});