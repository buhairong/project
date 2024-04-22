import req, {appId, BASE, OPEN_NETWORK_ERROR} from "@/api/ajax";
import axios from "axios";


export const getConfig = (t, callback) => req(t, 'configs/dictionary', callback)
export const getPoiSummary = (t, lat, lng, distance, callback) => {
    req(t, 'power/around/summary', function (data) {
        callback({
            swap: data.swap_number,
            nioNpc: [data.nio_npc_charger_number, data.nio_npc_connector_number],
            nioDest: [data.nio_dest_charger_number, data.nio_dest_connector_number],
            third: data.third_connector_number
        })
    }, {
        search_type: 'poi',
        latitude: lat,
        longitude: lng,
        distance: distance * 1000,
    })
}
export const getCitySummary = (t, code, callback) => {
    req(t, 'power/around/summary', function (data) {
        callback({
            swap: data.swap_number,
            nioNpc: [data.nio_npc_charger_number, data.nio_npc_connector_number],
            nioDest: [data.nio_dest_charger_number, data.nio_dest_connector_number],
            third: data.third_connector_number
        })
    }, {
        search_type: 'city',
        city_code: code,
    })
}

export const getPowerAround = (lat, lng, distance, _this, callback) => {
    let CancelToken = axios.CancelToken
    CancelToken.source()
    if (typeof _this.source === 'function') {
        _this.source('终止请求')
    }
    let timestamp = new Date().getTime()
    _this.getPowerAroundLastTime = timestamp
    axios.get(BASE + 'power/around?timestamp=' + timestamp + '&app_id=' + appId + '&latitude=' + lat + '&longitude=' + lng + '&distance=' + (distance * 1000), {
        cancelToken: new axios.CancelToken(function executor(c) {
            _this.source = c;
        }),
        data: true
    }).then((res) => {
        if (timestamp == _this.getPowerAroundLastTime) {
            let r = []
            const data = res.data.data
            if (data) {
                console.log(timestamp, data)
                const power = data.powers
                if (power) {
                    for (let i in power) {
                        let loc = power[i].location.split(',')
                        let p = {
                            id: power[i].id,
                            name: power[i].name,
                            lng: parseFloat(loc[0]),
                            lat: parseFloat(loc[1]),
                        }
                        let type = 0
                        if (power[i].type == 'PowerSwap') {
                            type = 1
                        } else if (power[i].type == 'ChargeStation') {
                            if (power[i].charge_station_type == 'NioChargeStationNpc') {
                                type = 2
                            } else if (power[i].charge_station_type == 'NioChargeStationDest') {
                                type = 3
                            } else if (power[i].charge_station_type == 'ThirdChargeStation') {
                                type = 4
                            }
                        } else if (power[i].type == 'Merged') {
                            type = 6
                            p.id = power[i].charger_total_number
                        }
                        p.type = type
                        if (power[i].swap_clone && !power[i].swap_clone.location) {
                            console.log(power[i].id)
                        }

                        if (power[i].swap_has_clone && power[i].swap_clone && power[i].swap_clone.location) {
                            let loc = power[i].swap_clone.location.split(',')
                            let clone = {
                                name: '会客点：' + p.name,
                                id: p.id + '-1',
                                lng: parseFloat(loc[0]),
                                lat: parseFloat(loc[1]),
                                type: 5
                            }
                            r.push(clone)
                        }
                        r.push(p)
                    }
                }
            }
            callback(r)
        }
    }).catch((err) => {
        if (axios.isCancel(err)) {
            console.log('Around Request canceled', err.message); //请求如果被取消，这里是返回取消的message
        } else {
            console.log(err);
            OPEN_NETWORK_ERROR(_this)
        }
    })
}

export const suggest = (code, keyword, _this, callback) => {
    let CancelToken = axios.CancelToken
    CancelToken.source()

    if (typeof _this.source === 'function') {
        _this.source('终止请求')
    }

    let timestamp = new Date().getTime()
    axios.post(BASE + 'power/suggest?timestamp=' + timestamp + '&app_id=' + appId, {city: code, keywords: keyword}, {
        cancelToken: new axios.CancelToken(function executor(c) {
            _this.source = c;
        })
    }).then((res) => {
        const data = res.data.data
        callback(data)
    }).catch((err) => {
        if (axios.isCancel(err)) {
            console.log('Suggest Request canceled', err.message); //请求如果被取消，这里是返回取消的message
        } else {
            //handle error
            console.log(err);
            OPEN_NETWORK_ERROR(_this)
        }
    })
}

export const convertHtml = (text, key) => {
    const start = text.indexOf(key)
    if (start >= 0) {
        const p1 = text.substring(0, start)
        const p2 = text.substring(start + key.length)
        return p1 + '<span class=\'match\'>' + key + '</span>' + p2
    } else {
        return text
    }
}

export const getPowerDetail = (t, id, type, callback) => {
    let url = ''
    if (type == 1 || type == 5) {
        url = 'swap/'
    } else {
        url = 'power/'
    }
    req(t, url + id, function (data) {
        let tag = []
        let tags = data.tags
        if (tags) {
            for (let i in tags) {
                if (tags[i]) {
                    tag.push(tags[i].tag_name)
                }
            }
        }
        let r = {
            type: type,
            title: data.name,
            address: data.address,
            battery: data.battery_count,
            valid: data.battery_valid_count,
            tag,
            fee: data.fee_desc,
            desc: data.desc,
            dc: data.connector_number_total_dc,
            ac: data.connector_number_total_ac,
        }
        callback(r)
    })
}

export const getCityMap = () => {
    const r = {}
    return r
}

export const getHotCities = () => {
    const r = [{
        name: '上海',
        region: '310000'
    }, {
        name: '北京',
        region: '110000'
    }, {
        name: '杭州',
        region: '330100'
    }, {
        name: '苏州',
        region: '320500'
    }, {
        name: '成都',
        region: '510100'
    }, {
        name: '合肥',
        region: '340100'
    }, {
        name: '厦门',
        region: '350200'
    }, {
        name: '重庆',
        region: '500000'
    }]
    return r
}