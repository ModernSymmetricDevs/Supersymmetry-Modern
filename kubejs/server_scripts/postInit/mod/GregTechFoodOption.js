ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:assembler', input: 'susy:hull.mv' && 'susy:electric.pump.mv' && 'susy:circuit.advanced_integrated' && '#forge:frames/steel' && '#forge:plates/sterling_silver' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:lathe', input: '#forge:rods/titanium'})
  event.remove({ type: 'gtceu:lathe', input: '#forge:rods/steel'})
  event.remove({ type: 'gtceu:lathe', input: '#forge:rods/stainless_steel'})

  event.recipes.susy.mods.gregtech.assembler('pljwjv96ynjqlj') // remapped from original line 34
    .itemInputs(metaitem('hull.mv'))
    .itemInputs(metaitem('electric.pump.mv') * 2)
    .itemInputs('1x #forge:circuits/mv')
    .itemInputs('1x #forge:frames/steel')
    .itemInputs('6x #forge:plates/sterling_silver')
    .itemOutputs(safeItemId('1x gregtechfoodoption:greenhouse'))
    .duration(400)
    .EUt(120)

  event.recipes.gtceu.FERMENTER('3g1kkc6auwuy9x') // remapped from original line 62
    .inputFluids(safeFluidOf('susy:gtfo_red_grapes_must', 8000))
    .outputFluids(safeFluidOf('susy:gtfo_fermented_red_grapes_must', 8000))
    .duration(2400)
    .EUt(16)

  event.recipes.gtceu.FERMENTER('y3ivjgsbp2qrrl') // remapped from original line 69
    .inputFluids(safeFluidOf('susy:gtfo_alcoholic_red_grape_juice', 8000))
    .outputFluids(safeFluidOf('susy:gtfo_red_wine', 8000))
    .duration(2400)
    .EUt(16)

  event.recipes.gtceu.MIXER('1hkhm60wmdedc1') // remapped from original line 76
    .itemInputs(safeItemId('1x minecraft:potato'))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:gtfo_potato_juice', 1000))
    .duration(1000)
    .EUt(7)

  event.recipes.gtceu.FERMENTER('ufwwwo2p2a3l8g') // remapped from original line 84
    .inputFluids(safeFluidOf('susy:gtfo_potato_juice', 2000))
    .outputFluids(safeFluidOf('susy:gtfo_vodka', 2000))
    .duration(3000)
    .EUt(7)

  event.recipes.gtceu.FERMENTER('qxty9cprqcgoip') // remapped from original line 91
    .itemInputs(safeItemId('24x minecraft:sugar'))
    .inputFluids(safeFluidOf('minecraft:water', 16000))
    .inputFluids(safeFluidOf('susy:grain_solution', 1000))
    .outputFluids(safeFluidOf('susy:gtfo_poor_quality_beer', 16000))
    .circuit(4)
    .duration(2400)
    .EUt(16)

  event.recipes.gtceu.MIXER('m4jjgvgmod4aoj') // remapped from original line 101
    .itemInputs(safeItemId('1x gregtechfoodoption:food.white_grapes'))
    .inputFluids(safeFluidOf('minecraft:water', 4000))
    .outputFluids(safeFluidOf('susy:gtfo_macerated_white_grapes', 4000))
    .duration(500)
    .EUt(4)

  event.recipes.gtceu.FERMENTER('l2ckqtgdvpd2lr') // remapped from original line 109
    .inputFluids(safeFluidOf('susy:gtfo_clarified_white_wort', 8000))
    .outputFluids(safeFluidOf('susy:gtfo_white_wine', 8000))
    .circuit(4)
    .duration(8000)
    .EUt(2)

  event.recipes.gtceu.ELECTROLYZER('ayinoour7q6mhg') // remapped from original line 117
    .notConsumable('1x #forge:rods/nickel')
    .notConsumable(metaitem('graphite_electrode'))
    .inputFluids(safeFluidOf('susy:sodium_chlorate_solution', 2000))
    .outputFluids(safeFluidOf('susy:sodium_perchlorate_solution', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.CSTR('vqjrdknth2lmr1') // remapped from original line 127
    .inputFluids(safeFluidOf('susy:sodium_perchlorate_solution', 50))
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .outputFluids(safeFluidOf('gtceu:salt_water', 50))
    .outputFluids(safeFluidOf('susy:gtfo_perchloric_acid', 50))
    .duration(1)
    .EUt(7)

  event.recipes.gtceu.BR('c9dtlchgciinko') // remapped from original line 136
    .inputFluids(safeFluidOf('susy:gtfo_perchloric_acid', 1000))
    .inputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .itemOutputs(safeItemId('10x gregtechfoodoption:ammonium_perchlorate_dust'))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.CENTRIFUGE('loinxnmzhaoeqg') // remapped from original line 144
    .inputFluids(safeFluidOf('susy:gtfo_alkaline_extract', 1000))
    .itemInputs(safeItemId('10x gregtechfoodoption:ammonium_perchlorate_dust'))
    .outputFluids(safeFluidOf('susy:gtfo_sludge', 1000))
    .itemOutputs(safeItemId('6x gregtechfoodoption:potassium_perchlorate_dust'))
    .duration(100)
    .EUt(30)

  event.recipes.susy.ROASTER('ojk0gxi3yrhm5f') // remapped from original line 153
    .itemInputs(safeItemId('6x gregtechfoodoption:potassium_perchlorate_dust'))
    .outputFluids(safeFluidOf('gtceu:oxygen', 4000))
    .itemOutputs('2x #forge:dusts/rock_salt')
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.MIXER('xje8jnqcclrb0l') // remapped from original line 161
    .itemInputs(safeItemId('1x gregtechfoodoption:seed.pea'))
    .inputFluids(safeFluidOf('susy:gtfo_baking_soda_solution', 500))
    .itemOutputs(safeItemId('1x gregtechfoodoption:food.mushy_peas'))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.MIXER('gjummrwmywapvq') // remapped from original line 187
    .itemInputs(safeItemId('4x gregtechfoodoption:component.beef_slice'))
    .inputFluids(safeFluidOf('gtceu:salt_water', 1000))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 100))
    .outputFluids(safeFluidOf('susy:gtfo_crude_rennet_solution', 500))
    .duration(300)
    .EUt(7)

  event.recipes.gtceu.CENTRIFUGE('n6nimkh0wmp8wy') // remapped from original line 196
    .inputFluids(safeFluidOf('susy:gtfo_crude_rennet_solution', 1))
    .inputFluids(safeFluidOf('gtceu:milk', 3000))
    .itemOutputs(safeItemId('1x gregtechfoodoption:coagulated_milk_curd_nugget'))
    .outputFluids(safeFluidOf('susy:gtfo_whey', 600))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.FERMENTER('8qbrr2hqzbegas') // remapped from original line 205
    .itemInputs(safeItemId('64x gregtechfoodoption:component.brined_parmigiano_roll'))
    .inputFluids(safeFluidOf('gtceu:air', 10000))
    .itemOutputs(safeItemId('64x gregtechfoodoption:component.aged_parmigiano_roll'))
    .duration(36000)
    .EUt(2)

  event.recipes.gtceu.MIXER('sd8oz7msuwkjdc') // remapped from original line 213
    .itemInputs(safeItemId('1x minecraft:sugar'))
    .inputFluids(safeFluidOf('susy:gtfo_coffee', 10))
    .outputFluids(safeFluidOf('susy:gtfo_energized_coffee', 10))
    .duration(100)
    .EUt(120)

  event.recipes.susy.BCR('q2qmea8fiydb5u') // remapped from original line 221
    .inputFluids(safeFluidOf('gtceu:propene', 50))
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .outputFluids(safeFluidOf('susy:gtfo_isopropyl_chloride', 50))
    .duration(1)
    .EUt(7)

  event.recipes.gtceu.BR('wktunrcuos9cii') // remapped from original line 229
    .itemInputs(safeItemId('1x gregtechfoodoption:coffee_grounds_dust'))
    .itemInputs(safeItemId('1x gregtechfoodoption:component.paper_cone'))
    .inputFluids(safeFluidOf('gtceu:steam', 1000))
    .itemOutputs('1x #forge:dusts/paper')
    .outputFluids(safeFluidOf('susy:gtfo_coffee', 15))
    .duration(100)
    .EUt(120)

  event.recipes.gtceu.FERMENTER('iymqsff38wkv1u') // remapped from original line 239
    .inputFluids(safeFluidOf('susy:gtfo_apple_extract', 100))
    .outputFluids(safeFluidOf('susy:gtfo_apple_cider', 100))
    .duration(150)
    .EUt(2)

  event.recipes.gtceu.ELECTROLYZER('yk9oeohpczxxwf') // remapped from original line 246
    .notConsumable('1x #forge:rods/nickel')
    .notConsumable(metaitem('graphite_electrode'))
    .itemInputs('2x #forge:dusts/gold')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 8000))
    .outputFluids(safeFluidOf('susy:gtfo_chloroauric_acid', 6000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 6000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.LCR('juahntmwu4owhk') // remapped from original line 279
    .inputFluids(safeFluidOf('gtceu:methanol', 4000))
    .inputFluids(safeFluidOf('gtceu:chloroform', 4000))
    .itemInputs(safeItemId('32x gregtechfoodoption:component.scrap_meat'))
    .itemOutputs('32x #forge:dusts/meat')
    .itemOutputs(safeItemId('15x minecraft:dye', 1')) * 20)
    .outputFluids(safeFluidOf('susy:gtfo_stearin', 3500))
    .outputFluids(safeFluidOf('susy:gtfo_sludge', 16000))
    .EUt(256)
    .duration(1000)

  event.recipes.gtceu.CHEMICAL_BATH('wqay9jfhwvcdug') // remapped from original line 291
    .itemInputs(safeItemId('1x gregtechfoodoption:component.scrap_meat'))
    .inputFluids(safeFluidOf('gtceu:chloroform', 100))
    .itemOutputs('1x #forge:dusts/meat')
    .outputFluids(safeFluidOf('susy:gtfo_sludge', 40))
    .duration(600)
    .EUt(30)

  event.recipes.gtceu.MIXER('ecipyazdz3614i') // remapped from original line 300
    .circuit(1)
    .itemInputs('1x #forge:dusts/soda_ash')
    .inputFluids(safeFluidOf('gtceu:fish_oil', 8000))
    .outputFluids(safeFluidOf('susy:gtfo_stearin', 4000))
    .duration(1200)
    .EUt(30)

  event.recipes.gtceu.MIXER('g3fqmahmwem4qm') // remapped from original line 309
    .circuit(1)
    .itemInputs('1x #forge:dusts/soda_ash')
    .inputFluids(safeFluidOf('gtceu:seed_oil', 8000))
    .outputFluids(safeFluidOf('susy:gtfo_stearin', 4000))
    .duration(1200)
    .EUt(30)

  event.recipes.gtceu.MIXER('7jfz7bru2d7y7t') // remapped from original line 318
    .circuit(1)
    .itemInputs('1x #forge:dusts/soda_ash')
    .inputFluids(safeFluidOf('susy:gtfo_olive_oil', 8000))
    .outputFluids(safeFluidOf('susy:gtfo_stearin', 4000))
    .duration(1200)
    .EUt(30)

  event.recipes.gtceu.MIXER('hlizacwvqu2mzx') // remapped from original line 327
    .inputFluids(safeFluidOf('susy:gtfo_stearin', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .outputFluids(safeFluidOf('susy:gtfo_sodium_stearate', 3000))
    .duration(60)
    .EUt(120)

  event.recipes.gtceu.MIXER('fctwvjsd6te9fi') // remapped from original line 336
    .inputFluids(safeFluidOf('susy:gtfo_sludge', 500))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('gtceu:biomass', 1000))
    .duration(80)
    .EUt(30)

  event.recipes.gtceu.FERMENTER('nhuj8moj83ezpj') // remapped from original line 344
    .inputFluids(safeFluidOf('gtceu:milk', 10000))
    .outputFluids(safeFluidOf('susy:gtfo_butter', 9000))
    .duration(1200)
    .EUt(15)

  event.recipes.susy.FLUIDIZEDBR('dylq0cevs9owsr') // remapped from original line 351
    .inputFluids(safeFluidOf('gtceu:dimethylamine', 1000))
    .inputFluids(safeFluidOf('susy:gtfo_x_phenothiazine_ii_propyl_chloride', 1000))
    .notConsumable('1x #forge:dusts/copper')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .itemOutputs(safeItemId('1x gregtechfoodoption:promethazine_dust'))
    .duration(120)
    .EUt(2000)

  event.recipes.gtceu.BR('g3rgcy5vbmntit') // remapped from original line 361
    .inputFluids(safeFluidOf('susy:gtfo_isopropyl_chloride', 1000))
    .itemInputs(safeItemId('23x gregtechfoodoption:phenothiazine_dust'))
    .outputFluids(safeFluidOf('susy:gtfo_x_phenothiazine_ii_propyl_chloride', 1000))
    .duration(120)
    .EUt(240)

  event.recipes.gtceu.BR('3cratkut8jvk6r') // remapped from original line 369
    .circuit(2)
    .inputFluids(safeFluidOf('susy:gtfo_aniline', 2000))
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .itemOutputs(safeItemId('24x gregtechfoodoption:diphenylamine_dust'))
    .itemOutputs('6x #forge:dusts/ammonium_chloride')
    .duration(120)
    .EUt(480)

  event.recipes.susy.BCR('ozzfid6qjnyx4m') // remapped from original line 379
    .inputFluids(safeFluidOf('gtceu:hydrogen', 300))
    .inputFluids(safeFluidOf('gtceu:nitrobenzene', 50))
    .notConsumable('1x #forge:dusts/activated_raney_nickel')
    .outputFluids(safeFluidOf('susy:diluted_aniline', 150))
    .duration(1)
    .EUt(120)

  event.recipes.gtceu.DISTILLERY('bmfhtgraj09lsg') // remapped from original line 388
    .inputFluids(safeFluidOf('susy:diluted_aniline', 600))
    .outputFluids(safeFluidOf('susy:gtfo_aniline', 200))
    .duration(80)
    .EUt(30)

  event.recipes.gtceu.BR('fbljb3deyhpkhv') // remapped from original line 395
    .inputFluids(safeFluidOf('susy:gtfo_acetaldehyde', 2000))
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 2000))
    .outputFluids(safeFluidOf('susy:gtfo_glyoxal', 2000))
    .outputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .duration(120)
    .EUt(60)

  event.recipes.susy.FBR('juqnydyywesaod') // remapped from original line 405
    .notConsumable('1x #forge:catalysts/bed_silver')
    .inputFluids(safeFluidOf('susy:ethylene_glycol', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 100))
    .outputFluids(safeFluidOf('susy:gtfo_glyoxal', 50))
    .outputFluids(safeFluidOf('minecraft:water', 100))
    .duration(6)
    .EUt(60)

  event.recipes.susy.LCR('xg0t18zpjbjbjg') // remapped from original line 415
    .inputFluids(safeFluidOf('susy:gtfo_glyoxal', 2000))
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 2000))
    .outputFluids(safeFluidOf('susy:gtfo_glyoxylic_acid', 2000))
    .outputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 1000))
    .outputFluids(safeFluidOf('gtceu:nitrous_oxide', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(30)
    .EUt(240)

  event.recipes.gtceu.BR('ougvyz3eysy30q') // remapped from original line 426
    .notConsumable('1x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('susy:gtfo_guaiacol', 1000))
    .inputFluids(safeFluidOf('susy:gtfo_glyoxylic_acid', 1000))
    .itemOutputs(safeItemId('24x gregtechfoodoption:vanillylmandelic_acid_dust'))
    .duration(160)
    .EUt(120)

  event.recipes.gtceu.BR('evvfnswtyygz1l') // remapped from original line 435
    .notConsumable('1x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemInputs(safeItemId('24x gregtechfoodoption:vanillylmandelic_acid_dust'))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs(safeItemId('22x gregtechfoodoption:vanilglycolic_acid_dust'))
    .duration(160)
    .EUt(120)

  event.recipes.susy.LCR('ewk6s5i4jgjwvz') // remapped from original line 445
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 1000))
    .itemInputs(safeItemId('22x gregtechfoodoption:vanilglycolic_acid_dust'))
    .outputFluids(safeFluidOf('gtceu:diluted_hydrochloric_acid', 1000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .itemOutputs(safeItemId('19x gregtechfoodoption:vanillin_dust'))
    .duration(240)
    .EUt(120)

  event.recipes.susy.ROASTER('zufuggdlrpb4pi') // remapped from original line 456
    .itemInputs(safeItemId('1x gregtechfoodoption:dried_mozzarella_curd_nugget'))
    .itemOutputs(safeItemId('1x gregtechfoodoption:solidified_mozzarella_curd_nugget'))
    .outputFluids(safeFluidOf('susy:gtfo_whey', 50))
    .duration(200)
    .EUt(16)

  event.recipes.gtceu.MIXER('sl9arqakcnhles') // remapped from original line 464
    .inputFluids(safeFluidOf('gtceu:milk', 6000))
    .inputFluids(fluid('gtfo_crude_rennet_solution'))
    .inputFluids(safeFluidOf('susy:gtfo_whey', 400))
    .itemOutputs(safeItemId('1x gregtechfoodoption:large_mozzarella_curd_nugget'))
    .duration(160)
    .EUt(7)

  event.recipes.susy.ROASTER('cugvddxjjoqz0s') // remapped from original line 473
    .circuit(1)
    .itemInputs(safeItemId('3x minecraft:dye', ')) * 8)
    .itemOutputs(safeItemId('8x gregtechfoodoption:component.roasted_beans'))
    .outputFluids(safeFluidOf('gtceu:steam', 1000))
    .EUt(120)
    .duration(30)

  event.recipes.gtceu.CHEMICAL_BATH('4mmguoiodh4mlc') // remapped from original line 483
    .itemInputs('1x #forge:dusts/bone')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .itemOutputs('1x #forge:dusts/collagen')
    .outputFluids(safeFluidOf('susy:wastewater', 2000))
    .duration(160)
    .EUt(7)

  event.recipes.gtceu.CHEMICAL_BATH('06ltzuxnt8awnu') // remapped from original line 492
    .itemInputs(safeItemId('1x minecraft:leather'))
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .itemOutputs('1x #forge:dusts/collagen')
    .outputFluids(safeFluidOf('susy:wastewater', 2000))
    .duration(160)
    .EUt(7)

  event.recipes.gtceu.CHEMICAL_BATH('i31l2tgxmmkzqe') // remapped from original line 501
    .itemInputs('1x #forge:dusts/collagen')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 250))
    .itemOutputs('1x #forge:dusts/treated_collagen')
    .outputFluids(safeFluidOf('susy:wastewater', 250))
    .duration(160)
    .EUt(7)

  event.recipes.gtceu.CENTRIFUGE('3gjgtmi5wtct2s') // remapped from original line 510
    .itemInputs('1x #forge:dusts/treated_collagen')
    .inputFluids(safeFluidOf('susy:gtfo_heated_water', 1000))
    .outputFluids(safeFluidOf('susy:gelatin_solution', 1000))
    .duration(160)
    .EUt(7)

  event.recipes.gtceu.DISTILLERY('w5h9q5rmb7mwui') // remapped from original line 518
    .inputFluids(safeFluidOf('susy:gelatin_solution', 1000))
    .itemOutputs('1x #forge:dusts/gelatin')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(160)
    .EUt(7)

  event.recipes.gtceu.PYROLYSE_OVEN('ryxjqe3rxx9lto') // remapped from original line 527
    .itemInputs('1x #forge:gems/chipped_graded_coffee_small')
    .itemOutputs(safeItemId('1018x gregtechfoodoption:gtfo_oredict_item:1018')018'))
    .outputFluids(safeFluidOf('minecraft:water', 100))
    .duration(40)
    .EUt(120)

  event.recipes.gtceu.PYROLYSE_OVEN('tw9hfydcrcvxe5') // remapped from original line 535
    .itemInputs('1x #forge:gems/chipped_graded_coffee_large')
    .itemOutputs(safeItemId('1019x gregtechfoodoption:gtfo_oredict_item:1019')019'))
    .outputFluids(safeFluidOf('minecraft:water', 200))
    .duration(80)
    .EUt(120)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (ItemStack fish : GTFOUtils.getFish()) {
  //     CHEMICAL_BATH.recipeBuilder()
  //             .fluidInputs(fluid('gtfo_beer_batter') * 40)
  //             .inputs(fish)
  //             .outputs(metaitem('gregtechfoodoption:food.fried_fish'))
  //             .EUt(16)
  //             .duration(400)
  //             .buildAndRegister();
  // 
  //     FERMENTER.recipeBuilder()
  //             .fluidInputs(fluid('water') * 100)
  //             .inputs(fish)
  //             .outputs(metaitem('gregtechfoodoption:food.fish_rotten'))
  //             .EUt(7)
  //             .duration(100)
  //             .buildAndRegister();
  // }

  // for (ItemStack meat : GTFOUtils.getMeat()) {
  //     FERMENTER.recipeBuilder()
  //             .fluidInputs(fluid('water') * 100)
  //             .inputs(meat)
  //             .outputs(metaitem('gregtechfoodoption:food.meat_rotten'))
  //             .EUt(7)
  //             .duration(100)
  //             .buildAndRegister();
  // 
  //     LCR.recipeBuilder()
  //             .fluidInputs(fluid('methanol') * 4000)
  //             .fluidInputs(fluid('chloroform') * 4000)
  //             .inputs(meat * 32)
  //             .outputs(metaitem('dustMeat') * 40)
  //             .outputs(item('minecraft:dye', 15) * 16)
  //             .fluidOutputs(fluid('gtfo_stearin') * 3200)
  //             .fluidOutputs(fluid('gtfo_sludge') * 12000)
  //             .EUt(256)
  //             .duration(1000)
  //             .buildAndRegister();
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import gregtech.api.recipes.ModHandler;
  // import gregtech.api.unification.material.Materials;
  // import gregtech.api.unification.ore.OrePrefix;
  // import gregtech.api.unification.stack.UnificationEntry;
  // import gregtechfoodoption.utils.GTFOUtils;
  // import static gregtechfoodoption.utils.GTFOUtils.*;
  // crafting.replaceShaped("gregtechfoodoption:gregtechfoodoption.machine.slicer.lv", metaitem('gregtechfoodoption:slicer.lv'), [
  // 		[metaitem('electric.piston.lv'), ore('circuitLv'), ore('cableGtSingleTin')],
  // 		[ore('toolHeadBuzzSawSteel'), metaitem('gregtech:hull.lv'), ore('circuitLv')],
  // 		[ore('plateSteel'), metaitem('conveyor.module.lv'), ore('cableGtSingleTin')]
  // ])
  // crafting.replaceShaped("gregtechfoodoption:gregtechfoodoption.machine.slicer.mv", metaitem('gregtechfoodoption:slicer.mv'), [
  // 		[metaitem('electric.piston.mv'), ore('circuitMv'), ore('cableGtSingleCopper')],
  // 		[ore('toolHeadBuzzSawAluminium'), metaitem('gregtech:hull.mv'), ore('circuitMv')],
  // 		[ore('plateAluminium'), metaitem('conveyor.module.mv'), ore('cableGtSingleCopper')]
  // ])
  // crafting.replaceShaped("gregtechfoodoption:gregtechfoodoption.machine.slicer.hv", metaitem('gregtechfoodoption:slicer.hv'), [
  // 		[metaitem('electric.piston.hv'), ore('circuitHv'), ore('cableGtSingleGold')],
  // 		[ore('toolHeadBuzzSawVanadiumSteel'), metaitem('gregtech:hull.hv'), ore('circuitHv')],
  // 		[ore('plateVanadiumSteel'), metaitem('conveyor.module.hv'), ore('cableGtSingleGold')]
  // ])
  // def DISTILLERY = recipemap('distillery');
  // def MIXER = recipemap('mixer');
  // def LCR = recipemap('large_chemical_reactor')
  // def BR = recipemap('batch_reactor')
  // def CSTR = recipemap('continuous_stirred_tank_reactor');
  // def FERMENTER = recipemap('vat_fermentation');
  // def ELECTROLYZER = recipemap('electrolyzer');
  // def CENTRIFUGE = recipemap('centrifuge');
  // def ROASTER = recipemap('roaster')
  // def CHEMICAL_BATH = recipemap('chemical_bath')
  // def BCR = recipemap('bubble_column_reactor')
  // def FLUIDIZEDBR = recipemap('fluidized_bed_reactor')
  // def FBR = recipemap('fixed_bed_reactor')
  // def PYROLYSE_OVEN = recipemap('pyrolyse_oven');
  // 		
  // 		
  // 	
  // 	
});