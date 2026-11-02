import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: "./.env"
});

const startServer = async () => {
    try {
        await connectDB();

        const PORT = process.env.PORT || 8000;

        const server = app.listen(PORT, () => {
            console.log(`Server is running at port: ${PORT}`);
        });

        server.on("error", (error) => {
            console.error("SERVER ERROR:", error);
        });

    } catch (err) {
        console.error("MongoDB connection failed:", err.message);
        process.exit(1);
    }
};

startServer();
