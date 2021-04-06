import axios from "axios";
import House from "../interfaces/house";

export default class HouseService {
  basePath: string;
  constructor() {
    this.basePath = `https://604629dcf0c6dc00177b16e1.mockapi.io`;
  }
  async getHouses(): Promise<House[]> {
    const houseList = await (await axios.get(`${this.basePath}/home`)).data;
    return houseList;
  }

  async addHouse(house: any) {
    const result = await (await axios.post(`${this.basePath}/home`, house));
    return result;
  }
}
