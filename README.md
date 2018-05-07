# Flexbox
Self-taught CSS Flexbox

## References

https://scrimba.com/g/gflexbox

http://flexboxfroggy.com/

## Dependencies
#### Webpack & Packages
1. Webpack
2. node-sass
3. postcss-cli
4. browser-sync

#### Loaders
1. sass-loader
2. autoprefixer

#### Plugins
1. browser-sync-webpack-plugin
2. Post CSS
3. Extract Text Webpack Plugin

```bash
$ npm install --save-dev sass-loader node-sass webpack
$ npm install --save-dev postcss-cli autoprefixer
$ npm install --save-dev browser-sync-webpack-plugin
$ npm install --save-dev extract-text-webpack-plugin
$ npm install --save-dev postcss-loader
$ npm install --save-dev style-loader
$ npm install --save-dev babel-core
$ npm install --save-dev babel-loader
$ npm install --save-dev babel-preset-es2015
$ npm install --save-dev babel-preset-es2016
$ npm install --save-dev typescript ts-loader


$ npm install --save-dev sass-loader node-sass postcss-cli \
autoprefixer webpack browser-sync \
browser-sync-webpack-plugin
```


## Flexbox Concepts


- Main Axis
    - Goes from: Left => Right (depends on flex-direction)
    - display: flex;
    - flex: 1 0 0;
        - flex-grow, flex-shrink, flex-basis
    -flex-direction:
        column, row
    - justify-content:
        - flex-start, flex-end, center ...
    - flex-wrap:
        nowrap, wrap
    
- Cross Axis
    - Goes from: Bottom => Top (depends on flex-direction)
    - align-items:
        - flex-start, flex-end, center ...
    - align-self:
        - flex-start, flex-end, center ...