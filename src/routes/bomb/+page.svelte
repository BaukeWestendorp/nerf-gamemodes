<script lang="ts">
	import { BombStatus, generateWires, getRandomWire, type WireInfo } from '../../lib/bomb/bomb';
	import Wire from '../../lib/bomb/Wire.svelte';

	const PLANT_TIME = 1;
	const COUNTDOWN_TIME = 10;

	let status = BombStatus.UNPLANTED;
	let plantTimer = -1;
	let countdownTimer = -1;
	let defusing = false;
	let wireToCut: WireInfo;

	let countdown = COUNTDOWN_TIME;
	let wires: (WireInfo | null)[] = [];

	function handleClick() {
		switch (status) {
			case BombStatus.UNPLANTED:
				if (plantTimer !== -1) break;
				plantBomb();
				break;
			case BombStatus.COUNTING_DOWN:
				if (!defusing) {
					defuseBomb();
				}
				break;
			case BombStatus.EXPLODED:
				break;
			case BombStatus.DEFUSED:
				break;
		}
	}

	function plantBomb() {
		status = BombStatus.PLANTING;
		plantTimer = setTimeout(() => {
			status = BombStatus.COUNTING_DOWN;
			startCountdown();
		}, PLANT_TIME * 1000);
	}

	function startCountdown() {
		countdownTimer = setInterval(() => {
			countdown -= 1;

			if (countdown === 0) explode();
		}, 1000);
	}

	function defuseBomb() {
		status = BombStatus.DEFUSING;
		clearInterval(countdownTimer);
		countdown = COUNTDOWN_TIME;
		wires = generateWires(6);
		wireToCut = getRandomWire();
	}

	function explode() {
		clearInterval(countdownTimer);
		status = BombStatus.EXPLODED;
	}

	function cutWire(index: number) {
		if (wires[index]?.label !== wireToCut.label) {
			explode();
		}

		wires[index] = null;

		if (wires.filter((w) => w?.label == wireToCut.label).length === 0) {
			defusedBomb();
		}
	}

	function defusedBomb() {
		status = BombStatus.DEFUSED;
	}
</script>

<div
	class="bomb"
	class:planting={status === BombStatus.PLANTING && plantTimer !== -1}
	class:counting-down={status === BombStatus.COUNTING_DOWN && countdownTimer !== -1}
	class:defusing={status === BombStatus.DEFUSING}
	class:exploded={status === BombStatus.EXPLODED}
	class:defused={status === BombStatus.DEFUSED}
	style="--plant-time: {PLANT_TIME}s; --countdown-time: {COUNTDOWN_TIME}s;"
	on:pointerdown={handleClick}
>
	<div class="overlay" />

	<div class="status">
		{#if status === BombStatus.UNPLANTED}
			<p>Klik om de bom te activeren</p>
		{:else if status === BombStatus.PLANTING}
			<p>Activeren...</p>
		{:else if status === BombStatus.COUNTING_DOWN}
			{countdown}
		{:else if status === BombStatus.EXPLODED}
			<h1>GEËXPLODEERD</h1>
			<p>Boem jonge allemaal dood haahah amateurs ahhh loooserrrssss</p>
			<img
				src="https://bestanimations.com/Military/Explosions/atomic-mushroom-cloud-nuclear-explosion-4-3.gif"
				alt="explosie"
			/>
		{:else if status === BombStatus.DEFUSED}
			<h1>DEFUSED</h1>
			<p>Hahah dat moment dat je bom kapot is gemaakt. Beetje meta wel</p>
			<img
				src="https://1.bp.blogspot.com/-NN1LDIBA5Jg/V0Mo5tQPLCI/AAAAAAAEfB0/RxUQiP-Ucx4aW-gRBTQWRIunbEsTM6qvwCLcB/s400/Fail%2Bgif%2B00157.gif"
				alt="explosie"
			/>
		{/if}
	</div>

	{#if status === BombStatus.DEFUSING}
		<div>
			<h3>Klik op alle {wireToCut.label} draden</h3>
			<div class="defuser">
				{#each wires as wireInfo, i}
					<Wire on:pointerdown={() => cutWire(i)} {wireInfo} />
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.bomb {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: saddlebrown;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.status {
		color: white;
		font-size: 48px;
		font-weight: bold;
		text-align: center;
	}

	.defuser {
		width: 60vw;
		height: 60vh;
		background: #333;
		border: 4px solid #222;
		display: flex;
		justify-content: space-evenly;
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 100%;
		background: #fff4;
	}

	.planting .overlay {
		right: 0;
		transition: right linear var(--plant-time);
	}

	.counting-down .overlay {
		right: 100%;
	}
</style>
