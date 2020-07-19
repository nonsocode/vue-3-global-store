<template>
  <items />
  <item-form />
</template>

<script>
import { itemStore } from "./items-provider"
import Items from './Items.vue'
import ItemForm from './ItemForm.vue'
export default {
  components: {
    Items, ItemForm
  },
  provide: {
    itemStore,
  },
};
</script>
