<script lang="ts">
	import { capturingTeam } from '../koth';

	export let name: string;
	export let color: string;

	const POINTS_PER_SECOND = 10;
	const SECONDS_PER_SESSION = 5;
	const pointsPerSession = POINTS_PER_SECOND * SECONDS_PER_SESSION;

	let score = 0;

	let lastClickMillis = 0;
	let timer = -1;
	let pointsLeft = 0;

	function startCapturing() {
		lastClickMillis = Date.now();
		stopCapturing();
		pointsLeft = pointsPerSession;
		$capturingTeam = name;

		timer = setInterval(() => {
			score++;
			pointsLeft--;

			if (pointsLeft <= 0 || $capturingTeam !== name) stopCapturing();
		}, 1000 / POINTS_PER_SECOND);
	}

	function stopCapturing() {
		clearInterval(timer);
		pointsLeft = 0;
	}

	$: capturingProgress = pointsLeft / pointsPerSession;
</script>

<div
	class:capturing={pointsLeft > 0}
	class="team"
	style="--color: {color}; --capturing-progress: {capturingProgress};"
	on:pointerdown={startCapturing}
>
	<div>
		<h3>{score}</h3>
	</div>
	<div class="overlay" />
</div>

<style>
	.team {
		position: relative;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		font-size: 96px;

		background: var(--color);
	}

	.overlay {
		position: absolute;
		inset: 0;
		left: 100%;
		background: #fff4;
	}

	.capturing .overlay {
		left: calc(100% - 100% * var(--capturing-progress));
	}
</style>
