export type Dimensions = {
    widthPx: number;
    heightPx: number;
}

export type TargetConfig = {
    fieldSize: Dimensions;
    targetSize: Dimensions;
    horizontalSpeed: number;
}

export class ConfigPanel {
    private readonly parentElement: HTMLElement;
    private panel: HTMLDivElement | null;

    constructor(parentElement: HTMLElement) {
        this.parentElement = parentElement;
        this.panel = null;
    }

    render() {
        this.panel = document.createElement('div');
        this.parentElement.appendChild(this.panel);
    }

    getConfig(): TargetConfig {
        return {
            fieldSize: { widthPx: 800, heightPx: 200 },
            targetSize: { widthPx: 50, heightPx: 50 },
            horizontalSpeed: 100
        };
    }
}
