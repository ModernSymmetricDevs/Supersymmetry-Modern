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
  // for (name in name_removals) {
  //     crafting.remove(name)
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // def name_removals = [
  //     'bdsandm:upgrade_void',
  //     'bdsandm:wood_crate'
  // ]
  // crafting.replaceShaped('bdsandm:crate_key_c', item('bdsandm:crate_key'), [
  //     [ore('plateIron'), ore('plateIron'), null],
  //     [ore('plateIron'), ore('craftingToolFile'), null],
  //     [item('bdsandm:wood_crate'), null, null]
  // ])
  // crafting.replaceShaped('bdsandm:crate_key_b', item('bdsandm:crate_key'), [
  //     [ore('plateIron'), ore('plateIron'), null],
  //     [ore('plateIron'), ore('craftingToolFile'), null],
  //     [item('bdsandm:wood_barrel'), null, null]
  // ])
  // crafting.replaceShaped('bdsandm:shipping_c', item('bdsandm:shipping_container'), [
  //     [ore('plateSteel'), ore('plateSteel'), ore('plateSteel')],
  //     [ore('frameGtSteel'), item('bdsandm:metal_crate'), ore('frameGtSteel')],
  //     [ore('plateSteel'), ore('plateSteel'), ore('plateSteel')]
  // ])
  // crafting.replaceShaped('bdsandm:shipping_b', item('bdsandm:shipping_container'), [
  //     [ore('plateSteel'), ore('plateSteel'), ore('plateSteel')],
  //     [ore('frameGtSteel'), item('bdsandm:metal_barrel'), ore('frameGtSteel')],
  //     [ore('plateSteel'), ore('plateSteel'), ore('plateSteel')]
  // ])
});