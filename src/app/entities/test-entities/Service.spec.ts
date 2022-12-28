import { Service } from '../Service';

describe('Service', () => {
  it('should be able to create a service', () => {
    const service = new Service({
      name: 'maintenance',
      expected_duration: 30,
    });

    expect(service).toBeTruthy();
  });
});
