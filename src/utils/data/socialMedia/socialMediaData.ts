import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

interface SocialMediaDataItem {
  url: string;
  icon: any; // IconDefinition didn't work
}

const socialMediaData: SocialMediaDataItem[] = [
  {
    url: `https://www.facebook.com/Animation-Educators-Forum-205710355776/`,
    icon: faFacebook,
  },
  {
    url: `https://twitter.com/aeforum`,
    icon: faTwitter,
  },
  {
    url: `https://www.youtube.com/channel/UCfXREW1PdflKAjup9hXKiNw`,
    icon: faYoutube,
  },
  {
    url: `https://www.instagram.com/animationeducatorsforum/`,
    icon: faInstagram,
  },
  // Additional social media data...
];

export default socialMediaData;
