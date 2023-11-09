function numberToTimeString(num: number): string {
    const seconds = num % 60
    const minutes = Math.floor(num / 60) % 60
    const hours = Math.floor(num / 3600) % 60

    let TimeString = ""

    if (hours != 0) {
        TimeString += hours.toString() + ":"
    }

    if (minutes != 0) {
        if (minutes < 10 && hours != 0) {
            TimeString += "0"
        }
        TimeString += minutes.toString() + ":"
    } else if (hours != 0) {
        TimeString += "00:"
    }

    if (seconds != 0) {
        if (seconds < 10 && (hours != 0 || minutes != 0)) {
            TimeString += "0"
        }
        TimeString += seconds.toString()
    } else if (hours != 0 || minutes != 0) {
        TimeString += "00"
    } else {
        TimeString += "0"
    }

    return TimeString
}

export default numberToTimeString