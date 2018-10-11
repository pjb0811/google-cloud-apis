const axios = require('axios');

const vision = (props: { url: string | undefined; key: string; data: any }) => {
  const {
    url = 'https://vision.googleapis.com/v1/images:annotate',
    key,
    data
  } = props;

  return axios.post(`${url}?key=${key}`, data);
};

export default vision;
