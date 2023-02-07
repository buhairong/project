<template>
    <div id="calendar"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, PropType, watch } from 'vue'
import { Calendar, EventClickArg, EventContentArg } from '@fullcalendar/core'
import daygrid from '@fullcalendar/daygrid'
import interaction, { DateClickArg } from '@fullcalendar/interaction'
import { EventItem } from './types'
import { booleanLiteral } from '@babel/types'

const props = defineProps({
    // 语言
    locale: {
        type: String,
        default: 'zh-cn',
    },
    // 视图模式
    initalView: {
        type: String,
        default: 'dayGridMonth',
    },
    // 按钮文字
    buttonText: {
        type: Object,
        default: () => ({
            today: '今天',
            month: '月',
            week: '周',
            day: '日',
            prevYear: '上一年',
            nextYear: '下一年',
            prev: '上一月',
            next: '下一月',
        })
    },
    // 头部工具栏
    headerToolBar: {
        type: Object,
        default: () => ({
            start: 'title',
            center: '',
            end: 'prevYear prev today next nextYear',
        })
    },
    // 底部工具栏
    footerToolBar: {
        type: Object,
        default: () => ({})
    },
    // 事件源
    events: {
        type: Array as PropType<EventItem[]>,
        default: () => []
    },
    // 日历是否显示结束时间
    displayEventEnd: {
        type: Boolean,
        default: false,
    },
    // 自定义渲染日历内容
    eventContent: {
        type: Function,
    }
})

const emits = defineEmits(['dateClick', 'eventClick'])

const calendar = ref<Calendar>()

watch(() => props.events, (val) => {
    renderCalendar()
}, {
    deep: true
})

// 渲染日历
const renderCalendar = () => {
    const el = document.getElementById('calendar')
    if (el) {
        calendar.value = new Calendar(el, {
            plugins: [daygrid, interaction],
            locale: props.locale,
            initialView: props.initalView,
            buttonText: props.buttonText,
            headerToolbar: props.headerToolBar,
            footerToolbar: props.footerToolBar,
            displayEventEnd: props.displayEventEnd,
            eventSources: [
                {
                    events(e, callback) {
                        if (props.events.length) {
                            callback(props.events)
                        } else {
                            callback([])
                        }
                    }
                }
            ],
            dateClick(info: DateClickArg) {
                emits('dateClick', info)
            },
            eventClick(info: EventClickArg) {
                emits('eventClick', info)
            },
            eventContent: props.eventContent
        })

        calendar.value.render()
    }
}

onMounted(() => {
    renderCalendar()
})

</script>

<style lang="scss" scoped>

</style>
