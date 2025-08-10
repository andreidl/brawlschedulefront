import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLogsViewer } from './service-logs-viewer';

describe('ServiceLogsViewer', () => {
  let component: ServiceLogsViewer;
  let fixture: ComponentFixture<ServiceLogsViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceLogsViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceLogsViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
