import { Component, Input } from '@angular/core';
import { MiCarrouselItem } from './IMiCarrousel-item.metadata';

@Component({
  selector: 'app-micarousel',
  templateUrl: './micarousel.component.html',
  styleUrls: ['./micarousel.component.scss']
})
export class MicarouselComponent {

  @Input() items: MiCarrouselItem[] = [];
  
  public currentPosition:number = 0;
  public marginPercentage:number = 0;

  public nextItem()
  {
    console.log('current position:' + this.currentPosition);
    console.log('marginPercentage:' + this.marginPercentage);
    
      if(this.currentPosition + 1 <= this.items.length - 1)
      {
        this.currentPosition+=1;
      }
      else{
        this.currentPosition = 0;
      }
      this.marginPercentage = -200 * this.currentPosition;
  }

  public prevItem()
  {
    console.log('current position:' + this.currentPosition);
    console.log('marginPercentage:' + this.marginPercentage);
    
      if(this.currentPosition - 1 < 0)
      {
        this.currentPosition = this.items.length - 1;
      }
      else{
        this.currentPosition -= 1 ;
      }
      this.marginPercentage = -200 * this.currentPosition;
  }
  public setPosition(position:number){
    this.currentPosition = position;
    this.marginPercentage = -200 * this.currentPosition;
  }
  
}
