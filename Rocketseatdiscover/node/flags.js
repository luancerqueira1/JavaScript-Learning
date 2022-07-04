
function getFlagValue(flag) {
   const index = process.argv.indexof(flag) + 1
   return process.argv[index]
}
module.experts = getFlagValue;