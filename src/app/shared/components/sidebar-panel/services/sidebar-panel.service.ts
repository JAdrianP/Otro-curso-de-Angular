import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SidebarPanelStatusEntity, SidebarbarPanelEntity } from '../models/sidebar-panel.entity';

@Injectable({
  providedIn: 'root'
})
export class SidebarPanelService {

  private _isPanelVisible: boolean;
  private readonly _sidebarPanelStatus: BehaviorSubject<SidebarPanelStatusEntity>;
  private readonly _contentChangeSource: Subject<SidebarbarPanelEntity>;

  constructor() {
    this._isPanelVisible = false;
    this._sidebarPanelStatus = new BehaviorSubject<SidebarPanelStatusEntity>({
      panel: null,
      status: this._isPanelVisible
    });
    this._contentChangeSource = new Subject<any>();
  }

  /**
   * Función que servirá para comprobar cuando en el panel lateral ha cambiado su visibilidad
   * mediante el observable de `_sidebarPanelStatus`
   * @returns {Observable<SidebarPanelStatusEntity>}
   */
  public onPanelVisibilityChange(): Observable<SidebarPanelStatusEntity> {
    return this._sidebarPanelStatus.asObservable();
  }

  /**
   * Función que servirá para comprobar cuando en el panel lateral ha cambiado de contenido
   * mediante el observable de `_contentChangeSource`
   * @returns {Observable<SidebarbarPanelEntity>}
   */
  public onContentChange(): Observable<SidebarbarPanelEntity> {
    return this._contentChangeSource.asObservable();
  }

  /**
   * Función para comprobar si el panel lateral está abierto
   * @returns {boolean}
   */
  public isSidebarOpened(): boolean {
    return this._isPanelVisible;
  }

  /**
   * Función para establecer el contenido del panel lateral
   * @param {SidebarbarPanelEntity} data
   */
  public setContent(data: SidebarbarPanelEntity): void {
    this._contentChangeSource.next(data);
  }

  /**
   * Función para mostrar el panel lateral
   */
  public show(data: SidebarbarPanelEntity): void {
    this._isPanelVisible = true;
    this._sidebarPanelStatus.next({
      panel: data,
      status: this._isPanelVisible
    });
  }

  /**
   * Función para cerrar el panel lateral
   */
  public close(): void {
    this._isPanelVisible = false;
    this.setContent(null);
    this._sidebarPanelStatus.next({
      panel: null,
      status: this._isPanelVisible
    });
  }
}
