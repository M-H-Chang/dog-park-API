export default class PhotoFinder {
  static async getPhoto(photoRef) {
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${process.env.API_KEY}`);
    return response.url;
  }
} 