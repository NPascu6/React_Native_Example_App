import {AppRegistry} from 'react-native';
import MyApp from './src/components/App/app';
import {name as appName} from './src/components/App/app.json';

AppRegistry.registerComponent(appName, () => MyApp);
