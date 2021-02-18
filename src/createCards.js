const Manager = require("../lib/Manager");
const { generateTeamProfile } = require("./generateHtml");

const cardsArray = [];

function createCards(teamArray) {

    for(i in teamArray) {
        
        if(teamArray[i].getRole() === "Manager") {
            cardsArray.push(`<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${teamArray[i].getName()}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${teamArray[i].getRole()}</h6>
                <p class="card-text">ID: ${teamArray[i].getId()}</p>
                <a href="mailto:${teamArray[i].getEmail()}" class="card-link">Email: ${teamArray[i].getEmail()}</a>
                <p class="card-text">Office Number: ${teamArray[i].getOfficeNumber()}</p>
            </div>
            </div>`)
        }
        else if(teamArray[i].getRole() === "Engineer") {
            cardsArray.push(`<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${teamArray[i].getName()}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${teamArray[i].getRole()}</h6>
                <p class="card-text">ID: ${teamArray[i].getId()}</p>
                <a href="mailto:${teamArray[i].getEmail()}" class="card-link">Email: ${teamArray[i].getEmail()}</a>
                <a href="https://github.com/${teamArray[i].getGithub()}" class="card-link">Github: ${teamArray[i].getGithub()}</a>
            </div>
            </div>`)
        }
        else {
            cardsArray.push(`<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${teamArray[i].getName()}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${teamArray[i].getRole()}</h6>
                <p class="card-text">ID: ${teamArray[i].getId()}</p>
                <a href="mailto:${teamArray[i].getEmail()}" class="card-link">Email: ${teamArray[i].getEmail()}</a>
                <p class="card-text">School: ${teamArray[i].getSchool()}</p>
            </div>
            </div>`)
        }

    }

    return generateTeamProfile(cardsArray);
}

module.exports = { createCards };