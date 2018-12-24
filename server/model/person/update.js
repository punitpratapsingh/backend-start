
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
	userId,
	name,
	phoneCode,
	phoneNumber,
	day,
	month,
	year,
	gender,
	nationality,
	about,

}) => new Promise((resolve, reject) => {
	try {
		/*const updateObject = {};
		if (name) { updateObject.name = name; }
		if (phoneCode && phoneNumber) {
			updateObject.mobile = {
				code: phoneCode,
				number: phoneNumber,
			};
		}
		if (day && month && year) {
			updateObject.dob = {
				day: day,
				month: month,
				year: year
			};
		}

		if (gender) { updateObject.gender = gender; }

		if (nationality) { updateObject.nationality = nationality; }

		if (about) { updateObject.about = about; }*/
		const serializeObject = SchemaMapperUtility({
		  name,
		  mobile:(phoneCode&&phoneNumber)?{phoneCode,phoneNumber}:undefined,
		  dob:(day&&month&&year)?{day ,month , year}:undefined,
		  gender,
		  nationality,
		  about
		  
		});
		PersonModel.findByIdAndUpdate({ _id: userId }, { $set: /*updateObject*/serializeObject })
			.then((success) => {
				console.log(success);
				resolve({ code: 100, message: 'person updated.' })
			})
			.catch(err => reject({ code: 101, message: 'User not updated.', error: err }));
	} catch (err) {
		return reject({ code: 101, error: err.message })
	}
});
