<template>
  <canvas id="canvas"></canvas>
</template>

<script>
export default {
  el: '#canvas',
  props: {
  },
  data() {
    return {
      ctx: null
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
    console.log()
    this.$el.width = window.innerWidth
    this.$el.height = window.innerHeight
    this.ctx = this.$el.getContext('2d')
    this.drawCircle(50, 50, 30)
    this.drawCircle(600, 100, 30)
    this.drawCircle(100, 200, 30)
  },
  methods: {
    drawCircle(x, y, r) {
      this.ctx.beginPath()
      this.ctx.arc(x, y, r, 0, Math.PI*2, false)
      this.ctx.stroke()
    },
    drawRandomCircle() {

    },
    drawPolygon() {
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>
