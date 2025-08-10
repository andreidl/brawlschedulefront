//brawlstars-logs.model
export interface BrawlerBattleLogDto {
  id: number;
  name: string;
  power: number;
  trophies: number;
}

// Interface para as informações do jogador na batalha
export interface PlayerInfoBattleLogDto {
  tag: string;
  name: string;
  brawler: BrawlerBattleLogDto;
}

// Interface para os dados do evento
export interface EventDto {
  id: number;
  mode: string;
  map: string;
}

// Interface para os dados da batalha
export interface BattleDto {
  mode: string;
  type: string;
  result: string;
  duration: number;
  trophyChange: number;
  starPlayer: PlayerInfoBattleLogDto;
  teams: PlayerInfoBattleLogDto[][];
}

// Interface principal que representa um item de log de batalha
export interface BattleLogEntryDto  {
  battleTime: string;
  event: EventDto;
  battle: BattleDto;
}