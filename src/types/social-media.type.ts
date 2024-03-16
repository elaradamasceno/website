import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';

export const SocialMediaType = {
  linkedin: { 
    title: 'Linkedin', 
    link: 'https://www.linkedin.com/in/elara-damasceno-leme-1a726885/',
    icon: Linkedin 
  },
  gitHub: {
    title: 'GitHub',
    link: 'https://github.com/elaradamasceno',
    icon: Github
  },
  instagram: {
    title: 'Instagram',
    link: 'https://www.instagram.com/elaradamasceno/',
    icon: Instagram
  },
  facebook: {
    title: 'Facebook',
    link: 'https://web.facebook.com/elara.damasceno/?_rdc=1&_rdr',
    icon: Facebook
  }
};

export type SocialMediaKey = 'linkedin' | 'gitHub' | 'instagram' | 'facebook';