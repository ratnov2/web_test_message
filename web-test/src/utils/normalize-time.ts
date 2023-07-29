export const NormalizeTime = (time: number) => {
	return time < 10 ? `0${time}` : time
}
