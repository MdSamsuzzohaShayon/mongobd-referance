# MongoDB Atlas

Cluster0

we can connect to database vai mongo shell

### Windows installation

[Official docs](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
after downloading mongo shell extract it and go to bin folder enter the command below or latest cmd

`./mongo "mongodb+srv://cluster0-l3y9w.mongodb.net/test" --username my_shayon`

### Mongo Shell

[Official docs](https://docs.mongodb.com/manual/mongo/)

 - `$ show dbs` SHOW THE STORAAGE
 - `$ use first-state` CREATE COLLECTIONS
 - `$ db.users.insertOne({name:'Shayon',age:29})`  INSERT ONE OBJECT 
 - `$ show collections`
 - `$ db.users.find()` FIND ALL COLLECTION
 - `$ cls`
 - `$ db.users.insertMany([{name: 'Raju'},{name:'Arafat', age: 25}])` INSERT MANY BY USING USERS.INSERTMANY METHOD
 - `$ db.users.find({age:25})` FINDING WITH FILTER (USER THAT AGE WITH 20)
 - `$ db.users.find({age:{$gt:20}})` FINDING USER THAT HAS MORE THAN 20 AGE
 - `$ db.users.insertDelete({name:'Raju'})`  DELETE USERS




### MongoDB Community

 - `$ mongod -directoryperdb --dbpath C:\Program Files\MongoDB\log\mongo.log --logappend --install`  #EACH DB STORE IN SEPARATE DIRECTORY
				

 - `$ use customers` #CREATE DATABASE
 - `$ net start mongodb` #STARTING MONGODB
 - `$ mongo` #STARTING MONGO SHELL
 - `$ use customers`		#CREATE DATABASE
 - `$ db` 			#CURRENT DB


#### CREATE USERS

```
$ db.createUser({
$     user: "Shayon",
$     pwd : "1234",
$     roles : ["readWrite","dbAdmin"]
$ 
$     customData : {employeeID : 123}
$ 
$     authenticationRestrictions : [{
$         clientSource : ["192.0.2.0"],
$         serverAddress : ["192.51.100.0"]
$     }]
$ });
```

#### CREATE COLLECTIONS

`$ db.createCollection("customer");`
`$ show collections`


#### INSERT DATA
`$ db.customer.insert({firstname : "Bruce",lastname  : "Wayne",gender: "male"});`

#### INSERT MULTIPLE DATA

```
$ db.customer.insert([
$ {
$ 	firstname : "Oliver",
$ 	lastname  : "Queen"
$ },
$ {
$ 	firstname : "Clark",
$ 	lastname  : "Kent"
$ }
$ ])
```

#### CHECK THE CONTENT

 - `$ db.customer.find()`
 - `$ db.customer.find().pretty();`
 - `$ db.superheros.find().sort({firstname: 1}) #SORT THEM IN ASSENDING ORDER`
 - `$ db.superheros.find().sort({firstname: -1}) #SORT THEM IN DSSENDING ORDER`
 - `$ db.superheros.find({gender:"male"}).count()`
 - `$ db.superheros.find().count()`
 - `$ db.superheros.find().limit(3) #ONLY 3 ENTRY I WANT TO SEE`
 - `$ db.superheros.find().limit(3).sort({firstname: 1})`
 - `$ db.superheros.find().forEach(function(param){print("Superheros Name: "+param.firstname)});`



#### UPDATING DATA

 - `$ db.customer.update({firstname:"Clark"}, {firstname: "Kal",lastname: "El", gender: "Male"});`
 - `$ db.customer.update({firstname:"Doctor"}, $set: {gender: "Male"}});`
 - `$ db.customer.update({firstname:"Doctor"}, {$unset: {"gender"});` 
 
#### REMOVIE SPECIFIC FIELD

 - `$ db.customer.update({firstname:"Daina"}, {firstname: "Daina",lastname: "Prince"}, {upsert:true});` #IT WILL CHECK IS THERE ANY DATA NAME DAINA IF NOT IT WILL INSERT
 - `$ db.customer.update({firstname:"kal"}, {$rename : "gender":"sex");` #RENAME

#### REMOVE DATA, COLLECTION DATABASE
 - `$ db.customer.remove({firstname:"Aquaman"})`
 - `$ db.customer.remove({gender:"male"},{justOne: true})`
 - `$ Use customer`
 - `$ db.customer.drop()  #DELETE COLLECTION`
 - `$ db.dropDatabase();`

