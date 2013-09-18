/**
* 数组去重
* 利用Object类似map的特性
* */
Array.prototype.unique = function() {
	var o = {};
	for (var i=0; i<this.length; i++) {
		o[this[i]] = this[i];
	}
	var arr = [];
	for (var el in o) {
		arr.push(o[el]);
	}
	return arr;
}