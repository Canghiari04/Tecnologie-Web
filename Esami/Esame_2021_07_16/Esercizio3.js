document.addEventListener('DOMContentLoaded', function () {
    var select = document.getElementById('role-player');

    select.onchange = (event) => {
        removeContent(document.getElementById('div-players'));

        if(select.value === "goalkeeper") 
            getPlayers();
    }

    /* si agisce sempre sul div più esterno qualora debba agire su elementi interni e soprattutto incerti (come tag html dinamici, quindi inseriti da DOM e non staticamente) */
    const divPlayers = document.querySelector('[role="div-players"]');
    divPlayers.addEventListener('click', function() {
        /* restituisce l'elemento che abbia scatenato l'evento, in questo caso il div cliccato */
        var divClicked = event.target;
        var idDivClicked = divClicked.id;

        var request = new XMLHttpRequest();
        request.open('GET', 'http://diiorio.nws.cs.unibo.it/twe/api/euro2/ruoli.php');
        request.send();

        request.onload = () => {
            var players = JSON.parse(request.response);
            addDescription(idDivClicked, players);
        }
    });

    function removeContent(div) {
        div.innerHTML = '';
    }

    function getPlayers() {
        var request = new XMLHttpRequest();
        request.open('GET', 'http://diiorio.nws.cs.unibo.it/twe/api/euro2/ruoli.php'); // aperta la connessione HTTP rispetto al sevizio e definito il verbi GET per ottenere un documento JSON
        request.send();

        /* esempio di gestione di richieste GET asincrone a servizi esterni mediante l'attuazione di JQuery */
        $.ajax({
            url: 'http://diiorio.nws.cs.unibo.it/twe/api/euro2/ruoli.php',
            dataType: 'json',
            success: function() {
                console.log('Richiesta andata a buon fine!');
            },
            error: function() {
                console.log('Errore nella richiesta.');
            }
        });

        request.onload = () => {
            var players = JSON.parse(request.response);

            for(let i = 0; i <= (players.length - 1); i++) {
                var divPlayers = document.getElementById('div-players');
                
                var divPlayer = document.createElement('div');

                var paragraphNamePlayer = document.createElement('p');
                paragraphNamePlayer.textContent = players[i].name;

                var idPlayerAttribute = document.createAttribute('id');
                idPlayerAttribute.value = players[i].id;
                divPlayer.setAttributeNode(idPlayerAttribute);

                var paragraphNamePlayerAttribute = document.createAttribute('role');
                paragraphNamePlayerAttribute.value = 'name-player';
                paragraphNamePlayer.setAttributeNode(paragraphNamePlayerAttribute);

                var paragraphDescriptionPlayer = document.createElement('p');
                paragraphDescriptionPlayer.textContent = players[i].bio;
                var paragraphDescriptionPlayerAttribute = document.createAttribute('role');
                paragraphDescriptionPlayerAttribute.value = 'description-player';
                paragraphDescriptionPlayer.setAttributeNode(paragraphDescriptionPlayerAttribute);

                divPlayer.appendChild(paragraphNamePlayer);
                divPlayer.appendChild(paragraphDescriptionPlayer);

                divPlayers.appendChild(divPlayer);
            }
        }
    }    

    function addDescription(id, players) {
        var divDescription = document.querySelector('[role="div-player"]');
        divDescription.innerHTML = '';

        for(let i = 0; i <= (players.length - 1); i++) {
            if(players[i].id === id) {
                var header = document.createElement('h1');
                header.textContent = players[i].name;
                divDescription.appendChild(header);

                var paragraph = document.createElement('p');
                paragraph.textContent = players[i].bio;
                divDescription.appendChild(paragraph);

                var divImages = document.createElement('div');
                var src1 = document.createAttribute('src');
                var src2 = document.createAttribute('src');
                var src3 = document.createAttribute('src');
                var image1 = document.createElement('img');
                var image2 = document.createElement('img');
                var image3 = document.createElement('img');

                if(id === 'donnarumma') {
                    src1.value = 'http://diiorio.nws.cs.unibo.it/twe/resources/1507a/gigio1.jpg';
                    image1.setAttributeNode(src1);
                    src2.value = 'http://diiorio.nws.cs.unibo.it/twe/resources/1507a/gigio2.jpg';
                    image2.setAttributeNode(src2);
                    src3.value = 'http://diiorio.nws.cs.unibo.it/twe/resources/1507a/gigio3.jpg';
                    image3.setAttributeNode(src3);
                } else {
                    src1.value = 'http://diiorio.nws.cs.unibo.it/twe/resources/1507a/neuer1.jpg';
                    image1.setAttributeNode(src1);
                    src2.value = 'http://diiorio.nws.cs.unibo.it/twe/resources/1507a/neuer2.jpg';
                    image2.setAttributeNode(src2);
                    src3.value = 'http://diiorio.nws.cs.unibo.it/twe/resources/1507a/neuer3.jpg';
                    image3.setAttributeNode(src3);
                }

                divImages.appendChild(image1);
                divImages.appendChild(image2);
                divImages.appendChild(image3);
                divDescription.appendChild(divImages);  
            }
        }
    }
});