const ctx = document.getElementById('weatherChart');

const times = ['Now', '+1h', '+2h', '+3h', '+4h', '+5h', '+6h'];

const temperature = [28, 29, 30, 31, 30, 29, 28];
const lower = [26, 27, 27, 28, 27, 26, 25];
const upper = [30, 31, 33, 34, 33, 32, 31];

const chart = new Chart(ctx, {
type: 'line',


data: {
    labels: times,

    datasets: [
        {
            label: 'Lower Limit',
            data: lower,
            borderWidth: 0,
            pointRadius: 0
        },
        {
            label: 'Confidence Band',
            data: upper,
            borderWidth: 0,
            pointRadius: 0,
            fill: '-1',
            backgroundColor: 'rgba(56,189,248,0.20)'
        },
        {
            label: 'Predicted Temperature',
            data: temperature,
            borderColor: '#38bdf8',
            backgroundColor: '#38bdf8',
            borderWidth: 3,
            pointRadius: 5,
            tension: 0.4
        }
    ]
},

options: {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
        y: {
            min: 20,
            max: 36,
            ticks: { color: '#94a3b8' },
            grid: { color: '#29374c' }
        },

        x: {
            ticks: { color: '#94a3b8' },
            grid: { display: false }
        }
    },

    plugins: {
        legend: {
            labels: { color: '#f8fafc' }
        }
    }
}


});
const slider = document.getElementById("timeSlider");

const selectedTemp = document.getElementById("selectedTemp");
const selectedHour = document.getElementById("selectedHour");

const temperatures = [28, 29, 30, 31, 30, 29, 28];

const hours = ["Now", "+1 Hour", "+2 Hours", "+3 Hours",
"+4 Hours", "+5 Hours", "+6 Hours"];

slider.addEventListener("input", function() {


let index = Number(this.value);

// Update selected temperature
selectedTemp.textContent = temperatures[index] + "°C";

// Update selected hour
selectedHour.textContent = hours[index];

// Highlight selected graph point
chart.data.datasets[2].pointRadius =
    temperatures.map((_, i) => i === index ? 8 : 5);

chart.data.datasets[2].pointBackgroundColor =
    temperatures.map((_, i) =>
        i === index ? "#ffffff" : "#38bdf8"
    );

chart.update();

});
this.style.background =
    `linear-gradient(to right, #38bdf8 ${(index/6)*100}%, #334155 ${(index/6)*100}%)`;

    legend: {
    display: false
}
slider.style.background =
    `linear-gradient(to right,
    #38bdf8 ${(index / 6) * 100}%,
    #334155 ${(index / 6) * 100}%)`;

    const peak = Math.max(...temperature);
const minTemp = Math.min(...temperature);

const maxUncertainty = Math.max(
    ...upper.map((value, i) => value - lower[i])
);

document.getElementById("peakTemp").textContent =
    peak + "°C";

document.getElementById("tempRange").textContent =
    minTemp + "-" + peak + "°C";

document.getElementById("uncertainty").textContent =
    maxUncertainty + "°C";