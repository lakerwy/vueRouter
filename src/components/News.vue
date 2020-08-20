<template>
    <div id="news">
        <h3>{{title}}</h3>
        <input type="button" :value="'按钮'+(index+1)" v-for="(item,index) in items" :key="item" @click="nowIndex=index">
        <!-- <div v-for="(item,index) in items" :key="index" v-show="nowIndex==index">{{item}}</div> -->
        <div v-for="(item,index) in items" :key="index" :style="{display: nowIndex==index?'block':'none'}">{{item}}</div>
    </div>
</template>

<script>
export default {
    name: 'News',
    data(){
        return{
            nowIndex: 0,
            title: '新闻页面',
            items:[
                '新闻1',
                '新文2',
                '新闻3'
            ]
        }
    }
}
</script>

<style scoped>
#news {width: 200px; height: 200px; border: 1px solid black; margin: 0 auto; position: relative;}
#news div {width: 100px;height: 100px;background: yellow; position: absolute; left: 50px;}
</style>