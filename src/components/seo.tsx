import PropTypes from "prop-types"

const SITE_URL = process.env.NEXT_PUBLIC_DEFAULT_SITE_URL || "localhost:3000"

const defaultTitle = "Prettyfolio"
const defaultDescription = "Discover the best portfolios, curated just for you."
const defaultImagePath = "/images/thumbnail.jpg"

const SEO = ({
  title = defaultTitle,
  description = defaultDescription,
  imagePath = defaultImagePath,
}) => {
  const currentImagePath = imagePath.startsWith("http")
    ? imagePath
    : SITE_URL + imagePath

  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      />
      <title>{title}</title>
      <meta name="description" content={description} key="desc" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={currentImagePath} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="theme-color" content="#1a1a1a" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="manifest"
        href="images/site.webmanifest"
        crossOrigin="anonymous"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="images/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="48x48"
        href="images/favicon/favicon-48x48.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="72x72"
        href="images/favicon/favicon-72x72.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="images/favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="144x144"
        href="images/favicon/favicon-144x144.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="images/favicon/favicon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="256x256"
        href="images/favicon/favicon-256x256.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="384x384"
        href="images/favicon/favicon-384x384.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="images/favicon/favicon-512x512.png"
      />
      <link
        rel="mask-icon"
        href="images/favicon/safari-pinned-tab.svg"
        color="#1a1a1a"
      />
    </>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imagePath: PropTypes.string,
}

export default SEO
