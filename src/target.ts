import { ConfigPanel } from './target';

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
        console.log(config, "${config.fieldSize.widthPx}px");
        this.field = document.createElement('div');
        this.field.style.setProperty('position', 'relative');
        this.field.style.setProperty('background-color', 'white');
        this.field.style.setProperty('width', config.fieldSize.widthPx.toString() + "px");
        this.field.style.setProperty('height', config.fieldSize.heightPx.toString() + "px");

        this.target = document.createElement('div');
        this.target.style.setProperty('position', 'absolute');
        this.target.style.setProperty('top', '0');
        this.target.style.setProperty('left', '0');
        this.target.style.setProperty('background', 'black');
        this.target.style.setProperty('width', config.targetSize.widthPx.toString() + "px");
        this.target.style.setProperty('height', config.targetSize.heightPx.toString() + "px");
        this.target.style.setProperty('animation', '3s infinite linear alternate horizontal');

        this.field.appendChild(this.target);
        this.parentElement.appendChild(this.field);
    }
}

