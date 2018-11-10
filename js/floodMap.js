$(function () {
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

    //新建一个地图对象
    map = L.map('mapContainer',{
        center:[30.72805, 120.10177],
        zoom:15,
        layers:[whqy,yy,bncs,njl,image],
        zoomControl:false,
        attributionControl: false
    });
});