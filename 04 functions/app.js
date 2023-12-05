function globalFunction()
{
    console.log("Global");
    console.log("Overal ding");
}
globalFunction();
globalFunction();
globalFunction();
class App
{
    runApplication()
    {
        console.log("isg");
        globalFunction();
    }
}
let app = new App();
app.runApplication();