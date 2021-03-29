'use strict';

//Cambio de frecuencia de osc con teclado qwerty y cambio de octava

var osc1NoteDisplay = document.querySelector("#osc1-note-display");
let osc2NoteDisplay = document.querySelector("#osc2-note-display");
let osc3NoteDisplay = document.querySelector("#osc3-note-display");
let osc3FreqFree = document.querySelector("#osc3-freq-free");
let osc1_oct;
let osc2_oct;
let osc3_oct;

let teclaAnterior = "";

//notas, una octava C2-B2. Nombre de c/propiedad = codigo de tecla. 

let notes = {
    65: [65.41, "C2", 130.81, "C3", 261.63, "C4"],
    87: [69.30, "C#2", 138.59, "C#3", 277.18, "C#4"], 
    83: [73.42, "D2", 146.83, "D3", 293.66, "D4"],
    69: [77.78, "D#2", 155.56, "D#3", 311.13, "D#4"],
    68: [82.41, "E2", 164.81, "E3", 329.63, "E4"],
    70: [87.31, "F2", 174.61, "F3", 349.23, "F4"],
    84: [92.50, "F#2", 185.00, "F#3", 369.99, "F#4"],
    71: [98.00, "G2", 196.00, "G3", 392.00, "G4"],
    89: [103.83, "G#2", 207.65, "G#3", 415.30, "G#4"],	
    72: [110.00, "A2", 220.00, "A3", 440, "A4"],
    85: [116.54, "A#2", 233.08, "A#3", 466.16, "A#4"],
    74: [123.47, "B2", 246.94, "B3", 493.88, "B4"],
    75: [130.81,"C3", 261.63, "C4", 523.25, "C5"],
    79: [138.59,"C#3", 277.18, "C#4", 554.37, "C#5"], 
    76: [146.83,"D3", 293.66, "D4", 587.33, "D5"],
    80: [155.56,"D#3", 311.13, "D#4", 622.25, "D#5"],
    192: [164.81,"E3", 329.63, "E4", 659.25, "E"]
}



function playNote(event, tecla) { 
    let key = event.which;
    
    if (!notes.hasOwnProperty(key)) {
        console.log("Tecla equivocada! probá: a-w-s-e-d-f-t-g-y-h-u-j-k-o-l-p-ñ");
    } else {
        
        osc1_oct= document.querySelector('input[name="osc1-oct"]:checked').value;

        if(osc1){
            if (key === tecla) {              
                osc1.frequency.value = notes[key][osc1_oct];
                //si se repite una tecla, bajo y subo el vol del osc, para articular el sonido repetido
                gainOsc1.gain.setTargetAtTime(0, audioCtx.currentTime, 0.01);
                gainOsc1.gain.setTargetAtTime(gainOsc1.gain.value, audioCtx.currentTime + 0.01, 0.01);
                freqInputs[0].value = notes[key][osc1_oct];
                osc1NoteDisplay.innerHTML = " " + notes[key][parseInt(osc1_oct) + 1];
                osc1FreqDisplay.innerHTML = notes[key][osc1_oct] + " Hz";  
            } else { 

                osc1.frequency.value = notes[key][osc1_oct];
                osc1NoteDisplay.innerHTML = " " + notes[key][parseInt(osc1_oct) + 1];
                freqInputs[0].value = notes[key][osc1_oct];
                osc1FreqDisplay.innerHTML = notes[key][osc1_oct] + " Hz";  
            }

            } else {
            console.log("Oscilador I apagado");
            } 

        osc2_oct = document.querySelector('input[name="osc2-oct"]:checked').value;
        
        if(osc2){
            if (key === tecla) {               
                osc2.frequency.value = notes[key][osc2_oct];
                gainOsc2.gain.setTargetAtTime(0, audioCtx.currentTime, 0.01);
                gainOsc2.gain.setTargetAtTime(gainOsc2.gain.value, audioCtx.currentTime + 0.01, 0.01);
                freqInputs[1].value = notes[key][osc2_oct];
                osc2NoteDisplay.innerHTML = " " + notes[key][parseInt(osc2_oct) + 1];
                osc2FreqDisplay.innerHTML = notes[key][osc2_oct] + " Hz";  
            } else { 

                osc2.frequency.value = notes[key][osc2_oct];
                osc2NoteDisplay.innerHTML = " " + notes[key][parseInt(osc2_oct) + 1];
                freqInputs[1].value = notes[key][osc2_oct];
                osc2FreqDisplay.innerHTML = notes[key][osc2_oct] + " Hz";  
            }

            } else {
                console.log("Oscilador II apagado");
            }

        osc3_oct = document.querySelector('input[name="osc3-oct"]:checked').value;
        
        if(!osc3FreqFree.checked) {
            if(osc3){
                if (key === tecla) {               
                    osc3.frequency.value = notes[key][osc3_oct];
                    gainOsc3.gain.setTargetAtTime(0, audioCtx.currentTime, 0.01);
                    gainOsc3.gain.setTargetAtTime(gainOsc3.gain.value, audioCtx.currentTime + 0.01, 0.01);
                    freqInputs[2].value = notes[key][osc3_oct];
                    osc3NoteDisplay.innerHTML = " " + notes[key][parseInt(osc3_oct) + 1];
                    osc3FreqDisplay.innerHTML = notes[key][osc3_oct] + " Hz";  
                } else {    

                    osc3.frequency.value = notes[key][osc3_oct];
                    osc3NoteDisplay.innerHTML = " " + notes[key][parseInt(osc3_oct) + 1];
                    freqInputs[2].value = notes[key][osc3_oct];
                    osc3FreqDisplay.innerHTML = notes[key][osc3_oct] + " Hz";  
                }

            } else {
                console.log("Oscilador III apagado");
            }
        }
    } 
    teclaAnterior = key; 
}; 


document.addEventListener("keydown", function (){
    playNote(event, teclaAnterior);
}); 