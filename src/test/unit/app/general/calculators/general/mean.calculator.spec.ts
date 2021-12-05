import {MeanCalculator, RoundNumberCalculator} from '../../../../../../app/general/calculators/general';

describe('MeanCalculator', () => {
  describe('constructor', () => {
    const testCases: any[] = [
      [
        'Should properly calculate mean',
        [1, 2, 3],
        2
      ],
      [
        'Should properly calculate mean',
        [5, 5, 5, 5],
        5
      ],
      [
        'Should properly calculate mean',
        [100, 200, 333],
        211
      ],
      [
        'Should properly calculate mean',
        [1000.1, 1000.2, 1000.3, 1000.4, 1000.5, 1000.6, 1000.7],
        1000.4
      ]
    ];
    it.each(testCases)('%s', (message: string, values: number[], result: number) => {
      const calculatedValue = new MeanCalculator(values).instance;
      expect(calculatedValue).toBe(new RoundNumberCalculator(result).instance);
    });
  });
});
