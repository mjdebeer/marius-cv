import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cardsCollection = [
    // {text: 'text', title: 'title', image: {src: 'src', alt: 'alt'}}
    {text: 'Click to view', title: 'Meditalia', image: {src: 'assets/img/site1-min.png', alt: 'Meditalia Website'}},
    {text: 'Click to view', title: 'AEMG Studios', image: {src: 'assets/img/site2-min.png', alt: 'Meditalia Website'}},
    {text: 'Click to view', title: 'Rosewood', image: {src: 'assets/img/site3-min.png', alt: 'Meditalia Website'}},
    {text: 'Click to view', title: 'Zulaza Entertainment', image: {src: 'assets/img/site4-min.png', alt: 'Meditalia Website'}},
    {text: 'Click to view', title: 'Bernelie', image: {src: 'assets/img/site5-min.png', alt: 'Meditalia Website'}},
    {text: 'Click to view', title: 'Isa Foods Trading UK', image: {src: 'assets/img/site6-min.png', alt: 'Meditalia Website'}},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
