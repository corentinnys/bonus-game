let armes =['pierre','papier','sciseau'];
let resultat =document.getElementById('resultat')

let user_score=0;
let ordi_score=0;

function combattre(userArme,ordiArme){

    if (ordiArme == 'pierre' && userArme=='pierre'|| ordiArme == 'papier' && userArme=='papier'
        || ordiArme == 'sciseau' && userArme=='sciseau')
    {
        resultat.innerHTML = 'egalite';
        resultat.className ='Egality'

    }
    else if(ordiArme == 'pierre'&& userArme== 'papier' || ordiArme =='papier'&& userArme=='pierre')
    {
        if (userArme == 'papier')
        {
            resultat.innerHTML = "vous avez perdu";
            resultat.className ='lose'
            ordi_score+=1;
        }
        else {
            resultat.innerHTML = "vous avez gagné";
            resultat.className ='win'

            user_score+=1;
        }

    }
    else if(ordiArme == 'ciseaux'&& userArme== 'papier' || ordiArme =='papier'&& userArme=='ciseaux')
    {
        if (userArme == 'ciseaux')
        {
            resultat.innerHTML = "vous avez gagné";
            resultat.className ='win'
            user_score+=1;
        }
        else {
            resultat.innerHTML = "vous avez perdu";
            resultat.className ='lose'
            ordi_score+=1;
        }

    }
    else if(ordiArme == 'ciseaux'&& userArme== 'pierre' || ordiArme =='pierre'&& userArme=='ciseaux')
    {
        if (userArme == 'pierre')
        {
            resultat.innerHTML = "vous avez gagné";
            user_score+=1;
            resultat.className ='win'

        }
        else {
            resultat.innerHTML = "vous avez perdu";
            resultat.className ='lose'
            ordi_score+=1;
        }

    }


}


    document.querySelectorAll('.choix').forEach((items)=>
    {
        items.onclick = function (e) {
            localStorage.setItem('choix_user',  e.target.classList[1]);
        }

    })





document.querySelector('#combat').onclick=function () {
    let aleatoire = Math.floor(Math.random()*(armes.length-1))
    let ordi_arme = armes[aleatoire];
    localStorage.setItem('ordi_arme',ordi_arme)
    let choix_user = localStorage.getItem('choix_user');

    combattre(choix_user,ordi_arme)


    document.querySelector('#score').innerHTML = "vous avez gagné "+user_score +' partie(s) et perdu '+ ordi_score +'partie(s)'


}
document.querySelector('#replay').onclick= function ()
{
    let choix_user = localStorage.getItem('choix_user');
    let ordi_arme = localStorage.getItem('ordi_arme');
    combattre(choix_user,ordi_arme)
}

