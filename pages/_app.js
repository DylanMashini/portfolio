import "../styles/globals.css";
import { useState } from "react";
import { ThemeProvider } from "next-themes";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { Grid, Spacer, Switch, useTheme } from "@nextui-org/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	const [isDark, setIsDark] = useState(true);
	const lightTheme = createTheme({
		type: "light",
		theme: {},
	});

	const darkTheme = createTheme({
		type: "dark",
		theme: {
			colors: {
				background: "#081B33",
			},
		},
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
				<Head>
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
				</Head>
				<Component {...pageProps} />
			</NextUIProvider>
		</ThemeProvider>
	);
}

export default MyApp;
