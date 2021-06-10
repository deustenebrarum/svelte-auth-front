//Placeholder
import * as api from '$lib/api.js';
import { respond } from './_respond';

export async function post(request) {
	const user = request.body;
    
	const body = await api.get('users', { user });
    if (body.user)
    //Send Email
    ;


	return respond(body);
}