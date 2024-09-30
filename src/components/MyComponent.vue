<template>
    <div class="myComponent">
        <h1 v-bind:class= "{highlinghted: isHighlingted}">{{ title }}</h1>
      <button @click="toggleHighlinght">Toggle Visibility</button>
      <input v-model="message" />
     </div>

    <ul>
        <li v-for="item in list" :key="item.id">{{ item.text }}</li>
    </ul>
</template>

<style scoped>
.highlinghted {
    color: gold;
} </style>



<script>


export default {
    name: 'myComponent',
    data() {
        return {
            message: 'Hello World!',
            title: 'This is the title',
            isHighlingted:false,
            isVisible: true,
            list: [{id:1, text: 'First item'}, {id:2, text: 'Second item'}, {id:3, text: 'Third item'}]
        }
    }, methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        }, sayHello() {
            alert('Hello!');
        },toggleHighlinght() {
            this.isHighlingted = !this.isHighlingted;
        }
    }
}
</script>
