//Examples
var mongodb = require("mongodb");

var database;
// The products collection
var TERAPEUTAS_COLLECTION = "terapeuta";

const LOCAL_DATABASE = "mongodb://localhost:27017/admin";
// Local port.
const LOCAL_PORT = 8080;

// Init the server
mongodb.MongoClient.connect(process.env.MONGODB_URI || LOCAL_DATABASE,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }, function (error, client) {

        // Check if there are any problems with the connection to MongoDB database.
        if (error) {
            console.log(error);
            process.exit(1);
        }

        // Save database object from the callback for reuse.
        database = client.db();
        console.log("Database connection done.");
    }
)
function manageError(res, reason, message, code) {
    console.log("Error: " + reason);
    res.status(code || 500).json({ "error": message });
}
exports.post = (req, res, next) => {
    // let nome= req.body.nome;
    var terapeuta = req.body;
    console.log(req.body)
    console.log(terapeuta[0])

    if (!terapeuta[0].nome) {
        console.log("sem nome")

        manageError(res, "Invalid product input", "Name is mandatory.", 400);
    } else if (!terapeuta[0].senha) {
        manageError(res, "Invalid product input", "Brand is mandatory.", 400);
    } else {
        database.collection(TERAPEUTAS_COLLECTION).insertOne(terapeuta[0], function (err, doc) {
            if (err) {
                manageError(res, err.message, "Failed to create new product.");
            } else {
                res.status(201).json(doc.ops[0]);
            }
        });
    }
    // res.status(201).send('Requisição recebida com sucesso no post!');
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    if (req.body.id.length > 24 || req.body.id.length < 24) {
        manageError(res, "Invalid product id", "ID must be a single String of 12 bytes or a string of 24 hex characters.", 400);
    } else {
        database.collection(TERAPEUTAS_COLLECTION).deleteOne({ _id: new ObjectID(req.params.id) }, function (err, result) {
            if (err) {
                manageError(res, err.message, "Failed to delete product.");
            } else {
                res.status(200).json(req.params.id);
            }
        });
    }
    // let ;id = req.params.id;
    // res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};
exports.get = (req,res,next)=>{
    database.collection(TERAPEUTAS_COLLECTION).find({}).toArray(function (error, data) {
        if (error) {
            manageError(res, err.message, "Failed to get terapeutas.");
        } else {
            res.status(200).json(data);
        }
    });
    // res.status(200).send(`Requisição recebida com sucesso!`);

}
//Usar body e raw e selecionar json :
//[
    // {"nome":"Hellem",
    // "senha":"2525"}
// ]