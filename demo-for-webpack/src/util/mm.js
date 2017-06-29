var _ = require('underscore');


var publicMethod={
	init:function(){
		console.log(111);
	},
	renderHtml:function(tpl,data){
		if(!tpl || !data){
			return;
		}
		var compiled = _.template(tpl);
		var html = compiled(data); 
		return html;
	}
}

module.exports = publicMethod;