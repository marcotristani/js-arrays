const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE
console.log("L'array originale è :", teachers);
document.getElementById("array-start").innerHTML = `<span class="badge text-bg-warning fs-5">teachers === <span class="text-danger"> [ ${teachers} ]</span></span>`


console.log("");
// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.toReversed();
console.log(
  "1.L'array capovolto con la funzione toReversed:",
  reversedTeachers
);

//OPPURE CON CICLO FOR(push)
const reversedTeachersForPush = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  reversedTeachersForPush.push(teachers[i]);
}
console.log(
  "1.L'array capovolto con ciclo for e funzione push:",
  reversedTeachersForPush
);

//OPPURE CON CICLO FOR(unshift)
const reversedTeachersForUnShift = [];
for (let i = 0; i < teachers.length; i++) {
  reversedTeachersForUnShift.unshift(teachers[i]);
}
console.log(
  "1.L'array capovolto con ciclo for e funzione unshift:",
  reversedTeachersForUnShift
);

document.getElementById("Exercise1").innerHTML = `
<div class="text-bg-secondary"><em><strong>TRACCIA:</strong>Inverti l'ordine degli insegnanti nell'array teachers e salva il risultato nella variabile reversedTeachers </em></div><br>
<div class="p-3 border">
<strong>RISULTATO:</strong> reversedTeachers === <span class="text-danger"> [ ${reversedTeachers} ]</span><br>
 <a href="./img/Esercizio1-bonus.png" class="btn btn-primary m-3">Visualizza Script</a>
</div>
`;

console.log("");
// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}
console.log(
  "2.L'array longNames contenente i nomi degli insegnanti lunghi almeno 5 caratteri è:",
  longNames
);
document.getElementById("Exercise2").innerHTML = `
<div class="text-bg-secondary"><em><strong>TRACCIA:</strong>Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti con un nome di lunghezza maggiore o uguale a 5 caratteri</em></div><br>
<div class="p-3 border">
<strong>RISULTATO:</strong> longNames === <span class="text-danger"> [ ${longNames} ]</span><br>
 <a href="./img/Esercizio2-bonus.png" class="btn btn-primary m-3">Visualizza Script</a>
</div>
`;

console.log("");
// 3. Rimuovi 'Ed' dall'array teachers
const indexEd = teachers.indexOf("Ed");
teachers.splice(indexEd, 1);
console.log("3.Rimosso il nome Ed dall'array:", teachers);
document.getElementById("Exercise3").innerHTML = `
<div class="text-bg-secondary"><em><strong>TRACCIA:</strong>Rimuovi 'Ed' dall'array teachers</em></div><br>
<div class="p-3 border">
<strong>RISULTATO:</strong> teachers === <span class="text-danger"> [ ${teachers} ]</span><br>
 <a href="./img/Esercizio3-bonus.png" class="btn btn-primary m-3">Visualizza Script</a>
</div>
`;

console.log("");
// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes("Fabio");
console.log(
  "4.E' presente Fabio nell'array?:",
  isFabioPresent,
  "....(eseguito con la funzione includes)"
);

//4. ESEGUITO CON CONDIZIONI
const indexFabio = teachers.indexOf("Fabio");
let isFabioPresentIf = true;
if (indexFabio === -1) {
  isFabioPresentIf = false;
}
console.log(
  "4.E' presente Fabio nell'array?:",
  isFabioPresentIf,
  "....(eseguito con la funzione indexOf e condizione di esistenza)"
);
document.getElementById("Exercise4").innerHTML = `
<div class="text-bg-secondary"><em><strong>TRACCIA:</strong>Verifica se 'Fabio' è presente nell'array teachers e salva il risultato nella variabile isFabioPresent</em></div><br>
<div class="p-3 border">
<strong>RISULTATO:</strong> isFabioPresent === <span class="text-primary"> ${isFabioPresent} </span><br>
 <a href="./img/Esercizio4-bonus.png" class="btn btn-primary m-3">Visualizza Script</a> 
</div>
`;

console.log("");
// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.toString();
console.log(
  "5.Stringa degli elemnti dell'array ottenuta con funzione toString:",
  teachersString
);

//ESEGUITO CON FOR
let teachersStringFor = "";
for (i = 0; i < teachers.length; i++) {
  teachersStringFor += `${teachers[i]}`;
  if (i !== teachers.length - 1) {
    teachersStringFor += ",";
  }
}
console.log(
  "5.Stringa degli elemnti dell'array ottenuta con ciclo For:",
  teachersStringFor
);
document.getElementById("Exercise5").innerHTML = `
<div class="text-bg-secondary"><em><strong>TRACCIA:</strong>Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString</em></div><br>
<div class="p-3 border">
<strong>RISULTATO:</strong> teachersString === ${teachersString} <br>
 <a href="./img/Esercizio5-bonus.png" class="btn btn-primary m-3">Visualizza Script</a>
</div>
`;
