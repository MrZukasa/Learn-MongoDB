
let searchBTN = document.querySelector("#search");
const responseP = document.querySelector("#response");
let tabella = document.querySelector("#tabella");

searchBTN.addEventListener('click', () => {
    let nomePHP = document.querySelector('#nome');
    let cognomePHP = document.querySelector('#cognome');
    let emailPHP = document.querySelector('#email');
    let usernamePHP = document.querySelector('#username');
    let passwordPHP = document.querySelector('#password');
    let url = "view.php";
    let i=0

    fetch(url,{        
        method : "POST",        
        body: JSON.stringify({            
            nomePHP: nome,
            cognomePHP: cognome,
            emailPHP: email,
            usernamePHP: username,
            passwordPHP: password
        })
    }).then(response =>{
        responseP.innerHTML = "Ricerca eseguita con successo!";
        responseP.setAttribute('style', 'color:green');
        setTimeout(() => responseP.innerHTML = "",3000)
        fetch("dump.json")
        .then(response => response.json())
        .then(collection => {
            let row="";
            let table="";
            collection.forEach((data) =>{
                row = '<td id="nome">' + data +'</td>';
                table += "<tr><th scope ='row'>"+ (i+1) +"</th>"+ row +"</tr>";
                i+=1;                
            })
            // console.log(collection)
            tabella.insertRow(table);
        });
    }).catch(error =>{
        responseP.innerHTML = "Ricerca fallita!";
        responseP.setAttribute('style', 'color:red');
        setTimeout(() => responseP.innerHTML = "",3000)
    });
});