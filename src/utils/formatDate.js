export default function formatDate(timestamp) {
    const date = new Date(Number.parseInt(timestamp))

    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    return `${date.getFullYear()}-${month}-${day}`
}
