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
  event.remove({ type: 'gtceu:mixer', input: '#forge:dusts/iron' && '#forge:dusts/nickel' && '#forge:dusts/manganese' && '#forge:dusts/chrome' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:mixer', input: '#forge:dusts/iron' && '#forge:dusts/invar' && '#forge:dusts/manganese' && '#forge:dusts/chrome' && 'susy:circuit.integrated'})

  event.recipes.gtceu.electric_blast_furnace('xfdfvz2svsf9uf') // remapped from original line 18
    .itemInputs('6x #forge:dusts/iron')
    .itemInputs('1x #forge:dusts/nickel')
    .itemInputs('2x #forge:dusts/tiny_manganese')
    .outputFluids(safeFluidOf('susy:carburized_stainless_steel', 1440))
    .blastFurnaceTemp(1400)
    .duration(800)
    .EUt(voltAmps[2] * 2)

  event.recipes.gtceu.electric_blast_furnace('f8ssxidoolvkbc') // remapped from original line 28
    .itemInputs('14x #forge:dusts/magnetite')
    .itemInputs('1x #forge:dusts/nickel')
    .itemInputs('2x #forge:dusts/tiny_manganese')
    .outputFluids(safeFluidOf('susy:carburized_stainless_steel', 1440))
    .blastFurnaceTemp(1400)
    .duration(800)
    .EUt(voltAmps[2] * 2)

  event.recipes.gtceu.electric_blast_furnace('uz1o7vujt73j7n') // remapped from original line 38
    .itemInputs('15x #forge:dusts/banded_iron')
    .itemInputs('1x #forge:dusts/nickel')
    .itemInputs('2x #forge:dusts/tiny_manganese')
    .outputFluids(safeFluidOf('susy:carburized_stainless_steel', 1440))
    .duration(800)
    .EUt(voltAmps[2] * 2)

  event.recipes.gtceu.electric_blast_furnace('s6ay5wl22zan34') // remapped from original line 48
    .itemInputs('15x #forge:dusts/iron_iii_oxide')
    .itemInputs('1x #forge:dusts/nickel')
    .itemInputs('2x #forge:dusts/tiny_manganese')
    .outputFluids(safeFluidOf('susy:carburized_stainless_steel', 1440))
    .duration(800)
    .EUt(voltAmps[2] * 2)

  event.recipes.gtceu.electric_blast_furnace('ngfc0rs5m35xfe') // remapped from original line 58
    .itemInputs('30x #forge:dusts/granitic_mineral_sand')
    .itemInputs('1x #forge:dusts/nickel')
    .itemInputs('2x #forge:dusts/tiny_manganese')
    .outputFluids(safeFluidOf('susy:carburized_stainless_steel', 1440))
    .duration(800)
    .EUt(voltAmps[2] * 2)

  event.recipes.susy.//VACUUM('5l2kg0gqmfahtr') // remapped from original line 68

  event.recipes.gtceu.mixer('ubfftzyze7wgbc') // remapped from original line 93
    .circuit(2)
    .itemInputs('1x #forge:dusts/iron')
    .itemInputs('2x #forge:dusts/chrome')
    .itemOutputs('3x #forge:dusts/ferrochromium')
    .duration(100)
    .EUt(voltAmps[1] * 2)

  event.recipes.susy.advanced_arc_furnace('ymi2hfisx9e1n7') // remapped from original line 103
    .inputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .inputFluids(safeFluidOf('gtceu:argon', 500))
    .inputFluids(safeFluidOf('susy:carburized_stainless_steel', 1440))
    .itemInputs('2x #forge:dusts/small_ferrosilicon')
    .itemInputs('3x #forge:dusts/ferrochromium')
    .itemInputs('1x #forge:dusts/small_quicklime')
    .itemInputs('1x #forge:dusts/small_fluorite')
    .outputFluids(safeFluidOf('gtceu:stainless_steel', 1440))
    .duration(400)
    .EUt(voltAmps[2])

  event.recipes.susy.advanced_arc_furnace('cl2dv1sm3m4gtp') // remapped from original line 116
    .inputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .inputFluids(safeFluidOf('gtceu:nitrogen', 1000))
    .inputFluids(safeFluidOf('susy:carburized_stainless_steel', 1440))
    .itemInputs('2x #forge:dusts/small_ferrosilicon')
    .itemInputs('3x #forge:dusts/ferrochromium')
    .itemInputs('1x #forge:dusts/small_quicklime')
    .itemInputs('1x #forge:dusts/small_fluorite')
    .outputFluids(safeFluidOf('gtceu:stainless_steel', 1440))
    .duration(600)
    .EUt(voltAmps[2])

  event.recipes.susy.advanced_arc_furnace('vgllbyee48cmtm') // remapped from original line 131
    .inputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .inputFluids(safeFluidOf('gtceu:argon', 500))
    .inputFluids(safeFluidOf('susy:carburized_stainless_steel', 1440))
    .itemInputs('2x #forge:dusts/vanadium')
    .itemInputs('3x #forge:dusts/ferrochromium')
    .itemInputs('6x #forge:dusts/iron')
    .itemInputs('1x #forge:dusts/small_quicklime')
    .outputFluids(safeFluidOf('gtceu:stainless_steel', 2592))
    .duration(600)
    .EUt(voltAmps[2])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (highPurityCombustible in highPurityCombustibles()) {
  //     EBF.recipeBuilder()
  //     .inputs(ore('dustSiliconDioxide') * 3)
  //     .inputs(ore('dustIron') * 3)
  //     .inputs(ore(highPurityCombustible.name) * highPurityCombustible.equivalent(2))
  //     .outputs(metaitem('dustFerrosilicon') * 4)
  //     .fluidOutputs(fluid('carbon_monoxide') * 2000)
  //     .blastFurnaceTemp(1400)
  //     .duration(200 * highPurityCombustible.duration)
  //     .EUt(Globals.voltAmps[1] * 2)
  //     .buildAndRegister()
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.CarbonGlobals.*
  // import static gregtech.api.unification.material.Materials.*;
  // import gregtech.api.unification.material.MarkerMaterials;
  // import static gregtech.api.unification.ore.OrePrefix.dye;
  // EBF = recipemap('electric_blast_furnace')
  // MIXER = recipemap('mixer')
  // ADVANCED_ARC_FURNACE = recipemap('advanced_arc_furnace')
  //          .blastFurnaceTemp(1400)
  //          .blastFurnaceTemp(1400)
  //          .blastFurnaceTemp(1400)
});