import { isFunction } from 'lodash/isFunction';

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && isFunction(onPerfEntry)) {
    import('web-vitals')
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
        return true;
      })
      .catch((error) => new Error(error));
  }
};

export default reportWebVitals;
