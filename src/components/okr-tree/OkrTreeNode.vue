<template>
  <div class="org-chart-node"
      :class="{'collapsed': !expanded}"
    >
    <div class="org-chart-node-label">
      <div class="org-chart-node-label-inner" @click="handleClick">
        <node-content :node="node"></node-content>
      </div>
      <div v-if="showNodeBtn"
        class="org-chart-node-btn"
        :class="{'expanded': expanded}"
        @click="handleBtnClick"
      ></div>
    </div>
    <div class="org-chart-node-children"  v-if="node.children.length > 0 && expanded">
      <OkrTreeNode
        v-for="childNode in node.children"
        :node="childNode"
        :show-collapsable="showCollapsable"
        :renderContent="renderContent"
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
  },
  components: {
    NodeContent: {
      props: {
        node: {
          required: true
        }
      },
      render(h) {
        console.log('1')
        const parent = this.$parent
        if (parent._props.renderContent) {
          return parent._props.renderContent(h, this.node)
        }
        // return <span class="el-tree-node__label">{ this.node.label }</span>
      }
    }
  },
  computed: {
    // 是否显示展开按钮
    showNodeBtn () {
      return this.showCollapsable && this.node.children && this.node.children.length > 0
    }
  },
  data () {
    return {
      expanded: true
    }
  },
  methods: {
    handleClick (e) {
      this.okrEventBus.$emit('node-click', this.node, e)
    },
    handleBtnClick (e) {
      this.expanded = !this.expanded
      this.okrEventBus.$emit('node-btn-click', this.node, e)
    }
  }
}
</script>
