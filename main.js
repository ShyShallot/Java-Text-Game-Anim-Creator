const prompt = require("prompt-sync")({ sigint: true });
const fs = require('fs');

var frames;
var output = "{";
var toFile = false;

toFileString = prompt("Output to file y/n?");
if(toFileString == "y" || toFileString == "yes"){
    toFile = true;
}

frames = prompt("How many frames? ");

for(var i=0;i<frames;i++){
    var array;
    var xPos;
    var yPos;
    xPos = prompt(`Frame ${i+1}, X Pos: `);
    yPos = prompt("Y Pos: ");

    array = `{${xPos},${yPos}},`;
    output += array;
}
output = output.substring(0,output.length-1);
output += '};';
if(toFile){
    fs.writeFile('./output.txt',output, (err) => {
        if(err){
            console.log(err);
        }
    });
} else {
    console.log(`Java Animation Code: ${output}`);
}
