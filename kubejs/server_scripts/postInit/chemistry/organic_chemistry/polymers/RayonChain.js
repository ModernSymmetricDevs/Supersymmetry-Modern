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

  event.recipes.gtceu.CHEMICAL_BATH('ulnzerzgn1tmkd') // remapped from original line 14
    .itemInputs('4x #forge:dusts/cellulose')
    .inputFluids(safeFluidOf('susy:manganese_ii_sulfate_solution', 50))
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 3000))
    .outputFluids(safeFluidOf('susy:wastewater', 2000))
    .itemOutputs('4x #forge:dusts/alkali_cellulose')
    .duration(200)
    .EUt(240)

  event.recipes.susy.LCR('wyhykzcwugnwka') // remapped from original line 24
    .inputFluids(safeFluidOf('susy:carbon_disulfide', 1000))
    .itemInputs('1x #forge:dusts/alkali_cellulose')
    .itemOutputs('1x #forge:dusts/sodium_cellulose_xanthate')
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.MIXER('ryrvemf39ksbqc') // remapped from original line 32
    .itemInputs('1x #forge:dusts/sodium_cellulose_xanthate')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .outputFluids(safeFluidOf('susy:sodium_cellulose_xanthate_solution', 1000))
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.CHEMICAL_BATH('wwhq6mzefxbpns') // remapped from original line 40
    .notConsumable(metaitem('spinneret'))
    .inputFluids(safeFluidOf('susy:sodium_cellulose_xanthate_solution', 2000))
    .inputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 3000))
    .inputFluids(safeFluidOf('gtceu:air', 1000))
    .outputFluids(safeFluidOf('susy:carbon_disulfide', 2000))
    .outputFluids(safeFluidOf('susy:sodium_sulfate_solution', 1500))
    .outputFluids(safeFluidOf('susy:wastewater', 500))
    .itemOutputs('8x #forge:fibers/wet_rayon')
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.COMPRESSOR('gc10n34p1bva1f') // remapped from original line 53
    .itemInputs('8x #forge:threads/rayon')
    .itemOutputs(safeItemId('1x minecraft:wool'))
    .duration(100)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import gregtech.api.recipes.ModHandler;
  // import gregtech.api.unification.material.Materials;
  // import gregtech.api.unification.ore.OrePrefix;
  // import gregtech.api.unification.stack.UnificationEntry;
  // def POLYMERIZATION = recipemap('polymerization_tank');
  // def CHEMICAL_BATH = recipemap('chemical_bath');
  // def COMPRESSOR = recipemap('compressor');
  // def LCR = recipemap('large_chemical_reactor')
  // def MIXER = recipemap('mixer')
});