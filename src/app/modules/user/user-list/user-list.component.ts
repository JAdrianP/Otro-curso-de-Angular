import { Component } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from 'src/app/data/constants/carousel.const';
import { DATOS_MICAROUSEL } from 'src/app/data/constants/micarousel.const';
import { USERS_DATA } from 'src/app/data/constants/users.const';
import { ICardUser } from 'src/app/shared/components/cards/card-user/card-user.metadata';
import { ICarouselItem } from 'src/app/shared/components/carousel/Icarousel-item.metadata';
import { MiCarrouselItem } from 'src/app/shared/components/micarousel/IMiCarrousel-item.metadata';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  public users: ICardUser[] = USERS_DATA;
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
  public miCarouselData: MiCarrouselItem[] = DATOS_MICAROUSEL;

}
