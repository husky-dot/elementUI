<template>
  <div>
    <!-- <Vue2OrgTree :data='treeData' collapsable horizontal
      @on-expand="onExpand"
      selected-class-name="selected-node"
      selected-key="selectedKey"
      @on-node-click="onNodeClick"
    /> -->
    <hr >
    <!-- <OkrTree :data="testData"
      direction='horizontal'
      showCollapsable
      @node-click='nodeClick'
      @node-btn-click='nodeBtnClick'
      label-width="100px"
      labelClassName='styleee'
      selected-key="selected"
      :default-expand-all='true'
      node-key="id"
    ></OkrTree> -->
    <div style="padding-left:300px">
    <OkrTree :data="testData"
      :leftData="testLeftData"
      ref="tree"
      onlyBothTree
      direction='horizontal'
      @node-click='nodeClick'
      @node-expand='handleNodeExpand'
      @node-collapse='handleNodeCollapse'
      @node-contextmenu="handleContextNenu"
      label-width="140px"
      :labelClassName='rednerLabelClass'
      currentLableClassName="xiohong"
      selected-key="selected"
      showCollapsable
      node-key="id"
      :render-content="renderContent"
    ></OkrTree>

    </div>

    <OkrTree :data="testData2"
      @node-click='nodeClick'
      @node-expand='handleNodeExpand'
      @node-collapse='handleNodeCollapse'
      label-width="100px"
      labelClassName='styleee'
      selected-key="selected"
      showCollapsable
      node-key="id"
      :default-expand-all='true'
    ></OkrTree>
    <hr>

    <div>
        <OkrTree :data="testData2"
      @node-click='nodeClick'
      @node-expand='handleNodeExpand'
      @node-collapse='handleNodeCollapse'
      direction='horizontal'
      label-width="100px"
      labelClassName='styleee'
      selected-key="selected"
      showCollapsable
      node-key="id"
      :default-expand-all='true'
    ></OkrTree>
    
    </div>
    <!-- 
    <OkrTree :data="testData"
      @node-click='nodeClick'
      @node-expand='handleNodeExpand'
      @node-collapse='handleNodeCollapse'
    ></OkrTree>
    -->
    <!-- <el-tree :data="testData" :props="defaultProps" :default-expanded-keys='[2]' node-key="id" :auto-expand-parent="false"></el-tree> -->
  </div>
</template>
<script>
import OkrTree from './okr-tree/OkrTree.vue'
import OkrTree3 from './okr-tree/OkrTree3.vue'
export default {
  components: {
    OkrTree,
    OkrTree3
  },
  data () {
    return {
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      treeData: [{
        id: 1,
        label: "前端小智",
        children: [
          {
            id: 2,
            label: "Bob Esponja",
            children: [
              {
                id: 3,
                label: "Patrick Estrela",
                children: [
                    {
                      id: 4,
                      label: '小44',
                    }
                  ]
              }
            ]
          }
        ]
      }
      ],
      testData: [{
        id: 111,
        label: '小三',
        children: [{
          id: 1112,
          label: '小22222',
          children: [
          {
            id: 1113,
            label: '小333',
          },
          {
            id: 11113,
            label: '小333',
          }]
        }, {
          id: 111112,
          label: '小21111',
          children: [
            {
              id: 111123,
              label: '小智真6',
            }
          ]
        }]
      }],
      testLeftData: [{
        id: 1,
        label: '小三',
        children: [{
          id: 1111112,
          label: '小Left1',
          children: []
        }, {
          id: 1111114,
          label: '小Left4',
          children: [
            {
              id: 1111115,
              label: '小Left5',
            },
            {
              id: 11111116,
              label: '小Left6',
            }
          ]
        }]
      }],
      testData2: [{
        id: 1,
        label: '小三',
        children: [{
          id: 2,
          label: '小2',
          children: [
          {
            id: 3,
            label: '小333',
          },
          {
            id: 13,
            label: '小333',
          }]
        }, {
          id: 112,
          label: '小21111',
        }]
      }]

    }
  },
  mounted () {
    this.$refs.tree.setCurrentKey(112)
    console.log(this.$refs.tree.getCurrentKey())
  },
  methods: {
    labelClassName (data) {
      console.log(data.label)
    },
    onExpand (e, data) {
      if ('expand' in data) {
        data.expand = !data.expand
        if (!data.expand && data.children) {
          // this.collapse(data.children)
        }
      } else {
        this.$set(data, 'expand', true)
      }
    },
    renderContent (h, data) {

      const { isLeftChild } = data
      console.log(isLeftChild)
      if (isLeftChild) {
        return (
          <div class="render-wrapper" >
            <h1 style={{color: 'red'}}>{data.label}</h1>
          </div>
        )
      }
      return (
        <div class="render-wrapper">
          <h1>{data.label}</h1>
        </div>
      )
    },
    onNodeClick (data) {
      console.log('CLICK', e);
    },
    nodeClick (nodeData, node, instance) {
      console.log(nodeData)
      console.log(node)
      console.log(instance)
    },
    handleNodeExpand(nodeData, node, instance) {
      console.log(nodeData)
      console.log(node)
      console.log(instance)
    },
    handleNodeCollapse(nodeData, node, instance) {
      console.log(nodeData)
      console.log(node)
      console.log(instance)
    },
    handleContextNenu (event, nodeData, node, instance) {
      console.log(event)
      console.log(nodeData)
      console.log(node)
      console.log(instance)
    },
    rednerLabelClass () {
      return 'xiaomingg'
    }
  }
}
</script>
<style>
      .selected-node {
        background: tomato;
      }
      .bg_node {
        cursor: pointer;
      }
</style>

