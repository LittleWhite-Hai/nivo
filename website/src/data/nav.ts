import areaBump from './components/area-bump/meta.yml'
import bar from './components/bar/meta.yml'
import boxplot from './components/boxplot/meta.yml'
import circlePacking from './components/circle-packing/meta.yml'
import bump from './components/bump/meta.yml'
import bullet from './components/bullet/meta.yml'
import calendar from './components/calendar/meta.yml'
import choropleth from './components/choropleth/meta.yml'
import chord from './components/chord/meta.yml'
import funnel from './components/funnel/meta.yml'
import geomap from './components/geomap/meta.yml'
import heatmap from './components/heatmap/meta.yml'
import line from './components/line/meta.yml'
import marimekko from './components/marimekko/meta.yml'
import network from './components/network/meta.yml'
import parallelCoordinates from './components/parallel-coordinates/meta.yml'
import pie from './components/pie/meta.yml'
import radar from './components/radar/meta.yml'
import radialBar from './components/radial-bar/meta.yml'
import sankey from './components/sankey/meta.yml'
import scatterplot from './components/scatterplot/meta.yml'
import stream from './components/stream/meta.yml'
import sunburst from './components/sunburst/meta.yml'
import swarmplot from './components/swarmplot/meta.yml'
import timeRange from './components/time-range/meta.yml'
import tree from './components/tree/meta.yml'
import treemap from './components/treemap/meta.yml'
import voronoi from './components/voronoi/meta.yml'
import waffle from './components/waffle/meta.yml'
import { ChartNavData } from '../types'

export const components: ChartNavData[] = [
    {
        name: '曲线区块',
        id: 'area-bump',
        tags: areaBump.AreaBump.tags,
        flavors: {
            svg: true,
        },
    },
    {
        name: '柱状图',
        id: 'bar',
        tags: bar.Bar.tags,
        flavors: {
            svg: true,
            canvas: true,
            api: true,
        },
    },
    {
        name: '箱线图',
        id: 'boxplot',
        tags: boxplot.BoxPlot.tags,
        flavors: {
            svg: true,
        },
    },
    {
        name: '圆集合',
        id: 'circle-packing',
        tags: circlePacking.CirclePacking.tags,
        flavors: {
            svg: true,
            html: true,
            canvas: true,
            api: true,
        },
    },
    {
        name: '趋势变化图',
        id: 'bump',
        tags: bump.Bump.tags,
        flavors: {
            svg: true,
        },
    },
    {
        name: '子弹图',
        id: 'bullet',
        tags: bullet.Bullet.tags,
        flavors: {
            svg: true,
        },
    },
    {
        name: '日历标注图',
        id: 'calendar',
        tags: calendar.Calendar.tags,
        flavors: {
            svg: true,
            canvas: true,
            api: true,
        },
    },
    {
        name: '等值区域图',
        id: 'choropleth',
        tags: choropleth.Choropleth.tags,
        flavors: {
            svg: true,
            canvas: true,
        },
    },
    {
        name: '弦图',
        id: 'chord',
        tags: chord.Chord.tags,
        flavors: {
            svg: true,
            canvas: true,
            api: true,
        },
    },
    {
        name: '漏斗图',
        id: 'funnel',
        tags: funnel.Funnel.tags,
        flavors: {
            svg: true,
        },
    },
    {
        name: '地理图',
        id: 'geomap',
        tags: geomap.GeoMap.tags,
        flavors: {
            svg: true,
            canvas: true,
        },
    },
    {
        name: '热图',
        id: 'heatmap',
        tags: heatmap.HeatMap.tags,
        flavors: {
            svg: true,
            canvas: true,
            api: true,
        },
    },
    {
        name: '折线图',
        id: 'line',
        tags: line.Line.tags,
        flavors: {
            svg: true,
            canvas: true,
            api: true,
        },
    },
    {
        name: '分区柱状图',
        id: 'marimekko',
        tags: marimekko.Marimekko.tags,
        flavors: {
            svg: true,
        },
    },
    {
        name: '拓扑图',
        id: 'network',
        tags: network.Network.tags,
        flavors: {
            svg: true,
            canvas: true,
        },
    },
    {
        name: '平行坐标图',
        id: 'parallel-coordinates',
        tags: parallelCoordinates.ParallelCoordinates.tags,
        flavors: {
            svg: true,
            canvas: true,
        },
    },
    {
        name: '饼图',
        id: 'pie',
        tags: pie.Pie.tags,
        flavors: {
            svg: true,
            canvas: true,
            api: true,
        },
    },
    {
        name: '雷达图',
        id: 'radar',
        tags: radar.Radar.tags,
        flavors: {
            svg: true,
            api: true,
        },
    },
    {
        name: '径向条形图',
        id: 'radial-bar',
        tags: radialBar.RadialBar.tags,
        flavors: {
            svg: true,
        },
    },
    {
        name: '桑基图',
        id: 'sankey',
        tags: sankey.Sankey.tags,
        flavors: {
            svg: true,
            api: true,
        },
    },
    {
        name: '散点图',
        id: 'scatterplot',
        tags: scatterplot.ScatterPlot.tags,
        flavors: {
            svg: true,
            canvas: true,
        },
    },
    {
        name: '流图',
        id: 'stream',
        tags: stream.Stream.tags,
        flavors: {
            svg: true,
        },
    },
    {
        name: '旭日图',
        id: 'sunburst',
        tags: sunburst.Sunburst.tags,
        flavors: {
            svg: true,
            api: true,
        },
    },
    {
        name: '柱形散点图',
        id: 'swarmplot',
        tags: swarmplot.SwarmPlot.tags,
        flavors: {
            svg: true,
            canvas: true,
        },
    },
    {
        name: '时间标注图',
        id: 'time-range',
        tags: timeRange.TimeRange.tags,
        flavors: {
            svg: true,
        },
    },
    {
        name: '树形图',
        id: 'tree',
        tags: tree.Tree.tags,
        flavors: {
            svg: true,
            canvas: true,
        },
    },
    {
        name: '矩形树图',
        id: 'treemap',
        tags: treemap.TreeMap.tags,
        flavors: {
            svg: true,
            html: true,
            canvas: true,
            api: true,
        },
    },
    {
        name: 'Voronoi图',
        id: 'voronoi',
        tags: voronoi.Voronoi.tags,
        flavors: {
            svg: true,
        },
    },
    {
        name: 'Waffle图',
        id: 'waffle',
        tags: waffle.Waffle.tags,
        flavors: {
            svg: true,
            html: true,
            canvas: true,
        },
    },
]

export const guides = [
    {
        label: '轴',
        path: '/guides/axes/',
    },
    {
        label: '颜色',
        path: '/guides/colors/',
    },
    {
        label: '图例',
        path: '/guides/legends/',
    },
    {
        label: '渐变',
        path: '/guides/gradients/',
    },
    {
        label: '图案',
        path: '/guides/patterns/',
    },
    {
        label: '主题',
        path: '/guides/theming/',
    },
]
