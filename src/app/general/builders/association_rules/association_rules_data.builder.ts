import {Apriori, Itemset, IAprioriResults} from 'node-apriori';
import {ResultKeysEnum} from "../../enums";
import {KeyDataManager} from "../../managers";
import {DatabaseResultInterface} from "../../interfaces/database-resources";
import {ClassifierDataInterface} from "../../interfaces/classifier-config";
import {AppLogger} from "../../logger/logger";

export class AssocioatonRulesDataBuilder{
    private readonly logger = new AppLogger(AssocioatonRulesDataBuilder.name);

    private readonly associationRulesData: ClassifierDataInterface[];
    private readonly keyDataManager: KeyDataManager;
    private readonly keyValues: ResultKeysEnum[] = [
        ResultKeysEnum.PM10,
        ResultKeysEnum.PM25,
        ResultKeysEnum.O3,
        ResultKeysEnum.NO2,
        ResultKeysEnum.SO2
    ];

    constructor(
        private readonly results: DatabaseResultInterface[]
    ) {
        this.keyDataManager = new KeyDataManager();
        this.associationRulesData = this.buildAssociationRulesData();
    }

    public get instance(): ClassifierDataInterface[] {
        return this.associationRulesData;
    }

    private buildAssociationRulesData(): ClassifierDataInterface[] {
        const {results, keyDataManager} = this;
        const total = results.length;
        let counter = 0;
        results.forEach(result => {
            this.addResultToConfigData(result);
            counter++;
            this.logger.debug(`[buildAssociationRulesData] Progress ${(counter / total * 100).toFixed(2)}`);
        });
        return keyDataManager.getParsedData();
    }

    private addResultToConfigData(result: DatabaseResultInterface): void {
        const {results, airQualityIndex} = result;
        for (const key in results) {
            if (!this.keyValues.includes(key as ResultKeysEnum)) {
                continue;
            }
            const value = results[key];
            this.keyDataManager.add({
                value: value,
                key: key as ResultKeysEnum,
                index: airQualityIndex
            });
        }
    }
}

const transactions: number[][] = [
    [2,3,5],
    [1,2,3,5],
    [2,5],
    [1,2,3,5]

];


// Execute Apriori with a minimum support of 40%. Algorithm is generic.
const apriori: Apriori<number> = new Apriori<number>(.4);

// Returns itemsets 'as soon as possible' through events.
apriori.on('data', (itemset: Itemset<number>) => {
    // Do something with the frequent itemset.
    const support: number = itemset.support;
    const items: number[] = itemset.items;

// Execute Apriori on a given set of transactions.
apriori.exec(transactions)
    .then( (result: IAprioriResults<number>) => {
        // Returns both the collection of frequent itemsets and execution time in millisecond.
        const frequentItemsets: Itemset<number>[] = result.itemsets;
        const executionTime: number = result.executionTime;
    });


}