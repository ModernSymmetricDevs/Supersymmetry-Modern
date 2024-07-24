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
  event.remove({ type: 'minecraft:furnace', input: 'minecraft:slime_ball'})
  event.remove({ type: 'gtceu:fluid_solidifier', input: 'susy:shape.mold.ball' && safeFluidOf('susy:gtfo_rubber_sap')})

  event.recipes.gtceu.DISTILLERY('czycb0wgyo9rcv') // remapped from original line 20
    .inputFluids(safeFluidOf('gtceu:resin', 100))
    .outputFluids(safeFluidOf('gtceu:glue', 75))
    .duration(15)
    .EUt(30)

  event.recipes.gtceu.FLUID_SOLIDIFIER('m4vpromf6lf6bz') // remapped from original line 27
    .inputFluids(safeFluidOf('gtceu:resin', 250))
    .itemOutputs(metaitem('rubber_drop'))
    .duration(20)
    .EUt(2)

  event.recipes.gtceu.CENTRIFUGE('grxckhrpodhptu') // remapped from original line 34
    .itemInputs(metaitem('rubber_drop'))
    .outputFluids(safeFluidOf('gtceu:resin', 250))
    .duration(40)
    .EUt(7)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // crafting.addShaped('gregtech:resin_item', metaitem('rubber_drop') * 4, [
  //         [null, null, null],
  //         [null, fluid('resin') * 1000, null],
  //         [null, metaitem('shape.mold.ball').reuse(), null]
  // ])
  // def DISTILLERY = recipemap('distillery');
  // def CENTRIFUGE = recipemap('centrifuge');
  // def FLUID_SOLIDIFIER = recipemap('fluid_solidifier');
});