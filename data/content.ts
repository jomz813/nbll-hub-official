
export interface TabItem {
  label: string;
  category: string;
}

export interface TabContent {
  title: string;
  description: string;
  items: TabItem[];
}

export const contentMap: Record<string, TabContent> = {
  standings: {
    title: 'League Standings',
    description: 'current competitive landscape of the nbll.',
    items: [] 
  },
  schedule: {
    title: 'league schedule',
    description: 'collapsable week-by-week matchups.',
    items: [] 
  },
  stats: {
    title: 'Player Statistics',
    description: 'In-depth performance metrics and historical data.',
    items: []
  },
  legacy: {
    title: 'The Legacy Vault',
    description: "all players' career legacy values & more.",
    items: [
      { label: 'Hall of Fame', category: 'Greats' },
      { label: 'Records', category: 'History' }
    ]
  },
  'hall-of-fame': {
    title: 'hall of fame',
    description: 'celebrating the legends who defined the game.',
    items: []
  },
  'league-history': {
    title: 'history',
    description: "the champions and heroes throughout nbll's history.",
    items: []
  },
  rules: {
    title: 'Rules',
    description: 'League policies, gameplay settings, and enforcement.',
    items: [] 
  },
  more: {
    title: 'Discover More',
    description: 'Explore the peripheral pages of the NBLL.',
    items: [
      { label: 'History', category: 'Archives' },
      { label: 'n/a', category: 'N/A' },
      { label: 'n/a', category: 'N/A' },
      { label: 'n/a', category: 'N/A' },
      { label: 'Rules', category: 'Official' },
      { label: 'Credits', category: 'Team' }
    ]
  },
  'partner-hub': {
    title: 'Partner Hub',
    description: 'The official network for NBLL affiliates and strategic partners.',
    items: [
      { label: 'Sponsor Portal', category: 'Network' },
      { label: 'Brand Assets', category: 'Media' }
    ]
  },
  'credits': {
    title: 'credits',
    description: 'the team behind the league.',
    items: []
  },
  records: {
    title: 'league records',
    description: 'tracking the biggest single-game, season, and all-time milestones in nbll history.',
    items: []
  }
};
