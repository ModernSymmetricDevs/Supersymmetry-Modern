ServerEvents.recipes(event => {

  event.recipes.susy.batch_reactor('0rak3j7bumpzgv') // remapped from original line 16
    .itemInputs('1x #forge:dusts/any_purity_sodium')
    .inputFluids(safeFluidOf('gtceu:methanol', 1000))
    .itemOutputs('6x #forge:dusts/sodium_methoxide')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 1000))
    .duration(80)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('m5xsr2udoysb8q') // remapped from original line 25
    .itemInputs('1x #forge:dusts/sodium_methoxide')
    .inputFluids(safeFluidOf('susy:polyethylene_glycol', 50))
    .inputFluids(safeFluidOf('gtceu:methanol', 1000))
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .outputFluids(safeFluidOf('susy:methyl_formate_solution', 1000))
    .duration(80)
    .EUt(30)

  event.recipes.susy.CSTR('f3x3ldzrikhb9h') // remapped from original line 35
    .notConsumable('1x #forge:springs/cupronickel')
    .inputFluids(safeFluidOf('susy:methyl_formate_solution', 300))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:neutralized_methyl_formate_solution', 300))
    .duration(4)
    .EUt(30)

  event.recipes.susy.CSTR('vrqakqdc4ur4cd') // remapped from original line 44
    .inputFluids(safeFluidOf('minecraft:water', 150))
    .inputFluids(safeFluidOf('susy:neutralized_methyl_formate_solution', 50))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:hydrolyzed_methyl_formate_solution', 200))
    .duration(4)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('wbnmdy6nfia1p4') // remapped from original line 53
    .inputFluids(safeFluidOf('susy:hydrolyzed_methyl_formate_solution', 4000))
    .chancedOutput('5250x #forge:dusts/sodium_sulfate', 5250, 0)
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('susy:polyethylene_glycol', 50))
    .outputFluids(safeFluidOf('susy:formic_acid_water_azeotrope', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 2600))
    .outputFluids(safeFluidOf('gtceu:methanol', 600))
    .duration(80)
    .EUt(30)

  event.recipes.susy.VACUUM_DT('alcgydhigwznix') // remapped from original line 65
    .inputFluids(safeFluidOf('susy:formic_acid_water_azeotrope', 1000))
    .outputFluids(safeFluidOf('susy:formic_acid', 600))
    .outputFluids(safeFluidOf('minecraft:water', 400))
    .duration(80)
    .EUt(30)

  event.recipes.susy.vat_fermentation('pwuch60fi5ibvp') // remapped from original line 75
    .inputFluids(safeFluidOf('gtceu:ethanol', 8000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 4000))
    .outputFluids(safeFluidOf('gtceu:vinegar', 16000))
    .duration(2400)
    .EUt(16)

  event.recipes.susy.vat_fermentation('evqovoul2jbzp6') // remapped from original line 83
    .inputFluids(safeFluidOf('gtceu:ethanol', 8000))
    .inputFluids(safeFluidOf('gtceu:air', 12000))
    .outputFluids(safeFluidOf('gtceu:vinegar', 16000))
    .duration(2400)
    .EUt(16)

  event.recipes.susy.vat_fermentation('noyeofvl2ks4yv') // remapped from original line 91
    .inputFluids(safeFluidOf('susy:impure_ethanol', 16000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 4000))
    .outputFluids(safeFluidOf('gtceu:vinegar', 16000))
    .duration(2400)
    .EUt(16)

  event.recipes.susy.vat_fermentation('aifodzqcjyzzvz') // remapped from original line 99
    .inputFluids(safeFluidOf('susy:impure_ethanol', 16000))
    .inputFluids(safeFluidOf('gtceu:air', 12000))
    .outputFluids(safeFluidOf('gtceu:vinegar', 16000))
    .duration(2400)
    .EUt(16)

  event.recipes.gtceu.distillation_tower('bxy0v0s9ley7pb') // remapped from original line 107
    .inputFluids(safeFluidOf('gtceu:vinegar', 2000))
    .itemOutputs('1x #forge:dusts/wood')
    .outputFluids(safeFluidOf('gtceu:acetic_acid', 400))
    .outputFluids(safeFluidOf('minecraft:water', 1600))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('my1yknjj5o7zfc') // remapped from original line 116
    .inputFluids(safeFluidOf('susy:gtfo_apple_cider', 2000))
    .outputFluids(safeFluidOf('gtceu:acetic_acid', 400))
    .outputFluids(safeFluidOf('minecraft:water', 1600))
    .duration(200)
    .EUt(30)

  event.recipes.susy.fixed_bed_reactor('gjz3uhsjzilmzs') // remapped from original line 126
    .inputFluids(safeFluidOf('gtceu:ethylene', 100))
    .inputFluids(safeFluidOf('gtceu:oxygen', 100))
    .notConsumable('1x #forge:catalysts/bed_platinum')
    .outputFluids(safeFluidOf('susy:gtfo_acetaldehyde', 100))
    .duration(10)
    .EUt(30)

  event.recipes.susy.fixed_bed_reactor('r6vevxhohbgbob') // remapped from original line 135
    .inputFluids(safeFluidOf('susy:gtfo_acetaldehyde', 100))
    .inputFluids(safeFluidOf('gtceu:oxygen', 100))
    .notConsumable('1x #forge:catalysts/bed_cobalt')
    .outputFluids(safeFluidOf('gtceu:acetic_acid', 100))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.large_chemical_reactor('cyjd0icphol8n0') // remapped from original line 146
    .inputFluids(safeFluidOf('gtceu:methanol', 1000))
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .outputFluids(safeFluidOf('gtceu:acetic_acid', 1000))
    .notConsumable('1x #forge:dusts/cativa_catalyst')
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('fphyk0xmpnk1ul') // remapped from original line 155
    .itemInputs('9x #forge:dusts/hexachloroiridic_acid')
    .inputFluids(safeFluidOf('susy:potassium_iodide_solution', 4000))
    .itemOutputs('5x #forge:dusts/iridium_iodide')
    .outputFluids(safeFluidOf('susy:potassium_chloride_solution', 4000))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 2000))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('krcrgvplrvdiwn') // remapped from original line 165
    .inputFluids(safeFluidOf('susy:phosphorus_trichloride', 1000))
    .inputFluids(safeFluidOf('gtceu:chlorobenzene', 3000))
    .itemInputs('6x #forge:dusts/any_purity_sodium')
    .itemOutputs('1x #forge:dusts/triphenylphosphine')
    .itemOutputs('12x #forge:dusts/salt')
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('baxwut6czexaiu') // remapped from original line 175
    .itemInputs('1x #forge:dusts/triphenylphosphine')
    .inputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .itemOutputs('1x #forge:dusts/triphenylphosphine_dichloride')
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.gtceu.large_chemical_reactor('kzc1lokhyshvx8') // remapped from original line 183
    .itemInputs('2x #forge:dusts/triphenylphosphine_dichloride')
    .itemInputs('1x #forge:dusts/triphenylphosphine')
    .inputFluids(safeFluidOf('susy:hydroxylamine', 1000))
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .itemOutputs('1x #forge:dusts/bistriphenylphosphineiminium_chloride')
    .itemOutputs('1x #forge:dusts/triphenylphosphine_oxide')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 4000))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('bvcbvj7etka3kw') // remapped from original line 195
    .itemInputs('5x #forge:dusts/iridium_iodide')
    .inputFluids(safeFluidOf('susy:dimethylformamide', 1000))
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .outputFluids(safeFluidOf('susy:cativa_catalyst_preparation', 1000))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.gtceu.mixer('ndtucnalvseuv0') // remapped from original line 204
    .inputFluids(safeFluidOf('susy:cativa_catalyst_preparation', 500))
    .itemInputs('1x #forge:dusts/bistriphenylphosphineiminium_chloride')
    .outputFluids(safeFluidOf('susy:cativa_catalyst_solution', 500))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.dryer('xjld1cx0b5rnxt') // remapped from original line 212
    .inputFluids(safeFluidOf('susy:cativa_catalyst_solution', 1000))
    .itemOutputs('10x #forge:dusts/cativa_catalyst')
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.gtceu.mixer('ww8hazrcet5fns') // remapped from original line 219
    .itemInputs('2x #forge:dusts/potassium_iodide')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:potassium_iodide_solution', 1000))
    .duration(100)
    .EUt(voltAmps[1])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // FBR = recipemap('fixed_bed_reactor')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // FERMENTER = recipemap('vat_fermentation');
  // MIXER = recipemap('mixer')
  // ROASTER = recipemap('roaster')
  // LCR = recipemap('large_chemical_reactor')
  // BR = recipemap('batch_reactor')
  // DRYER = recipemap('dryer')
  // DISTILLERY = recipemap('distillery')
  // BCR = recipemap('bubble_column_reactor')
});