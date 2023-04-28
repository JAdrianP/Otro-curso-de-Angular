import { Component, ComponentRef, ElementRef, HostListener, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { FADE_IN_OUT } from "@shared/animations/fade-in-out.animation";
import { Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";
import { SidebarPanelStatusEntity, SidebarbarPanelEntity, SidebarbarPanelPosition, SidebarbarPanelSize } from "./models/sidebar-panel.entity";
import { SidebarPanelService } from "./services/sidebar-panel.service";

@Component({
  selector: "pes-sidebar-panel",
  templateUrl: "./sidebar-panel.component.html",
  styleUrls: ["./sidebar-panel.component.scss"],
  animations: [FADE_IN_OUT],
})
export class SidebarPanelComponent implements OnInit {

  @ViewChild('closeButton') closeButton: ElementRef;
  @ViewChild("content", { read: ViewContainerRef }) public panelContentRef: ViewContainerRef;

  public isPanelVisible: boolean = false;
  public size: SidebarbarPanelSize;
  public position: SidebarbarPanelPosition;
  public title: string;
  public classes: string[] = []; // Para poder añadir clases extras al panel
  public loadingSidebar: boolean = true;

  private _sidePanelServiceSubject$: Subject<void>;
  private componentCreated: ComponentRef<any>;

  constructor(
    private _sidebarPanelService: SidebarPanelService
  ) { }

  ngOnInit(): void {

    this.size = SidebarbarPanelSize.small;
    this.position = SidebarbarPanelPosition.right;
    this._sidePanelServiceSubject$ = new Subject<void>();

    this.onPanelVisibilityChange();
    this.onContentChange();


  }

  onPanelVisibilityChange() {
    this._sidebarPanelService
      .onPanelVisibilityChange()
      .pipe(takeUntil(this._sidePanelServiceSubject$))
      .subscribe((panel: SidebarPanelStatusEntity) => {

        this.loadingSidebar = true;

        this.isPanelVisible = panel?.status || false;

        // Cargamos el contenido del sidebar
        this._sidebarPanelService.setContent(panel.panel);

        // Movemos el focus al botón de cierre, para tener acceso
        // al sidebar por accesibilidad.
        if (this.isPanelVisible) {
          setTimeout(() => this.closeButton.nativeElement.focus(), 0);
        }
      });
  }

  // Cargamos el componente en el panel con todos los datos
  onContentChange() {
    this._sidebarPanelService
      .onContentChange()
      .pipe(
        takeUntil(this._sidePanelServiceSubject$)
      )
      .subscribe((content: SidebarbarPanelEntity) => {

        if (content === null) {
          this.panelContentRef.clear();
        } else {

          // Establecemos las opciones del sidebar
          this.size = content.size || this.size;
          this.position = content.position || this.position;
          this.title = content.title || '';
          this.classes = content.classes || [];

          // Pasamos los datos para formar el contenido del sidebar
          this._setPanelContent(content);
          setTimeout(() => this.loadingSidebar = false, 500);
        }

      });
  }

  public close(): void {
    if (this.isPanelVisible) {
      this._sidebarPanelService.close();
    }
  }

  private _setPanelContent(content: SidebarbarPanelEntity) {

    this.panelContentRef.clear();
    this.componentCreated = this.panelContentRef.createComponent(content.component);

    if (content?.inputs) {
      this._setInputsComponent(content?.inputs || []);
    }
  }

  private _setInputsComponent(inputs: any[] = []) {
    // Si el componente tiene INPUTS, los pasamos
    if (inputs && inputs.length > 0) {
      inputs.forEach((input) => {
        this.componentCreated.instance[input.name] = input.value;
      });
    }
  }

  ngOnDestroy() {
    this.isPanelVisible = false;
    this._sidebarPanelService.close();
    this._sidePanelServiceSubject$.next();
    this._sidePanelServiceSubject$.complete();
  }
}
