import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

orders:any;
i=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider) {
   this.getOrders();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

getOrders() {
    this.restProvider.getOrder()
    .then(data => {
      this.orders = data;
      console.log(this.orders);
    });
  }

}
