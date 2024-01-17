// Setto "foundMail a false
 // chiedo all utente la sua mail (userMail)
// per ogni mail nell'array (ciclo for)
 // recupero la mail iterata (const mail = mails [i]);
 // se la mail dell utente corrisponde con la mail corrente del for
   // l utente puo fare il login (foundMail = true)
// se la mail e stat trovata (foundMail == true)
  // stampo il benvenuto
// altrimento
  // stampo "Accesso negato"

const mails = ['mail1@gmail.com', 'mail2@gmail.com', 'mail3@gmail.com'];
let foundMail = false;

const userName = prompt('Inserisci la tua Email');
for(let i = 0; i < mails.length; i++) {
    const  currentMail = mails[i];
 
    if(userName == currentMail) foundMail = true;
}

 const outputText = foundMail ? 'accesso consentito' : 'accesso negato';
 alert(outputText);
