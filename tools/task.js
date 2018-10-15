'use strict'

// https://medium.com/@tarkus/build-automation-with-vanilla-javascript-74639ec98bad
async function run(task, action, ...args) {
  const command = process.argv[2]
  const taskName =
    command && !command.startsWith('-') ? `${task} ${command}` : task
  const start = new Date()
  process.stdout.write(`Starting '${taskName}'...\n`)
  try {
    await action(...args)
    process.stdout.write(
      `Finished '${taskName}' after ${new Date().getTime() -
        start.getTime()}ms\n`
    )
  } catch (error) {
    process.stderr.write(`${error.stack}\n`)
  }
}

process.nextTick(() => require.main.exports())
module.exports = (task, action) => run.bind(undefined, task, action)
