<template>
    <m-table 
      :data="tableData" 
      :options="options" 
      element-loading-text="加载中，请稍后..." 
      :total="total"
      @comfirm="comfirm" 
      @cancel="cancel"
    >
        <template #date="scope">
            <el-icon-timer />
            <span style="margin-left: 10px">{{ scope.scope.row.date }}</span>
        </template>
        <template #action="scope">
            <el-button type="primary" @click="handleEdit(scope.scope)">Edit</el-button>
            <el-button type="danger" @click="handleDelete(scope.scope)">Delete</el-button>
        </template>
    </m-table>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { TableOptions } from '../../components/table/types'

interface TableData {
  date: string,
  name: string,
  address: string
}

const tableData = ref<TableData[]>([])
const current = ref<number>(1)
const pageSize = ref<number>(10)
const total = ref<number>(0)

const options: TableOptions[] = [
    {
        label: '日期',
        prop: 'date',
        align: 'center',
        slot: 'date'
    },
    {
        label: '姓名',
        prop: 'name',
        align: 'center',
        editable: true,
    },
    {
        label: '地址',
        prop: 'address',
        align: 'center'
    },
    {
        label: '操作',
        align: 'center',
        action: true,
    }
]

const handleEdit = (scope: any) => {

}

const handleDelete = (scope: any) => {
    
}

const comfirm = (scope: any) => {
    
}

const cancel = (scope: any) => {
    
}

onMounted(() => {
  axios.post('/api/list', {
    current: current.value,
    pageSize: pageSize.value
  }).then((res: any) => {
    tableData.value = res.data.data.rows
    total.value = res.data.data.total
  })
})
</script>

<style lang="scss" scoped>
svg {
    width: 1em;
    height: 1em;
}
</style>
