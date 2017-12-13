import { Component, OnInit, Input } from '@angular/core';
import { Sighting } from '../sighting';

@Component({
  selector: 'app-havainto',
  templateUrl: './havainto.component.html',
  styleUrls: ['./havainto.component.css']
})
export class HavaintoComponent implements OnInit {

  @Input() sighting: Sighting;

  constructor() {
  }

  ngOnInit() {
  }

}
