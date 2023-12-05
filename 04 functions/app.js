function argumentsAreHandy(shoutout)
{
    console.log("do you want shoutout?");
    console.log(shoutout);
}
argumentsAreHandy("shoutout");
argumentsAreHandy("ok");
argumentsAreHandy("zal k doen");

/*function globalFunction()
{
    console.log("Global");
    console.log("Overal ding");
}
globalFunction();
globalFunction();
globalFunction();*/
class App
{
    runApplication()
    {
        console.log("isg");
        //globalFunction();
    }
}
let app = new App();
app.runApplication();