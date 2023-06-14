let number_aleatoire = Math.ceil(Math.random()*25)
console.log(number_aleatoire);
document.querySelector('button').onclick=function () {
   let user_valeur = parseInt(document.querySelector('#userNumber').value)

    if (number_aleatoire != user_valeur )
    {
        if(user_valeur+1==number_aleatoire || user_valeur-1==number_aleatoire)
        {
            alert('vous etez proche du nombre à trouver')
        }else
        {
            alert("vous n' avez pas  deviner le numero secret")        }

    }else {
        alert('vous avez deviner le numero secret')
    }
}