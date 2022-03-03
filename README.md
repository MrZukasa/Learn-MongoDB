Learn MongoDB

Comandi Shell mongoDB
- show dbs -> mostra tutti i db ed il peso, mostra solo db con dati all'interno
- use nomedb -> crea un nuovo db
- db.nomecollection -> crea una collezione aka tabella
- db.nomecollection.insertOne({"chiave":"valore","chiave2":"valore2"}) -> inserisce un dato all'interno della collection selezionata
- db.nomecollection.insertMany([{"chiave":"valore","chiave2":"valore2"},{"chiave":"valore","chiave2":"valore2"}]) -> inserisce più dati all'interno della collection selezionata
- db.nomecollection.find() -> lista tutti gli elementi in una collection
- db.nomecollection.find().pretty() -> lista tutti gli elementi in una collection in formato json
- db.nomecollection.findOne({chiave:"valore"}) -> cerca tutti i record con il valore specificato della chiave specificata
- db.nomecollection.find({chiave: {$gt:"valore"}}) -> cerca tutti i record la cui chiave ha un valore maggiore di (greater then) uno specifico valore.
- [Lista](https://docs.mongodb.com/manual/reference/operator/query/) degli operatori utilizzabili.
- db.nomecollection.updateOne({chiave:"valore"},{$set: {chiave: "nuovoValore",{chiave2: "nuovoValore2"}}}) -> aggiorna i dati in una collection ricercando il record data una chiave specifica
- db.nomecollection.updateMany({chiave:"valore"},{$set: {nuovaChiave: "nuovoValore"}}) -> aggiorna i dati ed aggiunge "campi" in una collection ricercando il record data una chiave specifica
- db.nomecollection.updateMany({},{$inc: {chiave: 1}}) -> incrementa il valore di chiave di +1, valido per tutti i record
- db.nomecollection.updateMany({chiave: "valore"}, {$set: {chiave: "valore", chiave2: "valore2"}},{upsert: true}) -> se non esiste questo record, viene creato
- db.nomecollection.deleteOne({chiave: "valore"}) -> cancellare un record
- db.nomecollection.deleteMany({chiave: "valore"}) -> cancellare più record


## Links Utili
- https://docs.mongodb.com/php-library/current/tutorial/crud/
- https://packagist.org/packages/vlucas/phpdotenv

