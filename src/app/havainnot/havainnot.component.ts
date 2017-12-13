import { Component, OnInit, OnDestroy } from '@angular/core';

import { DataService } from '../data.service';
import {Sighting} from '../sighting';

@Component({
  selector: 'app-havainnot',
  templateUrl: './havainnot.component.html',
  styleUrls: ['./havainnot.component.css']
})

export class HavainnotComponent implements OnInit {

  sightings: Sighting[];
  subscription: any;
  compare: any;
  constructor(private data: DataService) {
    console.log('Havainnot constuctor');
    this.sightings = this.data.sightings;
    this.compare = this.compareDec;
  }

  ngOnInit() {
    console.log('ngInit');
    this.subscription = this.data.sightingsReady.subscribe(() => {
      console.log('sightingsReady');
      this.sightings = this.data.sightings;
    });
  }

  compareDec(s1: Sighting, s2: Sighting) {
    return (Date.parse(s1.dateTime) - Date.parse(s2.dateTime));
  }

  compareInc(s2: Sighting, s1: Sighting) {
   return (Date.parse(s1.dateTime) - Date.parse(s2.dateTime));
  }

  changeSortOrder() {
    this.compare =
      (this.compare === this.compareInc) ? this.compareDec : this.compareInc;
    this.sightings.sort(this.compare);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
