<template>
    <el-table :data="data" v-loading="isLoading" v-bind="$attrs" @row-click="rowClick">
        <template v-for="(item, index) in tableOptions" :key="index">
            <el-table-column
                v-bind="item"
            >
                <template #default="scope">
                    <template v-if="currentEdit === scope.$index + scope.column.id">
                        <div style="display:flex;align-items:center;">
                            <el-input v-model="scope.row[item.prop!]"></el-input>
                            <!-- <slot name="cellEdit" v-if="$slots.cellEdit" :scope="scope"></slot> -->
                            <div class="icons">
                                <el-icon-check class="icon-check" @click="check(scope)"></el-icon-check>
                                <el-icon-close class="icon-close" @click="close(scope)"></el-icon-close>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
                        <span v-else>{{ scope.row[item.prop!] }}</span>
                    </template>
                    <el-icon-edit v-if="item.editable && currentEdit !== scope.$index + scope.column.id" class="edit-icon" @click="clickEdit(scope)"></el-icon-edit>
                </template>
            </el-table-column>
        </template>
        <template v-for="(item, index) in actionOptions" :key="index">
            <el-table-column
                v-bind="item"
            >
                <template #default="scope">
                    <slot name="action" :scope="scope"></slot>
                </template>
            </el-table-column>
        </template>
    </el-table>
    <div class="pagination" v-if="pagination">
        <!-- <el-pagination
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="[100, 200, 300, 400]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        /> -->
    </div>
</template>

<script lang="ts" setup>
import { PropType, computed, ref } from 'vue'
import { TableOptions } from './types';

const props = defineProps({
    options: {
        type: Array as PropType<TableOptions[]>,
        required: true,
    },
    data: {
        type: Array,
        required: true,
    },
    isEditRow: {
        type: Boolean,
        default: false
    },
    editRowIndex: {
        type: String,
        default: ''
    },
    pagination: {
        type: Boolean,
        default: false
    },
    currentPage: {
        type: Number,
        default: 1,
    },
    pageSizes: {
        type: Array as PropType<Number[]>,
        default: () => [10, 20, 30, 40],
    },
    pageSize: {
        type: Number,
        default: 10,
    },
    total: {
        type: Number,
        default: 0,
    },
})

const emits = defineEmits(['comfirm', 'cancel', 'sizeChange', 'currentChange'])

const currentEdit = ref<string>('')

const tableOptions = computed(() => {
    return props.options.filter(item => !item.action)
})

const actionOptions = computed(() => {
    return props.options.filter(item => item.action)
})

const isLoading = computed(() => {
    return !props.data || !props.data.length
})

const clickEdit = (scope: any) => {
    currentEdit.value = scope.$index + scope.column.id
}

const check = (scope: any) => {
    currentEdit.value = ''
    emits('comfirm', scope)
}

const close = (scope: any) => {
    currentEdit.value = ''
    emits('cancel', scope)
}

const rowClick = (row: any, column: any, event: any) => {
    
}

const handleSizeChange = (val: number) => {
    emits('sizeChange', val)
}

const handleCurrentChange = (val: number) => {
    emits('currentChange', val)
}
</script>

<style lang="scss" scoped>
.edit-icon {
    width: 1em;
    height: 1em;
    position: relative;
    top: 2px;
    left: 4px;
    cursor: pointer;
}

.icons {
    display: flex;
    .icon-check, .icon-close {
        width: 1em;
        height: 1em;
        margin-left: 8px;
        cursor: pointer;
    }
    .icon-check {
        color: green;
    }
    .icon-close {
        color: red;
    }
}
.pagination {
    display: flex;
    align-items: center;
    margin-top: 16px;
}
</style>