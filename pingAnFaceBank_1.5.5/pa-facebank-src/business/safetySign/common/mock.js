export default [
	{'PrdId': 'SafeLockApply'}, // 产品Id
	{
		url: `/mmarket/SafeLockApply.${Api.getAdsInfo}`, // 广告图片
		response: {
			data: {
				List: [
					{
						'PicUrl': '/mmarket/DownloadPicture.do',
						'AdLink': null
					},
					{
						'PicUrl': '/mmarket/DownloadPicture.do',
						'AdLink': null
					},
					{
						'PicUrl': '/mmarket/DownloadPicture.do',
						'AdLink': null
					}
				]
			}
		}
	},
	{
		url: '/mmarket/SafeLockApply.SafeLockIdentityCheck.do', // 身份证联网核查
		response: {
			data: {
				// Flag: '0', // 未签约
				Flag: '1', // 已签约
				VerifyResult: '00',
				TranType: '010', // 交易类型 -- 取现、转账、消费 (0 未勾选 1 已勾选)
				ChannelCode: '11', // 渠道 -- ATM、POS (0 未勾选 1 已勾选)
				CardType: '10', // 用卡介质 -- IC芯片、磁条 (0 未勾选 1 已勾选)
				RegionNo: '01' // 地区 -- 境内、境外 (0 未勾选 1 已勾选)
			}
		}
	},
	{
		url: '/mmarket/SafeLockApply.SafeLockInfoSave.do', // 信息保存
		response: {
			data: {}
		}
	}
];
