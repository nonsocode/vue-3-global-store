import { reactive, computed, readonly, unref } from "vue";

const state = reactive({
  items: [],
});

function addItem(todo) {
  state.items.push(todo);
}

function removeItem(id) {
  state.items = state.items.filter((item) => item.id !== id);
}

const totalLength = computed(() => state.items.length);

export const itemStore = readonly({
  state,
  totalLength,
  addItem,
  removeItem,
});
