import config from './config.js'

const API = {
	Homepage: 'Homepage',
	moduledata:'moduledata'

}


Object.keys(API).forEach(key => {
	API[key] = config.baseUrl + key;
});

export default API;

