import { NextSeo } from 'next-seo';
import { cmsAssetUrl } from '../utils';

export interface SEO {
  metaTitle: string;
  metaDescription: string;
  metaImage: any; // TODO: Define metaImage interface
  metaSocial: any[]; // TODO: Define metaSocial interface 
  metaRobots: string;
  metaViewport: string;
  canonicalURL: string;
}

const Seo = ({ seo }: { seo: SEO }) => {
  const twitter = seo.metaSocial.find(x => x.socialNetwork == 'Twitter');
  return (
    <NextSeo
      title={seo.metaTitle}
      description={seo.metaDescription}
      canonical={seo.canonicalURL}
      twitter={{
        site: twitter.title,
      }}
      openGraph={{
        url: seo.canonicalURL,
        title: seo.metaTitle,
        description: seo.metaDescription,
        images: [{
          url: cmsAssetUrl(seo.metaImage.data.attributes.url),
          width: seo.metaImage.data.attributes.width,
          height: seo.metaImage.data.attributes.height,
          alt: seo.metaImage.data.attributes.alternativeText,
        }]
      }}
    />
  )
}

export default Seo;