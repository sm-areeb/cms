module.exports = function(data) {
    return /*html*/`
        <nav>header ${data?.title || ''}</nav>
    `;
};