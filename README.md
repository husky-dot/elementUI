

https://juejin.im/post/6844903519309283335?utm_source=tuicool&utm_medium=referral#heading-7

https://github.com/HigorSilvaRosa/vue-org-chart/blob/master/src/org-chart/OrgChart.vue

https://github.com/hukaibaihu/vue-org-tree/blob/master/src/components/org-tree/node.js


# vue-org-tree

> A simple organization tree chart based on Vue2.x

## Usage

### NPM

```
# use npm
npm i vue2-org-tree

# use yarn
yarn add vue2-org-tree
```
### Import Plugins

``` js
import Vue from 'vue'
import Vue2OrgTree from 'vue2-org-tree'

Vue.use(Vue2OrgTree)

// ...
```

### CDN

``` html
# css
<link href="https://unpkg.com/vue2-org-tree/dist/style.css">

# js
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue2-org-tree/dist/index.js"></script>
```


## API

#### props

| 参数 | 说明 | 类型 | 可选值 | 默认值
| :-----| ---- | :----: | :----: |  :----: |
| show-collapsable | 	节点是否可被展开 | Boolean | — | false
| direction | 树的展开方向 |  String |  horizontal / vertical | vertical

### events

  事件名称        | 说明                            | 回调参数
  ------------------|-----------------------------------------|:----------------------
  node-click             |  	节点被点击时的回调              | 返回当前点击的 node
  mouseover         |  onMouseOver event                      | `Function`
  mouseout          |  onMouseOut event                       | `Function`

### Call events

#### on-expand
well be called when the collapse-btn clicked

- params `e` `Event`
- params `data` `Current node data`

#### on-node-click
well be called when the node-label clicked

- params `e` `Event`
- params `data` `Current node data`

#### on-node-mouseover
It is called when the mouse hovers over the label.

- params `e` `Event`
- params `data` `Current node data`

#### on-node-mouseout
It is called when the mouse leaves the label.

- params `e` `Event`
- params `data` `Current node data`

## Example

- default

  ![default](./images/default.png)

- horizontal

  ![horizontal](./images/horizontal.png)

## Browser support

  use table layout!

> IE9+、Chrome、Firefox、Opera

## License
[MIT](http://opensource.org/licenses/MIT)
