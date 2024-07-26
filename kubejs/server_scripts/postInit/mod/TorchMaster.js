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
  // crafting.replaceShaped('torchmaster:feral_flare_lantern', item('torchmaster:feral_flare_lantern'), [
  //         [metaitem('plateSteel'), ore('craftingLensGlass'), metaitem('plateSteel')],
  //         [ore('craftingLensGlass'), ore('gtLight'), ore('craftingLensGlass')],
  //         [metaitem('plateSteel'), ore('craftingLensGlass'), metaitem('plateSteel')]
  // ])
  // crafting.replaceShaped('torchmaster:dread_lamp', item('torchmaster:dread_lamp'), [
  //         [item('minecraft:obsidian'), item('minecraft:obsidian'), item('minecraft:obsidian')],
  //         [ore('blockGlass'), item('torchmaster:feral_flare_lantern'), ore('blockGlass')],
  //         [item('minecraft:obsidian'), item('minecraft:obsidian'), item('minecraft:obsidian')]
  // ])
  // crafting.replaceShaped('torchmaster:mega_torch', item('torchmaster:mega_torch'), [
  //         [null, null, null],
  //         [null, item('torchmaster:feral_flare_lantern'), null],
  //         [null, metaitem('stickTreatedWood'), null]
  // ])
  // crafting.replaceShaped('torchmaster:terrain_lighter', item('torchmaster:terrain_lighter'), [
  //         [metaitem('robot.arm.lv'), metaitem('plateStone'), metaitem('robot.arm.lv')],
  //         [metaitem('plateStone'), item('minecraft:chest'), metaitem('plateStone')],
  //         [ore('plankWood'), metaitem('plateStone'), ore('plankWood')]
  // ])
});