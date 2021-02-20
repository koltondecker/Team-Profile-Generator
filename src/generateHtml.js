function generateTeamProfile(cardsArray) {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/styles.css">
        <title>Team Profiles</title>
    </head>
    <body>
        <nav class="navbar mb-5 navbar-light bg-dark">
            <div class="container-fluid">
                <span class="navbar-brand mx-auto text-light"><h1>Team Profile</h1></span>
            </div>
        </nav>
        <div class="container">
            <div class="row">
                <div id="cards-div" class="col-md-12 card-columns d-flex justify-content-around">
                    ${Array(cardsArray.length).fill().map((item, i) => 
                        `${cardsArray[i]}`).join('')}
                </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
    </body>
    </html>`

}

module.exports = { generateTeamProfile };