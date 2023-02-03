<template>
    <el-table :data="data" v-loading="isLoading" v-bind="$attrs">
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
                    <el-icon-edit v-if="item.editable" class="edit-icon" @click="clickEdit(scope)"></el-icon-edit>
                </template>
            </el-table-column>
        </template>
    </el-table>
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
    }
})

const emits = defineEmits(['check', 'close'])

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
    emits('check', scope)
}

const close = (scope: any) => {
    currentEdit.value = ''
    emits('close', scope)
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
</style>