import {
  MeanCalculator,
  RoundNumberCalculator,
  StandardDeviationCalculator
} from '../../../../../../app/general/calculators/general';

describe('MeanCalculator', () => {
  describe('constructor', () => {
    const testCases: any[] = [
      [
        'Should properly calculate standard deviation',
        [1, 2, 3],
        0.816496580927726
      ],
      [
        'Should properly calculate standard deviation',
        [5, 5, 5, 5],
        0
      ],
      [
        'Should properly calculate standard deviation',
        [100, 200, 333],
        95.43933500746255
      ],
      [
        'Should properly calculate standard deviation',
        [1000.1, 1000.2, 1000.3, 1000.4, 1000.5, 1000.6, 1000.7],
        0.2
      ]
    ];
    it.each(testCases)('%s', (message: string, values: number[], result: number) => {
      const calculatedValue = new StandardDeviationCalculator(values).instance;
      expect(calculatedValue).toBe(new RoundNumberCalculator(result).instance);
    });
  });
});
