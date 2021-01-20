const dateFormatter = item => {
	
	const date = item.createdAt.slice(0, 10)
		.replace(/(\d{4})(-\d{2}-)(\d{2}$)/, '$3$2$1')
		.replace(/-/g, '/')

	const time = item.createdAt.slice(11, 16)
	return { date, time }
}

export default dateFormatter