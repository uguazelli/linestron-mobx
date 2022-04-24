import Login from "./screens/auth/login";
import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Logout from "./screens/auth/Logout";
import { observer } from "mobx-react-lite";
import { AuthContext } from "./App";

const Stack = createNativeStackNavigator();

const AppRouter = () => {
	const sessionToken = useContext(AuthContext);
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{sessionToken.token ? (
					<>
						<Stack.Screen name="Logout" component={Logout} />
					</>
				) : (
					<>
						<Stack.Screen name="Login" component={Login} />
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default observer(AppRouter);
