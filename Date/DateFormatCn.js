/**
* 2012年12月29日	===>  二〇一二年十二月二十九日
**/
Date._arrNumCN = ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十",
       "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十",
       "二十一", "二十二", "二十三", "二十四", "二十五", "二十六", "二十七", "二十八", "二十九", "三十", "三十一"];
Date.prototype.toCNDateString = function() {
	var arrNumCN = Date._arrNumCN;
	var result = this.toLocaleDateString();
	result = result.replace(/\d/g, function(index){
		return arrNumCN[index];
	});
	return result;
}