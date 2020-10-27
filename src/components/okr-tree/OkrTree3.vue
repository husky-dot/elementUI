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
              <div class="org-chart-node-btn"></div>
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
              <div class="org-chart-node-btn"></div>
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

/*使用 ::before 和 ::after 绘制连接器*/
.horizontal .org-chart-node::before,
.horizontal .org-chart-node::after{
  content: '';
  position: absolute;
  border-left: 1px solid #ccc;
  top:0;
  left: 0;
  width: 20px;
  height: 50%;
}
.horizontal .org-chart-node::after{
  top: 50%;
  border-top: 1px solid #ccc;
}

/*我们需要从没有任何兄弟元素的元素中删除左右连接器*/
.horizontal .org-chart-node:only-child::after,
.horizontal .org-chart-node:only-child::before{
  display: none;
}
/*从单个子节点的顶部移除空格*/
.horizontal .org-chart-node:only-child{
  padding-left: 0;
}
/*从第一个子节点移除左连接器，从最后一个子节点移除右连接器*/
.horizontal .org-chart-node:first-child::before,
.horizontal .org-chart-node:last-child::after{
  border: 0 none;
}
/*将垂直连接器添加回最后的节点*/
.horizontal .org-chart-node:last-child::before{
  border-bottom: 1px solid #ccc;
  border-radius: 0 0px 0 5px;
}
.horizontal .org-chart-node:first-child::after{
  border-radius: 5px 0px 0 0;
}
/*从父节点添加向下的连接器了*/
.horizontal .org-chart-node-children::before{
  content: '';
  position: absolute;
  left:0;
  top: 50%;
  border-top: 1px solid #ccc;
  width: 20px;
  height: 0;
}
.horizontal .org-chart-node-label{
  position: relative;
  display: inline-block;
}

.horizontal .org-chart-node-label .org-chart-node-label-inner{
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  display: inline-block;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
}

.horizontal .org-chart-node-label .org-chart-node-label-inner:hover{
  background: #eeeeee;
}
.horizontal .org-chart-node-label .org-chart-node-btn{
  position: absolute;
  left: 100%;
  top: 50%;
  width: 20px;
  height: 20px;
  z-index: 10;
  margin-top: -11px;
  margin-left: 9px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  box-shadow: 0 0 2px rgba(0, 0, 0, .15);
  cursor: pointer;
  transition: all .35s ease;
}

.org-chart-node-label .org-chart-node-btn:hover{
  background-color: #e7e8e9;
  transform: scale(1.15);
}
.horizontal .org-chart-node-label .org-chart-node-btn::before,
.horizontal .org-chart-node-label .org-chart-node-btn::after {
  content: '';
  position: absolute;
}

.horizontal .org-chart-node-label .org-chart-node-btn::before{
  top: 50%;
  left: 4px;
  right: 3px;
  border-top: 1px solid #ccc;
  height: 0;
  transform: translateY(-50%);
}
.horizontal .org-chart-node-label .org-chart-node-btn::after{
  top: 4px;
  left: 50%;
  bottom: 4px;
  width: 0;
  border-left: 1px solid #ccc;
}
</style>