import { Component } from '@angular/core';
import { USERS_DATA } from 'src/app/data/constants/users.const';
import { ICardUser } from 'src/app/shared/components/cards/card-user/card-user.metadata';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  public users: ICardUser[] = USERS_DATA;

}
