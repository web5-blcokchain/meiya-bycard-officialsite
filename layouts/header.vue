<style lang="scss" scoped></style>

<template>
  <header
    b="0 b-1 gray-2 dark:dark-1 solid" dark="bg-dark bg-opacity-60 text-gray-3" sticky inset-0 z-1000 mx-a w-full
    bg-white bg-opacity-75 backdrop-blur-md
  >
    <nav mx-a h-20 max-w-7xl lg:container>
      <slot name="header" />
    </nav>
  </header>
</template>
