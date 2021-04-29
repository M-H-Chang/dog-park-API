export default class ParkFinder {
  static async getPark(zip) {
    const dataSetURL = `https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=${zip}&facet=state&facet=geopoint`;
    const dataSet = await fetch(dataSetURL).then(response => response.json()); 
    this.dataSet = [dataSet.records[0].fields.geopoint[0], dataSet.records[0].fields.geopoint[1]];

    const geo = this.dataSet,
      geoPoint = {method: 'POST', body:JSON.stringify({geo}) };
    this.geoPoint = geoPoint.body.slice(8, -2);

    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.geoPoint}&rankby=distance&keyword=dogpark&key=${process.env.API_KEY}`;
    const latLong = await fetch(url, this.dataSet);
    return await latLong.json();
  }
  
  // static async getPhoto() {
  //   static async getPark(zip)
  //   const photoRef = getPark(zip).newPark.photos[0].photo_reference;
  //   const response = await fetch(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${process.env.API_KEY}`);
  //   // console.log(response.url);
  //   return response.url;
  // }
}
// const photoURL = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_reference}=${process.env.API_KEY}`;

// const geo = dataSet.map(dataSet => dataSet.geopoint),
//   geoPoint = {method: 'POST', body:JSON.stringify({geo})};

