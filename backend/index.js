import app from "./server.js";
import mongodb from "mongodb";
import dontenv from "dotenv";

async function main() {
    dontenv.config();

    const client = new mongodb.MongoClient(process.env.MOVIEREVIEWS_DB_URI);
    const port = process.env.PORT || 8000;

    try {
        // trying connect to the db cluster
        await client.connect();

        app.listen(port, () => {
            console.log("server is running on port:" + port);
        });
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}

main().catch(console.error);
