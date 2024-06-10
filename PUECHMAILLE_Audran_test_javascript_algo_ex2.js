



// Exercice 2 (10 points)





// Création de la fonction "validateRow" (F21 dans l'énoncé) qui accepte un paramètre d'entrée "row"

function validateRow(row) 
{
    if (row.length !== 9) return false;  // Vérifie que la ligne a une longueur de 9 cases..

    var numbers = new Set(); // La fonction Set() permet de stocker les chiffres de la ligne, Set() crée un ensemble de valeurs uniques (nommé numbers) - cela vérifie donc qu'il n'y a aucun doublon de chiffre dans une ligne.
	
    for (var i = 0; i < 9; i++) // Parcourir chaque élément de la ligne.
	{
        var num = row[i]; // Assignation d'un chiffre d'une case à la variable num.
		
        if (typeof num !== 'number' || num < 1 || num > 9 || numbers.has(num)) // Condition pour vérifier que chaque ligne a des chiffres de 1 à 9 tous différents les uns des autres - numbers.has(num) vérifie que la même case n'a pas été rencontrée.
		{
            return false;
        }
		
        numbers.add(num); // Ajout du chiffre vérifié à l'ensemble de valeurs uniques numbers.
    }
	
    return true;
}
