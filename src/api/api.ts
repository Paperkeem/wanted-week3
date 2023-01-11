import axios from 'axios';

export default class JsonApi {
  httpClient;
  
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'http://localhost:4000',
    })
  }  

  async getAllData() {
    return this.httpClient
      .get(`sick`)
      .then((res) => res.data);
  }
}

