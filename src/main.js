import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ParkFinder from '../src/js/finder.js';
import PhotoFinder from '../src/js/photos.js';



function getParksList(park) {
  async function displayPhoto(photo) {
    let response = await PhotoFinder.getPhoto(photo);
    return response;
  } 
  let htmlForParksList = "";
  park.results.forEach(newPark => {
    if (newPark.photos) {
      htmlForParksList += (`<div class="card container">
                            <h3>${newPark.name}</h3>
                            <li>${newPark.vicinity}</li>
                            <li>Rating: ${newPark.rating} stars</li>
                            <li id="photoRef">${newPark.photos[0].photo_reference}</li>
                          </div>`);
      let photo = newPark.photos[0].photo_reference;
      displayPhoto(photo);
      $('#photo-div').html(`<img src="${(displayPhoto(newPark.photos[0].photo_reference))}"/>`);

      console.log(displayPhoto(newPark.photos[0].photo_reference));
                        
    } else {
      htmlForParksList += (`<div class="card container">
                            <h3>${newPark.name}</h3>
                            <li>${newPark.vicinity}</li>
                            <li>Rating: ${newPark.rating} stars</li>
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

//https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_reference}=${process.env.API_KEY}


// https://developers.google.com/maps/documentation/places/web-service/photos