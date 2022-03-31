export const getJobsData = async ({ location, keyword }: any) => {
  const url = 'https://es.jooble.org/api/';
  const key = 'c437456c-e726-4a31-82a8-c93154a7feab';

  const jobs = await fetch(url + key, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      location: location,
      keywords: keyword,
      page: 1,
    }),
  })
    .then((res) => res.json())
    .then((res) => res);

  return jobs;
};
