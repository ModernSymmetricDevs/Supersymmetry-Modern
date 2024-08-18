ServerEvents.recipes(event => {

  event.recipes.gtceu.assembler('ddq2mvukccy0pz') // remapped from original line 17
    .circuit(11)
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs('1x #forge:springs/nichrome')
    .itemInputs('1x #forge:pipes/tiny_fluid_plastic')
    .itemInputs('1x #forge:circuits/hv')
    .itemInputs(safeItemId('1x susy:electric.pump.hv'))
    .itemOutputs(safeItemId('1x susy:spinneret'))
    .duration(600)
    .EUt(480)

  event.recipes.susy.batch_reactor('mgx7ldg5t0bvds') // remapped from original line 31
    .itemInputs('1x #forge:dusts/four_chloronitrobenzene')
    .inputFluids(safeFluidOf('gtceu:toluene', 1000))
    .inputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .outputFluids(safeFluidOf('susy:four_nitroaniline_solution', 1000))
    .itemOutputs('6x #forge:dusts/ammonium_chloride')
    .duration(600)
    .EUt(120)

  event.recipes.susy.BCR('aysc6rsbjdjb22') // remapped from original line 43
    .notConsumable('1x #forge:catalysts/bed_palladium')
    .inputFluids(safeFluidOf('susy:four_nitroaniline_solution', 50))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 300))
    .outputFluids(safeFluidOf('susy:para_phenylenediamine_solution', 150))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('ggzoxbfjge7wtr') // remapped from original line 52
    .inputFluids(safeFluidOf('susy:para_phenylenediamine_solution', 3000))
    .outputFluids(safeFluidOf('gtceu:toluene', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 2000))
    .itemOutputs('16x #forge:dusts/para_phenylenediamine')
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.large_chemical_reactor('b0wtrqmsdlvgow') // remapped from original line 63
    .itemInputs('16x #forge:dusts/para_phenylenediamine')
    .itemInputs('16x #forge:dusts/terephthaloyl_chloride')
    .notConsumable(safeFluidOf('susy:n_methyl_two_pyrrolidone', 4000))
    .inputFluids(safeFluidOf('susy:soda_ash_solution', 1000))
    .itemOutputs('8x #forge:fibers/wet_kevlar')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .outputFluids(safeFluidOf('susy:diluted_calcium_chloride_solution', 2000))
    .EUt(1920)
    .duration(300)

  event.recipes.susy.POLYMERIZATION('fiheyw84taubik') // remapped from original line 75
    .itemInputs('16x #forge:dusts/para_phenylenediamine')
    .itemInputs('16x #forge:dusts/terephthaloyl_chloride')
    .inputFluids(safeFluidOf('susy:dimethylacetamide', 4000))
    .outputFluids(safeFluidOf('susy:kevlar_polymerization_mix', 4000))
    .EUt(1920)
    .duration(300)

  event.recipes.gtceu.chemical_bath('azztgrwwitanvz') // remapped from original line 84
    .inputFluids(safeFluidOf('susy:kevlar_polymerization_mix', 4000))
    .inputFluids(safeFluidOf('susy:hot_air', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .notConsumable(safeItemId('1x susy:spinneret'))
    .itemOutputs('16x #forge:fibers/wet_kevlar')
    .outputFluids(safeFluidOf('susy:spent_dimethylacetamide', 4000))
    .outputFluids(safeFluidOf('susy:wastewater', 100))
    .duration(300)
    .EUt(480)

  event.recipes.gtceu.distillery('h1uplffxp32gyk') // remapped from original line 96
    .inputFluids(safeFluidOf('susy:spent_dimethylacetamide', 4000))
    .itemOutputs('3x #forge:dusts/calcium_chloride')
    .outputFluids(safeFluidOf('susy:dimethylacetamide', 4000))
    .duration(20)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('2l9dxpsaduhjw7') // remapped from original line 106
    .inputFluids(safeFluidOf('gtceu:nitrobenzene', 50))
    .inputFluids(safeFluidOf('gtceu:nitration_mixture', 100))
    .outputFluids(safeFluidOf('susy:acidic_dinitrobenzene_mixture', 100))
    .duration(10)
    .EUt(480)

  event.recipes.susy.phase_separator('318ne9xhozhun4') // remapped from original line 114
    .inputFluids(safeFluidOf('susy:acidic_dinitrobenzene_mixture', 2000))
    .itemOutputs('1x #forge:dusts/dinitrobenzene_mixture')
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 2000))
    .duration(50)

  event.recipes.susy.batch_reactor('dpqtf2kfkfkoxo') // remapped from original line 121
    .itemInputs('1x #forge:dusts/dinitrobenzene_mixture')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 100))
    .chancedOutput('1x #forge:dusts/one_three_dinitrobenzene', 8800, 0)
    .outputFluids(safeFluidOf('susy:wastewater', 100))
    .duration(200)
    .EUt(480)

  event.recipes.susy.batch_reactor('lz29sqd8q0flde') // remapped from original line 130
    .itemInputs('1x #forge:dusts/one_three_dinitrobenzene')
    .inputFluids(safeFluidOf('gtceu:hydrogen', 4000))
    .notConsumable('1x #forge:dusts/activated_raney_nickel')
    .itemOutputs('16x #forge:dusts/meta_phenylenediamine')
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.POLYMERIZATION('7auskvsatz07jn') // remapped from original line 141
    .itemInputs('16x #forge:dusts/meta_phenylenediamine')
    .itemInputs('16x #forge:dusts/isophthaloyl_chloride')
    .inputFluids(safeFluidOf('susy:dimethylacetamide', 4000))
    .outputFluids(safeFluidOf('susy:nomex_polymerization_mix', 4000))
    .EUt(1920)
    .duration(300)

  event.recipes.gtceu.chemical_bath('ggnsrk1ff2oskv') // remapped from original line 150
    .inputFluids(safeFluidOf('susy:nomex_polymerization_mix', 4000))
    .inputFluids(safeFluidOf('susy:hot_air', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .notConsumable(safeItemId('1x susy:spinneret'))
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