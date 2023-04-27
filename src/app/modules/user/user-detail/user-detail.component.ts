import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USERS_DATA } from 'src/app/data/constants/users.const';
import { ICardUser } from 'src/app/shared/components/cards/card-user/card-user.metadata';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public id: number;
  public users: ICardUser[] = USERS_DATA;
  public currentUser: ICardUser;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];

    console.log({
      id: this.id,
      users: this.users
    });
    //el + delante de this.id es una conversion a entero, esto hay que 
    //hacerlo porque this.id viene de la ruta, por lo tanto es un string
    //aunque nosotros lo definamos como entero, si no hacemos la conversion
    //current user quedaria como undefined

    /*resulta que currentUser solo puede almacenar un ICardUser, y no un 
    undefined y como existe la posibilidad de que find no encuentre nada y devuelva 
    undefined nos tenemos que asegurar de que en currentUser se almacene un ICardUser
    predefinido cuando no encuentre nada*/
    const foundUser = this.users.find(user => user.id === +this.id);
    if (foundUser) {
      this.currentUser = foundUser;
    } else {
      this.currentUser = {
        id: 0,
        name: 'not found',
        age: 0,
        description: 'none',
        avatar: 'https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=2000',
        work: 'none'
      };
    }

    console.log(this.currentUser);
  }
  ngOnInit(): void {


  }

}
