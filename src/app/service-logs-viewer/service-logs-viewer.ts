// src/app/service-logs-viewer/service-logs-viewer.component.ts

import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. Importe ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { ServiceLogsService } from '../service-logs.service';

@Component({
  selector: 'app-service-logs-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-logs-viewer.html',
  styleUrl: './service-logs-viewer.css'
})
export class ServiceLogsViewerComponent implements OnInit {
  logs: string[] = [];

  constructor(
    private serviceLogsService: ServiceLogsService,
    private cdr: ChangeDetectorRef // 2. Injete ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.serviceLogsService.getServiceLogs().subscribe(data => {
      this.logs = data;
      this.cdr.detectChanges(); // 3. Force a detecção de mudanças
    });
  }
}