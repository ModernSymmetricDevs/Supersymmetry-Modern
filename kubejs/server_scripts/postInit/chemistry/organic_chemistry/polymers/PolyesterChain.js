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

  event.recipes.susy.polymerization_tank('z0aofskncjykkc') // remapped from original line 7
    .inputFluids(safeFluidOf('susy:ethylene_glycol', 1000))
    .inputFluids(safeFluidOf('susy:terephthalic_acid', 2592))
    .itemOutputs('2x #forge:dusts/polyethylene_terephthalate')
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.batch_reactor('cpfrgf0jiddyba') // remapped from original line 16
    .itemInputs('2x #forge:dusts/cobalt_oxide')
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 2000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 3000))
    .itemOutputs('18x #forge:dusts/cobalt_ii_acetate')
    .EUt(voltAmps[2])
    .duration(80)

  event.recipes.susy.polymerization_tank('memilp6skzv62y') // remapped from original line 25
    .notConsumable('1x #forge:dusts/cobalt_ii_acetate')
    .inputFluids(safeFluidOf('susy:ethylene_glycol', 1000))
    .inputFluids(safeFluidOf('susy:dimethyl_terephthalate', 3456))
    .itemOutputs('2x #forge:dusts/polyethylene_terephthalate')
    .outputFluids(safeFluidOf('gtceu:methanol', 2000))
    .EUt(voltAmps[2])
    .duration(80)

  event.recipes.gtceu.extruder('fp1o5uwh8uyofm') // remapped from original line 35
    .notConsumable(metaitem('spinneret'))
    .inputFluids(safeFluidOf('susy:polyethylene_terephthalate', 144))
    .itemOutputs('8x #forge:fibers/polyethylene_terephthalate')
    .EUt(480)
    .duration(20)

  event.recipes.gtceu.extruder('doq4nc3hghp9d3') // remapped from original line 43
    .itemInputs('1x #forge:foils/polyethylene_terephthalate')
    .itemOutputs(metaitem('mylar'))
    .EUt(120)
    .duration(10)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // POLYMERIZATION = recipemap('polymerization_tank')
  // BR = recipemap('batch_reactor')
  // EXTRUDER = recipemap('extruder')
  // oreDict.add('foilMylar', metaitem('mylar'))
});