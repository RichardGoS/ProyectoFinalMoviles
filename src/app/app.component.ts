import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Clientes',
      url: '/clientes',
      icon: 'body'
    },
    {
      title: 'Productos',
      url: '/producto',
      icon: 'cube'
    },
    {
      title: 'Pedidos',
      url: '/pedidos',
      icon: 'paper'
    },
    {
      title: 'Tarifas',
      url: '/tarifarios',
      icon: 'pricetags'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
