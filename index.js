import sportData from "./mockData/sportData.json" assert { type: "json" };

const headers = ["match","season", "time", "status", "winner", "result"];

function createTable() {
    const table = document.querySelector('.sport-table');
    // Create table header
    const headerRow = table.insertRow();
    headers.forEach(key => {
        const headerCell = document.createElement('th');
        headerCell.textContent = key;
        headerRow.appendChild(headerCell);
    });

    const data = sessionStorage.getItem('sport-events-data');

    // Create table rows with data
    JSON.parse(data).forEach(match => {
        const row = table.insertRow();
        row.insertCell().textContent = (match["homeTeam"]?.name ?? "--") + " , " + (match["awayTeam"]?.name ?? "--");
        row.insertCell().textContent = match["season"];
        row.insertCell().textContent = match["dateVenue"] + "  " + match["timeVenueUTC"] ;
        row.insertCell().textContent = match["status"];
        row.insertCell().textContent = match["status"] === "played" ? match["result"]?.winner:  "-";
        row.insertCell().textContent = match["status"] === "played" ? match["result"]?.homeGoals + " , "+match["result"]?.awayGoals : "-";
        const detail = document.createElement('a');
        detail.setAttribute("href", `./pages/detail/index.html?timeVenueUTC=${match["timeVenueUTC"]}&dateVenue=${match["dateVenue"]}`);
        detail.innerHTML = "detail";
        row.insertCell().appendChild(detail);
    });

};

document.addEventListener('DOMContentLoaded', function () {

    const data = sessionStorage.getItem('sport-events-data');
    if(!data) {
        sessionStorage.setItem('sport-events-data',JSON.stringify(sportData.data));
    }

    createTable();
});

