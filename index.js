module.exports = {

    /**
     * Escape html
     * @param {string} html
     * @returns {string}
     */
    escape: function (html) {
        return String(html)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    },
    /**
     * Unescape html
     * @param {string} html
     * @returns {string}
     */
    unescape: function(html) {
        return String(html)
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>');
    }
};