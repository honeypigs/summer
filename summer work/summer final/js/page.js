KISSY.use('node', function (S, Node) {
	var Body1 = Node.one(".page1");
    var Body2 = Node.one(".page2");
    var totalheight = window.innerHeight;
    var divheight = Node.one(".section").height();
    var start = 0;
    var len = parseInt(totalheight) / parseInt(divheight); 
    if (len%1 != 0) {
        len = parseInt(len) + 1;
    }
    console.log(len,totalheight,divheight);

    $.ajax({    
        url: 'http://kaohe.zeroling.com/kaohe/list',
        type: 'POST',
        data:{"start": start,"len": len},
        dataType: 'json',
        success: function(JsonData){
            console.log(JsonData);
            start += len;
            len = 4;
            initPage(Body1,JsonData.data);
            initPage(Body2,JsonData.data);
        },
        error : function (){
            alert("error");
        }
    });

    Body1.on("swipe",function(e){
        if (e.direction == "up" ) {

         $.ajax({    
            url: 'http://kaohe.zeroling.com/kaohe/list',
            type: 'POST',
            data:{"start": start,"len": len},
            dataType: 'json',
            success: function(JsonData){
                start += len;
                len = 4;
                initPage(Body1,JsonData.data);
            },
            error : function (){
                alert("error");
            }
        });

     };
 })

    Body2.on("swipe",function(e){
        if (e.direction == "up" ) {

         $.ajax({    
            url: 'http://kaohe.zeroling.com/kaohe/list',
            type: 'POST',
            data:{"start": start,"len": len},
            dataType: 'json',
            success: function(JsonData){
                start += len;
                len = 4;
                initPage(Body2,JsonData.data);
            },
            error : function (){
                alert("error");
            }
        });

     };
 })

    function initPage(body,JsonData){
        console.log(JsonData);
     for (var i = 0; i < JsonData.length; i++) {
        var data  = JsonData[i];

        var title = data.title.split("");
        if (title.length > 10) {
          title =  title.slice(0,10);
          title.push("...");
      }
      title = title.join("");
      var HTML = "<div class=\"section\"><div class=\"img\"><img src=\"" + data.imgUrl + "\" alt=\"..\"></div><div class=\"content\"><p class=\"storeName\">" + title;

      var flag = data.flag.split("|");
      var flagPart = "";
      if (flag != "") {
         for (var  n = 0; n < flag.length; n++) {
            flagPart += " <i><img src=\"../img/" + flag[n] + ".png\" alt=\"\"></i> ";
        }
    }
    HTML += flagPart + "</p><p class=\"star\">";

    var starPart = "star";
    switch(data.stars){
        case "0":
        starPart = "star0";
        break;
        case "0.5":
        starPart = "star0.5";
        break;
        case "1":
        starPart = "star1";
        break;
        case "1.5":
        starPart = "star1.5";
        break;
        case "2":
        starPart = "star2";
        break;
        case "2.5":
        starPart = "star2.5";
        break;
        case "3":
        starPart = "star3";
        break;
        case "3.5":
        starPart = "star3.5";
        break;
        case "4":
        starPart = "star4";
        break;
        case "4.5":
        starPart = "star4.5";
        break;
        case "5":
        starPart = "star5";
        break;
    }
    HTML += "<i><img src=\"../img/" + starPart +".png\" alt=\"\"></i>人均" + data.average + "元</p><p class=\"data\"><label>";

    if (data.good > 0) {
        HTML += "<i><img src=\"../img/good.png\" alt=\"\"></i>" + data.good +"位朋友</label>" + data.distance + "</p></div><div class=\"cutdown\"><label class=\"num\">" + data.discount + "</label>折</div></div>";
    } else {
        HTML += data.people + "人已享</label>" + data.distance + "</p></div><div class=\"cutdown\"><label class=\"num\">" + data.discount + "</label>折</div></div>";
    }
    body.append(HTML);
}
}

});


JsonData =  [
{
    "title": "新白鹿餐厅(滨江店)", //店名
    "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
    "stars": "3.5", //星星
    "good": 12, //如果这个数大于0, 就显示大拇指
    "people": 813, //否则显示这个(看图)
    "average": 52, //平均消费
    "discount": "7.5", //打折, 只会有X, X.5折两种
    "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
    "distance": "<100m" //距离
},  
{
    "title": "新白鹿餐厅(滨江店)", //店名
    "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
    "stars": "3.5", //星星
    "good": 0, //如果这个数大于0, 就显示大拇指
    "people": 813, //否则显示这个(看图)
    "average": 52, //平均消费
    "discount": "7.5", //打折, 只会有X, X.5折两种
    "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
    "distance": "<100m" //距离
},
{
    "title": "新白鹿餐厅(滨江店)", //店名
    "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
    "stars": "5", //星星
    "good": 6, //如果这个数大于0, 就显示大拇指
    "people": 813, //否则显示这个(看图)
    "average": 52, //平均消费
    "discount": "5", //打折, 只会有X, X.5折两种
    "flag": "qiang", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
    "distance": "<100m" //距离
},
{
    "title": "新白鹿餐厅(滨江店)", //店名
    "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
    "stars": "3.5", //星星
    "good": 6, //如果这个数大于0, 就显示大拇指
    "people": 813, //否则显示这个(看图)
    "average": 52, //平均消费
    "discount": "7.5", //打折, 只会有X, X.5折两种
    "flag": "qiang|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
    "distance": "156165m" //距离
},
{
    "title": "新白鹿餐厅(滨江店)", //店名
    "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
    "stars": "3.5", //星星
    "good": 6, //如果这个数大于0, 就显示大拇指
    "people": 813, //否则显示这个(看图)
    "average": 52, //平均消费
    "discount": "7.5", //打折, 只会有X, X.5折两种
    "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
    "distance": "<100m" //距离
},
{
    "title": "(滨江店)", //店名
    "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
    "stars": "3.5", //星星
    "good": 6, //如果这个数大于0, 就显示大拇指
    "people": 813, //否则显示这个(看图)
    "average": 52, //平均消费
    "discount": "7.5", //打折, 只会有X, X.5折两种
    "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
    "distance": "<100m" //距离
},
{
    "title": "新白鹿餐厅()", //店名
    "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
    "stars": "3.5", //星星
    "good": 6, //如果这个数大于0, 就显示大拇指
    "people": 813, //否则显示这个(看图)
    "average": 52, //平均消费
    "discount": "7.5", //打折, 只会有X, X.5折两种
    "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
    "distance": "<100m" //距离
},
{
    "title": "新白鹿餐厅(滨江店)", //店名
    "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
    "stars": "3.5", //星星
    "good": 6, //如果这个数大于0, 就显示大拇指
    "people": 813, //否则显示这个(看图)
    "average": 52, //平均消费
    "discount": "7.5", //打折, 只会有X, X.5折两种
    "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
    "distance": "<100m" //距离
},
{
    "title": "新白鹿餐厅(滨江店)", //店名
    "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
    "stars": "3.5", //星星
    "good": 6, //如果这个数大于0, 就显示大拇指
    "people": 8121, //否则显示这个(看图)
    "average": 555, //平均消费
    "discount": "7.5", //打折, 只会有X, X.5折两种
    "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
    "distance": "<100m" //距离
},
];







