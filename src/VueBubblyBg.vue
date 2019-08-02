<template>
  <canvas></canvas>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {
      ctx: null,
      width: 0,
      height: 0,
      circleManage: [],
      drawCount: 0
    }
  },
  computed: {
  },
  mounted() {
    this.settingCanvas()
    this.initPoint()
    requestAnimationFrame(this.draw)
  },
  methods: {
    settingCanvas() {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.ctx = this.$el.getContext('2d')
      this.$el.width = this.width
      this.$el.height = this.height
    },
    initPoint() {
      this.circleManage = []

      // 乱数（20〜50）取得
      const circleNum = Math.floor(Math.random() * (50 - 20) + 20)
      let cnt = 0

      while(cnt < circleNum) {
        const lightness =  Math.floor(Math.random() * (80 - 40) + 50);

        // それぞれの円の大きさ (最大 - 最小) + 最小
        this.circleManage.push({
          x: Math.floor(Math.random() * (this.width - 0) + 0),
          y: Math.floor(Math.random() * (this.height - 0) + 0),
          r: Math.floor(Math.random() * (50 - 5) + 5),
          moveX: Math.random() * Math.random() * (Math.random() < 0.5 ? -1 : 1),
          moveY: Math.random() * Math.random() * (Math.random() < 0.5 ? -1 : 1),
          color: `hsl(20, 100%, ${lightness}%)`
        })
        cnt++
      }
    },
    calcPoint(arg, num) {
      arg.x += arg.moveX
      arg.y += arg.moveY

      if(arg.x < 0) {
        arg.x = this.width
      } else if (arg.x > this.width) {
        arg.x = 0
      }

      if(arg.y < 0) {
        arg.y = this.height
      } else if (arg.y > this.height) {
        arg.y = 0
      }

      this.circleManage[num] = arg
    },
    settingCircle(arg) {
      this.ctx.beginPath()
      this.ctx.arc(arg.x, arg.y, arg.r, 0, Math.PI*2, false)
      this.ctx.strokeStyle = arg.color
      this.ctx.fillStyle = arg.color
      this.ctx.fill();
      this.ctx.closePath()
      this.ctx.stroke()
    },
    draw() {
      this.ctx.clearRect(0, 0, this.width, this.height)


      for(let i in this.circleManage) {
        this.calcPoint(this.circleManage[i], i)
        this.settingCircle(this.circleManage[i])
      }

      requestAnimationFrame(this.draw)
    },
  }
}
</script>

<style lang="scss" scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>
