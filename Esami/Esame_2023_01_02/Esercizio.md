# Pre-esame

### A. Il metodo POST è:

### Risposta
Il metodo POST rappresenta uno dei differenti verbi del protocollo di trasporto __HTTP__. HTTP definisce due insiemi di verbi, cosi suddivisi:
* __sicuri__, un verbo, oppure metodo, è detto sicuro se non provochi alcun cambiamento allo stato interno del __Server__
* __idempotente__, un verbo è detto idempotente se applicato singolarmente oppure molteplici volte, definisca sempre lo stesso effetto rispetto al __Server__

Pertanto, date le considerazioni precedenti, è possibile affermare che il metodo __POST__ non è __sicuro__ e nemmeno __idempotente__; questo avviene poichè attuare un verbo simile comporta sempre ad un cambiamento dello stato interno del __Server__, inoltre, replicarlo in differenti tentativi causa molteplici effetti.

### B. Quale dei seguenti HTTP status codes non corrisponde alla descrizione?

### Risposta
Lo __status code__ definisce una semantica diretta e concisa, con cui il __Client__ ha la possibilità di accertarsi del successo o meno della richiesta avanzata. __HTTP__ introduce lo status code all'interno della __reply__, stabilisce una classificazione in cinque insiemi, ognuno  descritto univocamente.
* __1XX__, informativo
* __2XX__, successo
* __3XX__, reindirizzamento 
* __4XX__, errore nella richiesta
* __5XX__, errore interno del server

Lo __status code__ che non rispecchia la descrizione è __304 Not Found__.

### C. In quale elemento HTML si scrive il codice JavaScript?

### Risposta
Il tag HTML necessario per scrivere o riportare uno script di JavaScript è __script__. Riporto lo script errato solamente per questioni di visualizzazione del linguaggio di markdown. \
<\script>...<\script> 

### D. Quali tra questi non è un selettore CSS?

### Risposta
Non è un __selettore CSS__ il tag __p**p__

### E. Spiegare cosa è un framework CSS e loro caratteristiche principali.

### Risposta
Un framework CSS comprende un insieme di regole e classi che facilitano lo sviluppatore nella creazione di __fogli di stile__. Si fonda sui __preprocessori CSS__, ossia compongono fogli di stile mediante un __CSS arricchito__, il quale viene poi conseguentemente convertito in __CSS tradizionale__. Pertanto, sono presenti due attività principali:
* __compilazione__, il CSS arricchito è tradotto per generare il CSS tradizionale
* __interpretazione__, il CSS tradizionale, tramite uno __script client-side__, è intepretato ed associato ai tag che compongano l'interpretazione esplicita della risorsa

Caratteristiche comuni di tutti i __framework__ consistono:
* suddivisione in __griglia__ della pagina visualizzata tramite __browser__; tipicamente adeguata secondo determinate unità di misura, basate in dodicesimi, come __extreme small__, __small__, __medium__ oppure __large__
* utilizzo di regole e grammatiche per la costruzione di un foglio di stile __omogeneo__
* attuabili in un qualsiasi __browser__