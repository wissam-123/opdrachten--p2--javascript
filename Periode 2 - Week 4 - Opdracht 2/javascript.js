     // JavaScript code
        function toonTafel(vanGetal) {
            document.write(`<h3>Tafel van ${vanGetal}</h3>`);
            for (let i = 1; i <= 10; i++) {
                let resultaat = i * vanGetal;
                document.write(`${i} x ${vanGetal} = ${resultaat} <br>`);
            }
        }

        // Geef het gewenste getal mee aan de functie
        toonTafel(7); // Bijvoorbeeld: de tafel van 5
        toonTafel(8); // Bijvoorbeeld: de tafel van 8
        toonTafel(3); // Bijvoorbeeld: de tafel van 3
        
 