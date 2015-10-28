import {IonicApp, Page, NavController, NavParams} from 'ionic/ionic';

@Page({
    templateUrl: 'app/contact-details/contact-details.html'
})

export class ContactDetailsPage {

    constructor(app:IonicApp, nav:NavController, navParams:NavParams) {
        this.nav = nav;
        // If we navigated to this page, we will have an item available as a nav param
        this.contact = navParams.get('contact');
    }

}