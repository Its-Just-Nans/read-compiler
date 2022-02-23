<script>
	import showdown from "showdown";
	import showdownHighlight from "showdown-highlight";
	import showdownKatex from "showdown-katex";
	const converter = new showdown.Converter({
		openLinksInNewWindow: true,
		extensions: [
			showdownKatex({
				throwOnError: true,
				displayMode: false,
			}),
			showdownHighlight(),
		],
	});
	converter.setFlavor("github");
	let input = "";
	let output = "";
	let isChecked = true;
	const convert = () => {
		output = converter.makeHtml(input);
	};
</script>

<main>
	<div id="utils">
		<label for="checker">On click change</label>
		<input name="checker" type="checkbox" bind:checked={isChecked} />
		<button
			on:click={() => {
				convert();
			}}
		>
			compile
		</button>
	</div>
	<br />
	<textarea
		bind:value={input}
		on:input={() => {
			console.log(isChecked);
			if (isChecked) {
				convert();
			}
		}}
	/>
	<textarea disabled={true}>{output}</textarea>
</main>

<style>
	#utils {
		text-align: center;
	}
	textarea {
		width: calc(50% - 10px);
		height: 80%;
	}
	main {
		height: 100%;
	}
</style>
