/**
* This is the {{app_name}} constant file
* @author {{app_author}}
* @since {{app_date}}
*/

export const {
	NODE_ENV = 'development',
	S3_BUCKET = '',
	// atlas configurations
	ATLAS_USER,
	ATLAS_PASSWORD,
	CLUSTER1,
	CLUSTER2,
	CLUSTER3,
	SHARD,
	SECRET_STRING,
	PAGINATION_LIMIT = 30,
	// faraya coordinates
	FARAYA_LAT,
	FARAYA_LONG,
} = process.env;

const db = process.env.MONGO_DB || 'faraya-app';

// export const mongoConnectionString = `mongodb://${host}:${port}/${db}`;
export const mongoConnectionString = `mongodb://${ATLAS_USER}:${ATLAS_PASSWORD}@${CLUSTER1},${CLUSTER2},${CLUSTER3}/${db}?ssl=true&replicaSet=${SHARD}-shard-0&authSource=admin&retryWrites=true`;

// this string is unique for each project construction
export const secretString = SECRET_STRING;

export const SUCCESS_CODE = 100;

export const MB = 1024 * 1024;
