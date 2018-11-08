<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-event:click="clickHandler">Click me!</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            clickHandler() {
                alert('hello!')
            }
        }
    }
</script>

<style>
</style>
