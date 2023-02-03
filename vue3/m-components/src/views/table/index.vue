<template>
    <m-table :data="tableData" :options="options" element-loading-text="加载中，请稍后..." @check="check" @close="close">
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
import { TableOptions } from '../../components/table/types';

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

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

const check = (scope: any) => {
    
}

const close = (scope: any) => {
    
}
</script>

<style lang="scss" scoped>
svg {
    width: 1em;
    height: 1em;
}
</style>
