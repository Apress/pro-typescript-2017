const battery: BatteryManager = (<any>navigator).battery
    || (<any>navigator).mozBattery
    || (<any>navigator).webkitBattery;

if (battery) {
    const output = document.getElementById('content');

    function updateBatteryStatus() {
        // Gets the battery charge level
        const charge = Math.floor(battery.level * 100) + '%';

        // Detects whether the battery is charging
        const charging = battery.charging ? ' charging' : ' discharging';

        // Gets the time remaining based on charging or discharging
        const timeLeft = battery.charging ?
            `Time until charged (${Math.floor(battery.chargingTime / 60)} mins)` :
            `Time umtil empty (${Math.floor(battery.dischargingTime / 60)} mins)`;

        output.innerHTML = charge + timeLeft + charging;
    }

    // Update the display when plugged in or unplugged
    battery.onchargingchange = updateBatteryStatus;

    // Update the display when the charging time changes
    battery.onchargingtimechange = updateBatteryStatus;

    // Update the display when the discharging time changes
    battery.ondischargingtimechange = updateBatteryStatus;

    // Update the display when the battery level changes
    battery.onlevelchange = updateBatteryStatus;
}