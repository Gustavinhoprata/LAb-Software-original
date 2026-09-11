function adicionar(valor) {
    let visor = document.getElementById('visor');
    
    if (visor.value === '0') {
        visor.value = valor;
    } else {
        visor.value = visor.value + valor;
    }
}

// 2. Funções matemáticas isoladas
function somar(a, b) {
    return a + b;
}
function menos(a, b) {
    return a - b;
}
function divi(a, b){
    return a / b;
}
function vezes(a, b){
    return a * b;
}
function clear(a, b){
return 0;
}


// 3. Função para identificar a conta e calcular
function calcular() {
    let visor = document.getElementById('visor');
    let texto = visor.value;

    if (texto.includes('+')) {
        let partes = texto.split('+'); 
        
        let num1 = parseFloat(partes[0]);
        let num2 = parseFloat(partes[1]);
        
        visor.value = somar(num1, num2);
    } 
    
    // ====================================================
    // EXERCÍCIO 2: Continue a lógica abaixo
    // ====================================================
    
   if (texto.includes('-')) {
        let partes = texto.split('-'); 
        
        let num1 = parseFloat(partes[0]);
        let num2 = parseFloat(partes[1]);
        
        visor.value = menos(num1, num2);
    } 
    if (texto.includes('*')) {
        let partes = texto.split('*'); 
        
        let num1 = parseFloat(partes[0]);
        let num2 = parseFloat(partes[1]);
        
        visor.value = vezes(num1, num2);
    } 
    if (texto.includes('/')) {
        let partes = texto.split('/'); 
        
        let num1 = parseFloat(partes[0]);
        let num2 = parseFloat(partes[1]);
        
        visor.value = divi(num1, num2);
    } 
    if (texto.includes('C')) {
        let partes = texto.split('C'); 
        
        let num1 = parseFloat(partes[0]);
        let num2 = parseFloat(partes[1]);
        
        visor.value = clear(num1, num2);
    } 
}

// ====================================================
// DESAFIO 3: Crie a função limpar()
// ====================================================