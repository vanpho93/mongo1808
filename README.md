# mongo1808

Show all db ~ show dbs ~ db
Switch db ~ use dbname
When will mongo create new db
Create collections ~ db.words.insert({ en: ‘hello' });
Get number of docs in a collection. ~ db.words.count();
Query and explain ~ db.numbers.find({ “number”: 1 }).explain(“executionStats”) => find docsExamined, executionTimeMillis
Create text indexed: db.tours.createIndex({ tourName: "text"  })
Search text: db.tours.find({ $text: { $search: "wine" } }
Search with regex: t.find({ tourName: /the/i })
Remove a doc ~ 
Search text with score: t.find({ $text: { $search: "enjoy" } }, { score: {$meta: 'textScore'}, tourName: 1 })
Show all collections show collections
Create index in a field ~ db.numbers.createIndex({ number: 1 })db.numbers.createIndex({ number: 1 })
Import a son file ~ mongoimport --db learning_mongo --collection tours --jsonArray --file tours.json
Update set tours.update({ "tourName" : "aaa" }, { $set: { tourRegion: "aaa" }})
Update addToSet: tours.find({ tourTags: "wine" }, { tourName: 1, _id: 0, tourTags: 1 })
Drop a collection db.tours.drop()
