import { FilterEqual, WidgetDataType, useSearchResults, widget } from '@sitecore-search/react';

import { Row } from '../../components/Common';
import { getContentIcon } from '../../components/Icons';
import { ArticleCard, ArticleCardContent, ArticleCardImage } from './styled';
import { DEFAULT_IMAGE } from '../../data/constants';
function formatDate(timestamp) {
  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
function addDomainToRelativeUrl(relativeUrl) {
  const baseUrl = 'https://www.sjog.org.au';
  const absoluteUrl = new URL(relativeUrl, baseUrl).href;
  return absoluteUrl;
}

function getImage(article) {
  if(article?.image_url?.length > 0) {
    return addDomainToRelativeUrl(article.image_url).toString();
  }

  if(article?.image?.length > 0) {
    return article.image;
  }

  return DEFAULT_IMAGE;
}

export const HomeHighlightedComponent = () => {
  const {
    widgetRef,
    queryResult: { data: { content: articles = [] } = {} },
  } = useSearchResults({
    query: (query) => {
      query.getRequest().setSearchFilter(new FilterEqual('type', 'Blog'));
    },
  });
  const articlesToShow = articles.slice(0, 3);
  return (
    <Row ref={widgetRef}>
      {articlesToShow.map((a, index) => (
        <ArticleCard key={`${a.id}-${index}`}>
          <ArticleCardContent>
            <ArticleCardImage>{getContentIcon(a.type)}</ArticleCardImage>
            <a href={a.url}><h3>{a.name}</h3></a>
            <span>{a.subtitle}</span>
            <span>{(a.content_date) ? formatDate(a.content_date) : ''}</span>
            <span>{(a.content_author) ?? a.content_author}</span>
            <span>{a.type}</span>
          </ArticleCardContent>
        </ArticleCard>
      ))}
    </Row>
  );
};

export default widget(HomeHighlightedComponent, WidgetDataType.SEARCH_RESULTS, 'content');
