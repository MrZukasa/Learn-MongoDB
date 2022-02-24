
const searchBTN = document.querySelector("#search");
const responseP = document.querySelector("#response");
const tabella = document.querySelector("#tabella").getElementsByTagName("tbody")[0];
const header = document.querySelector("#tabella");
const t = document.querySelectorAll("#tabella");
const nome = document.querySelector('#nome');
const cognome = document.querySelector('#cognome');
const email = document.querySelector('#email');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

searchBTN.addEventListener('click', () => {
    
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
});

t.forEach(function(row) {    
    row.addEventListener("click", (row) =>{
        let rowData = row.path[1].cells;

        nome.value = rowData["nome"].innerHTML;
        cognome.value = rowData["cognome"].innerHTML;
        email.value = rowData["email"].innerHTML;
        username.value = rowData["username"].innerHTML;
        password.value = rowData["password"].innerHTML;
        
        responseP.innerHTML = "Record caricato con successo!";
        responseP.setAttribute('style', 'color:green');
        setTimeout(() => responseP.innerHTML = "",3000)
    })
});