import chokidar from 'chokidar'
import { exec } from 'node:child_process'

console.log(`Watching for changes in */**/play.nim files...`)

chokidar.watch('.').on('all', (event, path) => {
	if (/.*\/play\.nim$/.test(path) && (event === 'change' || event === 'add')) {
		console.log('nim file changed, recompiling:', path)

		const command = `nim js -d:danger ${path}`
		exec(command, (error, stdout, stderr) => {
			if (error) {
				console.error(`exec error: ${error}`)
				return
			}
			console.log(`stdout: ${stdout}`)
			console.error(`stderr: ${stderr}`)
		})
	}
})
