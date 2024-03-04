<template>
  <div class="scrollable">
    <div class="h-5/6">
      <iframe
        src="https://www.youtube.com/embed/0A6hCfFZVj4?si=9ZP5qjgblSoWdYIq"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="w-full h-full"
      ></iframe>
    </div>
    <div>
      <div>Heading</div>
      <div>Text Description</div>
    </div>
  </div>
</template>
<style scoped>
.scrollable {
  height: 100vh; /* Adjust as needed */
  overflow-y: auto;
}
</style>
