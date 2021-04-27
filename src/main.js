import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ParkFinder from '../src/js/finder.js';

function getParksList(park) {
  let htmlForParksList = "";
  park.results.forEach(newPark => {
    htmlForParksList += "<li>" + newPark.name + "</li>";
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

