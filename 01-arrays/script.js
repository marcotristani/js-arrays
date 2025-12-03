const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE
console.log("L'array originale è :", teachers);

console.log("");
// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log( "il quarto insegnante nell'array è :", fourthTeacher );

console.log("");
// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers.splice(4, 1, 'Patrick');
console.log("L'array modificato è :", teachers, "....(Sostituito il quinto insegnante nell'array con 'Patrick)");

console.log("");
// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log("L'ultimo elemento rimosso dall'array è;", lastTeacher, "....L'array modificato è:", teachers);

console.log("");
// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log("Il primo elemento rimosso dall'array è;", firstTeacher, "....L'array modificato è:", teachers);

console.log("");
// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa');
console.log("L'arrey modificato è :", teachers, "....(Aggiunto un insegnante di nome Vanessa alla fine dell' array)");

console.log("");
// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah');
console.log("L'arrey modificato è :", teachers, "....(Aggiunto un insegnante di nome Sarah all'inizio dell' array)");

console.log("");
// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf('Lewis');
console.log("L'indice corrispondente all'insegnante Lewis è:", lewisIndex);

console.log("");
// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
let isTeachersEmpty = null;
if(teachers.length === 0){
  isTeachersEmpty = true ;
}else {
  isTeachersEmpty = false ;
}
console.log("L'array è vuoto?:", isTeachersEmpty);