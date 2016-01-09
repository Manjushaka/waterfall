/**
 * Created by sandy on 2016/1/8.
 */
window.onload = function(){
    waterfall("main", "box");
    //�����¼�
    window.onscroll = function(){

    };
}

function waterfall(parent, clsName){
    var oParent = document.getElementById(parent);
    var oBoxs = getElementsByClassName(parent, clsName);
    //����������ҳ���/box��
    var clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
    var boxWidth = oBoxs[0].offsetWidth;
    var cols = Math.floor(clientWidth/boxWidth);
    //console.log("clientWidth: " + clientWidth + ", boxWidth: " + boxWidth + ", cols: " +cols);
    oParent.style.cssText = "width: " + boxWidth*cols + "px; margin: 0 auto";   //����main�Ŀ�������
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

//��ȡclassΪclsName��������Ԫ��
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

//��ȡ�и���С���е��±�
function getIndexMinHeight(arr, value){
    for(var i=0; i<arr.length; i++){
        if(arr[i]==value){
            return i;
        }
    }
}