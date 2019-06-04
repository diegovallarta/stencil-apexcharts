import { h } from '@stencil/core';
import ApexCharts from 'apexcharts';
const config = (options, type, width, height, series) => {
    const chart = options.chart ? Object.assign({}, options.chart) : {};
    if (type) {
        chart.type = type;
    }
    if (width) {
        chart.width = width;
    }
    if (height) {
        chart.height = height;
    }
    return series ? Object.assign({}, options, { chart, series }) : Object.assign({}, options, { chart });
};
if (window) {
    const win = window;
    win.ApexCharts = ApexCharts;
}
export class chart {
    constructor() {
        /**
         * Internal ApexCharts instance
         */
        this.chartObj = null;
    }
    optionsChanged(options) {
        if (this.chartObj !== null) {
            return this.chartObj.updateOptions(config(options, this.type, this.width, options, this.series));
        }
    }
    seriesChanged(series) {
        if (this.chartObj !== null) {
            this.chartObj.updateSeries(series, true);
        }
    }
    /**
     * Updates the configuration object. The new config object is merged with the existing config object preserving the existing configuration.
     * @param newOptions The configuration object to merge on the existing one
     * @param redrawPaths When the chart is re-rendered, should it draw from the existing paths or completely redraw the chart paths from the beginning. By default, the chart is re-rendered from the existing paths
     * @param animate Should the chart animate on re-rendering
     */
    async updateOptions(newOptions, redrawPaths, animate) {
        return this.chartObj.updateOptions(newOptions, redrawPaths, animate);
    }
    async getApexChart() {
        return this.chartObj;
    }
    async componentDidLoad() {
        if (this.chartObj === null) {
            this.chartObj = new ApexCharts(this.chartRef, config(this.options, this.type, this.width, this.height, this.series));
            return this.chartObj.render();
        }
    }
    componentDidUnload() {
        if (this.chartObj !== null) {
            this.chartObj.destroy();
        }
    }
    render() {
        return h("div", { ref: el => (this.chartRef = el) });
    }
    static get is() { return "apex-chart"; }
    static get originalStyleUrls() { return {
        "$": ["apex-chart.css"]
    }; }
    static get styleUrls() { return {
        "$": ["apex-chart.css"]
    }; }
    static get properties() { return {
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "ApexChartType",
                "resolved": "\"area\" | \"bar\" | \"bubble\" | \"candlestick\" | \"donut\" | \"heatmap\" | \"histogram\" | \"line\" | \"pie\" | \"radar\" | \"radialBar\" | \"rangeBar\" | \"scatter\"",
                "references": {
                    "ApexChartType": {
                        "location": "import",
                        "path": "./apex-charts"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [{
                        "text": "https://apexcharts.com/docs/options/chart/type/",
                        "name": "see"
                    }],
                "text": "(optional) Type"
            },
            "attribute": "type",
            "reflect": false
        },
        "width": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "ApexChartWidth",
                "resolved": "number | string",
                "references": {
                    "ApexChartWidth": {
                        "location": "import",
                        "path": "./apex-charts"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [{
                        "text": "https://apexcharts.com/docs/options/chart/width/",
                        "name": "see"
                    }],
                "text": "(optional) Width"
            },
            "attribute": "width",
            "reflect": false
        },
        "height": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "ApexChartHeight",
                "resolved": "number | string",
                "references": {
                    "ApexChartHeight": {
                        "location": "import",
                        "path": "./apex-charts"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [{
                        "text": "https://apexcharts.com/docs/options/chart/height/",
                        "name": "see"
                    }],
                "text": "(optional) Height"
            },
            "attribute": "height",
            "reflect": false
        },
        "options": {
            "type": "unknown",
            "mutable": true,
            "complexType": {
                "original": "ApexOptions",
                "resolved": "ApexOptions",
                "references": {
                    "ApexOptions": {
                        "location": "import",
                        "path": "apexcharts"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [{
                        "text": "https://apexcharts.com/docs/options/",
                        "name": "see"
                    }],
                "text": "(optional) Options"
            }
        },
        "series": {
            "type": "unknown",
            "mutable": true,
            "complexType": {
                "original": "ApexOptionsSeries",
                "resolved": "number[] | { name: string; data: number[] | { x: any; y: any; }[] | [number, number][] | [number, number[]][]; }[]",
                "references": {
                    "ApexOptionsSeries": {
                        "location": "import",
                        "path": "./apex-charts"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [{
                        "text": "https://apexcharts.com/docs/options/series/",
                        "name": "see"
                    }],
                "text": "(optional) Series"
            }
        }
    }; }
    static get states() { return {
        "chartObj": {}
    }; }
    static get methods() { return {
        "updateOptions": {
            "complexType": {
                "signature": "(newOptions: ApexCharts.ApexOptions, redrawPaths?: boolean, animate?: boolean) => Promise<void>",
                "parameters": [{
                        "tags": [{
                                "text": "newOptions The configuration object to merge on the existing one",
                                "name": "param"
                            }],
                        "text": "The configuration object to merge on the existing one"
                    }, {
                        "tags": [{
                                "text": "redrawPaths When the chart is re-rendered, should it draw from the existing paths or completely redraw the chart paths from the beginning. By default, the chart is re-rendered from the existing paths",
                                "name": "param"
                            }],
                        "text": "When the chart is re-rendered, should it draw from the existing paths or completely redraw the chart paths from the beginning. By default, the chart is re-rendered from the existing paths"
                    }, {
                        "tags": [{
                                "text": "animate Should the chart animate on re-rendering",
                                "name": "param"
                            }],
                        "text": "Should the chart animate on re-rendering"
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "ApexOptions": {
                        "location": "import",
                        "path": "apexcharts"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Updates the configuration object. The new config object is merged with the existing config object preserving the existing configuration.",
                "tags": [{
                        "name": "param",
                        "text": "newOptions The configuration object to merge on the existing one"
                    }, {
                        "name": "param",
                        "text": "redrawPaths When the chart is re-rendered, should it draw from the existing paths or completely redraw the chart paths from the beginning. By default, the chart is re-rendered from the existing paths"
                    }, {
                        "name": "param",
                        "text": "animate Should the chart animate on re-rendering"
                    }]
            }
        },
        "getApexChart": {
            "complexType": {
                "signature": "() => Promise<ApexCharts>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "ApexCharts": {
                        "location": "global"
                    }
                },
                "return": "Promise<ApexCharts>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get watchers() { return [{
            "propName": "options",
            "methodName": "optionsChanged"
        }, {
            "propName": "series",
            "methodName": "seriesChanged"
        }]; }
}
