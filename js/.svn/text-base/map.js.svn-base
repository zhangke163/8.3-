/**
 * @author:bobli
 * @date:2018
 * @version:1.0.0
 *
 */

$(function () {
    let map =null;//全局地图变量
    let editableLayers = new L.featureGroup();
    //配置地图图标
    let MapIconConf = L.Icon.extend({
        options:{
            iconSize:[25,25]
        }
    });
    let whqyIcon =  new MapIconConf({
        iconUrl:'images/21.png'
    });
    let yyIcon = new MapIconConf({
        iconUrl: 'images/15.png'
    });
    let bncsIcon = new MapIconConf({
        iconUrl:'images/30.png'
    });
    let njlIcon = new MapIconConf({
        iconUrl:'images/20.png'
    });
    let whqy = L.geoJSON(iconWHQY,{
        pointToLayer:function (feature,latlng) {
            return L.marker(latlng, {
                icon: whqyIcon
            });
        }
    });
    let yy =L.geoJSON(iconYY,{
        pointToLayer:function (feature,latlng) {
            return L.marker(latlng, {
                icon: yyIcon
            });
        }
    });
    let bncs =L.geoJSON(iconBNCS,{
        pointToLayer:function (feature,latlng) {
            return L.marker(latlng, {
                icon: bncsIcon
            });
        }
    });
    let njl =L.geoJSON(iconNJL,{
        pointToLayer:function (feature,latlng) {
            return L.marker(latlng, {
                icon: njlIcon
            });
        }
    });
    let jiJiaWanReserviorIcon = L.geoJSON(jiJiaWanReservior,{
        pointToLayer:function (feature,latlng) {
            return L.marker(latlng, {
                icon: new MapIconConf({
                    iconUrl:'images/4.png'
                })
            });
        }
    }), jiJiaWanDangerousEnterpriseIcon = L.geoJSON(jiJiaWanDangerousEnterprises,{
        pointToLayer:function (feature,latlng) {
            return L.marker(latlng, {
                icon: new MapIconConf({
                    iconUrl:'images/21.png'
                })
            });
        }
    });
    //添加天地图矢量与卫星影像地图
    let normalm = L.tileLayer.chinaProvider('TianDiTu.Normal.Map',{
            maxZoom: 18,
            minZoom: 5
        }),
        normala = L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion',{
            maxZoom: 18,
            minZoom: 5
        }),
        imgm = L.tileLayer.chinaProvider('TianDiTu.Satellite.Map', {
            maxZoom: 18,
            minZoom: 5
        }),
        imga = L.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion', {
            maxZoom: 18,
            minZoom: 5
        });
    //地图分组
    let vector = L.layerGroup([normalm,normala]),
        image = L.layerGroup([imgm,imga]);
    let baseLayers ={
        "地图":vector,
        "影像":image
    };
    //新建一个地图对象
    map = L.map('map',{
        center:[30.72805, 120.10177],
        zoom:15,
        layers:[whqy,yy,bncs,njl,image],
        zoomControl:false,
        attributionControl: false
    });

    //向地图中添加地图切换按钮
    L.control.layers(baseLayers).addTo(map);

    //向地图中添加放大缩小控件
    L.control.zoom({
        zoomInTitle: '放大',
        zoomOutTitle: '缩小',
        position:'topright'
    }).addTo(map);

    //向地图中添加坐标
    L.control.mousePosition({
        'position': 'bottomright'
    }).addTo(map);
    //添加绘制工具
    initDrawControl();
    //矢量图层与影像图层切换
    $('#tab-box li').click(function(e){
        let el  = e.target;
        $(this).siblings().removeClass('tab-active');
        $(this).addClass('tab-active');
        switch (el.innerText) {
            case "矢量图":
                map.removeLayer(image);
                map.addLayer(vector);
                break;
            case "影像图":
                map.removeLayer(vector);
                map.addLayer(image);
                break;
        }
    });
    // 定位村庄
    $('#query').click(function (element) {
        let area = $('#areaid').val();
        switch (area) {
            //村子行政代号编码 请见assets/location.js
            case "110101":
                map.setView(L.latLng(countyLocation[0][2][1],countyLocation[0][2][0]),17);
                map.addLayer(jiJiaWanReserviorIcon);
                map.addLayer(jiJiaWanDangerousEnterpriseIcon);
                break;
            case "110102":
                map.setView(L.latLng(countyLocation[1][2][1],countyLocation[1][2][0]),17);
                break;
            case "110202":
                map.setView(L.latLng(countyLocation[2][2][1],countyLocation[2][2][0]),17);
                break;
            case "110203":
                map.setView(L.latLng(countyLocation[3][2][1],countyLocation[3][2][0]),17);
                break;
            case "120102":
                map.setView(L.latLng(countyLocation[4][2][1],countyLocation[4][2][0]),17);
                break;
            case "120103":
                map.setView(L.latLng(countyLocation[5][2][1],countyLocation[5][2][0]),17);
                break;
            case "120202":
                map.setView(L.latLng(countyLocation[6][2][1],countyLocation[6][2][0]),17);
                break;
            case "120203":
                map.setView(L.latLng(countyLocation[7][2][1],countyLocation[7][2][0]),17);
                break;
        }
    });
    /**
     *方法
     *
     */
    function initDrawControl() {
        let options = {
            position: 'topright',
            draw: {
                marker: false, // Turns off this drawing tool
                polyline: true,
                polygon: true,
                circle: false,
                rectangle: false,
                circlemarker:false
            },
            edit: false
        };
        drawControl = new L.Control.Draw(options);
        map.addControl(drawControl);
        map.addLayer(editableLayers);
        //绘制完成调用事件
        map.on(L.Draw.Event.CREATED,function (event) {
            let layer = event.layer;
            editableLayers.addLayer(layer);
        })
    }

});

