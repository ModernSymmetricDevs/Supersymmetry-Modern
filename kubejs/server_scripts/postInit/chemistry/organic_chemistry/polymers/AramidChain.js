ServerEvents.recipes(event => {

  event.recipes.gtceu.assembler('jwrguzidxoagg3') // remapped from original line 17
    .circuit(11)
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs('1x #forge:springs/nichrome')
    .itemInputs('1x #forge:pipes/tiny_fluid_plastic')
    .itemInputs('1x #forge:circuits/hv')
    .itemInputs(metaitem('electric.pump.hv'))
    .itemOutputs(metaitem('spinneret'))
    .duration(600)
    .EUt(480)

  event.recipes.susy.batch_reactor('o95stklgkdrtjk') // remapped from original line 31
    .itemInputs('1x #forge:dusts/four_chloronitrobenzene')
    .inputFluids(safeFluidOf('gtceu:toluene', 1000))
    .inputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .outputFluids(safeFluidOf('susy:four_nitroaniline_solution', 1000))
    .itemOutputs('6x #forge:dusts/ammonium_chloride')
    .duration(600)
    .EUt(120)

  event.recipes.susy.BCR('flk06lufwdeap7') // remapped from original line 43
    .notConsumable('1x #forge:catalysts/bed_palladium')
    .inputFluids(safeFluidOf('susy:four_nitroaniline_solution', 50))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 300))
    .outputFluids(safeFluidOf('susy:para_phenylenediamine_solution', 150))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('ibzvntt7l017mz') // remapped from original line 52
    .inputFluids(safeFluidOf('susy:para_phenylenediamine_solution', 3000))
    .outputFluids(safeFluidOf('gtceu:toluene', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 2000))
    .itemOutputs('16x #forge:dusts/para_phenylenediamine')
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.large_chemical_reactor('ykw1tahsxrtep6') // remapped from original line 63
    .itemInputs('16x #forge:dusts/para_phenylenediamine')
    .itemInputs('16x #forge:dusts/terephthaloyl_chloride')
    .notConsumable(safeFluidOf('susy:n_methyl_two_pyrrolidone', 4000))
    .inputFluids(safeFluidOf('susy:soda_ash_solution', 1000))
    .itemOutputs('8x #forge:fibers/wet_kevlar')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .outputFluids(safeFluidOf('susy:diluted_calcium_chloride_solution', 2000))
    .EUt(1920)
    .duration(300)

  event.recipes.susy.POLYMERIZATION('fhymuprlaqhybh') // remapped from original line 75
    .itemInputs('16x #forge:dusts/para_phenylenediamine')
    .itemInputs('16x #forge:dusts/terephthaloyl_chloride')
    .inputFluids(safeFluidOf('susy:dimethylacetamide', 4000))
    .outputFluids(safeFluidOf('susy:kevlar_polymerization_mix', 4000))
    .EUt(1920)
    .duration(300)

  event.recipes.gtceu.chemical_bath('viytbb9yk4np44') // remapped from original line 84
    .inputFluids(safeFluidOf('susy:kevlar_polymerization_mix', 4000))
    .inputFluids(safeFluidOf('susy:hot_air', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .notConsumable(metaitem('spinneret'))
    .itemOutputs('16x #forge:fibers/wet_kevlar')
    .outputFluids(safeFluidOf('susy:spent_dimethylacetamide', 4000))
    .outputFluids(safeFluidOf('susy:wastewater', 100))
    .duration(300)
    .EUt(480)

  event.recipes.gtceu.distillery('yzlkmcvmeh45sz') // remapped from original line 96
    .inputFluids(safeFluidOf('susy:spent_dimethylacetamide', 4000))
    .itemOutputs('3x #forge:dusts/calcium_chloride')
    .outputFluids(safeFluidOf('susy:dimethylacetamide', 4000))
    .duration(20)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('p1rziux6ovhlva') // remapped from original line 106
    .inputFluids(safeFluidOf('gtceu:nitrobenzene', 50))
    .inputFluids(safeFluidOf('gtceu:nitration_mixture', 100))
    .outputFluids(safeFluidOf('susy:acidic_dinitrobenzene_mixture', 100))
    .duration(10)
    .EUt(480)

  event.recipes.susy.phase_separator('zc2r1wo2razelb') // remapped from original line 114
    .inputFluids(safeFluidOf('susy:acidic_dinitrobenzene_mixture', 2000))
    .itemOutputs('1x #forge:dusts/dinitrobenzene_mixture')
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 2000))
    .duration(50)

  event.recipes.susy.batch_reactor('uumnygxfbvpyzj') // remapped from original line 121
    .itemInputs('1x #forge:dusts/dinitrobenzene_mixture')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 100))
    .chancedOutput('8800x #forge:dusts/one_three_dinitrobenzene', 8800, 0)
    .outputFluids(safeFluidOf('susy:wastewater', 100))
    .duration(200)
    .EUt(480)

  event.recipes.susy.batch_reactor('8j5a5vir5gbxud') // remapped from original line 130
    .itemInputs('1x #forge:dusts/one_three_dinitrobenzene')
    .inputFluids(safeFluidOf('gtceu:hydrogen', 4000))
    .notConsumable('1x #forge:dusts/activated_raney_nickel')
    .itemOutputs('16x #forge:dusts/meta_phenylenediamine')
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.POLYMERIZATION('xb8g8xjtti02n0') // remapped from original line 141
    .itemInputs('16x #forge:dusts/meta_phenylenediamine')
    .itemInputs('16x #forge:dusts/isophthaloyl_chloride')
    .inputFluids(safeFluidOf('susy:dimethylacetamide', 4000))
    .outputFluids(safeFluidOf('susy:nomex_polymerization_mix', 4000))
    .EUt(1920)
    .duration(300)

  event.recipes.gtceu.chemical_bath('auoulmaihn9ojo') // remapped from original line 150
    .inputFluids(safeFluidOf('susy:nomex_polymerization_mix', 4000))
    .inputFluids(safeFluidOf('susy:hot_air', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .notConsumable(metaitem('spinneret'))
    .itemOutputs('16x #forge:fibers/wet_nomex')
    .outputFluids(safeFluidOf('susy:spent_dimethylacetamide', 4000))
    .outputFluids(safeFluidOf('susy:wastewater', 100))
    .duration(300)
    .EUt(480)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // BR = recipemap('batch_reactor')
  // LCR = recipemap('large_chemical_reactor')
  // FBR = recipemap('fixed_bed_reactor')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // SIFTER = recipemap('sifter')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // PHASE_SEPARATOR = recipemap('phase_separator')
  // ASSEMBLER = recipemap('assembler')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // DISTILLERY = recipemap('distillery')
  // ASSEMBLER = recipemap('assembler')
});