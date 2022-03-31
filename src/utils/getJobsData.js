export const getJobsData = (url, key, setJobs, { location, keyword }) => {
  fetch(url + key, {
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
    .then((response) => response.json())
    .then((responseJson) => {
      setJobs({ loading: false, data: responseJson });
      console.log(responseJson);
    });
};
