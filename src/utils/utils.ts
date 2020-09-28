/**
 * 根据屏幕大小计算菜单初始状态
 */
const menuStatus = () => {
	return  document.body.clientWidth > 900 ? true : false
}

export {
	menuStatus
}
