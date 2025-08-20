<template>
  <div class="joke-generator">
    <h1>Joke Generator 😂</h1>
    <button class="joke-btn" @click="fetchJoke">Generate Joke</button>
    <div v-if="joke" class="joke-output">
      <div>{{ joke }}</div>
      <div class="joke-actions">
        <button class="thumb-btn like-btn" @click="likeJoke" title="Like">👍🏻</button>
        <button class="thumb-btn dislike-btn" @click="dislikeJoke" title="Dislike">👎🏻</button>
      </div>
    </div>
    <div class="liked-list" v-if="likedJokes.length">
      <div class="liked-header">
        <h2>Liked Jokes ({{ likedJokes.length }}) - Drag to Reorder</h2>
        <button class="clear-all-btn" @click="clearAllJokes" title="Clear All Jokes">Clear All</button>
      </div>
      <ul ref="sortableRef" class="liked-list-ul">
        <li v-for="(element, index) in likedJokes" :key="element.id" class="liked-joke">
          <span class="drag-handle">⋮⋮</span>
          <span class="joke-num">{{ index + 1 }}.</span>
          <span class="joke-text">{{ element.text }}</span>
          <button class="delete-btn" @click="removeJoke(index)" title="Delete">🗑️</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { ref, onMounted, watch, nextTick } from 'vue'
import Sortable from 'sortablejs'

export default {
  setup() {
    const joke = ref('')
    const likedJokes = ref([])
    const STORAGE_KEY = 'liked-jokes'
    const sortableRef = ref(null)
    let sortableInstance = null

    // Initialize sortable after component is mounted
    const initSortable = async () => {
      await nextTick()
      if (sortableRef.value && !sortableInstance) {
        sortableInstance = new Sortable(sortableRef.value, {
          animation: 200,
          ghostClass: 'ghost',
          chosenClass: 'chosen',
          handle: '.drag-handle',
          onEnd(evt) {
            const oldIndex = evt.oldIndex
            const newIndex = evt.newIndex

            if (oldIndex !== undefined && newIndex !== undefined && oldIndex !== newIndex) {
              // Reorder the reactive array
              const movedItem = likedJokes.value.splice(oldIndex, 1)[0]
              likedJokes.value.splice(newIndex, 0, movedItem)
            }
          }
        })
      }
    }

    // Load liked jokes from localStorage on component mount
    onMounted(async () => {
      const savedJokes = localStorage.getItem(STORAGE_KEY)
      if (savedJokes) {
        try {
          likedJokes.value = JSON.parse(savedJokes)
        } catch (e) {
          console.warn('Failed to parse saved jokes from localStorage')
        }
      }

      // Initialize sortable after data is loaded
      await initSortable()
    })

    // Watch for changes to likedJokes and save to localStorage
    watch(likedJokes, (newJokes) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newJokes))
      // Don't reinitialize sortable here - it causes infinite loops
      // The sortable instance will handle the DOM updates automatically
    }, { deep: true })

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

    function clearAllJokes() {
      likedJokes.value = []
    }

    return {
      joke,
      likedJokes,
      sortableRef,
      fetchJoke,
      likeJoke,
      dislikeJoke,
      removeJoke,
      clearAllJokes
    }
  }
}
</script>

<style scoped>
body {
  background: #f7f9fb;
  font-family: 'Inter', 'Raleway', Arial, sans-serif;
}
.joke-generator {
  width: 100%;
  max-width: 720px;
  margin: 3rem auto;
  padding: 2.5rem 2rem;
  background: #EAE6EF;
  border-radius: 1.2rem;
  box-shadow: 0 4px 24px 0 rgba(26,35,126,0.10);
  text-align: center;
  font-family: inherit;
  display: block;
}
.joke-generator h1 {
  color: #1A237E;
  font-family: inherit;
  margin-bottom: 2rem;
  font-size: 2.1rem;
  font-weight: 700;
  letter-spacing: -1px;
  text-decoration: underline;
}
.joke-btn {
  background: #2979FF;
  color: #fff;
  border: none;
  padding: 1rem 2.2rem;
  border-radius: 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px 0 rgba(41,121,255,0.10);
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
}
.joke-btn:hover {
  background: #1A237E;
  color: #FFD600;
  box-shadow: 0 4px 16px 0 rgba(41,121,255,0.18);
}
.joke-output {
  margin-top: 1.5rem;
  background: #fff;
  color: #1A237E;
  border-radius: 1rem;
  padding: 1.2rem;
  font-size: 1.15rem;
  font-family: inherit;
  box-shadow: 0 1px 8px 0 rgba(26,35,126,0.06);
  position: relative;
}
.joke-actions {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}
.thumb-btn {
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
}
.like-btn {
  background: #4CAF50;
  color: #fff;
}
.like-btn:hover {
  background: #45a049;
}
.dislike-btn {
  background: #F44336;
  color: #fff;
}
.dislike-btn:hover {
  background: #da190b;
}
.liked-list {
  margin-top: 2.5rem;
  background: #EAE6EF;
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  width: 100%;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 2px 12px 0 rgba(26,35,126,0.08);
  display: block;
}
.liked-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
}
.liked-list h2 {
  color: #1A237E;
  font-family: inherit;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
}
.clear-all-btn {
  background: #FF5722;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  font-family: inherit;
}
.clear-all-btn:hover {
  background: #D32F2F;
}
.liked-list-ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.liked-joke {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 0.6rem;
  margin-bottom: 0.7rem;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  color: #1A237E;
  box-shadow: 0 1px 4px 0 rgba(26,35,126,0.04);
  cursor: grab;
  transition: all 0.3s ease;
}
.liked-joke:active {
  cursor: grabbing;
}
.drag-handle {
  color: #2979FF;
  font-size: 1.1rem;
  margin-right: 0.5rem;
  cursor: grab;
  user-select: none;
}
.drag-handle:hover {
  color: #1A237E;
}
.ghost {
  opacity: 0.5;
  background: #f0f0f0;
}
.chosen {
  transform: scale(1.02);
  box-shadow: 0 4px 12px 0 rgba(26,35,126,0.15);
}
.joke-num {
  font-weight: bold;
  margin-right: 0.7rem;
  color: #2979FF;
}
.joke-text {
  flex: 1;
}
.delete-btn {
  background: transparent;
  border: none;
  color: #2979FF;
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 0.7rem;
  transition: color 0.2s;
}
.delete-btn:hover {
  color: #FFD600;
}
</style>
