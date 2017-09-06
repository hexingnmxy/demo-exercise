const actions = {
	increment1: function(context,n) {
		context.commit('increment', n);
	},
	incrementx: function(context, obj) {
		context.commit('incrementx', obj);
	}
}

export default actions;