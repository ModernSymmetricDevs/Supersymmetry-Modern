ServerEvents.recipes(event => {

  event.recipes.susy.crystallizer('gwt3dg4z5udcod') // remapped from original line 8
    .itemInputs('1x #forge:dusts/alkali_alum_mix')
    .outputFluids(safeFluidOf('susy:gtfo_heated_water', 10000))
    .chancedOutput('12x #forge:dusts/potassium_alum', 9000, 0)
    .chancedOutput('12x #forge:dusts/rubidium_alum', 500, 0)
    .EUt(voltAmps[1])
    .duration(800)

  event.recipes.susy.batch_reactor('ydphfmqxzk7sfp') // remapped from original line 19
    .itemInputs('12x #forge:dusts/rubidium_alum')
    .notConsumable('1x #forge:springs/cupronickel')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 4000))
    .itemOutputs('7x #forge:dusts/aluminium_hydroxide')
    .outputFluids(safeFluidOf('susy:rubidium_hydroxide_solution', 4000))
    .EUt(voltAmps[1])
    .duration(80)

  event.recipes.gtceu.DISTILLERY('aapskqm2izqez4') // remapped from original line 29
    .inputFluids(safeFluidOf('susy:rubidium_hydroxide_solution', 4000))
    .itemOutputs('3x #forge:dusts/rubidium_hydroxide')
    .outputFluids(safeFluidOf('minecraft:water', 4000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.susy.REACTION_FURNACE('zihuxysfgwphov') // remapped from original line 37
    .itemInputs('3x #forge:dusts/rubidium_hydroxide')
    .itemInputs('1x #forge:dusts/any_purity_magnesium')
    .itemOutputs('1x #forge:dusts/rubidium')
    .itemOutputs('5x #forge:dusts/magnesium_hydroxide')
    .EUt(voltAmps[1])
    .duration(80)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // CRYSTALLIZER = recipemap('crystallizer')
  // BR = recipemap('batch_reactor')
  //     
});