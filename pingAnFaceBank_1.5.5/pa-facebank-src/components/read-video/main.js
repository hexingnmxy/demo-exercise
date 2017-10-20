import PaReturn from '../return';
import PaBottomButton from '../bottom-button';
import PaLayoutAutoContent from '../layout-auto-content';
import PaTitleGroup from '../title-group';

export default {
	data() {
		const btnStateStart = '开始认证';
		const btnStateReset = '重新认证';
		const btnStateQueue = '取消排队';
		const btnStateFinish = '认证成功';
		return {
			btnStateList: {
				btnStateStart,
				btnStateReset,
				btnStateQueue,
				btnStateFinish
			},
			messagePoint: '',
			btnState: 'btnStateStart',
			approveState: false,
			videoConnecting: false,
			btnList: [
				{
					text: btnStateStart
				}
			],
			videoTipsTitle: '您已取消排队',
			isNetworkUnusual: false
		};
	},
	props: {
		linkPrevious: {
			type: String,
			default() {
				return '';
			}
		},
		businessNo: {
			type: String,
			default() {
				return '';
			}
		},
		businessId: {
			type: String,
			default() {
				return '';
			}
		},
		finish: {
			type: Function,
			default() {
				return () => {};
			}
		},
		error: {
			type: Function,
			default() {
				return () => {};
			}
		},
		pdfFinish: {
			type: Function,
			default() {
				return () => {};
			}
		}
	},
	components: {
		PaReturn,
		PaBottomButton,
		PaLayoutAutoContent,
		PaTitleGroup
	},
	computed: {
		paBtnList() {
			console.log('btnStateReset');
			this.btnList[0].text = this.btnStateList[this.btnState];
			return this.btnList;
		}
	},
	methods: {
		itemClick() {
			if (this.btnState === 'btnStateQueue') {
				this.btnState = 'btnStateReset';
				this.videoConnecting = false;
				this.messagePoint = '';
				this.$drive.stopVideo();
				return false;
			}

			if (this.btnState === 'btnStateStart' || this.btnState === 'btnStateReset') {
				this.btnState = 'btnStateQueue';
				this.videoConnecting = true;
				this.messagePoint = '您前面还有<span style="color: #52b786">9人</span>排队，请耐心等待...';
			}

			const $this = this;
			const event = {
				off() {
					$this.$ui.openAlertBox('off');
					if ($this.approveState) {
						$this.finish();
					} else {
						this.videoTipsTitle = '视频连接异常';
						this.isNetworkUnusual = true;
						$this.error();
					}
					$this.btnState = 'btnStateReset';
					$this.videoConnecting = false;
				},
				pdfFinish() {
					$this.approveState = true;
					$this.btnState = 'btnStateFinish';
					$this.videoConnecting = false;
					$this.pdfFinish();
				},
				pdfFail() {
					$this.approveState = false;
					$this.btnState = 'btnStateReset';
					$this.videoConnecting = false;
				},
				messageBusiness(msg) {
					$this.messagePoint = msg;
					// 这里是个坑 视频出错才会调用这个方法 原生告诉我是业务处理时候的消息 坑~
					$this.btnState = 'btnStateReset';
					$this.videoConnecting = false;
				},
				messageQueue(msg) {
					$this.messagePoint = msg;
					$this.btnState = 'btnStateQueue';
					$this.videoConnecting = true;
				}
			};
			this.$drive.listenVideo(this.businessNo, this.businessId, event);
			return true;
		}
	}
};
