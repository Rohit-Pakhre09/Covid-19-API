// Fetching the Api.
async function CovidData() {
    try {
        const response = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
        const data = await response.json();
        return data.data.regional;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Main Logic.
function data(covidData) {
    const tableBody = document.getElementById('content');

    covidData.forEach((stateData, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${stateData.loc}</td>
                <td>${stateData.confirmedCasesIndian}</td>
                <td>${stateData.confirmedCasesForeign}</td>
                <td>${stateData.discharged}</td>
                <td>${stateData.deaths}</td>
                <td>${stateData.totalConfirmed}</td>
            </tr>
        `;

        tableBody.innerHTML += row;
    });
}

// On Load Logic showing.
window.onload = async () => {
    const covidData = await CovidData();
    if (covidData) {
        data(covidData);
    }
};