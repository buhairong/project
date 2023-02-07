<template>
    <m-calendar :events="events" :eventContent="eventContent" displayEventEnd @dateClick="dateClick" @eventClick="eventClick"></m-calendar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EventClickArg, EventContentArg } from '@fullcalendar/core'
import { DateClickArg } from '@fullcalendar/interaction'
import { EventItem } from '../../components/calendar/types'
import { propsToAttrMap } from '@vue/shared';

const events = ref<EventItem[]>([
    {
        title: '购物',
        start: '2023-02-07 08:00',
        end: '2023-02-07 18:00',
        editable: true,
    },
    {
        title: '写代码',
        start: '2023-02-12 10:00',
        end: '2023-02-12 16:00',
        editable: true,
    },
])

const dateClick = (e: DateClickArg) => {
    events.value.push({
        title: '开会开会开会开会开会开会开会开会开会',
        start: e.dateStr + ' 12:00',
        end: e.dateStr + ' 18:00',
        editable: true,
    })
}

const eventClick = (e: EventClickArg) => {

}

const eventContent = (arg: EventContentArg) => {
    const el = document.createElement('div')
    const timeTextArr = arg.timeText.split('-')
    const start = timeTextArr[0]
    const end = timeTextArr[1]
    el.style.width = '100%'
    el.innerHTML = `
        <div>开始时间：${start}</div>
        <div>结束时间：${end}</div>
        <div>标题：${arg.event._def.title}</div>
    `
    return {
        domNodes: [el]
    }
}
</script>

<style lang="scss" scoped>

</style>
