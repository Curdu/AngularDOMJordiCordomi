import {Component, OnInit} from '@angular/core';
import {NomgenericService} from '../nomgeneric.service';
import {Llibre} from '../../model/Llibre';

@Component({
  selector: 'app-segon',
  imports: [],
  templateUrl: './segon.component.html',
  styleUrl: './segon.component.css'
})
export class SegonComponent implements OnInit {

  service: NomgenericService;
  divHTML! : HTMLElement;
  llibre: Llibre;
  constructor(s: NomgenericService) {
    this.service = s;
    this.llibre = s.getLlibre()
  }

  ngOnInit(): void {
    this.divHTML = document.getElementById('segon')!;
    this.divHTML.innerHTML = this.service.getTextDiv();
  }



}
