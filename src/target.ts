import { ConfigPanel } from './config';
import './target.css';

export default class Target {
    private readonly parentElement: HTMLElement;
    private readonly configPanel: ConfigPanel;
    private field: HTMLDivElement | null;
    private target: HTMLDivElement | null;

    constructor(parentElement: HTMLElement, configPanel: ConfigPanel) {
        this.parentElement = parentElement;
        this.configPanel = configPanel;
        this.field = null;
        this.target = null;
    }

    render() {
        const config = this.configPanel.getConfig();
        this.field = document.createElement('div');
        this.field.classList.add('field');
        this.field.style.setProperty('width', config.fieldSize.widthPx.toString() + "px");
        this.field.style.setProperty('height', config.fieldSize.heightPx.toString() + "px");

        this.target = document.createElement('div');
        this.target.classList.add('target');
        this.target.style.setProperty('width', config.targetSize.widthPx.toString() + "px");
        this.target.style.setProperty('height', config.targetSize.heightPx.toString() + "px");

        this.field.appendChild(this.target);
        this.parentElement.appendChild(this.field);
    }
}

