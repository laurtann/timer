let cmdLineArgs = process.argv.slice(2);

for (let arg of cmdLineArgs) {
  if (!isNaN(arg) && arg >= 0) {
    setTimeout(() => process.stdout.write('\x07'), arg * 1000);
  }
}