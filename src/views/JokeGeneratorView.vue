<template>
  <div class="joke-generator">
    <h1>Joke Generator</h1>
    <button class="joke-btn" @click="fetchJoke">Generate Joke</button>
    <div v-if="joke" class="joke-output">
      <div>{{ joke }}</div>
      <div class="joke-actions">
        <button class="thumb-btn" @click="likeJoke" title="Like">👍</button>
        <button class="thumb-btn" @click="dislikeJoke" title="Dislike">👎</button>
      </div>
    </div>
    <div class="liked-list" v-if="likedJokes.length">
      <h2>Liked Jokes</h2>
      <ul class="liked-list-ul">
        <li v-for="(j, index) in likedJokes" :key="j.id" class="liked-joke">
          <span class="joke-num">{{ index + 1 }}.</span>
          <span class="joke-text">{{ j.text }}</span>
          <button class="delete-btn" @click="removeJoke(index)" title="Delete">🗑️</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { ref } from 'vue'

export default {
  // No draggable component needed
  setup() {
    const joke = ref('')
    const likedJokes = ref([])

    async function fetchJoke() {
      joke.value = ''
      try {
        const res = await fetch('https://official-joke-api.appspot.com/random_joke')
        const data = await res.json()
        joke.value = data.setup + ' ' + data.punchline
      } catch (e) {
        joke.value = 'Failed to fetch joke.'
      }
    }

    function likeJoke() {
      if (!joke.value) return
      // Prevent duplicates
      if (!likedJokes.value.some(j => j.text === joke.value)) {
        likedJokes.value.push({ id: Date.now() + Math.random(), text: joke.value })
      }
      joke.value = ''
    }

    function dislikeJoke() {
      joke.value = ''
    }

    function removeJoke(idx) {
      likedJokes.value.splice(idx, 1)
    }


    return {
      joke,
      likedJokes,
      fetchJoke,
      likeJoke,
      dislikeJoke,
      removeJoke
    }
  }
}
</script>

<style scoped>
.joke-generator {
  max-width: 480px;
  margin: 3rem auto;
  padding: 2.5rem 2rem;
  background: #4F436F;
  border-radius: 1.2rem;
  box-shadow: 0 2px 16px 0 rgba(76, 70, 109, 0.08);
  text-align: center;
  font-family: 'Google Play', 'Raleway', Arial, sans-serif;
}
.joke-generator h1 {
  color: #ECA72C;
  font-family: 'Raleway', Arial, sans-serif;
  margin-bottom: 2rem;
  font-size: 2rem;
}
.joke-btn {
  background: #663c7c;
  color: #fff;
  border: none;
  padding: 0.9rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  font-family: inherit;
  margin-bottom: 2rem;
  transition: background 0.2s, color 0.2s;
}
.joke-btn:hover {
  background: #EAE6EF;
  color: #4F436F;
}
.joke-output {
  margin-top: 1.5rem;
  background: #f8f8f8;
  color: #4F436F;
  border-radius: 0.7rem;
  padding: 1.2rem;
  font-size: 1.15rem;
  font-family: 'Raleway', Arial, sans-serif;
  box-shadow: 0 1px 8px 0 rgba(76, 70, 109, 0.06);
  position: relative;
}
.joke-actions {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}
.thumb-btn {
  background: #ECA72C;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.3rem;
  cursor: pointer;
  transition: background 0.2s;
}
.thumb-btn:hover {
  background: #E6C229;
}
.liked-list {
  margin-top: 2.5rem;
  background: #fff2;
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
}
.liked-list h2 {
  color: #ECA72C;
  font-family: 'Raleway', Arial, sans-serif;
  margin-bottom: 1.2rem;
}
.liked-list-ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.liked-joke {
  display: flex;
  align-items: center;
  background: #fff4;
  border-radius: 0.6rem;
  margin-bottom: 0.7rem;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  color: #4F436F;
}
.joke-num {
  font-weight: bold;
  margin-right: 0.7rem;
  color: #ECA72C;
}
.joke-text {
  flex: 1;
}
.delete-btn {
  background: transparent;
  border: none;
  color: #ECA72C;
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 0.7rem;
  transition: color 0.2s;
}
.delete-btn:hover {
  color: #E6C229;
}
</style>

