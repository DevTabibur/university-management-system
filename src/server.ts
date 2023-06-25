import mongoose from "mongoose";
import app from "./app";
import config from "./config";
async function boostrap() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log('db connection is successful');

        app.listen(config.port, () => {
            console.log(`Applications is listening on PORT ${config.port}`)
        })

    } catch (error) {
        console.log('mongodb is not connected', error);

    }

}

boostrap();