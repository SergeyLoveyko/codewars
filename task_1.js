// 1. - Is your period late?    (8kyu)

function periodIsLate(last, today, cycleLength) {
    const oneDay = 1000 * 60 * 60 * 24;
    const days = Math.floor(today.getTime() - last.getTime()) / oneDay;
    if (days > cycleLength) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35);
periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28);



