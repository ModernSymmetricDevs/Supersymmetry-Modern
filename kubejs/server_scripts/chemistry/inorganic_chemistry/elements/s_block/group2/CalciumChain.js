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

  event.recipes.susy.roaster('sjqjox5kumocjp') // remapped from original line 7
    .itemInputs('8x #forge:dusts/gypsum')
    .itemOutputs('6x #forge:dusts/calcium_sulfate')
    .outputFluids(safeFluidOf('susy:dense_steam', 2000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.roaster('eexl5qeomm7h5q') // remapped from original line 15
    .circuit(1)
    .itemInputs('6x #forge:dusts/calcium_sulfate')
    .itemOutputs('2x #forge:dusts/quicklime')
    .outputFluids(safeFluidOf('gtceu:sulfur_trioxide', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.vacuum_distillation('zpak1a26s802gd') // remapped from original line 24
    .itemInputs('1x #forge:dusts/calcium')
    .itemOutputs('1x #forge:dusts/high_purity_calcium')
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.ELECTROLYZER('yxqvjuvp2glpo6') // remapped from original line 31
    .notConsumable(metaitem('graphite_electrode'))
    .notConsumable('1x #forge:rods/steel')
    .inputFluids(safeFluidOf('gtceu:calcium_chloride', 432))
    .outputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .itemOutputs('1x #forge:dusts/calcium')
    .EUt(30)
    .duration(300)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // ROASTER = recipemap('roaster')
  // EBF = recipemap('electric_blast_furnace')
  // BR = recipemap('batch_reactor')
  // DISTILLERY = recipemap('distillery')
  // VACUUM_DT = recipemap('vacuum_distillation')
});