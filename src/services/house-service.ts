import axios from "axios";

export default class HouseService {
  basePath: string;
  constructor() {
    this.basePath = `https://604629dcf0c6dc00177b16e1.mockapi.io`;
  }
  async getHouses() {
    const houseList = await (await axios.get(`${this.basePath}/home`)).data;
    return houseList;
  }
}
