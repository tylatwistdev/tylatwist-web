import defaultImage from './assets/images/default/image.jpg';

export const BASE_URL = process.env.REACT_APP_DATA_ENV === 'local'
    ? process.env.REACT_APP_LOCAL_BASE_URL
    : process.env.REACT_APP_LIVE_BASE_URL;

export const DEFAULT_IMAGE = defaultImage;