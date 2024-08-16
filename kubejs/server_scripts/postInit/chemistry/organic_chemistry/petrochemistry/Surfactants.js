ServerEvents.recipes(event => {

  event.recipes.susy.continuous_stirred_tank_reactor('0bfnuqmecyt4c8') // remapped from original line 20
    .notConsumable('6x #forge:plates/polytetrafluoroethylene')
    .inputFluids(safeFluidOf('gtceu:sulfur_trioxide', 50))
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .outputFluids(safeFluidOf('susy:chlorosulfuric_acid', 50))
    .duration(5)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('wfwi4f6k7c1ckq') // remapped from original line 29
    .notConsumable('6x #forge:plates/polytetrafluoroethylene')
    .inputFluids(safeFluidOf('susy:chlorosulfuric_acid', 1000))
    .inputFluids(safeFluidOf('susy:n_dodecanol', 1000))
    .itemOutputs('1x #forge:dusts/hydrogen_dodecyl_sulfate')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('fk2fipdzuoz8lk') // remapped from original line 39
    .inputFluids(safeFluidOf('susy:n_dodecanol', 1000))
    .inputFluids(safeFluidOf('susy:oleum', 11000))
    .itemOutputs('1x #forge:dusts/hydrogen_dodecyl_sulfate')
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 10000))
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('d4v1ekth6xwwbc') // remapped from original line 48
    .itemInputs('1x #forge:dusts/hydrogen_dodecyl_sulfate')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .outputFluids(safeFluidOf('susy:sodium_dodecyl_sulfate_solution', 1000))
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.gtceu.distillery('8ufa95hwrdmxfn') // remapped from original line 56
    .inputFluids(safeFluidOf('susy:sodium_dodecyl_sulfate_solution', 1000))
    .itemOutputs('1x #forge:dusts/sodium_dodecyl_sulfate')
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('3mtalujdd6qqlr') // remapped from original line 64
    .itemInputs('1x #forge:dusts/tiny_sodium_hydroxide')
    .inputFluids(safeFluidOf('susy:ethylene_oxide', 1000))
    .inputFluids(safeFluidOf('susy:n_butanol', 1000))
    .outputFluids(safeFluidOf('susy:two_butoxyethanol', 1000))
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('ao9tadjtfs55i9') // remapped from original line 75
    .inputFluids(safeFluidOf('gtceu:naphthalene', 1000))
    .inputFluids(safeFluidOf('susy:tripropylene', 2000))
    .notConsumable(safeFluidOf('gtceu:hydrofluoric_acid', 100))
    .itemOutputs('1x #forge:dusts/dinonylnaphthalene')
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('zsxfaqmytnfsza') // remapped from original line 84
    .itemInputs('1x #forge:dusts/dinonylnaphthalene')
    .inputFluids(safeFluidOf('susy:oleum', 11000))
    .itemOutputs('1x #forge:dusts/dinonylnaphthalene_sulfonic_acid')
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 10000))
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('ox1ngwct0dt29g') // remapped from original line 93
    .notConsumable('6x #forge:plates/polytetrafluoroethylene')
    .itemInputs('1x #forge:dusts/dinonylnaphthalene')
    .inputFluids(safeFluidOf('susy:chlorosulfuric_acid', 1000))
    .itemOutputs('1x #forge:dusts/dinonylnaphthalene_sulfonic_acid')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .duration(100)
    .EUt(voltAmps[2])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // TBR = recipemap('trickle_bed_reactor')
  // FBR = recipemap('fixed_bed_reactor')
  // BCR = recipemap('bubble_column_reactor')
  // BR = recipemap('batch_reactor')
  // FLUIDIZEDBR = recipemap('fluidized_bed_reactor')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // DISTILLERY = recipemap('distillery')
  // ROASTER = recipemap('roaster')
  // CRYSTALLIZER = recipemap('crystallizer')
  // MIXER = recipemap('mixer')
  // DRYER = recipemap('dryer')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // LCR = recipemap('large_chemical_reactor')
  //     
});