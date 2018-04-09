import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-landing-subheader',
  templateUrl: './subheader.component.html'
})
export class SubHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  buyEgret() {
    window.open('https://themeforest.net/item/egret-angular-4-material-design-admin-template/20161805?ref=mh_rafi');
  }
  getNGLanding() {
    window.open('https://mailchi.mp/8a4f990ad7b3/angular-landing-free-download');
  }
}
