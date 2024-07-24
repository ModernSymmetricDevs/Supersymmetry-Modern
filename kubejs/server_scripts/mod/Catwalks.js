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
  // crafting.replaceShaped('catwalks:blowtorch', item('catwalks:blowtorch'), [
  //         [null, null, item('minecraft:flint_and_steel')],
  //         [null, metaitem('stickSteel'), null],
  //         [metaitem('stickSteel'), metaitem('pipeTinyFluidSteel'), null]
  // ])
  // crafting.replaceShaped('catwalks:catwalks/glass_catwalk', item('catwalks:catwalk').withNbt(["material": "glass"]) * 16, [
  //         [ore('paneGlass'), ore('paneGlass'), ore('paneGlass')],
  //         [metaitem('stickSteel'), null, metaitem('stickSteel')],
  //         [metaitem('stickSteel'), ore('paneGlass'), metaitem('stickSteel')]
  // ])
  // crafting.replaceShaped('catwalks:catwalks/classic_catwalk', item('catwalks:catwalk').withNbt(["material": "classic"]) * 16, [
  //         [metaitem('stickIron'), metaitem('stickIron'), metaitem('stickIron')],
  //         [item('minecraft:iron_bars'), null, item('minecraft:iron_bars')],
  //         [item('minecraft:iron_bars'), metaitem('stickIron'), item('minecraft:iron_bars')]
  // ])
  // crafting.replaceShaped('catwalks:catwalks/steel_catwalk', item('catwalks:catwalk').withNbt(["material": "magneticraft_steel"]) * 16, [
  //         [metaitem('stickSteel'), metaitem('stickSteel'), metaitem('stickSteel')],
  //         [item('minecraft:iron_bars'), null, item('minecraft:iron_bars')],
  //         [item('minecraft:iron_bars'), metaitem('stickSteel'), item('minecraft:iron_bars')]
  // ])
  // crafting.replaceShaped('catwalks:catwalks/custom_catwalk', item('catwalks:catwalk').withNbt(["material": "custom_0"]) * 16, [
  //         [item('minecraft:stick'), item('minecraft:stick'), item('minecraft:stick')],
  //         [metaitem('stickSteel'), null, metaitem('stickSteel')],
  //         [metaitem('stickSteel'), item('minecraft:planks'), metaitem('stickSteel')]
  // ])
  // crafting.addShaped('catwalks:catwalks/treated_catwalk', item('catwalks:catwalk').withNbt(["material": "treated_wood"]) * 16, [
  //         [metaitem('stickTreatedWood'), metaitem('stickTreatedWood'), metaitem('stickTreatedWood')],
  //         [metaitem('stickSteel'), null, metaitem('stickSteel')],
  //         [metaitem('stickSteel'), item('gregtech:planks', 1), metaitem('stickSteel')]
  // ])
  // crafting.replaceShaped('catwalks:classic_ladder', item('catwalks:ladder') * 8, [
  //         [metaitem('stickSteel'), null, metaitem('stickSteel')],
  //         [metaitem('stickSteel'), item('minecraft:ladder'), metaitem('stickSteel')],
  //         [metaitem('stickSteel'), null, metaitem('stickSteel')]
  // ])
});