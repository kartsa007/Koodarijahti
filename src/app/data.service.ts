import { Injectable } from '@angular/core';
import { EventEmitter} from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Sighting } from './sighting';

@Injectable()
export class DataService {

  speciesReady: EventEmitter<void> = new EventEmitter<void>();
  sightingsReady: EventEmitter<void> = new EventEmitter<void>();
  sightingPosted: EventEmitter<void> = new EventEmitter<void>();

  public specieses: string[] = [];
  public sightings: Sighting[] = [];

  constructor(private http: HttpClient) {
    this.getSightings();
    this.getSpecies();
  }

  getSightings() {
    this.http.get<Sighting[]>('http://localhost:8081/sightings/')
      .subscribe((sightings) => {
      console.log('getSightings');
      this.sightings = sightings;
      this.sightingsReady.emit();
    });
  }

  getSpecies() {
    this.http.get<string[]>('http://localhost:8081/species/')
      .subscribe((species) => {
        console.log('getSpecies');
        this.specieses = species;
        this.speciesReady.emit();
      });
  }

  postSighting(sighting: Sighting) {
    this.http.post<Sighting>('http://localhost:8081/sightings/', sighting)
      .subscribe((s) => {
      console.log('postLocation');
      sighting.id  = s.id;
      this.sightingPosted.emit();
​​​​    });
  }

  addSighting(sighting: Sighting) {
    this.sightings.push(sighting);
    this.postSighting(sighting);
  }
}

