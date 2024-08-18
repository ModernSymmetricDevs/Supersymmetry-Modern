ServerEvents.recipes(event => {

  event.recipes.gtceu.assembler('dmm6q355doz5vn') // remapped from original line 6
    .itemInputs('8x #forge:wires/fine_aluminium')
    .circuit(8)
    .itemOutputs(safeItemId('1x susy:zeolite_membrane_support'))
    .duration(180)
    .EUt(30)

  event.recipes.gtceu.autoclave('xnvd80gjfzwnwx') // remapped from original line 14
    .inputFluids(safeFluidOf('susy:raw_molecular_sieve', 4000))
    .itemInputs('8x #forge:dusts/clay')
    .outputFluids(safeFluidOf('susy:zeolite_13_solution', 4000))
    .duration(180)
    .EUt(30)

  event.recipes.susy.dryer('myj6b3i4ggbhkm') // remapped from original line 22
    .inputFluids(safeFluidOf('susy:zeolite_13_solution', 4000))
    .itemOutputs('8x #forge:dusts/zeolite13')
    .duration(180)
    .EUt(30)

  event.recipes.gtceu.autoclave('jfk324kvplntf7') // remapped from original line 29
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .itemInputs('4x #forge:dusts/zeolite13')
    .itemInputs(safeItemId('1x susy:zeolite_membrane_support'))
    .itemOutputs(safeItemId('1x susy:zeolite_membrane'))
    .duration(180)
    .EUt(30)

  event.recipes.susy.pressure_swing_adsorption('wrvvzk7ixylv7h') // remapped from original line 38
    .inputFluids(safeFluidOf('gtceu:air', 10000))
    .notConsumable(safeItemId('1x susy:zeolite_membrane'))
    .outputFluids(safeFluidOf('gtceu:nitrogen', 7808))
    .outputFluids(safeFluidOf('gtceu:oxygen', 2095))
    .duration(100)
    .EUt(64)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // ASSEMBLER = recipemap('assembler')
  // PSA = recipemap('pressure_swing_adsorption')
  // AUTOCLAVE = recipemap('autoclave')
  // DRYER = recipemap('dryer')
});