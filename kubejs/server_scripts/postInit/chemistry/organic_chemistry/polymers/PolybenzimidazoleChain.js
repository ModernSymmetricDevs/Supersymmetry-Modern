ServerEvents.recipes(event => {

  event.recipes.susy.batch_reactor('zm1olq0xeslwbs') // remapped from original line 12
    .inputFluids(safeFluidOf('gtceu:phenol', 1000))
    .itemInputs('3x #forge:dusts/sodium_hydroxide')
    .outputFluids(safeFluidOf('susy:sodium_phenoxide_solution', 1000))
    .duration(160)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('mzft4doeqjmjiz') // remapped from original line 20
    .inputFluids(safeFluidOf('susy:isophthaloyl_chloride_solution', 50))
    .inputFluids(safeFluidOf('susy:sodium_phenoxide_solution', 100))
    .outputFluids(safeFluidOf('susy:diphenyl_isophthalate_solution', 50))
    .outputFluids(safeFluidOf('gtceu:salt_water', 100))
    .duration(10)
    .EUt(30)

  event.recipes.susy.fixed_bed_reactor('vnabfu3ofuq1u9') // remapped from original line 31
    .inputFluids(safeFluidOf('susy:two_chloronitrobenzene', 288))
    .inputFluids(safeFluidOf('susy:hot_hp_hydrogen', 10000))
    .notConsumable('1x #forge:dusts/palladium_on_carbon')
    .itemOutputs('1x #forge:dusts/two_two_dichlorohydrazobenzene')
    .outputFluids(safeFluidOf('minecraft:water', 4000))
    .duration(300)
    .EUt(120)

  event.recipes.susy.batch_reactor('a994yjucbupzor') // remapped from original line 41
    .itemInputs('1x #forge:dusts/two_two_dichlorohydrazobenzene')
    .inputFluids(safeFluidOf('gtceu:toluene', 1000))
    .notConsumable(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:dichlorobenzidine_solution', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.fluidized_bed_reactor('1ye62ovuu10iue') // remapped from original line 52
    .inputFluids(safeFluidOf('susy:dichlorobenzidine_solution', 100))
    .inputFluids(safeFluidOf('susy:hot_compressed_ammonia', 200))
    .notConsumable('1x #forge:dusts/copper')
    .outputFluids(safeFluidOf('susy:diaminobenzidine_solution', 100))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 200))
    .duration(20)
    .EUt(60)

  event.recipes.susy.polymerization_tank('udvqyg2jvyxlnk') // remapped from original line 64
    .notConsumable(safeFluidOf('gtceu:nitrogen', 8000))
    .inputFluids(safeFluidOf('susy:diaminobenzidine_solution', 1000))
    .inputFluids(safeFluidOf('susy:diphenyl_isophthalate_solution', 1000))
    .itemOutputs('2x #forge:dusts/pbi_foam')
    .outputFluids(safeFluidOf('susy:pbi_waste', 4000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .duration(200)
    .EUt(240)

  event.recipes.susy.ROASTER('gkyhiehgfnjmd5') // remapped from original line 75
    .itemInputs('1x #forge:dusts/pbi_foam')
    .itemOutputs('1x #forge:dusts/pbi_prepolymer')
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.MIXER('8076qewakv2iqg') // remapped from original line 82
    .itemInputs('2x #forge:dusts/lithium_chloride')
    .inputFluids(safeFluidOf('susy:dimethylacetamide', 1000))
    .itemInputs('1x #forge:dusts/pbi_prepolymer')
    .outputFluids(safeFluidOf('susy:pbi_solution', 1000))
    .duration(100)
    .EUt(120)

  event.recipes.gtceu.CHEMICAL_BATH('vkkeiyzshazs4j') // remapped from original line 91
    .inputFluids(safeFluidOf('susy:hot_hp_nitrogen', 160))
    .inputFluids(safeFluidOf('susy:pbi_solution', 1000))
    .notConsumable(safeItemId('1x susy:spinneret'))
    .itemOutputs('8x #forge:fibers/polybenzimidazole')
    .outputFluids(safeFluidOf('susy:spent_pbi_solution', 1000))
    .duration(100)
    .EUt(480)

  event.recipes.gtceu.DISTILLERY('yhunp55uoinxob') // remapped from original line 101
    .inputFluids(safeFluidOf('susy:spent_pbi_solution', 1000))
    .itemOutputs('2x #forge:dusts/lithium_chloride')
    .outputFluids(safeFluidOf('susy:dimethylacetamide', 1000))
    .duration(20)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('be6wgshpyrbi1w') // remapped from original line 109
    .inputFluids(safeFluidOf('susy:pbi_waste', 4000))
    .outputFluids(safeFluidOf('gtceu:toluene', 1000))
    .outputFluids(safeFluidOf('gtceu:phenol', 2000))
    .outputFluids(safeFluidOf('susy:dichloroethane', 1000))
    .duration(300)
    .EUt(240)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // FBR = recipemap('fixed_bed_reactor')
  // BR = recipemap('batch_reactor')
  // POLYMERIZATION = recipemap('polymerization_tank')
  // FLUIDIZEDBR = recipemap('fluidized_bed_reactor')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // SIFTER = recipemap('sifter')
  // CENTRIFUGE = recipemap('centrifuge')
});