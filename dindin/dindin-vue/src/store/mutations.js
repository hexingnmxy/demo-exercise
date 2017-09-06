const mutations = {
	increment:function(state, n) {
		state.x += n
	},
	incrementx:function(state, n) {
		console.log(n)
	}
}

export default mutations;