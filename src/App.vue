<template>
  <TodoContainer />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TodoContainer from './components/TodoContainer.vue';

@Options({
  components: {
    TodoContainer
  },
})
export default class App extends Vue {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --base: #f9dfdc;
  --darker-base: #cab4b1;
  --light-blue: #0a81ab;
  --blue: #0c4271;
  --black: #000000;
  --white: #ffffff;
  --border: 1px solid var(--darker-base);
  --box-shadow: 0px 2px 3px 0px var(--darker-base);
  --border-radius: 4px;
  --font-family: 'Poppins', sans-serif;
}

.sr-only {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

body {
  font-family: var(--font-family);
  line-height: 1.4;
  color: var(--black);
  min-height: 100vh;
  background-color: var(--base);
  font-weight: 300;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
}

.inner {
  width: 100%;
  padding: 1rem 10px 4rem;
}

.inner-top {
  margin-bottom: 30px;
}

 .button {
  background: var(--blue);
  padding: 10px 20px;
  cursor: pointer;
  color: var(--white);
  border-radius: var(--border-radius);
  border: none;
  min-height: 45px;
  font-size: 1em;
  font-family: var(--font-family);
 }

 .button:hover{
  background-color: var(--light-blue);
 }

 .button:focus {
   outline: 1px dashed var(--black);
 }

 svg {
  width: 20px;
  height: 20px;
  fill: var(--blue);
  transition: fill 0.3s;
}

button:hover svg,
button:focus svg {
  fill: var(--light-blue);
}

.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
}

.icon-button svg {
  fill: var(--white);
  margin-left: 10px;
  transition: transform .3s;
  transform: scale(.9);
}

.icon-button:hover svg, 
.icon-button:focus svg {
  fill: var(--white);
  transform: scale(1);
}

.input-text {
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
  padding-right: 5px;
  padding-left: 10px;
  height: 45px;
  border: var(--border);
  border-radius: var(--border-radius);
}

.input-text::placeholder {
  color: #000;
}

.about-page {
  display: flex;
  flex-direction: column;
  margin: 50px 16px;
}

.about-page main,
.about-page aside {
  background: var(--white);
  border-radius: var(--border-radius);
  padding: 16px;
}

.about-page ul  {
  padding-left: 20px;
}

.about-page nav ul {
  list-style: none;
  display: flex;
  padding-left: 0;
}

.about-page nav li {
  margin: 0 30px 0 0;
}

.about-page a {
  color: var(--black);
  text-decoration: none;
}

.about-page a.active,
.about-page a:hover,
.about-page a:focus {
  text-decoration: underline;
}

.about-page a.active {
  font-weight: 600;
}

.about-page .section {
  margin: 20px 0;
}

.about-page .section a {
  text-decoration: underline;
}

.about-page .sectionHeading {
  margin-bottom: 10px;
}

.not-found {
  max-width: 600px;
  background: var(--white);
  padding: 16px;
  border-radius: var(--border-radius);
  margin: 20px auto;
  text-align: center;
}

.not-found h1 {
  font-size: 2em;
  margin: 20px 0 30px;
}

@media screen and (min-width: 768px) {

  .about-page {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1000px;
    margin: 50px auto;
  }

  .about-page main {
    flex-basis: 70%;
    
  }
  
  .about-page aside {
    flex-basis: 25%;
  }

  .about-page nav ul {
    flex-direction: column;
  }
  
  .about-page nav li {
    margin: 20px 0;
  }
}

</style>
