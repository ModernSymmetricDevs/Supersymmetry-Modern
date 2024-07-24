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

  event.recipes.gtceu.assembler('inna2gsehap2ov') // remapped from original line 39
    .itemInputs(ore('stone'))
    .itemInputs(safeItemId('6x minecraft:stone_slab'))
    .itemOutputs(safeItemId('32x xtones:base'))
    .duration(20)
    .EUt(7)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // crafting.replaceShaped('xtones:zome', item('xtones:zome') * 8, [
  //         [item('xtones:base'), item('xtones:base'), item('xtones:base')],
  //         [item('xtones:base'), ore('cobblestone'), item('xtones:base')],
  //         [item('xtones:base'), item('xtones:base'), item('xtones:base')]
  // ])
  // crafting.replaceShaped('xtones:zoea', item('xtones:zoea') * 8, [
  //         [item('xtones:base'), item('xtones:base'), item('xtones:base')],
  //         [item('xtones:base'), ore('wool'), item('xtones:base')],
  //         [item('xtones:base'), item('xtones:base'), item('xtones:base')]
  // ])
  // crafting.replaceShaped('xtones:iszm', item('xtones:iszm') * 8, [
  //         [item('xtones:base'), item('xtones:base'), item('xtones:base')],
  //         [item('xtones:base'), ore('stone'), item('xtones:base')],
  //         [item('xtones:base'), item('xtones:base'), item('xtones:base')]
  // ])
  // crafting.replaceShaped('xtones:lair', item('xtones:lair') * 8, [
  //         [item('xtones:base'), item('xtones:base'), item('xtones:base')],
  //         [item('xtones:base'), ore('netherrack'), item('xtones:base')],
  //         [item('xtones:base'), item('xtones:base'), item('xtones:base')]
  // ])
  // crafting.replaceShaped('xtones:vena', item('xtones:vena') * 8, [
  //         [item('xtones:base'), item('xtones:base'), item('xtones:base')],
  //         [item('xtones:base'), ore('plankWood'), item('xtones:base')],
  //         [item('xtones:base'), item('xtones:base'), item('xtones:base')]
  // ])
  // crafting.replaceShaped('xtones:base', item('xtones:base') * 32, [
  //         [ore('slabStone'), ore('slabStone'), null],
  //         [ore('slabStone'), ore('stone'), ore('slabStone')],
  //         [null, ore('slabStone'), ore('slabStone')]
  // ])
  // ASSEMBLER = recipemap('assembler')
});