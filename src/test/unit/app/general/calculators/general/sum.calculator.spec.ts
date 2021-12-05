import {SumCalculator} from '../../../../../../app/general/calculators/general';

describe('SumCalculator', () => {
  describe('constructor', () => {
    const testCases: any[] = [
      [
        'Should properly calculate sum',
        [1, 2, 3],
        6
      ],
      [
        'Should properly calculate sum',
        [5, 5, 5, 5],
        20
      ],
      [
        'Should properly calculate sum',
        [100, 200, 333],
        633
      ],
      [
        'Should properly calculate sum',
        [1000, 1000, 1000, 1000, 1000, 1000, 1000],
        7000
      ]
    ];
    it.each(testCases)('%s', (message: string, values: number[], result: number) => {
      const calculatedValue = new SumCalculator(values).instance;
      expect(calculatedValue).toBe(result);
    });
  });
});
