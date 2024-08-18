ServerEvents.recipes(event => {

  // Contains GTFO resources
  //event.recipes.susy.continuous_stirred_tank_reactor('wjy9agcwvfp2sv') // remapped from original line 13
    //.inputFluids(safeFluidOf('susy:gtfo_hydrogen_cyanide', 50))
    //.inputFluids(safeFluidOf('gtceu:acetone', 50))
    //.outputFluids(safeFluidOf('susy:acetone_cyanohydrin', 50))
    //.duration(10)
    //.EUt(30)

  event.recipes.susy.batch_reactor('4kozmdq4b85cjj') // remapped from original line 21
    .inputFluids(safeFluidOf('susy:acetone_cyanohydrin', 1000))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemOutputs('20x #forge:dusts/methacrylamide_sulfate')
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('5aqudyqart0xjq') // remapped from original line 29
    .itemInputs('20x #forge:dusts/methacrylamide_sulfate')
    .inputFluids(safeFluidOf('gtceu:methanol', 1000))
    .outputFluids(safeFluidOf('susy:methyl_methacrylate', 1000))
    .itemOutputs('11x #forge:dusts/ammonium_bisulfate')
    .duration(300)
    .EUt(30)

  event.recipes.susy.FBR('mkrak09whe1jpf') // remapped from original line 40
    .notConsumable('1x #forge:dusts/molybdenum_trioxide')
    .inputFluids(safeFluidOf('susy:isobutylene', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 100))
    .outputFluids(safeFluidOf('susy:gaseous_methacrolein_mixture', 100))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.large_chemical_reactor('hwtvpb7y9dld3s') // remapped from original line 49
    .itemInputs('48x #forge:dusts/purified_molybdenum_trioxide')
    .inputFluids(safeFluidOf('gtceu:phosphoric_acid', 1000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 28000))
    .itemOutputs('1x #forge:dusts/phosphomolybdic_acid')
    .duration(500)
    .EUt(480)

  event.recipes.susy.FBR('labknt2wp84u8g') // remapped from original line 58
    .notConsumable('1x #forge:dusts/phosphomolybdic_acid')
    .inputFluids(safeFluidOf('susy:gaseous_methacrolein_mixture', 100))
    .inputFluids(safeFluidOf('gtceu:oxygen', 50))
    .outputFluids(safeFluidOf('susy:gaseous_methacrylic_acid_mixture', 100))
    .duration(10)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('8z6ln2corhohcg') // remapped from original line 67
    .inputFluids(safeFluidOf('susy:gaseous_methacrylic_acid_mixture', 2000)) 
    .inputFluids(safeFluidOf('minecraft:water', 750))
    .outputFluids(safeFluidOf('susy:methacrylic_acid_solution', 1500))
    .outputFluids(safeFluidOf('susy:gaseous_methacrolein_residue', 1250))
    .duration(200)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('adlizyby97hhzl') // remapped from original line 76
    .inputFluids(safeFluidOf('susy:gaseous_methacrolein_residue', 1250))
    .inputFluids(safeFluidOf('minecraft:water', 250))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 1000))
    .outputFluids(safeFluidOf('susy:absorbed_methacrolein', 2500))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('g0lffdswiesseu') // remapped from original line 85
    .inputFluids(safeFluidOf('susy:absorbed_methacrolein', 2500))
    .outputFluids(safeFluidOf('susy:diluted_acetic_acid', 2000))
    .outputFluids(safeFluidOf('susy:gaseous_methacrolein_mixture', 500))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('sd9lagekhbg7kt') // remapped from original line 93
    .inputFluids(safeFluidOf('susy:methacrylic_acid_solution', 2000))
    .outputFluids(safeFluidOf('susy:methacrylic_acid', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(250)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('tqsjrzxlchssxg') // remapped from original line 101
    .inputFluids(safeFluidOf('susy:methacrylic_acid', 50))
    .inputFluids(safeFluidOf('gtceu:methanol', 50))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:methyl_methacrylate', 50))
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 100))
    .duration(10)
    .EUt(30)

  // Contains GTFO resources
  //event.recipes.gtceu.mixer('o8rz4hwwmym9um') // remapped from original line 113
    //.inputFluids(safeFluidOf('susy:methyl_methacrylate', 1000))
    //.inputFluids(safeFluidOf('minecraft:water', 1000))
    //.inputFluids(safeFluidOf('susy:gtfo_sodium_stearate', 100))
    //.outputFluids(safeFluidOf('susy:methyl_methacrylate_emulsion', 2000))
    //.duration(300)
    //.EUt(30)

  event.recipes.susy.polymerization_tank('ommn5kqacfuqky') // remapped from original line 122
    .inputFluids(safeFluidOf('susy:methyl_methacrylate_emulsion', 2000))
    .itemInputs('1x #forge:dusts/tiny_potassium_persulfate')
    .outputFluids(safeFluidOf('susy:polymethyl_methacrylate_solution', 2000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.dryer('egtgpknxmqz2ia') // remapped from original line 130
    .inputFluids(safeFluidOf('susy:polymethyl_methacrylate_solution', 2000))
    .itemOutputs('1x #forge:dusts/pmma')
    .duration(300)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // BR = recipemap('batch_reactor')
  // POLYMERIZATION = recipemap('polymerization_tank')
  // MIXER = recipemap('mixer')
  // DRYER = recipemap('dryer')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // DT = recipemap('distillation_tower')
  // LCR = recipemap('large_chemical_reactor')
  // BCR = recipemap('bubble_column_reactor')
  // CENTRIFUGE = recipemap('centrifuge')
});