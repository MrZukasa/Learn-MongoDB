
const searchBTN = document.querySelector("#search");
const responseP = document.querySelector("#response");
const tabella = document.querySelector("#tabella").getElementsByTagName("tbody")[0];
const header = document.querySelector("#tabella");

searchBTN.addEventListener('click', () => {
    let nome = document.querySelector('#nome');
    let cognome = document.querySelector('#cognome');
    let email = document.querySelector('#email');
    let username = document.querySelector('#username');
    let password = document.querySelector('#password');
    let url = "view.php";

    fetch(url,{        
        method : "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nomePHP: nome.value,
            cognomePHP: cognome.value,
            emailPHP: email.value,
            usernamePHP: username.value,
            passwordPHP: password.value
        })
    }).then(() =>{        
        responseP.innerHTML = "Ricerca eseguita con successo!";
        responseP.setAttribute('style', 'color:green');
        setTimeout(() => responseP.innerHTML = "",3000)
        fetch("dump.json")
        .then(response => response.json())
        .then(collection => {
            let row="";
            let table="";            
            collection.forEach((data,i) =>{                
                row = '<td id="nome">' + data.nome +'</td>';                
                row += '<td id="cognome">' + data.cognome +'</td>';
                row += '<td id="email">' + data.email +'</td>';
                row += '<td id="username">' + data.username +'</td>';
                row += '<td id="password">' + data.password +'</td>';
                table += "<tr id='riga"+(i+1)+"'><th scope ='row'>"+ (i+1) +"</th>"+ row +"</tr>";
            })
            header.style.visibility = 'visible'; 
            tabella.innerHTML =table;
        });
    }).catch(error =>{
        responseP.innerHTML = "Ricerca fallita! " + error.message;
        responseP.setAttribute('style', 'color:red');
        setTimeout(() => responseP.innerHTML = "",3000)
    });

    const table = document.querySelector("#tabella");
    console.log(table.rows[2].getElementsByTagName("td"));

});

