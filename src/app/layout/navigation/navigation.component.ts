import { Component } from '@angular/core';
import { IHeader } from 'src/app/data/interfaces/ui/iheader-metadata';
import { AuthService } from 'src/app/data/services/api/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {


  public logoutMenu: IHeader;

  constructor(private authService: AuthService){

    this.logoutMenu = {
      links :{
        link:'',
        //porque se escribe esto asi y no "this.authService.logout()"?
        method : () => this.authService.logout()
      }
    }
  }

  mierda(){
    
    this.authService.logout()
  }
}
