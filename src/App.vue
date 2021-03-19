<template>
  <div>
    <br />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  export default defineComponent({
    name: 'App',
    setup() {
      axios
        .request({
          method: 'post',
          url: '/api/login',
          data: { username: '123' },
          headers: {
            timeout: 5000,
            headers: { 'Content-type': 'application/json;charset=UTF-8' },
          },
        })
        .then((res) => {
          console.log(res);
        });
      return {};
    },
  });
</script>
