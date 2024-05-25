# Teoria

### Descrivere le differenze tra UTF-8 e ISO-Latin1

__UTF-8__ e __ISO-Latin1__ sono entrambi standard di codifica del testo; il primo a __lunghezza variabile__, mentre il secondo a __lunghezza fissa__. \
__UTF-8__ codifica i caratteri usufruendo di 4 Byte, ossia un totale di 2^16 bit, adeguando il seguente modello:
* 1 Byte per tutti i caratteri codificati dallo standard a __lunghezza fissa__ __ASCII__
* 2 Byte per tutti i caratteri __latini__
* 3 Byte per tutti i caratteri __ideografici__
* 4 Byte per i __restanti__

Contrariamente **ISO-Latin1** utilizza 1 Byte per la codifica dei caratteri, introducendo, in questo modo, anche i __characters latini__; pertanto, indipendentemente dal contesto, codificherà la lettera sfruttando la totalità del Byte. 

Concludendo, la differenza tra __UTF-8__ e __ISO-Latin1__ è dovuta la numero di bit utilizzati per codificare i caratteri __latini__, rispettivamente 2 Byte il primo e 1 Byte il secondo.