import { Injectable } from '@angular/core';
import {Llibre} from '../model/Llibre';

@Injectable({
  providedIn: 'root'
})
export class NomgenericService {
  text: string = "";
  private llibre: Llibre;

  constructor() {
    this.llibre = new Llibre("Vagabond","Samurais","Seinen")
  }
  setTextDiv(text: string): void {
    this.text = text;
  }

  getTextDiv(): string {
    return this.text;
  }
  getLlibre(): Llibre {
    return this.llibre;
  }
}
