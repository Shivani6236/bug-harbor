const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/issue_tracker'

async function getEmpData() {
    let client = await MongoClient.connect(url);
    let connection = client.db('issue_tracker'); // Establish connection
    return connection.collection('IssueTracker'); // creating a collection and naming it also
}

module.exports = getEmpData;
