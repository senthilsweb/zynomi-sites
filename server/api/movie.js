
export default async (req, res) => {
    const movies = await $fetch("https://data.mongodb-api.com/app/data-ysrjz/endpoint/data/v1/action/findOne", {
        method: 'post', headers: {
            "api-key": `${process.env.MONGODB_ATLAS_REST_TOKEN}`
        }, body: {
            "collection": "movies",
            "database": "sample_mflix",
            "dataSource": "zynomi-web-db"
        }
    })
    return movies
}