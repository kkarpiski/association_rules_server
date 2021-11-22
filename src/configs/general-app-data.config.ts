import {readFileSync} from 'fs';
import {GeneralAppDataConfigInterface} from '../interfaces/configs';

const appPackage = readFileSync(`${__dirname}/../../../package.json`, {
  encoding: 'utf8'
});
const appData = JSON.parse(appPackage);

export const generalAppDataConfig: GeneralAppDataConfigInterface = {
  appRootPath: `${__dirname}/../app`,
  version: appData.version,
  name: appData.name,
  description: appData.description
};
