var express = require('express');
var router = express.Router();
var Mock = require('mockjs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expraaaass' });
});

router.get('/jdapi', function(req, res, next) {
	var callback=req.query.callback;
	var param = req.query.a;
	console.log(param);
	if(param==6){
		var data = Mock.mock({
			'circle-info|8':[
				{
					ACTIVENAME:'@ctitle(5)'
				}
			],
			'summary-data|2-4':[
				{
					'class-ranking|+1':['区级','街道','社区'],
					'class-nums|20-30':23,
					'register-nums|1':['10万人次','4万人次','6万人次','7万人次']
				}
			],
			'class-info|1-2':[
				{
					'class-ranking|+1':['区级','街道','社区'],
					'activenums-perMonth|3':[12,3,33,44],
					'registernums-perMonth|4':[12,31,22]
				}
			]
		});
	}else if(param==4){
		var data = Mock.mock({
		'ORGAN-NAME':'@ctitle(5)',
		"ORGAN-CLASS|1":["town","area","viliage"],
		"Class-info|1-3" :[{
			"Class-ranking|+1":['first','second','third','fourth','fifth'],
			"Class-list|1-3":[{
				'Class|1':['横屏','竖屏'],
				'尺寸|20-50':30,
				'数量|20-40':20
			}],
			'Class-Num|1-50':20,
			"Class-Name|1":["town","area","village"]
		}]
	});
	}else if(param==5){
		var data = Mock.mock({
			"pageSlide":[{imgUrl:'../img/page-banner-00.png',imgID:'XXX'},{imgUrl:'../img/page-banner-01.png',imgID:'YYY'},{imgUrl:'../img/page-banner-02.png',imgID:'ZZZ'}],
			"itemsSlide":[{imgUrl:'../img/banner0.png',categroyID:'law',categroyName:'法律'},{imgUrl:'../img/banner1.png',categroyID:'edu',categroyName:'教育'},{imgUrl:'../img/banner2.png',categroyID:'live',categroyName:'生活'},{imgUrl:'../img/banner3.png',categroyID:'food',categroyName:'美食'},{imgUrl:'../img/banner4.png',categroyID:'pro',categroyName:'职业'}],
			'subjectsSlide':[{imgUrl:'../img/subject0.png',subjectID:'law',subjectName:'法律讲堂'},{imgUrl:'../img/subject1.png',subjectID:'edu',subjectName:'家教辅导'},{imgUrl:'../img/subject2.png',subjectID:'live',subjectName:'生活帮手'},{imgUrl:'../img/subject3.png',subjectID:'food',subjectName:'饮食搭配'},{imgUrl:'../img/subject4.png',subjectID:'pro',subjectName:'职业规划'}]
		});
	}else {
		var data = Mock.mock({
		"catgroy问题列表items|1-2":[{
			questionTilte:'这里填写问题标题',
			qusetionPseron:'这里填写提问者名称',
			qusetionIcon:'这里填写提问者头像地址',
			questionTime:'这里填写提问时间',
			questionDate:'填写提问日期',
			questionCat:'填写问题分类',
			questionSubject:'填写专题分类',
			questionEva:'评价数量',
			questionLike:'喜欢次数',
			"answer回答者列表List|1-2":[{
				answerName:'回答者名称',
				answerTime:'回答时间',
				answerDate:'回答日期',
				answerTitle:'回答标题',
				answerAgree:'回答赞同数',
				answerVideo:'回答附加视频链接',
				'answer回答主内容段落Content':['第1条回答段落','第2条回答段落','第3条回答段落','第4条回答段落']
				
			}]

		}]
	});
	}

	var ret = JSON.stringify(data, null, 4);
 		ret =callback+"("+ret+")";
 		res.send(ret);	
});


router.get('/api2', function(req, res, next) {
	var callback=req.query.callback;
	var param = req.query.a;
	console.log(param);
	if(param==0){
		var data = Mock.mock({
		"recLick|7-9":[{
		"questionTilte问题标题":'@ctitle',
		"qusetionPseron提问者名称":'@cname',
		"qusetionIcon提问者头像链接":"@image('250x250')",
		"questionTime提问时间":'@time("HH:mm")',
		"questionDate提问日期":"@date('yyyy-MM-dd')",
		"questionItemCat问题分类|1":['law','edu','live','prof','food'],
		"questionSubCat专题分类|1":['law','edu','live','prof','food'],
		"questionEva评价数量|20-50":30,
		"questionLike喜欢数量|20-50":30,
		"questionID问题唯-ID|2000-9000":4000
		}]
	});
	}else{

	}
	var ret = JSON.stringify(data, null, 4);
 		ret =callback+"("+ret+")";
 		res.send(ret);
});


//dindinAPI
//首页数据
router.get('/Homepage',function(req,res,next){
	var callback=req.query.callback;
		var data = Mock.mock({
		"code":'0000',
		"Homepage|4":[{
		"questionTilte":'@ctitle',
		"qusetionPseron":'@cname',
		"qusetionIcon":"@image('450x200')"
		}]
	});
	var ret = JSON.stringify(data, null, 4);
 		ret =callback+"("+ret+")";
 		res.send(ret);
}),
router.get('/moduleData',function(req,res,next){
	var callback=req.query.callback;
		var data = Mock.mock({
		"code":'0000',
		"modulepart|18":[{
		'modulepartname':'@ctitle',
		"moduledetail|3-8":[{
			"moduledetailicon":"@image('50x50')",
			"moduledetailname":'@cname',
			"moduledetailID|7000-1000":8000
		}],
		"moduleID|2000-9000":4000
		}]
	});
	var ret = JSON.stringify(data, null, 4);
 		ret =callback+"("+ret+")";
 		res.send(ret);
}),

router.get('/msgData',function(req,res,next){
	var callback=req.query.callback;
		var data = Mock.mock({
		"code":'0000',
		"msglist|7-15":[{
		'msgtitle':'@ctitle',
		'msgword':'@csentence',
		'msgtime':'@time("HH:mm")',
		'msgicon|1-5':["@image('50x50')"]
		}]
	});
	var ret = JSON.stringify(data, null, 4);
 		ret =callback+"("+ret+")";
 		res.send(ret);
}),

module.exports = router;
