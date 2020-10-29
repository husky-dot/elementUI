

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

#### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
| :-----| ---- | :----: | :----: |  :----: |
| label-width | 节点的宽度，默认为自动宽度。如果 label-width 为 number 类型，单位 px；如果 label-width 为 string 类型，则这个宽度会设置为 节点 的 style.width 的值，节点的宽度会受控于外部样式 | string/number | — | —
| label-height | 节点的高度，默认为自动高度。如果 label-height 为 number 类型，单位 px；如果 label-height 为 string 类型，则这个高度会设置为 节点 的 style.height 的值，节点的高度会受控于外部样式 | string/number | — | —
| label-class-name | 节点 className 的回调方法，也可以使用字符串为所有的节点设置一个固定的 className | Function({node)/String | — | — 
| show-collapsable | 节点是否可被展开 | Boolean | — | false
| direction | 树的展开方向 |  String |  horizontal / vertical | vertical
| render-content | 树节点的内容区的渲染 Function |  Function(h, node) | —  | —



### Events

  事件名称        | 说明                            | 回调参数
  ------------------|-----------------------------------------|:----------------------
  node-click             |  节点被点击时的回调  | 共二个参数，依次是该节点所对应的对象，节点对应的 Node
  node-btn-click         |  展开按键被点击时的回调  | 共二个参数，依次是该节点所对应的对象，节点对应的 Node
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
