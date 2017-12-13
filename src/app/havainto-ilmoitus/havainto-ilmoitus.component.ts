import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-havainto-ilmoitus',
  templateUrl: './havainto-ilmoitus.component.html',
  styleUrls: ['./havainto-ilmoitus.component.css']
})
export class HavaintoIlmoitusComponent implements OnInit {

  specieses: string[];
  subscription: any;
  description: string;
  species: string;
  cnt: string;
  dateTime: string;
  date: string;
  time: string;
  errorTxt = '';
  constructor(private data: DataService, private router: Router) {
    this.specieses = this.data.specieses;
  }

  ngOnInit() {
    this.subscription = this.data.speciesReady.subscribe(() => {
      console.log('sightingsReady');
      this.specieses = this.data.specieses;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  input() {
    this.errorTxt = '';
  }

  checkData(): boolean {
    if (!+this.cnt) {
      this.errorTxt = 'Pitäisi ainakin yksi ankka nähdä';
      return false;
    }
    if (!this.description) {
      this.errorTxt = 'Anna jotain kuvausta näkemästäsi';
      return false;
    }
    if (!this.species) {
      this.errorTxt = 'Minkä ankkalajin näit';
      return false;
    }
    let isoDate = Date.parse(this.date + 'T' + this.time);

    if (!isoDate) {
      this.errorTxt = 'Virhe päivämäärässä tai kellonajassa';
      return false;
    }
    this.dateTime = new Date(isoDate).toISOString().slice(0,19) + 'Z';
    return true;
  }

  save(e: any) {
    console.log('button pressed');
    if (this.checkData()) {
      this.data.addSighting({
        description: this.description,
        cnt: this.cnt,
        species: this.species,
        dateTime: this.dateTime
      });
      this.router.navigateByUrl('/');
    }
  }

}
