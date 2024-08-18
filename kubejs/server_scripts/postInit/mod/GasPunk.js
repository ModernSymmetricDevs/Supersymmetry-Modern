ServerEvents.recipes(event => {

  event.recipes.gtceu.assembler('joj4lfixza3jrn') // remapped from original line 75
    .itemInputs([
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('1x gaspunk:gas_mask'))
    .duration(200)
    .EUt(60)

  event.recipes.susy.mods.gregtech.mixer('gkfu2sdosm0ysa') // remapped from original line 89
    .itemInputs('4x #forge:dusts/phosphorus')
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .outputFluids(safeFluidOf('susy:smoke_bomb_mix', 1000))
    .duration(200)
    .EUt(60)

  event.recipes.susy.continuous_stirred_tank_reactor('8orvnjlzcyqvgg') // remapped from original line 142
    .inputFluids(safeFluidOf('susy:sulfur_dichloride', 50))
    .inputFluids(safeFluidOf('gtceu:ethylene', 100))
    .outputFluids(safeFluidOf('susy:mustard_gas', 50))
    .duration(3)
    .EUt(120)

  event.recipes.susy.fixed_bed_reactor('ilyexor6smfehk') // remapped from original line 150
    .notConsumable('1x #forge:catalysts/bed_aluminium_chloride')
    .inputFluids(safeFluidOf('susy:ethylene_oxide', 50))
    .inputFluids(safeFluidOf('susy:diisopropylamine', 50))
    .outputFluids(safeFluidOf('susy:diisopropylaminoethanol', 50))
    .duration(3)
    .EUt(120)

  event.recipes.gtceu.large_chemical_reactor('g4s0cwzl2mpxti') // remapped from original line 159
    .notConsumable('4x #forge:dusts/aluminium_chloride')
    .itemInputs('1x #forge:dusts/iron')
    .inputFluids(safeFluidOf('susy:phosphorus_trichloride', 1000))
    .inputFluids(safeFluidOf('gtceu:chloromethane', 1000))
    .outputFluids(safeFluidOf('susy:methyldichlorophosphine', 1000))
    .itemOutputs('3x #forge:dusts/iron_ii_chloride')
    .duration(200)
    .EUt(480)

  event.recipes.susy.trickle_bed_reactor('evrrtw8pnvlypl') // remapped from original line 170
    .notConsumable('1x #forge:dusts/carbon')
    .inputFluids(safeFluidOf('gtceu:sulfur_dioxide', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 100))
    .outputFluids(safeFluidOf('susy:sulfuryl_chloride', 50))
    .duration(3)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('bkrbjfogr7i6eg') // remapped from original line 179
    .inputFluids(safeFluidOf('susy:sulfuryl_chloride', 50))
    .inputFluids(safeFluidOf('susy:methyldichlorophosphine', 50))
    .outputFluids(safeFluidOf('susy:thionyl_chloride', 50))
    .outputFluids(safeFluidOf('susy:methylphosphonyl_dichloride', 50))
    .duration(3)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('w5khbxb3tu0wqd') // remapped from original line 188
    .inputFluids(safeFluidOf('susy:methylphosphonyl_dichloride', 50))
    .inputFluids(safeFluidOf('susy:hydrogen_fluoride', 50))
    .outputFluids(safeFluidOf('susy:methylphosphonyl_difluoride', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .duration(3)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('6jgfk7mlzmfz4f') // remapped from original line 197
    .inputFluids(safeFluidOf('susy:methylphosphonyl_difluoride', 50))
    .inputFluids(safeFluidOf('susy:isopropyl_alcohol', 50))
    .outputFluids(safeFluidOf('susy:sarin', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_fluoride', 50))
    .duration(5)
    .EUt(480)

  event.recipes.susy.continuous_stirred_tank_reactor('gnejmbj4nbg53h') // remapped from original line 206
    .inputFluids(safeFluidOf('susy:methyldichlorophosphine', 50))
    .inputFluids(safeFluidOf('gtceu:ethanol', 100))
    .outputFluids(safeFluidOf('susy:methyl_diethylphosphinate', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 100))
    .duration(3)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('10efm4i9ghfaxf') // remapped from original line 215
    .inputFluids(safeFluidOf('susy:methyl_diethylphosphinate', 50))
    .inputFluids(safeFluidOf('susy:diisopropylaminoethanol', 50))
    .outputFluids(safeFluidOf('susy:diisopropylamino_ethyl_ethyl_methylphosphonite', 50))
    .outputFluids(safeFluidOf('gtceu:ethanol', 50))
    .duration(3)
    .EUt(120)

  event.recipes.susy.roaster('lo5vtvhcbxshua') // remapped from original line 224
    .inputFluids(safeFluidOf('susy:diisopropylamino_ethyl_ethyl_methylphosphonite', 1000))
    .itemInputs('1x #forge:dusts/sulfur')
    .outputFluids(safeFluidOf('susy:vx', 1000))
    .duration(200)
    .EUt(480)

  // Contains GTFO resources
  //event.recipes.gtceu.centrifuge('kwjua8xotkj67u') // remapped from original line 232
    //.inputFluids(safeFluidOf('gtceu:ethanol', 1000))
    //.itemInputs(safeItemId('1x gregtechfoodoption:black_pepper_dust'))
    //.outputFluids(safeFluidOf('susy:capsaicin_solution', 1000))
    //.duration(200)
    //.EUt(120)

  event.recipes.susy.dryer('6ozho24sodgjyo') // remapped from original line 240
    .inputFluids(safeFluidOf('susy:capsaicin_solution', 1000))
    .itemOutputs('1x #forge:dusts/tiny_capsaicin')
    .outputFluids(safeFluidOf('gtceu:ethanol', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.mixer('78ufcqkdwcqxxt') // remapped from original line 248
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('1x #forge:dusts/capsaicin')
    .outputFluids(safeFluidOf('susy:tear_gas', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.fixed_bed_reactor('lbkr6exfmzqeqz') // remapped from original line 256
    .notConsumable('1x #forge:catalysts/bed_cuprous_oxide')
    .inputFluids(safeFluidOf('gtceu:acetone', 100))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 100))
    .inputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('susy:diluted_diisopropylamine', 150))
    .duration(3)
    .EUt(120)

  event.recipes.gtceu.distillation_tower('4oobbsdsq2itwx') // remapped from original line 266
    .inputFluids(safeFluidOf('susy:diluted_diisopropylamine', 3000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .outputFluids(safeFluidOf('susy:diisopropylamine', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('nc433dr8nsp7vi') // remapped from original line 274
    .inputFluids(safeFluidOf('gtceu:propene', 50))
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:hydrated_propene', 150))
    .duration(3)
    .EUt(120)

  event.recipes.gtceu.distillation_tower('qzueu6qzutu8sv') // remapped from original line 283
    .inputFluids(safeFluidOf('susy:hydrated_propene', 3000))
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 2000))
    .outputFluids(safeFluidOf('susy:isopropyl_alcohol', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.fixed_bed_reactor('zdvflsq2uhvpsl') // remapped from original line 291
    .notConsumable('1x #forge:catalysts/bed_alumina')
    .inputFluids(safeFluidOf('gtceu:ethanol', 300))
    .inputFluids(safeFluidOf('gtceu:ammonia', 150))
    .outputFluids(safeFluidOf('susy:ethylamine_mix', 450))
    .duration(5)
    .EUt(120)

  event.recipes.gtceu.distillation_tower('xbtsahgzca67d6') // remapped from original line 300
    .inputFluids(safeFluidOf('susy:ethylamine_mix', 9000))
    .outputFluids(safeFluidOf('minecraft:water', 6000))
    .outputFluids(safeFluidOf('susy:triethylamine', 1000))
    .outputFluids(safeFluidOf('susy:diethylamine', 1000))
    .outputFluids(safeFluidOf('gtceu:ethylamine', 1000))
    .duration(300)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('fbwi5wychbeqnf') // remapped from original line 310
    .inputFluids(safeFluidOf('susy:triethylamine', 800))
    .inputFluids(safeFluidOf('gtceu:ethanol', 800))
    .inputFluids(safeFluidOf('gtceu:titanium_tetrachloride', 200))
    .outputFluids(safeFluidOf('susy:titanium_ethoxide', 50))
    .duration(20)
    .EUt(1920)

  // Contains GTFO resources
  //event.recipes.susy.continuous_stirred_tank_reactor('g5qdwzaqvdybww') // remapped from original line 319
    //.inputFluids(safeFluidOf('susy:diethylamine', 50))
    //.inputFluids(safeFluidOf('susy:gtfo_acetic_anhydride', 50))
    //.outputFluids(safeFluidOf('susy:diethylacetamide', 50))
    //.outputFluids(safeFluidOf('gtceu:acetic_acid', 50))
    //.duration(3)
    //.EUt(120)

  event.recipes.gtceu.large_chemical_reactor('hp7lx63j6gllyp') // remapped from original line 328
    .notConsumable(safeFluidOf('susy:titanium_ethoxide', 1000))
    .inputFluids(safeFluidOf('susy:diethylacetamide', 1000))
    .inputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:diethylacetimidamine', 1000))
    .duration(200)
    .EUt(1920)

  event.recipes.gtceu.large_chemical_reactor('8xtabdkxrhmhmp') // remapped from original line 338
    .inputFluids(safeFluidOf('susy:diethylacetimidamine', 1000))
    .inputFluids(safeFluidOf('susy:methylphosphonyl_difluoride', 1000))
    .outputFluids(safeFluidOf('susy:novichok', 1000))
    .outputFluids(safeFluidOf('susy:hydrogen_fluoride', 1000))
    .duration(200)
    .EUt(1920)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (item in name_removals) {
  //     crafting.remove(item);
  // }

  // Globals.solders.each { key, val ->
  //         recipemap('weapons_factory').recipeBuilder()
  //                 .inputs([
  //                         ore('ringRubber')*4,
  //                         ore('platePlastic'),
  //                         ore('plateSteel')
  //                 ])
  //                 .fluidInputs(fluid(key) * val)
  //                 .outputs(item('gaspunk:diffuser'))
  //                 .duration(200)
  //                 .EUt(60)
  //                 .buildAndRegister();
  // 
  //         recipemap('weapons_factory').recipeBuilder()
  //                 .inputs([
  //                         ore('ringRubber')*4,
  //                         metaitem('component.glass.tube'),
  //                         ore('plateSteel')
  //                 ])
  //                 .fluidInputs(fluid(key) * val)
  //                 .outputs(item('gp_inhaler:empty_inhaler'))
  //                 .duration(200)
  //                 .EUt(60)
  //                 .buildAndRegister();
  // }

  // for (key in GasMapMV) {
  //     mods.gregtech.canner.recipeBuilder()
  //             .inputs([item('minecraft:glass_bottle')])
  //             .fluidInputs(liquid(key.getKey())*100)
  //             .outputs(item('gaspunk:gas_tube').withNbt(["gaspunk:contained_gas": GasMapMV[key.getKey()]]))
  //             .duration(20)
  //             .EUt(60)
  //             .buildAndRegister();
  // 
  //     mods.gregtech.canner.recipeBuilder()
  //             .inputs([item('gaspunk:diffuser')])
  //             .fluidInputs(liquid(key.getKey())*100)
  //             .outputs(item('gaspunk:grenade').withNbt(["gaspunk:contained_gas": GasMapMV[key.getKey()]]))
  //             .duration(20)
  //             .EUt(60)
  //             .buildAndRegister();
  // 
  //     mods.gregtech.canner.recipeBuilder()
  //             .inputs(item('gp_inhaler:empty_inhaler'))
  //             .fluidInputs(liquid(key.getKey())*100)
  //             .outputs(item('gp_inhaler:inhaler').withNbt(["gaspunk:contained_gas": GasMapMV[key.getKey()]]))
  //             .duration(20)
  //             .EUt(60)
  //             .buildAndRegister();
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
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
  // def name_removals = [
  //         "gaspunk:diffuser",
  //         "gaspunk:grenade",
  //         "gaspunk:vapor_grenade",
  //         "gaspunk:grenade_refill",
  //         "gaspunk:grenade_recycling",
  //         "gaspunk:inhaler",
  //         "gp_inhaler:empty_inhaler",
  //         "gp_inhaler:vapor_inhaler",
  //         "gp_inhaler:inhaler",
  //         "gaspunk:vapor_inhaler",
  //         "gaspunk:gas_mask"
  // ]
  //                 ore('ringRubber') * 2,
  //                 ore('platePlastic') * 2,
  //                 metaitem('wireFineCopper') * 4,
  //                 metaitem('dustCarbon') * 2,
  //                 metaitem('plateGlass')
  //         ])
  // def GasMapMV = [
  //     'fluorine': "gaspunk:fluorine",
  //     'carbon_monoxide': "gaspunk:carbon_monoxide",
  //     'chlorine': "gaspunk:chlorine",
  //     'diborane': "gaspunk:diborane",
  //     'gtfo_hydrogen_cyanide': "gaspunk:hydrogen_cyanide",
  //     'radon': "gaspunk:radon",
  //     'phosphine': "gaspunk:phosphine",
  //     'smoke_bomb_mix': "gaspunk:smoke",
  //     'chloroform': "gaspunk:chloroform",
  //     'hydrogen_sulfide': "gaspunk:hydrogen_sulfide",
  //     'hydrochloric_acid': "gaspunk:hydrochloric_acid",
  //     'hydrofluoric_acid': "gaspunk:hydrofluoric_acid",
  //     'sarin': "gaspunk:sarin_gas",
  //     'vx': "gaspunk:vx",
  //     'tear_gas': "gaspunk:tear_gas",
  //     'mustard_gas': "gaspunk:mustard_gas",
  //     'novichok': "gaspunk:novichok"
  // ]
});