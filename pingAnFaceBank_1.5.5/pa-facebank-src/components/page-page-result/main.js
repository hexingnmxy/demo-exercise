import PaButton from 'pa-ui/components/button';
import PaCarousel from 'pa-ui/components/carousel';
import PaCarouselItem from 'pa-ui/components/carousel-item';
import PaReturn from '../return';
import LayoutAutoContent from '../layout-auto-content';
import ImageQRCodeURL from '../../assets/jpg/qrCode.jpg';

export default {
	mounted() {
		this.countDown(); // 开始倒计时
		this.getQRCode(); // 获取二维码
		// this.getCardImg(); // 获取广告图片
	},
	data() {
		return {
			linkAddress: '', // 返回首页
			counter: '', // 倒计时 计时器
			count: 60, // 倒计时 秒数
			countStr: '（60）', // 带括号的倒计时 秒数
			QRCodeImage: '' // 二维码
		};
	},
	props: {
		// 结束状态 默认 success 可传的值：success、fail
		resultStatus: {
			type: String,
			default() {
				return 'success';
			}
		},
		// 网点号
		locCode: {
			type: String,
			default() {
				return '';
			}
		},
		// 产品Id 号
		proId: {
			type: String,
			default() {
				return '';
			}
		}
	},
	components: {
		PaButton,
		PaReturn,
		PaCarousel,
		PaCarouselItem,
		LayoutAutoContent
	},
	computed: {
		// 结束状态
		status() {
			return this.resultStatus === 'success' ? '办理成功' : '办理失败';
		},
		// 结束图标
		iconCss() {
			return this.resultStatus === 'success' ? 'icon-success' : 'icon-warning';
		}
	},
	methods: {
		// 开始倒计时
		countDown() {
			let _this = this;
			_this.counter = setInterval(() => {
				_this.count--;
				_this.countStr = `（${_this.count}）`;
				if (_this.count === 0) {
					clearInterval(_this.counter);
					_this.countStr = '';
				}
			}, 1000);
		},
		// 获取二维码
		getQRCode() {
			// this.$core.post(`/mmarket/${this.proId}GetTwoDimensionCodeOfGoodNeighbor.do`, { locCode: this.locCode }).then((data) => {
			//   console.log(data);
			//   this.QRCodeImage = `url(${data})`;
			// });
			this.QRCodeImage = `url(${ImageQRCodeURL})`;
		},
		// 获取卡的图片
		getCardImg() {
			this.$core.post(`/mmarket/${this.proId}GetAdsInfo.do`, { proId: this.proId }).then(data => {
				console.log(data);
			});
		},
		// 点击'完成'按钮 跳转首页
		finish() {
			this.$drive.goHome();
		},
		// 结束倒计时
		stopCount(e) {
			clearInterval(this.counter);
			this.countStr = '';
			if (e.target.nodeName === 'BUTTON') {
				return;
			}
		}
	}
};
