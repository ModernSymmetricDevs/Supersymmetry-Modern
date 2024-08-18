ServerEvents.recipes(event => {

  event.recipes.gtceu.mixer('9ricimieuzbodu') // remapped from original line 32
    .inputFluids(safeFluidOf('susy:hot_sulfuric_acid', 2000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 4000))
    .itemInputs('1x #forge:dusts/carnotite')
    .outputFluids(safeFluidOf('susy:carnotite_leach', 6000))
    .EUt(120)
    .duration(300)

  event.recipes.gtceu.mixer('dpzpvlazvuch8t') // remapped from original line 41
    .inputFluids(safeFluidOf('susy:carnotite_leach', 6000))
    .itemInputs('1x #forge:dusts/any_purity_iron')
    .itemInputs('3x #forge:dusts/calcite')
    .outputFluids(safeFluidOf('susy:reduced_carnotite_leach', 6000))
    .EUt(120)
    .duration(300)

  event.recipes.gtceu.mixer('mgjmljv9ndvbfo') // remapped from original line 50
    .inputFluids(safeFluidOf('susy:kerosene', 900))
    .inputFluids(safeFluidOf('susy:tributyl_phosphate', 40))
    .inputFluids(safeFluidOf('susy:di_two_ethylhexyl_phosphoric_acid', 60))
    .outputFluids(safeFluidOf('susy:uranium_vanadium_extraction_mixture', 1000))
    .EUt(120)
    .duration(200)

  event.recipes.gtceu.centrifuge('qkqls5qfyokwwq') // remapped from original line 59
    .inputFluids(safeFluidOf('susy:uranium_vanadium_extraction_mixture', 1000))
    .inputFluids(safeFluidOf('susy:reduced_carnotite_leach', 1000))
    .outputFluids(safeFluidOf('susy:uranium_vanadium_extract', 1000))
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(240)
    .duration(200)

  event.recipes.gtceu.centrifuge('paieifd3twhvdf') // remapped from original line 68
    .inputFluids(safeFluidOf('susy:uranium_vanadium_extract', 3000))
    .inputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 2000))
    .outputFluids(safeFluidOf('susy:uranium_extract', 3000))
    .outputFluids(safeFluidOf('susy:acidic_vanadyl_solution', 2000))
    .EUt(240)
    .duration(200)

  // Contains GTFO resources
  //event.recipes.gtceu.large_chemical_reactor('qdkqjvwscd1tqz') // remapped from original line 77
    //.inputFluids(safeFluidOf('susy:acidic_vanadyl_solution', 6000))
    //.inputFluids(safeFluidOf('gtceu:ammonia', 1000))
    //.itemInputs(safeItemId('5x gregtechfoodoption:sodium_chlorate_dust'))
    //.outputFluids(safeFluidOf('susy:wastewater', 6000))
    //.itemOutputs('7x #forge:dusts/vanadium_pentoxide')
    //.EUt(240)
    //.duration(200)

  event.recipes.gtceu.centrifuge('jbizphoujfe8z2') // remapped from original line 87
    .inputFluids(safeFluidOf('susy:uranium_extract', 3000))
    .inputFluids(safeFluidOf('susy:soda_ash_solution', 1000))
    .outputFluids(safeFluidOf('susy:uranium_vanadium_extraction_mixture', 3000))
    .outputFluids(safeFluidOf('susy:impure_uranyl_carbonate_solution', 1000))
    .EUt(720)
    .duration(160)

  event.recipes.gtceu.sifter('8qoyzirugnuhc7') // remapped from original line 96
    .inputFluids(safeFluidOf('susy:impure_uranyl_carbonate_solution', 6000))
    .chancedOutput('7x #forge:dusts/aluminium_hydroxide', 1000, 1000)
    .chancedOutput('5x #forge:dusts/iron_carbonate', 4000, 1000)
    .outputFluids(safeFluidOf('susy:uranyl_carbonate_solution', 6000))
    .EUt(240)
    .duration(200)

  event.recipes.susy.roaster('f6wiu4xlilmygj') // remapped from original line 105
    .itemInputs('5x #forge:dusts/iron_carbonate')
    .itemOutputs('2x #forge:dusts/iron_ii_oxide')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .EUt(120)
    .duration(200)

  event.recipes.susy.continuous_stirred_tank_reactor('qpki0jfrdtamfg') // remapped from original line 113
    .inputFluids(safeFluidOf('susy:uranyl_carbonate_solution', 50))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:uranyl_sulfate_solution', 100))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 50))
    .EUt(240)
    .duration(5)

  event.recipes.gtceu.large_chemical_reactor('bu9om5dfk4hkdc') // remapped from original line 122
    .inputFluids(safeFluidOf('susy:uranyl_sulfate_solution', 2000))
    .inputFluids(safeFluidOf('gtceu:ammonia', 6000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .outputFluids(safeFluidOf('susy:ammonium_sulfate_solution', 2000))
    .itemOutputs('19x #forge:dusts/ammonium_diuranate')
    .EUt(720)
    .duration(200)

  event.recipes.susy.reaction_furnace('ka1ssvb6o5s2sg') // remapped from original line 132
    .itemInputs('19x #forge:dusts/ammonium_diuranate')
    .inputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .itemOutputs('6x #forge:dusts/uranium_dioxide')
    .outputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .outputFluids(safeFluidOf('susy:dense_steam', 3000))
    .EUt(3840)
    .duration(600)

  event.recipes.susy.reaction_furnace('fpnpq0tcgm5qgg') // remapped from original line 142
    .itemInputs('3x #forge:dusts/uranium_dioxide')
    .itemInputs('2x #forge:dusts/any_purity_magnesium')
    .itemOutputs('1x #forge:dusts/uranium')
    .itemOutputs('4x #forge:dusts/magnesia')
    .EUt(3840)
    .duration(300)

  event.recipes.susy.rotary_kiln('erbjohmeqez20n') // remapped from original line 151
    .itemInputs('3x #forge:dusts/uranium_dioxide')
    .inputFluids(safeFluidOf('susy:hydrogen_fluoride', 4000))
    .itemOutputs('5x #forge:dusts/uranium_tetrafluoride')
    .outputFluids(safeFluidOf('susy:dense_steam', 2000))
    .EUt(1920)
    .duration(80)

  event.recipes.susy.fluidized_bed_reactor('bc44anzn39bytz') // remapped from original line 160
    .itemInputs('5x #forge:dusts/uranium_tetrafluoride')
    .inputFluids(safeFluidOf('gtceu:fluorine', 2000))
    .outputFluids(safeFluidOf('gtceu:uranium_hexafluoride', 1000))
    .EUt(240)
    .duration(80)

  event.recipes.susy.fluidized_bed_reactor('l6kpcjnr5oryva') // remapped from original line 168
    .inputFluids(safeFluidOf('gtceu:uranium_hexafluoride', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .itemOutputs('5x #forge:dusts/uranium_tetrafluoride')
    .outputFluids(safeFluidOf('susy:hydrogen_fluoride', 2000))
    .EUt(240)
    .duration(80)

  event.recipes.susy.reaction_furnace('xkdnrfsnpcqdmb') // remapped from original line 177
    .itemInputs('5x #forge:dusts/uranium_tetrafluoride')
    .itemInputs('2x #forge:dusts/magnesium')
    .itemOutputs('1x #forge:dusts/uranium238'.first())
    .itemOutputs('6x #forge:dusts/magnesium_fluoride')
    .EUt(3840)
    .duration(80)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // VACUUM_FREEZER = recipemap('vacuum_freezer')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // TBR = recipemap('trickle_bed_reactor')
  // FBR = recipemap('fixed_bed_reactor')
  // BCR = recipemap('bubble_column_reactor')
  // BR = recipemap('batch_reactor')
  // FLUIDIZEDBR = recipemap('fluidized_bed_reactor')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // DISTILLERY = recipemap('distillery')
  // ROASTER = recipemap('roaster')
  // MIXER = recipemap('mixer')
  // DRYER = recipemap('dryer')
  // SIFTER = recipemap('sifter')
  // CENTRIFUGE = recipemap('centrifuge')
  // PYROLYSE = recipemap('pyrolyse_oven')
  // LCR = recipemap('large_chemical_reactor')
  // EBF = recipemap('electric_blast_furnace')
  // VULCANIZER = recipemap('vulcanizing_press')
  // ALLOY_SMELTER = recipemap('alloy_smelter')
  // ARC_FURNACE = recipemap('arc_furnace')
  // AUTOCLAVE = recipemap('autoclave')
  // COMPRESSOR = recipemap('compressor')
  // ASSEMBLER = recipemap('assembler')
  // ELECTROLYZER = recipemap('electrolyzer')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // ELECTROMAGNETIC_SEPARATOR = recipemap('electromagnetic_separator')
  // PSA = recipemap('pressure_swing_adsorption')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // ROTARY_KILN = recipemap('rotary_kiln')
});