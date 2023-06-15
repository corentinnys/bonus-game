
const Cartes= ['as','roi','dame','valet','10','9','8','7','6','5','4','3','2']
const couleures =['trefles','coeurs','piques','carreau']

let response = prompt('piocher une carte ?')

if (response == 'oui')
{
   let carte = Cartes[ Math.ceil(Math.random()*Cartes.length-1)]
    let couleur = couleures[Math.ceil(Math.random()*couleures.length-1)]
    alert(carte+' de '+couleur)

}

