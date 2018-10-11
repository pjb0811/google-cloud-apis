const axios = require('axios');

const vision = (props: { key: string; data: any }) => {
  const { key, data } = props;

  return axios.post(
    `https://vision.googleapis.com/v1/images:annotate?key=${key}`,
    data
  );
};

export default vision;
