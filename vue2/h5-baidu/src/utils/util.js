export const formatAround = (powers) => {
  const filterPowers = {
    swap: [],
    npc: [],
    dest: [],
    third: [],
  }
  if (powers) {
    powers.forEach(item => {
      if (item.type === 'PowerSwap') {
        filterPowers.swap.push(item)
      } else if (item.type === 'ChargeStation' && item.charge_station_type === 'ChargeStationNpc') {
        filterPowers.npc.push(item)
      } else if (item.type === 'ChargeStation' && item.charge_station_type === 'ChargeStationDest') {
        filterPowers.dest.push(item)
      } else if (item.type === 'ChargeStation' && item.charge_station_type === 'ThirdChargeStation') {
        filterPowers.third.push(item)
      } else if (item.type === 'Merged'){
        filterPowers.third.push(item)
      }
    })
  }

  return filterPowers
}

export const debounce = function(fn, time = 500) {
  let timeout = null;
  return function() {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      this[fn]()
    }, time)
  }
}

export const baiduConfig = [
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "color": "#1ed3e6ff"
    }
  }, {
    "featureType": "green",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "color": "#dee5e5ff"
    }
  }, {
    "featureType": "building",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on"
    }
  }, {
    "featureType": "building",
    "elementType": "geometry.topfill",
    "stylers": {
        "color": "#d1dbdbff"
    }
  }, {
    "featureType": "building",
    "elementType": "geometry.sidefill",
    "stylers": {
        "color": "#d1dbdbff"
    }
  }, {
    "featureType": "building",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#aab6b6ff"
    }
  }, {
    "featureType": "subwaystation",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "color": "#888fa0ff"
    }
  }, {
    "featureType": "education",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "color": "#e1e7e7ff"
    }
  }, {
    "featureType": "medical",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "color": "#d1dbdbff"
    }
  }, {
    "featureType": "scenicspots",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "color": "#d1dbdbff"
    }
  }, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": "4"
    }
  }, {
    "featureType": "highway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#ffffffff"
    }
  }, {
    "featureType": "highway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#cacfcfff"
    }
  }, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
  }, {
    "featureType": "highway",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#999999ff"
    }
  }, {
    "featureType": "highway",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffffff"
    }
  }, {
    "featureType": "highway",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "on"
    }
  }, {
    "featureType": "arterial",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": "2"
    }
  }, {
    "featureType": "arterial",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#fbfffeff"
    }
  }, {
    "featureType": "arterial",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#cacfcfff"
    }
  }, {
    "featureType": "arterial",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
  }, {
    "featureType": "arterial",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#999999ff"
    }
  }, {
    "featureType": "arterial",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffffff"
    }
  }, {
    "featureType": "local",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": "1"
    }
  }, {
    "featureType": "local",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#fbfffeff"
    }
  }, {
    "featureType": "local",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#cacfcfff"
    }
  }, {
    "featureType": "local",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "local",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#999999ff"
    }
  }, {
    "featureType": "local",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffffff"
    }
  }, {
    "featureType": "railway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "weight": "1"
    }
  }, {
    "featureType": "railway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#9494941a"
    }
  }, {
    "featureType": "railway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#ffffff1a"
    }
  }, {
    "featureType": "subway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "weight": "1"
    }
  }, {
    "featureType": "subway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#c3bed433"
    }
  }, {
    "featureType": "subway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#ffffff33"
    }
  }, {
    "featureType": "subway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "subway",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#979c9aff"
    }
  }, {
    "featureType": "subway",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffffff"
    }
  }, {
    "featureType": "continent",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
  }, {
    "featureType": "continent",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "on"
    }
  }, {
    "featureType": "continent",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#333333ff"
    }
  }, {
    "featureType": "continent",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffffff"
    }
  }, {
    "featureType": "city",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "on"
    }
  }, {
    "featureType": "city",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
  }, {
    "featureType": "city",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#454d50ff"
    }
  }, {
    "featureType": "city",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffffff"
    }
  }, {
    "featureType": "town",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "on"
    }
  }, {
    "featureType": "town",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "town",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#454d50ff"
    }
  }, {
    "featureType": "town",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffffff"
    }
  }, {
    "featureType": "road",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#fbfffeff"
    }
  }, {
    "featureType": "poilabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "districtlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "poilabel",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#999999ff"
    }
  }, {
    "featureType": "districtlabel",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#888fa0ff"
    }
  }, {
    "featureType": "transportation",
    "elementType": "geometry",
    "stylers": {
        "color": "#d1dbdbff"
    }
  }, {
    "featureType": "companylabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "restaurantlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "lifeservicelabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "carservicelabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "financelabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "otherlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "village",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "district",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "land",
    "elementType": "geometry",
    "stylers": {
        "color": "#edf3f3ff"
    }
  }, {
    "featureType": "nationalway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#cacfcfff"
    }
  }, {
    "featureType": "provincialway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#cacfcfff"
    }
  }, {
    "featureType": "cityhighway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#cacfcfff"
    }
  }, {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#cacfcfff"
    }
  }, {
    "featureType": "subwaylabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "subwaylabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "tertiarywaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "tertiarywaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "provincialwaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "provincialwaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "nationalwaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "nationalwaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "highwaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "highwaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
  }, {
    "featureType": "nationalway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#fbfffeff"
    }
  }, {
    "featureType": "nationalway",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#999999ff"
    }
  }, {
    "featureType": "provincialway",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#999999ff"
    }
  }, {
    "featureType": "cityhighway",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#999999ff"
    }
  }, {
    "featureType": "cityhighway",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffffff"
    }
  }, {
    "featureType": "highway",
    "stylers": {
        "level": "6",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "highway",
    "stylers": {
        "level": "7",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "highway",
    "stylers": {
        "level": "8",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "level": "6",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "level": "7",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "level": "8",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "6",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "7",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "8",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "nationalway",
    "stylers": {
        "level": "6",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "nationalway",
    "stylers": {
        "level": "7",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "nationalway",
    "stylers": {
        "level": "8",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "level": "6",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "level": "7",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "level": "8",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "6",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "7",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "8",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "provincialway",
    "stylers": {
        "level": "8",
        "curZoomRegionId": "0",
        "curZoomRegion": "8-8"
    }
  }, {
    "featureType": "provincialway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "level": "8",
        "curZoomRegionId": "0",
        "curZoomRegion": "8-8"
    }
  }, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "8",
        "curZoomRegionId": "0",
        "curZoomRegion": "8-8"
    }
  }, {
    "featureType": "cityhighway",
    "stylers": {
        "level": "6",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "cityhighway",
    "stylers": {
        "level": "7",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "cityhighway",
    "stylers": {
        "level": "8",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "cityhighway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "level": "6",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "cityhighway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "level": "7",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "cityhighway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "level": "8",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "cityhighway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "6",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "cityhighway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "7",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, {
    "featureType": "cityhighway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "8",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
  }, 
  {
    "featureType": "cityhighway",
    "elementType": "geometry.fill",
    "stylers": {
      "color": "#fbfffeff"
    }
  }, 
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": {
      "color": "#8f5a33ff"
    }
  }, 
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": {
      "color": "#ffffffff"
    }
  }, 
  {
    "featureType": "country",
    "elementType": "labels.text.fill",
    "stylers": {
      "color": "#8f5a33ff"
    }
  }, 
  {
    "featureType": "country",
    "elementType": "labels.text.stroke",
    "stylers": {
      "color": "#ffffffff"
    }
  }, 
  {
    "featureType": "country",
    "elementType": "labels.text",
    "stylers": {
      "fontsize": "28"
    }
  }, 
  {
    "featureType": "manmade",
    "elementType": "geometry",
    "stylers": {
      "visibility": "off",
      "color": "#dfe7e7ff"
    }
  }, 
  {
    "featureType": "provincialway",
    "elementType": "geometry.fill",
    "stylers": {
      "color": "#fbfffeff"
    }
  }, 
  {
    "featureType": "tertiaryway",
    "elementType": "geometry.fill",
    "stylers": {
      "color": "#fbfffeff"
    }
  }, 
  {
    "featureType": "manmade",
    "elementType": "labels.text.fill",
    "stylers": {
      "color": "#999999ff"
    }
  }, 
  {
    "featureType": "manmade",
    "elementType": "labels.text.stroke",
    "stylers": {
      "color": "#ffffffff"
    }
  }, 
  {
    "featureType": "scenicspots",
    "elementType": "labels.text.fill",
    "stylers": {
      "color": "#999999ff"
    }
  }, 
  {
    "featureType": "scenicspots",
    "elementType": "labels.text.stroke",
    "stylers": {
      "color": "#ffffffff"
    }
  }, 
  {
    "featureType": "airportlabel",
    "elementType": "labels.text.fill",
    "stylers": {
      "color": "#999999ff"
    }
  }, 
  {
    "featureType": "airportlabel",
    "elementType": "labels.icon",
    "stylers": {
      "visibility": "off"
    }
  }, 
  {
    "featureType": "scenicspotslabel",
    "elementType": "labels.text.fill",
    "stylers": {
      "color": "#999999ff"
    }
  }, 
  {
    "featureType": "scenicspotslabel",
    "elementType": "labels.icon",
    "stylers": {
      "visibility": "off"
    }
  }, 
  {
    "featureType": "educationlabel",
    "elementType": "labels.text.fill",
    "stylers": {
      "color": "#999999ff"
    }
  }, 
  {
    "featureType": "educationlabel",
    "elementType": "labels.icon",
    "stylers": {
      "visibility": "off"
    }
  }, 
  {
    "featureType": "medicallabel",
    "elementType": "labels.text.fill",
    "stylers": {
      "color": "#999999ff"
    }
  }, 
  {
    "featureType": "medicallabel",
    "elementType": "labels.icon",
    "stylers": {
      "visibility": "off"
    }
  }, 
  {
    "featureType": "companylabel",
    "elementType": "labels.icon",
    "stylers": {
      "visibility": "off"
    }
  }, 
  {
    "featureType": "restaurantlabel",
    "elementType": "labels.icon",
    "stylers": {
      "visibility": "off"
    }
  }, 
  {
    "featureType": "hotellabel",
    "elementType": "labels.icon",
    "stylers": {
      "visibility": "off"
    }
  }, 
  {
    "featureType": "hotellabel",
    "elementType": "labels",
    "stylers": {
      "visibility": "off"
    }
  }, 
  {
    "featureType": "shoppinglabel",
    "elementType": "labels.icon",
    "stylers": {
      "visibility": "off"
    }
  }, 
  {
    "featureType": "shoppinglabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
  }, 
  {
    "featureType": "lifeservicelabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
  }, 
  {
    "featureType": "carservicelabel",
    "elementType": "labels.icon",
    "stylers": {
      "visibility": "off"
    }
  }, 
  {
    "featureType": "transportationlabel",
    "elementType": "labels.icon",
    "stylers": {
      "visibility": "off"
    }
  }, 
  {
    "featureType": "transportationlabel",
    "elementType": "labels",
    "stylers": {
      "visibility": "off"
    }
  }, 
  {
    "featureType": "financelabel",
    "elementType": "labels.icon",
    "stylers": {
      "visibility": "off"
    }
  }, 
  {
    "featureType": "entertainment",
    "elementType": "geometry",
    "stylers": {
      "color": "#d1dbdbff"
    }
  }, 
  {
    "featureType": "estate",
    "elementType": "geometry",
    "stylers": {
      "color": "#d1dbdbff"
    }
  }, 
  {
    "featureType": "shopping",
    "elementType": "geometry",
    "stylers": {
      "color": "#d1dbdbff"
    }
  }, 
  {
    "featureType": "education",
    "elementType": "labels.text.fill",
    "stylers": {
      "color": "#999999ff"
    }
  }, 
  {
    "featureType": "education",
    "elementType": "labels.text.stroke",
    "stylers": {
      "color": "#ffffffff"
    }
  }, 
  {
    "featureType": "medical",
    "elementType": "labels.text.fill",
    "stylers": {
      "color": "#999999ff"
    }
  }, 
  {
    "featureType": "medical",
    "elementType": "labels.text.stroke",
    "stylers": {
      "color": "#ffffffff"
    }
  }, 
  {
    "featureType": "transportation",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#999999ff"
    }
  }, 
  {
    "featureType": "transportation",
    "elementType": "labels.text.stroke",
    "stylers": {
      "color": "#ffffffff"
    }
  }, 
  {
    "featureType": "education",
    "elementType": "labels",
    "stylers": {
      "visibility": "off"
    }
  }, 
  {
    "featureType": "medical",
    "elementType": "labels",
    "stylers": {
      "visibility": "off"
    }
  }
]
