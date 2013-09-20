function Map() {
	this.m = {};
}
Map.prototype.put = function(key, value) {
	this.m[key] = value;
}
Map.prototype.get = function(key) {
	return this.m[key];
}
Map.prototype.remove = function(key) {
	delete this.m[key];
}
Map.prototype.contain = function(key) {
	return this.m.hasOwnProperty(key);
}
Map.prototype.getKeys = function() {
	var arr = [];
	for(var o in this.m) {
		arr.push(o);
	}
	return arr;
}
Map.prototype.getValues = function() {
	var arr = [];
	for(var o in this.m) {
		arr.push(this.m[o]);	
	}
	return arr;
}