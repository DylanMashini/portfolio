import "../styles/globals.css";
import { useState } from "preact/compat";
import { ThemeProvider } from "next-themes";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
	const lightTheme = createTheme({
		type: "light",
		theme: {},
	});

	const darkTheme = createTheme({
		type: "dark",
		theme: {
			colors: {
				background: "#000000",
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
				<Script src="/modernizr-custom.js" />
				<noscript>
					Please enable javascript for this website to function
					properly
				</noscript>
				<Component {...pageProps} />

				<script
					defer
					src="https://static.cloudflareinsights.com/beacon.min.js"
					data-cf-beacon='{"token": "3ba61def566b4a0189054f98e2c511ec"}'
				></script>
			</NextUIProvider>
		</ThemeProvider>
	);
}

export default MyApp;
