<template>
<div>
  <div v-for="message in messages" :key="message.text">
    <h3>{{ message.text }}</h3>
  </div>
</div>
</template>

<script>

export default {
  name: "App",

  data() {
    return {
      messages: [],
    }
  },

  methods: {

    getMessages() {
      fetch("http://localhost:3000/messages")
      .then((res) => res.json())
      .then((data) => (this.messages = data.messages))
    }

  },

  mounted() {
    this.getMessages();
  },
}
</script>