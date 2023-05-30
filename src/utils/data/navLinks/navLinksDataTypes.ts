export interface NavLink {
  type?: 'gatsby' | 'external';
  url: string;
  text: string;
  label?: string;
}

export interface NavLinkData {
  about: NavLink[];
  engage: NavLink[];
  programs: NavLink[];
  forms: NavLink[];
}
