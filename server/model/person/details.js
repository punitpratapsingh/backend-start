import PersonModel from '../../schemas/person';

export default ({ userId }) => new Promise((resolve, reject) => {
    try {
        PersonModel.findOne({_id: userId})
            .then((data) => resolve({ code: 104, message: data }))
            .catch(err => reject({ code: 105, message: 'User not found on given details.', error: err }));
    } catch (err) {
        return reject({ code: 101, message: 'Some error', error: JSON.stringify(err)});
    }
});
