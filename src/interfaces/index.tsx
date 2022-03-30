export interface Response {
  loading: boolean;
  data: any;
}

export interface Welcome {
  totalCount: number;
  jobs: Job[];
}

export interface Job {
  title: string;
  location: string;
  snippet: string;
  salary: string;
  source: string;
  type: Type;
  link: string;
  company: string;
  updated: Date;
  id: number;
}

export enum Type {
  Completa = 'Completa',
  Empty = '',
  Temporal = 'Temporal',
  TemporalCompleta = 'Temporal, Completa',
}
