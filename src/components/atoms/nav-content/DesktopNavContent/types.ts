import { NavLinkData } from '@utils/data/navLinks/navLinksDataTypes';

export interface CustomDOMStringList extends DOMStringList {
  [index: number]: string;
  length: number;
  contains(value: string): boolean;
  item(index: number): string | null;
}

export interface SocialMediaData {
  icon: any;
  url: string;
}

export interface DesktopNavContentProps {
  location: Location;
  navLinkData: NavLinkData;
  socialMediaData: SocialMediaData[];
}

// styles
export interface AnimationControlProps {
  $animate?: boolean;
}
