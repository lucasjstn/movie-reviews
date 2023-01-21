let movies;

export default class MoviesDAO {
    static async injectDB(conn) {
        if (movies) {
            return;
        }

        try {
            movies = await conn
                .db(process.env.MOVIESREVIEWS_NS)
                .collection("movies");
        } catch (e) {
            console.error(`unable to connect in MoviesDAO: ${e}`);
        }
    }
}
