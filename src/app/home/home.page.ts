import { Component, ViewChild } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonAccordionGroup) accordionGroup!: IonAccordionGroup;

  constructor() { }

  closeAccordion() {
    this.accordionGroup.value = '';
  }
  toggleSection() {
    this.accordionGroup.value = 'pulsar';
  }
}
