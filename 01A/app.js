let appNaam = "Greatest Of App Time"
let versienummer = 0.1
let versiedatum = Date(2023, 11, 21)
let autheur = "Tykoro Mathijssen"
let copyright = "Tykolo inc.©"
let distributeur = "Tykolo inc."
let darkmode = false

class App
{
    runApplication()
    {
        console.log(appNaam,"\nversion:",versienummer,"\n",versiedatum,"\n",autheur,copyright,distributeur,"\n",darkmode);
    }
}

let app = new App();
app.runApplication();