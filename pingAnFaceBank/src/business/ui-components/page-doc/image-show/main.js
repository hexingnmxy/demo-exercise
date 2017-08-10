// import PaImageShow from 'pingan-ui/dist/components/image-show';
import PaImageShow from 'pingan-ui/components/image-show/index';
import PaContentSample from '../../components/content-sample/index';
import PaContentSampleHeader from '../../components/content-sample-header/index';
import ImageShowURL from '../../assets/jpg/test.jpg';

export default {
	data() {
		return {
			backgroundImage: `url(${ImageShowURL})`
		};
	},
	components: {
		PaImageShow,
		PaContentSample,
		PaContentSampleHeader
	}
};
