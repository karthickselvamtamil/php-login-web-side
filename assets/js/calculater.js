let outputscreen = document.getElementById("output-screen");

function display(num){
    outputscreen.value += num;
}
function calculate(){
    try{
        outputscreen.value = eval(outputscreen.value);
    }
    catch(error)
    {
        outputscreen.value = "Enter Valid Key";
    }
} 
function Clear(){
    outputscreen.value = "";
}
function del(){
    outputscreen.value = outputscreen.value.slice(0, -1);
}

   