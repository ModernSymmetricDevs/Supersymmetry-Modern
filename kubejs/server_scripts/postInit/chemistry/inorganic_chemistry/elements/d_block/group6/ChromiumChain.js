ServerEvents.recipes(event => {

  event.recipes.susy.advanced_arc_furnace('xgivrnkdi9rzoh') // remapped from original line 19
    .itemInputs('1x #forge:dusts/chromite')
    .itemInputs('4x #forge:dusts/any_purity_carbon')
    .itemInputs('1x #forge:dusts/tiny_quicklime')
    .itemOutputs('3x #forge:dusts/ferrochromium')
    .outputFluids(safeFluidOf('gtceu:carbon_monoxide', 4000))
    .duration(200)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('2kcima8gmzh7fo') // remapped from original line 44
    .itemInputs('10x #forge:dusts/sodium_chromate_mixture')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 8000))
    .itemOutputs('10x #forge:dusts/iron_iii_oxide')
    .outputFluids(safeFluidOf('susy:sodium_chromate_solution', 8000))
    .duration(800)
    .EUt(voltAmps[2])

  event.recipes.susy.continuous_stirred_tank_reactor('e0qhmlina6ovnn') // remapped from original line 53
    .inputFluids(safeFluidOf('susy:sodium_chromate_solution', 50))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:sodium_dichromate_solution', 50))
    .duration(5)
    .EUt(voltAmps[2])

  event.recipes.gtceu.DISTILLATION_TOWER('dmyv4cju1co9h3') // remapped from original line 61
    .inputFluids(safeFluidOf('susy:sodium_dichromate_solution', 1000))
    .itemOutputs('11x #forge:dusts/sodium_dichromate')
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.susy.roaster('nze7cgnatlocqx') // remapped from original line 70
    .itemInputs('2x #forge:dusts/any_purity_carbon')
    .itemInputs('11x #forge:dusts/sodium_dichromate')
    .itemOutputs('2x #forge:dusts/chromium_soda_mixture')
    .outputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('rohyimapoda7gw') // remapped from original line 79
    .itemInputs('2x #forge:dusts/chromium_soda_mixture')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('5x #forge:dusts/chromium_iii_oxide')
    .outputFluids(safeFluidOf('susy:soda_ash_solution', 1000))
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.susy.roaster('75qsv16esqjhu5') // remapped from original line 88
    .itemInputs('14x #forge:dusts/chromium_iii_hydroxide')
    .itemOutputs('5x #forge:dusts/chromium_iii_oxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 3000))
    .EUt(voltAmps[2])
    .duration(100)

  event.recipes.susy.reaction_furnace('ldfamikz95skga') // remapped from original line 96
    .itemInputs('2x #forge:dusts/any_purity_aluminium')
    .itemInputs('5x #forge:dusts/chromium_iii_oxide')
    .itemOutputs('5x #forge:dusts/alumina')
    .itemOutputs('2x #forge:dusts/chrome')
    .EUt(voltAmps[2])
    .duration(100)

  event.recipes.susy.bubble_column_reactor('xjf3hkv1a7rvpi') // remapped from original line 105
    .inputFluids(safeFluidOf('gtceu:ammonia', 100))
    .inputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 100))
    .outputFluids(safeFluidOf('susy:ammonium_sulfate_solution', 50))
    .EUt(voltAmps[2])
    .duration(5)

  event.recipes.gtceu.DISTILLERY('c5x2xxfdkcuaqh') // remapped from original line 113
    .inputFluids(safeFluidOf('susy:ammonium_sulfate_solution', 1000))
    .itemOutputs('15x #forge:dusts/ammonium_sulfate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(voltAmps[2])
    .duration(5)

  event.recipes.susy.batch_reactor('ol6tqftmen6gqs') // remapped from original line 121
    .circuit(1)
    .itemInputs('3x #forge:dusts/ferrochromium')
    .itemInputs('15x #forge:dusts/ammonium_sulfate')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 6000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 750))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .outputFluids(safeFluidOf('susy:dissolved_ferrochromium', 1000))
    .EUt(voltAmps[3])
    .duration(200)

  event.recipes.susy.batch_reactor('5k27drnjov9lsh') // remapped from original line 133
    .inputFluids(safeFluidOf('susy:dissolved_ferrochromium', 1000))
    .inputFluids(safeFluidOf('gtceu:ammonia', 4000))
    .itemOutputs('21x #forge:dusts/crude_ammonium_iron_ii_sulfate')
    .outputFluids(safeFluidOf('susy:ammonium_chrome_alum_solution', 750))
    .EUt(voltAmps[3])
    .duration(200)

  event.recipes.susy.batch_reactor('5q94osr0f84axv') // remapped from original line 142
    .inputFluids(safeFluidOf('susy:dissolved_ferrochromium', 1000))
    .inputFluids(safeFluidOf('gtceu:ammonia', 4000))
    .inputFluids(safeFluidOf('susy:mohr_mother_liquor', 250))
    .itemOutputs('21x #forge:dusts/crude_ammonium_iron_ii_sulfate')
    .outputFluids(safeFluidOf('susy:ammonium_chrome_alum_solution', 1000))
    .EUt(voltAmps[3])
    .duration(200)

  event.recipes.susy.batch_reactor('vdhxm5ugiddtpi') // remapped from original line 152
    .itemInputs('21x #forge:dusts/crude_ammonium_iron_ii_sulfate')
    .inputFluids(safeFluidOf('susy:gtfo_heated_water', 250))
    .outputFluids(safeFluidOf('susy:crude_ammonium_iron_ii_sulfate_solution', 250))
    .EUt(voltAmps[3])
    .duration(200)

  event.recipes.susy.crystallizer('6ykrswzz5utxkw') // remapped from original line 160
    .inputFluids(safeFluidOf('susy:crude_ammonium_iron_ii_sulfate_solution', 250))
    .itemOutputs('21x #forge:dusts/ammonium_iron_ii_sulfate')
    .outputFluids(safeFluidOf('susy:mohr_mother_liquor', 250))
    .EUt(voltAmps[3])
    .duration(200)

  event.recipes.susy.batch_reactor('dfzkdmr1dj6art') // remapped from original line 168
    .itemInputs('21x #forge:dusts/ammonium_iron_ii_sulfate')
    .inputFluids(safeFluidOf('susy:gtfo_heated_water', 1000))
    .outputFluids(safeFluidOf('susy:ammonium_iron_ii_sulfate_solution', 1000))
    .EUt(voltAmps[3])
    .duration(200)

  event.recipes.susy.batch_reactor('m2ivw77fvitted') // remapped from original line 176
    .inputFluids(safeFluidOf('susy:ammonia_solution', 2000))
    .inputFluids(safeFluidOf('susy:crude_ammonium_iron_ii_sulfate_solution', 1000))
    .itemOutputs('5x #forge:dusts/iron_ii_hydroxide')
    .outputFluids(safeFluidOf('susy:ammonium_sulfate_solution', 2000))
    .EUt(voltAmps[3])
    .duration(200)

  event.recipes.susy.batch_reactor('of8vpwivteuyxc') // remapped from original line 185
    .inputFluids(safeFluidOf('susy:warm_water', 1000))
    .inputFluids(safeFluidOf('susy:ammonium_chrome_alum_solution', 1000))
    .outputFluids(safeFluidOf('susy:aged_ammonium_chrome_alum_solution', 2000))
    .EUt(voltAmps[1])
    .duration(800)

  event.recipes.susy.crystallizer('dl6fln7li3cdhz') // remapped from original line 193
    .inputFluids(safeFluidOf('susy:aged_ammonium_chrome_alum_solution', 2000))
    .itemOutputs('12x #forge:dusts/ammonium_chrome_alum')
    .outputFluids(safeFluidOf('susy:chromium_mother_liquor', 2000))
    .EUt(voltAmps[3])
    .duration(200)

  event.recipes.susy.batch_reactor('pgm4trufxml0t7') // remapped from original line 201
    .inputFluids(safeFluidOf('susy:gtfo_heated_water', 1000))
    .itemInputs('16x #forge:dusts/ammonium_chrome_alum')
    .outputFluids(safeFluidOf('susy:purified_ammonium_chrome_alum_solution', 1000))
    .EUt(voltAmps[1])
    .duration(800)

  event.recipes.gtceu.electrolytic_cell('dhtqz8xgnbxkfb') // remapped from original line 209
    .inputFluids(safeFluidOf('susy:purified_ammonium_chrome_alum_solution', 1000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 400))
    .notConsumable('1x #forge:plates/stainless_steel')
    .notConsumable('1x #forge:plates/silver')
    .notConsumable('4x #forge:foils/asbestos')
    .chancedOutput('8000x #forge:dusts/electrolytic_chromium', 8000, 0)
    .outputFluids(safeFluidOf('gtceu:oxygen', 1200))
    .outputFluids(safeFluidOf('susy:chromium_anolyte', 100))
    .outputFluids(safeFluidOf('susy:chromium_catholyte', 100))
    .EUt(voltAmps[3])
    .duration(200)

  event.recipes.susy.batch_reactor('ollsmxnpgey4sd') // remapped from original line 223
    .inputFluids(safeFluidOf('susy:warm_water', 1000))
    .inputFluids(safeFluidOf('susy:chromium_catholyte', 1000))
    .outputFluids(safeFluidOf('susy:aged_ammonium_chrome_alum_solution', 2000))
    .EUt(voltAmps[1])
    .duration(800)

  event.recipes.susy.bubble_column_reactor('9nfo8ogaksmyva') // remapped from original line 231
    .inputFluids(safeFluidOf('susy:chromium_anolyte', 100))
    .inputFluids(safeFluidOf('gtceu:sulfur_dioxide', 150))
    .outputFluids(safeFluidOf('susy:reduced_chromium_anolyte', 100))
    .EUt(voltAmps[1])
    .duration(10)

  event.recipes.susy.batch_reactor('vabfh98vgp5m07') // remapped from original line 239
    .itemInputs('3x #forge:dusts/ferrochromium')
    .itemInputs('15x #forge:dusts/ammonium_sulfate')
    .inputFluids(safeFluidOf('susy:reduced_chromium_anolyte', 3000))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 6000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 750))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .outputFluids(safeFluidOf('susy:dissolved_ferrochromium', 2000))
    .EUt(voltAmps[3])
    .duration(200)

  event.recipes.susy.batch_reactor('ikqukf5rb4ulsp') // remapped from original line 251
    .itemInputs('3x #forge:dusts/ferrochromium')
    .itemInputs('15x #forge:dusts/ammonium_sulfate')
    .inputFluids(safeFluidOf('susy:chromium_mother_liquor', 8000))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 6000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 750))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .outputFluids(safeFluidOf('susy:dissolved_ferrochromium', 2000))
    .EUt(voltAmps[3])
    .duration(200)

  event.recipes.susy.vacuum_chamber('j6ust3dttanbzc') // remapped from original line 263
    .inputFluids(safeFluidOf('susy:electrolytic_chromium', 1440))
    .outputFluids(safeFluidOf('susy:high_purity_chrome', 1440))
    .outputFluids(safeFluidOf('gtceu:oxygen', 144))
    .EUt(voltAmps[3])
    .duration(200)

  event.recipes.susy.roaster('ug1jmr8w0h3cdh') // remapped from original line 271
    .itemInputs('8x #forge:dusts/chromium_trioxide')
    .itemOutputs('5x #forge:dusts/chromium_iii_oxide')
    .outputFluids(safeFluidOf('gtceu:oxygen', 3000))
    .EUt(120)
    .duration(200)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (fuel in sintering_fuels) {
  //     if (!fuel.isPlasma) {
  //         ROTARY_KILN.recipeBuilder()
  //                 .inputs(ore('dustChromite') * 2)
  //                 .inputs(ore('dustSodaAsh') * 24)
  //                 .fluidInputs(fluid(fuel.name) * fuel.amountRequired)
  //                 .fluidInputs(fluid('oxygen') * 7010)
  //                 .outputs(metaitem('dustSodiumChromateMixture') * 5)
  //                 .fluidOutputs(fluid('carbon_dioxide') * 4000)
  //                 .duration(400)
  //                 .EUt(Globals.voltAmps[2])
  //                 .buildAndRegister()
  //     }
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.SinteringGlobals.*
  // import static gregtech.api.unification.material.Materials.*;
  // import gregtech.api.unification.material.MarkerMaterials;
  // import static gregtech.api.unification.ore.OrePrefix.dye;
  // ROTARY_KILN = recipemap('rotary_kiln')
  // ADVANCED_ARC_FURNACE = recipemap('advanced_arc_furnace')
  // BR = recipemap('batch_reactor')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // CRYSTALLIZER = recipemap('crystallizer')
  // BCR = recipemap('bubble_column_reactor')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // VACUUM_CHAMBER = recipemap('vacuum_chamber')
  // ROASTER = recipemap('roaster')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
});