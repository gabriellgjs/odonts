import { Role } from '../Role';

describe('Entitie Role', () => {
  it('should be able to create a entitie role', () => {
    const role = new Role('dentista');
    expect(role).toBeTruthy();
  });

  it('should not be able to create a entitie role that is not available', () => {
    expect(() => new Role('roleNotAvaible')).toThrow();
  });
});
