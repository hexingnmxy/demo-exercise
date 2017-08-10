export default {
	data() {
		return {

		};
	},
	props: {
		backgroundImage: {
			type: String,
			default() {
				return '';
			}
		},
		src: {
			type: String,
			default() {
				return '';
			}
		},
		identification: {
			type: String,
			default() {
				return '';
			}
		},
		showState: {
			type: String,
			default() {
				return 'PHOTO_NONE'; // PHOTO_NONE PHOTO_UPLOADING PHOTO_SHOW
			}
		},
		uploadProgress: {
			type: Number,
			default() {
				return 0;
			}
		},
		uploadFinish: {
			type: Function,
			default() {
				return () => {};
			}
		},
		openCamera: {
			type: Function,
			default() {
				return () => {};
			}
		}
	},
	computed: {
		photoState() {
			let photographClass = this.showState.toLowerCase();
			photographClass = photographClass.replace(/_/ig, '-');
			return `photograph-${photographClass}`;
		},
		progressStyle() {
			const size = this.uploadProgress / 100;
			return {
				transform: `scale3d(${size}, 1, 1)`,
				webkitTransform: `scale3d(${size}, 1, 1)`
			};
		}
	},
	methods: {
		photographClick() {
			this.openCamera();
		}
	}
};
