import { Component, OnInit } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  content = {
    technologies: ['Java', 'Spring Boot', 'Apache Kafka', 'AWS', 'PostgreSql', 'CSS3', 'HTML5', 'Javascript', 'ES2015', 'ES2016', 'ES2017', 'jQuery', 'PHP', 'Git', 'NPM', 'React', 'Ruby', 'Angular', 'Typescript', 'Node.js', 'Rails', 'Express.js', 'AWS', 'Google Cloud', 'MongoDB', 'Bootstrap', 'Firebase']
  }
  constructor() { }

  ngOnInit(): void {
  }

}
