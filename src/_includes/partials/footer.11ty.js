module.exports = function(data) {
    return /*html*/`
        <footer>footer ${data?.title || ''}</footer>
    `;
};