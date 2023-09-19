module.exports = function(eleventyConfig) {
    eleventyConfig.addLayoutAlias('post', 'layouts/post.11ty.js');
    eleventyConfig.addPassthroughCopy({
      "./src/admin/*": "./admin/",
      "./node_modules/bulma/css/bulma.min.css":
        "./static/css/bulma.min.css",
    });
    return {
        dir: {
          input: "src"
      }
    }
  };