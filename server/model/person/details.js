import PersonModel from '../../schema/person';

export default ({ userId }) => new Promise((resolve, reject) => {
    PersonModel.findOne({_id: userId})
        .then((data) => resolve({ code: 104, message: data }))
        .catch(err => reject({ code: 105, message: 'User not found on given details.', error: err }));
});
