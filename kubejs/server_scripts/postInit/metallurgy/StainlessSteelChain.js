ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:mixer', input: '#forge:dusts/iron' && '#forge:dusts/nickel' && '#forge:dusts/manganese' && '#forge:dusts/chrome' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:mixer', input: '#forge:dusts/iron' && '#forge:dusts/invar' && '#forge:dusts/manganese' && '#forge:dusts/chrome' && 'susy:circuit.integrated'})

  event.recipes.gtceu.electric_blast_furnace('l1hmchq89kmu4k') // remapped from original line 18
    .itemInputs('6x #forge:dusts/iron')
    .itemInputs('1x #forge:dusts/nickel')
    .itemInputs('2x #forge:dusts/tiny_manganese')
    .outputFluids(safeFluidOf('susy:carburized_stainless_steel', 1440))
    .blastFurnaceTemp(1400)
    .duration(800)
    .EUt(voltAmps[2] * 2)

  event.recipes.gtceu.electric_blast_furnace('5yeem8nxztixfx') // remapped from original line 28
    .itemInputs('14x #forge:dusts/magnetite')
    .itemInputs('1x #forge:dusts/nickel')
    .itemInputs('2x #forge:dusts/tiny_manganese')
    .outputFluids(safeFluidOf('susy:carburized_stainless_steel', 1440))
    .blastFurnaceTemp(1400)
    .duration(800)
    .EUt(voltAmps[2] * 2)

  event.recipes.gtceu.electric_blast_furnace('equ0nabwojisd3') // remapped from original line 38
    .itemInputs('15x #forge:dusts/banded_iron')
    .itemInputs('1x #forge:dusts/nickel')
    .itemInputs('2x #forge:dusts/tiny_manganese')
    .outputFluids(safeFluidOf('susy:carburized_stainless_steel', 1440))
    .duration(800)
    .EUt(voltAmps[2] * 2)

  event.recipes.gtceu.electric_blast_furnace('sgrm8ccjmiyclt') // remapped from original line 48
    .itemInputs('15x #forge:dusts/iron_iii_oxide')
    .itemInputs('1x #forge:dusts/nickel')
    .itemInputs('2x #forge:dusts/tiny_manganese')
    .outputFluids(safeFluidOf('susy:carburized_stainless_steel', 1440))
    .duration(800)
    .EUt(voltAmps[2] * 2)

  event.recipes.gtceu.electric_blast_furnace('g5fjqc9xzftnex') // remapped from original line 58
    .itemInputs('30x #forge:dusts/granitic_mineral_sand')
    .itemInputs('1x #forge:dusts/nickel')
    .itemInputs('2x #forge:dusts/tiny_manganese')
    .outputFluids(safeFluidOf('susy:carburized_stainless_steel', 1440))
    .duration(800)
    .EUt(voltAmps[2] * 2)

  event.recipes.susy.//VACUUM('eltgfqilthqbva') // remapped from original line 68

  event.recipes.gtceu.mixer('y89yx9fsmrumt3') // remapped from original line 93
    .circuit(2)
    .itemInputs('1x #forge:dusts/iron')
    .itemInputs('2x #forge:dusts/chrome')
    .itemOutputs('3x #forge:dusts/ferrochromium')
    .duration(100)
    .EUt(voltAmps[1] * 2)

  event.recipes.susy.advanced_arc_furnace('lhd2ggjh03jgim') // remapped from original line 103
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

  event.recipes.susy.advanced_arc_furnace('qi4zo8bgx8iknq') // remapped from original line 116
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

  event.recipes.susy.advanced_arc_furnace('8zchzilmmljry8') // remapped from original line 131
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