<script lang="ts">
    import "$lib/style/main.css";
    import {base} from '$app/paths';
</script>

<svelte:head>
    <link rel="manifest" href="{base}/manifest.webmanifest" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
</svelte:head>

<slot>
</slot>