let pwcontainer = document.getElementById('password');
let eyeBtn = document.getElementById('eye-btn');
let pwC = pwcontainer.attributes[0].value;
// let info = document.getElementById('info');
let body = document.querySelector('body');
eyeBtn.addEventListener("click", () => {
    
    if (pwcontainer.value === "") {
        let div = document.createElement('div');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
        div.id = 'info';
        h4.innerText = "Warning";
        p.innerText = "Please Enter the PassWord";
        div.append(h4, p);
        body.append(div);

        pwcontainer.addEventListener('click', () => {
            div.remove();
        })
        setTimeout(() => {
            div.remove();
        }, 3000);

    } else {
        
        if (pwcontainer.attributes[0].value === "password") {
            eyeBtn.style.cssText = "color:white; background-color: orange;";
            eyeBtn.innerText = "Hide";
            pwcontainer.attributes[0].value = "text";
        
        } else {
            eyeBtn.style.cssText = "color:white; background-color: royalblue;";
            eyeBtn.innerText = "show";
            pwcontainer.attributes[0].value = "password";
        }
    }

});

// let formEl = document.forms.loginForm;

// formEl.addEventListener('submit', handleForm);

// let handleForm = () => {
    
//     let loginData = [...new FormData(formEl).values()];

//     console.log(loginData.shift());
// } 

