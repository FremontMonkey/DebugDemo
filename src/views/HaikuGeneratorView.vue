<template>
  <div class="haiku-generator">
    <h1>Haiku Generator</h1>
    <form @submit.prevent="generateHaiku" class="haiku-form">
      <input
        v-model="input"
        type="text"
        placeholder="Enter a word or phrase..."
        class="haiku-input"
      />
      <button type="submit" class="haiku-btn">Generate</button>
    </form>
    <div v-if="haiku" class="haiku-output">
      <pre>{{ haiku }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')
const haiku = ref('')

function generateHaiku() {
  const subject = input.value.trim() || 'nature'
  // Simple haiku templates
  const templates = [
    [
      `Whispers of ${subject},`,
      'Softly through the morning mist,',
      'Dreams awake anew.'
    ],
    [
      `${subject} in the breeze,`,
      'Petals dance on gentle winds,',
      'Springtime memories.'
    ],
    [
      `Under ${subject} sky,`,
      'Silent stars begin to sing,',
      'Night embraces all.'
    ],
    [
      `Echoes of ${subject},`,
      'Rippling across still waters,',
      'Peace in every wave.'
    ],
    [
      `${subject} calls softly,`,
      'Leaves shimmer in golden light,',
      'A moment of calm.'
    ]
  ]
  const chosen = templates[Math.floor(Math.random() * templates.length)]
  haiku.value = chosen.join('\n')
}
</script>

<style scoped>
.haiku-generator {
  max-width: 420px;
  margin: 2rem auto;
  padding: 2rem;
  background: #4F436F;
  border-radius: 1.2rem;
  box-shadow: 0 2px 16px 0 rgba(76, 70, 109, 0.08);
  text-align: center;
  font-family: 'Google Play', 'Raleway', Arial, sans-serif;
}
.haiku-generator h1 {
  color: var(--color-accent);
  font-family: 'Raleway', Arial, sans-serif;
  margin-bottom: 1.5rem;
  font-size: 2rem;
}
.haiku-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.haiku-input {
  width: 100%;
  max-width: 350px;
  padding: 0.7rem 1rem;
  border: 1px solid var(--color-muted);
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: inherit;
}
.haiku-btn {
  background: var(--color-highlight);
  color: #fff;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s;
}
.haiku-btn:hover {
  background: var(--color-accent);
}
.haiku-output {
  margin-top: 2rem;
  background: var(--color-background-soft, #f8f8f8);
  color: var(--color-secondary);
  border-radius: 0.7rem;
  padding: 1.2rem;
  font-size: 1.1rem;
  font-family: 'Raleway', Arial, sans-serif;
  white-space: pre-line;
  box-shadow: 0 1px 8px 0 rgba(76, 70, 109, 0.06);
}
</style>
