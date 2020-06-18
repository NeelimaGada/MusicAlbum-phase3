import axios, { AxiosAdapter } from 'axios';
export default class TitlesServer {
  static createTitleObj(title_id: number, title_name: string, lyrisist: number,
    singer: number, director: number): any {
    let params: any = {
      title_id: title_id,
      title_name: title_name,
      lyrisist: lyrisist,
      singer: singer,
      director: director
    }
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: 'http://localhost:4000/createTitle', params
      })
        .then((response) => {
          resolve(response.data);
        
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }
  static getTitlesData(): any {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: 'http://localhost:4000/getAllTitles'
      })
        .then((response: any) => {
          console.log(response.data);
          resolve(response.data);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }
}

