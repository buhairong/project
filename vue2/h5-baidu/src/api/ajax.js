import axios from "axios";

const PATH_DEV = 'https://gateway-front-qa.nioint.com';
const PATH_TEST = 'https://gateway-front-sit.nioint.com';
const PATH_STG = 'https://gateway-front-stg.nioint.com';
const PATH_PROD = 'https://gateway-front.nio.com';
const path = window.location.href;
let nodeBaseUrl = PATH_TEST;
if (path.match(/chargermap-dev/i)) {
  nodeBaseUrl = PATH_DEV;
} else if (path.match(/chargermap-test/i)) {
  nodeBaseUrl = PATH_TEST;
} else if (path.match(/chargermap-stg/i)) {
  nodeBaseUrl = PATH_STG;
} else if (path.match(/chargermap.nio.com/i)) {
  nodeBaseUrl = PATH_PROD;
}
nodeBaseUrl = PATH_PROD;
export const BASE = `${nodeBaseUrl}/swc_webredirect/100119/app/api/pe/h5/charge-map/`
export const appId = '100119'

export const MESSAGE_NETWORK_ERROR = '网络好像有点问题，请稍候再刷新'
export const OPEN_NETWORK_ERROR = (t) => {
    t.$alert(MESSAGE_NETWORK_ERROR, '', {
        showClose: true,
        confirmButtonText: '我知道了',
        confirmButtonClass: 'btn-refresh',
        callback: function() {
            // location.reload()
        }
    });
}

export default function req(t, url, callback, data = {}, type = 'GET') {
    type = type.toUpperCase()
    if (type === 'GET') {
        data['app_id'] = appId
        data['timestamp'] = new Date().getTime()
        let dataStr = ''
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&'

        })
        if (dataStr !== '') {
            dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
            url = url + '?' + dataStr
        }
        axios({
            method: 'GET',
            url: BASE + url,
            headers: {
                'Content-Type': 'text/plain'
            },
            data: true
        }).then(function (ret) {
            if (ret.data.result_code == 'success') {
                callback(ret.data.data)
            }
        }).catch((err)=>{
            console.log(err)
            OPEN_NETWORK_ERROR(t)
        })
    } else if (type === 'POST') {
        url += '?app_id=' + appId + '&timestamp=' + new Date().getTime()
        axios.post(BASE + url, data).then(function (ret) {
            if (ret.data.result_code == 'success') {
                callback(ret.data.data)
            }
        })
    }
}
