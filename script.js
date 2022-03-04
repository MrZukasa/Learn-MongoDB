
// Dichiarazione costanti e variabili
const searchBTN = document.querySelector("#search");
const updateBTN = document.querySelector("#update");
const deleteBTN = document.querySelector("#remove");
const clearBTN = document.querySelector("#clear");
const addBTN = document.querySelector("#add");
const responseP = document.querySelector("#response");
const alertbox = document.querySelector("#alertbox");
const tabella = document.querySelector("#tabella").getElementsByTagName("tbody")[0];
const header = document.querySelector("#tabella");
const t = document.querySelectorAll("#tabella");
const nome = document.querySelector('#nome');
const cognome = document.querySelector('#cognome');
const email = document.querySelector('#email');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const form = document.querySelector("#tovalidate");
const eye = document.querySelector("#eye");
const pwInput = document.querySelector("#password");
const toggler = document.querySelector("#toggleEye");
const time = 5000;
let url = "";
let infoMsg ="";


// funzione per il cambio di type e di icona relativi alla password
eye.addEventListener('click',() => {
    if(pwInput.type == "password"){
        pwInput.type = "text";
        toggler.classList.remove("far","fa-eye");
        toggler.classList.add("fas","fa-eye-slash");
    } else {
        pwInput.type = "password";
        toggler.classList.remove("fas","fa-eye-slash");
        toggler.classList.add("far","fa-eye");
    }
});


// funzione per svuotare gli input
clearBTN.addEventListener('click',() => {
    nome.value = "";
    cognome.value = "";
    username.value = "";
    email.value = "";
    password.value = "";
    form.classList.remove('was-validated');
});


// funzione primaria: passa parametri al backend e ne legge i dati in formato .json
// controlla gli errori e li ripoarta a video. Sia errori che messaggi di "successo"
function engine (url) {
    form.classList.remove('was-validated');                             //mi assicuro che i controlli richiedano ancora la validazione
    fetch(url,{                                                         //mando i dati alla pagina corretta 
        method : "POST",                                                //in metodo POST    
        headers: {
            'Content-Type': 'application/json'                          //indica che il contenuto della POST deve avere un BODY in formato JSON
        },
        body: JSON.stringify({                                          //formatto in JSON i campi presi in input
            nomePHP: nome.value,
            cognomePHP: cognome.value,
            emailPHP: email.value,
            usernamePHP: username.value,
            passwordPHP: password.value
        })
    }).then(() =>{
        fetch("dump.json")                                              //leggo la risposta dal backend sotto forma di file.JSON
        .then(response => response.json())                              //pharso la risposta dal file in formato JSON cosi da renderla interpretabile
        .then(collection => {                                           //la collection è quindi in formato JSON
            let row="";
            let table="";
            if (collection.hasOwnProperty('Error')==false){                                 //controllo se il JSON riporta errori dal backend
                collection.forEach((data,i) =>{                                             //se riporta i dati richiesti dall'utente li scorre
                    row = '<td id="nome">' + data.nome +'</td>';
                    row += '<td id="cognome">' + data.cognome +'</td>';
                    row += '<td id="email">' + data.email +'</td>';
                    row += '<td id="username">' + data.username +'</td>';
                    row += '<td id="password">' + data.password +'</td>';
                    table += "<tr id='riga"+(i+1)+"'><th scope ='row'>"+ (i+1) +"</th>"+ row +"</tr>";
                })
                header.style.visibility = 'visible'; 
                tabella.innerHTML =table;                               //formatto i dati in una tabella
                
                switch(url){                                            //controllo che messaggio di successo inviare a schermo
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
                setTimeout(() => responseP.innerHTML = "",time);        //formatto il messaggio con colore e timeout                       
            } else {                                                    //in caso di errore
                responseP.innerHTML = collection.Error;                 //leggo la proprietà Error e la rimando a video
                form.classList.add('was-validated');                    //mando in errore i campi a video
                responseP.setAttribute('style', 'color:OrangeRed');
                setTimeout(() => responseP.innerHTML = "",time);
            }                        
        })
    }).catch(error =>{                                                  //gestisco le casistiche di errore per il mancato
        switch(url){                                                    //funzionamento da parte del backend
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

// richiamo la funzione principale passando come parametro la pagina di riferimento relativa all'API
addBTN.addEventListener('click', function() {engine("insert.php")});
searchBTN.addEventListener('click', function() {engine("view.php")});
updateBTN.addEventListener('click', function() {engine("update.php")});
deleteBTN.addEventListener('click', function() {engine("delete.php")});

// scorro le rige della tabella
t.forEach(function(row) {
    row.addEventListener("click", (row) =>{                             //aggiungo all'evento click della riga una funzione
        let rowData = row.path[1].cells;                                //leggo la cella che mi interessa all'interno dell'array

        nome.value = rowData["nome"].innerHTML;
        cognome.value = rowData["cognome"].innerHTML;
        email.value = rowData["email"].innerHTML;
        username.value = rowData["username"].innerHTML;
        password.value = rowData["password"].innerHTML;                 //leggo i dati dalla tabella e li inserisco nel form
        
        responseP.innerHTML = "Record caricato con successo!";
        responseP.setAttribute('style', 'color:Chartreuse');
        setTimeout(() => responseP.innerHTML = "",time);                //mando a video il messaggio di successo
    })
});