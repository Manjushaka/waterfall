/**
 * Created by sandy on 2016/1/10.
 */
window.onload = function(){
    waterfall("main");
    //¹ö¶¯ÊÂ¼þ
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
                oImg.src = "images/" + imagesData.data[i].src;
                oPic.appendChild(oImg);
                oBox.appendChild(oPic);
            }
            waterfall("main");
        }
    };
}

function waterfall(parent){
    var oParent = document.getElementById(parent);
    oParent.style.cssText = "-moz-column-width: 202px; -webkit-column-width: 202px;column-width: 202px;";
}