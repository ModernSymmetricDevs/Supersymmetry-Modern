ServerEvents.recipes(event => {

  event.recipes.gtceu.mixer('4b0m0t9njuxjlh') // remapped from original line 17
    .itemInputs('8x #forge:dusts/impure_pollucite')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_pollucite_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('wtvfrpotmu3ypx') // remapped from original line 25
    .inputFluids(safeFluidOf('susy:impure_pollucite_slurry', 2000))
    .inputFluids(safeFluidOf('susy:aluminium_sulfate_solution', 50))
    .notConsumable(safeFluidOf('susy:coco_amine_acetate', 1000))
    .notConsumable(safeFluidOf('gtceu:sulfuric_acid', 100))
    .outputFluids(safeFluidOf('susy:pollucite_slurry', 1000))
    .outputFluids(safeFluidOf('susy:pegmatite_tailing_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('cbm54y0jkj1od7') // remapped from original line 36
    .inputFluids(safeFluidOf('susy:pollucite_slurry', 1000))
    .itemOutputs('16x #forge:dusts/pollucite')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.gtceu.chemical_bath('y4n0spetdbsbf8') // remapped from original line 44
    .itemInputs('1x #forge:dusts/pollucite')
    .inputFluids(safeFluidOf('susy:hot_sulfuric_acid', 4000))
    .itemOutputs('12x #forge:dusts/silicon_dioxide')
    .outputFluids(safeFluidOf('susy:pollucite_leach', 4000))
    .EUt(voltAmps[2])
    .duration(80)

  event.recipes.susy.crystallizer('6tsjd7jsvvdker') // remapped from original line 53
    .inputFluids(safeFluidOf('susy:pollucite_leach', 4000))
    .outputFluids(safeFluidOf('susy:sodium_alum_solution', 4000))
    .itemOutputs('1x #forge:dusts/caesium_rubidium_alum_mixture')
    .EUt(voltAmps[2])
    .duration(80)

  event.recipes.gtceu.distillery('kromlgxczw9hdw') // remapped from original line 61
    .inputFluids(safeFluidOf('susy:sodium_alum_solution', 4000))
    .itemOutputs('12x #forge:dusts/sodium_alum')
    .outputFluids(safeFluidOf('minecraft:water', 4000))
    .EUt(voltAmps[1])
    .duration(20)

  // Contains GTFO resources
  //event.recipes.susy.crystallizer('jlp1tsyqc9rqui') // remapped from original line 69
    //.itemInputs('1x #forge:dusts/caesium_rubidium_alum_mixture')
    //.outputFluids(safeFluidOf('susy:gtfo_heated_water', 10000))
    //.chancedOutput('12x #forge:dusts/caesium_alum', 9500, 0)
    //.chancedOutput('12x #forge:dusts/rubidium_alum', 500, 0)
    //.EUt(voltAmps[1])
    //.duration(800)

  event.recipes.gtceu.chemical_bath('iyf9aib5pttw25') // remapped from original line 92
    .itemInputs('8x #forge:dusts/caesium_alumina_mixture')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemOutputs('5x #forge:dusts/alumina')
    .outputFluids(safeFluidOf('susy:caesium_sulfate_solution', 1000))
    .EUt(voltAmps[1])
    .duration(80)

  event.recipes.gtceu.chemical_bath('qzfljkr9bqe73j') // remapped from original line 101
    .itemInputs('8x #forge:dusts/caesium_alumina_mixture')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .itemOutputs('5x #forge:dusts/alumina')
    .outputFluids(safeFluidOf('susy:caesium_chloride_solution', 3000))
    .EUt(voltAmps[1])
    .duration(80)

  event.recipes.gtceu.distillery('z7iegbdzelmq5c') // remapped from original line 110
    .inputFluids(safeFluidOf('susy:caesium_chloride_solution', 3000))
    .itemOutputs('4x #forge:dusts/caesium_chloride')
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.susy.reaction_furnace('8vuuneavc1luhu') // remapped from original line 118
    .itemInputs('4x #forge:dusts/caesium_chloride')
    .itemInputs('1x #forge:dusts/calcium')
    .itemOutputs('5x #forge:dusts/reduced_caesium_mixture')
    .EUt(voltAmps[1])
    .duration(80)

  event.recipes.susy.vacuum_distillation('dbk1b9dnmvq3sf') // remapped from original line 126
    .itemInputs('5x #forge:dusts/reduced_caesium_mixture')
    .itemOutputs('3x #forge:dusts/calcium_chloride')
    .outputFluids(safeFluidOf('gtceu:caesium', 288))
    .EUt(voltAmps[2])
    .duration(80)

  event.recipes.susy.batch_reactor('v2gvfef0yt9kat') // remapped from original line 136
    .inputFluids(safeFluidOf('susy:caesium_sulfate_solution', 1000))
    .inputFluids(safeFluidOf('susy:calcium_hydroxide_slurry', 1000))
    .itemOutputs('6x #forge:dusts/calcium_sulfate')
    .outputFluids(safeFluidOf('susy:caesium_hydroxide_solution', 2000))
    .EUt(voltAmps[2])
    .duration(80)

  event.recipes.susy.CSTR('qhzclpdvirxn7i') // remapped from original line 145
    .inputFluids(safeFluidOf('susy:caesium_hydroxide_solution', 50))
    .inputFluids(safeFluidOf('susy:formic_acid', 50))
    .outputFluids(safeFluidOf('susy:caesium_formate_solution', 100))
    .EUt(voltAmps[2])
    .duration(4)

  event.recipes.gtceu.fluid_solidifier('uytoqeicpzs4tp') // remapped from original line 153
    .inputFluids(safeFluidOf('gtceu:caesium', 144))
    .itemOutputs('1x #forge:dusts/caesium')
    .EUt(voltAmps[1])
    .duration(20)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (highPurityCombustible in highPurityCombustibles()) {
  //     ROASTER.recipeBuilder()
  //     .inputs(ore('dustCaesiumAlum') * 24)
  //     .inputs(ore(highPurityCombustible.name) * highPurityCombustible.equivalent(2))
  //     .outputs(metaitem('dustCaesiumAluminaMixture') * 8)
  //     .fluidOutputs(fluid('carbon_dioxide') * 2000)
  //     .fluidOutputs(fluid('sulfur_dioxide') * 4000)
  //     .EUt(Globals.voltAmps[1])
  //     .duration(160 * highPurityCombustible.duration)
  //     .buildAndRegister()
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.CarbonGlobals.*
  // MIXER = recipemap('mixer')
  // FLOTATION = recipemap('froth_flotation')
  // CLARIFIER = recipemap('clarifier')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // CRYSTALLIZER = recipemap('crystallizer')
  // DISTILLERY = recipemap('distillery')
  // ROASTER = recipemap('roaster')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // VACUUM_DT = recipemap('vacuum_distillation')
  // BR = recipemap('batch_reactor')
  // FLUID_SOLIDIFIER = recipemap('fluid_solidifier')
});