<template>
  <section>
    <h3>Counter : {{ counter }}</h3>
    <h3>Square : {{ square }}</h3>
    <h4 v-if="texto.length > 0">{{ texto }}</h4>

    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>

  </section>
</template>

<script lang="ts" src="./MyCounterScript2">

</script>

<style scoped>
</style>
