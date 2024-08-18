ServerEvents.recipes(event => {

  event.recipes.susy.batch_reactor('y1fzqb5hlu3svk') // remapped from original line 16
    .itemInputs('1x #forge:dusts/any_purity_sodium')
    .inputFluids(safeFluidOf('gtceu:methanol', 1000))
    .itemOutputs('6x #forge:dusts/sodium_methoxide')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 1000))
    .duration(80)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('q70dfmx1pg9coe') // remapped from original line 25
    .itemInputs('1x #forge:dusts/sodium_methoxide')
    .inputFluids(safeFluidOf('susy:polyethylene_glycol', 50))
    .inputFluids(safeFluidOf('gtceu:methanol', 1000))
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .outputFluids(safeFluidOf('susy:methyl_formate_solution', 1000))
    .duration(80)
    .EUt(30)

  event.recipes.susy.CSTR('8f6lnndf8ps7mp') // remapped from original line 35
    .notConsumable('1x #forge:springs/cupronickel')
    .inputFluids(safeFluidOf('susy:methyl_formate_solution', 300))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:neutralized_methyl_formate_solution', 300))
    .duration(4)
    .EUt(30)

  event.recipes.susy.CSTR('pr5f7hfn6bajwu') // remapped from original line 44
    .inputFluids(safeFluidOf('minecraft:water', 150))
    .inputFluids(safeFluidOf('susy:neutralized_methyl_formate_solution', 50))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:hydrolyzed_methyl_formate_solution', 200))
    .duration(4)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('wrv2j2qkg4rxol') // remapped from original line 53
    .inputFluids(safeFluidOf('susy:hydrolyzed_methyl_formate_solution', 4000))
    .chancedOutput('1x #forge:dusts/sodium_sulfate', 5250, 0)
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('susy:polyethylene_glycol', 50))
    .outputFluids(safeFluidOf('susy:formic_acid_water_azeotrope', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 2600))
    .outputFluids(safeFluidOf('gtceu:methanol', 600))
    .duration(80)
    .EUt(30)

  event.recipes.susy.VACUUM_DT('jv68its83ngfc2') // remapped from original line 65
    .inputFluids(safeFluidOf('susy:formic_acid_water_azeotrope', 1000))
    .outputFluids(safeFluidOf('susy:formic_acid', 600))
    .outputFluids(safeFluidOf('minecraft:water', 400))
    .duration(80)
    .EUt(30)

  event.recipes.susy.vat_fermentation('hqffimaxooq8gk') // remapped from original line 75
    .inputFluids(safeFluidOf('gtceu:ethanol', 8000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 4000))
    .outputFluids(safeFluidOf('gtceu:vinegar', 16000))
    .duration(2400)
    .EUt(16)

  event.recipes.susy.vat_fermentation('yubor2sk2jtzr2') // remapped from original line 83
    .inputFluids(safeFluidOf('gtceu:ethanol', 8000))
    .inputFluids(safeFluidOf('gtceu:air', 12000))
    .outputFluids(safeFluidOf('gtceu:vinegar', 16000))
    .duration(2400)
    .EUt(16)

  event.recipes.susy.vat_fermentation('s38fjcrx7x8yfs') // remapped from original line 91
    .inputFluids(safeFluidOf('susy:impure_ethanol', 16000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 4000))
    .outputFluids(safeFluidOf('gtceu:vinegar', 16000))
    .duration(2400)
    .EUt(16)

  event.recipes.susy.vat_fermentation('mzirby4c9cbhlx') // remapped from original line 99
    .inputFluids(safeFluidOf('susy:impure_ethanol', 16000))
    .inputFluids(safeFluidOf('gtceu:air', 12000))
    .outputFluids(safeFluidOf('gtceu:vinegar', 16000))
    .duration(2400)
    .EUt(16)

  event.recipes.gtceu.distillation_tower('uqokikzvtpg2rb') // remapped from original line 107
    .inputFluids(safeFluidOf('gtceu:vinegar', 2000))
    .itemOutputs('1x #forge:dusts/wood')
    .outputFluids(safeFluidOf('gtceu:acetic_acid', 400))
    .outputFluids(safeFluidOf('minecraft:water', 1600))
    .duration(200)
    .EUt(30)

  // Contains GTFO resources
  //event.recipes.gtceu.distillation_tower('isgsoeft9abha3') // remapped from original line 116
    //.inputFluids(safeFluidOf('susy:gtfo_apple_cider', 2000))
    //.outputFluids(safeFluidOf('gtceu:acetic_acid', 400))
    //.outputFluids(safeFluidOf('minecraft:water', 1600))
    //.duration(200)
    //.EUt(30)

  // Contains GTFO resources
  //event.recipes.susy.fixed_bed_reactor('egidhu0hslchil') // remapped from original line 126
    //.inputFluids(safeFluidOf('gtceu:ethylene', 100))
    //.inputFluids(safeFluidOf('gtceu:oxygen', 100))
    //.notConsumable('1x #forge:catalysts/bed_platinum')
    //.outputFluids(safeFluidOf('susy:gtfo_acetaldehyde', 100))
    //.duration(10)
    //.EUt(30)

  // Contains GTFO resources
  //event.recipes.susy.fixed_bed_reactor('tfiuh7uut4jiev') // remapped from original line 135
    //.inputFluids(safeFluidOf('susy:gtfo_acetaldehyde', 100))
    //.inputFluids(safeFluidOf('gtceu:oxygen', 100))
    //.notConsumable('1x #forge:catalysts/bed_cobalt')
    //.outputFluids(safeFluidOf('gtceu:acetic_acid', 100))
    //.duration(10)
    //.EUt(30)

  event.recipes.gtceu.large_chemical_reactor('d8vtsb91veyyng') // remapped from original line 146
    .inputFluids(safeFluidOf('gtceu:methanol', 1000))
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .outputFluids(safeFluidOf('gtceu:acetic_acid', 1000))
    .notConsumable('1x #forge:dusts/cativa_catalyst')
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('su7xqbwlkdeb0t') // remapped from original line 155
    .itemInputs('9x #forge:dusts/hexachloroiridic_acid')
    .inputFluids(safeFluidOf('susy:potassium_iodide_solution', 4000))
    .itemOutputs('5x #forge:dusts/iridium_iodide')
    .outputFluids(safeFluidOf('susy:potassium_chloride_solution', 4000))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 2000))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('igzu5hpghvahs2') // remapped from original line 165
    .inputFluids(safeFluidOf('susy:phosphorus_trichloride', 1000))
    .inputFluids(safeFluidOf('gtceu:chlorobenzene', 3000))
    .itemInputs('6x #forge:dusts/any_purity_sodium')
    .itemOutputs('1x #forge:dusts/triphenylphosphine')
    .itemOutputs('12x #forge:dusts/salt')
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('pcxlvbwmrlrh3o') // remapped from original line 175
    .itemInputs('1x #forge:dusts/triphenylphosphine')
    .inputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .itemOutputs('1x #forge:dusts/triphenylphosphine_dichloride')
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.gtceu.large_chemical_reactor('68pmd4z6t1djra') // remapped from original line 183
    .itemInputs('2x #forge:dusts/triphenylphosphine_dichloride')
    .itemInputs('1x #forge:dusts/triphenylphosphine')
    .inputFluids(safeFluidOf('susy:hydroxylamine', 1000))
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .itemOutputs('1x #forge:dusts/bistriphenylphosphineiminium_chloride')
    .itemOutputs('1x #forge:dusts/triphenylphosphine_oxide')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 4000))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('9yuejwihtuck6l') // remapped from original line 195
    .itemInputs('5x #forge:dusts/iridium_iodide')
    .inputFluids(safeFluidOf('susy:dimethylformamide', 1000))
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .outputFluids(safeFluidOf('susy:cativa_catalyst_preparation', 1000))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.gtceu.mixer('ub8nnnptm4xlkz') // remapped from original line 204
    .inputFluids(safeFluidOf('susy:cativa_catalyst_preparation', 500))
    .itemInputs('1x #forge:dusts/bistriphenylphosphineiminium_chloride')
    .outputFluids(safeFluidOf('susy:cativa_catalyst_solution', 500))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.dryer('xscqawmbjzfaec') // remapped from original line 212
    .inputFluids(safeFluidOf('susy:cativa_catalyst_solution', 1000))
    .itemOutputs('10x #forge:dusts/cativa_catalyst')
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.gtceu.mixer('mhqlnujqpqmvbq') // remapped from original line 219
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