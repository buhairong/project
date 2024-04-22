const DEFAULT_LOCATION = {
  lat: 39.908683,
  lng: 116.397483,
  city: '北京市',
  addr: '天安门',
  code: '110100',
};

const processCode = (code) => {
  if (code.startsWith('50') || code.startsWith('11') || code.startsWith('82') || code.startsWith('31') || code.startsWith('12') || code.startsWith('81')) {
    return code.substr(0, 2) + '0000';
  }
  return code.substr(0, 4) + '00';
};

export const getMyLocation = (callback) => {
  const ua = navigator.userAgent;
  if (ua.toLowerCase().indexOf('lifestyle') > -1) {
    try {
      console.log('get nio app location');
      window.getJsBridge().call('getLocation', {}, (json) => {
        const response = JSON.parse(json);
        console.log(response);
        try {
          const geocoder = new window.qq.maps.Geocoder({
            complete: (result) => {
              console.log(result);
              let address = result.detail.address;
              if (result.detail.nearPois && result.detail.nearPois.length > 0) {
                address = result.detail.nearPois[0].name;
              }
              const data = {
                lat: response.latitude,
                lng: response.longitude,
                city: response.city,
                addr: address,
                code: processCode(response.cityCode),
              };
              console.log(data);
              callback(data);
            }
          });
          const myCoord = new window.qq.maps.LatLng(response.latitude, response.longitude);
          geocoder.getAddress(myCoord);
        } catch (e) {
          console.log(e);
          callback(DEFAULT_LOCATION);
        }
      });
    } catch (e) {
      console.log(e);
      callback(DEFAULT_LOCATION);
    }
    return;
  }
  let geolocation = new window.qq.maps.Geolocation('OSBBZ-UJ6C6-YYGSG-MPI33-6QGKO-JWFXZ', 'test');
  geolocation.getLocation(function (position) {
    console.log('Position:', position);
    let code = null;
    if (position.type == 'ip') {
      callback(DEFAULT_LOCATION);
      return;
    }
    if (position.adcode) {
      code = processCode(position.adcode.toString());
    } else {
      callback(DEFAULT_LOCATION);
      return;
    }
    callback({
      lat: position.lat,
      lng: position.lng,
      city: position.city,
      addr: position.addr,
      code,
    });
  }, function () {
    console.log('Positioning failed');
    callback(DEFAULT_LOCATION);
  });
  // callback(DEFAULT_LOCATION)
};

export const initMap = (container, center, zoom) => {
  let myOptions = {
    zoom: zoom,
    center: center,
    disableDefaultUI: true,
    mapStyleId: 'style1'
  };
  return new window.qq.maps.Map(document.getElementById(container), myOptions);
};

export const addImgMarker = (map, imgUrl, position, zIndex = 10) => {
  let size = null;
  if (imgUrl == 'poi') {
    size = new window.qq.maps.Size(48, 48);
  } else if (imgUrl == 'center') {
    size = new window.qq.maps.Size(18, 24);
  }
  let icon = new window.qq.maps.MarkerImage('images/' + imgUrl + '.png', size, null, null, size);
  return new window.qq.maps.Marker({position, map, icon, zIndex});
};

export const addMapEvent = (map, eventType, callback) => {
  window.qq.maps.event.addListener(map, eventType, callback);
};

export const getZoomByDistance = (d) => {
  if (d <= 4) {
    return 15;
  } else if (d <= 9) {
    return 14;
  } else if (d <= 14) {
    return 13;
  } else {
    return 12;
  }
};

export const MARKER_SIZE = new window.qq.maps.Size(48, 48);
export const MARKER_NIO_SIZE = new window.qq.maps.Size(60, 60);
export const MARKER_SIZE_LARGE = new window.qq.maps.Size(100, 100);
export const CLUSTER_SIZE = new window.qq.maps.Size(40, 40);
export const CLUSTER_SIZE_LARGE = new window.qq.maps.Size(50, 50);

export const getDistanceByZoom = (zoom) => {
  let r = 0;
  if (zoom >= 14) {
    r = 8;
  } else if (zoom >= 13) {
    r = 16;
  } else if (zoom >= 12) {
    r = 32;
  } else if (zoom >= 11) {
    r = 64;
  } else if (zoom >= 10) {
    r = 128;
  } else if (zoom >= 9) {
    r = 256;
  } else if (zoom >= 8) {
    r = 512;
  } else if (zoom >= 7) {
    r = 1024;
  } else if (zoom >= 6) {
    r = 2048;
  } else if (zoom >= 5) {
    r = 4096;
  } else if (zoom >= 4) {
    r = 8192;
  } else {
    r = 16000;
  }
  return r;
};
