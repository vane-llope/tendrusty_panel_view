<template>
  <div class="container-fluid my-5">
    <form @submit.prevent="submitForm" class="mx-auto p-5 bg-white rounded-20" >
      <h2 class="text-center fw-bold">{{ title }}</h2>
      <div v-for="(field, index) in fields" :key="index">
        <div class="mb-3 mt-5">
          <label v-if="field.label != 'hidden'" :for="field.name">{{ field.label }}</label>
          <select v-model="userInputs[field.name]" v-if="field.type == 'select'" class="form-select" @change="emitUserInputs">
            <option selected></option>
            <option v-for="(option, index) in field.options" :key="index" :value="option.id">{{ option.info }}</option>
          </select>

          <textarea v-else-if="field.type == 'textarea'" :name="field.name" v-model="userInputs[field.name]"
            class="form-control shadow-none" @input="emitUserInputs"></textarea>
          <select2extended v-else-if="field.type == 'select2extended'" :field="field" :items="userInputs" @update-items="handleUpdateItems" />
          <input v-else :type="field.type" :name="field.name" v-model="userInputs[field.name]"
            class="form-control shadow-none" @input="emitUserInputs" required>
        </div>
      </div>
      <slot></slot>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import select2extended from "./select2extended.vue";

export default {
  name: "DynamicForm",
  components: { select2extended },
  props: {
    title: {
      type: String,
      required: true,
    },
    fields: {
      type: Array,
      required: true,
    },
    axiosData: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const userInputs = ref(
      props.fields.reduce((acc, field) => {
        acc[field.name] = field.type === "select2extended" ? [] : "";
        return acc;
      }, {})
    );

    const handleUpdateItems = (payload) => {
      Object.keys(payload.items).forEach((key) => {
        userInputs.value[key] = payload.items[key];
      });
      emitUserInputs();
    };

    const emitUserInputs = () => {
      emit("update:userInputs", userInputs.value);
    };

    return {
      userInputs,
      handleUpdateItems,
      emitUserInputs,
    };
  },
};
</script>
