import requestManager from './requestManager';

export default {
  request: {
    create: (params) =>
        requestManager.post('/api/requests', params),
  }
};
