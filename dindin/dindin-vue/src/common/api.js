import config from './config.js'

const API = {
	Homepage: 'Homepage'
}


Object.keys(API).forEach(key => {
	API[key] = config.baseUrl + key;
});

export default API;

