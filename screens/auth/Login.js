import { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from "react-native-web";
import { AuthContext } from "../../App";

const Login = () => {
	const auth = useContext(AuthContext);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const login = async () => auth.login(username, password);

	return (
		<View style={styles.container}>
			<View style={styles.cardContainer}>
				<View style={{ width: "100%", alignItems: "center" }}>
					<Image style={{ width: 100, height: 100, marginBottom: 10 }} />
					<Text style={{ marginBottom: 10, fontSize: 20 }}>Welcome back</Text>
				</View>

				<View style={{ marginBottom: 10 }}>
					<Text style={{ marginBottom: 10 }}>Email</Text>
					<TextInput style={styles.input} keyboardType="email-address" value={username} onChangeText={setUsername} />
				</View>

				<View style={{ marginBottom: 10 }}>
					<Text style={{ marginBottom: 10 }}>Password</Text>
					<TextInput style={styles.input} secureTextEntry={true} value={password} onChangeText={setPassword} />

					<TouchableOpacity style={{ width: "100%", flexDirection: "row-reverse" }}>
						<Text style={{ marginTop: 10, marginBottom: 10 }}>
							Forgot your password? <Text style={{ color: "blue" }}>Click here to recover it.</Text>
						</Text>
					</TouchableOpacity>
				</View>

				<View style={{ width: "100%" }}>
					<TouchableOpacity style={styles.sendButton} onPress={login}>
						<Text style={{ color: "white" }}>Login</Text>
						{/* <ActivityIndicator size="large" color={"red"} style={{ display: showLoading }} /> */}
					</TouchableOpacity>
					<TouchableOpacity style={{ width: "100%", flexDirection: "row", justifyContent: "center" }}>
						<Text style={{ marginTop: 10, marginBottom: 10 }}>
							Don't have an account? <Text style={{ color: "blue" }}>Sign up.</Text>
						</Text>
					</TouchableOpacity>
				</View>
			</View>
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
	cardContainer: {
		width: "95%",
		maxWidth: 480,
		backgroundColor: "white",
		padding: 30,
		margin: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
		elevation: 10,
		borderRadius: 10,
	},
	input: {
		width: "100%",
		height: 40,
		borderWidth: 1,
		borderRadius: 5,
		borderColor: "#CCCCCC",
		paddingLeft: 10,
	},
	sendButton: {
		backgroundColor: "#41BAEE",
		borderRadius: 5,
		height: 40,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default Login;
