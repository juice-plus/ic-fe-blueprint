const path = require('path')
const minimist = require('minimist')
const args = minimist(process.argv)

const definePath = function (directPath, defaultPath, entity) {
  if (directPath) {
    return path.resolve(directPath)
  }
  return path.join(path.resolve(defaultPath), entity)
}

const defineRootPath = function (embedded) {
  if (embedded) {
    if (args.feRootPath) {
      return path.resolve(args.feRootPath)
    }
    return path.resolve('../../')
  }
  return path.resolve(__dirname, '../cms.frontend')
}

const isWinOS = process.platform.startsWith('win')
const mapPathToImportString = function (path) {
  if (isWinOS) return path.replace(/\//g, '\\').replace(/\\/g, '\\\\')
  return path
}

module.exports = {
  definePath,
  defineRootPath,
  mapPathToImportString
}
