import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the FeedbackAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback-admin',
  templateUrl: 'feedback-admin.html',
})
export class FeedbackAdminPage {

averageQualityWater=5;
averageQualityService=4;
feedbacks: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider) {
   this.feedbacks = [
            'Bread',
            'Milk',
            'Cheese',
            'Snacks',
            'Apples',
            'Bananas',
            'Peanut Butter',
            'Chocolate',
            'Avocada',
            'Vegemite',
            'Muffins',
            'Paper towels'
        ];
     this.getFeedbacks();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackAdminPage');
  }

 getFeedbacks() {
    this.restProvider.getFeedback()
    .then(data => {
      this.feedbacks = data;
      console.log(this.feedbacks);
    });
  }

}
