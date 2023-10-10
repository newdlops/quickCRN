export function toDateForm(date: string) {
  const dateObject = new Date(date)
  const year = dateObject.getFullYear()
  const month = dateObject.getMonth() + 1
  const day = dateObject.getDate()
  const hour = dateObject.getHours()
  const minute = dateObject.getMinutes()

  return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`
}
