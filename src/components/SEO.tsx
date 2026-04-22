import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

export default function SEO({ 
  title = "Biomed Integra | Práticas Integrativas em São José dos Campos", 
  description = "Recupere sua qualidade de vida com controle da glicemia, combate à inflamação e redução de dores crônicas na Clínica Biomed Integra no Parque Industrial, SJC.",
  canonical = "https://clinicabiomedintegra.com.br"
}: SEOProps) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Biomed Integra",
    "alternateName": "Clínica Biomed Integra",
    "description": description,
    "url": canonical,
    "logo": "https://biomedintegra.com.br/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Palmares, nº 300, Sala 03",
      "addressLocality": "Parque Industrial",
      "addressRegion": "São José dos Campos - SP",
      "postalCode": "12235-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.2384,
      "longitude": -45.8941
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/clinicabiomedintegra/",
      "https://www.facebook.com/clinicabiomedintegra",
      "https://www.youtube.com/@cl%C3%ADnicabiomedintegra",
      "https://www.tiktok.com/@clinicabiomedintegra"
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      
      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
}
