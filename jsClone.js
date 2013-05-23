//js 深度克隆
function cloneObject(o){
	if(!o||'object'!=typeof o){
		return o;
	}
	var c=Object.prototype.toString.call(o) == '[object Array]'?[]:{};
	var p,v;
	for(p in o){
		if(o.hasOwnProperty(p)){
			v=o[p];
			if(v&&'object'==typeof v){
				c[p]=cloneObject(v);
			}else{
				c[p]=v;
			}
		}
	}
	return c;
}