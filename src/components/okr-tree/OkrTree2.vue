<template>
  <div class="org-chart-container">
    <div class="org-chart-node-children horizontal">
      <div class="org-chart-node">
        <div class="org-chart-node-label">
          <div class="org-chart-node-label-inner">快乐学习有限公司</div>
          <div class="org-chart-node-btn"></div>
        </div>
        <div class="org-chart-node-children">
          <div class="org-chart-node">
            <div class="org-chart-node-label">
              <div class="org-chart-node-label-inner">职能部</div>
            </div>
          </div>
          <div class="org-chart-node">
            <div class="org-chart-node-label">
              <div class="org-chart-node-label-inner">品牌部</div>
            </div>
            <div class="org-chart-node-children">
              <div class="org-chart-node">
                <div class="org-chart-node-label">
                  <div class="org-chart-node-label-inner">UI设计</div>
                </div>
              </div>
              <div class="org-chart-node">
                <div class="org-chart-node-label">
                  <div class="org-chart-node-label-inner">活动策划</div>
                </div>
              </div>
            </div>
          </div>
          <div class="org-chart-node">
            <div class="org-chart-node-label">
              <div class="org-chart-node-label-inner">事业部</div>
            </div>
            <div class="org-chart-node-children">
              <div class="org-chart-node">
                <div class="org-chart-node-label">
                  <div class="org-chart-node-label-inner">行政</div>
                </div>
              </div>
              <div class="org-chart-node">
                <div class="org-chart-node-label">
                  <div class="org-chart-node-label-inner">行政2</div>
                </div>
              </div>
            </div>
          </div>
          <div class="org-chart-node">
            <div class="org-chart-node-label">
              <div class="org-chart-node-label-inner">信息技术部</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.org-chart-container{
  display: block;
  width: 100%;
}
.horizontal .org-chart-node-children{
  position: relative;
  padding-left:20px;
  transition: all 0.5s;
}
.horizontal .org-chart-node{
  display: flex;
  align-items: center;
  position: relative;
  padding: 0px 5px 0 20px;
  transition: all .5s;
}

/*
.horizontal.org-chart-node-children .org-chart-node{
  display: flex;
  align-items: center;
}

.horizontal.org-chart-node-children .org-chart-node .org-chart-node-label-inner{
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  display: inline-block;
  padding: 10px;
  margin: 0px;
  font-size: 16px;
}
 */

</style>