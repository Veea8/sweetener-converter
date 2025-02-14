<script lang="ts">
    import { sweetnessScale } from "$lib/sweetnessData";

    let from = "sugar";
    let to = "dates";
    let unit = "g";
    let amount = 100;
    let result: string | null = null; 

    function convert() {
        const convertedAmount = ((sweetnessScale[from] / sweetnessScale[to]) * amount).toFixed(0);
        result = convertedAmount;
    }
</script>
  
<main class="flex flex-col items-center bg-pink-100 min-h-screen pt-20">
    <h1 class="text-center text-4xl text-pink-500 mb-4 uppercase font-bold">Sweetener Converter</h1>
    <div class="bg-white rounded-3xl shadow-lg w-100 p-6 px-7">
        <label class="form-label mt-0">From</label>
        <select bind:value={from} class="w-full border border-pink-400 p-1.5 rounded-xl">
            <option value="sugar">Sugar</option>
            <option value="stevia">Stevia</option>
            <option value="honey">Honey</option>
            <option value="dates">Dates</option>
            <option value="maple syrup">Maple Syrup</option>
            <option value="agave syrup">Agave Syrup</option>
        </select>
        <label class="form-label">Amount</label>
        <div class="flex items-center gap-8">
          <input type="number" bind:value={amount} min="1" inputmode="numeric" pattern="[0-9]*" 
            class="w-full border border-pink-400 p-1.5 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-pink-300" />
          <span class="text-gray-600">g</span>
        </div>      
        <label class="form-label">To</label>
        <select bind:value={to} class="w-full border border-pink-400 p-1.5 rounded-xl">
            <option value="dates">Dates</option>
            <option value="sugar">Sugar</option>
            <option value="stevia">Stevia</option>
            <option value="honey">Honey</option>
            <option value="agave syrup">Agave Syrup</option>
            <option value="maple syrup">Maple Syrup</option>
        </select>
        <button on:click={convert} class="w-full bg-pink-500 p-2 rounded-2xl mt-6 text-white text-lg font-semibold py-2 hover:bg-pink-600 transition">Convert</button>
        <div class="flex items-center gap-8 mt-6">
            <p class="form-label mt-1 ml-0">Result</p>
            <p class="border border-pink-400 rounded-xl w-full p-1.5 pl-3">{result ? `${result}g ${to}` : "--"}</p>
        </div>
    </div>
</main>