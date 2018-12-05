import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DashboardPage} from '../dashboard/dashboard';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
	
comments 
  mobile
  service=4
  water=3

  feedback={mobile:'',comments:'',service:0,water : 0};

  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider) {

  this.feedback.mobile='8989';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }
  
addFeedback() {
  this.restProvider.addFeedback(this.feedback).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });
   this.navCtrl.push(DashboardPage);
}

}
