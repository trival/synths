/* eslint-disable no-undef */
import chokidar from 'chokidar'
import { exec } from 'child_process'

const watcher = chokidar.watch('**/play.nim', {
	cwd: process.cwd(),
	ignoreInitial: true,
})

function compile(filePath) {
	const command = `nim js -d:danger ${filePath}`
	exec(command, (error, stdout, stderr) => {
		if (error) {
			console.error(`exec error: ${error}`)
			return
		}
		console.log(`stdout: ${stdout}`)
		console.error(`stderr: ${stderr}`)
	})
}

watcher.on('add', compile)
watcher.on('change', compile)

console.log(`Watching for changes in */**/play.nim files...`)
