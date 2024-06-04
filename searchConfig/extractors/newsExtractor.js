// Sample extractor function. Change the function to suit your individual needs
function extract(request, response) {
    $ = response.body;

    let contentTitle = $('meta[name="searchtitle"]').attr('content') || $('title').text();
    contentTitle = (contentTitle.indexOf('|') > 0) ? contentTitle.substring(0, contentTitle.indexOf('|')).trim() : contentTitle;

    let description = $('meta[name="description"]').attr('content') || $('meta[property="og:description"]').attr('content') || $('p').text();
    let contentType = $('meta[property="og:type"]').attr('content') || 'News';
    let url = $('meta[property="og:url"]').attr('content');
    let body = $('main[class="site-main_content"]').text();

    return [{
        'name': contentTitle,
        'description': description,
        'type': contentType,
        'url': url,
        'body_content': body
    }];
}