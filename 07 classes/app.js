class App
{
    runApplication()
    {
        
    }
}

class Greet
{
    constructor()
    {
        this.greeting = "Greetings"
    }
    showGreeting()
    {   
        console.log("greeting van binnen:", this.greeting);
    }
}

class Goodbye
{
    constructor()
    {
        this.farewell = "Goodbye"
    }
    showGoodbye()
    {   
        console.log("greeting van binnen:", this.farewell);
    }
}

let greet = new Greet();
greet.showGreeting();
let bye = new Goodbye();
bye.showGoodbye();
console.log("greeting van buiten:", greet.greeting);
console.log("greeting van buiten:", bye.farewell);

let app = new App();
app.runApplication();