let day = document.querySelector('.day'); let dotInterval;
const dayVariants = {
    "الأحد": ["Sun-dazed", "Sun-donut", "Sun-dumb"],
    "الاثنين": ["Mon-depressed", "Moan-day", "Mondoom"],
    "الثلاثاء": ["Tues-donkey", "Twos-day", "Tuna-slay"],
    "الاربعاء": ["Wednes-dazed", "Wet-nosed", "Wend-snake"],
    "الخميس": ["Thirst-day", "Thunderthigh", "Thuds-day"],
    "الجمعة": ["الجمعة"],
    "السبت": ["Satur-doom", "Sadder-day", "Sat-on-dog"]
};

function startLoadingText() {
    let dots = ".";
    dotInterval = setInterval(() => {
        dots = dots.length >= 3 ? "." : dots + ".";
        day.textContent = dots;
    }, 500);
}

function stopLoadingText(newText) {
    clearInterval(dotInterval);
    day.textContent = newText;
}
async function gettimeprayer() {
    try {
        const url = new URL("https://api.aladhan.com/v1/timingsByCity");
        url.searchParams.set("country", "africa");
        url.searchParams.set("city", "tripoly");
        url.searchParams.set("method", "8");
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data.date.hijri.weekday.ar;

    } catch (error) {
        console.error("حدث خطأ في جلب مواقيت الصلاة:", error);
    }

}
async function weirdday() {
    startLoadingText();
    let dayName = await getday();
    let wiredtoday = dayVariants[dayName][Math.floor(Math.random() * dayVariants[dayName].length)]
    stopLoadingText(wiredtoday);




}
async function getday() {
    return gettimeprayer();


}
weirdday()
