function formatDate(date, format = "YYYY-MM-DD hh:mm:ss") {
    let config = {
        "YYYY": date.getFullYear(),
        "MM": date.getMinutes(),
        "DD": date.getDate(),
        "hh": date.getHours(),
        "mm": date.getMinutes(),
        "ss": date.getSeconds()
    }
    for (const key in config) {
        format = format.replace(key, config[key]);
    }
    return format;
}

console.log(formatDate(new Date(), "YYYY年MM月"))