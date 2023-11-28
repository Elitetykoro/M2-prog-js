
class App
{
    runApplication()
    {
        let newsitem1 = document.getElementsByClassName("gamenews")[0]
        let newsitem2 = document.getElementsByClassName("gamenews")[1]
        console.log(newsitem1,newsitem2);
        let title = document.getElementById("newstitle");
        console.log(title);
        let rng = Math.random();
        console.log(rng);
        if(rng < 0.25){
            title.style.backgroundColor = "gray"
            newsitem1.style.backgroundColor = "blue"
            newsitem2.style.backgroundColor = "green"
        }
        else if(rng > 0.25 && rng < 0.5){
            title.style.backgroundColor = "green"
            newsitem1.style.backgroundColor = "yellow"
            newsitem2.style.backgroundColor = "red"
        }
        else if(rng > 0.5 && rng < 0.75){
            title.style.backgroundColor = "red"
            newsitem1.style.backgroundColor = "white"
            newsitem2.style.backgroundColor = "blue"
        }
        else if(rng > 0.75){
            title.style.backgroundColor = "yellow"
            newsitem1.style.backgroundColor = "gray"
            newsitem2.style.backgroundColor = "purple"
        }
        //let GameNews = document.getElementsByClassName('gamenews headline');
        //console.log(GameNews);
    }
}

let app = new App();
app.runApplication();