ServerEvents.recipes(event => {

  event.recipes.susy.roaster('ga2kdhrm90swzi') // remapped from original line 11
    .itemInputs('5x #forge:dusts/bismuthinite')
    .inputFluids(safeFluidOf('gtceu:oxygen', 9000))
    .itemOutputs('5x #forge:dusts/bismuth_iii_oxide')
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 3000))
    .EUt(120)
    .duration(120)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.CarbonGlobals.*
  // ROASTER = recipemap('roaster')
  // BR = recipemap('batch_reactor')
  // DISTILLERY = recipemap('distillery')
  // MIXER = recipemap('mixer')
  // CRYSTALLIZER = recipemap('crystallizer')
  // EBF = recipemap('electric_blast_furnace')
});