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

<script lang="ts">
import { ref, computed, defineComponent } from 'vue';

export default defineComponent({

  props: {
    initialValue: {
      type: Number,
      required: false,
      default: 5,
    },
    text: {
      type: String,
      required: false,
      default: '',
    }
  },
  setup(props) {

    const counter = ref(props.initialValue);
    const square = computed(() => counter.value ** 2);
    const texto = props.text;

    return {
      counter,
      square,
      texto,
    };
  },

});

</script>

<style scoped>
</style>
