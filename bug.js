```javascript
// Incorrect usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({"_id": ObjectId("651e7d6a7793f2520e6e9254")}, {"$inc": {"counter": "1"}});
```