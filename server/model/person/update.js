
import PersonModel from '../../schemas/person';

/**
 * @description service model function to handle the creation
 * This is a common function that could be used to create as
 * well as update the existing person.
 * @author punit
 * @since 19th December 2018
 *
 */
export default ({
	userId 
	
}) => new Promise((resolve, reject) => {
	try {
		PersonModel.findByIdAndUpdate({_id:userId},{ $set: { name: 'qwerty' }})
			.then((success) => {
				console.log(success);
				resolve({ code: 100, message: 'person updated.' })
			})
			.catch(err => reject({ code: 101, message: 'User not updated.', error: err }));
	} catch (err) {
		return reject({ code: 101, error: err.message })
	}
});
