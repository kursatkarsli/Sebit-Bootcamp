import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../model/cardInterface';
// interface Card {
//   title: string;
//   imageUrl: string;
//   username: string;
//   content: string;
// }

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  // @Input() title: string = '';
  // @Input() content: string = '';
  // @Input() username: string = '';
  // @Input() image: string = '';
  //ikinci yol
  @Input() post: Card = {
    title: '',
    imageUrl: '',
    username: '',
    content: '',
  };
  @Output() titleSender = new EventEmitter<{ title: string }>();

  sendTitle(value: { title: string }) {
    this.titleSender.emit(value);
  }

  constructor() {}

  ngOnInit(): void {}
}
