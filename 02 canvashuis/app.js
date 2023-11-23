class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.fillRect(0,0,600,400);
        console.log(canvas)
    }
} 
let app = new App(); 
app.runApplication(); 
