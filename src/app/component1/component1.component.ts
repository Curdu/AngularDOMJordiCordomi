import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {yellowSubmarine, changeSize, countWords} from './funcions.js';
import {NomgenericService} from '../nomgeneric.service';


@Component({
  selector: 'app-component1',
  imports: [],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component implements OnInit {
  titol : String;
  text: String;
  titolHTML!: HTMLElement;
  textHTML!: HTMLElement;
  urlHTML!: HTMLElement;
  servei: NomgenericService;

  constructor(s : NomgenericService) {
    this.servei = s;
    this.titol = "Patata"
    this.text = "AngularDOMJordiCordomi";
  }
  ngOnInit(): void{
    this.iniciarElementsDOM();
    this.urlHTML.innerText = document.URL
    document.body.style.backgroundImage = "url(assets/PhotoFunia-1733226657.jpg)"

    this.toMajuscules()

    yellowSubmarine("titol")
    changeSize("taula")
    countWords(document.getElementById("text"))
    this.servei.setTextDiv(document.getElementById("patata")!.innerText)
  }

  toMajuscules(): void{
    this.titolHTML.innerHTML = this.titolHTML.innerHTML.toUpperCase();
  }

  iniciarElementsDOM():void{
    this.titolHTML = document.getElementById("titol")!;
    this.urlHTML = document.getElementById("url")!;
    this.textHTML = document.getElementById("text")!;
  }



}
