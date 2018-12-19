/**
* This is the indexer for model
* @author punit
* @since 12th December 2018
*/
import fs from 'fs';

const skip = ['index.js', ];
const files = fs.readdirSync(__dirname);

files.map((file) => {
	const found = skip.find(skipThisFile => skipThisFile === file);
	if (!found) {
		const fileName = `${file.charAt(0).toUpperCase()}${file.split('.')[0].substring(1, file.length)}`;
		if (!fileName.startsWith('.')) {
			module.exports[`${fileName}Model`] = require(`./${file}`);
		}
	}
});
