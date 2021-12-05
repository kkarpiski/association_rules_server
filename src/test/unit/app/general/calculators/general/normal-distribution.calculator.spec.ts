import {NormalDistributionCalculator, RoundNumberCalculator} from '../../../../../../app/general/calculators/general';

describe('NormalDistribution', () => {
  describe('constructor', () => {
    const testCases: any[] = [
      [
        'Should properly calculate normal distribution',
        74,
        79.1,
        10.2,
        0.0345
      ],
      [
        'Should properly calculate normal distribution',
        74,
        86.2,
        9.7,
        0.0186
      ]
    ];
    it.each(testCases)('%s', (
      message: string,
      value: number,
      mean: number,
      standardDeviation: number,
      result: number
    ) => {
      const calculatedValue = new NormalDistributionCalculator({mean, standardDeviation, value}).instance;
      expect(calculatedValue).toBe(new RoundNumberCalculator(result).instance);
    });
  });
});
