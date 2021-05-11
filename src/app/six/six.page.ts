import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'; // link browser plugin

@Component({
  selector: 'app-six',
  templateUrl: './six.page.html',
  styleUrls: ['./six.page.scss'],
})

export class SixPage {

  constructor(private CF: InAppBrowser, private AF: InAppBrowser, private SF: InAppBrowser) { }

  CrossFit() {
    const browser = this.CF.create('https://www.crossfitgalway.com/');
};

  ActiveFitness() {
  const browser = this.AF.create('https://activefitness.ie/');
};

SnapFitness() {
  const browser = this.SF.create('https://www.snapfitness.com/ie/gyms/galway/');
};

}
