export const IsDate = (time1: number, time2: number) => {
	const date = new Date(time1)
	const date2 = new Date(time2)
	return date.getDay() < date2.getDay()
}
