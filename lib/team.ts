import { Locale } from './types';
import teamMembersJson from './teamMembers.json';
import teamCityGroupsJson from './teamCityGroups.json';

export interface TeamMember {
  name: string;
  description: string;
  descriptions?: Partial<Record<Locale, string>>;
  location: string;
  image?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    x?: string;
    website?: string;
    telegram?: string;
    github?: string;
  };
}

export interface CityGroup {
  city: string;
  members: TeamMember[];
}

export interface TeamData {
  coreTeam: TeamMember[];
  cities: CityGroup[];
}

type RawMemberJson = {
  name: string;
  description: string;
  descriptions?: Record<string, string>;
  location: string;
  image?: string;
  socialLinks?: TeamMember['socialLinks'];
};

function hydrateMember(raw: RawMemberJson): TeamMember {
  const m: TeamMember = {
    name: raw.name,
    description: raw.description,
    location: raw.location,
  };
  if (raw.image !== undefined) m.image = raw.image;
  if (raw.socialLinks !== undefined) m.socialLinks = raw.socialLinks;
  if (raw.descriptions) {
    const desc: Partial<Record<Locale, string>> = {};
    for (const loc of Object.values(Locale)) {
      const v = raw.descriptions[loc];
      if (v !== undefined) desc[loc] = v;
    }
    if (Object.keys(desc).length > 0) m.descriptions = desc;
  }
  return m;
}

const members = teamMembersJson as Record<string, RawMemberJson>;

export const TEAM_DATA: TeamData = {
  coreTeam: [],
  cities: (teamCityGroupsJson as { city: string; memberIds: string[] }[]).map((g) => ({
    city: g.city,
    members: g.memberIds.map((id) => {
      const raw = members[id];
      if (!raw) throw new Error(`teamMembers.json: missing member id "${id}"`);
      return hydrateMember(raw);
    }),
  })),
};
