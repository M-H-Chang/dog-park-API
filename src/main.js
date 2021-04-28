import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ParkFinder from '../src/js/finder.js';
// import PhotoFinder from '../src/js/photos.js';



function getParksList(park) {
  // async function displayPhoto(photoRef) {
  //   let photo = await PhotoFinder.getPhoto(photoRef); 
  // //   if (photo.) {
  // //     console.log(photo);
  // //     return photo;
  // //   }
  // } 
  // PhotoFinder.getPhoto(newPark.photos[0].photo_reference);
  let htmlForParksList = "";
  park.results.forEach(newPark => {
    if (newPark.photos) {
      // let photo = displayPhoto(newPark.photos[0].photo_reference);
      htmlForParksList += (`<div class="card">
                                <div class="card-body">
                                  <h3 class="card-title">${newPark.name}</h3>
                                  <li class="card-text">${newPark.vicinity}</li>
                                  <li class="card-text">Rating: ${newPark.rating} stars</li>
                                </div>
                              </div>`);
      // displayPhoto(photo);
      //console.log(displayPhoto(newPark.photos[0].photo_reference));
      //console.log(newPark.photos[0].photo_reference);
                        
    } else {
      htmlForParksList += (`<div class="card">
                                <div class="card-body">
                                  <h3 class="card-title">${newPark.name}</h3>
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