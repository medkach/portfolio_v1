import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements  OnInit{
  items =[]
  numbers:number[]=[];
  constructor() {
  }

  ngOnInit(): void {
    for (let i = 0; i < 10000 ; i++) this.numbers.push(i);
    // @ts-ignore
    this.items= Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  }

}
