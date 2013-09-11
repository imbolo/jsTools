//js 深度克隆
function cloneObject(o){
	//如果o为undefined/null或者o不是object
	if(!o||'object'!=typeof o){
		return o;
	}
	//判断克隆目标是否是数组
	var c=Object.prototype.toString.call(o) == '[object Array]'?[]:{};
	var p,v;
	for(p in o){
		if(o.hasOwnProperty(p)){
			v=o[p];
			//如果某项变量是object递归
			if(v&&'object'==typeof v){
				c[p]=cloneObject(v);
			}else{
				c[p]=v;
			}
		}
	}
	return c;
}