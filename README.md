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
