<template>
    <div class="container">
        <h1 class="text-center">New Article</h1>
        <div class="row">
            <div v-for="item in news" :key="item.id" class="col-md-4 mb-4">
                <div class="card">
                    <RouterLink class="text-decoration-none" :to="{name:'newsDetails',params:{shortname: item.shortName,data: formatData(item.createdDate)}}">
                            <h4 class="card-title">{{ item.title }}</h4>
                    </RouterLink>
                    <p class="card-text">{{ item.description }}</p>
                    <img :src="logo2" class="card-img-bottom" style="width: 100%;"/>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .card {
        margin: 5px;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
</style>
<script>
import NewsService from '@/services/NewsService.js'
import { RouterLink } from 'vue-router';
import {logo2} from '../constants';
    export default {
        data(){
            return {
                logo2,
                apiService : NewsService,
                news: []
            }
        },
        methods : {
            formatData: function(date) {
                if(!date) return 'N/A';
                return date.split('T')[0]; //Yil/Oy/Kun korinishida qaytaradi
                
            }
        },
        async mounted() {
            let response = await NewsService.getNews();
            this.news = response.data;
            console.log(response);
            
        }
    }
</script>