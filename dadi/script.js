// generare il numero dell'utente
// generare il numero del computer

// Se il numero dell'utente e maggiore del numero del computer
  // l'utente ha vinto
// ATRIMENTI SE il numero del computer e maggiore del numero dell utente
  // il computer ha vinto
// ALTRIMENTI
  // e un pareggio


  const userNumber = Math.floor(Math.random() * 6 + 1);
  console.log('user: ' + userNumber);

  const pcNumber = Math.floor(Math.random() * 6 + 1);
  console.log('computer: ' + pcNumber);

  let outputText;
  if(userNumber > pcNumber) {
    outputText = "l utente ha vinto";

  } else if (pcNumber > userNumber) {
     outputText = "il computer ha vinto";
  } else {
    outputText = 'Pareggio';
  }

  alert(outputText);