import webpack from 'webpack'

import font from './font-loader'
import image from './image-loader'
import scss from './scss-loader'
import svg from './svg-loader'
import ts from './ts-loader'

export default [
    font,
    image,
    scss,
    svg,
    ts
] as Array<() => Partial<webpack.Configuration>>
