/**
* 类型检测
* */

/**
* 数组检测
* */
function isArray(value) {
	return Object.prototype.toString.call(value) == "[object Array]";
}

/**
* 原生函数
* */
function isFunction(value) {
	return Object.prototype.toString.call(value) == "[object Function]";
}

/**
* 正则表达式
* */
function isRegExp(value) {
	return Object.prototype.toString.call(value) == "[object RegExp]";
}