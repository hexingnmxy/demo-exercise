import Carousel from 'pa-ui/components/carousel/index';
import CarouselItem from 'pa-ui/components/carousel-item/index';
import PaImageShow from 'pa-ui/components/image-show/index';
import PaButton from 'pa-ui/components/button/index';
import ImageShowURL from '../../assets/jpg/test.jpg';
import PaContentSample from '../../components/content-sample/index';
import PaContentSampleHeader from '../../components/content-sample-header/index';

export default {
	data() {
		return {
			index: 0,
			backgroundImage: `url(${ImageShowURL})`
		};
	},
	components: {
		PaButton,
		Carousel,
		CarouselItem,
		PaImageShow,
		PaContentSample,
		PaContentSampleHeader
	},
	methods: {
		next() {
			this.$refs.carousel.next();
			this.index = this.$refs.carousel.index;
		},
		pre() {
			this.$refs.carousel.previous();
			this.index = this.$refs.carousel.index;
		}
	}
};
