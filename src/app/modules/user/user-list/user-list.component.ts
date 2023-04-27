import { Component } from '@angular/core';
import { ICardUser } from 'src/app/shared/components/cards/card-user/card-user.metadata';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  public users: ICardUser[] = [{
    name: 'Jose Luis',
    age: 27,
    description: 'desarrollador full stack',
    avatar: 'https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=2000',
    work: 'project manager'
  },
  {
    name: 'Antonio',
    age: 27,
    description: 'desarrollador full front',
    avatar: 'https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=2000',
  },
  {
    name: 'Luis',
    age: 27,
    description: 'desarrollador full back',
    avatar: 'https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=2000',
  }
  ,
  {
    name: 'Luis',
    age: 27,
    description: 'desarrollador full back',
    avatar: 'https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=2000',
  },
  {
    name: 'Antonio',
    age: 27,
    description: 'desarrollador full front',
    avatar: 'https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=2000',
  },
  {
    name: 'Luis',
    age: 27,
    description: 'desarrollador full back',
    avatar: 'https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=2000',
  }
  ,
  {
    name: 'Luis',
    age: 27,
    description: 'desarrollador full back',
    avatar: 'https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=2000',
  },
  {
    name: 'Antonio',
    age: 27,
    description: 'desarrollador full front',
    avatar: 'https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=2000',
  },
  {
    name: 'Luis',
    age: 27,
    description: 'desarrollador full back',
    avatar: 'https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=2000',
  }
  ,
  {
    name: 'Luis',
    age: 27,
    description: 'desarrollador full back',
    avatar: 'https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=2000',
  }
]

}
