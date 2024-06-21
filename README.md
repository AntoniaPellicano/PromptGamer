# PromptGamer
Where AI Meets Play
ape@competenzedistintive.com


Prompt Gamer è un gioco sfida per apprendere l'AI generativa. I giocatori potranno creare dei prompt per scenari specifici e verranno guidati e premiati in base alla qualità e alla lunghezza del prompt generato. Ecco una spiegazione dettagliata di come funziona il gioco:

Componenti di Base
Card: Un contenitore stilizzato per altri componenti.
Button: Un pulsante con uno stile predefinito e un effetto hover.
Input: Un campo di input di testo stilizzato.
Progress: Una barra di progresso che mostra il tempo rimanente in un round.
Badge: Un piccolo badge stilizzato per mostrare informazioni come il punteggio o il round.
Scenari e Consigli
Il gioco utilizza due array:

scenarios: Contiene vari scenari che il giocatore deve affrontare, come generare un'immagine o scrivere una poesia.
tips: Consigli utili su come scrivere prompt efficaci per ottenere i migliori risultati dall'AI.
Stato dell'Applicazione
Il componente principale, PromptGamer, utilizza diversi stati per gestire il gioco:

currentScenario: Lo scenario attuale che il giocatore deve affrontare.
userPrompt: Il prompt inserito dall'utente.
feedback: Feedback dato all'utente dopo la valutazione del prompt.
score: Il punteggio del giocatore.
timeLeft: Il tempo rimanente per completare il prompt in un round.
isPlaying: Indica se un round è in corso.
isGroupMode: Modalità di gioco (singolo o gruppo).
round: Il numero del round corrente.
currentTip: Il consiglio attuale visualizzato per aiutare l'utente.
activeTab: La scheda attiva (gioco o impara).
Funzionamento del Gioco
startNewRound: Inizia un nuovo round selezionando uno scenario casuale e resettando i valori necessari.
endRound: Termina il round e chiama la funzione di valutazione del prompt.
evaluatePrompt: Valuta il prompt dell'utente in base alla lunghezza e al tempo rimanente, assegnando un punteggio e fornendo feedback.
toggleGroupMode: Alterna tra la modalità di gioco singolo e di gruppo, resettando il punteggio e il round.
Interfaccia Utente
Il componente rende l'interfaccia con diverse sezioni:

Titolo e Descrizione: Un'introduzione al gioco.
Pulsanti di Navigazione: Per passare tra la modalità di gioco e la modalità di apprendimento.
Dettagli del Round: Visualizza il round corrente e il punteggio.
Scenario e Input: Visualizza lo scenario attuale e un campo di input per inserire il prompt.
Barra di Progresso: Mostra il tempo rimanente.
Consiglio: Visualizza un consiglio casuale per migliorare i prompt.
Feedback: Fornisce feedback sul prompt dell'utente alla fine del round.
Pulsanti di Controllo: Per iniziare un nuovo round o cambiare modalità di gioco
