import express from "express";
import cors from "cors";
import movies from "./api/movies.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("./api/v1/movies", movies);
app.use("*", (req, res) => {
    res.status(404).json({ error: "not found" }); // wild card route
});

export default app;
// Middleware are functions that Express executes in the middle after the
// incoming request and before the output
