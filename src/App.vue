<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <h3 class="text-primary-800 text-lg">HOME</h3>

        <div class="bg-secondary-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          aliquam facilis officiis eum dolor, accusamus soluta deleniti. Autem
          natus eum nulla totam amet temporibus fugiat, modi quas alias, saepe
          minima enim reprehenderit perferendis magnam, voluptate qui beatae ab
          sequi eius harum iusto nemo inventore optio repellat! Facilis numquam
          molestias impedit temporibus accusamus alias, eius placeat explicabo
          quod voluptates, culpa eum nemo! Assumenda in, voluptate possimus
          quasi sed magnam. Ea inventore optio, velit, doloremque commodi
          dolores et deserunt fuga explicabo laudantium itaque reprehenderit
          recusandae fugit accusamus cum consequuntur magnam omnis facere at
          ratione veniam repudiandae tenetur voluptatum. Omnis voluptas
          laudantium ut labore, nihil adipisci illo, voluptatibus inventore
          nesciunt, voluptatum ea eius excepturi quibusdam repellat sequi nobis!
          Nobis voluptate iste minus velit excepturi sit veritatis odio
          assumenda magnam consequuntur optio quod accusamus esse facilis nam
          reprehenderit natus nulla, facere, tempore rem earum tenetur! Beatae
          quos laboriosam doloremque illo reiciendis nesciunt id praesentium,
          velit, possimus, fugit iusto fuga voluptatibus consectetur vitae
          reprehenderit eius officia laudantium facere ad? Dolor soluta dolorum
          maiores alias, unde laudantium, ipsum adipisci quas rerum sed ea
          repellendus impedit velit in quo cupiditate iusto eos amet nostrum
          accusantium. Velit dolorem quis accusamus laudantium rerum magnam
          laboriosam aliquid fugit animi delectus?
        </div>
        <!-- <RouterLink to="/" class="text-sky-500 text-lg">Home</RouterLink> -->
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
