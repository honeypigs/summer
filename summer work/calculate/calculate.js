var output1 = document.querySelector("#output1");
var output2 = document.querySelector("#output2");
var font= document.querySelectorAll(".font");
var num = document.querySelectorAll(".num");

function Add(arr1,arr2){
	var i;
	var more = 0;
	var nagtive = false;
	var result = [];
	if (arr1[0] == "-") {
		if (arr2[0] == "-") {
			arr1.shift();
			arr2.shift();
			nagtive = true;
		}else{
			arr1.shift();
			return Reduce(arr2,arr1);
		}
	}else if (arr2[0] == "-"){
		return Reduce(arr1,arr2);
	}


	len = arr1.length>arr2.length?arr1.length:arr2.length;
	if (arr1.length > arr2.length) {
		for (i = arr2.length; i < len; i++) {
			arr2.unshift("0");
		}
	}else if(arr2.length > arr1.length){
		for(i = arr1.length; i < len; i++){
			arr1.unshift("0");
		}
	}
	for (var i = len - 1; i > -1; i--) {
		var r = parseInt(arr1[i]) + parseInt(arr2[i]) + more;
		if (r < 10) {
			result.unshift(r);
			more = 0;
		} else if (r > 9){
			more = 1;
			r = r%10; 
			result.unshift(r);
		}
		i == 0&&more == 1&&result.unshift(more);
	}
	if (nagtive) {
		result.unshift("-");
	}
	return result.join("");
}

function Reduce(arr1,arr2){
	var i;
	var more = 0;
	var nagtive = false;
	var result = [];
	if (arr1[0] == "-") {
		if (arr2[0] == "-") {
			arr2.shift();
			return Add(arr1,arr2);
		}else{
			arr2.unshift("-");
			return Add(arr2,arr1);
		}
	}else if (arr2[0] == "-"){
		arr2.shift();
		return Add(arr1,arr2);
	}

	len = arr1.length > arr2.length?arr1.length:arr2.length;
	if (arr1.length > arr2.length) {
		for (i = arr2.length; i < len; i++) {
			arr2.unshift("0");
		}
	}else if(arr2.length > arr1.length){
		for(i = arr1.length; i < len; i++){
			arr1.unshift("0");
		}
	}

	if (parseInt(arr1.join("")) < parseInt(arr2.join(""))) {
		nagtive = arr1;
		arr1 = arr2;
		arr2 = nagtive;
		nagtive = true;
	} else if (arr1.join("") == arr2.join("")) {
		return 0;
	}

	for (var i = len - 1; i > -1; i--) {
		var r = parseInt(arr1[i]) - parseInt(arr2[i]) - more;
		if (r > -1) {
			result.unshift(r);
			more = 0;
		} else if (r < 0){
			more = 1;
			r = r + 10; 
			result.unshift(r);
		} 
	}
	if (nagtive) {
		result.unshift("-");
	}
	return result.join("");
}


function Multiply(arr1,arr2){
	var n = 0;
	var RESULT = [0];
	var len = 0;
	if (arr1[0] == "-") {
		n ++;
		arr1.shift();
	}
	if (arr2[0] == "-") {
		n ++;
		arr2.shift();
	}
	len = arr2.join("");
	for (var i = 0; i < len; i++) {
		RESULT = Add(arr1,RESULT);
		RESULT = RESULT.split("");
	}
	if (n == 1) {
		RESULT.unshift("-");
	}
	return RESULT.join("");
}

function Divide(arr1,arr2) {
	arr2 = arr2.join("");
	var count = 0;
	var n = 0;
	var result = [];
	var temp = [];
	var k = true;

	if (arr1[0] == "-") {
		n ++;
		arr1.shift();
	}
	if (arr2[0] == "-") {
		n ++;
		arr2.shift();
	}
	if (arr2 == 0 ) {
		alert("error");
		return NaN;
	}
	if (arr1 == 0) {
		return 0;
	}
	if (parseInt(arr1.join("")) < arr2) {
		result.push(0);
		result.push(".");
		for (var i = 0; i < 5; i++) {
			if(parseInt(arr1.join("")) < arr2){
				arr1.push(0);
				result.push(0);
			} else{
				result.push(Math.floor(parseInt(arr1.join(""))/arr2));
				arr1 = parseInt(arr1.join("")) - Math.floor(parseInt(arr1.join(""))/arr2)*arr2 + "0"; 
				arr1 = arr1.split("");
			}	
		}
		return result.join("");
	}
	if (parseInt(arr1.join("")) > arr2) {
		for (var i = 0; i < arr2.length; i++) {
			temp.push(arr1[i]);
		};
		while(count < 6){
			result.push(Math.floor(parseInt(temp.join(""))/arr2));
			if (arr1[i] == undefined) {
				temp = parseInt(temp.join("")) - Math.floor(parseInt(temp.join(""))/arr2)*arr2 + "0";
				temp = temp.split("");
				if (k) {
					result.push(".");
					k = false;
				}
				count++;
			}else {
				temp = parseInt(temp.join("")) - Math.floor(parseInt(temp.join(""))/arr2)*arr2 + arr1[i].toString();
				temp = temp.toString().split("");
				i++;
			}
		}
		i = 0;
		while (result[i] == 0) {
			result.shift();
			i++;
		}
		return result.join("");
	}
}

(function(){
	var show = [];
	var arr1 = [];
	var arr2 = [];
	var result;
	var isarr1 = true;
	var isOK = true;
	var cal;
	var four;
	for (var i = 0; i < num.length; i++) {
		num[i].addEventListener("click",function(e){
			show.push(e.target.textContent);
			output2.innerHTML = show.join("");
			if (isarr1) {
				arr1.push(e.target.textContent);
			} else{
				arr2.push(e.target.textContent);
			}
			console.log(arr1,four,arr2);
		})
	}

	for (var i = 0; i < font.length; i++) {
		font[i].addEventListener("click",function(e){
			cal = e.target.textContent;
			if (cal != "C" && cal != "=") {
				if (isOK) {
					four = e.target.textContent;
				};
				show.push(cal);
				output2.innerHTML = show.join("");
				isarr1 = false;
				isOK = false;
			}
			if (arr1[0] == "") {
				return;
			};
			if (cal == "C") {
				show = [];
				arr1 = [];
				arr2 = [];
				isarr1 = true;
				isOK = true;
				output2.innerHTML = show.join("");
				output1.innerHTML = show.join("");
			}
			if (cal == "=") {
				console.log(arr1,arr2);
					switch (four){
					case "+":
						result = Add(arr1,arr2);
						break;
					case "-":
						result = Reduce(arr1,arr2);
						break;
					case "×":
						result = Multiply(arr1,arr2);
						break;
					case "÷":
						result = Divide(arr1,arr2);
						break;
				}
				arr1 = result.toString().split("");
				arr2 = [];
				isOK = true;
				four = e.target.textContent;
				output2.innerHTML = result;
				output1.innerHTML = show.join("");
				return;
			} else if (arr1.length != 0&&arr2.length != 0) {
					switch (four){
						case "+":
							result = Add(arr1,arr2);
							break;
						case "-":
							result = Reduce(arr1,arr2);
							break;
						case "×":
							result = Multiply(arr1,arr2);
							break;
						case "÷":
							result = Divide(arr1,arr2);
							break;
					}
					isOK = true;
					four = e.target.textContent;
					arr1 = result.toString().split("");
					arr2 = [];
					output1.innerHTML = show.join("");
					return;
				}			
		})
}
})();