// ---- MECHANICS ----------!
// Very clunky, I know. for starters the calculator doesn't even respond to you when there's a math or syntax error.

// mappings
const panel = document.getElementById('output');
let a = "";


// input functions
function input(num){
    panel.innerHTML += num;
    a += num;
}
function del(){
    panel.innerHTML = panel.innerHTML.slice(0,-1);
    a = a.slice(0, -1);
}
function reset(){
    panel.innerHTML = "";
    a = "";
}
function evalThis(){
    if (a == ""){
        panel.innerHTML = "";
    } else{
        let result = eval(a);
        console.log(result);
        panel.innerHTML = result;
        a = String(result);
    };
}