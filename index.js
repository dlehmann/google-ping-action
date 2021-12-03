const core = require('@actions/core');
const got = require('got');
const validUrl = require('valid-url');
const sitemapUrl = core.getInput('sitemap-url');

if (!validUrl.isUri(sitemapUrl)) {
    core.setFailed('invalid sitemap-url');
}

got.get(`https://www.google.com/ping?sitemap=${sitemapUrl}`).then(response => {
    if (response.statusCode === 200) {
        console.log(
            response.body
                .match(/<body>.*/is)[0]
                .replace(/<[^>]+>/g, '')
        );
    } else {
        console.log(response);
        core.setFailed('something went wrong');
    }
});
