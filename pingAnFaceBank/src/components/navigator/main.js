// import PaButton from 'pingan-ui/dist/components/button';
import PaButton from 'pingan-ui/components/button';
// import PaSliderToggle from 'pingan-ui/dist/components/slider-toggle';
import PaSliderToggle from 'pingan-ui/components/slider-toggle';
// import PaStepLine from 'pingan-ui/dist/components/step-line';
import PaStepLine from 'pingan-ui/components/step-line';
import PaTitle from '../title';

export default {
	data() {
		return {
		};
	},
	props: {
		value: {},
		stepList: {},
		userName: {},
		navigatorTitle: {
			type: String,
			default() {
				return '';
			}
		},
		onBreak: {
			type: Function,
			default() {
				return () => {};
			}
		}
	},
	components: {
		PaButton,
		PaSliderToggle,
		PaStepLine,
		PaTitle
	},
	computed: {
		sliderToggleShow() {
			return this.value;
		}
	}
};
