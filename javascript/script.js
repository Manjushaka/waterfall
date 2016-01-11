/**
 * Created by sandy on 2016/1/8.
 */
window.onload = function(){
    waterfall("main", "box");
    //滚动事件
    window.onscroll = function(){
        if(checkScroll()){
            var oParent = document.getElementById("main");
            var imagesData = {"data":[{"src": "f01.jpg"}, {"src": "f02.jpg"}, {"src": "f03.jpg"}, {"src": "f04.jpg"},
                {"src": "f05.jpg"}, {"src": "f06.jpg"}, {"src": "f07.jpg"}, {"src": "f08.jpg"}, {"src": "f09.jpg"},
                {"src": "f10.jpg"}, {"src": "f11.jpg"}, {"src": "f12.jpg"}, {"src": "f13.jpg"}, {"src": "f14.jpg"},
                {"src": "f15.jpg"}, {"src": "f16.jpg"}, {"src": "f17.jpg"}, {"src": "f18.jpg"}, {"src": "f19.jpg"},
                {"src": "f20.jpg"}]};
            for(var i=0; i<imagesData.data.length; i++){
                var oBox = document.createElement("div");
                oBox.className = "box";
                oParent.appendChild(oBox);
                var oPic = document.createElement("div");
                oPic.className = "pic";
                var oImg = document.createElement("img");
                oImg.src = "./images/" + imagesData.data[i].src;
                oPic.appendChild(oImg);
                oBox.appendChild(oPic);
            }
            waterfall("main", "box");
        }
    };
}

function waterfall(parent, clsName){
    var oParent = document.getElementById(parent);
    var oBoxs = getElementsByClassName(parent, clsName);
    //计算列数（页面宽/box宽）
    var clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
    var boxWidth = oBoxs[0].offsetWidth;
    var cols = Math.floor(clientWidth/boxWidth);
    //console.log("clientWidth: " + clientWidth + ", boxWidth: " + boxWidth + ", cols: " +cols);
    oParent.style.cssText = "width: " + boxWidth*cols + "px; margin: 0 auto";   //设置main的宽，并居中
    var heightArr = new Array();
    for(var i=0; i<oBoxs.length; i++){
        if(i<cols){
            heightArr.push(oBoxs[i].offsetHeight);
        }else{
            var minHeight = Math.min.apply(null, heightArr);
            var indexMinHeight = getIndexMinHeight(heightArr, minHeight);
            oBoxs[i].style.position = "absolute";
            oBoxs[i].style.top = heightArr[indexMinHeight] + "px";
            oBoxs[i].style.left = boxWidth*indexMinHeight + "px";
            heightArr[indexMinHeight] += oBoxs[i].offsetHeight;
        }
    }
}

//获取class为clsName的所有子元素
function getElementsByClassName(parent, clsName){
    var boxsArr = new Array();
    var oParent = document.getElementById(parent);
    var oElements = oParent.getElementsByTagName("*");
    for(var i=0; i<oElements.length; i++){
        if(oElements[i].className == clsName){
            boxsArr.push(oElements[i]);
        }
    }
    return boxsArr;
}

//获取列高最小的列的下标
function getIndexMinHeight(arr, value){
    for(var i=0; i<arr.length; i++){
        if(arr[i]==value){
            return i;
        }
    }
}

//检查滚动条是否符合加载的条件
function checkScroll(){
    var oBoxs = getElementsByClassName("main", "box");
    var heightPic = oBoxs[oBoxs.length-1].offsetTop + Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
    var clientHight = document.body.clientHeight||document.documentElement.clientHeight;
    var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
    var height = clientHight + scrollTop;
    console.log("heightPic: " + heightPic + ", height: " + height);
    console.log("client: " + (document.body.clientHeight||document.documentElement.clientHeight));
    console.log("scroll: " + (document.body.scrollTop||document.documentElement.scrollTop));
    return (heightPic<height)?true:false;
}