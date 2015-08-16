(function(){
	var papa = document.querySelector("#papa");
	var ez = document.querySelectorAll(".ez");
	var hehe = document.querySelector("#hehe");
	var allchecked = false;
	papa.addEventListener("click",function(){
		if(allchecked === false){
			papa.checked = true;
			for (var i = 0; i < ez.length; i++) {
				ez[i].checked = true;
			};
			allchecked = true;
		} else if(allchecked === true) {
			papa.checked = false;
			for (var i = 0; i < ez.length; i++) {
				ez[i].checked = false;
			};
			allchecked = false;
		}
	})

	for (var i = 0; i < ez.length; i++) {
		ez[i].addEventListener("click",function(){
			if (this.checked == false) {
				allchecked = false;
				papa.checked = false;
			}
			if (ez[0].checked == true && ez[1].checked == true && ez[2].checked == true && ez[3].checked == true) {
				papa.checked = true;
			};
		})
	};

	hehe.addEventListener("click",function(){
		for (var i = 0; i < ez.length; i++) {
			if (ez[i].checked == true) {
				ez[i].checked = false;
			}
			else if (ez[i].checked == false) {
				ez[i].checked = true
			}
			if (ez[0].checked == true && ez[1].checked == true && ez[2].checked == true && ez[3].checked == true) {
				papa.checked = true;
			} else {
				papa.checked = false;
			}
		};
	})
})();