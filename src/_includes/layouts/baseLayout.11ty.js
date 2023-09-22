const Header = require('../partials/header.11ty.js');
const Footer = require('../partials/footer.11ty.js');
module.exports = function(data) {
    return /*html*/`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="/static/css/bulma.min.css" />
            <title>${data.title}</title>
        </head>
        <body>
            ${Header(data)}
            ${data.content}
            ${Footer(data)}
        </body>
        </html>
    `;
};