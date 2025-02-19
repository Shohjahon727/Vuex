<template>
    <div class="container ">
        <h1 class="text-center">Article</h1>
        <div class="card shadow-sm bg-white rounded">
            <div class="card-header">
                <h5>{{ news.title }}</h5>
            </div>
            <div class="card-body ">
                <p>{{ news.description }}</p>
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a @click="toHomeHandler" class="btn btn-primary">Back to List</a>
            </div>
        </div>
        
        <!-- <div class="d-flex flex-wrap justify-content-around">
            <div class="card p-3 me-3 col" style="background-color:aliceblue; border-radius: 5px; ">
                <p>{{ news.title }}</p>
                <p>{{ news.description }}</p>
            </div>
        </div> -->
    </div>
</template>
<script>
import NewsService from '@/services/NewsService.js'
    export default {
       
        data() {
            return {
                apiService : NewsService,
                news: '',
            }
        },
        methods: {
            toHomeHandler() {
                return this.$router.push({name: 'news'});
            },
        },
        async mounted() {
            let data = this.$route.params.data;
            let shortname = this.$route.params.shortname;
            let response = await NewsService.GetByShortName(shortname,data);
            this.news = response.data;
            console.log(response);
            
        },
       

    }
</script>