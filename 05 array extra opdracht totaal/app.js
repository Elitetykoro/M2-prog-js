let items = [[10,"yellow",1],[4,"green",1]]
let bA = items[0][0];
let hA = items[1][0];

let bK = items[0][1];
let hK = items[1][1];

let bF = items[0][2];
let hF = items[1][2];

class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas)

        for(let i=0; i<bA; i++){
            let rngXPosBoom = Math.floor(Math.random()*900);
            let rngYPosBoom = Math.floor(Math.random()*900);
            this.drawBoom(g,rngXPosBoom,rngYPosBoom);

        }

        for(let i=0; i<hA; i++){
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
        g.moveTo(185+x+bF,200+y+bF);
        g.lineTo(215+x+bF,200+y+bF);
        g.lineTo(215+x+bF,250+y+bF);
        g.lineTo(185+x+bF,250+y+bF);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = bK;
        g.moveTo(200+x+bF,50+y+bF);
        g.lineTo(150+x+bF,200+y+bF);
        g.lineTo(250+x+bF,200+y+bF);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "yellow";
        g.moveTo(200+x+bF,25+y+bF);
        g.lineTo(190+x+bF,50+y+bF);
        g.lineTo(165+x+bF,50+y+bF);
        g.lineTo(190+x+bF,60+y+bF);
        g.lineTo(185+x+bF,85+y+bF);
        g.lineTo(200+x+bF,65+y+bF);
        g.lineTo(215+x+bF,85+y+bF);
        g.lineTo(210+x+bF,65+y+bF);
        g.lineTo(235+x+bF,50+y+bF);
        g.lineTo(210+x+bF,50+y+bF);
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
        g.moveTo(70+x+hF,20+y+hF);
        g.lineTo(80+x+hF,30+y+hF)
        g.lineTo(60+x+hF,40+y+hF)
        g.closePath()
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = hK;
        g.moveTo(30+x,10+y);
        g.lineTo(70+x,20+y)
        g.lineTo(60+x,40+y)
        g.lineTo(20+x,30+y)
        g.closePath()
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "gray";
        g.moveTo(60+x+hF,40+y+hF);
        g.lineTo(60+x+hF,60+y+hF)
        g.lineTo(20+x+hF,50+y+hF)
        g.lineTo(20+x+hF,30+y+hF)
        g.closePath()
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "gray";
        g.moveTo(60+x+hF,40+y+hF);
        g.lineTo(80+x+hF,30+y+hF)
        g.lineTo(80+x+hF,50+y+hF)
        g.lineTo(60+x+hF,60+y+hF)
        g.closePath()
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(35+x+hF,35+y+hF);
        g.lineTo(45+x+hF,38+y+hF)
        g.lineTo(45+x+hF,48+y+hF)
        g.lineTo(35+x+hF,45+y+hF)
        g.closePath()
        g.stroke();
        g.fill()
        }
    }

let app = new App(); 
app.runApplication(); 