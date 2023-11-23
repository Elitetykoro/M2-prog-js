class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.fillStyle = "green";
        g.fillRect(0,0,canvas.width,canvas.height);
        g.fillStyle = "gold";
        g.fillRect(0,0,10,10);
        console.log(canvas)
    }
} 
let app = new App(); 
app.runApplication(); 
