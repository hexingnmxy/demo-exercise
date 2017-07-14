var j_Q = {
	$:function(selector){
		return document.querySelectorAll(selector)
	},
	addClass:function(obj,className){
        if(typeof obj === 'object'){
        		return obj instanceof HTMLElement;
        }else{
        	return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
        }

	}
}