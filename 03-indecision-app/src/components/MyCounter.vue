<template>
  <section>
    <h3>Counter : {{ counter }}</h3>
    <h3>Square : {{ square }}</h3>
    <h4 v-if="texto.length > 0">{{ texto }}</h4>

    <div>
      <button class="btn-add" @click="counter++">+1</button>
      <button class="btn-remove" @click="counter--">-1</button>
    </div>

  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

// const props = defineProps({
//   initialValue: {
//     type: Number,
//     required: false,
//     default: 5,
//   },
//   text: {
//     type: String,
//     required: false,
//     default: '',
//   }
// });

const props = defineProps<{
  initialValue?: number;
  text?: string;
}>();

const counter = ref(props.initialValue ?? 5);
const square = computed(() => counter.value ** 2);
const texto = props.text ?? '';

</script>

<style>

</style>
