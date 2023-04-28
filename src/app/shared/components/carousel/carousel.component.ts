import { Component, Input, OnInit } from '@angular/core';
import { ICarouselItem } from './Icarousel-item.metadata';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  /*custom properties */
  @Input() height = 500;
  @Input() isFullScreen = false;
  @Input() items: ICarouselItem[] = [];

  /*final properties*/

  public finalHeight: string | number = 0;
  public currentPosition = 0;

  constructor() {
   
  }
  ngOnInit(): void {

    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`

    this.items.map((item, index) => {
      item.id = index;
      item.marginLeft = 0;
    })

  }

  setCurrentPosition(position: number) {
    this.currentPosition = position;
    let foundItem = this.items.find(item => item.id === 0);
    if (foundItem) {
      foundItem.marginLeft = -100 * position;
    }
    else {
      foundItem = {
        id: 999,
        image: ''
      }
    }
  }

  setNext() {
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;

    if(nextPosition <= this.items.length - 1)
    {
      finalPercentage = -100 * nextPosition
    }
    else{
      nextPosition = 0;
    }

    let foundItem = this.items.find(item => item.id === 0);
    if (foundItem) {
      foundItem.marginLeft = finalPercentage;
    }
    else {
      foundItem = {
        id: 999,
        image: ''
      }
    }
    this.currentPosition = nextPosition;
  }

  setBack(){

   let finalPercentage = 0;
   let nextPosition = 0;

   if (this.currentPosition - 1 >= 0)
   {
    nextPosition = this.currentPosition - 1;
    finalPercentage = -100 * nextPosition;
   }
   else{
    finalPercentage = -100 * (this.items.length - 1)
    nextPosition = this.items.length - 1;
   }

   let foundItem = this.items.find(item => item.id === 0);
    if (foundItem) {
      foundItem.marginLeft = finalPercentage;
    }
    else {
      foundItem = {
        id: 999,
        image: ''
      }
    }
   this.currentPosition = nextPosition
  }

}
