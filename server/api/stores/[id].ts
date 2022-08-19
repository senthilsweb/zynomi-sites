export default eventHandler(async (event) => {
	const {id} = event.context.params;
	console.log("ID = ", id);
	const record = await $fetch(`${process.env.MONGODB_ATLAS_REST_URL}/findOne`, {
		method: "post",
		headers: {
			"api-key": `${process.env.MONGODB_ATLAS_REST_TOKEN}`,
		},
		body: {
			collection: "stores",
			database: `${process.env.MONGODB_ATLAS_DATABASE}`,
			dataSource: `${process.env.MONGODB_ATLAS_DATASOURCE}`,
			filter: {
				_id: {
					$oid: id,
				},
			},
		},
	});
	return record;
});
