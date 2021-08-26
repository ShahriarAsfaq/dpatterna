<script>
    import { remoteSwitch } from "./command_provider";
  
    let selected = "Off";
    let buttons = ["On", "Off","Increase","Decrease", "RedLight"];
  
    $: rswitch = remoteSwitch(selected);
  
    $: src = `./images/remote_command/${rswitch}.png`;
  
  </script>
  
  <style>
    img {
      max-width: 100%;
      max-height: 100%;
    }
    .portrait {
      height: 300px;
      width: 500px;
    }
  
  </style>
  
  <h1>Remote Control bulb</h1>
  
  <h2>Buttons</h2>
  
  <select bind:value={selected}>
    {#each buttons as btn}
      <option value={btn}>{btn}</option>
    {/each}
  </select>
  <p>Bulb is {selected}</p>
  
  <div class="portrait"><img {src} alt={selected} /></div>