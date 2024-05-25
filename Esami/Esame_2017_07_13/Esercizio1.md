# Domande di base

### A. Trovare l'intruso o gli intrusi della seguente lista:
* URL
* CURIE
* IRL
* IRI
* URN
* URS

### Risposta
Rispetto all'elenco riportato gli intrusi sono __IRL__ e __URS__. Infatti un __URI__, ossia un __Uniform Resource Identifier__, è per definizione sia un __URL__ che un __URN__, in cui, rispettivamente, un __Uniform Resource Locator__ stabilisce un identificativo a livello di rete, infatti il suo campo di utilizzo consiste in un __indirizzo IP__, contrariamente il secondo citato, __Uniform Resource Name__, rappresenta un identificativo univoco in formato testuale, il quale deve essere registrato presso l'ente __IANA__. Tuttavia un URN, nonostante sia univoco, è piuttosto complicato da maneggiare pur di ottenere la risorsa desidetata, per questo spesso è tradotto in un URL.

### B. Scrivere una regola CSS per colorare di rosso lo sfondo di collegamenti ipertestuali contenuti in una tabella.

### Risposta
Ipotizzando una struttura della tabella come segue:

table>thead>tr>[th oppure td]\
table>tbody>tr>td>a

La regola __CSS__, rispetto alla struttura dei tag HTML, risulta:

table>tbody>tr>td>a { \
background-color: red; \
}

### C. Scrivere l'output del seguente script .php.

$mese​ ​=​ ​"Luglio"; \
$a​ ​=​ ​"Fa​ ​troppo​ ​caldo​ ​a​ ​Luglio​ ​a​ ​Bologna"; \
echo substr($a, 0, strpos($a, $mese) - 2); \

### Risposta
Lo script __php__ produce in output la seguente stringa: "Fa troppo caldo a Lugl"

### D. Spiegare brevemente il significato dell'acronimo REST

### Risposta
__REST__ è l'acronimo di __RESTUFUL State Transfer__, attuato per definire __API WEB__, ossia interfacce connesse a servizi HTTP, affinchè possano mostrare l'insieme delle funzioni e comportamenti che concretamente il __origin server__ è in grado di attuare. La definizione di un API REST rientra nella terminologia di "applicazione ben fatta", poichè sfrutta tutte le caratteristiche inerenti al protocollo di trasporto citato.Quindi, affinchè un'__API WEB__ possa essere ritenuta tale, occorre che sfrutti il protocollo di trasporto __HTTP__ e le regole di naming definite da __URI__. 