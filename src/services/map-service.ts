import axios from "axios";

export default class MapService {
  getLocation(lng: string, ltd: string) {
    let locationImg = `https://static.maps.2gis.com/1.0?s=500x500&pt=${lng},${ltd}&z=10`;
    return locationImg;
  }

  async getDescByCoor(coordinates: number[]) {
    console.log(coordinates);
    let result = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${coordinates[0]}+${coordinates[1]}&key=777ac731a76347b48f848d5b07226ab4`
    );

    return result.data;
  }
}
