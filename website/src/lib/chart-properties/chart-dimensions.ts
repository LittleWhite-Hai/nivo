import { ChartProperty, Flavor } from '../../types'

export const chartWidth = (flavors: Flavor[]): ChartProperty => ({
    key: 'width',
    group: 'Base',
    type: 'number',
    required: true,
    help: '宽度',
    description: `
        如果使用响应式组件\`<Responsive* />\`，则不是required

        宽度不包括标签/轴，应添加足够的边距来显示它们
    `,
    flavors,
    enableControlForFlavors: ['api'],
    control: {
        type: 'range',
        unit: 'px',
        min: 100,
        max: 1000,
        step: 5,
    },
})

export const chartHeight = (flavors: Flavor[]): ChartProperty => ({
    key: 'height',
    group: 'Base',
    type: 'number',
    required: true,
    help: '高度',
    description: `
        如果使用响应式组件\`<Responsive* />\`，则不是required

        高度不包括标签/轴， 应添加足够的页边距来显示它们
    `,
    flavors,
    enableControlForFlavors: ['api'],
    control: {
        type: 'range',
        unit: 'px',
        min: 100,
        max: 1000,
        step: 5,
    },
})

export const chartMargin = (flavors: Flavor[]): ChartProperty => ({
    key: 'margin',
    group: 'Base',
    help: '边距',
    type: 'object',
    required: false,
    flavors,
    control: { type: 'margin' },
})

export const pixelRatio = (): ChartProperty => ({
    key: 'pixelRatio',
    flavors: ['canvas'],
    help: `Adjust pixel ratio, useful for HiDPI screens.`,
    required: false,
    defaultValue: 'Depends on device',
    type: `number`,
    group: 'Base',
    control: {
        type: 'range',
        min: 1,
        max: 2,
    },
})

export const chartDimensions = (flavors: Flavor[]): ChartProperty[] => {
    const properties: ChartProperty[] = [chartWidth(flavors), chartHeight(flavors)]

    if (flavors.includes('canvas')) {
        properties.push(pixelRatio())
    }

    properties.push(chartMargin(flavors))

    return properties
}
