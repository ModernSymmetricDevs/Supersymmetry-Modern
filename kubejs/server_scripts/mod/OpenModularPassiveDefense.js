const voltageTiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv", "max"];
const voltageTiersInt = [8, 32, 128, 512, 2048, 8192, 32768, 131072, 524288, 2097152, 8388608, 33554432, 134217728, 536870912, 2147483647];
const voltAmps = [7, 30, 120, 480, 1920, 7680, 30720, 122880, 491520, 1966080, 7864320, 31457280, 125829120, 503316480, 2013265920];

function safeFluidOf(fluidId, amount) {
    if (Fluid.exists(fluidId)) {
        return Fluid.of(fluidId, amount);
    }
    throw new Error(`Fluid ${fluidId} does not exist.`);
}
function safeItemId(itemIdWithQuantifier) {
    const itemId = itemIdWithQuantifier.split(" ")[1];
    if (Item.exists(itemId)) {
        return itemIdWithQuantifier;
    }
    throw new Error(`ItemId ${itemId} does not exist.`);
}

ServerEvents.recipes(event => {

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // crafting.replaceShaped('ompd:hardened_0', item('ompd:hardened') * 8, [
  //         [null, metaitem('plateIron'), null],
  //         [metaitem('plateIron'), item('gregtech:stone_smooth', 4), metaitem('plateIron')],
  //         [null, metaitem('plateIron'), null]
  // ])
  // crafting.replaceShaped('ompd:hardened_1', item('ompd:hardened', 1) * 8, [
  //         [null, metaitem('plateSteel'), null],
  //         [metaitem('plateSteel'), item('ompd:hardened'), metaitem('plateSteel')],
  //         [null, metaitem('plateSteel'), null]
  // ])
  // crafting.replaceShaped('ompd:hardened_2', item('ompd:hardened', 2) * 8, [
  //         [null, metaitem('plateObsidian'), null],
  //         [metaitem('plateObsidian'), item('ompd:hardened', 1), metaitem('plateObsidian')],
  //         [null, metaitem('plateObsidian'), null]
  // ])
  // crafting.replaceShaped('ompd:hardened_3', item('ompd:hardened', 3) * 8, [
  //         [null, metaitem('plateDiamond'), null],
  //         [metaitem('plateDiamond'), item('ompd:hardened', 2), metaitem('plateDiamond')],
  //         [null, metaitem('plateDiamond'), null]
  // ])
  // crafting.replaceShaped('ompd:hardened_4', item('ompd:hardened', 4) * 8, [
  //         [null, metaitem('plateGraphene'), null],
  //         [metaitem('plateGraphene'), item('ompd:hardened', 3), metaitem('plateGraphene')],
  //         [null, metaitem('plateGraphene'), null]
  // ])
  // crafting.replaceShaped('ompd:fence_0', item('ompd:fence') * 16, [
  //         [item('minecraft:iron_bars'), metaitem('stickIron'), item('minecraft:iron_bars')],
  //         [metaitem('stickIron'), item('minecraft:iron_bars'), metaitem('stickIron')],
  //         [item('minecraft:iron_bars'), metaitem('stickIron'), item('minecraft:iron_bars')]
  // ])
  // crafting.replaceShaped('ompd:fence_1', item('ompd:fence', 1) * 16, [
  //         [item('minecraft:iron_bars'), metaitem('stickSteel'), item('minecraft:iron_bars')],
  //         [metaitem('stickSteel'), item('minecraft:iron_bars'), metaitem('stickSteel')],
  //         [item('minecraft:iron_bars'), metaitem('stickSteel'), item('minecraft:iron_bars')]
  // ])
  // crafting.replaceShaped('ompd:fence_2', item('ompd:fence', 2) * 16, [
  //         [item('minecraft:iron_bars'), metaitem('plateObsidian'), item('minecraft:iron_bars')],
  //         [metaitem('plateObsidian'), item('minecraft:iron_bars'), metaitem('plateObsidian')],
  //         [item('minecraft:iron_bars'), metaitem('plateObsidian'), item('minecraft:iron_bars')]
  // ])
  // crafting.replaceShaped('ompd:fence_3', item('ompd:fence', 3) * 16, [
  //         [item('minecraft:iron_bars'), metaitem('plateDiamond'), item('minecraft:iron_bars')],
  //         [metaitem('plateDiamond'), item('minecraft:iron_bars'), metaitem('plateDiamond')],
  //         [item('minecraft:iron_bars'), metaitem('plateDiamond'), item('minecraft:iron_bars')]
  // ])
  // crafting.replaceShaped('ompd:fence_4', item('ompd:fence', 4) * 16, [
  //         [item('minecraft:iron_bars'), metaitem('plateGraphene'), item('minecraft:iron_bars')],
  //         [metaitem('plateGraphene'), item('minecraft:iron_bars'), metaitem('plateGraphene')],
  //         [item('minecraft:iron_bars'), metaitem('plateGraphene'), item('minecraft:iron_bars')]
  // ])
});