ServerEvents.recipes(event => {

  event.recipes.gtceu.mixer('uwtn9lsoo4otfl') // remapped from original line 8
    .itemInputs('8x #forge:dusts/impure_cinnabar')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_cinnabar_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('lwoik0b5u42gid') // remapped from original line 16
    .inputFluids(safeFluidOf('susy:impure_cinnabar_slurry', 2000))
    .notConsumable('1x #forge:dusts/potassium_butyl_xanthate')
    .notConsumable('9x #forge:dusts/lead_nitrate')
    .outputFluids(safeFluidOf('susy:pegmatite_tailing_slurry', 1000))
    .outputFluids(safeFluidOf('susy:cinnabar_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('gppcdmojcpwfdt') // remapped from original line 26
    .inputFluids(safeFluidOf('susy:cinnabar_slurry', 1000))
    .itemOutputs('16x #forge:dusts/cinnabar')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.susy.roaster('itp2eqlii0x8dz') // remapped from original line 34
    .itemInputs('1x #forge:dusts/cinnabar')
    .inputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .outputFluids(safeFluidOf('gtceu:mercury', 1000))
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .duration(60)
    .EUt(voltAmps[1])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // ROASTER = recipemap('roaster')
  // FLOTATION = recipemap('froth_flotation')
  // MIXER = recipemap('mixer')
  // CLARIFIER = recipemap('clarifier')
});