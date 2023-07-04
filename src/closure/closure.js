function saludar(){
    let usarName = 'Eliezer';
    function displayUsarName() {
        return `Hello ${usarName}`;
    }
    return displayUsarName;
}

const greeting = saludo();
console.log(greeting);
console.log(g());