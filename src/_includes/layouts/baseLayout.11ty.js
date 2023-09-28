const Header = require('../partials/header.11ty.js');
const Footer = require('../partials/footer.11ty.js');
const Hero = require('../components/hero/centered');
module.exports = function(data) {
    return /*html*/`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/static/css/site.css" />
            <title>${data.title}</title>
        </head>
        <body>
            ${Header(data)}
            ${Hero()}
            ${data.content}
            ${Footer(data)}
            <script src="/static/js/bootstrap.bundle.min.js"></script>
        </body>
        </html>
    `;
};