const Path = require("path");

const repoPackagesDir = Path.join(__dirname, "../../../../packages");

module.exports = {
  resolve: {
    alias: {
      <% components.forEach(function (componentName) { %>
      "<%= componentName %>": Path.join(repoPackagesDir, "<%= componentName %>/src"),
      <% }); %>
    },
  modules: [
        <% components.forEach(function (componentName) { %>
      Path.join(repoPackagesDir, "<%= componentName %>"),
      Path.join(repoPackagesDir, "<%= componentName %>/node_modules"),
      <% }); %>
    ]
  }
};
