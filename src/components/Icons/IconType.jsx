import ArticleIcon from './ArticleIcon';
import BlogIcon from './BlogIcon';
import CalendarIcon from './CalendarIcon';
import LocationIcon from './LocationIcon.jsx';
import NewsIcon from './NewsIcon.jsx';

const getIcon = (type) => {
  switch (type) {
    case 'Blog':
      return <BlogIcon />;
    case 'Webinar':
      return <CalendarIcon />;
    case 'News':
      return <NewsIcon />;
    case 'Events':
      return <CalendarIcon />;
      case 'Location':
        return <LocationIcon />;
    default:
      return <ArticleIcon />;
  }
};

export default getIcon;
