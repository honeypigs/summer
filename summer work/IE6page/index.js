(function(){//导航
	var meau = document.getElementById("meau");
	for(var i = 0,len = meau.children.length;i < len;i++){
		eventHandler.addEvent(meau.children[i],"mouseover",function(e){
			this.children[1].style.display = "block";
		});
		eventHandler.addEvent(meau.children[i],"mouseout",function(e){
			this.children[1].style.display = "none";
		});
	}
		
})();

(function(){//轮播
	var ulw = document.getElementById("wrapper"),
	dot = document.getElementById("dot"),
	pre = document.getElementById("pre"),
	next = document.getElementById("next"),
	play = new Carousel(980,3000);
	play.pushElement(ulw);
	play.pushcallbackElement(dot);
	play.start();
	eventHandler.addEvent(dot,"click",function(e){
		var tar = e.target;
		if(tar.nodeName == "A"){
			play.click(tar.number)
		}
	});
	eventHandler.addEvent(pre,"click",function(e){
		if(play.count > 0){
			play.click(play.count - 1)
		}
	});
	eventHandler.addEvent(next,"click",function(e){
		if(play.count < 4){
			play.click(play.count + 1)
		}
	});
})();