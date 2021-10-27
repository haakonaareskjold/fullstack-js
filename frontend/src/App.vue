<template>
<div>
  <div>
    <form @submit="createMessage">
      <input type="text" v-model="text" />
      <button type="submit">create</button>
    </form>
  </div>
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
    },

    createMessage() {
      fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ text: this.text})
      })
      .then(() => {
        this.text = "",
        this.getMessages;
      })
    }

  },

  mounted() {
    this.getMessages();
  },
}
</script>