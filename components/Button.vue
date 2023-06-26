<!-- A simple button component with two modifiers, "secondary" and "naked". Both modifiers shouldn't be activated at the same time. I'll look into adding a restriction to the selection. -->

<template>
  <button :class="['button', secondary ? 'button--secondary' : '', naked ? 'button--naked' : '']">
    {{ text ? text : 'Example' }}
  </button>
</template>


<script setup>
  defineProps({
    text: String,
    secondary: Boolean,
    naked: Boolean,
  })
</script>

<style lang="scss" scoped>
  .button{
    font-family: $font-heading;
    font-size: inherit;
    font-weight: bold;
    line-height: inherit;
    letter-spacing: 1.5px;
    text-transform: uppercase;

    padding: 16px 32px;

    cursor: pointer;

    color: white;
    background-color: $color-blue;
    border: solid 2px $color-blue;
    &:hover{
      background-color: $color-navy;
    }


    &--secondary{
      color: $color-blue;
      background-color: white;

      &:hover{
        background-color: #DAF6FA;
      }
    }

    //Might want to add an icon to this button to make it more obvious that it's clickable.
    &--naked{
      background-color: transparent;
      border: solid 2px transparent;

      &:hover{
        background-color: transparent;
      }
    }
  }
</style>
