const map: Record<string, string> = {
    AreaBump: '曲线区块',
    Bar: '柱状图',
    BoxPlot: '箱线图',
    CirclePacking: '圆集合',
    Bump: '趋势变化图',
    Bullet: '子弹图',
    Calendar: '日历标注图',
    Choropleth: '等值区域图',
    Chord: '弦图',
    Funnel: '漏斗图',
    GeoMap: '地理图',
    HeatMap: '热图',
    Line: '折线图',
    Marimekko: '分区柱状图',
    Network: '拓扑图',
    ParallelCoordinates: '平行坐标图',
    Pie: '饼图',
    Radar: '雷达图',
    RadialBar: '旭日图',
    SwarmPlot: '柱形散点图',
    TimeRange: '时间标注图',
    ScatterPlot: '散点图',
    Stream: '流图',
    Tree: '树形图',
    TreeMap: '矩形树图',
    Voronoi: 'Voronoi图',
    Waffle: 'Waffle图',
}
export default function translate(str: string): string {
    const res = map[str]

    if (res) {
        return res
    } else {
        return str
    }
}
