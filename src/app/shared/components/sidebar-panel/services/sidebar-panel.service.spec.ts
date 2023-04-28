import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { SidebarbarPanelEntity } from "../models/sidebar-panel.entity";

import { SidebarPanelService } from "./sidebar-panel.service";

let service: SidebarPanelService;
@Component({
  selector: 'test-component',
  template: '<p>Test</p>'
})
class MockTestComponent { }

describe("SidebarPanelService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    });
    service = TestBed.get(SidebarPanelService);
    service.close();
  });

  it("should be created", () => {
    const service: SidebarPanelService = TestBed.get(SidebarPanelService);
    expect(service).toBeTruthy();
  });

  it("onPanelVisibilityChange menu open false", () => {
    spyOn(service, "onPanelVisibilityChange").and.returnValue(of({
      panel: null,
      status: false
    }));
    service
      .onPanelVisibilityChange()
      .subscribe((result) => expect(result.status).toBe(false));
  });

  it("onPanelVisibilityChange menu open true", () => {
    spyOn(service, "onPanelVisibilityChange").and.returnValue(of({
      panel: null,
      status: true
    }));
    service
      .onPanelVisibilityChange()
      .subscribe((result) => expect(result.status).toBe(true));
  });

  it("show", () => {
    const data: SidebarbarPanelEntity = {
      component: MockTestComponent,
    };
    service.show(data);
    expect(service.isSidebarOpened()).toBeTrue();
  });

  it("close", () => {
    service.close();
    expect(service.isSidebarOpened()).toBeFalse();
  });

  it("setContent", () => {
    const data: SidebarbarPanelEntity = {
      component: MockTestComponent,
    };
    service.setContent(data);
  });
});
