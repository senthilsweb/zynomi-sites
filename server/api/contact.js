export default async (req, res) => {


    const body = await useBody(req)
    console.log(body)
    const contact = await $fetch(`${process.env.MONGODB_ATLAS_REST_URL}/insertOne`, {
        method: 'post', headers: {
            "api-key": `${process.env.MONGODB_ATLAS_REST_TOKEN}`
        }, body: {
            "collection": "contacts",
            "database": "webapp-db",
            "dataSource": "zynomi-web-db",
            "document": body
        }
    })
    return contact
}