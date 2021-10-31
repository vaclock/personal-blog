export default function formatDate (timeStamp, isHour=true) {
    const date = new Date(timeStamp);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = (date.getDay() + 1).toString().padStart(2, '0');
    let time = `${date.getFullYear()}-${month}-${day}`
    if(isHour) {
        const hour = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        time += ` ${hour}:${minutes}:${seconds}`
    }
    return time;
}