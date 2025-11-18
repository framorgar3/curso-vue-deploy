<template>
    <h1 className="text-3xl font-bold underline">Welcome to My Vue App</h1>
    <hr />

    <MyCounter :initialValue="5" :text="'Con setup'"/>
    <MyCounterScript :initialValue="10" :text="'Sin setup'"/>
    <MyCounterScript2 :initialValue="15" :text="'Logica separada SFC'"/>
</template>

<script lang="ts" setup>
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounter from './components/MyCounter.vue';


</script>
