


KISSY.use('node', function (S, Node) {
	var text_title = Node.all(".text");
	text_title.on("tap",function(e){
		e.target.setAttribute("class","active");
		for (var i = 0; i < text_title.length; i++) {
			if (text_title[i] != e.target ) {
				text_title[i].setAttribute("class","text");
			};
		};
	})
	var big = Node.one(".big");
	var list_btu = Node.one("#list_btu");
	var ok = Node.one(".ok");
	var no = Node.one(".no");
	var list = Node.one("#list");
	list_btu.on("tap",function(){
		list[0].style.display = "block";
		setTimeout(function(){
			list[0].style.width = "50%";
			big[0].style.display = "block";
		},0);
	})
	ok.on("tap",function(){
		list[0].style.width = 0;
		setTimeout(function(){
			list[0].style.display = "none";
			big[0].style.display = "none";
		},300);
	})
	no.on("tap",function(){
		list[0].style.width = 0;
		setTimeout(function(){
			list[0].style.display = "none";
			big[0].style.display = "none";
		},300);
	})
	var ul = Node.all(".ul");
	var choose = Node.all(".choose");
	ul.on("tap",function(e){
		console.log(e.target.toString());
		if (e.target.toString() != "[object HTMLUListElement]") {
			if (this.getElementsByTagName('i')[0].className === "icon-angle-down") {
			for (var i = 0; i < this.getElementsByTagName("ul").length; i++) {
				var thisul = this.getElementsByTagName("ul")[i];
				thisul.style.height = 0;
				thisul.style.fontSize = 0;
				thisul.style.border = 0;
			}
			this.getElementsByTagName('i')[0].setAttribute("class","icon-angle-right");
		}
		else if (this.getElementsByTagName('i')[0].className === "icon-angle-right") {
			for (var i = 0; i < this.getElementsByTagName("ul").length; i++) {
				var thisul = this.getElementsByTagName("ul")[i];
				thisul.style.height = 4.3555*2/3 + "rem";
				thisul.style.fontSize = 1.51111*2/3 + "rem";
				thisul.style.borderTop = 1+"px" + " #ccc" + " solid"; 
			}

			this.getElementsByTagName('i')[0].setAttribute("class","icon-angle-down");
		};
		};
	})

	choose.on("tap",function(){
		console.log(this.getElementsByTagName("i")[0].style.display);
			if (this.getElementsByTagName("i")[0].style.display != "block") {
				this.getElementsByTagName("i")[0].style.display = "block";
			} else if (this.getElementsByTagName("i")[0].style.display == "block") {
				this.getElementsByTagName("i")[0].style.display = "none";
			};
	})
});

