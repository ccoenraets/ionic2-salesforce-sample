import {Page, NavController} from 'ionic/ionic';


@Page({
    templateUrl: 'app/welcome/welcome.html'
})

export class WelcomePage {
    constructor(nav:NavController) {
        this.nav = nav;
    }

}
