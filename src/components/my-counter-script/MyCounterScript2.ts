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
