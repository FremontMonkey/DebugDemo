// Demo file for blog post: Editing Code Right in the Browser
// This demonstrates how you can edit JavaScript directly in Chrome DevTools

function getJoke() {
  joke = "Why did the chicken cross the road? To test hot reloading!";
  joke = joke.replace("chicken", "developer");
  console.log(joke);
}

// You can also add this to window for easy testing in console
if (typeof window !== 'undefined') {
  window.demoFunctions = {
    getJoke
  };
}
