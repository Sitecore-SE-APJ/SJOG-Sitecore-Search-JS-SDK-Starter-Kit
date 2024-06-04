// Sample extractor function. Change the function to suit your individual needs
function extract(request, response) {
    $ = response.body;

    let contentTitle = $('meta[name="searchtitle"]').attr('content') || $('title').text();
    contentTitle = (contentTitle.indexOf('|') > 0) ? contentTitle.substring(0, contentTitle.indexOf('|')).trim() : contentTitle;

    let description = $('meta[name="description"]').attr('content') || $('meta[property="og:description"]').attr('content') || $('p').text();
    let url = $('meta[property="og:url"]').attr('content');
    let body = $('main').text();

    let contentDateElement = $('.blog-info span:first');

    let contentDate = Date.now();

    if(contentDateElement && contentDateElement.next()) {
        contentDate = Date.parse(contentDateElement.next().text().trim());
    }

    let type = $('.blog-info span:last').text() || 'Blog';
    let author = $('.c-blog-author-name a').text() || '';
    let imageUrl = $('.blog-featured-image img').attr('src') || ''

    let tagAry = [];
    let blogTagElement = $('.blog-tag span');

    if(blogTagElement && blogTagElement.length > 0) {
        blogTagElement.each(function(){
            tagAry.push($(this).text());
        });
    }

    return [{
        'name': contentTitle,
        'description': description,
        'type': type,
        'url': url,
        'body_content': body,
        'content_date': contentDate,
        'content_author': author,
        'image_url': imageUrl,
        'tags': tagAry
    }];
}