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
  type: string;
  link: string;
  company: string;
  updated: Date;
  id: number;
}

export interface Search {
  location: string;
  keyword: string;
}

export interface JobsListProps {
  loading: boolean;
  jobs: any;
  currentKeyword: string;
  currentLocation: string;
  currentFilter: string;
  isJobsObtained: boolean;
}
