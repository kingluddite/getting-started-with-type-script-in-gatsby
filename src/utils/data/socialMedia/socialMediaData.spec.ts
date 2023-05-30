import { describe, it, expect } from 'vitest';
import socialMediaData from './socialMediaData';
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

describe(`socialMediaData`, () => {
  it(`should contain the correct social media data`, () => {
    const expectedData = [
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
    ];

    expect(socialMediaData).toEqual(expectedData);
  });
});
