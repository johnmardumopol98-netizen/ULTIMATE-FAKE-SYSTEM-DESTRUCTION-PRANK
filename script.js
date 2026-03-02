let output = document.getElementById("output");
let progress = document.getElementById("progressBar");
let redEye = document.getElementById("redEye");
let beep = document.getElementById("beep");
let alarm = document.getElementById("alarm");

let messages = [
    "WARNING: VIRUS DETECTED...",
    "INFECTING SYSTEM FILES...",
    "OVERWRITING CONFIGS...",
    "SPREADING TO NETWORK...",
    "DELETING SYSTEM32...",
    "ENCRYPTING USER DATA...",
    "SYSTEM INSTABILITY DETECTED...",
    "FINALIZING DESTRUCTION..."
];

let fakeFiles = [
    "C:/Users/You/Documents/secret.docx",
    "C:/Users/You/Pictures/photo.jpg",
    "C:/Windows/System32/config.sys",
    "C:/Program Files/App/data.db"
];

let i = 0;

// Type message
function typeMessage(msg, callback){
    let j = 0;
    let interval = setInterval(()=>{
        output.innerHTML += msg.charAt(j);
        j++;
        if(j >= msg.length){
            clearInterval(interval);
            output.innerHTML += "\n";
            callback();
        }
    },50);
}

// Fake progress
function fakeProgress(callback){
    let width = 0;
    let interval = setInterval(()=>{
        beep.play();
        if(width>=100){
            clearInterval(interval);
            callback();
        } else {
            width++;
            progress.style.width = width+"%";
            // Random glitch color
            output.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
        }
    },25);
}

// Show fake file destruction
function showFakeFiles(){
    fakeFiles.forEach(f=>{
        output.innerHTML += [DESTROYED] ${f}\n;
    });
}

// Run prank sequence
function runPrank(){
    if(i<messages.length){
        typeMessage(messages[i], ()=>{
            fakeProgress(()=>{
                if(i===3) showFakeFiles();
                i++;
                runPrank();
            });
        });
    } else {
        startCountdown();
    }
}

// Countdown
function startCountdown(){
    let time = 5;
    output.innerHTML += "\nSYSTEM CRASH IN: "+time+"s\n";
    let countdown = setInterval(()=>{
        time--;
        output.innerHTML = output.innerHTML.replace(/\d+s$/,time+"s");
        if(time<=0){
            clearInterval(countdown);
            finalAlarm();
        }
    },1000);
}

// Final alarm + reveal
function finalAlarm(){
    alarm.play();
    output.innerHTML += "\n💀 JUST A PRANK! Your system is SAFE 😎\n";
}

// Red eye follows mouse
document.addEventListener("mousemove", function(e){
    redEye.style.left = e.clientX+"px";
    redEye.style.top = e.clientY+"px";
});

runPrank();
