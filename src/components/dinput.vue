<template>
  <div class="completion-input-box">
    <span class="input-box-name">{{text}}</span>
    <input 
    type="text" 
    ref="input"
    :value="value"    
    @input="$emit('input', $event.target.value)"
    >
  </div>
</template>


<script>
export default  {
  name:"dinput",
  props:["value",'value']
}
</script>