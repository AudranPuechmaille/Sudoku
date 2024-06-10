



// Exercice 3 (20 points)





// Créer une nouvelle fonction "checkRows" qui appelle "validateRow" pour chaque ligne et indique un message d'erreur avec le numéro de la ligne et les valeurs des chiffres sur la ligne. (4 points)

function checkRows()
{
    for (var i = 0; i < 9; i++) // Parcourir la ligne
	{
        if (!validateRow(to_verify[i])) // Condition si la ligne ne remplit pas les critères de la fonction validateRow créée précédemment
		{
            addErrorRow(`Ligne ${i + 1} incorrecte`, to_verify[i]); // Si la ligne est incorrecte, ajouter une ligne dans le tableau d'erreurs avec le numéro de la ligne et ses valeurs
        }
    }
}




// Répéter l'opération avec une fonction "checkColumns" qui traite chaque colonne et indique un message d'erreur avec le numéro de la colonne et les valeurs des chiffres sur la colonne. (4 points)


function checkColumns() 
{
    for (var col = 0; col < 9; col++) // Parcourir les colonnes
	{
        var column = []; // Création d'un tableau permettant l'indexage des colonnes
		
        for (var row = 0; row < 9; row++) // Parcourir les lignes
		{
            column.push(to_verify[row][col]); // .push pour ajouter le nouveau tableau column aux éléments au tableau, ce qui permet l'indexage des colonnes dans le tableau par rapport aux lignes
        }
		
        if (!validateRow(column)) 
		{
            addErrorRow(`Colonne ${col + 1} incorrecte`, column);
        }
    }
}




// Répéter l'opération avec une fonction "checkRegions" qui traite chaque région et indique un message d'erreur avec le numéro de la région (numérotation de haut en bas et de gauche à droite) et les valeurs des chiffres sur la région. (4 points)

function checkRegions() {
    
    for (var region = 0; region < 9; region++) // Parcourir chaque région
	{
        
        var regionValues = []; // Créer un tableau vide pour stocker les valeurs de la région en cours de vérification


        // Calculer les indices de départ de la région en fonction de sa position dans la grille de sudoku
		
        var startRow = Math.floor(region / 3) * 3; // Calculer la ligne de départ de la région
        var startCol = (region % 3) * 3; // Calculer la colonne de départ de la région

        // Parcourir les lignes et les colonnes de la région en cours de vérification
        for (var row = 0; row < 3; row++) 
		{
            for (var col = 0; col < 3; col++) 
			{
                // Ajouter chaque valeur de la région au tableau créé.
                regionValues.push(to_verify[startRow + row][startCol + col]);
            }
        }

        if (!validateRow(regionValues)) 
		{
            addErrorRow(`Région ${region + 1} incorrecte`, regionValues);
        }
    }
}





// Fonction pour créer et ajouter une ligne dans le tableau d'erreurs

function addErrorRow(header, elements) 
{
    var errorTable = document.getElementById("errorTable"); // Récupérer le tableau par son ID
    var newRow = document.createElement("tr"); // Créer une ligne
    var headerCell = document.createElement("td"); // Créer l'en-tête
	
	
    headerCell.textContent = header; // Ajouter le texte de l'en-tête
    newRow.appendChild(headerCell); // Ajouter la cellule d'en-tête à la ligne
	
	
    elements.forEach(element => // Pour chaque élément passé en argument
	{
        var newCell = document.createElement("td"); // Créer une nouvelle cellule
		
        newCell.textContent = element;  // Ajouter le contenu de l'élément à la cellule 
        newRow.appendChild(newCell);  // Ajouter la cellule à la ligne
    });
	
    errorTable.appendChild(newRow); // Ajouter la ligne au tableau d'erreurs
}





function checkErrorsAndDisplayMessage() 
{
    // Afficher le message "Le sudoku est correct" s'il n'y a pas d'erreurs
	
    var errorTable = document.getElementById("errorTable");
	
    if (errorTable.getElementsByTagName('tr').length === 0) 
	{
        var messageElement = document.createElement("span");
		
        messageElement.textContent = "Le sudoku est correct";
        document.getElementById("sudokuMessage").appendChild(messageElement);
    }
}

// Exécuter les vérifications après que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function() 
{
    checkErrorsAndDisplayMessage();
});