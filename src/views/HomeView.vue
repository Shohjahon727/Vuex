<template>
    <div class="container">
      
        <div class="logo-container">
            <a class="d-flex align-items-center link-body-emphasis text-decoration-none">
              <img :src="logo2" alt="Bu yerda logotip turadi"  style="width: 100%; cursor: pointer;" /> 
            </a>
        </div>
    </div>
    
</template>
<style>

</style>
<script>
import Button from '@/ui-components/Button.vue';
import { RouterLink } from 'vue-router';
import {logo2} from '@/constants';
    export default {
      data() {
        return {
          logo2,
        }
      },
    }
</script>