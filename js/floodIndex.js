$(function(){
	$('.basic-info-content').niceScroll({
        cursorcolor: "#ccc",//滚动条的颜色
        cursoropacitymax: 1, //滚动条的透明度，从0-1
        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
        cursorwidth: "5px", //滚动条的宽度
        cursorborder: "0", // 游标边框css定义
        cursorborderradius: "5px",//以像素为光标边界半径  圆角
　　　　　　//autohidemode最好设置为true，这样切换的时候会自动隐藏滚动条
        autohidemode: true, //是否隐藏滚动条  true的时候默认不显示滚动条，当鼠标经过的时候显示滚动条
        zindex:"auto",//给滚动条设置z-index值
        railpadding: { top:0, right:0, left:0, bottom:0 }//滚动条的位置
    });
    $('.cons-detail-box').niceScroll({
        cursorcolor: "#ccc",//滚动条的颜色
        cursoropacitymax: 1, //滚动条的透明度，从0-1
        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
        cursorwidth: "5px", //滚动条的宽度
        cursorborder: "0", // 游标边框css定义
        cursorborderradius: "5px",//以像素为光标边界半径  圆角
　　　　　　//autohidemode最好设置为true，这样切换的时候会自动隐藏滚动条
        autohidemode: true, //是否隐藏滚动条  true的时候默认不显示滚动条，当鼠标经过的时候显示滚动条
        zindex:"auto",//给滚动条设置z-index值
        railpadding: { top:0, right:0, left:0, bottom:0 }//滚动条的位置
    });
    //生成形势图
    $('#img-result').click(function(){
        layui.use(['layer'],function (ex) {
            let layer = layui.layer;
            layer.open({
                type: 2,
                area:['1130px','670px'],
                title:'形势图预览',
                shade:0.8,
                /*offset:['100px','500px'],*/
                content:'flood.html'
            });
        })
    });
    //注意：折叠面板 依赖 element 模块，否则无法进行功能性操作
    layui.use(['element','form'], function(){
      var element = layui.element,
          form = layui.form;
      form.on('submit(form-city)', function(data){
        return false;
      });
    });
    //数据管理点击左侧列表
    $('#left-list li').click(function(){
        var index = $(this).index();
        $('#one-img').attr("src","images/one0.svg");
        $('#two-img').attr("src","images/one1.svg");
        $('#three-img').attr("src","images/one2.svg");
        $('#four-img').attr("src","images/one3.svg");
        $('#five-img').attr("src","images/one4.svg");
        $(this).siblings().find('span').css('color','#000000');
        $(this).find('img').attr("src","images/one"+index+"hover.svg");
        $(this).find('span').css('color','#1789FF');
    });
    // 点击显示列表
    $('.titleImg').click(function(){
        $('#list-box').toggle();
    });
    // 点击显示具体内容
        $(".det-box").find('.detail-area').hide();
        $(".det-box").click(function(){
            $(this).find('.detail-area').show();
            $(this).siblings().find('.detail-area').hide();
        })
      })