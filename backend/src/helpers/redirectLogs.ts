export const redirectLogs = () => {
  const fs = require('fs')
  const util = require('util')
  const todaysDate = new Date().toISOString().substr(0, 10)
  const logFile = fs.createWriteStream(`logs-${todaysDate}.txt`, { flags: 'a' })
  // Or 'w' to truncate the file every time the process starts.
  const logStdout = process.stdout

  console.log = function () {
    logFile.write(`${new Date().toString()}\n${util.format.apply(null, arguments)}\n======================================================\n\n`)
    logStdout.write(util.format.apply(null, arguments) + '\n')
  }
}
