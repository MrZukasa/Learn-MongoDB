
const searchBTN = document.querySelector("#search");
const updateBTN = document.querySelector("#update");
const deleteBTN = document.querySelector("#remove");
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
const time = 5000;
let url = "";
let infoMsg ="";

clearBTN.addEventListener('click',() => {
    nome.value = "";
    cognome.value = "";
    username.value = "";
    email.value = "";
    password.value = "";
    form.classList.remove('was-validated');
});

function engine (url) {
    form.classList.remove('was-validated');
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
            if (collection.hasOwnProperty('Error')==false){
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
                
                switch(url){
                    case "view.php":
                        infoMsg = "Ricerca completata.";
                        break;
                    case "insert.php":
                        infoMsg = "Inserimento completato. ";
                        break;
                    case "update.php":
                        infoMsg = "Aggiornamento completato.";
                        break;
                    case "delete.php":
                        infoMsg = "Cancellazione completata.";
                        break;
                };
                responseP.innerHTML = infoMsg;
                responseP.setAttribute('style', 'color:Chartreuse');
                setTimeout(() => responseP.innerHTML = "",time);

            } else {
                responseP.innerHTML = collection.Error;
                form.classList.add('was-validated');
                responseP.setAttribute('style', 'color:OrangeRed');
                setTimeout(() => responseP.innerHTML = "",time);
            }                        
        })
    }).catch(error =>{    
        switch(url){
            case "view.php":
                infoMsg = "Ricerca fallita! ";
                break;
            case "insert.php":
                infoMsg = "Inserimento fallito! ";
                break;
            case "update.php":
                infoMsg = "Aggiornamento fallito! ";
                break;
            case "delete.php":
                infoMsg = "Cancellazione fallita! ";
                break;
        }
        responseP.innerHTML = infoMsg + error.message;
        responseP.setAttribute('style', 'color:OrangeRed');
        setTimeout(() => responseP.innerHTML = "",time);
    });
    return;
};

addBTN.addEventListener('click', function() {engine("insert.php")});
searchBTN.addEventListener('click', function() {engine("view.php")});
updateBTN.addEventListener('click', function() {engine("update.php")});
deleteBTN.addEventListener('click', function() {engine("delete.php")});

t.forEach(function(row) {    
    row.addEventListener("click", (row) =>{
        let rowData = row.path[1].cells;

        nome.value = rowData["nome"].innerHTML;
        cognome.value = rowData["cognome"].innerHTML;
        email.value = rowData["email"].innerHTML;
        username.value = rowData["username"].innerHTML;
        password.value = rowData["password"].innerHTML;
        
        responseP.innerHTML = "Record caricato con successo!";
        responseP.setAttribute('style', 'color:Chartreuse');
        setTimeout(() => responseP.innerHTML = "",time);
    })
});