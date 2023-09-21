import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
// import devtools from 'solid-devtools/vite';

export default defineConfig({
	clearScreen: false,
	plugins: [
		/* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
		// devtools(),
		solidPlugin(),
	],
	server: {
		port: 3000,
		watch: {
			ignored: [
				"**/*.fs", // Don't watch F# files
			],
		},
	},
	build: {
		target: "esnext",
	},
	esbuild: {
		loader: "jsx",
		include: ["src/**/*.js"],
		exclude: [],
	},
});
