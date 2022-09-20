import Target from './target';
import { ConfigPanel } from './config';

export function initialize (rootId: string): void {
    console.log('rootId:', rootId);
    const root = document.getElementById(rootId);
    if (!root) {
        throw "Could not find root element '${rootId}'";
    }
    const configPanel = new ConfigPanel(root);
    const target = new Target(root, configPanel);
    target.render();
}
