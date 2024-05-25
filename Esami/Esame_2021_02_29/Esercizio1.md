# Domande di base

### A. Un metodo HTTP è sicuro quando è disponibile per tutti gli indirizzi gestiti dall'Origin Server

### Risposta
Un metodo, oppure __verbo__, HTTP è definito __sicuro__ qualora, attuato, non comporti ad alcun cambiamento delle risorse poste all'interno del __Server__. \
Contrariamente un metodo HTTP è definito __idempotente__ qualora attuato singolarmente, piuttosto che molteplici volte, comporti allo stesso effetto nei confronti del __Server__.

### B. Di quanti Byte è composta la parola "asteroide" quando viene scritta usando US-ASCII? E usando UTF-8?

### Risposta
La parole __asteroide__ convertita in binary code, rispetto ai due standard riportati, richiede:
* __US-ASCII__ non può codificare la parola poichè non possiede abbastanza bit per poter rappresentare caratteri __latini__
* __UTF-8__ adegua 12 Byte per la conversione del termine

### C. Dato il seguente codice Javascript, cosa viene stampato in console?

var a = [5, 2, 6, 0, 5, 1, 3, 2]; \
console.log(a[a[a[a[2]]]]); 

### Risposta
In console sarà visualizzato il valore numerico __6__.

### D. Come si ottiene un bordo arrotondato in CSS?

### Risposta
Un bordo arrotondato in __CSS__ si ottiene utilizzando la proprietà __border-radius__ 

button { \
    border-radius: 10px; \
}

Il bottone possiede un bordo arrotondato pari a 10px.