class Dino1
{
    constructor(naam,vleeseter,leeftijd,leeft,honger)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
    }
    eatFood(foodToEat)
    {
        foodToEat.leeft=false;
        this.honger=true;
        console.log("ik ben een", this.naam)
        console.log("mijn honger", this.honger)
    }
}
class Plant
{
    constructor(naam,leeft)
    {
        this.naam = naam;
        this.vleeseter = leeft;
    }
    eatFood(foodToEat)
    {
        foodToEat.leeft=false;
        this.leeft=true;
        console.log("ik ben een", this.naam)
        console.log("leef ik?", this.leeft)
    }
}
class App
{
    runApplication()
    {
        let dino = new Dino1("T-Rex",true,20,true,true);
        let plantenEter = new Dino1("Brontosaurus",false,524,true,false);
        let gras = new Plant("Gras",false);
        let struik = new Plant("Struik",true);
        console.log("de leeftijd van deze", dino.naam, "is:", dino.leeftijd);
        console.log("en deze", dino.naam, "eet vlees:", dino.vleeseter);
        console.log(dino);
        console.log(plantenEter)

        dino.eatFood(plantenEter);
        console.log("leeft", plantenEter.naam,"?",plantenEter.leeft)

        plantenEter.eatFood(gras);
        console.log("leeft", gras.naam+"?",gras.leeft)

    }
}
let app = new App();
app.runApplication();