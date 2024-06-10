



// Exercice 1 (10 points)





// Création du tableau à deux dimensions nommé "to_verify" de 9 cases sur 9. La création d'un tableau à 2 dimensions est nécessaire pour l'affichage, l'organisation et l'accès aux données du Sudoku. (1 point)

var to_verify = new Array(9);

for (var i = 0; i < 9; i++) 
{
    to_verify[i] = new Array(9);
}



// Création de la fonction "readAndTransferTable" (F11 dans l'énoncé) permettant de lire le tableau à 1 dimension du fichier Javascript_test_je1 et de le transférer dans le tableau "to_verify" à 2 dimensions. (4 points)

function readAndTransferTable(table_digits) 
{
    for (var i = 0; i < 9; i++) 
	{
        to_verify[i] = table_digits[i].split(' ').map(Number); // Création d'un nouveau tableau grâce à la fonction .map() (et convertit chaque sous-chaîne en type number + séparation par des espaces blancs).
    }
}



// Création de la fonction "displayTable" (F12 dans l'énoncé) permettant d'afficher le contenu de "to_verify" sous forme de tableau HTML. (3 points)

function displayTable() 
{
    var tableHTML = "<table border='1'>"; // Création du tableau HTML
	
    for (var i = 0; i < 9; i++) // Parcourir chaque ligne.
	{
        tableHTML += "<tr>"; // Création + Incrémentation d'une ligne (9 au total)
		
        for (var j = 0; j < 9; j++) // Parcourir chaque case d'une ligne.
		{
            tableHTML += "<td>" + to_verify[i][j] + "</td>"; // Création + Incrémentation de chaque data/case du tableau (9 cases pour 9 lignes au total) - to_verify[i][j] correspond à une case (car c'est un tableau à 2 dimensions).
        }
		
        tableHTML += "</tr>"; // Incrémentation de la fermeture de balise </tr> afin de fermer la ligne.
    }
	
    tableHTML += "</table>"; // Fermeture de la balise du tableau HTML.
	
    document.write(tableHTML); // Affichage du tableau nommé tableHTML via la (built-in) fonction document.write().
}
