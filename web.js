/*GET id Elemt in HTML*/
let inputlang = document.getElementById("input-lg");
let inputBtn = document.getElementById("input-btn");
let langContainer = document.getElementById('lang-container');

// create element in List
let lginput = () => {

    let li = document.createElement('li');
    let sp = document.createElement('span');
    let sp2 = document.createElement('span');
    let div = document.createElement('div');
    let divTex = document.createTextNode(inputlang.value);
    let spTex = document.createTextNode('⁕ ');
    let sp2Tex = document.createTextNode('✖');

    // let comment = document.createComment('Creade add Element in list');

    li.className = "lang-list";
    div.className = "li-lang";
    sp2.className = "li-delete";

    if (inputlang.value === "" ) {
        return
    } else {
        li.append(div, sp2);
        div.append(sp, divTex);
        sp.append(spTex);
        sp2.append(sp2Tex);
        langContainer.append(li);
    }
    sp2.setAttribute("onclick", "removeValue(event)");
};

let info = () => {
    (() => {

        let info = document.querySelector("#info");

        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let strong = document.createElement("strong");
        let h4 = document.createElement("h4");
        let button = document.createElement("button");

        let strTex = document.createTextNode("✅ Sucessful :");
        let h4Tex = document.createTextNode(` Info : ${inputlang.value.toUpperCase()} Languvage Update`);
        let btnTex = document.createTextNode("❌");

        div1.className = 'alert-box';
        div2.className = 'alert-meggage';
        strong.className = 'sucessful';
        h4.className = 'user-input';
        button.className = 'end';

        button.type = 'button';
        // button.onclick = "removeAlert(event)";

        if (inputlang.value === "") {
            return

        } else {
            div1.append(div2);
            div2.append(strong, h4, button);
            strong.append(strTex);
            h4.append(h4Tex);
            button.append(btnTex);
           info.prepend(div1);
        }

        button.setAttribute("onclick", "removeAlertBox(event)");


        setTimeout(() => {
            div1.remove('');
        }, 3000);
    })();
};
inputBtn.addEventListener("click", () => {
    lginput();
    info();
});
inputlang.addEventListener("keyup", (event) => {
   
    if (event.key ==='Enter') {
        lginput();
        info();
    } else if (event.key === "keyZ") {
        inputlang.value = "";
    } 
});
// Save-list removing function ↯↯     
function removeValue(del) {
    let dele = del.target.parentNode
    dele.remove();
}
// alert box removing function ↯↯   
function removeAlertBox(del) {
    let dele = del.target.parentNode.parentNode
    dele.remove();
}

