window.onload = function(){
    var json = [
        {  // 2
            width:360,
            top:20,
            left:15,
            opacity:50,
            z:3
        },
        {   // 3
            width:393,
            top:10,
            left:383,
            opacity:100,
            z:4
        },
        {  // 4
            width:360,
            top:20,
            left:785,
            opacity:50,
            z:3
        }
    ];
    
    var slide = document.getElementById("slide");
    var liArr = slide.getElementsByTagName("li");
    var arrow = slide.children[1];
    var arrowChildren = arrow.children;
    var flag = true;
    
    
    //箭头的显示和隐藏
    slide.onmouseenter = function(){
		animate(arrow,{"opacity":100});
    }
    slide.onmouseleave = function(){
		animate(arrow,{"opacity":0});
    }
    
    
    //开始时的图片的滑出
    move();
//  for(var i=0;i<liArr.length;i++){
//  	animate(liArr[i],{
//  		"width":json[i].width,
//  		"top":json[i].top,
//  		"left":json[i].left,
//  		"opacity":json[i].opacity,
//  		"zIndex":json[i].z,
//  	});
//  }

	
	//点击箭头：图片移动
	for(var k in arrowChildren){
        arrowChildren[k].onclick = function () {
            if(this.className === "prev"){
                    move(true);
            }else{
                    move(false);
            }
        }
    }
	
	
	function move(bool){
        //判断：如果等于undefined,那么就不执行这两个if语句
        //if(bool === true || bool === false){
        if(bool !== undefined){
            if(bool){
                // (操作数组。反向旋转：删除数组中最后一个元素，添加到数组中的第一位)
                json.unshift(json.pop());
            }else{
                // (操作数组。正向旋转：删除数组中第一个元素，添加到数组中的最后一位)
                json.push(json.shift());
            }
        }
        
        //在次为页面上的所有li赋值属性，利用缓动框架
        for(var i=0;i<liArr.length;i++){
            //利用animate()框架让指定的属性，缓慢运动到指定位置。
            animate(liArr[i],{
                "width":json[i].width,  //第一个li，必须对应第一个数组元素中的第一个的指定属性
                "top":json[i].top,
                "left":json[i].left,
                "opacity":json[i].opacity,
                "zIndex":json[i].z
            });
        }
        
    }
	


    
}
