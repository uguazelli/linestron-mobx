import { StatusBar } from "expo-status-bar";
import AppRouter from "./AppRouter";
import { observer } from "mobx-react-lite";
import AuthUser from "./stores/Auth";
import { createContext } from "react";

export const AuthContext = createContext(null);

function App() {
	const authUser = new AuthUser();
	return (
		<AuthContext.Provider value={authUser}>
			<AppRouter />
			<StatusBar style="auto" />
		</AuthContext.Provider>
	);
}

export default observer(App);
