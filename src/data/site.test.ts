import { describe, expect, it } from 'vitest';
import { site } from './site';

describe('site foundation', () => {
  it('uses the confirmed official organization name', () => {
    expect(site.name).toBe('Empower Mind Initiative');
    expect(site.shortName).toBe('Empower Mind');
  });

  it('uses the approved Cloudflare Pages project URL', () => {
    expect(site.url).toBe('https://empower-mind.pages.dev');
  });

  it('contains five response groups without duplicate numbers', () => {
    expect(site.responseModel).toHaveLength(5);
    expect(new Set(site.responseModel.map((item) => item.number)).size).toBe(5);
    expect(site.responseModel.every((item) => item.status === 'confirmed')).toBe(true);
  });

  it('publishes only the three sourced programme areas', () => {
    expect(site.programs).toHaveLength(3);
    expect(site.chapters).toHaveLength(5);
  });

  it('publishes only the four supplied headline impact facts', () => {
    expect(site.impact.map((item) => item.value)).toEqual(['5,000+', '5', '2', '2022']);
  });
});
