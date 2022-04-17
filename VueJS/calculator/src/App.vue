<template>
  <div id="caculator">
      <h1>Calculadora</h1>
      <MainCalculator />
  </div>
</template>

<script>
import MainCalculator from "./main/MainCalculator"

export default {
    components: { MainCalculator }
}
</script>

<style>
@font-face {
    font-family: "RobotoMono";
    src: url("./fonts/RobotoMono.ttf"); 
}

* {
    font-family: "RobotoMono";
}

body{
    margin: 0;
}

#app{
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
}

</style>