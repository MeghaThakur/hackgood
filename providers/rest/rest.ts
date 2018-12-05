import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
apiUrl = 'http://192.168.43.187:8080/user';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getFeedback() {
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/getUserFeedbacksAverages/').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}

addFeedback(data) {
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+`/saveFeedback/${data.mobile}/${data.comments}/${data.service}/${data.water}`, "")
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}


getOrder() {
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/getUserOrders/').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}

}