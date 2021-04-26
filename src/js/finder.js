export default class ParkFinder {
  static async getPark(zip) {
    const dataSetURL = `https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=${zip}&facet=state&facet=geopoint`;
    const dataSet = await fetch(dataSetURL).then(response => response.json()); 
    this.dataSet = JSON.stringify(dataSet.records[0].fields.geopoint);
    this.dataSet = dataSet.slice(1, -1);
    
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${dataSet}&rankby=distance&keyword=dogpark&key=${process.env.API_KEY}`;
    const latLong = await fetch(url, this.dataSet);
    return await latLong.json();
  }
}

// const geo = dataSet.map(dataSet => dataSet.geopoint),
//   geoPoint = {method: 'POST', body:JSON.stringify({geo})};

