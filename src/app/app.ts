import { Component, signal } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { ServiceLogsViewerComponent } from './service-logs-viewer/service-logs-viewer'; // Adicione esta linha


@Component({
  selector: 'app-root',
  imports: [HttpClientModule,ServiceLogsViewerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('schedule-front-angular');
}
