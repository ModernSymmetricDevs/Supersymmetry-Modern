ServerEvents.recipes(event => {

  event.recipes.susy.batch_reactor('pqratmxiyelrjv') // remapped from original line 5
    .itemInputs('4x #forge:dusts/thallium_i_chloride')
    .inputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 2000))
    .outputFluids(safeFluidOf('susy:acidic_thallium_sulfate_solution', 1000)) 
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.distillation_tower('ewstnclvxu8tko') // remapped from original line 13
    .inputFluids(safeFluidOf('susy:acidic_thallium_sulfate_solution', 1000))
    .outputFluids(safeFluidOf('susy:thallium_sulfate_solution', 1000))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 2000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.electrolytic_cell('cofuhknvwzhq5o') // remapped from original line 21
    .notConsumable('1x #forge:rods/platinum')
    .notConsumable(safeItemId('1x susy:graphite_electrode'))
    .inputFluids(safeFluidOf('susy:thallium_sulfate_solution', 1000))
    .itemOutputs('1x #forge:dusts/thallium')
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .EUt(30)
    .duration(120)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // BR = recipemap('batch_reactor')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
});