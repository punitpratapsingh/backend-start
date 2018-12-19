import { PersonModel } from '../../schemas';
export default ({
	page = 1,
	limit = 30,
}) => new Promise((resolve, reject) => {
    PersonModel.find({})
        .then((data) => resolve({ code: 104, message: data }))
        .catch(err => reject({ code: 105, message: 'User not found on given details.', error: err }));
});