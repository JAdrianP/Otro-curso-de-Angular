//import components
import { CardUserComponent } from "./cards/card-user/card-user.component";
import { CardVisaComponent } from "./cards/card-visa/card-visa.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { SidebarPanelComponent } from "./sidebar-panel/sidebar-panel.component";
import { TitleH1Component } from "./titles/title-h1/title-h1.component";


export const components: any[] =[
    CardUserComponent,
    TitleH1Component,
    CardVisaComponent,
    CarouselComponent,
    SidebarPanelComponent
];

//export all components
export * from './cards/card-user/card-user.component';
export * from './titles/title-h1/title-h1.component';
export * from './cards/card-visa/card-visa.component';
export * from './carousel/carousel.component';
export * from './sidebar-panel/sidebar-panel.component';