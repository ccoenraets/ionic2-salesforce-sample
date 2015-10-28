import {IonicApp, Page, NavController, NavParams} from 'ionic/ionic';

import {ContactDetailsPage} from '../contact-details/contact-details';

import * as contactService from '../services/ContactService';

@Page({
    templateUrl: 'app/contact-list/contact-list.html'
})

export class ContactListPage {

    constructor(app:IonicApp, nav:NavController, navParams:NavParams) {

        this.nav = nav;

        contactService.findAll()
            .then(result => this.contacts = result.records)
            .catch(error => console.log(error));

    }

    search(event) {
        contactService.findByName(event.target.value)
            .then(result => this.contacts = result.records)
            .catch(error => console.log(error));
    }

    itemTapped(event, contact) {

        this.nav.push(ContactDetailsPage, {
            contact: contact
        });

    }
}
