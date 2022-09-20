import Target from './target';
import { ConfigPanel } from './config';

const rootElement = document.createElement('div');
rootElement.id = 'root';
document.body.appendChild(rootElement);
const configPanel = new ConfigPanel(rootElement);
const target = new Target(rootElement, configPanel);
target.render();
