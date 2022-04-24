import AsyncStorage from "@react-native-async-storage/async-storage";

// CONSTANTS
const BASEURL = "http://127.0.0.1:8000/";

// HTTP CLIENT
class HttpClient {
	get(url) {}
	async post(url, data) {
		const response = await fetch(BASEURL + url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
		return response.json();
	}
}

const http = new HttpClient();

// ROUTES
export const userLogin = async (data) => await http.post("api/login", data);

// OTHER FUNCTIONS
export const storeSessionToken = async (value) => {
	try {
		const jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem("@sessionToken", jsonValue);
	} catch (e) {
		// saving error
	}
};

export const getSessionToken = async () => {
	try {
		const jsonValue = await AsyncStorage.getItem("@sessionToken");
		return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch (e) {
		// error reading value
	}
};
