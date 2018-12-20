import { PersonModel } from '../model';
import { ModelResolver } from './resolvers';

export default {
	update: (req, res) => ModelResolver(req, res, PersonModel.PersonsCreateService),
	update: (req, res) => ModelResolver(req, res, PersonModel.PersonsUpdateService),
	details: (req, res) => ModelResolver(req, res, PersonModel.PersonsDetailsService),
	listAll: (req, res) => ModelResolver(req, res, PersonModel.PersonsListAllService),
};