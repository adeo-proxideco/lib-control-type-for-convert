var assert = require("assert");
var should = require('should');
var adeoControleTypeForConvert=require('../index');


var tests=[
	{ value:'    ', message:'\'    \'', isString: true
	},
	{ value:'', message:'\'\'', isString: true
	},
	{ value:'test', message:'\'test\'', isString: true, isNotEmpty: true
	},
	{ value:'123', message:'\'123\'', isString: true, isInteger:true, isNumber:true, isNotEmpty: true
	},
	{ value:'123.43', message:'\'123.43\'', isString: true, isNumber:true, isNotEmpty: true
	},
	{ value:'123,43', message:'\'123,43\'', isString: true, isNotEmpty: true
	},
	{ value:'true', message:'\'true\'', isString: true, isBoolean:true, isNotEmpty: true
	},
	{ value:'false', message:'\'false\'', isString: true, isBoolean:true, isNotEmpty: true
	},
	{ value:'{}', message:'\'{}\'', isString: true, isNotEmpty: true
	},
	{ value:'[]', message:'\'[]\'', isString: true, isNotEmpty: true
	},
	{ value:'function(){};', message:'\'function(){};\'', isString: true, isNotEmpty: true
	},
	{ value:123, message:'123', isInteger:true, isNumber:true, isNotEmpty: true
	},
	{ value:123.43, message:'123.43', isNumber:true, isNotEmpty: true
	},
	{ value:true, message:'true', isBoolean:true, isNotEmpty: true
	},
	{ value:false, message:'false', isBoolean:true, isNotEmpty: true
	},
	{ value:null, message:'null'
	},
	{ value:undefined, message:'undefined'
	},
	{ value:NaN, message:'NaN'
	},
	{ value:{}, message:'{}', isNotEmpty: true
	},
	{ value:[], message:'[]'
	},
	{ value:function(){}, message:'function(){}', isNotEmpty: true
	}
];

describe('isString', function(){
    describe('#true', function(){
    	var fct=function(test){
    		it('should return true for the value '+test.message, function(){
		      	should(adeoControleTypeForConvert.isString(test.value)).be.ok;
		    })
    	}
		for (var i in tests){
			var test=tests[i];
			if(test.isString){
				fct(test);
			}
		}
  	})
	describe('#false', function(){
    	var fct=function(test){
			it('should return false for the value '+test.message, function(){
		      	should(adeoControleTypeForConvert.isString(test.value)).not.be.ok;
		    })
    	}
		for (var i in tests){
			var test=tests[i];
			if(!test.isString){
				fct(test);
			}
		}
	})
})

describe('isInteger', function(){
    describe('#true', function(){
    	var fct=function(test){
    		it('should return true for the value '+test.message, function(){
		      	should(adeoControleTypeForConvert.isInteger(test.value)).be.ok;
		    })
    	}
		for (var i in tests){
			var test=tests[i];
			if(test.isInteger){
				fct(test);
			}
		}
  	})
	describe('#false', function(){
    	var fct=function(test){
			it('should return false for the value '+test.message, function(){
		      	should(adeoControleTypeForConvert.isInteger(test.value)).not.be.ok;
		    })
    	}
		for (var i in tests){
			var test=tests[i];
			if(!test.isInteger){
				fct(test);
			}
		}
	})
})

describe('isNumber', function(){
    describe('#true', function(){
    	var fct=function(test){
    		it('should return true for the value '+test.message, function(){
		      	should(adeoControleTypeForConvert.isNumber(test.value)).be.ok;
		    })
    	}
		for (var i in tests){
			var test=tests[i];
			if(test.isNumber){
				fct(test);
			}
		}
  	})
	describe('#false', function(){
    	var fct=function(test){
			it('should return false for the value '+test.message, function(){
		      	should(adeoControleTypeForConvert.isNumber(test.value)).not.be.ok;
		    })
    	}
		for (var i in tests){
			var test=tests[i];
			if(!test.isNumber){
				fct(test);
			}
		}
	})
})

describe('isBoolean', function(){
    describe('#true', function(){
    	var fct=function(test){
    		it('should return true for the value '+test.message, function(){
		      	should(adeoControleTypeForConvert.isBoolean(test.value)).be.ok;
		    })
    	}
		for (var i in tests){
			var test=tests[i];
			if(test.isBoolean){
				fct(test);
			}
		}
  	})
	describe('#false', function(){
    	var fct=function(test){
			it('should return false for the value '+test.message, function(){
		      	should(adeoControleTypeForConvert.isBoolean(test.value)).not.be.ok;
		    })
    	}
		for (var i in tests){
			var test=tests[i];
			if(!test.isBoolean){
				fct(test);
			}
		}
	})
})

describe('isNotEmpty', function(){
    describe('#true', function(){
    	var fct=function(test){
    		it('should return true for the value '+test.message, function(){
		      	should(adeoControleTypeForConvert.isNotEmpty(test.value)).be.ok;
		    })
    	}
		for (var i in tests){
			var test=tests[i];
			if(test.isNotEmpty){
				fct(test);
			}
		}
  	})
	describe('#false', function(){
    	var fct=function(test){
			it('should return false for the value '+test.message, function(){
		      	should(adeoControleTypeForConvert.isNotEmpty(test.value)).not.be.ok;
		    })
    	}
		for (var i in tests){
			var test=tests[i];
			if(!test.isNotEmpty){
				fct(test);
			}
		}
	})
})