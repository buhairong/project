// 将驼峰命名改成中横线命名
export const toLine = (value: String) => {
    return value.replace(/(A-Z)/g, '$1').toLocaleLowerCase()
}