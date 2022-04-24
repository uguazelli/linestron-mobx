import { makeAutoObservable } from "mobx";
import { getSessionToken, storeSessionToken, userLogin } from "../AppClient";

export default class AuthUser {
	token = null;

	constructor() {
		makeAutoObservable(this);
		this.initialize();
	}

	async initialize() {
		let token = await getSessionToken();
		this.setToken(token);
	}

	setToken(token) {
		this.token = token;
	}

	async logout() {
		await storeSessionToken(null);
		this.setToken(null);
	}

	async login(username, password) {
		let result = await userLogin({ username: username, password: password });
		if (result.message.success === true) {
			await storeSessionToken(result.message);
			this.setToken(result.message);
		}
	}
}
