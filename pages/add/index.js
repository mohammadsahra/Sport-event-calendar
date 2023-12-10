import sportData from "../../mockData/sportData.json" assert { type: "json" };

const addForm = document.querySelector(".add-form");
const status = document.querySelector(".status");
const result = document.querySelector(".result");


document.addEventListener('DOMContentLoaded', function () {


    addForm.addEventListener("submit", (e) => {

        const season = document.getElementById('season').value;
        const timeVenueUTC = document.getElementById('timeVenueUTC').value;
        const dateVenue = document.getElementById('dateVenue').value;
        const homeTeamName = document.getElementById('homeTeamName').value;
        const homeOfficialName = document.getElementById('homeOfficialName').value;
        const homeSlug = document.getElementById('homeSlug').value;
        const homeAbbreviation = document.getElementById('homeAbbreviation').value;
        const homeTeamCountryCode = document.getElementById('homeTeamCountryCode').value;
        const homeStagePosition = document.getElementById('homeStagePosition').value;

        const awayTeamName = document.getElementById('awayTeamName').value;
        const awayOfficialName = document.getElementById('awayOfficialName').value;
        const awaySlug = document.getElementById('awaySlug').value;
        const awayAbbreviation = document.getElementById('awayAbbreviation').value;
        const awayTeamCountryCode = document.getElementById('awayTeamCountryCode').value;
        const awayStagePosition = document.getElementById('awayStagePosition').value;
        
        // result
        const winner = document.getElementById('winner').value;
        const homeGoals = document.getElementById('homeGoals').value;
        const awayGoals = document.getElementById('awayGoals').value;
        const message = document.getElementById('message').value;
        //
        const group = document.getElementById('group').value;
        const originCompetitionId = document.getElementById('originCompetitionId').value;
        const originCompetitionName = document.getElementById('originCompetitionName').value;

        // Create a new match object
        const newMatch = {
            season: parseInt(season),
            status: status,
            timeVenueUTC: timeVenueUTC,
            dateVenue: dateVenue,
            homeTeam: {
                name: homeTeamName,
                officialName:homeOfficialName,
                slug:homeSlug,
                abbreviation:homeAbbreviation,
                teamCountryCode:homeTeamCountryCode,
                stagePosition:homeStagePosition
            },
            awayTeam: {
                name: awayTeamName,
                officialName:awayOfficialName,
                slug:awaySlug,
                abbreviation:awayAbbreviation,
                teamCountryCode:awayTeamCountryCode,
                stagePosition:awayStagePosition
            },
            result: {
                homeGoals: parseInt(homeGoals),
                awayGoals: parseInt(awayGoals),
                winner,
                message,
            },
            group: group,
            originCompetitionId: originCompetitionId,
            originCompetitionName: originCompetitionName,
        };

        const data = sessionStorage.getItem('sport-events-data');
        const newData =  JSON.parse(data).concat(newMatch);
        sessionStorage.setItem('sport-events-data', JSON.stringify(newData));
      })
});
