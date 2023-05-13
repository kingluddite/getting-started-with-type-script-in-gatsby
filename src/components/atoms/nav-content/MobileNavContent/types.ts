export interface NavLinkItem {
  type: 'gatsby' | 'external';
  text: string;
  url: string;
}

export interface NavLinkData {
  about: NavLinkItem[];
  engage: NavLinkItem[];
  programs: NavLinkItem[];
  forms: NavLinkItem[];
}

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
