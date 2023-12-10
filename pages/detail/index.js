//analyze url to get parameters
const url = window.location.href;
const paramsPart = url.split('?')[1];
const params = paramsPart.split('&');

const timeVenueUTC = params[0].replace("timeVenueUTC=",'');
const dateVenue = params[1].replace("dateVenue=",'');

const data = sessionStorage.getItem('sport-events-data');

const matchData = JSON.parse(data).find(d => d.timeVenueUTC === timeVenueUTC && d.dateVenue === dateVenue);
console.log(matchData);
document.getElementById("seasonValue").textContent = matchData.season;
document.getElementById("statusValue").textContent = matchData.status;
document.getElementById("timeValue").textContent = matchData.timeVenueUTC;
document.getElementById("dateValue").textContent = matchData.dateVenue;
document.getElementById("homeTeamValue").textContent = matchData.homeTeam.name;
document.getElementById("officialHomeTeamNameValue").textContent = matchData.homeTeam.officialName;
document.getElementById("slugHomeTeamNameValue").textContent = matchData.homeTeam.slug;
document.getElementById("AbbreviationHomeTeamNameValue").textContent = matchData.homeTeam.abbreviation;
document.getElementById("HomeTeamCountryCodeValue").textContent = matchData.homeTeam.teamCountryCode;
document.getElementById("awayTeamValue").textContent = matchData.awayTeam.name;
document.getElementById("officialAwayTeamNameValue").textContent = matchData.awayTeam.officialName;
document.getElementById("slugAwayTeamNameValue").textContent = matchData.awayTeam.slug;
document.getElementById("AbbreviationAwayTeamNameValue").textContent = matchData.awayTeam.abbreviation;
document.getElementById("AwayTeamCountryCodeValue").textContent = matchData.awayTeam.teamCountryCode;
if(matchData.status === "played") {
    document.getElementById("resultValue").textContent = `${matchData.result.winner} won with ${matchData.result.homeGoals}-${matchData.result.awayGoals}`;
}
document.getElementById("stageValue").textContent = matchData.stage.name;
document.getElementById("originCompetitionValue").textContent = matchData.originCompetitionName;