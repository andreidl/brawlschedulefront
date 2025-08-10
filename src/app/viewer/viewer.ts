import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. Importe ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { BrawlstarsLogsService } from '../brawlstars-logs.service';
import { BattleLogEntryDto } from '../brawlstars-logs.model';


@Component({
  selector: 'app-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewer.html',
  styleUrl: './viewer.css',
})
export class Viewer implements OnInit {
  logs: BattleLogEntryDto[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(
    private brawlstarsLogsService: BrawlstarsLogsService,
    private cdr: ChangeDetectorRef // 2. Injete ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.brawlstarsLogsService.getLogs().subscribe({
      next: (data) => {
        this.logs = data;
        this.isLoading = false;
        this.cdr.detectChanges(); // 3. Força a detecção de mudanças aqui
      },
      error: (e) => {
        this.error = 'Ocorreu um erro ao buscar os logs: ' + e.message;
        this.isLoading = false;
        console.error(e);
        this.cdr.detectChanges(); // 4. E também aqui, para exibir o erro
      },
    });
  }
}