import { useState, useEffect } from 'react';
import { getJobsData } from '../utils/getJobsData';

export const useGetJobsInfo = (location?: string) => {
  const [jobs, setJobs] = useState({ loading: true, data: [] });
  const url = 'https://es.jooble.org/api/';
  const key = 'c437456c-e726-4a31-82a8-c93154a7feab';

  useEffect(() => {
    setJobs({ loading: true, data: [] });
    getJobsData(url, key, setJobs, location);
  }, [location]);

  return jobs;
};
