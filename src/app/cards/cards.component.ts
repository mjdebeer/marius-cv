import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cardsCollection = [
    {text: 'Click to view', url: 'https://meditalia.co.za/', title: 'Meditalia', image: {src: 'assets/img/site1-min.png', alt: 'Meditalia Website'}},
    {text: 'Click to view', url: 'https://aemg.africa/', title: 'AEMG Studios', image: {src: 'assets/img/site2-min.png', alt: 'AEMG Website'}},
    {text: 'Click to view', url: 'https://rosewoodcpt.co.za', title: 'Rosewood', image: {src: 'assets/img/site3-min.png', alt: 'Rosewood Website'}},
    {text: 'No Longer Published', url: '', title: 'Zulaza Entertainment', image: {src: 'assets/img/site4-min.png', alt: 'Zulaza Website'}},
    {text: 'No Longer Published', url: '', title: 'Bernelie', image: {src: 'assets/img/site5-min.png', alt: 'Bernelie Website'}},
    {text: 'Click to view', url: 'https://isafoodstrading.com/', title: 'Isa Foods Trading UK', image: {src: 'assets/img/site6-min.png', alt: 'Meditalia Website'}},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
