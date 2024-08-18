ServerEvents.recipes(event => {

  event.recipes.susy.batch_reactor('vo3pzdsyusy13w') // remapped from original line 14
    .itemInputs('8x #forge:dusts/zinc_leach_residue')
    .inputFluids(safeFluidOf('gtceu:diluted_hydrochloric_acid', 2000))
    .itemOutputs('8x #forge:dusts/zinc_hydrochloric_leach_residue')
    .outputFluids(safeFluidOf('susy:indium_leach', 2000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.batch_reactor('6etkwzmj8nyk8g') // remapped from original line 23
    .itemInputs('3x #forge:dusts/soda_ash')
    .inputFluids(safeFluidOf('susy:indium_leach', 2000))
    .chancedOutput('1x #forge:dusts/indium_residue', 8000, 0)
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 500))
    .outputFluids(safeFluidOf('susy:wastewater', 2000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.batch_reactor('wzvqwpcrx5emra') // remapped from original line 33
    .itemInputs('1x #forge:dusts/indium_residue')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .itemOutputs('7x #forge:dusts/crude_indium_iii_hydroxide')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.batch_reactor('pryizeaihyn6qn') // remapped from original line 42
    .itemInputs('14x #forge:dusts/crude_indium_iii_hydroxide')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 3000))
    .outputFluids(safeFluidOf('susy:crude_indium_iii_sulfate_solution', 6000))
    .EUt(30)
    .duration(320)

  event.recipes.susy.bubble_column_reactor('zc0hgtixisfxnh') // remapped from original line 50
    .inputFluids(safeFluidOf('susy:crude_indium_iii_sulfate_solution', 300))
    .inputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 5))
    .outputFluids(safeFluidOf('susy:indium_iii_sulfate_solution', 300))
    .EUt(30)
    .duration(16)

  event.recipes.susy.batch_reactor('ryhidjvevhbmjz') // remapped from original line 58
    .itemInputs('3x #forge:dusts/zinc')
    .inputFluids(safeFluidOf('susy:indium_iii_sulfate_solution', 6000))
    .itemOutputs(safeItemId('2x susy:sponge.indium'))
    .outputFluids(safeFluidOf('susy:zinc_sulfate_solution', 6000))
    .EUt(30)
    .duration(320)

  event.recipes.gtceu.electrolyzer('tceey0rjeysv25') // remapped from original line 67
    .notConsumable(safeItemId('1x susy:graphite_electrode'))
    .notConsumable('1x #forge:rods/zinc')
    .inputFluids(safeFluidOf('susy:zinc_sulfate_solution', 2000))
    .itemOutputs('1x #forge:dusts/zinc')
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 2000))
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .EUt(30)
    .duration(320)

  event.recipes.susy.roaster('9rhj7f6rgequyv') // remapped from original line 80
    .circuit(2)
    .itemInputs(safeItemId('1x susy:anode_slime.lead'))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 150))
    .itemOutputs('1x #forge:dusts/sulfatized_lead_slime')
    .EUt(voltAmps[3])
    .duration(200)

  event.recipes.gtceu.chemical_bath('yy4pys7oq81vzi') // remapped from original line 89
    .itemInputs('1x #forge:dusts/sulfatized_lead_slime')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 300))
    .itemOutputs('1x #forge:dusts/black_metal')
    .outputFluids(safeFluidOf('susy:impure_indium_leach', 300))
    .EUt(30)
    .duration(320)

  event.recipes.susy.batch_reactor('ows42cansbzbkv') // remapped from original line 98
    .itemInputs('2x #forge:dusts/indium')
    .inputFluids(safeFluidOf('susy:impure_indium_leach', 12000))
    .itemOutputs('3x #forge:dusts/copper')
    .outputFluids(safeFluidOf('susy:indium_iii_sulfate_solution', 12000))
    .EUt(30)
    .duration(320)

  event.recipes.gtceu.macerator('eyndhuuv10fvp2') // remapped from original line 109
    .itemInputs(safeItemId('1x susy:sponge.indium'))
    .itemOutputs('1x #forge:dusts/indium')
    .EUt(30)
    .duration(20)

  event.recipes.susy.vacuum_distillation('i9cfmcw28yhtct') // remapped from original line 116
    .itemInputs('1x #forge:dusts/indium')
    .chancedOutput('1x #forge:dusts/high_purity_indium', 9900, 0)
    .EUt(120)
    .duration(1000)

  event.recipes.gtceu.MIXER('kfqfbvo0ugrron') // remapped from original line 123
    .itemInputs('4x #forge:dusts/indium_chloride')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .outputFluids(safeFluidOf('susy:indium_chloride_solution', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.electrolytic_cell('dpteicwpzcmr5p') // remapped from original line 131
    .notConsumable('1x #forge:plates/high_purity_indium')
    .notConsumable(safeFluidOf('susy:indium_chloride_solution', 1000))
    .itemInputs('1x #forge:plates/indium')
    .chancedOutput('1x #forge:dusts/high_purity_indium', 9900, 0)
    .EUt(120)
    .duration(100)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // BR = recipemap('batch_reactor')
  // BCR = recipemap('bubble_column_reactor')
  // ROASTER = recipemap('roaster')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // ELECTROLYZER = recipemap('electrolyzer')
  // MACERATOR = recipemap('macerator')
  // VACUUM_DT = recipemap('vacuum_distillation')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  //     
});