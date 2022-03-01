const formatDate = (propDate) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const parsed = Date.parse(propDate)
    const dateString = new Date(parsed)
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", options)
}
export default formatDate;