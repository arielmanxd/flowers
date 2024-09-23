import { Component, OnInit } from '@angular/core';

interface Flower {
  id: number;
  color: string;
  size: string;
}

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css'],
})
export class FlowersComponent implements OnInit {

  arbustos: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.arbustos = new Array(10).fill(0);
  }
}
