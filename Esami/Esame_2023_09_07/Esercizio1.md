# Domande di base

## 1 - CSS 
Un effetto trasparenza si ottiene in CSS attraverso l'utilizzo della proprietà __opacity__. Un esempio di quando detto può essere dimostrato come segue: 

selettore { \
&ensp;opacity: 0.5; \
}

## 2 - Codifica caretteri
__UTF-8__ è uno standard di codifica che utilizza una struttura variabile, ossia non codifica un carattere in maniera univoca utilizzando sempre lo stesso numero di Byte, ma in base alla tipologia distingue il numero di bit da destinare per la codifica.
Esso distingue quattro gruppi principali, a seconda del carattere, pur di garantire una corretta codifica, suddivisi in:
* __ASCII__, tutti i caratteri inclusi nello standard a lunghezza fissa occupano __1 Byte__
* __Latini__, occupano un totale di __2 Byte__
* __Ideogrammi__, occupano __3 Byte__
* Per qualsiasi altro carattere sono destinati un totale di __4 Byte__, la lunghezza massima per la codifica __UTF-8__

## 3 - URI
__URI__ è l'acronimo di __Uniform Resource Identifier__, ossia un identificativo univoco per poter identificare una determinata risorsa. Tipicamente utilizzato in contesti __client-server__, dove, rispettivamente, il primo formula la richiesta per ottenere la risorsa, specificandone l'__URI relativo__ oppure __assoluto__, mentre il secondo attore, possessore della risorsa desiderata, restituisce una risposta descrivendo l'esito della richiesta.

Un URI si fonda su una specifica struttura, cosi suddivisa:
* __authority__, definisce l'organizzazione a cui i nomi sono delegati
* __path__, parte identificativa della risorsa nello spazio dei nomi
* __query__, specifica della risorsa, definisce dettagliatamente le caratteristiche che debba possedere la risorsa
* __fragment__, rappresenta una sezione della risorsa

## 4 - REST API
Un'__API__ definisce un'interfaccia dedita a fornire una risposta dinnanzi a delle richieste. Rappresenta l'insieme dell'azioni che possano essere adottate mediante un servizio esterno. Un'API è detta __RESTful__ se e solo se si fonda su due caratterizzazioni fondamentali, cosi descritte:
* Il naming delle risorse avviene mediante __URI__
* Il protocollo di trasporto utilizzato è __HTTP__

L'utilizzo di HTTP e URI è necessario affinchè le API create siano ritenute __ben fatte__.