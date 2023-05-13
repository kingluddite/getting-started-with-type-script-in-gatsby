// jsx
import { NavLinkData as NavLinkDataInterface } from '@utils/data/nav-links';

export interface NavLinkData {
  about: string[];
  engage: string[];
  programs: {
    text: string;
    url: string;
  }[];
}

export interface SocialMediaData {
  icon: any;
  url: string;
}

export interface DesktopNavContentProps {
  location: Location;
  navLinkData: NavLinkDataInterface;
  socialMediaData: SocialMediaData[];
}

// styles
export interface AnimationControlProps {
  $animate?: boolean;
}
