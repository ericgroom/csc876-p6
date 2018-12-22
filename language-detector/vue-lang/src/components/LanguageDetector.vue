<template>
  <div>
    <p>I know what you speak</p>
    <input type="text" placeholder="type some text..." v-model="text" @input="getLanguage">
    <p>Language: {{language}}</p>
  </div>
</template>

<script>
export default {
  name: "LanguageDetector",
  data() {
    return {
      loading: false,
      text: "",
      language: null,
      abortController: new AbortController(),
      lastRequest: new Date()
    };
  },
  methods: {
    async getLanguage() {
      // Space out api requests
      const now = new Date();
      if (now.getTime() - this.lastRequest.getTime() < 1000) {
        return;
      }
      this.lastRequest = new Date();
      // abort any current requests
      this.abortController.abort();
      this.loading = true;
      try {
        const res = await fetch(
          `http://apilayer.net/api/detect?access_key=${
            process.env.VUE_APP_LANG_API_KEY
          }&query=${this.text}`,
          { abort: this.abortController }
        );
        const data = await res.json();
        console.log(data);
        this.language = data.results[0].language_name;
        this.loading = false;
      } catch (e) {
        console.error(e);
        this.loading = false;
      }
    }
  },
  mounted() {
    if (!process.env.VUE_APP_LANG_API_KEY && process.env.NODE_ENV !== "test") {
      throw new Error(
        "environment variable VUE_APP_LANG_API_KEY is not set, api requests will not work properly"
      );
    }
  }
};
</script>

<style>
input {
  background-color: #333;
  border: none;
  padding: 2rem;
  margin: 1rem;
  color: #eee;
}
</style>
