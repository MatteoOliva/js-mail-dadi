# EX Mail

## TRACCIA

Chiedi all utente la sua email,
controlla che sia nella lista di chi puo accedere,
stampa un messaggio appropriato sull esito del controllo.

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma cosi come lo faremo "a mano"


## SVOLGIMENTO

- Setto "foundMail a false
 - chiedo all utente la sua mail (userMail)

- per ogni mail nell'array (ciclo for)
 - recupero la mail iterata (const mail = mails [i]);
 - se la mail dell utente corrisponde con la mail corrente del for
   - l utente puo fare il login (foundMail = true)

- se la mail e stat trovata (foundMail == true)
  - stampo il benvenuto
- altrimento
  - stampo "Accesso negato"
