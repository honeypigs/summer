KISSY.use('node', function (S, Node) {
	var btn = Node.one(".btn");
	var page1 = $(".page1");
	var page2 = $(".page2");
	var page3 = $(".page3");
	var page4 = $(".page4");
	var page5 = $(".page5");
	var pages = [page1,page2,page3,page4,page5];


	btn.on("tap",function(){
		$.ajax({
			url:"http://kaohe.zeroling.com/kaohe/state",
			type:"POST",
			dataType: 'json',
			success: function(JsonData){
				console.log(JsonData.state);
                    switch (JsonData.state){
                    	case "1" :
                    		show(page1);
                    		break;
                    	case "2" :
                    		show(page2);
                    		break;
                    	case "3" :
                    		show(page3);
                    		break;
                    	case "4" :
                    		show(page4);
                    		break;
                    	case "5" :
                    		show(page5);
                    		break;

                    }
                },
                error : function (){
                    alert("error");
                }
		});
	});
	function show(obj) {
		$(".btn").removeClass("show");
		for (var i = 0; i < pages.length; i++) {
			if (pages[i] != obj) {
				console.log(pages[i]);
				pages[i].removeClass("show");
			} else{
				obj.addClass("show");
				var head = Node.one("head");
				i++;
				var LINK = "<link rel=\"stylesheet\" href=\"../css/page" + i + ".css\">" 
				head.append(LINK); 
			}
			
		};
	}

});
