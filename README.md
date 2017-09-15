# mongo1808

Show all db ~ show dbs ~ db
<br>
Switch db ~ use dbname
<br>
When will mongo create new db
<br>
Create collections ~ db.words.insert({ en: ‘hello' });
<br>
Get number of docs in a collection. ~ db.words.count();
<br>
Query and explain ~ db.numbers.find({ “number”: 1 }).explain(“executionStats”) => find docsExamined, executionTimeMillis
<br>
Create text indexed: db.tours.createIndex({ tourName: "text"  })
<br>
Search text: db.tours.find({ $text: { $search: "wine" } }
<br>
Search with regex: t.find({ tourName: /the/i })
<br>
Remove a doc ~ 
<br>
Search text with score: t.find({ $text: { $search: "enjoy" } }, { score: {$meta: 'textScore'}, tourName: 1 })
<br>
Show all collections show collections
<br>
Create index in a field ~ db.numbers.createIndex({ number: 1 })db.numbers.createIndex({ number: 1 })
<br>
Import a son file ~ mongoimport --db learning_mongo --collection tours --jsonArray --file tours.json
<br>
Update set tours.update({ "tourName" : "aaa" }, { $set: { tourRegion: "aaa" }})
<br>
Update addToSet: tours.find({ tourTags: "wine" }, { tourName: 1, _id: 0, tourTags: 1 })
<br>
Drop a collection db.tours.drop()
