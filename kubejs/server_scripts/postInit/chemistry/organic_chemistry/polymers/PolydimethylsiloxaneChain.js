ServerEvents.recipes(event => {

  event.recipes.susy.fluidized_bed_reactor('z8yrjhqsh7rgdn') // remapped from original line 14
    .inputFluids(safeFluidOf('gtceu:chloromethane', 2000))
    .notConsumable('1x #forge:dusts/cuprous_oxide')
    .itemInputs('1x #forge:dusts/silicon')
    .outputFluids(safeFluidOf('susy:organosilicon_mixture', 2000))
    .duration(160)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('a4k3envd0i7s0o') // remapped from original line 23
    .inputFluids(safeFluidOf('susy:organosilicon_mixture', 1000))
    .outputFluids(safeFluidOf('gtceu:dimethyldichlorosilane', 800))
    .outputFluids(safeFluidOf('susy:methyltrichlorosilane', 100))
    .outputFluids(safeFluidOf('gtceu:methyldichlorosilane', 50))
    .outputFluids(safeFluidOf('susy:chlorotrimethylsilane', 50))
    .duration(400)
    .EUt(voltAmps[1] * 2)

  event.recipes.susy.continuous_stirred_tank_reactor('bybwqczplnldr4') // remapped from original line 38
    .inputFluids(safeFluidOf('gtceu:dimethyldichlorosilane', 50))
    .inputFluids(safeFluidOf('minecraft:water', 125))
    .outputFluids(safeFluidOf('susy:impure_polydimethylsiloxane_mixture', 75))
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 50))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.susy.phase_separator('owjobfpceddziw') // remapped from original line 47
    .inputFluids(safeFluidOf('susy:impure_polydimethylsiloxane_mixture', 1500))
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 500))
    .outputFluids(safeFluidOf('susy:raw_polydimethylsiloxane_mixture', 1000))
    .duration(200)

  event.recipes.gtceu.MIXER('maapnity4ogpau') // remapped from original line 54
    .inputFluids(safeFluidOf('susy:raw_polydimethylsiloxane_mixture', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 500))
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 500))
    .outputFluids(safeFluidOf('gtceu:polydimethylsiloxane', 1000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.polymerization_tank('1vzvod5ugc7mz5') // remapped from original line 63
    .inputFluids(safeFluidOf('gtceu:polydimethylsiloxane', 1000))
    .inputFluids(safeFluidOf('susy:di_tert_butyl_peroxide', 50))
    .itemInputs('1x #forge:dusts/silicon_dioxide')
    .outputFluids(safeFluidOf('gtceu:silicone_rubber', 144))
    .duration(100)
    .EUt(voltAmps[3])

  event.recipes.susy.polymerization_tank('yxoioe9t3wazcv') // remapped from original line 72
    .inputFluids(safeFluidOf('gtceu:polydimethylsiloxane', 1000))
    .inputFluids(safeFluidOf('susy:di_tert_butyl_peroxide', 50))
    .itemInputs('1x #forge:dusts/carbon')
    .outputFluids(safeFluidOf('gtceu:silicone_rubber', 144))
    .duration(100)
    .EUt(voltAmps[3])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // FLUIDIZED_BED_REACTOR = recipemap('fluidized_bed_reactor')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // CENTRIFUGE = recipemap('centrifuge')
  // ROASTER = recipemap('roaster')
  // PHASE_SEPARATOR = recipemap('phase_separator')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // POLYMERIZATION = recipemap('polymerization_tank')
});