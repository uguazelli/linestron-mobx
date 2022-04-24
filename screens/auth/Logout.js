import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native-web";
import { AuthContext } from "../../App";

const Logout = () => {
	const auth = useContext(AuthContext);
	const logout = () => auth.logout();

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={logout}>
				<Text style={{ color: "#fff" }}>Logout</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},

	button: {
		backgroundColor: "#41BAEE",
		borderRadius: 5,
		height: 40,
		width: 120,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default observer(Logout);
