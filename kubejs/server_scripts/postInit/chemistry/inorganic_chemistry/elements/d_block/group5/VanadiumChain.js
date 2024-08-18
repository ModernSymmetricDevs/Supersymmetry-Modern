ServerEvents.recipes(event => {

  event.recipes.susy.reaction_furnace('cmcgvqrifpnvty') // remapped from original line 41
    .itemInputs('21x #forge:dusts/vanadinite')
    .itemInputs('6x #forge:dusts/salt')
    .itemOutputs('27x #forge:dusts/salt_roasted_vanadinite')
    .duration(200)
    .EUt(120)

  event.recipes.susy.reaction_furnace('2qxgpz7kjth9pm') // remapped from original line 49
    .itemInputs('42x #forge:dusts/vanadinite')
    .itemInputs('18x #forge:dusts/soda_ash')
    .itemOutputs('51x #forge:dusts/soda_ash_roasted_vanadinite')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 3000))
    .duration(300)
    .EUt(120)

  event.recipes.gtceu.centrifuge('aofpxtqclcegpa') // remapped from original line 58
    .itemInputs('51x #forge:dusts/soda_ash_roasted_vanadinite')
    .inputFluids(safeFluidOf('minecraft:water', 6000))
    .outputFluids(safeFluidOf('susy:sodium_vanadate_solution', 6000))
    .itemOutputs('21x #forge:dusts/leached_soda_ash_roasted_vanadinite')
    .duration(80)
    .EUt(120)

  event.recipes.gtceu.centrifuge('q48jsbtsarnxun') // remapped from original line 67
    .itemInputs('21x #forge:dusts/leached_soda_ash_roasted_vanadinite')
    .inputFluids(safeFluidOf('susy:gtfo_heated_water', 1000))
    .outputFluids(safeFluidOf('susy:lead_chloride_solution', 1000))
    .itemOutputs('18x #forge:dusts/lead_oxide')
    .duration(80)
    .EUt(120)

  event.recipes.gtceu.centrifuge('210dhfhru2gsmr') // remapped from original line 76
    .itemInputs('27x #forge:dusts/salt_roasted_vanadinite')
    .inputFluids(safeFluidOf('minecraft:water', 3000))
    .outputFluids(safeFluidOf('susy:sodium_vanadate_solution', 3000))
    .itemOutputs('12x #forge:dusts/leached_salt_roasted_vanadinite')
    .duration(80)
    .EUt(120)

  event.recipes.gtceu.centrifuge('8vzhydcstzrc0a') // remapped from original line 85
    .itemInputs('12x #forge:dusts/leached_salt_roasted_vanadinite')
    .inputFluids(safeFluidOf('susy:gtfo_heated_water', 3000))
    .outputFluids(safeFluidOf('susy:lead_chloride_solution', 3000))
    .itemOutputs('6x #forge:dusts/lead_oxide')
    .duration(80)
    .EUt(120)

  event.recipes.gtceu.distillery('gf1wlafobwsojy') // remapped from original line 94
    .inputFluids(safeFluidOf('susy:lead_chloride_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('3x #forge:dusts/lead_chloride')
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('gdyozztbkwwzqm') // remapped from original line 102
    .itemInputs('6x #forge:dusts/ammonium_chloride')
    .inputFluids(safeFluidOf('susy:sodium_vanadate_solution', 1000))
    .itemOutputs('9x #forge:dusts/ammonium_metavanadate')
    .outputFluids(safeFluidOf('gtceu:salt_water', 1000))
    .duration(80)
    .EUt(120)

  event.recipes.susy.roaster('n4ccl9ngkhug3b') // remapped from original line 111
    .itemInputs('18x #forge:dusts/ammonium_metavanadate')
    .itemOutputs('7x #forge:dusts/vanadium_pentoxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .outputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .duration(80)
    .EUt(120)

  event.recipes.gtceu.electromagnetic_separator('ln1gcimz0hc0oi') // remapped from original line 120
    .itemInputs('1x #forge:dusts/impure_vanadiferous_titanomagnetite')
    .itemOutputs('1x #forge:dusts/vanadiferous_titanomagnetite')
    .chancedOutput('2500x #forge:dusts/pegmatite_tailings', 2500, 500)
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.mixer('mqvy809w2ihlqn') // remapped from original line 128
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .itemInputs('8x #forge:dusts/vanadiferous_titanomagnetite')
    .outputFluids(safeFluidOf('susy:impure_vanadiferous_titanomagnetite_slurry', 2000))
    .EUt(120)
    .duration(200)

  event.recipes.susy.froth_flotation('chyhvyt7kojbyq') // remapped from original line 136
    .inputFluids(safeFluidOf('susy:impure_vanadiferous_titanomagnetite_slurry', 2000))
    .notConsumable(safeFluidOf('susy:methyl_isobutyl_carbinol', 100))
    .notConsumable(safeFluidOf('susy:n_octylamine', 100))
    .outputFluids(safeFluidOf('susy:vanadiferous_titanomagnetite_slurry', 1000))
    .outputFluids(safeFluidOf('susy:pegmatite_tailing_slurry', 1000))
    .EUt(480)
    .duration(800)

  event.recipes.susy.CLARIFIER('r3eipfqfwfreyz') // remapped from original line 146
    .inputFluids(safeFluidOf('susy:vanadiferous_titanomagnetite_slurry', 1000))
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .itemOutputs('16x #forge:dusts/flotated_vanadiferous_titanomagnetite')
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.centrifuge('3ugdjktiwthocf') // remapped from original line 154
    .itemInputs('1x #forge:dusts/magnesite')
    .itemOutputs('1x #forge:dusts/magnesium_carbonate')
    .EUt(30)
    .duration(160)

  event.recipes.susy.batch_reactor('y3qvwl8lyxucjr') // remapped from original line 161
    .itemInputs('3x #forge:dusts/magnesium_chloride')
    .inputFluids(safeFluidOf('susy:sodium_bicarbonate_solution', 2000))
    .itemOutputs('5x #forge:dusts/magnesium_carbonate')
    .outputFluids(safeFluidOf('gtceu:salt_water', 2000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.roaster('ecjyisdl5y74kx') // remapped from original line 171
    .itemInputs('5x #forge:dusts/magnesium_hydroxide')
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .itemOutputs('5x #forge:dusts/magnesium_carbonate')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.mixer('hwfhtzxd8eptys') // remapped from original line 180
    .itemInputs('5x #forge:dusts/calcite')
    .itemInputs('5x #forge:dusts/magnesium_carbonate')
    .itemOutputs('10x #forge:dusts/dolomite')
    .EUt(120)
    .duration(300)

  event.recipes.susy.advanced_arc_furnace('ntrltmu2l6dtep') // remapped from original line 229
    .itemInputs(metaitem('vti_rich_pig_iron') * 2)
    .inputFluids(safeFluidOf('gtceu:oxygen', 2700))
    .itemOutputs('2x #forge:ingots/steel')
    .itemOutputs(metaitem('vt_slag'))
    .EUt(240)
    .duration(300)

  event.recipes.gtceu.macerator('lxkgibwqhelxir') // remapped from original line 238
    .itemInputs(metaitem('vt_slag'))
    .itemOutputs('1x #forge:dusts/vt_slag')
    .EUt(120)
    .duration(200)

  event.recipes.gtceu.centrifuge('pbygdg7kmkk2qy') // remapped from original line 245
    .itemInputs('7x #forge:dusts/alkali_vt_slag')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .itemOutputs('6x #forge:dusts/titania_slag')
    .outputFluids(safeFluidOf('susy:sodium_vanadate_solution', 1000))
    .EUt(120)
    .duration(200)

  event.recipes.gtceu.centrifuge('rte7mhlj04krig') // remapped from original line 254
    .itemInputs('1x #forge:dusts/titania_slag')
    .inputFluids(safeFluidOf('susy:oleum', 1000))
    .itemOutputs('1x #forge:dusts/silicon_dioxide')
    .outputFluids(safeFluidOf('susy:titanyl_sulfate_solution', 1000))
    .EUt(120)
    .duration(200)

  event.recipes.susy.reaction_furnace('wasanz5xxnotmz') // remapped from original line 263
    .itemInputs('5x #forge:dusts/high_purity_calcium')
    .itemInputs('7x #forge:dusts/vanadium_pentoxide')
    .itemOutputs('2x #forge:dusts/vanadium')
    .itemOutputs('10x #forge:dusts/quicklime')
    .EUt(120)
    .duration(100)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (fuel in sintering_fuels) {
  //     if (!fuel.isPlasma) {
  //         for (comburent in sintering_comburents) {
  //             ROTARY_KILN.recipeBuilder()
  //                     .inputs(ore('dustFlotatedVanadiferousTitanomagnetite') * 11)
  //                     .inputs(ore('dustCoke') * 7)
  //                     .inputs(ore('dustDolomite'))
  //                     .fluidInputs(fluid(fuel.name) * fuel.amountRequired)
  //                     .fluidInputs(fluid(comburent.name) * comburent.amountRequired)
  //                     .outputs(metaitem('vti_rich_pig_iron') * 4)
  //                     .fluidOutputs(fluid('carbon_monoxide') * 7000)
  //                     .duration(fuel.duration + comburent.duration)
  //                     .EUt(120)
  //                     .buildAndRegister()
  // 
  //             ROTARY_KILN.recipeBuilder()
  //                     .inputs(ore('dustFlotatedVanadiferousTitanomagnetite') * 11)
  //                     .inputs(ore('dustAnyPurityCarbon') * 7)
  //                     .inputs(ore('dustDolomite'))
  //                     .fluidInputs(fluid(fuel.name) * fuel.amountRequired)
  //                     .fluidInputs(fluid(comburent.name) * comburent.amountRequired)
  //                     .outputs(metaitem('vti_rich_pig_iron') * 4)
  //                     .fluidOutputs(fluid('carbon_monoxide') * 7000)
  //                     .duration(fuel.duration + comburent.duration)
  //                     .EUt(120)
  //                     .buildAndRegister()
  // 
  //             ROTARY_KILN.recipeBuilder()
  //                     .inputs(ore('dustVtSlag'))
  //                     .inputs(ore('dustSodaAsh') * 5)
  //                     .fluidInputs(fluid(fuel.name) * fuel.amountRequired)
  //                     .fluidInputs(fluid(comburent.name) * comburent.amountRequired)
  //                     .outputs(metaitem('dustAlkaliVtSlag'))
  //                     .fluidOutputs(fluid('carbon_dioxide') * 1000)
  //                     .duration(fuel.duration + comburent.duration)
  //                     .EUt(120)
  //                     .buildAndRegister()
  //         }
  //     }
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import gregtech.api.GregTechAPI;
  // import gregtech.api.unification.material.Material;
  // import globals.Globals
  // import static globals.SinteringGlobals.*
  // import static gregtech.api.unification.material.Materials.*;
  // VACUUM_FREEZER = recipemap('vacuum_freezer')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // TBR = recipemap('trickle_bed_reactor')
  // FBR = recipemap('fixed_bed_reactor')
  // BCR = recipemap('bubble_column_reactor')
  // BR = recipemap('batch_reactor')
  // ROTARY_KILN = recipemap('rotary_kiln')
  // MACERATOR = recipemap('macerator')
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
  // FLOTATION = recipemap('froth_flotation')
  // ADVANCED_ARC_FURNACE = recipemap('advanced_arc_furnace')
});