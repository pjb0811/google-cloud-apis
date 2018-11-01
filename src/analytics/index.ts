declare global {
  interface Window {
    gapi: {
      client: {
        request: (params: any) => any;
      };
    };
  }
}

const analytics = async (props: {
  url: string;
  viewId: string;
  data: any;
  delay: number;
}) => {
  const {
    url = 'https://analyticsreporting.googleapis.com/',
    viewId,
    data,
    delay = 1000
  } = props;

  await new Promise(resolve => setTimeout(resolve, delay));

  return window.gapi.client.request({
    path: '/v4/reports:batchGet',
    root: url,
    method: 'POST',
    body: {
      reportRequests: [
        {
          viewId,
          ...data
        }
      ]
    }
  });
};

export default analytics;
