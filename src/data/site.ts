export type ContentStatus = 'confirmed' | 'provisional' | 'missing' | 'retired';

export const site = {
  name: 'Empower Mind Initiative',
  shortName: 'Empower Mind',
  founded: 'November 2022',
  shortDescription:
    'Youth-focused mental health, psychological well-being, and social resilience in Malawi and beyond.',
  url: 'https://empower-mind.pages.dev',
  navigation: [
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Programmes' },
    { href: '/donate', label: 'Donate' },
  ],
  contact: {
    email: 'empowermindtherapy@gmail.com',
    phones: ['+265 990 532 201', '+265 884 218 155'],
  },
  chapters: [
    'University of Malawi (UNIMA)',
    'Malawi University of Business and Applied Sciences (MUBAS)',
    'Domasi College of Education',
    'Lilongwe University of Agriculture and Natural Resources (LUANAR)',
    'Catholic University of Malawi (CU)',
  ],
  impact: [
    { value: '5,000+', label: 'adolescents and young people reached' },
    { value: '5', label: 'university chapters' },
    { value: '2', label: 'districts directly reached' },
    { value: '2022', label: 'founded in November' },
  ],
  vision:
    'To be a leading youth-focused organization shaping mentally healthy, resilient, and empowered generations while supporting vulnerable populations in Malawi and beyond.',
  mission:
    'To improve the mental health and psychosocial well-being of adolescents, youth, and vulnerable communities in Malawi and beyond through accessible services, community empowerment, research, and advocacy.',
  programs: [
    {
      number: '01',
      title: 'Empower Mind Chapters',
      summary:
        'An institutionalized chapter model across five named higher-education institutions.',
      href: '/programs',
    },
    {
      number: '02',
      title: 'Suicide Prevention Among University Students',
      summary: 'A prevention project delivered through the existing Empower Mind chapter network.',
      href: '/programs',
    },
    {
      number: '03',
      title: 'Mental Health Awareness Campaigns and Career Guidance in Schools',
      summary: 'Work designed for primary- and secondary-school settings.',
      href: '/programs',
    },
  ],
  responseModel: [
    {
      number: '01',
      title: 'Accessible services',
      summary:
        'Counselling, therapy, psychosocial support, early identification, and referral are part of the organization’s stated model.',
      status: 'confirmed' as ContentStatus,
    },
    {
      number: '02',
      title: 'Community empowerment',
      summary:
        'Making young people active participants in the ideas and systems that affect their lives.',
      status: 'confirmed' as ContentStatus,
    },
    {
      number: '03',
      title: 'Youth engagement',
      summary:
        'Peer-support structures, training, and mentorship connect young people to the response.',
      status: 'confirmed' as ContentStatus,
    },
    {
      number: '04',
      title: 'Advocacy',
      summary: 'Public understanding and policy dialogue connect local experience to wider change.',
      status: 'confirmed' as ContentStatus,
    },
    {
      number: '05',
      title: 'Research & systems',
      summary:
        'Research, training, reporting, and institutional partnerships strengthen the wider response.',
      status: 'confirmed' as ContentStatus,
    },
  ],
} as const;

export const routeIntroductions = {
  about: {
    eyebrow: 'About Empower Mind Initiative',
    title: 'A youth-focused organization working toward mentally healthy, resilient generations.',
    summary:
      'Empower Mind Initiative promotes mental health, psychological well-being, and social resilience among adolescents, young people, and other vulnerable populations in Malawi and beyond.',
  },
  whatWeDo: {
    eyebrow: 'Our response',
    title:
      'Mental health is shaped by communities, opportunities, institutions, and everyday life.',
    summary:
      'The organization works through community empowerment, youth engagement, advocacy, research, and systems strengthening.',
  },
} as const;
