<?php
    require 'vendor/autoload.php';                                  //Installing the PHP Library with Composer
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);              //composer require vlucas/phpdotenv
    $dotenv->load();

    $path = $_ENV['DB_CONNECTION'].$_ENV['DB_HOST'].':'.$_ENV['DB_PORT'];           //path per la connessione al link dove è hostato il DB
    $m = new MongoDB\Client($path);                                 //composer require mongodb/mongodb
    $db=$m->{$_ENV['DB_DATABASE']}->{$_ENV['DB_COLLECTION']};       //accedo al database e poi alla collection

    $results = $GLOBALS['db']->find();                                       //query relativa alla SELECT*
    $data=array();                                                           //dichiaro un array
    foreach ($results as $result){                                           //scorro i dati e li inserisco in un array
        array_push($data,$result);
    }
    file_put_contents("dump.json",json_encode($data));              //encodo i dati dentro un JSON    
?>