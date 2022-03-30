interface JobsListProps {
  loading: boolean;
  jobs: any;
}

export const JobsList = ({ jobs, loading }: JobsListProps) => {
  return <ul>{loading ? <li>Loading...</li> : jobs.map((job: any) => <li key={job.id}>{job.title}</li>)}</ul>;
};
