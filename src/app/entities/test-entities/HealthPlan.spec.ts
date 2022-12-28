import { HealthPlan } from '../HealthPlan';

describe('HealthPlan', () => {
  it('should be able to create a Health Plan', () => {
    const service = new HealthPlan({
      name: 'Umuprev',
      descripition: 'Your Health Plan',
    });

    expect(service).toBeTruthy();
  });
});
