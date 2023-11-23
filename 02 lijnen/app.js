class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");

        g.beginPath();
        g.fillStyle = "gray";
        g.moveTo(70,20);
        g.lineTo(80,30)
        g.lineTo(60,40)
        g.closePath()
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(30,10);
        g.lineTo(70,20)
        g.lineTo(60,40)
        g.lineTo(20,30)
        g.closePath()
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "gray";
        g.moveTo(60,40);
        g.lineTo(60,60)
        g.lineTo(20,50)
        g.lineTo(20,30)
        g.closePath()
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "gray";
        g.moveTo(60,40);
        g.lineTo(80,30)
        g.lineTo(80,50)
        g.lineTo(60,60)
        g.closePath()
        g.stroke();
        g.fill()
        console.log(canvas)

        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(35,35);
        g.lineTo(45,38)
        g.lineTo(45,48)
        g.lineTo(35,45)
        g.closePath()
        g.stroke();
        g.fill()
    }
} 
let app = new App(); 
app.runApplication(); 
