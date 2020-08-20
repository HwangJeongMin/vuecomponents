<template>
  <date-picker v-model="date" valuetype="format"></date-picker>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ko';

export default {
  components: {
    DatePicker,
  },
  props: {
    value: {
      type: Object,
    },
  },
  data() {
    return {
      date: new Date(),
    };
  },
  created() {
    this.date = this.props.value;
  },
};
</script>
