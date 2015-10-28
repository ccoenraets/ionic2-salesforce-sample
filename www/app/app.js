import {App, IonicApp, Platform} from 'ionic/ionic';

import * as force from 'forcejs';

import {ContactListPage} from './contact-list/contact-list';
import {WelcomePage} from './welcome/welcome';


@App({
    templateUrl: 'app/app.html'
})

class MyApp {

    constructor(app:IonicApp, platform:Platform) {

        // set up our app
        this.app = app;
        this.platform = platform;
        this.initializeApp();

        // set our app's pages
        this.pages = [
            {title: 'Welcome', component: WelcomePage},
            {title: 'Contacts', component: ContactListPage}
        ];

        // make ContactListPage the root (or first) page
        this.rootPage = WelcomePage;
    }

    initializeApp() {
        this.platform.ready().then(() => {
            console.log('Platform ready');

            force.init({
                proxyURL: "https://dev-cors-proxy.herokuapp.com/"
            });
            force.login();


            // The platform is now ready. Note: if this callback fails to fire, follow
            // the Troubleshooting guide for a number of possible solutions:
            //
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //
            // First, let's hide the keyboard accessory bar (only works natively) since
            // that's a better default:
            //
            //
            // For example, we might change the StatusBar color. This one below is
            // good for light backgrounds and dark text;
            StatusBar.styleDefault();



        });
    }

    openPage(page) {
        // close the menu when clicking a link from the menu
        this.app.getComponent('menu').close();
        // navigate to the new page if it is not the current page
        let nav = this.app.getComponent('nav');
        nav.setRoot(page.component);
    }
}
