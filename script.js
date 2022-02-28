
const searchBTN = document.querySelector("#search");
const clearBTN = document.querySelector("#clear");
const addBTN = document.querySelector("#add");
const responseP = document.querySelector("#response");
const tabella = document.querySelector("#tabella").getElementsByTagName("tbody")[0];
const header = document.querySelector("#tabella");
const t = document.querySelectorAll("#tabella");
const nome = document.querySelector('#nome');
const cognome = document.querySelector('#cognome');
const email = document.querySelector('#email');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const form = document.querySelector("#tovalidate");
let url = "";
let infoMsg ="";

clearBTN.addEventListener('click',() => {
    nome.value = "";
    cognome.value = "";
    username.value = "";
    email.value = "";
    password.value = "";
});

function engine (url) {
    if (validate(url)==false){
        return;
    }
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
        switch(url){
            case "view.php":
                infoMsg = "Ricerca fallita! ";
                break;
            case "insert.php":
                infoMsg = "Inserimento fallito! ";
                break;
        }
        responseP.innerHTML = infoMsg + error.message;
        responseP.setAttribute('style', 'color:yellow');
        setTimeout(() => responseP.innerHTML = "",3000)
    });
    return;
};

function validate(url) {
    switch(url){
        case "view.php":
            infoMsg = "Ricerca eseguita con successo!";
            responseP.innerHTML = infoMsg;
            responseP.setAttribute('style', 'color:blue');
            form.classList.remove('was-validated');
            setTimeout(() => responseP.innerHTML = "",3000);
            return true;
            break;
        case "insert.php":
            if ((nome.value != "")&&(cognome.value != "")&&(username.value != "")&&(password.value != "")&&(email.value != "")){                
                infoMsg = "Inserimento eseguito con successo!";
                responseP.innerHTML = infoMsg;
                responseP.setAttribute('style', 'color:blue');
                setTimeout(() => responseP.innerHTML = "",3000);
                return true;
            } else {
                infoMsg = "Per l'inserimento sono necessari tutti i campi.";
                form.classList.add('was-validated');
                responseP.innerHTML = infoMsg;
                responseP.setAttribute('style', 'color:yellow');
                setTimeout(() => responseP.innerHTML = "",3000);
                return false;
            }            
            break;
    }
    return validate;
};

addBTN.addEventListener('click', function() {engine("insert.php")});

searchBTN.addEventListener('click', function() {engine("view.php")});

t.forEach(function(row) {    
    row.addEventListener("click", (row) =>{
        let rowData = row.path[1].cells;

        nome.value = rowData["nome"].innerHTML;
        cognome.value = rowData["cognome"].innerHTML;
        email.value = rowData["email"].innerHTML;
        username.value = rowData["username"].innerHTML;
        password.value = rowData["password"].innerHTML;
        
        responseP.innerHTML = "Record caricato con successo!";
        responseP.setAttribute('style', 'color:blue');
        setTimeout(() => responseP.innerHTML = "",3000);
    })
});