import { Type } from "@angular/core";

export interface SidebarbarPanelEntity {
  component: Type<any>;
  inputs?: SidebarbarPanelInputsEntity[];
  size?: SidebarbarPanelSize;
  position?: SidebarbarPanelPosition;
  title?: string;
  classes?: string[];
}

export interface SidebarPanelStatusEntity {
  panel: SidebarbarPanelEntity;
  status: boolean;
}

export interface SidebarbarPanelInputsEntity {
  name: string;
  value: any; // Puede ser un string o un objeto
}

export enum SidebarbarPanelSize {
  small = 's',
  medium = 'm',
  large = 'l'
}

export enum SidebarbarPanelPosition {
  left = 'left',
  right = 'right',
}
