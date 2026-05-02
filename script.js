function updateClock() {
    const now = new Date();

    // 現実時間を秒に変換（1日の経過秒）
    const realSeconds =
        now.getHours() * 3600 +
        now.getMinutes() * 60 +
        now.getSeconds() +
        now.getMilliseconds() / 1000;

    // 1日の総秒数
    const totalRealSeconds = 24 * 60 * 60;

    // 100進数世界の1日の総秒数
    const totalDecimalSeconds = 10 * 100 * 100;

    // 比率変換
    const decimalSeconds =
        (realSeconds / totalRealSeconds) * totalDecimalSeconds;

    // 各単位に分解
    const hours = Math.floor(decimalSeconds / (100 * 100));
    const minutes = Math.floor((decimalSeconds % (100 * 100)) / 100);
    const seconds = Math.floor(decimalSeconds % 100);

    // 2桁表示
    const h = String(hours).padStart(2, '0');
    const m = String(minutes).padStart(2, '0');
    const s = String(seconds).padStart(2, '0');

    document.getElementById("time").textContent = `${h}:${m}:${s}`;
}

// 0.1秒ごと更新（ぬるぬる動く）
setInterval(updateClock, 100);