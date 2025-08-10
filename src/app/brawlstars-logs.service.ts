import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BattleLogEntryDto } from './brawlstars-logs.model';


@Injectable({
  providedIn: 'root',
})
export class BrawlstarsLogsService {
  // Substitua esta URL pela URL da sua API Spring Boot no Railway.
  // Durante o desenvolvimento, você pode usar localhost.
  private apiUrl = 'http://localhost:8080/logs';

  constructor(private http: HttpClient) {}

  getLogs(): Observable<BattleLogEntryDto[]> {
    return this.http.get<BattleLogEntryDto[]>(this.apiUrl);
  }
}
