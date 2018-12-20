
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
		const personObject = new PersonModel({
			name:{type:String,
		          //required:true 	
			},
			mobile: {
				code: phoneCode,
				number: phoneNumber,
				//required:true
			},
			dob:  {
				day, month, year,
				//required:true
			} 
			,

			validate: {
				validator: function (name,mobile,dob) {
					return name&&mobile&&dob===" "
				},
				message: 'You must entered these values to these field.'
			},
			gender,
			nationality,
			about,
			registeredOn: getTime(),
			lastUpdated: Date.now(),
		});
		personObject.save()
			.then((success) => {
				console.log(success);
				resolve({ code: 100, message: 'User saved.' })
			})
			.catch(err => reject({ code: 101, message: 'User not saved.', error: err }));
	} catch (err) {
		return reject({ code: 101, error: err.message })
	}
});
