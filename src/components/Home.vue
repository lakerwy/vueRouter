<template>
    <div id="home">
        <h3>{{title}}</h3>
        <ul>
            <li v-for="(item,index) in items" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data(){
        return{
            title: '这是一个首页',
            items: [111,222,333]
        }
    }
}
</script>

<style scoped>
* {margin: 0; padding: 0;}
#home {width: 400px; height: 400px; border: 1px solid red; margin: 0 auto;}
#home li {list-style: none;}
</style>