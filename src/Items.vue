<template>
  <ul>  
    <li v-for="item in itemStore.state.items" :key="item.id">
      <span>{{item.name}}</span>
      <button @click="itemStore.removeItem(item.id)">delete</button>
    </li>
  </ul>
  <div>
    Total Items: {{itemStore.totalLength}}
  </div>	
</template>

<script>
  export default {
    inject:['itemStore'],
    created(){
      console.log("")
    }
  }
</script>
