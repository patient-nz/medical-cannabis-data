export interface ActiveIngredientMetricsSizeData extends Record<string, unknown> {
    value: string;
    unit: string;
}

export interface ActiveIngredientMetrics extends Record<string, unknown> {
    type: string;
    unit: string;
    value: string;
    // If the calculation of cost takes into account the
    // proportion of this vs total active ingredients
    proportional?: boolean;
    mean?: boolean;
    size?: ActiveIngredientMetricsSizeData;
    prefix?: string;
    calculation?: string;
}

export interface PollReportOptionData extends Partial<ActiveIngredientMetrics> {
    title: string;
    votes: `${number}` | string;
    range?: string[];
}

export interface PollReportData {
    title: string;
    url?: string;
    options: PollReportOptionData[];
    license: string;
    licenseName: string;
    author: string;
}