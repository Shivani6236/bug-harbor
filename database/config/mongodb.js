const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://shivani:BRiUiJ4FAdYZloPr@cluster0.5nm8wnz.mongodb.net/?retryWrites=true&w=majority'

async function getEmpData() {
    let client = await MongoClient.connect(url);
    let connection = client.db('bug_harbor'); // Establish connection
    return connection.collection('BugHarbor'); // creating a collection and naming it also
}

module.exports = getEmpData;
