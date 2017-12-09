/* eslint-env node */
// https://medium.com/@tarkus/build-automation-with-vanilla-javascript-74639ec98bad
function run(task, action, ...args) {
  const command = process.argv[2]
  const taskName =
    command && !command.startsWith('-') ? `${task} ${command}` : task
  const start = new Date()
  process.stdout.write(`Starting '${taskName}'...\n`)
  return Promise.resolve()
    .then(() => action(...args))
    .then(
      () => {
        process.stdout.write(
          `Finished '${taskName}' after ${new Date().getTime() -
            start.getTime()}ms\n`
        )
      },
      err => process.stderr.write(`${err.stack}\n`)
    )
}

process.nextTick(() => require.main.exports())
module.exports = (task, action) => run.bind(undefined, task, action)
