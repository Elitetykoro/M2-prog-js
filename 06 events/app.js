class App
{
    runApplication()
    {
        let headerButtonvar = document.getElementById("headerButton");

        headerButtonvar.addEventListener("click", (e)=>
        {
            const head = document.createElement("h1");
            const node = document.createTextNode("this is new.");
            head.appendChild(node);
            document.body.appendChild(head);
        });

        let paraButtonvar = document.getElementById("paraButton");

        paraButtonvar.addEventListener("click", (e)=>
        {
            const para = document.createElement("p");
            const node = document.createTextNode("this is new.");
            para.appendChild(node);
            document.body.appendChild(para);
        });

        let imgButtonvar = document.getElementById("imgButton");

        imgButtonvar.addEventListener("click", (e)=>
        {
            const img = new Image();
            img.src = "img/logo-ns.png";
            document.body.appendChild(img);
        });

        let divButtonvar = document.getElementById("divId");

        divButtonvar.addEventListener("click", (e)=>
        {
            const head = document.createElement("div");
            const node = document.createTextNode("div Button");
            head.appendChild(node);
            document.body.appendChild(head);
        });
    }
}

let app = new App();
app.runApplication();