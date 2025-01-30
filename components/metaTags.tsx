"use client";

import Head from "next/head";

interface PropType {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  username: string;
}

const MetaTags = ({
  title,
  description,
  imageUrl,
  url,
  username,
}: PropType) => {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="profile" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />
      <meta property="profile:username" content={username} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: username,
          description: description,
          image: imageUrl,
          url: url,
        })}
      </script>
    </Head>
  );
};

export default MetaTags;
