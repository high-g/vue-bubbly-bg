#vue-bubbly-bg

円を用いたcanvasアニメーションコンポーネント。背景として利用可能。  
bubbly-bgにインスパイアされ、Vue.js用に作成しました。  
canvas系のライブラリは使用していない為、競合等の心配はありません。  

## Demo
https://high-g.github.io/vue-bubbly-bg/

## Install
src/VueBubblyBg.vueをコピーして利用してください。

## Usage

### 通常利用方法
`VueBubblyBg`のコンポーネントを設置するだけで利用可能です。
```
<VueBubblyBg/>
```

### オプション ※propsとして指定

#### bgColor
canvasの背景色を指定します。CSSの背景色の指定方法と同じです。

#### colorString
表示される円の色の指定します。下記が指定可能です。  
指定しない場合のデフォルト色は、 `blue` です。
- red
- orange
- yellow
- yellowgreen
- green
- greenblue
- lightblue
- blue
- bluepurple
- purple
- lightpuple
- purplered
- lightred

#### colorNum
表示される円の色をHSL数値で指定します。  
上記の `colorString` よりも厳密に数値する為のオプションなので、  
`colorString` を利用する場合は、このオプションは必要ありません。

####  circleNum
表示する円の数を指定します。上限は特にありません。  
指定しない場合は、10〜30個の間でランダムで表示します。

#### circleSpeed
円の全体的な移動速度を指定します。下記が指定可能です。  
指定しない場合は、 `slow` と `fast` の間くらいの速度で円が移動します。
- veryslow
- slow
- fast
- veryfast

#### circleSize
円の大きさを指定します。下記が指定可能です。  
指定しない場合は、 `small` と `big` の間くらいの大きさで円が表示されます。
- verysmall
- small
- big
- verybig

#### flgSizeFix
円のサイズを固定にするオプションです。  
指定がなければ、上記の `circleSize` の範囲で、円の大きさがランダムになるのですが、このオプションに任意の値を設定すると、円の大きさが `circleSize` で固定になります。

#### moveType
円の移動の種類を指定します。  
何も指定しなければ、円はランダムに移動します。
- vert (縦移動)
- horizon (横移動)
