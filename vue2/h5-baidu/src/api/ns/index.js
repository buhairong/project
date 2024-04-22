import req from "@/api/ajax"

export const getConfig = (t, callback) => req(t, 'v1/configs/dictionary', callback)

export const getSummary = (t, callback, param = {}) => req(t, 'v1/power/around/summary', callback, {...param})

export const getAround = (t, callback, param = {}) => req(t, 'v2/power/around', callback, {...param})

export const getPoiSuggest = (t, callback, param = {}) => req(t, 'v1/power/suggest', callback, {...param}, 'POST')