const Path = require("path");

const repoPackagesDir = Path.join(__dirname, "../../../../packages");

module.exports = {
  resolve: {
    alias: {
      "<%= componentName %>": Path.join(repoPackagesDir, "<%= componentName %>/src")
    },
    modules: [
      Path.join(repoPackagesDir, "<%= componentName %>"),
      Path.join(repoPackagesDir, "<%= componentName %>/node_modules")
    ]
  }
};
