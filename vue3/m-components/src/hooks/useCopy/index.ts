import { ElMessage } from 'element-plus'

export const useCopy = (text: string) => {
    const input = document.createElement('input')
    input.value = text
    document.body.appendChild(input)
    input.select()

    // 执行复制操作
    document.execCommand('Copy')

    document.body.removeChild(input)
    ElMessage.success('复制成功')
}