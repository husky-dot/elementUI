<template>
  <div class="org-chart-node"
    :class="{
        'collapsed': !expanded,
        'is-leaf': !node.children || node.children.length <=0 
      }"
    >
    <div class="org-chart-node-label">
      <div class="org-chart-node-label-inner"
        @click="handleClick"
        :class="computeLabelClass"
        :style="computeLabelStyle"
      >
        <node-content :node="node" >
          <slot>
            {{node.label}}
          </slot>
        </node-content>
      </div>
      <div v-if="showNodeBtn"
        class="org-chart-node-btn"
        :class="{'expanded': expanded}"
        @click="handleBtnClick"
      ></div>
    </div>
    <div class="org-chart-node-children"
      v-if="node.children && node.children.length > 0"
      :style="computNodeStyle"
      >
      <OkrTreeNode
        v-for="childNode in node.children"
        :show-collapsable="showCollapsable"
        :node="childNode"
        :label-width="labelWidth"
        :label-height="labelHeight"
        :renderContent="renderContent"
        :label-class-name="labelClassName"
        :selected-key="selectedKey"
        :default-expand-all="defaultExpandAll"
        :node-key="nodeKey"
      ></OkrTreeNode>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OkrTreeNode',
  inject: ['okrEventBus'],
  props: {
    node: {
      required: true,
    },
    // 子节点是否可折叠
    showCollapsable: {
      type: Boolean,
      default: false
    },
    // 树节点的内容区的渲染 Function
    renderContent: Function,
    // 树节点区域的宽度
    labelWidth: [String, Number],
    // 树节点区域的高度
    labelHeight: [String, Number],
    // 树节点的样式
    labelClassName: [Function, String],
    // 用来控制选择节点的字段名
    selectedKey: String,
    // 是否默认展开所有节点
    defaultExpandAll: {
      type: Boolean,
      default: false
    },
    // 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的
    nodeKey: String
  },
  components: {
    NodeContent: {
      props: {
        node: {
          required: true
        }
      },
      render(h) {
        const parent = this.$parent
        if (parent._props.renderContent) {
          return parent._props.renderContent(h, this.node)
        } else {
          return this.$scopedSlots.default(this.node)
        }
      }
    }
  },
  computed: {
    // 是否显示展开按钮
    showNodeBtn () {
      return this.showCollapsable && this.node.children && this.node.children.length > 0
    },
    // 节点的宽度
    computeLabelStyle () {
      let { labelWidth = 'auto', labelHeight = 'auto' } = this
      if (typeof labelWidth === 'number') {
        labelWidth = `${labelWidth}px`
      }
      if (typeof labelHeight === 'number') {
        labelHeight = `${labelHeight}px`
      }
      return {
        width: labelWidth,
        height: labelHeight
      }
    },
    computeLabelClass () {
      if (typeof this.labelClassName === 'function'){
        return this.labelClassName(this.node)
      }
      return this.labelClassName
    },
    computNodeStyle () {
      return {
        display: this.expanded ? '' : 'none'
      }
    }
  },
  data () {
    return {
      expanded: this.defaultExpandAll
    }
  },
  methods: {
    handleClick (e) {
      console.log('aaaa')
      this.okrEventBus.$emit('node-click', this.node, e)
    },
    handleBtnClick (e) {
      this.expanded = !this.expanded
      this.okrEventBus.$emit('node-btn-click', this.node, e)
    }
  }
}
</script>
