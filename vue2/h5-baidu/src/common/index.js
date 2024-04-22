import {getConfig, getPoiSummary, getPowerAround} from "@/api";
import {getDistanceByZoom, getMyLocation, getZoomByDistance} from '@/map'

export const MAX_HISTORY = 10
export const COOKIE_HISTORY_NAME = 'nio-search-history'

export const loadConfig = (t) => {
    const _this = t
    getConfig(t, function (config) {
        for (let i in config) {
            if (config[i].key == 'default_power_around_distance') {
                _this.panel.distance = parseInt(config[i].value) / 1000
                _this.config.distance = _this.panel.distance
            } else if (config[i].key == 'recommend_city') {
                const city = []
                let cityStr = config[i].value
                if (cityStr) {
                    const ss = cityStr.split(',')
                    for (let j in ss) {
                        city.push(ss[j].split(':')[0])
                    }
                }
                _this.config.hotCities = city
            } else if (config[i].key == 'share_background_pic') {
                _this.config.posterImg = config[i].value
            }
        }
    })
}

export const generateUUID = () => {
    var d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

export const loadMyLocation = (t) => {
    const _this = t
    getMyLocation(function (position) {
        _this.selectPos = position
        _this.currentPoi.center = new window.qq.maps.LatLng(position.lat, position.lng)
        _this.currentPoi.title = '我的位置：' + position.addr
        _this.panel.title = _this.currentPoi.title
        _this.city = position.city
        _this.selectedCity = _this.city
        _this.selectedCityCode = position.code
        _this.setMapData()
        getPoiSummary(_this, position.lat, position.lng, _this.panel.distance, function (data) {
            _this.currentPoi.data = data
            _this.panel.data = data
            _this.panel.loading = false
        })
        let distance = getDistanceByZoom(_this.config.defaultZoom)
        getPowerAround(position.lat, position.lng, distance, _this, function (r) {
            _this.loadPower(r)
        })
    })
}

export const changeDistance = (t, distance, callback) => {
    const _this = t
    _this.panel.loading = true
    const zoom = getZoomByDistance(distance)
    getPoiSummary(_this, _this.selectPos.lat, _this.selectPos.lng, distance, function (data) {
        _this.panel.data = data
        _this.panel.loading = false
        _this.map.panTo(new window.qq.maps.LatLng(_this.selectPos.lat, _this.selectPos.lng))
        _this.map.zoomTo(zoom)
        if(callback) {
            callback()
        }
    })
}


