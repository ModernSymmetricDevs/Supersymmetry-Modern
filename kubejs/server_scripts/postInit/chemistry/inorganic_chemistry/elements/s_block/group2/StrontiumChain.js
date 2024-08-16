ServerEvents.recipes(event => {

  event.recipes.susy.gravity_separator('7azjm7oyapdzeo') // remapped from original line 16
    .itemInputs('1x #forge:dusts/celestine')
    .itemOutputs('1x #forge:dusts/sifted_celestine')
    .chancedOutput('2500x #forge:dusts/limestone', 2500, 0)
    .chancedOutput('2500x #forge:dusts/dolomite', 2500, 0)
    .EUt(voltAmps[1])
    .duration(40)

  event.recipes.gtceu.mixer('8qoeiiunnbisxw') // remapped from original line 25
    .itemInputs('8x #forge:dusts/sifted_celestine')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_celestine_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('i66bjniksxy3cb') // remapped from original line 33
    .inputFluids(safeFluidOf('susy:impure_celestine_slurry', 2000))
    .notConsumable(safeFluidOf('susy:methyl_isobutyl_carbinol', 100))
    .notConsumable(safeFluidOf('susy:alkaline_sodium_oleate_solution', 100))
    .outputFluids(safeFluidOf('susy:celestine_slurry', 1000))
    .outputFluids(safeFluidOf('susy:limestone_tailing_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('92kcpaw18gpu2y') // remapped from original line 43
    .inputFluids(safeFluidOf('susy:celestine_slurry', 1000))
    .itemOutputs('16x #forge:dusts/flotated_celestine')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.gtceu.mixer('jr3csnhr90ltxj') // remapped from original line 66
    .itemInputs('4x #forge:dusts/impure_strontium_sulfide')
    .inputFluids(safeFluidOf('susy:gtfo_heated_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_strontium_sulfide_slurry', 2000))
    .EUt(voltAmps[1])
    .duration(100)

  event.recipes.susy.clarifier('nm6kgdmdgaun69') // remapped from original line 74
    .inputFluids(safeFluidOf('susy:impure_strontium_sulfide_slurry', 1000))
    .itemOutputs('1x #forge:dusts/silicon_dioxide')
    .outputFluids(safeFluidOf('susy:strontium_sulfide_solution', 1000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.susy.batch_reactor('qiil65s7lkoy4d') // remapped from original line 82
    .itemInputs('6x #forge:dusts/soda_ash')
    .inputFluids(safeFluidOf('susy:strontium_sulfide_solution', 1000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 4000))
    .itemOutputs('5x #forge:dusts/strontium_carbonate')
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 1000))
    .outputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .EUt(voltAmps[1])
    .duration(100)

  event.recipes.susy.roaster('3spqjzi1evnylo') // remapped from original line 93
    .itemInputs('5x #forge:dusts/strontium_carbonate')
    .itemOutputs('2x #forge:dusts/strontium_oxide')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .EUt(voltAmps[3])
    .duration(20)

  event.recipes.susy.roaster('wor6ink2rr2fli') // remapped from original line 101
    .itemInputs('5x #forge:dusts/strontianite')
    .itemOutputs('2x #forge:dusts/strontium_oxide')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .EUt(voltAmps[3])
    .duration(20)

  event.recipes.susy.reaction_furnace('npcgmmzs4wuyso') // remapped from original line 109
    .itemInputs('2x #forge:dusts/any_purity_aluminium')
    .itemInputs('6x #forge:dusts/strontium_oxide')
    .itemOutputs('3x #forge:dusts/strontium')
    .itemOutputs('5x #forge:dusts/alumina')
    .EUt(voltAmps[2])
    .duration(100)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (fuel in rotary_kiln_fuels) {
  //     for (comburent in rotary_kiln_comburents) {
  //         ROTARY_KILN.recipeBuilder()
  //             .inputs(ore('dustFlotatedCelestine'))
  //             .inputs(ore('dustAnyPurityCarbon') * 2)
  //             .fluidInputs(fluid(fuel.name) * fuel.amountRequired)
  //             .fluidInputs(fluid(comburent.name) * comburent.amountRequired)
  //             .outputs(metaitem('dustImpureStrontiumSulfide') * 2)
  //             .fluidOutputs(fluid('carbon_dioxide') * 2025)
  //             .EUt(Globals.voltAmps[1])
  //             .duration(fuel.duration + comburent.duration)
  //             .buildAndRegister()
  //     }
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.SinteringGlobals.*
  // FLOTATION = recipemap('froth_flotation')
  // ROASTER = recipemap('roaster')
  // BR = recipemap('batch_reactor')
  // BCR = recipemap('bubble_column_reactor')
  // DISTILLERY = recipemap('distillery')
  // MIXER = recipemap('mixer')
  // CLARIFIER = recipemap('clarifier')
  // CENTRIFUGE = recipemap('centrifuge')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // GRAVITY_SEPARATOR = recipemap('gravity_separator')
  // ROTARY_KILN = recipemap('rotary_kiln')
});