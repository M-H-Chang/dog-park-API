export default class ParkFinder {
  static async getPark(zip) {
    const dataSetURL = `https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=${zip}&facet=state&facet=geopoint`;
    const dataSet = await fetch(dataSetURL).then(response => response.json()); 
    this.dataSet = [dataSet.records[0].fields.geopoint[0], dataSet.records[0].fields.geopoint[1]];

    const geo = this.dataSet,
      geoPoint = {method: 'POST', body:JSON.stringify({geo}) };
    this.geoPoint = geoPoint.body.slice(8, -2);
    console.log(this.geoPoint);

    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.geoPoint}&rankby=distance&keyword=dogpark&key=${process.env.API_KEY}`;
    const latLong = await fetch(url, this.dataSet);
    return await latLong.json();
  }
}

// const geo = dataSet.map(dataSet => dataSet.geopoint),
//   geoPoint = {method: 'POST', body:JSON.stringify({geo})};

