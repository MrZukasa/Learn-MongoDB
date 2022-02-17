<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

</head>
<body>
    
    <div id="nav-here"></div>

    <script>
        $(function() {
            $('#nav-here').load("navbar.html");
        });
    </script>


    <div class="container">
        <div class="row">
            <div class="col-6 offset-3">
                <form class="row g-3 needs-validation" novalidate>             
                    <div class="col-md-4">
                        <label for="nome" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="nome" aria-describedby="Nome" required>
                        <!-- <div id="nometip" class="form-text">Inserisci Nome</div> -->
                    </div>
                    <div class="col-md-4">
                        <label for="cognome" class="form-label">Cognome</label>
                        <input type="text" class="form-control" id="cognome" aria-describedby="Cognome" required>
                        <!-- <div id="cognometip" class="form-text">Inserisci Cognome</div> -->
                    </div>
                    <div class="col-md-4">
                        <label for="email" class="form-label">E-mail</label>
                        <input type="text" class="form-control" id="email" aria-describedby="Email" required>
                        <!-- <div id="emailtip" class="form-text">Inserisci Email</div> -->
                    </div>
                    <div class="col-md-6">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="nome" aria-describedby="Username" required>
                        <!-- <div id="usernametip" class="form-text">Inserisci Username</div> -->
                    </div>
                    <div class="col-md-6">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</body>
</html>