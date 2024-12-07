import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Component1Component} from './component1/component1.component';
import {SegonComponent} from './segon/segon.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Component1Component, SegonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularDOMJordiCordomi';
}
