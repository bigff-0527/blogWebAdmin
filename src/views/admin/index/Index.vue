<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3  m-margin-lr-mini  m-shadow-small">
        <div class="text-center">
          <span class="text-black-50">总浏览</span>
          <p class="m-teal display-1" >{{views}}</p>
          <span class="text-black-50">总评论</span>
          <p class="m-teal display-1" >{{comments}}</p>
        </div>
      </div>
      <div class="col-md-4 m-margin-lr-mini m-shadow-small">
        <div id="type"></div>
      </div>
      <div class="col-md-4 m-margin-lr-mini m-shadow-small">
        <div id="tag"></div>
      </div>
    </div>
    <div class="row m-margin-top m-padded-tb-small m-shadow-small">
      <div class="col-md-12">
        <div id="blog"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'

  import {
    getBlogAllTag, getBlogAllType,
    getAllViews, getAllComments

  } from "network";

  export default {
    data() {
      return {
        blogList: [],
        typeList: [],
        tagList: [],
        views:0,
        comments:0
      }
    },
    methods: {
      showBlog() {
        let this_ = this;
        let myChart = echarts.init(document.getElementById('blog'));
        let option = {
          title: {
            text: '总记录'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['总流量', '博客浏览', '评论总数']
          },
          grid: {

            left: '0%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '总流量',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '博客浏览',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '评论总数',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
          ]
        };

        myChart.setOption(option);
        window.addEventListener('resize', function () {
          myChart.resize()
        });
      },
      showType() {
        var data = []
        for (var i = 0; i < this.typeList.length; i++) {
          if (this.typeList[i].blogs.length > 0) {
            data.push({
              value: this.typeList[i].blogs.length,
              name: this.typeList[i].typeName
            })
          }

        }
        let this_ = this;
        let myChart = echarts.init(document.getElementById('type'));
        let option = {
          title: {
            text: '分类',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
          },
          legend: {
            left: 'center',
            top: 'bottom',
            // data: this.typeList.typeName
          },
          series:
            {
              type: 'pie',
              radius: [10, 80],
              center: ['50%', '50%'],
              roseType: 'radius',
              label: {
                show: false
              },
              emphasis: {
                label: {
                  show: true
                }
              },
              data: data
            }

        };

        myChart.setOption(option);
        window.addEventListener('resize', function () {
          myChart.resize()
        });
      },
      showTag() {
        var data = []
        for (var i = 0; i < this.tagList.length; i++) {
          if (this.tagList[i].blogs.length > 0) {
            data.push({
              value: this.tagList[i].blogs.length,
              name: this.tagList[i].tagName
            })
          }

        }
        let this_ = this;
        let myChart = echarts.init(document.getElementById('tag'));
        let option = option = {
          title: {
            text: '标签',
            left: 'center'
          },
          legend: {
            left: 'center',
            top: 'bottom',
            // data: this.tagList.tagName
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
          },

          series: [
            {
              type: 'pie',
              radius: [8, 80],
              center: ['50%', '50%'],
              roseType: 'radius',
              label: {
                show: false
              },
              emphasis: {
                label: {
                  show: true
                }
              },
              data: data
            }
          ]
        };

        myChart.setOption(option);
        window.addEventListener('resize', function () {
          myChart.resize()
        });
      },
      getTypeList() {
        getBlogAllType().then(res => {
          this.typeList = res.data.data
        })
      },
      getTagList() {
        getBlogAllTag().then(res => {
          console.log(res.data.data);
          this.tagList = res.data.data
        })
      },
      getAllViews(){
        getAllViews().then( res => {
          this.views = res.data.data
        })
      },
      getAllComments(){
        getAllComments().then( res => {
          this.comments = res.data.data
        })
      },

    },
    computed: {},
    watch: {
      typeList: {
        handler: function (val, oldval) {
          if (val) {
            this.showType()
          }
          deep:true
        },
      },
      tagList: {
        handler: function (val, oldval) {
          if (val) {
            this.showTag()
            console.log(val);
          }
          deep:true
        },
      }
    },
    created() {
      this.getTypeList()
      this.getTagList()
    },
    mounted() {
      this.getAllViews()
      this.getAllComments()
      this.showBlog()
    }
  }
</script>
<style scoped>
  h2 {
    text-align: center;
    padding: 30px;
    font-size: 18px;
  }

  #blog {

    height: 300px;


  }

  #type {
    height: 300px;

  }

  #tag {

    height: 300px;


  }
</style>
