# Domande di base

### A. Come si ottiene un effetto trasparenza in CSS?

### Risposta
Un effetto __trasparenza__ in CSS si ottiene combinando la proprietà, assieme al proprio attributo, __opacity__. \
Un esempio è dato da: \
opacity: 0.5;

### B. Quanti Byte sono necessari per rappresentare le seguenti parole in UTF-8?

### Risposta
* __brood__ => 5 Byte \
* __pan__ => 3 Byte

### C. Fornire una breve spiegazione di cosa sia un URI e da quali componenti è composto.

### Risposta
Un __URI__, acronimo di __Uniform Resource Identifier__, definisce un identificativo univoco di una risorsa, posta all'interno di un servizio. Un URI per definizione è sia un __URL__, __Uniform Resource Locator__, che un __URN__, __Uniform Resource Name__; il primo è attuato tipicamente in ambito del protocollo di rete IP, poichè coincide con un indirizzo di rete, mentre il secondo stabilisce una stringa, anch'essa unica, registrata presso l'ente IANA. Un __URN__ è di difficile utilizzo, infatti spesso l'insieme di caratteri è convertito nel corrispettivo indirizzo di rete, rendendo la risorsa acquisibile e manipolabile. 

Un __API REST__ adotta una suddivisione specifica delle risorse. L'insieme di risorse è denominato __collezione__, mentre la singola risorsa è chiamata __individuo__; si ricorda che con il termine risorsa è descritta una qualsiasi entità, come ad esempio un file, una query per interrogare un database oppure l'estrapolazione di parametri utili.

Dato l'esempio sottostante, si individuano le componenti principali. \
__https://www.governmentissues.com:8080/files/documents/bills?query=ministry#first__

* __https://__ => definisce lo __schema__ dell'URI \
* __www.govermentissues.com:__ => entità dell'__authority__, tale componente coincide con la sezione __host__ \
* __8080/__ => __porta__ dell'URI, componente dell'__authority__ \
* __files/documents/bills__ => __path__, ossia il percorso della risorsa all'interno dell'Origin Server \
* __?query=ministry__ => sezione __query__ del __path__, il quale identifica con maggiore specificità la risorsa richiesta \
* __#first__ => __fragment__, risorsa secondaria connessa alla risorse primaria desiderata

### D. Descrivere, nel contesto di una REST API, la gerarchia delle collezioni. Fornire un esempio con tre livelli utilizzando filtri.

### Risposta
Un __API__ rappresenta un'interfaccia di un servizio, la quale esplicita quali funzioni e comportamenti siano conseguibili, per tutti coloro che effettuino una richiesta; pertanto, un __API WEB__, definisce un'interfaccia di un Server che mette a disposizione risorse e comportamenti sulle stesse, per tutti i Client che effettuino una richiesta da remoto. Un __API__ è __REST__ se rispetta determinate caratteristiche, quali:
* sfrutta il protocollo di trasporto __HTTP__
* utilizza il resource naming definito da __URI__

Esempio può essere stabilito come segue. \
GET /documents/owners/tecnologie-web/?query="REST-API"