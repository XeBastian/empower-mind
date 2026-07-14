export interface GalleryMedia {
  src: string;
  srcset?: string;
  sizes?: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  credit?: string;
}

export interface GalleryTheme {
  number: string;
  title: string;
  note: string;
  layout: 'wide' | 'tall' | 'standard';
  media?: GalleryMedia;
}

export const galleryThemes: GalleryTheme[] = [
  {
    number: '01',
    title: 'Youth participation',
    note: 'Leadership, peer support, and shared learning',
    layout: 'wide',
  },
  {
    number: '02',
    title: 'Campus chapters',
    note: 'Institutional life and chapter connection',
    layout: 'tall',
  },
  {
    number: '03',
    title: 'School settings',
    note: 'Awareness, learning, and career guidance',
    layout: 'standard',
  },
  {
    number: '04',
    title: 'Community connection',
    note: 'Participation, conversation, and community empowerment',
    layout: 'wide',
  },
  {
    number: '05',
    title: 'Research & learning',
    note: 'Documentation, evidence, and continuous learning',
    layout: 'standard',
  },
  {
    number: '06',
    title: 'Advocacy & collaboration',
    note: 'Policy dialogue and cross-sector connection',
    layout: 'tall',
  },
];
