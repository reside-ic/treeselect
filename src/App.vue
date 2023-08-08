<template>
  <tree-select :multiple="false"
               :clearable="false"
               :options="options"
               :model-value="modelValue"
               :disabled="false"
               :placeholder="'placeholder'"
               @update:model-value="handleUpdate"/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TreeSelect from './components/TreeSelect.vue';

export default defineComponent({
  name: 'App',
  components: {
    TreeSelect
  },
  setup() {
    const options = [
      {
        label: "option 1",
        id: "id1"
      },
      {
        label: "option 2",
        id: "id2"
      }
    ];
    const modelValue = ref("id1");

    const handleUpdate = (newVal: string) => {
      modelValue.value = newVal;
      console.log(newVal);
    }
    return {
      options,
      modelValue,
      handleUpdate
    }
  }
});
</script>
