input = "319 680 180 690 129 620 762 689 762 318 368 710 720 710 629 168 160 689 716 731 736 729 316 729 729 710 769 290 719 680 318 389 162 289 162 718 729 319 790 680 890 362 319 760 316 729 380 319 728 716";
function passcodeDerivation(input){
	var numbers = input.split(' ');
	var rules = {};
	numbers.forEach(function(item){
		for(var i = 0; i < item.length; i++){
			rules[item[i]] = rules[item[i]] || {"less_than": [], "greater_than": []};
			for(var k = 0; k < i; k++){
				rules[item[i]]["greater_than"].push(item[k]);
			}
			for(var k = i + 1; k < item.length; k++){
				rules[item[i]]["less_than"].push(item[k]);
			}
		}		
	});
	var num = "";
	for(var key in rules){
		if(rules.hasOwnProperty(key)){
			num += key;
		}
	}
	var passcode = num.split('').sort(function(fir, sec){
		if(rules[fir]["greater_than"].indexOf(sec) != -1){
			return true;
		}
		return false;
	});
	return passcode;				
}			
var passcode = passcodeDerivation(input);
console.log(passcode);
