// 用于清除className里面的undefined和多余的空格
function classer(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ')
}

export default classer