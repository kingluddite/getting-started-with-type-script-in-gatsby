import { NavLinkData } from '@utils/data/navLinks/navLinksDataTypes';

export interface SocialMediaData {
  url: string;
  icon: any; // You can replace 'any' with the specific type of FontAwesomeIcon
}

export interface MobileNavContentProps {
  navLinkData: NavLinkData;
  socialMediaData: SocialMediaData[];
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}
