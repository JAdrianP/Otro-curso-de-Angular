import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-loader',
  templateUrl: './card-loader.component.html',
  styleUrls: ['./card-loader.component.scss']
})
export class CardLoaderComponent implements OnInit{
  

  //input styles
  @Input() imageSize = 75;
  @Input() barHeight = 15;
  @Input() bars = 1;

  //final properties
  public totalBars: number[] = [];
  public finalStyleImage = {};
  public finalStyleBar = {};

  constructor(){

  }

  ngOnInit(): void {
    //calculate total bars
    for (let index = 0; index < this.bars; index++) {
      this.totalBars.push(index);   
    };
    //img style

    this.finalStyleImage = {
      width : `${this.imageSize}px`,                   
      height : `${this.imageSize}px`                    
    };

    this.finalStyleBar = {
      height : `${this.barHeight}px`   
    };

    console.log('yeeeeeeeiaaa');
    

  }
}
