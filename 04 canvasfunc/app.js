class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas)
        this.tekenHuis(g,0,0);

        let rngBoomAmount = Math.floor(Math.random()*25) + 1;
        for(let i=0; i<rngBoomAmount; i++){
            let rngXPosBoom = Math.floor(Math.random()*900);
            let rngYPosBoom = Math.floor(Math.random()*900);
            this.drawBoom(g,rngXPosBoom,rngYPosBoom);
            console.log("BoomAmount= ",rngBoomAmount)

        }
        let rngHuisAmount = Math.floor(Math.random()*25) + 1;
        for(let i=0; i<rngHuisAmount; i++){
            let rngXPosHuis = Math.floor(Math.random()*900);
            let rngYPosHuis = Math.floor(Math.random()*900);
            this.tekenHuis(g,rngXPosHuis,rngYPosHuis);
        }

    }

    drawKerstBallen(g,x,y,rngKleur,rngx,rngy)
    {
        rngKleur = Math.floor(Math.random()*10);
        rngx = Math.floor(Math.random()*40);
        rngy = Math.floor(Math.random()*90);
        g.beginPath();
        if (rngKleur < 2){
            g.fillStyle = "red";
        }
        if (rngKleur > 1 && rngKleur < 5){
            g.fillStyle = "pink";
        }
        if (rngKleur > 4 && rngKleur < 8){
            g.fillStyle = "blue";
        }
        if (rngKleur > 7 && rngKleur < 10){
            g.fillStyle = "purple";
        }
        g.arc(180+x+rngx,90+y+rngy,5,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

    }

    drawBoom(g,x,y)
    {
        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(185+x,200+y);
        g.lineTo(215+x,200+y);
        g.lineTo(215+x,250+y);
        g.lineTo(185+x,250+y);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(200+x,50+y);
        g.lineTo(150+x,200+y);
        g.lineTo(250+x,200+y);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "yellow";
        g.moveTo(200+x,25+y);
        g.lineTo(190+x,50+y);
        g.lineTo(165+x,50+y);
        g.lineTo(190+x,60+y);
        g.lineTo(185+x,85+y);
        g.lineTo(200+x,65+y);
        g.lineTo(215+x,85+y);
        g.lineTo(210+x,65+y);
        g.lineTo(235+x,50+y);
        g.lineTo(210+x,50+y);
        g.closePath();
        g.stroke();
        g.fill();

    
        this.drawKerstBallen(g,x,y)
        this.drawKerstBallen(g,x,y)
        this.drawKerstBallen(g,x,y)
        this.drawKerstBallen(g,x,y)
        this.drawKerstBallen(g,x,y)
        this.drawKerstBallen(g,x,y)
        this.drawKerstBallen(g,x,y)
        this.drawKerstBallen(g,x,y)
        this.drawKerstBallen(g,x,y)
    }
    
    tekenHuis(g,x,y)
    {
        g.beginPath();
        g.fillStyle = "gray";
        g.moveTo(70+x,20+y);
        g.lineTo(80+x,30+y)
        g.lineTo(60+x,40+y)
        g.closePath()
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(30+x,10+y);
        g.lineTo(70+x,20+y)
        g.lineTo(60+x,40+y)
        g.lineTo(20+x,30+y)
        g.closePath()
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "gray";
        g.moveTo(60+x,40+y);
        g.lineTo(60+x,60+y)
        g.lineTo(20+x,50+y)
        g.lineTo(20+x,30+y)
        g.closePath()
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "gray";
        g.moveTo(60+x,40+y);
        g.lineTo(80+x,30+y)
        g.lineTo(80+x,50+y)
        g.lineTo(60+x,60+y)
        g.closePath()
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(35+x,35+y);
        g.lineTo(45+x,38+y)
        g.lineTo(45+x,48+y)
        g.lineTo(35+x,45+y)
        g.closePath()
        g.stroke();
        g.fill()
        }
    }

let app = new App(); 
app.runApplication(); 