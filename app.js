//1.    Schrijf een simpele statement die aangeeft of een getal even of oneven is.

var a = 33 % 9;

console.log(a);

//2.    Ik wil graag in de volgende string ‘Programming is not so cool’ het woordje ‘not’ verwijderen. Schrijf een programma dat dit doet.

const message = "Programming is not so cool";
var message3 = message.replace("not", "");

console.log(message3);

//3.    Vergelijk de waarden ‘1400’ met de string ‘Ik woon in Naboo’. Programmeer deze opdracht en geef aan (met commentaar in je code) waarom dit niet een slimme vraag is. 

const number = 1400;
const sentence = "Ik woon in Naboo";

console.log(number == sentence) // Je vergelijkt cijfers met zinnen, dat betekent dat de uitkomst niet goed kan zijn en het geen goeie vergelijking is.
