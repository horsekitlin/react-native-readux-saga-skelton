import Config from 'react-native-config';

const DOMAIN = process.env.NODE_ENV === 'development'
? Config.REACT_APP_DEV_BASE_PATH
: Config.REACT_APP_PROD_BASE_PATH;

export const localDomain = (endpoint) => `${DOMAIN}${endpoint}`;
console.log(DOMAIN);