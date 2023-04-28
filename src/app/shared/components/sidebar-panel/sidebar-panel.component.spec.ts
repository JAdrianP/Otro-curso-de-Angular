import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { SharedModule } from '../../shared.module';
import { SidebarbarPanelEntity, SidebarbarPanelSize } from './models/sidebar-panel.entity';
import { SidebarPanelService } from './services/sidebar-panel.service';

import { SidebarPanelComponent } from './sidebar-panel.component';

@Component({
  selector: 'test-test',
  template: '<p>test</p>'
})
class MockComponent { }

describe('SidebarPanelComponent', () => {
  let component: SidebarPanelComponent;
  let fixture: ComponentFixture<SidebarPanelComponent>;
  let _sidebarPanelService: SidebarPanelService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        SidebarPanelComponent
      ],
      imports: [
        TranslateModule.forRoot(),
        SharedModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarPanelComponent);
    component = fixture.componentInstance;
    _sidebarPanelService = TestBed.inject(SidebarPanelService);
    component.close();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onMenuVibilityChange panel open true', () => {
    spyOn(_sidebarPanelService, 'onPanelVisibilityChange').and.returnValue(of({
      panel: null,
      status: true
    }));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.isPanelVisible).toEqual(true);
    component.close();
  });

  it('onMenuVibilityChange panel open false', () => {
    spyOn(_sidebarPanelService, 'onPanelVisibilityChange').and.returnValue(of({
      panel: null,
      status: false
    }));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.isPanelVisible).toEqual(false);
  });

  it('onContentChange data', () => {

    const data: SidebarbarPanelEntity = {
      component: MockComponent,
      inputs: [],
      size: SidebarbarPanelSize.medium
    };

    spyOn(_sidebarPanelService, 'onContentChange').and.returnValue(of(data));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.size).toEqual(data.size);
    component.close();
  });

  it('close', () => {
    spyOn(component, 'close');
    component.close();
    fixture.detectChanges();
    expect(component.close).toHaveBeenCalled();
  });
});
