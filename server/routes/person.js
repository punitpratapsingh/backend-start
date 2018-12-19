
import {
	PersonControllers,
} from '../controllers';


const prefix = '/api/person/';
/**
 * @description
 * This is the route handler for the instructors
 * @author punit
 * @since 12th December 2018
 */
export default (app) => {
	app.post(`${prefix}update`, PersonControllers.update);
	app.post(`${prefix}details`, PersonControllers.details);
	app.post(`${prefix}listAll`,  PersonControllers.listAll);
};


