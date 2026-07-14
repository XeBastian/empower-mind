export interface TeamMember {
  status: 'confirmed' | 'pending';
  name?: string;
  role?: string;
  initials?: string;
}

// Pending positions establish the intended layout without inventing people or roles.
export const teamMembers: readonly TeamMember[] = [
  {
    status: 'confirmed',
    name: 'Flora Ngina Mwale',
    role: 'Founder',
    initials: 'FM',
  },
  { status: 'pending' },
  { status: 'pending' },
  { status: 'pending' },
  { status: 'pending' },
];
