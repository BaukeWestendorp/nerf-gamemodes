<script lang="ts">
    import Team from '../lib/koth/Team.svelte';
</script>

<div class="teams">
    <Team name="Red" color="red"/>
    <Team name="Blue" color="blue"/>
</div>

<style>
    .teams {
        display: grid;
        grid-template-columns: repeat(2, 0.5fr);
        width: 100vw;
        height: 100vh;
    }
</style>