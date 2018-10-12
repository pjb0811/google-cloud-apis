const axios = require('axios');

const translation = (props: {
  url: string | undefined;
  key: string;
  data: any;
}) => {
  const {
    url = 'https://translation.googleapis.com/language/translate/v2',
    key,
    data
  } = props;

  return axios.post(`${url}?key=${key}`, data);
};

export default translation;
