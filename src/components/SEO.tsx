import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';

interface SeoProps {
  title: string;
  description: string;
  keywords: string;
}

const SEO = ({ title, description, keywords }: SeoProps) => {
  const location = useLocation();

  const baseUrl =
    import.meta.env.VITE_REACT_APP_SITE_URL || 'http://localhost:5173';
  const thumbnail =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO2Xhoh9sOhshlLO3VV9BslfwQ0CwqRZx7uQ&s';
  const url = `${baseUrl}${location.pathname}`;

  return (
    <Helmet>
      {/* 기본 메타 태그 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph 메타 태그 */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnail} />
      <meta property="og:url" content={url} />

      {/* Twitter Card 메타 태그 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={thumbnail} />
    </Helmet>
  );
};

export default SEO;
