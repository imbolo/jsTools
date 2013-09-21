/**
* 用于IE和Safari，解决其Array的sort方法不能传入函数作为排序规则的问题
* */
(function(window){
	var ua = window.navigator.userAgent.toLowerCase(), 
	reg = /msie|applewebkit.+safari/; 
	if(reg.test(ua)){ //如果是IE或者safari的话
		var _sort = Array.prototype.sort; 
		Array.prototype.sort = function(fn){ 
			if(!!fn && typeof fn === 'function'){ 
				if(this.length < 2) return this; 
				var i = 0, j = i + 1, l = this.length, tmp, r = false, t = 0; 
				for(; i < l; i++){ 
					for(j = i + 1; j < l; j++){ 
						t = fn.call(this, this[i], this[j]); 
						r = (typeof t === 'number' ? t : !!t ? 1 : 0) > 0 
						? true : false; 
						if(r){ 
							tmp = this[i]; 
							this[i] = this[j]; 
							this[j] = tmp; 
						} 
					} 
				} 
				return this; 
			}
			else { 
				return _sort.call(this); 
			} 
		}; 
		
	}
})(window);