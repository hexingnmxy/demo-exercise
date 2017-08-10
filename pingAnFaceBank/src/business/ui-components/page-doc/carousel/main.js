import Carousel from 'pingan-ui/components/carousel/index';
import CarouselItem from 'pingan-ui/components/carousel-item/index';
import PaImageShow from 'pingan-ui/components/image-show/index';
import PaButton from 'pingan-ui/components/button/index';
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
