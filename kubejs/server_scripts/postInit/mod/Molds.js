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

  event.recipes.susy.FORMINGPRESS('fgt22f2i0asby2') // remapped from original line 10
    .itemInputs(metaitem('shape.empty'))
    .notConsumable(metaitem('shape.mold.rod'))
    .itemOutputs(metaitem('shape.mold.rod'))
    .duration(120)
    .EUt(22)

  event.recipes.susy.FORMINGPRESS('ovpc0ikvsogwbp') // remapped from original line 25
    .itemInputs(metaitem('shape.empty'))
    .notConsumable(metaitem('shape.mold.crucible'))
    .itemOutputs(metaitem('shape.mold.crucible'))
    .duration(120)
    .EUt(22)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // def FORMINGPRESS = recipemap('forming_press')
  // crafting.addShaped("mold_rod", metaitem('shape.mold.rod'), [
  //     [metaitem('shape.empty'), item('gregtech:hammer'), null],
  //     [null, null, null],
  //     [null, null, null]
  // ])
  // crafting.addShaped("mold_crucible", metaitem('shape.mold.crucible'), [
  //     [metaitem('shape.empty'), null, null],
  //     [null, null, null],
  //     [null, null, item('gregtech:hammer')]
  // ])
});