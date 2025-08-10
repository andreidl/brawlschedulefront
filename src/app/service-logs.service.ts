import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ServiceLog {
  id: number;
  timestamp: string;
  message: string;
  level: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceLogsService {
  private apiUrl = 'http://localhost:8080/servicelogs';

  constructor(private http: HttpClient) { }

  getServiceLogs(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
}