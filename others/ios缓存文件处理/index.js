var z = 0;
var q = []
function x(){
	var x = document.createElement('div');
	x.setAttribute("data-id",z);
	x.innerHTML = '<span>这是什么<span>'
	z++;
	$('body').append(x);
	var zzz = document.querySelectorAll('div');
	for(var m =0;m<zzz.length;m++){
		q.push({
			yy:$(zzz[m]).data('id')
		})
	};
}
function addDay(n){
		var date = new Date();
		    date = date.getTime()+n*24*60*60*1000;
		    date = new Date(date);
		    var year = date.getFullYear()+'年';
		    var month = date.getMonth()+1+'月';
		    var day = date.getDate()+'日';
		return year+month+day;
}
$('.xxx').on('click',function(){
	 console.log(addDay(30))
})
