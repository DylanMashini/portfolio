import "../styles/globals.css";
import { useState } from "react";
import { ThemeProvider } from "next-themes";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { Grid, Spacer, Switch, useTheme } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
	const [isDark, setIsDark] = useState(true);
	const lightTheme = createTheme({
		type: "light",
		theme: {},
	});

	const darkTheme = createTheme({
		type: "dark",
		theme: {},
	});

	return (
		<ThemeProvider
			defaultTheme="dark"
			attribute="class"
			value={{
				light: lightTheme.className,
				dark: darkTheme.className,
			}}
		>
			<NextUIProvider>
				<Component {...pageProps} />
			</NextUIProvider>
		</ThemeProvider>
	);
}

export default MyApp;
