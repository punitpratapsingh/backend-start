
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
	phoneCode,
	phoneNumber,
	day,
	month,
	year,
	gender,
	nationality,
	about,
	picture,
}) => new Promise((resolve, reject) => {
	const personObject = new PersonModel({
		name,
		phoneCode,
		phoneNumber,
		day,
		month,
		year,
		gender,
		nationality,
		about,
	});

	personObject.save()
		.then(() => resolve({ code: 100, message: 'User saved.' }))
		.catch(err => reject({ code: 101, message: 'User not saved.', error: err }));
});
