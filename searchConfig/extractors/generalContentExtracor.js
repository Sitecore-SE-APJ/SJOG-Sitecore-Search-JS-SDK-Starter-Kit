// Sample extractor function. Change the function to suit your individual needs
function extract(request, response) {
    $ = response.body;

    let contentTitle = $('meta[name="searchtitle"]').attr('content') || $('title').text();
    contentTitle = (contentTitle.indexOf('|') > 0) ? contentTitle.substring(0, contentTitle.indexOf('|')).trim() : contentTitle;

    let description = $('meta[name="description"]').attr('content') || $('meta[property="og:description"]').attr('content') || $('p').text();
    let contentType = $('meta[property="og:type"]').attr('content') || 'General';
    let url = $('meta[property="og:url"]').attr('content');
    let body = $('main[class="site-main_content"]').text();

    let currentPageUrl = request.url;
    let hospitalLocation = "";
    const pattern = /\/our-locations\/([^/]+)/;
    const match = pattern.exec(currentPageUrl);

    if (match) {
        hospitalLocation = match[1];
        hospitalLocation = capitalizeWords(hospitalLocation);
    }

    return [{
        'name': contentTitle,
        'description': description,
        'type': contentType,
        'url': url,
        'body_content': body,
        'hospital_reference': hospitalLocation
    }];
}

function capitalizeWords(str) {
    return str
        .toLowerCase()
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}