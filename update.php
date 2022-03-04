<?php
    header('Content-Type: application/json');                                       //informo il browser che il flusso dati sara di tipo JSON
    require 'vendor/autoload.php';                                                  //Installing the PHP Library with Composer
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);                              //composer require vlucas/phpdotenv
    $dotenv->load();                                                                //carico le informazioni dal file .ENV
    
    $data = json_decode(file_get_contents("php://input"), true);                    //raccolgo i dati inviati dal frontend come stringa e li encodo come JSON
    $nome=$data['nomePHP'];                                                         //inserisco i dati in formato JSON dentro delle variabili singole
    $cognome=$data['cognomePHP'];
    $email=$data['emailPHP'];
    $username=$data['usernamePHP'];
    $password=$data['passwordPHP'];
    $json=array();                                                                  //dichiaro un array nel qualle poi inserirò i dati

    $path = $_ENV['DB_CONNECTION'].$_ENV['DB_HOST'].':'.$_ENV['DB_PORT'];           //path per la connessione al link dove è hostato il DB
    $m = new MongoDB\Client($path);                                                 //composer require mongodb/mongodb
    $db=$m->{$_ENV['DB_DATABASE']}->{$_ENV['DB_COLLECTION']};                       //accedo al database e poi alla collection

    if (empty($nome)||empty($cognome)||empty($username)||empty($password)||empty($email)){                        //controllo che i campi sano popolati
        $error = array("Error"=>array("Selezionare un record da modificare"));                                    //in caso uno dei campi sia vuoto
        file_put_contents("dump.json",json_encode($error));                                                       //inserisco un array formattato con il tipo di errore nel file JSON
    } else {
        $results = $GLOBALS['db']->updateOne([                                      //creo la query di UPDATE filtrando per 'email'
            'email'=> $email],['$set' => ['nome' => $nome]],                        //setto la possibilità di modificare tutti i campi del document
            ['$set' => ['cognome' => $cognome]],
            ['$set' => ['email' => $email]],
            ['$set' => ['username' => $username]],
            ['$set' =>['password' => $password]]
        );
        $results = $GLOBALS['db']->find();                                           //leggo tutti i documenti relativi alla collection
        foreach ($results as $result){                                               //scorro i dati e li inserisco in un array
            array_push($json,$result);
        }
        file_put_contents("dump.json",json_encode($json));                           //encodo l'array dentro un JSON
    };    
?>