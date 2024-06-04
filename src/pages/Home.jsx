import styled from 'styled-components';

import { HTMBlockWidget } from '@sitecore-search/react';
import { PAGE_EVENTS_HOME } from '../data/constants';
import withPageTracking from '../hocs/withPageTracking.jsx';
import { HighlightedWrapper, PageSection } from '../components/Common';
import HomeFAQ from '../components/HomeFAQ';
import HomeHighlighted from '../widgets/HomeHighlighted/index.jsx';

const HighlightedArticles = styled(PageSection)`
  background: url(https://wwwsitecorecom.azureedge.net/assets/images/Sitecore_3D-Composition_Neutral_Scene04.jpg);
  background-size: cover;
  background-position: left;
  opacity: 0.9;
`;

const Home = () => {
  return (
    <>
      <HTMBlockWidget rfkId="home_hero" />
      <HomeFAQ />
      <HighlightedArticles>
        <HighlightedWrapper>
          {/* <HTMBlockWidget rfkId="rfkid_blogs" /> */}
          {/* <HomeHighlighted rfkId="search_home_highlight_articles" /> */}
          <h1>Latest Blogs</h1>
          <HomeHighlighted rfkId="rfkid_blogs" />
        </HighlightedWrapper>
      </HighlightedArticles>
    </>
  );
};

export default withPageTracking(Home, PAGE_EVENTS_HOME);
