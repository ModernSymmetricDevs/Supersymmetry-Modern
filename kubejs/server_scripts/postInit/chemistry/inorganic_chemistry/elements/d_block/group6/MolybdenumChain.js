ServerEvents.recipes(event => {

  event.recipes.gtceu.MIXER('lg9xwyhsey43h5') // remapped from original line 14
    .itemInputs('8x #forge:dusts/molybdenite')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2500))
    .outputFluids(safeFluidOf('susy:impure_molybdenite_slurry', 2500))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('ymfhclm4biyhc3') // remapped from original line 22
    .inputFluids(safeFluidOf('susy:impure_molybdenite_slurry', 2500))
    .notConsumable('1x #forge:dusts/quicklime')
    .notConsumable('1x #forge:dusts/potassium_amyl_xanthate')
    .notConsumable(safeFluidOf('susy:methyl_isobutyl_carbinol', 100))
    .outputFluids(safeFluidOf('susy:copper_molybdenite_slurry', 2000))
    .outputFluids(safeFluidOf('susy:pegmatite_tailing_slurry', 500))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.reaction_furnace('dz4dvuweircpho') // remapped from original line 33
    .itemInputs('5x #forge:dusts/any_purity_sulfur')
    .inputFluids(safeFluidOf('gtceu:phosphorus', 288))
    .itemOutputs('7x #forge:dusts/phosphorus_pentasulfide')
    .EUt(voltAmps[3])
    .duration(20)

  event.recipes.susy.batch_reactor('jurtaavflpt9mg') // remapped from original line 41
    .itemInputs('7x #forge:dusts/phosphorus_pentasulfide')
    .itemInputs('18x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:sodium_dithiophosphate_solution', 4000))
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 2000))
    .EUt(voltAmps[3])
    .duration(20)

  event.recipes.susy.froth_flotation('wax71nhdawxjjr') // remapped from original line 51
    .inputFluids(safeFluidOf('susy:copper_molybdenite_slurry', 2000))
    .inputFluids(safeFluidOf('susy:sodium_dithiophosphate_solution', 50))
    .notConsumable('3x #forge:dusts/sodium_cyanide')
    .notConsumable(safeFluidOf('gtceu:diesel', 1000))
    .notConsumable(safeFluidOf('susy:methyl_isobutyl_carbinol', 100))
    .outputFluids(safeFluidOf('susy:copper_concentrate_slurry', 1000))
    .outputFluids(safeFluidOf('susy:molybdenite_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.CLARIFIER('rixc965y3l5tof') // remapped from original line 63
    .inputFluids(safeFluidOf('susy:molybdenite_slurry', 1000))
    .itemOutputs('16x #forge:dusts/flotated_molybdenite')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.gtceu.electric_blast_furnace('b5emfgd9optuio') // remapped from original line 73
    .itemInputs('1x #forge:dusts/wulfenite')
    .itemInputs('6x #forge:dusts/sodium_hydroxide')
    .itemOutputs('9x #forge:dusts/alkali_fused_wulfenite')
    .blastFurnaceTemp(700)
    .duration(100)
    .EUt(voltAmps[4])

  event.recipes.susy.batch_reactor('wlvvljcrirwsvk') // remapped from original line 82
    .itemInputs('9x #forge:dusts/alkali_fused_wulfenite')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .itemOutputs('5x #forge:dusts/lead_ii_hydroxide')
    .outputFluids(safeFluidOf('susy:sodium_molybdate_solution', 1000))
    .duration(100)
    .EUt(voltAmps[3])

  event.recipes.susy.crystallizer('43v7fbqkf9dazs') // remapped from original line 91
    .notConsumable('1x #forge:springs/nichrome')
    .inputFluids(safeFluidOf('susy:sodium_molybdate_solution', 2000))
    .inputFluids(safeFluidOf('susy:ammonium_chloride_solution', 4000))
    .itemOutputs('19x #forge:dusts/ammonium_dimolybdate')
    .outputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .outputFluids(safeFluidOf('susy:dense_steam', 3000))
    .outputFluids(safeFluidOf('gtceu:salt_water', 4000))
    .duration(100)
    .EUt(voltAmps[3])

  event.recipes.susy.roaster('pwsagiorknpmfq') // remapped from original line 105
    .itemInputs('3x #forge:dusts/flotated_molybdenite')
    .inputFluids(safeFluidOf('gtceu:oxygen', 7000))
    .itemOutputs('4x #forge:dusts/molybdenum_trioxide')
    .outputFluids(safeFluidOf('susy:molybdenite_flue_gas', 2000))
    .duration(100)
    .EUt(voltAmps[3])

  event.recipes.susy.batch_reactor('sy2ibfyhfpwazv') // remapped from original line 114
    .itemInputs('4x #forge:dusts/molybdenum_trioxide')
    .inputFluids(safeFluidOf('susy:ammonia_solution', 2000))
    .outputFluids(safeFluidOf('susy:ammonium_molybdate_solution', 1000))
    .duration(100)
    .EUt(voltAmps[3])

  event.recipes.susy.crystallizer('96r17k1ygroxkk') // remapped from original line 122
    .notConsumable('1x #forge:springs/nichrome')
    .inputFluids(safeFluidOf('susy:ammonium_molybdate_solution', 2000))
    .itemOutputs('19x #forge:dusts/ammonium_dimolybdate')
    .outputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .outputFluids(safeFluidOf('susy:dense_steam', 2000))
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(100)
    .EUt(voltAmps[3])

  event.recipes.susy.roaster('dzvzbkktrldu0s') // remapped from original line 135
    .itemInputs('4x #forge:dusts/molybdenum_trisulfide')
    .inputFluids(safeFluidOf('gtceu:oxygen', 9000))
    .itemOutputs('4x #forge:dusts/impure_molybdenum_trioxide')
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 3000))
    .duration(100)
    .EUt(voltAmps[3])

  event.recipes.susy.batch_reactor('drqbahqe1tl1em') // remapped from original line 144
    .itemInputs('4x #forge:dusts/impure_molybdenum_trioxide')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 1000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .outputFluids(safeFluidOf('susy:molybdic_acid_solution', 1000)O
    .duration(100)
    .EUt(voltAmps[3])

  event.recipes.susy.continuous_stirred_tank_reactor('za5mwtavdxutoc') // remapped from original line 153
    .inputFluids(safeFluidOf('susy:molybdic_acid_solution', 1000))
    .inputFluids(safeFluidOf('susy:ammonia_solution', 3000))
    .outputFluids(safeFluidOf('susy:neutralized_ammonium_molybdate_solution', 4000))
    .duration(100)
    .EUt(voltAmps[3])

  event.recipes.susy.crystallizer('nry8fwfe9dk9hb') // remapped from original line 161
    .notConsumable('1x #forge:springs/nichrome')
    .inputFluids(safeFluidOf('susy:neutralized_ammonium_molybdate_solution', 8000))
    .itemOutputs('19x #forge:dusts/ammonium_dimolybdate')
    .outputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .outputFluids(safeFluidOf('susy:dense_steam', 7000))
    .outputFluids(safeFluidOf('susy:ammonium_chloride_solution', 2000))
    .duration(100)
    .EUt(voltAmps[3])

  event.recipes.susy.roaster('hwbyki39vwxxoe') // remapped from original line 174
    .itemInputs('19x #forge:dusts/ammonium_dimolybdate')
    .itemOutputs('8x #forge:dusts/purified_molybdenum_trioxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .outputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .duration(100)
    .EUt(voltAmps[3])

  event.recipes.gtceu.electric_blast_furnace('rnpzjhku3wwvuv') // remapped from original line 185
    .itemInputs('4x #forge:dusts/impure_molybdenum_trioxide')
    .inputFluids(safeFluidOf('gtceu:air', 1000))
    .outputFluids(safeFluidOf('susy:sublimated_molybdenum_trioxide', 1000))
    .blastFurnaceTemp(1400)
    .duration(100)
    .EUt(voltAmps[5])

  event.recipes.gtceu.electric_blast_furnace('rkxy0bi7blt8vc') // remapped from original line 194
    .itemInputs('4x #forge:dusts/molybdenum_trioxide')
    .inputFluids(safeFluidOf('gtceu:air', 1000))
    .outputFluids(safeFluidOf('susy:sublimated_molybdenum_trioxide', 1000))
    .blastFurnaceTemp(1400)
    .duration(100)
    .EUt(voltAmps[5])

  event.recipes.gtceu.sifter('5zttdrh0ggtvjy') // remapped from original line 203
    .notConsumable(metaitem('item_filter'))
    .inputFluids(safeFluidOf('susy:sublimated_molybdenum_trioxide', 1000))
    .chancedOutput('4x #forge:dusts/purified_molybdenum_trioxide', 9500, 0)
    .outputFluids(safeFluidOf('gtceu:air', 1000))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.reaction_furnace('weavvxz0bjh3gr') // remapped from original line 214
    .inputFluids(safeFluidOf('gtceu:hydrogen', 6000))
    .itemInputs('4x #forge:dusts/purified_molybdenum_trioxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 3000))
    .itemOutputs('1x #forge:dusts/molybdenum')
    .duration(100)
    .EUt(voltAmps[4])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // ROASTER = recipemap('roaster')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // BR = recipemap('batch_reactor')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // CRYSTALLIZER = recipemap('crystallizer')
  // EBF = recipemap('electric_blast_furnace')
  // SIFTER = recipemap('sifter')
  // FF = recipemap('froth_flotation')
  //         
});