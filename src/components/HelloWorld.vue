<template>
  <div>
    <Vue2OrgTree :data='tree' collapsable/>
    <hr >
    <OkrTree />
  </div>
</template>
<script>
import OkrTree from './okr-tree/OkrTree.vue'
export default {
  components: {
    OkrTree
  },
  data () {
    return {
          tree: {
          label: 'Owner',
          children: [{
            label: 'Label 1'
          },{
            label: 'Label 2'
          },{
            label: 'Label 3'
          }]
        }
    }
  }
}
</script>
<style>
</style>

