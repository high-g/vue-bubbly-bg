<template>
  <div id="app">
    <h1>vue-bubbly-bg</h1>

    <section id="hero" class="mb50">
      <VueBubblyBg/>
      <p class="hero--title">
        Love the life you live. Live the life you love.<br>
        Stay hungry. Stay foolish.<br>
        Your time is limited, so don’t waste it living someone else’s life.<br>
        If it can be imagined, it can be created.<br>
        If you want to be happy, be.<br>
        Happiness depends upon ourselves.<br>
        Every day is a new day.
      </p>
    </section>

    <section id="content1" class="mb100">
      <h2>Content1</h2>
      <p>
        bgColor="blue"
        colorString="orange"
        circleNum="500"
        circleSpeed="veryfast"
        circleSize="verysmall"
      </p>

      <VueBubblyBg
        bgColor="#333"
        colorString="orange"
        circleNum="300"
        circleSpeed="veryfast"
        circleSize="verysmall"
      />
    </section>

    <section id="content2" class="mb100">
      <h2>Content2</h2>
      <p>
        bgColor="rgba(255,0,0,0.5)"
        colorString="green"
        circleNum="100"
        circleSpeed="slow"
        circleSize="small"
        moveType="horizon"
      </p>

      <VueBubblyBg
        bgColor="rgba(255,0,0,0.5)"
        colorString="green"
        circleNum="100"
        circleSpeed="slow"
        circleSize="small"
        moveType="horizon"
      />
    </section>

    <section id="content3">
      <h2>Content3</h2>
      <p>
        colorString="purple"
        circleNum="20"
        circleSize="big"
        moveType="vert"
      </p>

      <VueBubblyBg
        colorString="purple"
        circleNum="20"
        circleSize="big"
        moveType="vert"
      />
    </section>
  </div>
</template>

<script>
import VueBubblyBg from './VueBubblyBg.vue'

export default {
  components: {
    VueBubblyBg
  }
}
</script>

<style>
.mb10 {margin-bottom: 10px;}
.mb20 {margin-bottom: 20px;}
.mb30 {margin-bottom: 30px;}
.mb40 {margin-bottom: 40px;}
.mb50 {margin-bottom: 50px;}
.mb60 {margin-bottom: 60px;}
.mb70 {margin-bottom: 70px;}
.mb80 {margin-bottom: 80px;}
.mb90 {margin-bottom: 90px;}
.mb100 {margin-bottom: 100px;}

body {
  font-family: 'Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3','メイリオ', Meiryo,'ＭＳ ゴシック',sans-serif;
}

h1 {
  margin-left: 10px;
}

#hero {
  width: 100%;
  height: 450px;
  position: relative;
}

.hero--title {
  position: absolute;
  top: 0;
  left: 10px;
  color: #666;
  line-height: 1.4;
  letter-spacing: 1px;
}

#content1 {
  width: 100%;
  height: 600px;
}

#content2 {
  width: 60%;
  height: 800px;
}

#content3 {
  width: 60%;
  height: 500px;
}
</style>
