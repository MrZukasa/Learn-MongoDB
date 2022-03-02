<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
    <link rel="icon" href="./pngwing.png" type="image/png">
    <style>                    
        label{
            color: #bdbdbd;
        }
        body{
            background-color: #4d4d4d !important;
        }
    </style>
</head>
<body>
    <div class="container-fluid mt-4">
        <div class="row justify-content-center">
            <div class="col-5">
                <form class="row g-3 need-validation" id="tovalidate" novalidate>
                    <div class="col-4">
                        <label for="nome" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="nome" aria-describedby="Nome" placeholder="Inserisci Nome" required>                        
                    </div>
                    <div class="col-4">
                        <label for="cognome" class="form-label">Cognome</label>
                        <input type="text" class="form-control" id="cognome" aria-describedby="Cognome" placeholder="Inserisci Cognome" required>                        
                    </div>
                    <div class="col-4">
                        <label for="email" class="form-label">E-mail</label>
                        <input type="text" class="form-control" id="email" aria-describedby="Email" placeholder="Inserisci E-Mail" required>                        
                    </div>
                    <div class="col-6">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" aria-describedby="Username" placeholder="Inserisci Username" required>                        
                    </div>
                    <div class="col-6">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" required>
                    </div>
                    <div class="col">
                        <button class="btn btn-sm btn-outline-light" id="search" type="button">Cerca</button>
                        <button class="btn btn-sm btn-outline-light" id="clear" type="button">Svuota</button>
                        <button class="btn btn-sm btn-outline-light" id="add" type="button">Aggiungi</button>
                        <button class="btn btn-sm btn-outline-light" id="update" type="button">Modifica</button>
                        <button class="btn btn-sm btn-outline-light" id="remove" type="button">Elimina</button>
                        <br>
                        <br>
                        <p id=response></p>
                    </div>
                </form>
            </div>
            <div class="col-5">
                <table class="table table-hover table-striped table-sm" id="tabella" style="visibility: hidden; cursor: pointer;">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">#</th>                            
                            <th scope="col">Nome</th>
                            <th scope="col">Cognome</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">User</th>
                            <th scope="col">Password</th>
                        </tr>
                    </thead>
                    <tbody class="table-secondary table-bordered border-secondary">

                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>    
    <script type="text/javascript" src="script.js"></script>
</body>
</html>