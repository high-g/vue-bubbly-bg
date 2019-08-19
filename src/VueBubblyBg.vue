<template>
  <canvas></canvas>
</template>

<script>
export default {
  props: {
    colorString: String, // 色パターン文字列
    colorNum: [Number, String], // 色hsl 色相値 0〜360
    circleNum: [Number, String], // 円の数
    speed: String, // 移動スピード(normal, slow, fast)
    moveType: String // 移動タイプ(random, vertical, horizontal)
  },
  data() {
    return {
      ctx: null,
      width: 0,
      height: 0,
      circleManage: [],
      drawCount: 0,
      colorList: {
        red: 0,
        orange: 25,
        yellow: 60,
        yellowgreen: 85,
        green: 110,
        greenblue: 165,
        lightblue: 180,
        blue: 200,
        bluepurple: 260,
        purple: 285,
        lightpuple: 300,
        purplered: 315,
        lightred: 340
      }
    }
  },
  mounted() {
    this.settingCanvas()
    this.initPoint()
    requestAnimationFrame(this.draw)
  },
  methods: {
    /**
     * canvas設定
     */
    settingCanvas() {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.ctx = this.$el.getContext('2d')
      this.$el.width = this.width
      this.$el.height = this.height
    },

    /**
     * 円情報初期設定
     */
    initPoint() {
      this.circleManage = []

      // 乱数取得
      const maxNum = this.circleNum || 50
      const minNum = this.circleNum ? this.circleNum / 2 : 25
      const circleNum = Math.floor(Math.random() * (maxNum - minNum) + minNum)
      let cnt = 0

      while(cnt < circleNum) {
        const lightness =  Math.floor(Math.random() * (80 - 40) + 50)

        // それぞれの円の大きさ (最大 - 最小) + 最小
        this.circleManage.push({
          x: Math.floor(Math.random() * (this.width - 0) + 0),
          y: Math.floor(Math.random() * (this.height - 0) + 0),
          r: Math.floor(Math.random() * (50 - 5) + 5),
          moveX: Math.random() * Math.random() * (Math.random() < 0.5 ? -1 : 1),
          moveY: Math.random() * Math.random() * (Math.random() < 0.5 ? -1 : 1),
          color: `hsl(${this.desideColorNum()}, 100%, ${lightness}%)`
        })
        cnt++
      }
    },

    /**
     * 描画
     */
    draw() {
      // リセット
      this.ctx.clearRect(0, 0, this.width, this.height)

      for(let i in this.circleManage) {
        this.calcPoint(this.circleManage[i], i)
        this.settingCircle(this.circleManage[i])
      }

      requestAnimationFrame(this.draw)
    },

    /**
     * 色情報
     */
    desideColorNum() {
      let num = 200
      if(this.colorString) {
        num = this.colorList[this.colorString] || num
      } else if(!isNaN(this.colorNum)) {
        num = this.colorNum
      }
      return num
    },

    /**
     * 円移動座標計算
     * @param arg 円一つ分の情報
     * @param i 配列キー
     */
    calcPoint(arg, i) {
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

      this.circleManage[i] = arg
    },

    /**
     * 円情報描画設定
     * @param arg
     */
    settingCircle(arg) {
      this.ctx.beginPath()
      this.ctx.arc(arg.x, arg.y, arg.r, 0, Math.PI*2, false)
      this.ctx.strokeStyle = arg.color
      this.ctx.fillStyle = arg.color
      this.ctx.fill();
      this.ctx.closePath()
      this.ctx.stroke()
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
