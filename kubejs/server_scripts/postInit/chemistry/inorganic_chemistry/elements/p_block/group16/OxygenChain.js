ServerEvents.recipes(event => {

  event.recipes.gtceu.assembler('9m0iqb05gz5ddl') // remapped from original line 6
    .itemInputs('8x #forge:wires/fine_aluminium')
    .circuit(8)
    .itemOutputs(metaitem('zeolite_membrane_support') * 1)
    .duration(180)
    .EUt(30)

  event.recipes.gtceu.autoclave('qdamfum17wwpxw') // remapped from original line 14
    .inputFluids(safeFluidOf('susy:raw_molecular_sieve', 4000))
    .itemInputs('8x #forge:dusts/clay')
    .outputFluids(safeFluidOf('susy:zeolite_13_solution', 13))
    .duration(180)
    .EUt(30)

  event.recipes.susy.dryer('ofa3ee81vkhwlt') // remapped from original line 22
    .inputFluids(safeFluidOf('susy:zeolite_13_solution', 13))
    .itemOutputs('13x #forge:dusts/zeolite13'') * 8)
    .duration(180)
    .EUt(30)

  event.recipes.gtceu.autoclave('vm5qohdd94o1qn') // remapped from original line 29
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .itemInputs('13x #forge:dusts/zeolite13'') * 4)
    .itemInputs(metaitem('zeolite_membrane_support') * 1)
    .itemOutputs(metaitem('zeolite_membrane') * 1)
    .duration(180)
    .EUt(30)

  event.recipes.susy.pressure_swing_adsorption('ys1nt4z0u5smos') // remapped from original line 38
    .inputFluids(safeFluidOf('gtceu:air', 10000))
    .notConsumable(metaitem('zeolite_membrane') * 1)
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