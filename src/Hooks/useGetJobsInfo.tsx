import { useState, useEffect } from 'react';
import { getJobsData } from '../utils/getJobsData';

export const useGetJobsInfo = (props?: any) => {
  const [jobs, setJobs] = useState({ loading: true, data: [] });
  const url = 'https://es.jooble.org/api/';
  const key = 'c437456c-e726-4a31-82a8-c93154a7feab';

  useEffect(() => {
    getJobsData(url, key, setJobs);
  }, []);

  return jobs;
};
