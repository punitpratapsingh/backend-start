import { PersonModel } from '../model';
import { ModelResolver } from './resolvers';

export default {
	update: (req, res) => ModelResolver(req, res, PersonModel.PersonCreateService),
	details: (req, res) => ModelResolver(req, res, PersonModel.PersonDetailsService),
	listAll: (req, res) => ModelResolver(req, res, PersonModel.PersonListAllService),
};