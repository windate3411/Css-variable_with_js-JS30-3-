# Css-variable_with_js-JS30-3-
# 學習重點
***
+ CSS中已套用變數功能，可利用:root {--變數名稱做變數命名}，使用時利用var進行宣告
``` 
  //例如
    :root {
      --color:#ffffff
    }
    .item {
      background: var(--color);
    }
``` 
+ 除了利用:root 設定變數，也可以在其他的區塊例如h1等地方設定變數，該變數則保有區塊特性(僅適用該區塊)
+ 利用JS可修改變數的值，利用style.setProperty 改變指定元素的特性 須接受兩個變數(特性名稱，值)
指定的元素為有使用到該變數的所有元素
