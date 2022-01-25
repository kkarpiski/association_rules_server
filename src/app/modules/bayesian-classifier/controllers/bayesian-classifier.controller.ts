import {Body, Controller, Get, Post} from '@nestjs/common';
import {DataClassifyDto} from '../../../general/dtos/bayesian-classifier';
import {BaseResultInterface} from '../../../general/interfaces/resources';
import {BayesianClassifierService} from '../services/bayesian-classifier.service';
import {Apriori, IAprioriResults, Itemset} from 'node-apriori';
import {OpenWeatherService} from '../../external-providers/openWeather/openWeather.service';
@Controller('bayesian-classifier')
export class BayesianClassifierController {

  constructor(
    private readonly bayesianClassifierService: BayesianClassifierService
  ) {
  }

  @Post()
  public async classify(
    @Body() data: DataClassifyDto
  ): Promise<BaseResultInterface> {
    //return this.bayesianClassifierService.classify(data);
    return null;
  }

    /*
    let transactions: number[][] = [
      [2,3,5],
      [1,2,3,5],
      [2,5],
      [1,2,3,5]
    ];

// Execute Apriori with a minimum support of 40%. Algorithm is generic.
    let apriori: Apriori<number> = new Apriori<number>(.4);

// Returns itemsets 'as soon as possible' through events.
    apriori.on('data', (itemset: Itemset<number>) => {
      // Do something with the frequent itemset.
      let support: number = itemset.support;
      let items: number[] = itemset.items;
    });

// Execute Apriori on a given set of transactions.
    apriori.exec(transactions)
        .then( (result: IAprioriResults<number>) => {
          // Returns both the collection of frequent itemsets and execution time in millisecond.
          let frequentItemsets: Itemset<number>[] = result.itemsets;
          console.log(JSON.stringify(frequentItemsets));
          let executionTime: number = result.executionTime;
        });
  }

     */
  }
