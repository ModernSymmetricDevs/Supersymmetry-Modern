ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/calcite' && '#forge:dusts/salt'})
  event.remove({ type: 'gtceu:centrifuge', input: safeFluidOf('susy:gtfo_sodium_carbonate_solution')})
  event.remove({ type: 'gtceu:mixer', input: '#forge:dusts/soda_ash' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:chemical_bath', input: safeItemId('gregtechfoodoption:chocolate_liquor_refined_crushed') && 'susy:gregtechfoodoption:chocolate_liquor_refined_crushed' && safeFluidOf('susy:gtfo_sodium_carbonate_solution')})
  event.remove({ type: 'susy:batch_reactor', input: '#forge:dusts/phosphorus_pentoxide' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:mixer', input: safeFluidOf('gtceu:nitric_acid') && safeFluidOf('gtceu:sulfuric_acid')})

  event.recipes.gtceu.assembler('hqqpvyzsb9csjc') // remapped from original line 49
    .itemInputs('4x #forge:rods/iron')
    .itemInputs('4x #forge:pipes/tiny_fluid_steel')
    .itemOutputs(safeItemId('1x susy:catalyst_bed_support_grid'))
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.centrifuge('wwiuvjac7kzi6k') // remapped from original line 59
    .inputFluids(safeFluidOf('gtceu:methanol', 250))
    .inputFluids(safeFluidOf('gtceu:fish_oil', 6000))
    .outputFluids(safeFluidOf('gtceu:bio_diesel', 6000))
    .outputFluids(safeFluidOf('gtceu:glycerol', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.centrifuge('7vglrdw9wlqdht') // remapped from original line 68
    .inputFluids(safeFluidOf('gtceu:ethanol', 250))
    .inputFluids(safeFluidOf('gtceu:fish_oil', 6000))
    .outputFluids(safeFluidOf('gtceu:bio_diesel', 6000))
    .outputFluids(safeFluidOf('gtceu:glycerol', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.centrifuge('tmodfyme3px3vv') // remapped from original line 77
    .inputFluids(safeFluidOf('susy:ethanol_water_azeotrope', 280))
    .inputFluids(safeFluidOf('gtceu:fish_oil', 6000))
    .outputFluids(safeFluidOf('gtceu:bio_diesel', 6000))
    .outputFluids(safeFluidOf('gtceu:glycerol', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.centrifuge('evkg7y9qy8og46') // remapped from original line 86
    .inputFluids(safeFluidOf('gtceu:methanol', 250))
    .inputFluids(safeFluidOf('gtceu:seed_oil', 6000))
    .outputFluids(safeFluidOf('gtceu:bio_diesel', 6000))
    .outputFluids(safeFluidOf('gtceu:glycerol', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.centrifuge('clnkd4asmgi5cy') // remapped from original line 95
    .inputFluids(safeFluidOf('gtceu:ethanol', 250))
    .inputFluids(safeFluidOf('gtceu:seed_oil', 6000))
    .outputFluids(safeFluidOf('gtceu:bio_diesel', 6000))
    .outputFluids(safeFluidOf('gtceu:glycerol', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.centrifuge('v6zkpsu3spbqrs') // remapped from original line 104
    .inputFluids(safeFluidOf('susy:ethanol_water_azeotrope', 280))
    .inputFluids(safeFluidOf('gtceu:seed_oil', 6000))
    .outputFluids(safeFluidOf('gtceu:bio_diesel', 6000))
    .outputFluids(safeFluidOf('gtceu:glycerol', 1000))
    .duration(200)
    .EUt(30)

  // Contains GTFO resources
  //event.recipes.gtceu.centrifuge('gltwdvow2lncpe') // remapped from original line 113
    //.inputFluids(safeFluidOf('gtceu:methanol', 250))
    //.inputFluids(safeFluidOf('susy:gtfo_stearin', 6000))
    //.outputFluids(safeFluidOf('gtceu:bio_diesel', 6000))
    //.outputFluids(safeFluidOf('gtceu:glycerol', 1000))
    //.duration(200)
    //.EUt(30)

  // Contains GTFO resources
  //event.recipes.gtceu.centrifuge('nfz7ighnevcsvv') // remapped from original line 122
    //.inputFluids(safeFluidOf('gtceu:ethanol', 250))
    //.inputFluids(safeFluidOf('susy:gtfo_stearin', 6000))
    //.outputFluids(safeFluidOf('gtceu:bio_diesel', 6000))
    //.outputFluids(safeFluidOf('gtceu:glycerol', 1000))
    //.duration(200)
    //.EUt(30)

  // Contains GTFO resources
  //event.recipes.gtceu.centrifuge('1lakcnma20ljss') // remapped from original line 131
    //.inputFluids(safeFluidOf('susy:ethanol_water_azeotrope', 280))
    //.inputFluids(safeFluidOf('susy:gtfo_stearin', 6000))
    //.outputFluids(safeFluidOf('gtceu:bio_diesel', 6000))
    //.outputFluids(safeFluidOf('gtceu:glycerol', 1000))
    //.duration(200)
    //.EUt(30)

  event.recipes.susy.bubble_column_reactor('fyouno0hmznr7l') // remapped from original line 142
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 50))
    .inputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('susy:ammonium_chloride_solution', 50))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillery('7m84fntmfxzuhl') // remapped from original line 150
    .inputFluids(safeFluidOf('susy:ammonium_chloride_solution', 1000))
    .itemOutputs('6x #forge:dusts/ammonium_chloride')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(120)
    .EUt(30)

  event.recipes.susy.roaster('faoolus9mbkuoh') // remapped from original line 199
    .inputFluids(safeFluidOf('gtceu:oxygen', 10000))
    .itemInputs('4x #forge:dusts/phosphorus')
    .itemOutputs('14x #forge:dusts/phosphorus_pentoxide')
    .duration(40)
    .EUt(30)

  event.recipes.susy.roaster('an59gtcyls4dqy') // remapped from original line 209
    .inputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .itemInputs('1x #forge:dusts/any_purity_sulfur')
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .duration(60)
    .EUt(7)

  event.recipes.susy.batch_reactor('hkkgy9zwub8yox') // remapped from original line 219
    .itemInputs('1x #forge:dusts/phosphorus_pentoxide')
    .inputFluids(safeFluidOf('minecraft:water', 6000))
    .outputFluids(safeFluidOf('gtceu:phosphoric_acid', 4000))
    .duration(40)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('x6f5cmdrm5vo5a') // remapped from original line 229
    .inputFluids(safeFluidOf('gtceu:hydrogen', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .duration(1)
    .EUt(7)

  event.recipes.susy.bubble_column_reactor('ul5yncmps4o18y') // remapped from original line 237
    .circuit(1)
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .inputFluids(safeFluidOf('minecraft:water', 50))
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 50))
    .duration(1)
    .EUt(7)

  event.recipes.susy.bubble_column_reactor('aruje6myaiwsv8') // remapped from original line 246
    .circuit(2)
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .outputFluids(safeFluidOf('gtceu:diluted_hydrochloric_acid', 100))
    .duration(1)
    .EUt(7)

  event.recipes.susy.continuous_stirred_tank_reactor('npfst5vwd0czuu') // remapped from original line 255
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 50))
    .inputFluids(safeFluidOf('minecraft:water', 50))
    .outputFluids(safeFluidOf('gtceu:diluted_hydrochloric_acid', 100))
    .duration(1)
    .EUt(7)

  event.recipes.susy.fluidized_bed_reactor('u0qeqgcprd8trj') // remapped from original line 265
    .notConsumable('1x #forge:dusts/copper_ii_chloride')
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 500))
    .outputFluids(safeFluidOf('gtceu:chlorine', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 500))
    .duration(40)
    .EUt(120)

  event.recipes.susy.fluidized_bed_reactor('in9gzrg1hafrip') // remapped from original line 275
    .notConsumable('1x #forge:dusts/ruthenium_iv_oxide')
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 500))
    .outputFluids(safeFluidOf('gtceu:chlorine', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 500))
    .duration(10)
    .EUt(120)

  event.recipes.susy.batch_reactor('0d7c9hk0jcw3q6') // remapped from original line 287
    .itemInputs('3x #forge:dusts/silicon_dioxide')
    .inputFluids(safeFluidOf('gtceu:hydrofluoric_acid', 6000))
    .outputFluids(safeFluidOf('susy:diluted_hexafluorosilicic_acid', 9000))
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('ae67fawnw4nsjz') // remapped from original line 295
    .inputFluids(safeFluidOf('susy:diluted_hexafluorosilicic_acid', 9000))
    .outputFluids(safeFluidOf('susy:hexafluorosilicic_acid', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 8000))
    .duration(160)
    .EUt(30)

  event.recipes.susy.batch_reactor('7zdirrg92j0fik') // remapped from original line 305
    .itemInputs('3x #forge:dusts/fluorite')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('susy:hydrogen_fluoride', 2000))
    .itemOutputs('6x #forge:dusts/calcium_sulfate')
    .duration(30)
    .EUt(7)

  event.recipes.susy.continuous_stirred_tank_reactor('u06ksegkmhyp3m') // remapped from original line 314
    .inputFluids(safeFluidOf('gtceu:hydrogen', 50))
    .inputFluids(safeFluidOf('gtceu:fluorine', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_fluoride', 50))
    .duration(1)
    .EUt(7)

  event.recipes.susy.bubble_column_reactor('ucortdj3puqj9m') // remapped from original line 322
    .inputFluids(safeFluidOf('susy:hydrogen_fluoride', 50))
    .inputFluids(safeFluidOf('minecraft:water', 50))
    .outputFluids(safeFluidOf('gtceu:hydrofluoric_acid', 50))
    .duration(1)
    .EUt(7)

  event.recipes.gtceu.distillation_tower('nlrdjkiegh7kgg') // remapped from original line 330
    .inputFluids(safeFluidOf('gtceu:hydrofluoric_acid', 500))
    .outputFluids(safeFluidOf('minecraft:water', 500))
    .outputFluids(safeFluidOf('susy:hydrogen_fluoride', 500))
    .duration(50)
    .EUt(30)

  event.recipes.susy.roaster('ejdhgvbivb9yaz') // remapped from original line 338
    .itemInputs('6x #forge:dusts/calcium_sulfate')
    .itemInputs('2x #forge:dusts/any_purity_carbon')
    .itemOutputs('2x #forge:dusts/calcium_sulfide')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 2000))
    .duration(30)
    .EUt(7)

  event.recipes.susy.roaster('sbod9xodbe9nzh') // remapped from original line 349
    .inputFluids(safeFluidOf('minecraft:water', 4000))
    .itemInputs('3x #forge:dusts/iron')
    .itemOutputs('7x #forge:dusts/iron_two_three_oxide')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 8000))
    .duration(160)
    .EUt(60)

  event.recipes.susy.roaster('fapnjkwf0vtngb') // remapped from original line 358
    .inputFluids(safeFluidOf('minecraft:water', 4000))
    .itemInputs('3x #forge:dusts/high_purity_iron')
    .itemOutputs('7x #forge:dusts/purified_iron_two_three_oxide')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 8000))
    .duration(160)
    .EUt(60)

  event.recipes.susy.roaster('txzoftnvyj9a2d') // remapped from original line 367
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemInputs('14x #forge:dusts/iron_two_three_oxide')
    .itemOutputs('15x #forge:dusts/iron_iii_oxide')
    .duration(160)
    .EUt(60)

  event.recipes.susy.roaster('lfqn7lajvyejnk') // remapped from original line 375
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemInputs('14x #forge:dusts/purified_iron_two_three_oxide')
    .itemOutputs('15x #forge:dusts/purified_iron_iii_oxide')
    .duration(160)
    .EUt(60)

  event.recipes.susy.batch_reactor('tnr3vchdgmdkkg') // remapped from original line 383
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemInputs('2x #forge:dusts/iron_ii_sulfide')
    .itemOutputs('6x #forge:dusts/iron_sulfate')
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('wwqmf0rdsass9a') // remapped from original line 392
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemInputs('1x #forge:dusts/any_purity_iron')
    .itemOutputs('6x #forge:dusts/iron_sulfate')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.roaster('pbhzt1y7os4s90') // remapped from original line 401
    .itemInputs('12x #forge:dusts/iron_sulfate')
    .itemOutputs('5x #forge:dusts/iron_iii_oxide')
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .outputFluids(safeFluidOf('gtceu:sulfur_trioxide', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('xvxojlecm5hepz') // remapped from original line 412
    .itemInputs('2x #forge:dusts/iron_ii_sulfide')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .itemOutputs('3x #forge:dusts/iron_ii_chloride')
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 1000))
    .duration(30)
    .EUt(7)

  event.recipes.susy.roaster('k1hltitmggbi8d') // remapped from original line 421
    .itemInputs('1x #forge:dusts/any_purity_sulfur')
    .itemInputs('1x #forge:dusts/any_purity_iron')
    .itemOutputs('2x #forge:dusts/iron_ii_sulfide')
    .duration(160)
    .EUt(7)

  event.recipes.susy.roaster('ysikklvvuekhs7') // remapped from original line 430
    .inputFluids(safeFluidOf('gtceu:oxygen', 3000))
    .itemInputs('1x #forge:dusts/any_purity_antimony')
    .itemOutputs('1x #forge:dusts/antimony_trioxide')
    .duration(60)
    .EUt(7)

  event.recipes.susy.batch_reactor('konezvbjixh83y') // remapped from original line 440
    .itemInputs('7x #forge:dusts/sodium_sulfate')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemOutputs('14x #forge:dusts/sodium_bisulfate')
    .duration(120)
    .EUt(30)

  event.recipes.gtceu.mixer('0iavffmvrk3sch') // remapped from original line 448
    .itemInputs('7x #forge:dusts/sodium_bisulfate')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:sodium_bisulfate_solution', 1000))
    .duration(120)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('cpqegf5eit3huq') // remapped from original line 456
    .inputFluids(safeFluidOf('gtceu:salt_water', 50))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .outputFluids(safeFluidOf('susy:sodium_bisulfate_solution', 50))
    .duration(1)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('yxoampk8a0d9i1') // remapped from original line 465
    .inputFluids(safeFluidOf('susy:potassium_chloride_solution', 50))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .outputFluids(safeFluidOf('susy:potassium_bisulfate_solution', 50))
    .duration(1)
    .EUt(30)

  event.recipes.gtceu.distillery('bbnmxupgmrihhl') // remapped from original line 474
    .inputFluids(safeFluidOf('susy:sodium_bisulfate_solution', 1000))
    .itemOutputs('7x #forge:dusts/sodium_bisulfate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(60)
    .EUt(30)

  event.recipes.gtceu.distillery('ny8fqufnggr3qq') // remapped from original line 482
    .inputFluids(safeFluidOf('susy:potassium_bisulfate_solution', 1000))
    .itemOutputs('7x #forge:dusts/potassium_bisulfate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(60)
    .EUt(30)

  event.recipes.susy.roaster('6zeozwtiud8wyg') // remapped from original line 490
    .itemInputs('14x #forge:dusts/sodium_bisulfate')
    .itemOutputs('7x #forge:dusts/sodium_sulfate')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .outputFluids(safeFluidOf('gtceu:sulfur_trioxide', 1000))
    .duration(60)
    .EUt(30)

  event.recipes.susy.roaster('nv1inhb2f46sdg') // remapped from original line 499
    .circuit(1)
    .itemInputs('14x #forge:dusts/potassium_bisulfate')
    .itemOutputs('7x #forge:dusts/potassium_sulfate')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .outputFluids(safeFluidOf('gtceu:sulfur_trioxide', 1000))
    .duration(60)
    .EUt(30)

  event.recipes.susy.roaster('gzjdy76b53yf2p') // remapped from original line 509
    .circuit(2)
    .itemInputs('14x #forge:dusts/potassium_bisulfate')
    .itemOutputs('11x #forge:dusts/potassium_pyrosulfate')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .duration(60)
    .EUt(30)

  event.recipes.susy.batch_reactor('ois7uuoweg9u7t') // remapped from original line 518
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemInputs('5x #forge:dusts/saltpeter')
    .outputFluids(safeFluidOf('gtceu:nitric_acid', 1000))
    .itemOutputs('7x #forge:dusts/potassium_bisulfate')
    .duration(60)
    .EUt(30)

  event.recipes.susy.roaster('z5uqb6wh8cvdft') // remapped from original line 529
    .itemInputs('7x #forge:dusts/sodium_sulfate')
    .itemInputs('2x #forge:dusts/any_purity_carbon')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 2000))
    .itemOutputs('3x #forge:dusts/sodium_sulfide')
    .duration(60)
    .EUt(30)

  event.recipes.gtceu.centrifuge('ilm9urcmpu5225') // remapped from original line 540
    .itemInputs('1x #forge:dusts/quartzite')
    .itemOutputs('1x #forge:dusts/silicon_dioxide')
    .duration(60)
    .EUt(7)

  event.recipes.gtceu.centrifuge('ru7p1s2mxg86xy') // remapped from original line 547
    .itemInputs('1x #forge:dusts/nether_quartz')
    .itemOutputs('1x #forge:dusts/silicon_dioxide')
    .duration(60)
    .EUt(7)

  event.recipes.susy.batch_reactor('rmmnptq5jqwbcu') // remapped from original line 556
    .inputFluids(safeFluidOf('gtceu:hydrofluoric_acid', 6000))
    .itemInputs('5x #forge:dusts/antimony_trioxide')
    .itemOutputs('8x #forge:dusts/wet_antimony_trifluoride')
    .duration(60)
    .EUt(30)

  event.recipes.susy.dryer('4icx26uo78qkyw') // remapped from original line 564
    .itemInputs('4x #forge:dusts/wet_antimony_trifluoride')
    .outputFluids(safeFluidOf('minecraft:water', 4500))
    .itemOutputs('4x #forge:dusts/antimony_trifluoride')
    .duration(200)
    .EUt(30)

  event.recipes.susy.roaster('wib7nwwp42bmbz') // remapped from original line 574
    .inputFluids(safeFluidOf('gtceu:chlorine', 3000))
    .itemInputs('1x #forge:dusts/any_purity_antimony')
    .itemOutputs('4x #forge:dusts/antimony_trichloride')
    .duration(200)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('9xtejmbgttwpa1') // remapped from original line 582
    .inputFluids(safeFluidOf('susy:antimony_trichloride', 72))
    .inputFluids(safeFluidOf('gtceu:chlorine', 250))
    .outputFluids(safeFluidOf('susy:antimony_pentachloride', 125))
    .duration(10)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('bpc3ygh2d2lkvj') // remapped from original line 590
    .inputFluids(safeFluidOf('susy:carbon_tetrachloride', 150))
    .inputFluids(safeFluidOf('susy:hydrogen_fluoride', 300))
    .inputFluids(safeFluidOf('susy:antimony_pentachloride', 50))
    .outputFluids(safeFluidOf('susy:chlorofluoromethane_mix', 500))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('mhgxmvxxf4ppyu') // remapped from original line 599
    .inputFluids(safeFluidOf('susy:chlorofluoromethane_mix', 5000))
    .outputFluids(safeFluidOf('susy:antimony_pentachloride', 500))
    .outputFluids(safeFluidOf('susy:trichlorofluoromethane', 500))
    .outputFluids(safeFluidOf('susy:dichlorodifluoromethane', 500))
    .outputFluids(safeFluidOf('susy:chlorotrifluoromethane', 500))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 3000))
    .duration(160)
    .EUt(30)

  event.recipes.susy.reaction_furnace('pmaypqreftywvi') // remapped from original line 612
    .notConsumable('1x #forge:catalysts/bed_nickel')
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 8000))
    .outputFluids(safeFluidOf('gtceu:methane', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 2000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.reaction_furnace('ms9x5uryltesp4') // remapped from original line 622
    .notConsumable('1x #forge:catalysts/bed_nickel')
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 6000))
    .outputFluids(safeFluidOf('gtceu:methane', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .duration(150)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('khjrgatihjdavq') // remapped from original line 635
    .inputFluids(safeFluidOf('gtceu:methane', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 250))
    .outputFluids(safeFluidOf('susy:chlorinated_methane_mixture', 200))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('kbynaga38qbifv') // remapped from original line 643
    .inputFluids(safeFluidOf('susy:chlorinated_methane_mixture', 4000))
    .outputFluids(safeFluidOf('susy:carbon_tetrachloride', 250))
    .outputFluids(safeFluidOf('gtceu:chloroform', 250))
    .outputFluids(safeFluidOf('susy:dichloromethane', 250))
    .outputFluids(safeFluidOf('gtceu:chloromethane', 250))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 2500))
    .duration(160)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('pgr0khwgubqqbs') // remapped from original line 654
    .inputFluids(safeFluidOf('gtceu:chloromethane', 45))
    .inputFluids(safeFluidOf('gtceu:chlorine', 180))
    .outputFluids(safeFluidOf('susy:chlorinated_chloromethane_mixture', 150))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('yvy9fbdn8uy10s') // remapped from original line 662
    .inputFluids(safeFluidOf('susy:chlorinated_chloromethane_mixture', 5000))
    .outputFluids(safeFluidOf('susy:carbon_tetrachloride', 500))
    .outputFluids(safeFluidOf('gtceu:chloroform', 500))
    .outputFluids(safeFluidOf('susy:dichloromethane', 500))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 3000))
    .duration(160)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('g5pjlyphjbmbra') // remapped from original line 672
    .inputFluids(safeFluidOf('susy:dichloromethane', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 150))
    .outputFluids(safeFluidOf('susy:chlorinated_dichloromethane_mixture', 150))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('blsb3m7okmapdr') // remapped from original line 680
    .inputFluids(safeFluidOf('susy:chlorinated_dichloromethane_mixture', 3000))
    .outputFluids(safeFluidOf('susy:carbon_tetrachloride', 500))
    .outputFluids(safeFluidOf('gtceu:chloroform', 500))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 1500))
    .duration(160)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('v9zj1brw9qyojd') // remapped from original line 689
    .inputFluids(safeFluidOf('gtceu:chloroform', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 50))
    .outputFluids(safeFluidOf('susy:carbon_tetrachloride', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .duration(5)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('qeujfzit3sbwtv') // remapped from original line 700
    .inputFluids(safeFluidOf('gtceu:methanol', 50))
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 50))
    .outputFluids(safeFluidOf('susy:chloromethane_solution', 150))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('x5e9ucctijwgvl') // remapped from original line 708
    .inputFluids(safeFluidOf('susy:chloromethane_solution', 3000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .outputFluids(safeFluidOf('gtceu:chloromethane', 1000))
    .duration(160)
    .EUt(30)

  event.recipes.susy.batch_reactor('pvjeeoiimcbzxl') // remapped from original line 719
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .itemInputs('2x #forge:dusts/calcium_sulfide')
    .outputFluids(safeFluidOf('susy:calcium_chloride_solution', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 1000))
    .duration(80)
    .EUt(30)

  event.recipes.gtceu.distillery('rdzangrxmb4plt') // remapped from original line 728
    .inputFluids(safeFluidOf('susy:calcium_chloride_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('3x #forge:dusts/calcium_chloride')
    .duration(160)
    .EUt(30)

  // Contains GTFO resources
  //event.recipes.gtceu.chemical_bath('r8tarjrm9zvgnd') // remapped from original line 745
    //.itemInputs(safeItemId('1x gregtechfoodoption:chocolate_liquor_refined_crushed'))
    //.notConsumable(safeFluidOf('susy:soda_ash_solution', 1000))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:chocolate_liquor_dutched_crushed'))
    //.duration(160)
    //.EUt(540)

  event.recipes.susy.roaster('cnmpywsznjb6e9') // remapped from original line 755
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemInputs('4x #forge:dusts/salt')
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 1000))
    .itemOutputs('7x #forge:dusts/sodium_sulfate')
    .duration(60)
    .EUt(30)

  event.recipes.susy.roaster('bdq8er05kldykl') // remapped from original line 764
    .itemInputs('3x #forge:dusts/sodium_sulfide')
    .itemInputs('5x #forge:dusts/calcite')
    .itemOutputs('8x #forge:dusts/black_ash')
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.mixer('2uiqjlivlljvhl') // remapped from original line 772
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('6x #forge:dusts/soda_ash')
    .outputFluids(safeFluidOf('susy:soda_ash_solution', 1000))
    .duration(80)
    .EUt(30)

  event.recipes.gtceu.mixer('w11qmih8uvx14j') // remapped from original line 780
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('8x #forge:dusts/black_ash')
    .outputFluids(safeFluidOf('susy:soda_ash_solution', 1000))
    .itemOutputs('2x #forge:dusts/calcium_sulfide')
    .duration(80)
    .EUt(30)

  event.recipes.gtceu.distillery('ffchtoyidxmhxz') // remapped from original line 789
    .inputFluids(safeFluidOf('susy:soda_ash_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('6x #forge:dusts/soda_ash')
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.mixer('mb2i9cnyhfzggs') // remapped from original line 799
    .inputFluids(safeFluidOf('gtceu:salt_water', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:diluted_saltwater', 2000))
    .duration(80)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('5c6su9z4z86e0l') // remapped from original line 807
    .inputFluids(safeFluidOf('susy:diluted_saltwater', 100))
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 50))
    .inputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('susy:ammoniacal_sodium_bicarbonate_solution', 50))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillery('tisatsp8nve2ze') // remapped from original line 816
    .inputFluids(safeFluidOf('susy:ammoniacal_sodium_bicarbonate_solution', 1000))
    .outputFluids(safeFluidOf('susy:ammonium_chloride_solution', 1000))
    .itemOutputs('6x #forge:dusts/sodium_bicarbonate')
    .duration(80)
    .EUt(30)

  event.recipes.susy.roaster('3yauhul2zznjui') // remapped from original line 824
    .itemInputs('12x #forge:dusts/ammonium_chloride')
    .itemInputs('2x #forge:dusts/quicklime')
    .outputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .itemOutputs('3x #forge:dusts/calcium_chloride')
    .duration(120)
    .EUt(30)

  event.recipes.susy.roaster('lhbhuosartg1wr') // remapped from original line 834
    .itemInputs('5x #forge:dusts/calcite')
    .circuit(1)
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .itemOutputs('2x #forge:dusts/quicklime')
    .duration(80)
    .EUt(30)

  event.recipes.susy.batch_reactor('cwe6gnptixcubf') // remapped from original line 843
    .itemInputs('2x #forge:dusts/quicklime')
    .circuit(1)
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 3000))
    .itemOutputs('5x #forge:dusts/calcite')
    .duration(120)
    .EUt(7)

  event.recipes.susy.roaster('vcb80mkiq3tuo4') // remapped from original line 852
    .itemInputs('5x #forge:dusts/limestone')
    .circuit(2)
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 3000))
    .itemOutputs('2x #forge:dusts/quicklime')
    .duration(80)
    .EUt(30)

  event.recipes.susy.batch_reactor('1uprcuupcbubyv') // remapped from original line 861
    .inputFluids(safeFluidOf('susy:ammonium_chloride_solution', 2000))
    .itemInputs('2x #forge:dusts/quicklime')
    .outputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .outputFluids(safeFluidOf('susy:calcium_chloride_solution', 2000))
    .duration(80)
    .EUt(30)

  event.recipes.susy.roaster('v4s9bfge5lu84f') // remapped from original line 870
    .itemInputs('12x #forge:dusts/sodium_bicarbonate')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .itemOutputs('6x #forge:dusts/soda_ash')
    .duration(80)
    .EUt(30)

  event.recipes.susy.batch_reactor('jegvae3gretz4f') // remapped from original line 879
    .itemInputs('6x #forge:dusts/sodium_bicarbonate')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 1000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .outputFluids(safeFluidOf('susy:diluted_saltwater', 2000))
    .duration(80)
    .EUt(30)

  event.recipes.susy.roaster('6pzz2fnqwncvbn') // remapped from original line 890
    .itemInputs('9x #forge:dusts/ammonium_nitrate')
    .outputFluids(safeFluidOf('susy:dense_steam', 2000))
    .outputFluids(safeFluidOf('gtceu:nitric_oxide', 1000))
    .duration(120)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('waxqs7degwzriz') // remapped from original line 898
    .inputFluids(safeFluidOf('gtceu:ammonia', 100))
    .inputFluids(safeFluidOf('gtceu:oxygen', 250))
    .outputFluids(safeFluidOf('susy:dense_steam', 150))
    .outputFluids(safeFluidOf('gtceu:nitric_oxide', 100))
    .duration(5)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('3wwvlspqteamff') // remapped from original line 909
    .inputFluids(safeFluidOf('susy:hot_sulfuric_acid', 90))
    .inputFluids(safeFluidOf('susy:ethanol_water_azeotrope', 100))
    .outputFluids(safeFluidOf('gtceu:ethylene', 90))
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 180))
    .duration(5)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('d42epily0p80t7') // remapped from original line 918
    .inputFluids(safeFluidOf('susy:hot_sulfuric_acid', 100))
    .inputFluids(safeFluidOf('gtceu:ethanol', 100))
    .outputFluids(safeFluidOf('gtceu:ethylene', 100))
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 200))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('l1mw68mog6tcrl') // remapped from original line 941
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 500))
    .outputFluids(safeFluidOf('minecraft:water', 500))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 500))
    .duration(50)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('bi2caahqh5tpn4') // remapped from original line 951
    .inputFluids(safeFluidOf('gtceu:chloroform', 50))
    .inputFluids(safeFluidOf('susy:hydrogen_fluoride', 100))
    .outputFluids(safeFluidOf('susy:acidic_chlorodifluoromethane', 150))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.centrifuge('xm8zmhv8yqb3fy') // remapped from original line 959
    .inputFluids(safeFluidOf('susy:acidic_chlorodifluoromethane', 3000))
    .inputFluids(safeFluidOf('minecraft:water', 2000))
    .outputFluids(safeFluidOf('susy:chlorodifluoromethane', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.pyrolyse_oven('twthlaene6nj7p') // remapped from original line 968
    .inputFluids(safeFluidOf('susy:acidic_chlorodifluoromethane', 6000))
    .outputFluids(safeFluidOf('susy:acidic_tetrafluoroethylene', 5000))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.centrifuge('l5kkbdarqk1bbx') // remapped from original line 975
    .inputFluids(safeFluidOf('susy:acidic_tetrafluoroethylene', 5000))
    .inputFluids(safeFluidOf('minecraft:water', 4000))
    .outputFluids(safeFluidOf('gtceu:tetrafluoroethylene', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 4000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('svz3bh3imoz6ib') // remapped from original line 986
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 150))
    .inputFluids(safeFluidOf('susy:acetylene', 50))
    .outputFluids(safeFluidOf('susy:trinitromethane_solution', 150))
    .outputFluids(safeFluidOf('gtceu:carbon_monoxide', 50))
    .duration(5)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('swqf7uuv14jx3z') // remapped from original line 995
    .inputFluids(safeFluidOf('susy:trinitromethane_solution', 150))
    .inputFluids(safeFluidOf('gtceu:nitration_mixture', 100))
    .outputFluids(safeFluidOf('susy:tetranitromethane_solution', 250))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('gymou226gndmhm') // remapped from original line 1003
    .inputFluids(safeFluidOf('susy:tetranitromethane_solution', 5000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('gtceu:tetranitromethane', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.mixer('p2hszbpez4owjc') // remapped from original line 1014
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('6x #forge:dusts/ammonium_chloride')
    .outputFluids(safeFluidOf('susy:ammonium_chloride_solution', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.continuous_stirred_tank_reactor('c3xz24ebufmoh2') // remapped from original line 1022
    .inputFluids(safeFluidOf('susy:ammonium_chloride_solution', 50))
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 50))
    .outputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('gtceu:salt_water', 50))
    .duration(1)
    .EUt(7)

  event.recipes.gtceu.vacuum_freezer('dlvwkbzkzirrx4') // remapped from original line 1033
    .inputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 2000))
    .outputFluids(safeFluidOf('gtceu:dinitrogen_tetroxide', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('jqt7brwl4laegt') // remapped from original line 1042
    .inputFluids(safeFluidOf('gtceu:monochloramine', 50))
    .inputFluids(safeFluidOf('gtceu:dimethylamine', 50))
    .outputFluids(safeFluidOf('gtceu:dimethylhydrazine', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .duration(10)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('rau2vbq4i39lkb') // remapped from original line 1053
    .inputFluids(safeFluidOf('gtceu:monochloramine', 50))
    .inputFluids(safeFluidOf('gtceu:methylamine', 50))
    .outputFluids(safeFluidOf('susy:monomethylhydrazine', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .duration(10)
    .EUt(30)

  event.recipes.susy.fixed_bed_reactor('etr6sdoxz9vptc') // remapped from original line 1064
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 50))
    .inputFluids(safeFluidOf('gtceu:ethylene', 50))
    .notConsumable('1x #forge:catalysts/bed_palladium')
    .outputFluids(safeFluidOf('gtceu:vinyl_acetate', 50))
    .duration(10)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('ykil1pmouxbrl5') // remapped from original line 1075
    .inputFluids(safeFluidOf('minecraft:water', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 100))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .outputFluids(safeFluidOf('gtceu:hypochlorous_acid', 50))
    .duration(6)
    .EUt(30)

  event.recipes.susy.batch_reactor('e8u5njgwxxwdty') // remapped from original line 1086
    .inputFluids(safeFluidOf('gtceu:polyvinyl_acetate', 144))
    .inputFluids(safeFluidOf('gtceu:ethanol', 1000))
    .itemOutputs('1x #forge:dusts/polyvinyl_alcohol')
    .outputFluids(safeFluidOf('gtceu:ethyl_acetate', 1000))
    .duration(400)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('xbqd0mjzng06gc') // remapped from original line 1095
    .inputFluids(safeFluidOf('gtceu:ethyl_acetate', 50))
    .notConsumable(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('gtceu:ethanol', 50))
    .outputFluids(safeFluidOf('gtceu:acetic_acid', 50))
    .duration(20)
    .EUt(30)

  event.recipes.susy.batch_reactor('sopq3mynplb77e') // remapped from original line 1104
    .itemInputs('1x #forge:dusts/polyvinyl_alcohol')
    .inputFluids(safeFluidOf('gtceu:butyraldehyde', 1000))
    .itemOutputs('1x #forge:dusts/polyvinyl_butyral')
    .duration(400)
    .EUt(480)

  event.recipes.susy.trickle_bed_reactor('uhxxbdfx2pcwsj') // remapped from original line 1114
    .inputFluids(safeFluidOf('gtceu:hydrogen', 300))
    .inputFluids(safeFluidOf('gtceu:benzene', 50))
    .notConsumable('1x #forge:dusts/activated_raney_nickel')
    .outputFluids(safeFluidOf('gtceu:cyclohexane', 50))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('xjedwpyykstqbs') // remapped from original line 1125
    .inputFluids(safeFluidOf('gtceu:chlorine', 1000))
    .itemInputs('3x #forge:dusts/iron_ii_chloride')
    .itemOutputs('4x #forge:dusts/iron_iii_chloride')
    .duration(160)
    .EUt(30)

  event.recipes.susy.roaster('xqtb9isyjxbfvc') // remapped from original line 1133
    .inputFluids(safeFluidOf('gtceu:chlorine', 6000))
    .itemInputs('2x #forge:dusts/any_purity_iron')
    .itemOutputs('8x #forge:dusts/iron_iii_chloride')
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.mixer('pfakbuurwfvqks') // remapped from original line 1141
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('4x #forge:dusts/iron_iii_chloride')
    .outputFluids(safeFluidOf('susy:iron_iii_chloride_solution', 1000))
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.large_chemical_reactor('la0iekwhvnb0cf') // remapped from original line 1151
    .circuit(1)
    .inputFluids(safeFluidOf('gtceu:hydrofluoric_acid', 4000))
    .itemInputs('4x #forge:dusts/antimony_trifluoride')
    .outputFluids(safeFluidOf('gtceu:fluoroantimonic_acid', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .duration(3000)
    .EUt(480)

  event.recipes.gtceu.mixer('tfd0msrqbyeuco') // remapped from original line 1163
    .itemInputs('1x #forge:dusts/any_purity_sodium')
    .itemInputs('1x #forge:dusts/any_purity_potassium')
    .outputFluids(safeFluidOf('gtceu:sodium_potassium', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.polymerization_tank('xapmmcqjce8jlm') // remapped from original line 1173
    .inputFluids(safeFluidOf('susy:n_methyl_two_pyrrolidone', 1000))
    .itemInputs('12x #forge:dusts/dichlorobenzene')
    .itemInputs('3x #forge:dusts/sodium_sulfide')
    .outputFluids(safeFluidOf('susy:salty_n_methyl_two_pyrrolidone', 1000))
    .itemOutputs('11x #forge:dusts/polyphenylene_sulfide')
    .duration(600)
    .EUt(240)

  event.recipes.gtceu.distillery('t5ozggiolgtiud') // remapped from original line 1183
    .inputFluids(safeFluidOf('susy:salty_n_methyl_two_pyrrolidone', 1000))
    .outputFluids(safeFluidOf('susy:n_methyl_two_pyrrolidone', 1000))
    .itemOutputs('4x #forge:dusts/salt')
    .duration(400)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('brq0gs3ycv11lj') // remapped from original line 1193
    .inputFluids(safeFluidOf('gtceu:oxygen', 50))
    .inputFluids(safeFluidOf('gtceu:nitric_oxide', 50))
    .outputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 50))
    .duration(8)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('cqbloya7vwq75y') // remapped from original line 1201
    .inputFluids(safeFluidOf('minecraft:water', 50))
    .inputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 150))
    .outputFluids(safeFluidOf('gtceu:nitric_acid', 100))
    .outputFluids(safeFluidOf('gtceu:nitric_oxide', 50))
    .duration(12)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('mn2haksphqauqh') // remapped from original line 1212
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 50))
    .inputFluids(safeFluidOf('gtceu:methanol', 50))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:methyl_acetate_solution', 150))
    .duration(12)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('nv7g6kxpj141rq') // remapped from original line 1221
    .inputFluids(safeFluidOf('susy:methyl_acetate_solution', 3000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('gtceu:methyl_acetate', 1000))
    .duration(120)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('iqbq6herq0xeyq') // remapped from original line 1232
    .inputFluids(safeFluidOf('gtceu:benzene', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 100))
    .notConsumable('1x #forge:dusts/iron_iii_chloride')
    .outputFluids(safeFluidOf('gtceu:chlorobenzene', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .duration(12)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('0oi7dt8qopo6db') // remapped from original line 1244
    .notConsumable('1x #forge:springs/nichrome')
    .inputFluids(safeFluidOf('gtceu:chlorobenzene', 50))
    .inputFluids(safeFluidOf('gtceu:nitration_mixture', 100))
    .outputFluids(safeFluidOf('susy:acidic_chloronitrobenzene_mixture', 100))
    .duration(10)
    .EUt(480)

  event.recipes.susy.phase_separator('6rrcfllckkko5x') // remapped from original line 1253
    .inputFluids(safeFluidOf('susy:acidic_chloronitrobenzene_mixture', 2000))
    .itemOutputs('1x #forge:dusts/mixed_chloronitrobenzene')
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 2000))
    .duration(50)

  event.recipes.gtceu.distillery('mbdmggzwb40orp') // remapped from original line 1260
    .inputFluids(safeFluidOf('susy:mixed_chloronitrobenzene', 144))
    .chancedOutput('1x #forge:dusts/four_chloronitrobenzene', 6500, 0)
    .outputFluids(safeFluidOf('susy:two_chloronitrobenzene', 48))
    .duration(200)
    .EUt(30)

  event.recipes.susy.trickle_bed_reactor('3pfwdbvm1btkec') // remapped from original line 1270
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 100))
    .notConsumable('1x #forge:dusts/any_purity_carbon')
    .outputFluids(safeFluidOf('susy:phosgene', 50))
    .duration(10)
    .EUt(30)

  event.recipes.susy.reaction_furnace('gcfz985vcnopje') // remapped from original line 1279
    .inputFluids(safeFluidOf('susy:carbon_tetrachloride', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .outputFluids(safeFluidOf('susy:phosgene', 1000))
    .outputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .duration(30)
    .EUt(120)

  event.recipes.susy.reaction_furnace('0frxkwsxfwcsar') // remapped from original line 1290
    .inputFluids(safeFluidOf('gtceu:titanium_tetrachloride', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .outputFluids(safeFluidOf('gtceu:chlorine', 4000))
    .itemOutputs('3x #forge:dusts/titanium_dioxide')
    .duration(200)
    .EUt(480)

  event.recipes.susy.reaction_furnace('rx4maj9v2lqekj') // remapped from original line 1303
    .itemInputs('18x #forge:dusts/dicobalt_octacarbonyl')
    .inputFluids(safeFluidOf('gtceu:propene', 1000))
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .inputFluids(safeFluidOf('susy:hot_hp_hydrogen', 2000))
    .outputFluids(safeFluidOf('susy:butyraldehyde_mixture', 1000))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.distillation_tower('alez7wzo0scrrm') // remapped from original line 1313
    .inputFluids(safeFluidOf('susy:butyraldehyde_mixture', 1000))
    .itemOutputs('18x #forge:dusts/dicobalt_octacarbonyl')
    .outputFluids(safeFluidOf('gtceu:butyraldehyde', 800))
    .outputFluids(safeFluidOf('susy:isobutyraldehyde', 200))
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('bgqrjew0epgfn2') // remapped from original line 1324
    .inputFluids(safeFluidOf('susy:isobutyraldehyde', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .notConsumable(safeItemId('1x susy:hv_catalyst_bed_reduction'))
    .outputFluids(safeFluidOf('susy:isobutyl_alcohol', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.batch_reactor('esd1m3lk7bdbjo') // remapped from original line 1333
    .inputFluids(safeFluidOf('susy:isobutyraldehyde', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .notConsumable('1x #forge:catalysts/bed_platinum')
    .outputFluids(safeFluidOf('susy:isobutyl_alcohol', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.roaster('hejgu5c5obzdth') // remapped from original line 1344
    .inputFluids(safeFluidOf('gtceu:chlorine', 1000))
    .itemInputs('1x #forge:dusts/any_purity_sodium')
    .itemOutputs('2x #forge:dusts/salt')
    .duration(200)
    .EUt(7)

  event.recipes.susy.roaster('mcc3nhe4segxdc') // remapped from original line 1354
    .inputFluids(safeFluidOf('gtceu:chlorine', 1000))
    .itemInputs('1x #forge:dusts/any_purity_potassium')
    .itemOutputs('2x #forge:dusts/rock_salt')
    .duration(200)
    .EUt(7)

  event.recipes.susy.batch_reactor('3ab6zg6343m8lu') // remapped from original line 1364
    .inputFluids(safeFluidOf('gtceu:toluene', 1000))
    .inputFluids(safeFluidOf('gtceu:nitration_mixture', 6000))
    .outputFluids(safeFluidOf('susy:tnt_slurry', 3000))
    .duration(200)
    .EUt(24)

  event.recipes.gtceu.distillery('viauggzgtd7tsm') // remapped from original line 1372
    .inputFluids(safeFluidOf('susy:tnt_slurry', 1000))
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 1000))
    .itemOutputs('7x #forge:dusts/tnt')
    .duration(300)
    .EUt(30)

  event.recipes.susy.roaster('cfkfypd6zryj3w') // remapped from original line 1382
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .inputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .notConsumable('1x #forge:dusts/vanadium_pentoxide')
    .outputFluids(safeFluidOf('gtceu:sulfur_trioxide', 1000))
    .duration(200)
    .EUt(7)

  event.recipes.gtceu.mixer('ffebvtsizywpcg') // remapped from original line 1394
    .circuit(1)
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('3x #forge:dusts/sodium_hydroxide')
    .outputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .duration(80)
    .EUt(7)

  event.recipes.gtceu.mixer('kndpwp20y5gqle') // remapped from original line 1403
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('9x #forge:dusts/ammonium_nitrate')
    .outputFluids(safeFluidOf('susy:ammonium_nitrate_solution', 1000))
    .duration(80)
    .EUt(7)

  event.recipes.gtceu.mixer('p2u5zgkzvopmkw') // remapped from original line 1411
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('3x #forge:dusts/potassium_hydroxide')
    .outputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 1000))
    .duration(80)
    .EUt(7)

  event.recipes.gtceu.mixer('zyxtloqslugcgn') // remapped from original line 1419
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('2x #forge:dusts/rock_salt')
    .outputFluids(safeFluidOf('susy:potassium_chloride_solution', 1000))
    .duration(80)
    .EUt(7)

  event.recipes.susy.continuous_stirred_tank_reactor('rtpoy8ukx7yxqs') // remapped from original line 1427
    .inputFluids(safeFluidOf('susy:ammonium_nitrate_solution', 50))
    .inputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 50))
    .outputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('susy:diluted_saltpeter_solution', 150))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillery('tpugjb65mdygbr') // remapped from original line 1436
    .inputFluids(safeFluidOf('susy:diluted_saltpeter_solution', 3000))
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .itemOutputs('5x #forge:dusts/saltpeter')
    .duration(300)
    .EUt(24)

  event.recipes.susy.continuous_stirred_tank_reactor('9mak7ixtryt2bf') // remapped from original line 1444
    .inputFluids(safeFluidOf('susy:ammonium_nitrate_solution', 50))
    .inputFluids(safeFluidOf('susy:potassium_chloride_solution', 50))
    .outputFluids(safeFluidOf('susy:nitrate_solution', 100))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillery('upf9puculplvki') // remapped from original line 1452
    .inputFluids(safeFluidOf('susy:nitrate_solution', 2000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('11x #forge:dusts/nitrate_salt_mix')
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.centrifuge('4q5uujq4rg0asj') // remapped from original line 1460
    .itemInputs('11x #forge:dusts/nitrate_salt_mix')
    .itemOutputs('6x #forge:dusts/ammonium_chloride')
    .itemOutputs('5x #forge:dusts/saltpeter')
    .duration(200)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('8pbz5au3gss0ci') // remapped from original line 1468
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 50))
    .inputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 50))
    .outputFluids(safeFluidOf('susy:saltpeter_solution', 100))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.distillery('r3rfptprm1vw51') // remapped from original line 1476
    .inputFluids(safeFluidOf('susy:saltpeter_solution', 2000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('5x #forge:dusts/saltpeter')
    .duration(300)
    .EUt(30)

  event.recipes.susy.batch_reactor('y53yfscztuiy1s') // remapped from original line 1484
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 1000))
    .itemInputs('3x #forge:dusts/sodium_hydroxide')
    .outputFluids(safeFluidOf('susy:sodium_nitrate_solution', 1000))
    .duration(160)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('t92oykrgtwl98c') // remapped from original line 1492
    .inputFluids(safeFluidOf('susy:sodium_nitrate_solution', 50))
    .inputFluids(safeFluidOf('susy:potassium_chloride_solution', 50))
    .outputFluids(safeFluidOf('susy:salty_saltpeter_solution', 100))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillery('alrbzmeqd4rhqn') // remapped from original line 1500
    .inputFluids(safeFluidOf('susy:salty_saltpeter_solution', 2000))
    .outputFluids(safeFluidOf('gtceu:salt_water', 1000))
    .itemOutputs('5x #forge:dusts/saltpeter')
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.distillery('zd67qecypskzj3') // remapped from original line 1510
    .inputFluids(safeFluidOf('susy:sodium_silicate_solution', 1000))
    .itemOutputs('6x #forge:dusts/sodium_silicate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(20)
    .EUt(30)

  event.recipes.susy.batch_reactor('xydbh8epcvckjp') // remapped from original line 1518
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .inputFluids(safeFluidOf('susy:dense_steam', 1000))
    .itemInputs('3x #forge:dusts/silicon_dioxide')
    .outputFluids(safeFluidOf('susy:diluted_sodium_silicate_solution', 4000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.distillery('cqe6t6zrttfmgz') // remapped from original line 1527
    .inputFluids(safeFluidOf('susy:sodium_aluminate_solution', 1500))
    .outputFluids(safeFluidOf('minecraft:water', 1500))
    .itemOutputs('4x #forge:dusts/sodium_aluminate')
    .duration(160)
    .EUt(30)

  event.recipes.susy.batch_reactor('xwhm8vsokpifvk') // remapped from original line 1535
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .itemInputs('2x #forge:dusts/any_purity_aluminium')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 6000))
    .itemOutputs('8x #forge:dusts/sodium_aluminate')
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.autoclave('kcktbnqhcr60ba') // remapped from original line 1544
    .inputFluids(safeFluidOf('susy:diluted_sodium_silicate_solution', 4000))
    .itemInputs('4x #forge:dusts/sodium_aluminate')
    .outputFluids(safeFluidOf('susy:raw_molecular_sieve', 4000))
    .duration(180)
    .EUt(30)

  event.recipes.gtceu.autoclave('uwquhpzzj71an0') // remapped from original line 1552
    .inputFluids(safeFluidOf('susy:sodium_silicate_solution', 1000))
    .itemInputs('4x #forge:dusts/sodium_aluminate')
    .outputFluids(safeFluidOf('susy:raw_molecular_sieve', 4000))
    .duration(180)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('ofhhqnsgw72btv') // remapped from original line 1560
    .inputFluids(safeFluidOf('susy:diluted_sodium_silicate_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 750))
    .outputFluids(safeFluidOf('susy:sodium_silicate_solution', 250))
    .duration(200)
    .EUt(30)

  event.recipes.susy.dryer('tfxhnoydab1pwu') // remapped from original line 1568
    .inputFluids(safeFluidOf('susy:raw_molecular_sieve', 4000))
    .itemOutputs('10x #forge:dusts/molecular_sieve')
    .duration(400)
    .EUt(30)

  event.recipes.gtceu.alloy_smelter('wlgdsnornlt0zz') // remapped from original line 1575
    .itemInputs('1x #forge:dusts/molecular_sieve')
    .itemInputs('1x #forge:dusts/clay')
    .itemOutputs(safeItemId('1x susy:cracking_catalyst'))
    .duration(100)
    .EUt(60)

  event.recipes.susy.batch_reactor('gzebizjnrkgjy0') // remapped from original line 1585
    .inputFluids(safeFluidOf('gtceu:glycerol', 1000))
    .inputFluids(safeFluidOf('gtceu:nitration_mixture', 6000))
    .outputFluids(safeFluidOf('gtceu:glyceryl_trinitrate', 1000))
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 6000))
    .duration(100)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('iirx1zy8zd67ey') // remapped from original line 1596
    .inputFluids(safeFluidOf('gtceu:chlorine', 100))
    .inputFluids(safeFluidOf('susy:hot_hp_propene', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .outputFluids(safeFluidOf('gtceu:allyl_chloride', 50))
    .duration(8)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('sr7fuch7fbiaec') // remapped from original line 1607
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 100))
    .inputFluids(safeFluidOf('gtceu:chlorine', 100))
    .outputFluids(safeFluidOf('susy:impure_bleach', 200))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('1piegxv1q0ngq0') // remapped from original line 1615
    .inputFluids(safeFluidOf('susy:impure_bleach', 4000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .outputFluids(safeFluidOf('susy:bleach', 1000))
    .itemOutputs('2x #forge:dusts/salt')
    .duration(300)
    .EUt(30)

  event.recipes.susy.batch_reactor('tekjiq9mzwqyic') // remapped from original line 1624
    .inputFluids(safeFluidOf('susy:bleach', 1000))
    .inputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .outputFluids(safeFluidOf('gtceu:monochloramine', 1000))
    .outputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.fixed_bed_reactor('hilmskdgenzpyf') // remapped from original line 1635
    .inputFluids(safeFluidOf('gtceu:toluene', 50))
    .inputFluids(safeFluidOf('gtceu:chlorobenzene', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 100))
    .notConsumable('1x #forge:catalysts/bed_iron_iii_chloride')
    .outputFluids(safeFluidOf('susy:mixed_dichlorobenzene_solution', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('lw3es3hrn6jris') // remapped from original line 1646
    .inputFluids(safeFluidOf('susy:mixed_dichlorobenzene_solution', 1000))
    .outputFluids(safeFluidOf('susy:one_two_dichlorobenzene_solution', 400))
    .outputFluids(safeFluidOf('susy:one_four_dichlorobenzene_solution', 600))
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.distillery('ptedffd6spfdcp') // remapped from original line 1654
    .inputFluids(safeFluidOf('susy:one_four_dichlorobenzene_solution', 1000))
    .outputFluids(safeFluidOf('gtceu:toluene', 1000))
    .itemOutputs('12x #forge:dusts/dichlorobenzene')
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.distillery('hgqujhtnynd7po') // remapped from original line 1662
    .inputFluids(safeFluidOf('susy:one_two_dichlorobenzene_solution', 1000))
    .outputFluids(safeFluidOf('gtceu:toluene', 1000))
    .itemOutputs('12x #forge:dusts/one_two_dichlorobenzene')
    .duration(300)
    .EUt(30)

  event.recipes.susy.batch_reactor('u776klxwlcxbcu') // remapped from original line 1684
    .itemInputs('3x #forge:dusts/calcium_carbide')
    .inputFluids(safeFluidOf('minecraft:water', 2000))
    .itemOutputs('5x #forge:dusts/calcium_hydroxide')
    .outputFluids(safeFluidOf('susy:acetylene', 1000))
    .EUt(30)
    .duration(120)

  event.recipes.susy.roaster('rdrrfznjvvlxev') // remapped from original line 1695
    .circuit(1)
    .itemInputs('5x #forge:dusts/calcium_hydroxide')
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .itemOutputs('5x #forge:dusts/calcite')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .EUt(30)
    .duration(120)

  event.recipes.susy.roaster('puqcmesy86ctci') // remapped from original line 1705
    .circuit(2)
    .itemInputs('5x #forge:dusts/calcium_hydroxide')
    .itemOutputs('2x #forge:dusts/quicklime')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .EUt(30)
    .duration(120)

  event.recipes.susy.bubble_column_reactor('ckavja5vvt5uvr') // remapped from original line 1716
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 50))
    .inputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('susy:ammonium_nitrate_solution', 50))
    .EUt(30)
    .duration(10)

  event.recipes.gtceu.distillation_tower('gw41jkkoz4mwpw') // remapped from original line 1724
    .inputFluids(safeFluidOf('susy:ammonium_nitrate_solution', 1000))
    .itemOutputs('2x #forge:dusts/ammonium_nitrate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(90)
    .duration(300)

  event.recipes.susy.fixed_bed_reactor('39e8dr7aavmivp') // remapped from original line 1734
    .inputFluids(safeFluidOf('gtceu:chlorine', 100))
    .inputFluids(safeFluidOf('gtceu:ethylene', 50))
    .notConsumable('1x #forge:catalysts/bed_iron_iii_oxide')
    .outputFluids(safeFluidOf('susy:dichloroethane', 50))
    .EUt(30)
    .duration(10)

  event.recipes.susy.fixed_bed_reactor('bs4jtkxttq1tlk') // remapped from original line 1743
    .inputFluids(safeFluidOf('gtceu:ethylene', 50))
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 100))
    .inputFluids(safeFluidOf('gtceu:oxygen', 50))
    .notConsumable('1x #forge:catalysts/bed_copper_ii_chloride')
    .outputFluids(safeFluidOf('susy:dichloroethane', 50))
    .outputFluids(safeFluidOf('minecraft:water', 150))
    .EUt(30)
    .duration(10)

  event.recipes.susy.fluidized_bed_reactor('nf6gdtfftmw1ql') // remapped from original line 1756
    .inputFluids(safeFluidOf('gtceu:methanol', 300))
    .inputFluids(safeFluidOf('gtceu:ammonia', 150))
    .notConsumable('1x #forge:dusts/impregnated_alumina_catalyst')
    .outputFluids(safeFluidOf('susy:methylamine_mix', 450))
    .duration(8)
    .EUt(voltAmps[2])

  event.recipes.gtceu.distillation_tower('cw0jn0dhalvntl') // remapped from original line 1766
    .inputFluids(safeFluidOf('susy:methylamine_mix', 9000))
    .outputFluids(safeFluidOf('minecraft:water', 6000))
    .outputFluids(safeFluidOf('gtceu:methylamine', 1000))
    .outputFluids(safeFluidOf('gtceu:dimethylamine', 1000))
    .outputFluids(safeFluidOf('susy:trimethylamine', 1000))
    .EUt(90)
    .duration(1200)

  event.recipes.susy.fixed_bed_reactor('xv4dmhsfvzi8k3') // remapped from original line 1778
    .inputFluids(safeFluidOf('susy:formaldehyde', 100))
    .inputFluids(safeFluidOf('susy:acetylene', 50))
    .notConsumable('1x #forge:catalysts/bed_bismuth_copper')
    .outputFluids(safeFluidOf('susy:butynediol', 50))
    .EUt(30)
    .duration(10)

  event.recipes.susy.trickle_bed_reactor('t44knixdocaszu') // remapped from original line 1787
    .inputFluids(safeFluidOf('susy:butynediol', 50))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 200))
    .notConsumable('1x #forge:dusts/activated_raney_nickel')
    .outputFluids(safeFluidOf('susy:butanediol', 50))
    .EUt(30)
    .duration(10)

  event.recipes.susy.fixed_bed_reactor('t4lrjdmwcl7qf4') // remapped from original line 1798
    .inputFluids(safeFluidOf('gtceu:methanol', 100))
    .inputFluids(safeFluidOf('gtceu:oxygen', 100))
    .notConsumable('1x #forge:catalysts/bed_silver')
    .outputFluids(safeFluidOf('susy:formaldehyde', 100))
    .outputFluids(safeFluidOf('minecraft:water', 100))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.susy.fixed_bed_reactor('ifs1fhd6tty60j') // remapped from original line 1811
    .inputFluids(safeFluidOf('susy:butanediol', 50))
    .notConsumable('1x #forge:catalysts/bed_chromium_trioxide')
    .outputFluids(safeFluidOf('susy:gamma_butyrolactone', 50))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 200))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.continuous_stirred_tank_reactor('i6h668jdjezsvp') // remapped from original line 1822
    .inputFluids(safeFluidOf('susy:gamma_butyrolactone', 50))
    .inputFluids(safeFluidOf('gtceu:methylamine', 50))
    .outputFluids(safeFluidOf('susy:diluted_n_methyl_two_pyrrolidone', 100))
    .EUt(30)
    .duration(10)

  event.recipes.gtceu.distillation_tower('hp8tgchgg1jecn') // remapped from original line 1830
    .inputFluids(safeFluidOf('susy:diluted_n_methyl_two_pyrrolidone', 2000))
    .outputFluids(safeFluidOf('susy:n_methyl_two_pyrrolidone', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(90)
    .duration(450)

  event.recipes.susy.continuous_stirred_tank_reactor('hwdhfbpgskb1yp') // remapped from original line 1840
    .inputFluids(safeFluidOf('susy:hydrobromic_acid', 50))
    .inputFluids(safeFluidOf('susy:n_butanol', 50))
    .outputFluids(safeFluidOf('susy:one_bromobutane', 50))
    .outputFluids(safeFluidOf('minecraft:water', 50))
    .EUt(30)
    .duration(10)

  event.recipes.gtceu.mixer('gwznohutcz76ef') // remapped from original line 1851
    .itemInputs('2x #forge:dusts/any_purity_lithium')
    .inputFluids(safeFluidOf('susy:diethyl_ether', 1000))
    .outputFluids(safeFluidOf('susy:lithium_solution', 1000))
    .EUt(30)
    .duration(320)

  event.recipes.susy.batch_reactor('4aeyb4youxovs3') // remapped from original line 1859
    .inputFluids(safeFluidOf('susy:lithium_solution', 1000))
    .inputFluids(safeFluidOf('susy:one_bromobutane', 1000))
    .outputFluids(safeFluidOf('susy:diluted_butyllithium', 2000))
    .itemOutputs('2x #forge:dusts/lithium_bromide')
    .EUt(30)
    .duration(300)

  event.recipes.gtceu.distillation_tower('zevm0zu9becqnz') // remapped from original line 1868
    .inputFluids(safeFluidOf('susy:diluted_butyllithium', 2000))
    .outputFluids(safeFluidOf('susy:butyllithium', 1000))
    .outputFluids(safeFluidOf('susy:diethyl_ether', 1000))
    .EUt(90)
    .duration(360)

  event.recipes.susy.continuous_stirred_tank_reactor('xvqxi3uojtzfqw') // remapped from original line 1878
    .inputFluids(safeFluidOf('gtceu:ethanol', 100))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:diethyl_ether_solution', 150))
    .EUt(30)
    .duration(5)

  event.recipes.gtceu.distillation_tower('5s9cfro8x6h0ai') // remapped from original line 1886
    .inputFluids(safeFluidOf('susy:diethyl_ether_solution', 3000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:diethyl_ether', 1000))
    .EUt(90)
    .duration(600)

  event.recipes.susy.batch_reactor('sfzjemhgzc7zzv') // remapped from original line 1897
    .itemInputs('3x #forge:dusts/potassium_hydroxide')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 1000))
    .outputFluids(safeFluidOf('susy:diluted_rock_salt_solution', 2000))
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.distillation_tower('o4t7zutdrb58tt') // remapped from original line 1905
    .inputFluids(safeFluidOf('susy:diluted_rock_salt_solution', 2000))
    .outputFluids(safeFluidOf('susy:potassium_chloride_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(16)
    .duration(60)

  event.recipes.gtceu.distillery('cghem8br8nftbe') // remapped from original line 1913
    .inputFluids(safeFluidOf('susy:potassium_chloride_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('2x #forge:dusts/rock_salt')
    .EUt(16)
    .duration(60)

  event.recipes.susy.continuous_stirred_tank_reactor('1qn50eztr8mrvm') // remapped from original line 1921
    .inputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 100))
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 50))
    .outputFluids(safeFluidOf('susy:diluted_potassium_carbonate_solution', 150))
    .EUt(30)
    .duration(15)

  event.recipes.gtceu.distillery('61d8jbuggujcvh') // remapped from original line 1929
    .inputFluids(safeFluidOf('susy:diluted_potassium_carbonate_solution', 3000))
    .itemOutputs('6x #forge:dusts/potassium_carbonate')
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .EUt(30)
    .duration(400)

  event.recipes.susy.batch_reactor('pvb0dhucpflwdh') // remapped from original line 1937
    .inputFluids(safeFluidOf('susy:ammonium_chloride_solution', 2000))
    .itemInputs('5x #forge:dusts/calcium_hydroxide')
    .outputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .outputFluids(safeFluidOf('susy:diluted_calcium_chloride_solution', 2000))
    .EUt(30)
    .duration(360)

  event.recipes.gtceu.distillery('jhispvonfxdxrt') // remapped from original line 1946
    .inputFluids(safeFluidOf('susy:diluted_calcium_chloride_solution', 2000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .itemOutputs('3x #forge:dusts/calcium_chloride')
    .EUt(30)
    .duration(100)

  event.recipes.gtceu.mixer('nw4bbkyg9d5yjf') // remapped from original line 1954
    .itemInputs('6x #forge:dusts/potassium_carbonate')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:potassium_carbonate_solution', 1000))
    .EUt(30)
    .duration(80)

  event.recipes.susy.batch_reactor('ckwpurxaumu3eb') // remapped from original line 1962
    .itemInputs('5x #forge:dusts/calcium_hydroxide')
    .inputFluids(safeFluidOf('susy:potassium_carbonate_solution', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('5x #forge:dusts/calcite')
    .outputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 2000))
    .EUt(30)
    .duration(200)

  event.recipes.susy.bubble_column_reactor('3lemua6374t79j') // remapped from original line 1972
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 50))
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .outputFluids(safeFluidOf('gtceu:salt_water', 100))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('nh9ktav1pzvtof') // remapped from original line 1980
    .itemInputs('2x #forge:dusts/quicklime')
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 2000))
    .outputFluids(safeFluidOf('susy:calcium_chloride_solution', 1000))
    .duration(100)
    .EUt(16)

  event.recipes.susy.batch_reactor('zbuklp1vqqnail') // remapped from original line 1988
    .itemInputs('5x #forge:dusts/calcium_hydroxide')
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 2000))
    .outputFluids(safeFluidOf('susy:diluted_calcium_chloride_solution', 2000))
    .duration(100)
    .EUt(16)

  event.recipes.susy.roaster('vsv5wtmmholww5') // remapped from original line 1996
    .itemInputs('1x #forge:dusts/calcium')
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemOutputs('2x #forge:dusts/quicklime')
    .duration(60)
    .EUt(30)

  // Contains GTFO resources
  //event.recipes.susy.continuous_stirred_tank_reactor('mzzdrwlxv5ftfb') // remapped from original line 2006
    //.inputFluids(safeFluidOf('gtceu:methyl_acetate', 50))
    //.inputFluids(safeFluidOf('gtceu:carbon_monoxide', 50))
    //.outputFluids(safeFluidOf('susy:gtfo_acetic_anhydride', 50))
    //.EUt(480)
    //.duration(1)

  // Contains GTFO resources
  //event.recipes.susy.batch_reactor('na6wqvu0z3hr1l') // remapped from original line 2014
    //.itemInputs('1x #forge:dusts/cellulose')
    //.inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    //.inputFluids(safeFluidOf('susy:gtfo_acetic_anhydride', 1000))
    //.outputFluids(safeFluidOf('susy:acidic_cellulose_solution', 1000))
    //.EUt(480)
    //.duration(160)

  event.recipes.susy.continuous_stirred_tank_reactor('5hzt90zqpwerfs') // remapped from original line 2023
    .inputFluids(safeFluidOf('susy:acidic_cellulose_solution', 50))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 50))
    .inputFluids(safeFluidOf('minecraft:water', 50))
    .outputFluids(safeFluidOf('susy:cellulose_acetate_solution', 100))
    .EUt(480)
    .duration(1)

  event.recipes.gtceu.fluid_heater('0yzjvnr6uv8qhb') // remapped from original line 2032
    .inputFluids(safeFluidOf('gtceu:air', 1000))
    .outputFluids(safeFluidOf('susy:hot_air', 1000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.dryer('hohwol4r9oitxq') // remapped from original line 2039
    .inputFluids(safeFluidOf('susy:cellulose_acetate_solution', 2000))
    .inputFluids(safeFluidOf('susy:hot_air', 1000))
    .notConsumable(safeItemId('1x susy:spinneret'))
    .itemOutputs('8x #forge:fibers/cellulose_acetate')
    .outputFluids(safeFluidOf('gtceu:air', 1000))
    .outputFluids(safeFluidOf('susy:diluted_acetic_acid', 2000))
    .EUt(480)
    .duration(100)

  event.recipes.gtceu.assembler('ehkksncvvimz7l') // remapped from original line 2050
    .itemInputs('16x #forge:threads/cellulose_acetate')
    .itemOutputs(safeItemId('1x susy:cellulose_acetate_mesh'))
    .EUt(120)
    .duration(160)

  event.recipes.gtceu.distillery('0dyrcf8d6nnyaj') // remapped from original line 2059
    .inputFluids(safeFluidOf('minecraft:water', 288))
    .circuit(1)
    .outputFluids(safeFluidOf('gtceu:distilled_water', 260))
    .duration(160)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('tsg5lzyngyshbt') // remapped from original line 2069
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemInputs('4x #forge:dusts/wood')
    .outputFluids(safeFluidOf('susy:furfural_solution', 5000))
    .duration(180)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillation_tower('s6sheccc7vzcnb') // remapped from original line 2077
    .inputFluids(safeFluidOf('susy:furfural_solution', 5000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('susy:furfural', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .duration(240)
    .EUt(voltAmps[1])

  event.recipes.susy.reaction_furnace('jlu1l1dgc7o76m') // remapped from original line 2090
    .inputFluids(safeFluidOf('susy:hot_hp_methane', 1000))
    .inputFluids(safeFluidOf('susy:dense_steam', 1000))
    .notConsumable('1x #forge:dusts/any_purity_nickel')
    .outputFluids(safeFluidOf('susy:syngas', 7000))
    .duration(160)
    .EUt(voltAmps[2])

  event.recipes.susy.reaction_furnace('fubciqgx7d7kfo') // remapped from original line 2099
    .inputFluids(safeFluidOf('susy:hot_hp_natural_gas', 1500))
    .inputFluids(safeFluidOf('susy:dense_steam', 1000))
    .notConsumable('1x #forge:dusts/any_purity_nickel')
    .outputFluids(safeFluidOf('susy:syngas', 7000))
    .duration(160)
    .EUt(voltAmps[2])

  event.recipes.susy.roaster('3n6obtnbqtkyei') // remapped from original line 2108
    .itemInputs('1x #forge:dusts/any_purity_zinc')
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemOutputs('2x #forge:dusts/zinc_oxide')
    .duration(300)
    .EUt(30)

  event.recipes.susy.batch_reactor('6r6f8xiqcucdtg') // remapped from original line 2116
    .itemInputs('1x #forge:dusts/chromium_trioxide')
    .itemInputs('12x #forge:dusts/iron_iii_oxide')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .itemOutputs('8x #forge:dusts/hts_catalyst')
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('x7zxd7f2vgwz2m') // remapped from original line 2125
    .itemInputs('1x #forge:dusts/zinc_oxide')
    .itemInputs('1x #forge:dusts/cupric_oxide')
    .itemInputs('1x #forge:dusts/alumina')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .itemOutputs('4x #forge:dusts/lts_catalyst')
    .duration(200)
    .EUt(30)

  event.recipes.susy.reaction_furnace('x3s3tczpqppqne') // remapped from original line 2135
    .inputFluids(safeFluidOf('susy:syngas', 7000))
    .inputFluids(safeFluidOf('susy:dense_steam', 1000))
    .notConsumable('1x #forge:catalysts/bed_lts_catalyst')
    .outputFluids(safeFluidOf('susy:reformed_syngas', 9000))
    .duration(320)
    .EUt(30)

  event.recipes.susy.reaction_furnace('sgqn1du3slsy1b') // remapped from original line 2144
    .inputFluids(safeFluidOf('susy:syngas', 7000))
    .inputFluids(safeFluidOf('susy:dense_steam', 1000))
    .notConsumable('1x #forge:dusts/hts_catalyst')
    .outputFluids(safeFluidOf('susy:reformed_syngas', 9000))
    .duration(160)
    .EUt(120)

  event.recipes.gtceu.pyrolyse_oven('aljf38l89ordyt') // remapped from original line 2153
    .inputFluids(safeFluidOf('gtceu:methane', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 4000))
    .itemInputs('1x #forge:dusts/any_purity_bismuth')
    .itemOutputs('2x #forge:dusts/spent_bismuth_catalyst')
    .duration(10)
    .EUt(voltAmps[3] * 2)

  event.recipes.gtceu.electromagnetic_separator('f1hzwf01d0ztzg') // remapped from original line 2162
    .itemInputs('2x #forge:dusts/spent_bismuth_catalyst')
    .itemOutputs('1x #forge:dusts/bismuth')
    .itemOutputs('1x #forge:dusts/carbon')
    .duration(20)
    .EUt(480)

  event.recipes.susy.pressure_swing_adsorption('aiuvclmbqptlw9') // remapped from original line 2170
    .inputFluids(safeFluidOf('susy:reformed_syngas', 9000))
    .notConsumable('5x #forge:dusts/molecular_sieve')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 8000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .duration(160)
    .EUt(120)

  event.recipes.susy.pressure_swing_adsorption('ciuenq2ydpbv6b') // remapped from original line 2179
    .inputFluids(safeFluidOf('susy:syngas', 7000))
    .notConsumable('5x #forge:dusts/molecular_sieve')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 6000))
    .outputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .duration(160)
    .EUt(120)

  event.recipes.susy.reaction_furnace('mfcqpidvcrdedv') // remapped from original line 2190
    .inputFluids(safeFluidOf('susy:hot_hp_air', 1500))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 3000))
    .notConsumable('1x #forge:dusts/wustite_catalyst')
    .outputFluids(safeFluidOf('susy:ammonia_rich_gas', 4000))
    .duration(160)
    .EUt(voltAmps[2])

  event.recipes.susy.reaction_furnace('m6rtzyhyluj7fx') // remapped from original line 2199
    .inputFluids(safeFluidOf('susy:hot_hp_nitrogen', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 3000))
    .notConsumable('1x #forge:dusts/wustite_catalyst')
    .outputFluids(safeFluidOf('susy:ammonia_rich_gas', 4000))
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.susy.reaction_furnace('loq9xjltsckgsx') // remapped from original line 2208
    .inputFluids(safeFluidOf('susy:ammonia_reaction_mix', 4000))
    .notConsumable('1x #forge:dusts/wustite_catalyst')
    .outputFluids(safeFluidOf('susy:ammonia_rich_gas', 4000))
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.gtceu.mixer('qaibxmhr7rfvzp') // remapped from original line 2216
    .inputFluids(safeFluidOf('susy:ammonia_rich_gas', 4000))
    .inputFluids(safeFluidOf('minecraft:water', 500))
    .outputFluids(safeFluidOf('susy:ammonia_solution', 500))
    .outputFluids(safeFluidOf('susy:ammonia_reaction_mix', 2000))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('2pbjtttpizeoid') // remapped from original line 2225
    .inputFluids(safeFluidOf('susy:syngas', 1000))
    .itemInputs('5x #forge:dusts/iron_iii_oxide')
    .itemOutputs('5x #forge:dusts/wustite_catalyst')
    .duration(400)
    .EUt(voltAmps[2])

  event.recipes.gtceu.distillation_tower('olmhasw4r0e8kn') // remapped from original line 2233
    .inputFluids(safeFluidOf('susy:ammonia_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .duration(150)
    .EUt(30)

  // Contains GTFO resources
  //event.recipes.susy.fixed_bed_reactor('awjyjqar51mtbi') // remapped from original line 2243
    //.inputFluids(safeFluidOf('susy:gtfo_acetaldehyde', 50))
    //.inputFluids(safeFluidOf('gtceu:ethanol', 50))
    //.notConsumable('1x #forge:catalysts/bed_tantalum')
    //.outputFluids(safeFluidOf('gtceu:butadiene', 50))
    //.outputFluids(safeFluidOf('minecraft:water', 100))
    //.duration(5)
    //.EUt(voltAmps[1])

  event.recipes.gtceu.chemical_bath('kvwziqe90kdbvz') // remapped from original line 2255
    .inputFluids(safeFluidOf('gtceu:phosphoric_acid', 500))
    .itemInputs('1x #forge:dusts/silica_gel')
    .itemOutputs('1x #forge:dusts/phosphoric_acid_silica_gel')
    .duration(80)
    .EUt(30)

  event.recipes.susy.fluidized_bed_reactor('jdpszjqocmda4x') // remapped from original line 2263
    .inputFluids(safeFluidOf('gtceu:ethylene', 50))
    .inputFluids(safeFluidOf('susy:dense_steam', 50))
    .notConsumable('1x #forge:dusts/phosphoric_acid_silica_gel')
    .outputFluids(safeFluidOf('gtceu:ethanol', 50))
    .duration(5)
    .EUt(voltAmps[3])

  event.recipes.susy.roaster('pcwtecbmizv4sb') // remapped from original line 2274
    .inputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .itemInputs('1x #forge:dusts/any_purity_palladium')
    .itemOutputs('3x #forge:dusts/palladium_chloride')
    .duration(280)
    .EUt(voltAmps[2])

  event.recipes.susy.roaster('dhxobqf3nizlb1') // remapped from original line 2282
    .inputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .itemInputs('1x #forge:dusts/any_purity_copper')
    .itemOutputs('3x #forge:dusts/copper_ii_chloride')
    .duration(280)
    .EUt(voltAmps[2])

  event.recipes.gtceu.mixer('ynmzia33lwbw44') // remapped from original line 2290
    .itemInputs('3x #forge:dusts/palladium_chloride')
    .itemInputs('3x #forge:dusts/copper_ii_chloride')
    .itemOutputs('1x #forge:dusts/wacker_catalyst')
    .duration(160)
    .EUt(voltAmps[2])

  event.recipes.gtceu.mixer('zt5kmpxscue90e') // remapped from original line 2298
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('6x #forge:dusts/wacker_catalyst')
    .outputFluids(safeFluidOf('susy:wacker_catalyst_solution', 1000))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.continuous_stirred_tank_reactor('lhzikuhek4gm5l') // remapped from original line 2307
    .inputFluids(safeFluidOf('susy:wacker_catalyst_solution', 50))
    .inputFluids(safeFluidOf('gtceu:ethylene', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 50))
    .outputFluids(safeFluidOf('susy:impure_acetaldehyde', 50))
    .duration(5)
    .EUt(voltAmps[2])

  // Contains GTFO resources
  //event.recipes.gtceu.distillery('wtgpk1enloggto') // remapped from original line 2316
    //.inputFluids(safeFluidOf('susy:impure_acetaldehyde', 1000))
    //.outputFluids(safeFluidOf('susy:gtfo_acetaldehyde', 900))
    //.itemOutputs('6x #forge:dusts/wacker_catalyst')
    //.duration(400)
    //.EUt(voltAmps[1])

  event.recipes.susy.continuous_stirred_tank_reactor('j0omotprhzsyux') // remapped from original line 2326
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 50))
    .inputFluids(safeFluidOf('gtceu:dimethylamine', 50))
    .outputFluids(safeFluidOf('susy:dimethylformamide', 50))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.susy.continuous_stirred_tank_reactor('utn1mjiwzlhc5p') // remapped from original line 2336
    .inputFluids(safeFluidOf('susy:hot_hp_propene', 50))
    .inputFluids(safeFluidOf('susy:hot_hp_benzene', 50))
    .inputFluids(safeFluidOf('gtceu:phosphoric_acid', 50))
    .outputFluids(safeFluidOf('susy:acidic_cumene', 100))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.susy.continuous_stirred_tank_reactor('pxgmbw94x43jcn') // remapped from original line 2345
    .inputFluids(safeFluidOf('gtceu:oxygen', 50))
    .inputFluids(safeFluidOf('susy:acidic_cumene', 100))
    .outputFluids(safeFluidOf('susy:rearranged_cumene', 150))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillation_tower('fpuuzefyalnry3') // remapped from original line 2353
    .inputFluids(safeFluidOf('susy:rearranged_cumene', 150))
    .outputFluids(safeFluidOf('gtceu:phosphoric_acid', 50))
    .outputFluids(safeFluidOf('gtceu:phenol', 50))
    .outputFluids(safeFluidOf('gtceu:acetone', 50))
    .disableDistilleryRecipes(true)
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.susy.reaction_furnace('rqsutenarljlox') // remapped from original line 2365
    .inputFluids(safeFluidOf('gtceu:nitrogen', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .outputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 1000))
    .duration(60)
    .EUt(voltAmps[2])

  event.recipes.susy.continuous_stirred_tank_reactor('7816ivudfgp064') // remapped from original line 2375
    .inputFluids(safeFluidOf('gtceu:butane', 50))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:alkylated_butane', 100))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillation_tower('kjoyisrzjkbd39') // remapped from original line 2383
    .inputFluids(safeFluidOf('susy:alkylated_butane', 100))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:isobutane', 50))
    .duration(300)
    .EUt(voltAmps[1] * 2)

  event.recipes.susy.fixed_bed_reactor('kqw36dqtnuxnr5') // remapped from original line 2391
    .inputFluids(safeFluidOf('susy:isobutane', 50))
    .notConsumable('1x #forge:catalysts/bed_chromium_trioxide')
    .outputFluids(safeFluidOf('susy:isobutylene', 50))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 100))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.gtceu.mixer('fsn5zqlmm0se6s') // remapped from original line 2402
    .inputFluids(safeFluidOf('gtceu:aluminium', 144))
    .itemInputs('1x #forge:dusts/any_purity_nickel')
    .itemInputs('1x #forge:dusts/tiny_zinc')
    .itemOutputs('2x #forge:dusts/raney_nickel')
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('fwhgu3ph1aqaex') // remapped from original line 2411
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemInputs('11x #forge:dusts/sodium_dichromate')
    .itemOutputs('8x #forge:dusts/chromium_trioxide')
    .outputFluids(safeFluidOf('susy:sodium_sulfate_solution', 1000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillery('dkkmfubdy0uink') // remapped from original line 2420
    .inputFluids(safeFluidOf('susy:sodium_sulfate_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('7x #forge:dusts/sodium_sulfate')
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('grc7t9k4tetd4j') // remapped from original line 2428
    .itemInputs('4x #forge:dusts/raney_nickel')
    .itemInputs('6x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('minecraft:water', 6000))
    .itemOutputs('2x #forge:dusts/activated_raney_nickel')
    .itemOutputs('20x #forge:dusts/sodium_aluminate')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 6000))
    .duration(240)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('ozkudctd4tg6zh') // remapped from original line 2439
    .circuit(1)
    .itemInputs('1x #forge:dusts/any_purity_copper')
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemOutputs('2x #forge:dusts/cupric_oxide')
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('bnprgmdgue75xb') // remapped from original line 2448
    .circuit(2)
    .itemInputs('2x #forge:dusts/any_purity_copper')
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemOutputs('3x #forge:dusts/cuprous_oxide')
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('smsmkpwrrll4av') // remapped from original line 2459
    .itemInputs('2x #forge:dusts/any_purity_cobalt')
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 8000))
    .itemOutputs('18x #forge:dusts/dicobalt_octacarbonyl')
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.gtceu.alloy_smelter('kh37kmgnsbfpzj') // remapped from original line 2469
    .itemInputs('3x #forge:dusts/silica_gel')
    .itemInputs('5x #forge:dusts/alumina')
    .itemOutputs('8x #forge:dusts/impregnated_alumina_catalyst')
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.gtceu.mixer('zpoedzdgtzhxh6') // remapped from original line 2479
    .itemInputs('1x #forge:dusts/any_purity_bismuth')
    .itemInputs('1x #forge:dusts/any_purity_copper')
    .itemOutputs('2x #forge:dusts/bismuth_copper')
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('euehuagco4s1cu') // remapped from original line 2489
    .itemInputs('13x #forge:dusts/phthalic_anhydride')
    .inputFluids(safeFluidOf('gtceu:ethylbenzene', 1000))
    .outputFluids(safeFluidOf('susy:two_ethylanthraquinone', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.fixed_bed_reactor('dfac548b1fgj2i') // remapped from original line 2500
    .inputFluids(safeFluidOf('susy:two_ethylanthraquinone', 50))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 100))
    .notConsumable('1x #forge:catalysts/bed_palladium')
    .outputFluids(safeFluidOf('susy:two_ethylanthrahydroquinone', 50))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.bubble_column_reactor('tto6am19x6thdl') // remapped from original line 2511
    .inputFluids(safeFluidOf('susy:two_ethylanthrahydroquinone', 50))
    .inputFluids(safeFluidOf('susy:hot_hp_oxygen', 100))
    .outputFluids(safeFluidOf('susy:two_ethylanthraquinone_solution', 200))
    .duration(100) 
    .EUt(voltAmps[1])

  event.recipes.susy.continuous_stirred_tank_reactor('xljtxbu9nptvki') // remapped from original line 2519
    .inputFluids(safeFluidOf('susy:two_ethylanthraquinone_solution', 200))
    .inputFluids(safeFluidOf('minecraft:water', 150))
    .outputFluids(safeFluidOf('susy:two_ethylanthraquinone', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_peroxide_solution', 300))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.susy.vacuum_distillation('w8kucrofrw0akn') // remapped from original line 2528
    .inputFluids(safeFluidOf('susy:hydrogen_peroxide_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:hydrogen_peroxide', 1000))
    .duration(40)
    .EUt(voltAmps[2])

  event.recipes.susy.fixed_bed_reactor('g431jx9ijukhwg') // remapped from original line 2538
    .inputFluids(safeFluidOf('susy:two_butanol', 50))
    .notConsumable('1x #forge:catalysts/bed_chromium_trioxide')
    .outputFluids(safeFluidOf('susy:butanone', 50))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 100))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.trickle_bed_reactor('qsbxjf2eqjbx3v') // remapped from original line 2549
    .inputFluids(safeFluidOf('gtceu:benzene', 50))
    .inputFluids(safeFluidOf('gtceu:bromine', 50))
    .notConsumable('1x #forge:dusts/aluminium_chloride')
    .outputFluids(safeFluidOf('susy:bromobenzene', 50))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 50))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.gtceu.alloy_smelter('cyjsadfdz7kmz9') // remapped from original line 2561
    .itemInputs('3x #forge:dusts/silica_gel')
    .itemInputs('4x #forge:dusts/chromium_trioxide')
    .itemOutputs('7x #forge:dusts/philips_catalyst')
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('vtsn5pxcbwacj0') // remapped from original line 2571
    .itemInputs('1x #forge:dusts/any_purity_aluminium')
    .inputFluids(safeFluidOf('gtceu:chlorine', 3000))
    .itemOutputs('4x #forge:dusts/aluminium_chloride')
    .duration(100) 
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('mwi3pw1t64gsca') // remapped from original line 2579
    .itemInputs('2x #forge:dusts/any_purity_aluminium')
    .inputFluids(safeFluidOf('gtceu:hydrogen', 6000))
    .inputFluids(safeFluidOf('gtceu:ethylene', 6000))
    .outputFluids(safeFluidOf('susy:triethylaluminium', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.mixer('bjyftkrtkopsda') // remapped from original line 2588
    .inputFluids(safeFluidOf('susy:triethylaluminium', 1000))
    .inputFluids(safeFluidOf('gtceu:titanium_tetrachloride', 1000))
    .itemOutputs('10x #forge:dusts/ziegler_natta_catalyst')
    .duration(160)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('wc8vfd5ea6uimd') // remapped from original line 2598
    .itemInputs('4x #forge:dusts/durene')
    .inputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .itemOutputs('3x #forge:dusts/pyromellitic_dianhydride')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.polymerization_tank('mcymsfhrmgrrqw') // remapped from original line 2609
    .itemInputs('1x #forge:dusts/pyromellitic_dianhydride')
    .itemInputs('1x #forge:dusts/four_four_oxydianiline')
    .inputFluids(safeFluidOf('gtceu:acetone', 2000))
    .outputFluids(safeFluidOf('susy:impure_kapton_k', 2000))
    .duration(400) 
    .EUt(voltAmps[3] * 2)

  event.recipes.gtceu.distillery('5jmikbshjz3ooo') // remapped from original line 2618
    .inputFluids(safeFluidOf('susy:impure_kapton_k', 1000))
    .outputFluids(safeFluidOf('gtceu:acetone', 1000))
    .itemOutputs('1x #forge:dusts/kapton_k')
    .duration(200)
    .EUt(voltAmps[2])

  event.recipes.gtceu.mixer('zh7pfrx3rfrftk') // remapped from original line 2628
    .itemInputs('1x #forge:dusts/four_four_oxydianiline')
    .itemInputs('1x #forge:dusts/biphenyl_tetracarboxylic_acid_dianhydride')
    .itemInputs('1x #forge:dusts/para_phenylenediamine')
    .inputFluids(safeFluidOf('gtceu:acetone', 4000))
    .outputFluids(safeFluidOf('susy:kapton_e_preparation', 4000))
    .duration(800)
    .EUt(voltAmps[1])

  event.recipes.susy.polymerization_tank('mtdhj5bdknyhzm') // remapped from original line 2639
    .inputFluids(safeFluidOf('susy:kapton_e_preparation', 1000))
    .outputFluids(safeFluidOf('susy:impure_kapton_e', 1000))
    .duration(200)
    .EUt(voltAmps[2] * 2)

  event.recipes.susy.dryer('8k5vv8qdhzspkl') // remapped from original line 2646
    .inputFluids(safeFluidOf('susy:impure_kapton_e', 1000))
    .outputFluids(safeFluidOf('gtceu:acetone', 1000))
    .itemOutputs('1x #forge:dusts/kapton_e')
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('gpohzx61u0pkbb') // remapped from original line 2656
    .inputFluids(safeFluidOf('gtceu:methanol', 6000))
    .inputFluids(safeFluidOf('gtceu:bromine', 3000))
    .itemInputs('1x #forge:dusts/any_purity_sulfur')
    .outputFluids(safeFluidOf('susy:bromomethane', 6000))
    .outputFluids(safeFluidOf('susy:very_diluted_sulfuric_acid', 3000))
    .duration(60) 
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillation_tower('kovffmixgokfrz') // remapped from original line 2666
    .inputFluids(safeFluidOf('susy:very_diluted_sulfuric_acid', 3000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .duration(60)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillation_tower('hekfnnbtc6fnpe') // remapped from original line 2675
    .inputFluids(safeFluidOf('gtceu:butene', 1000))
    .outputFluids(safeFluidOf('susy:isobutylene', 500))
    .outputFluids(safeFluidOf('susy:one_butene', 300))
    .outputFluids(safeFluidOf('susy:two_butene', 200))
    .duration(300)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('o0x2g5kyjmfupg') // remapped from original line 2684
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .inputFluids(safeFluidOf('susy:two_butene', 50))
    .inputFluids(safeFluidOf('minecraft:water', 50))
    .outputFluids(safeFluidOf('susy:two_butanol_solution', 100))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('mobunnzbqpwazl') // remapped from original line 2693
    .inputFluids(safeFluidOf('susy:two_butanol_solution', 2000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('susy:two_butanol', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('siovmzwkiu25j4') // remapped from original line 2701
    .inputFluids(safeFluidOf('susy:ammonia_solution', 50))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 50))
    .outputFluids(safeFluidOf('susy:ammonium_acetate_solution', 50))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.distillery('urszbjh0cnvznh') // remapped from original line 2709
    .inputFluids(safeFluidOf('susy:ammonium_acetate_solution', 1000))
    .itemOutputs('9x #forge:dusts/acetamide')
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.mixer('szn29fu7mdxwum') // remapped from original line 2717
    .itemInputs('18x #forge:dusts/acetamide')
    .inputFluids(safeFluidOf('susy:butanone', 1000))
    .outputFluids(safeFluidOf('susy:acetamide_solution', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('klgt1vunfhe4nz') // remapped from original line 2725
    .inputFluids(safeFluidOf('susy:acetamide_solution', 50))
    .inputFluids(safeFluidOf('susy:hydrogen_peroxide', 50))
    .inputFluids(safeFluidOf('gtceu:ammonia', 200))
    .outputFluids(safeFluidOf('susy:hydrazine_solution', 250))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('62xcsj4cvksgks') // remapped from original line 2734
    .inputFluids(safeFluidOf('susy:hydrazine_solution', 5000))
    .outputFluids(safeFluidOf('gtceu:hydrazine', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 4000))
    .outputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.batch_reactor('uxq0mx2258wjlr') // remapped from original line 2745
    .inputFluids(safeFluidOf('susy:dichloroethane', 1525))
    .inputFluids(safeFluidOf('gtceu:ammonia', 2425))
    .outputFluids(safeFluidOf('susy:aminated_ethylene_mixture', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.batch_reactor('jw8z5sjosybzpr') // remapped from original line 2753
    .inputFluids(safeFluidOf('susy:aminated_ethylene_mixture', 1000))
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 3050))
    .outputFluids(safeFluidOf('susy:neutralized_aminated_ethylene_mixture', 4050))
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('plj4vpq1q11rkt') // remapped from original line 2761
    .inputFluids(safeFluidOf('susy:neutralized_aminated_ethylene_mixture', 4050))
    .itemOutputs('6x #forge:dusts/salt')
    .outputFluids(safeFluidOf('susy:piperazine', 50))
    .outputFluids(safeFluidOf('susy:triethylenetetramine', 100))
    .outputFluids(safeFluidOf('susy:aminoethylpiperazine', 50))
    .outputFluids(safeFluidOf('susy:diethylenetriamine', 300))
    .outputFluids(safeFluidOf('susy:ethylenediamine', 500))
    .duration(300)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('s1fbyouz5jzjuz') // remapped from original line 2774
    .inputFluids(safeFluidOf('gtceu:chlorine', 50))
    .inputFluids(safeFluidOf('gtceu:nitric_oxide', 50))
    .outputFluids(safeFluidOf('gtceu:nitrosyl_chloride', 50))
    .duration(10)
    .EUt(30)

  event.recipes.susy.roaster('visstlk6ljrwq1') // remapped from original line 2782
    .itemInputs('1x #forge:dusts/any_purity_sulfur')
    .inputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .outputFluids(safeFluidOf('susy:sulfur_dichloride', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('8qy5tvlpjiigt0') // remapped from original line 2791
    .inputFluids(safeFluidOf('gtceu:sulfur_trioxide', 50))
    .inputFluids(safeFluidOf('susy:sulfur_dichloride', 50))
    .outputFluids(safeFluidOf('susy:thionyl_chloride', 50))
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 50))
    .duration(20)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('oxiaksr5ekt5gy') // remapped from original line 2800
    .inputFluids(safeFluidOf('susy:thionyl_chloride', 50))
    .inputFluids(safeFluidOf('minecraft:water', 150))
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 50))
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 100))
    .duration(10)
    .EUt(30)

  event.recipes.susy.batch_reactor('fetal2itzuoyws') // remapped from original line 2810
    .itemInputs('12x #forge:dusts/lithium_hydride')
    .inputFluids(safeFluidOf('susy:boron_trifluoride', 8000))
    .itemOutputs('36x #forge:dusts/lithium_tetrafluoroborate')
    .outputFluids(safeFluidOf('susy:diborane', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.roaster('dkol2hbltu1gka') // remapped from original line 2819
    .itemInputs('6x #forge:dusts/lithium_tetrafluoroborate')
    .itemOutputs('2x #forge:dusts/lithium_fluoride')
    .outputFluids(safeFluidOf('susy:boron_trifluoride', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.roaster('b1kilb9qy7eyss') // remapped from original line 2828
    .itemInputs('1x #forge:dusts/any_purity_lithium')
    .inputFluids(safeFluidOf('gtceu:hydrogen', 1000))
    .itemOutputs('2x #forge:dusts/lithium_hydride')
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('pu6jfi35gsd5zi') // remapped from original line 2837
    .itemInputs('6x #forge:dusts/tetramethylammonium_chloride')
    .itemInputs('3x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('gtceu:methanol', 1000))
    .outputFluids(safeFluidOf('susy:tetramethylammonium_hydroxide_solution', 1000))
    .itemOutputs('2x #forge:dusts/salt')
    .duration(300)
    .EUt(30)

  event.recipes.susy.batch_reactor('sn0ffq2zuk6ri2') // remapped from original line 2848
    .inputFluids(safeFluidOf('gtceu:phenol', 1000))
    .inputFluids(safeFluidOf('susy:hydrogen_peroxide', 1000))
    .itemOutputs('12x #forge:dusts/pyrocatechol')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.large_chemical_reactor('qimgl5n0gtkfzh') // remapped from original line 2858
    .inputFluids(safeFluidOf('susy:trimethylamine', 1000))
    .inputFluids(safeFluidOf('gtceu:chloromethane', 1000))
    .inputFluids(safeFluidOf('gtceu:ethanol', 4000))
    .itemOutputs('6x #forge:dusts/tetramethylammonium_chloride')
    .duration(200)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('iky8xpgvd35yn7') // remapped from original line 2868
    .inputFluids(safeFluidOf('susy:para_xylene', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 300))
    .outputFluids(safeFluidOf('susy:bistrichloromethylbenzene', 50))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 300))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.electrolyzer('kbckvksqi94pzj') // remapped from original line 2878
    .notConsumable('1x #forge:rods/platinum')
    .notConsumable(safeItemId('1x susy:graphite_electrode'))
    .inputFluids(safeFluidOf('susy:ammonium_bisulfate', 1584))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('pcaqjb6bfcbnzi') // remapped from original line 2890
    .inputFluids(safeFluidOf('gtceu:toluene', 50))
    .inputFluids(safeFluidOf('susy:oleum', 550))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 50))
    .outputFluids(safeFluidOf('susy:tosylic_acid_solution', 50))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 500))
    .duration(20)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('tqha8ckfqylotw') // remapped from original line 2900
    .inputFluids(safeFluidOf('susy:trichlorosilane', 50))
    .inputFluids(safeFluidOf('gtceu:toluene', 300))
    .outputFluids(safeFluidOf('susy:trichlorosilane_solution', 350))
    .duration(10)
    .EUt(30)

  event.recipes.susy.batch_reactor('jgbcryassnps88') // remapped from original line 2908
    .notConsumable(safeFluidOf('susy:tosylic_acid_solution', 3500))
    .inputFluids(safeFluidOf('susy:trichlorosilane_solution', 3500))
    .outputFluids(safeFluidOf('susy:acidic_hydrogen_silsesquioxane_solution', 3000))
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('2i8bvapf6xtvtw') // remapped from original line 2916
    .inputFluids(safeFluidOf('susy:acidic_hydrogen_silsesquioxane_solution', 3000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 100))
    .outputFluids(safeFluidOf('susy:hydrogen_silsesquioxane_solution', 3050))
    .outputFluids(safeFluidOf('susy:acidic_wastewater', 50))
    .duration(100)
    .EUt(30)

  event.recipes.susy.vacuum_distillation('hvsqnt70819chm') // remapped from original line 2925
    .inputFluids(safeFluidOf('susy:hydrogen_silsesquioxane_solution', 3050))
    .chancedOutput('1x #forge:dusts/hydrogen_silsesquioxane', 625, 0)
    .outputFluids(safeFluidOf('minecraft:water', 50))
    .outputFluids(safeFluidOf('gtceu:toluene', 3000))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.mixer('cqsn4ronhn2gfq') // remapped from original line 2944
    .itemInputs('1x #forge:dusts/tiny_hydrogen_silsesquioxane')
    .inputFluids(safeFluidOf('susy:methyl_isobutyl_ketone', 11000))
    .outputFluids(safeFluidOf('susy:hydrogen_silsesquioxane_photoresist', 11000))
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('4qlod7ickxevgt') // remapped from original line 2954
    .inputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 3000))
    .itemInputs('4x #forge:dusts/any_purity_phosphorus')
    .outputFluids(safeFluidOf('susy:phosphine', 1000))
    .itemOutputs('18x #forge:dusts/potassium_hypophosphite')
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('q6d8obdw8gujus') // remapped from original line 2963
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 3000))
    .itemInputs('4x #forge:dusts/any_purity_phosphorus')
    .outputFluids(safeFluidOf('susy:phosphine', 1000))
    .itemOutputs('18x #forge:dusts/sodium_hypophosphite')
    .duration(200)
    .EUt(30)

  event.recipes.susy.roaster('ztboqwmnsd5tpf') // remapped from original line 2972
    .itemInputs('12x #forge:dusts/sodium_hypophosphite')
    .outputFluids(safeFluidOf('susy:phosphine', 1000))
    .itemOutputs('8x #forge:dusts/disodium_phosphate')
    .duration(200)
    .EUt(30)

  event.recipes.susy.roaster('mguc2jmegmxvgx') // remapped from original line 2980
    .itemInputs('12x #forge:dusts/potassium_hypophosphite')
    .outputFluids(safeFluidOf('susy:phosphine', 1000))
    .itemOutputs('8x #forge:dusts/dipotassium_phosphate')
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('v4fgtwvwa2vrrn') // remapped from original line 2990
    .itemInputs('5x #forge:dusts/boron_trioxide')
    .inputFluids(safeFluidOf('susy:hydrogen_fluoride', 6000))
    .outputFluids(safeFluidOf('susy:boron_trifluoride', 2000))
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('tfb39jsobugxgu') // remapped from original line 2999
    .itemInputs('7x #forge:dusts/boric_acid')
    .inputFluids(safeFluidOf('susy:hydrogen_fluoride', 3000))
    .outputFluids(safeFluidOf('susy:boron_trifluoride', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.large_chemical_reactor('dcweqx1vkevs7d') // remapped from original line 3009
    .itemInputs('12x #forge:dusts/sodium_cyanide')
    .inputFluids(safeFluidOf('susy:ethylenediamine', 1000))
    .inputFluids(safeFluidOf('susy:formaldehyde', 4000))
    .inputFluids(safeFluidOf('gtceu:diluted_hydrochloric_acid', 8000))
    .itemOutputs('32x #forge:dusts/ethylenediaminetetraacetic_acid')
    .outputFluids(safeFluidOf('gtceu:ammonia', 4000))
    .outputFluids(safeFluidOf('susy:wastewater', 4000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.batch_reactor('ioh5ofljqltziw') // remapped from original line 3021
    .itemInputs('36x #forge:dusts/ethylenediaminetetraacetic_acid')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 4000))
    .outputFluids(safeFluidOf('susy:tetrasodium_ethylenediaminetetraacetate_solution', 4000))
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.distillery('vuimukycwp5sfx') // remapped from original line 3029
    .inputFluids(safeFluidOf('susy:tetrasodium_ethylenediaminetetraacetate_solution', 4000))
    .outputFluids(safeFluidOf('susy:diluted_saltwater', 8000))
    .itemOutputs('36x #forge:dusts/tetrasodium_ethylenediaminetetraacetate')
    .duration(300)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('jz11fw5yzekipt') // remapped from original line 3038
    .inputFluids(safeFluidOf('susy:phosphorus_trichloride', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 50))
    .outputFluids(safeFluidOf('susy:phosphoryl_chloride', 50))
    .duration(10)
    .EUt(30)

  event.recipes.susy.roaster('n1ele1werpxjf8') // remapped from original line 3047
    .itemInputs('4x #forge:dusts/any_purity_phosphorus')
    .inputFluids(safeFluidOf('gtceu:chlorine', 12000))
    .outputFluids(safeFluidOf('susy:phosphorus_trichloride', 2000))
    .itemOutputs('12x #forge:dusts/phosphorus_pentachloride')
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.mixer('wkdq2uwbx84v5c') // remapped from original line 3056
    .inputFluids(safeFluidOf('susy:phosphorus_trichloride', 1000))
    .itemInputs('4x #forge:dusts/any_purity_phosphorus')
    .outputFluids(safeFluidOf('susy:phosphorus_solution', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('lyx1aviung6skf') // remapped from original line 3064
    .inputFluids(safeFluidOf('susy:phosphorus_solution', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 600))
    .outputFluids(safeFluidOf('susy:phosphorus_trichloride', 250))
    .duration(10)
    .EUt(30)

  event.recipes.susy.batch_reactor('pcjvccld4hbhqj') // remapped from original line 3072
    .inputFluids(safeFluidOf('susy:phosphorus_trichloride', 1000))
    .inputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .itemOutputs('6x #forge:dusts/phosphorus_pentachloride')
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('kk7abbztxex9i2') // remapped from original line 3081
    .inputFluids(safeFluidOf('susy:para_xylene', 1000))
    .inputFluids(safeFluidOf('gtceu:chloromethane', 2000))
    .itemOutputs('24x #forge:dusts/durene')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 2000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('fthax3b7bywfx9') // remapped from original line 3093
    .inputFluids(safeFluidOf('gtceu:ammonia', 100))
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 50))
    .outputFluids(safeFluidOf('susy:urea_solution', 50))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.distillery('gcoyf9krufiodh') // remapped from original line 3101
    .inputFluids(safeFluidOf('susy:urea_solution', 1000))
    .itemOutputs('8x #forge:dusts/urea')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.distillery('cque7c5ekiflty') // remapped from original line 3110
    .inputFluids(safeFluidOf('susy:sodium_nitrate_solution', 1000))
    .itemOutputs('5x #forge:dusts/sodium_nitrate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(140)
    .EUt(30)

  event.recipes.susy.roaster('nopaqv0ohmps13') // remapped from original line 3118
    .itemInputs('5x #forge:dusts/sodium_nitrate')
    .itemOutputs('4x #forge:dusts/sodium_nitrite')
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .duration(400)
    .EUt(30)

  event.recipes.susy.batch_reactor('aetmbjzo4t1uf2') // remapped from original line 3126
    .inputFluids(safeFluidOf('susy:sodium_nitrate', 720))
    .inputFluids(safeFluidOf('gtceu:lead', 144))
    .outputFluids(safeFluidOf('susy:sodium_nitrite', 576))
    .itemOutputs('2x #forge:dusts/lead_oxide')
    .duration(20)
    .EUt(30)

  event.recipes.susy.roaster('aonsgkbdwfmjfp') // remapped from original line 3135
    .itemInputs('8x #forge:dusts/sodium_nitrite')
    .itemOutputs('3x #forge:dusts/sodium_oxide')
    .outputFluids(safeFluidOf('gtceu:nitric_oxide', 1000))
    .outputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 1000))
    .duration(60)
    .EUt(30)

  event.recipes.susy.batch_reactor('bkfdl7hgdikcnb') // remapped from original line 3144
    .itemInputs('3x #forge:dusts/sodium_oxide')
    .inputFluids(safeFluidOf('minecraft:water', 3000))
    .outputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .duration(60)
    .EUt(30)

  event.recipes.gtceu.large_chemical_reactor('yyr4nyzawdmfpg') // remapped from original line 3152
    .itemInputs('5x #forge:dusts/sodium_nitrate')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .inputFluids(safeFluidOf('gtceu:phosphoric_acid', 1000))
    .inputFluids(safeFluidOf('susy:urea_solution', 1000))
    .itemInputs('16x #forge:dusts/para_phenylenediamine')
    .itemInputs('4x #forge:dusts/potassium_iodide')
    .outputFluids(safeFluidOf('susy:impure_diiodobenzene', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.centrifuge('t9g4t08yz6pxyn') // remapped from original line 3165
    .inputFluids(safeFluidOf('susy:impure_diiodobenzene', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('12x #forge:dusts/diiodobenzene')
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.mixer('n3vjcwrv6wwxj9') // remapped from original line 3175
    .itemInputs('12x #forge:dusts/diiodobenzene')
    .inputFluids(safeFluidOf('gtceu:ethanol', 1000))
    .outputFluids(safeFluidOf('susy:diiodobenzene_solution', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.fixed_bed_reactor('mqyqrenxi42r9w') // remapped from original line 3183
    .inputFluids(safeFluidOf('susy:diiodobenzene_solution', 50))
    .inputFluids(safeFluidOf('susy:ammonia_solution', 150))
    .outputFluids(safeFluidOf('susy:impure_four_four_oxydianiline', 200))
    .notConsumable('1x #forge:catalysts/bed_copper')
    .duration(300)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('ipuztoa5owjre4') // remapped from original line 3192
    .circuit(1)
    .inputFluids(safeFluidOf('minecraft:water', 50))
    .inputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('susy:ammonia_solution', 50))
    .duration(5)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('ibwt1dvrba5vfu') // remapped from original line 3201
    .circuit(2)
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .inputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('susy:diluted_ammonia_solution', 100))
    .duration(1)
    .EUt(30)

  event.recipes.gtceu.mixer('sidxafpgzosftm') // remapped from original line 3210
    .inputFluids(safeFluidOf('susy:ammonia_solution', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:diluted_ammonia_solution', 1000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy./*DISTILLATION_TOWER('4bhfridx5wa3tw') // remapped from original line 3219
    .disableDistilleryRecipes(true)
    .circuit(1)
    .inputFluids(safeFluidOf('susy:diluted_ammonia_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .outputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .duration(40)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('taboxjfjg2j9wz') // remapped from original line 3229
    .inputFluids(safeFluidOf('susy:diluted_ammonia_solution', 1000))
    .outputFluids(safeFluidOf('susy:ammonia_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(20)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('f4x3yuhdebiufz') // remapped from original line 3238
    .inputFluids(safeFluidOf('susy:impure_four_four_oxydianiline', 8000))
    .outputFluids(safeFluidOf('susy:four_four_oxydianiline_slurry', 5000))
    .outputFluids(safeFluidOf('gtceu:ethanol', 2000))
    .itemOutputs('24x #forge:dusts/ammonium_iodide')
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.centrifuge('qhx9qzf5gmx1ub') // remapped from original line 3247
    .inputFluids(safeFluidOf('susy:four_four_oxydianiline_slurry', 5000))
    .outputFluids(safeFluidOf('minecraft:water', 5000))
    .itemOutputs('27x #forge:dusts/four_four_oxydianiline')
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.electrolytic_cell('tvurpwc0kjeubn') // remapped from original line 3255
    .inputFluids(safeFluidOf('susy:ammonium_iodide', 1728))
    .outputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .itemOutputs('2x #forge:dusts/iodine')
    .duration(300)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('pdtbekmqtkb9rm') // remapped from original line 3265
    .inputFluids(safeFluidOf('susy:ethylene_oxide', 70))
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .outputFluids(safeFluidOf('susy:ethylene_glycol_mix', 100))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('dd4n1q2ktkve68') // remapped from original line 3273
    .inputFluids(safeFluidOf('susy:ethylene_glycol_mix', 1000))
    .outputFluids(safeFluidOf('susy:diethylene_glycol', 100))
    .outputFluids(safeFluidOf('susy:ethylene_glycol', 500))
    .outputFluids(safeFluidOf('minecraft:water', 400))
    .duration(200)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('wazui9iixe4ghe') // remapped from original line 3283
    .inputFluids(safeFluidOf('gtceu:bromine', 100))
    .inputFluids(safeFluidOf('gtceu:sulfur_dioxide', 50))
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .outputFluids(safeFluidOf('susy:brominated_sulfur_dioxide', 150))
    .EUt(30)
    .duration(15)

  event.recipes.gtceu.distillation_tower('jr1nuxg4btqjsi') // remapped from original line 3292
    .inputFluids(safeFluidOf('susy:brominated_sulfur_dioxide', 3000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('susy:hydrogen_bromide', 2000))
    .EUt(30)
    .duration(300)

  event.recipes.susy.bubble_column_reactor('aya9iwwfqoc85y') // remapped from original line 3300
    .inputFluids(safeFluidOf('susy:hydrogen_bromide', 50))
    .inputFluids(safeFluidOf('minecraft:water', 50))
    .outputFluids(safeFluidOf('susy:hydrobromic_acid', 50))
    .EUt(7)
    .duration(1)

  event.recipes.susy.batch_reactor('3tqnjq8fbmddrr') // remapped from original line 3308
    .itemInputs('3x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('susy:hydrogen_bromide', 1000))
    .outputFluids(safeFluidOf('susy:sodium_bromide_solution', 1000))
    .EUt(30)
    .duration(20)

  // Contains GTFO resources
  //event.recipes.susy.reaction_furnace('9lvwklcyyld7s6') // remapped from original line 3317
    //.inputFluids(safeFluidOf('gtceu:methane', 50))
    //.inputFluids(safeFluidOf('gtceu:ammonia', 50))
    //.inputFluids(safeFluidOf('gtceu:oxygen', 150))
    //.notConsumable('1x #forge:catalysts/bed_platinum')
    //.outputFluids(safeFluidOf('susy:gtfo_hydrogen_cyanide', 50))
    //.outputFluids(safeFluidOf('minecraft:water', 150))
    //.EUt(120)
    //.duration(10)

  event.recipes.susy.batch_reactor('yndvqqpqk0x3mm') // remapped from original line 3328
    .inputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .itemInputs('1x #forge:dusts/any_purity_sodium')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 1000))
    .itemOutputs('4x #forge:dusts/sodium_amide')
    .EUt(120)
    .duration(200)

  event.recipes.susy.roaster('coeii8t2xpwd6m') // remapped from original line 3337
    .itemInputs('1x #forge:dusts/any_purity_carbon')
    .itemInputs('4x #forge:dusts/sodium_amide')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .itemOutputs('3x #forge:dusts/sodium_cyanide')
    .EUt(120)
    .duration(200)

  // Contains GTFO resources
  //event.recipes.susy.batch_reactor('r0tklg8ykjfvfl') // remapped from original line 3346
    //.inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 1000))
    //.itemInputs('3x #forge:dusts/sodium_cyanide')
    //.outputFluids(safeFluidOf('susy:gtfo_hydrogen_cyanide', 1000))
    //.outputFluids(safeFluidOf('gtceu:salt_water', 1000))
    //.EUt(120)
    //.duration(200)

  event.recipes.susy.fixed_bed_reactor('i1sotks4oeov7f') // remapped from original line 3356
    .inputFluids(safeFluidOf('gtceu:ethylene', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 50))
    .notConsumable('1x #forge:catalysts/bed_silver')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 5))
    .outputFluids(safeFluidOf('susy:impure_ethylene_oxide', 45))
    .EUt(30)
    .duration(10)

  event.recipes.gtceu.distillation_tower('ukhiaxzsgcf1bq') // remapped from original line 3366
    .inputFluids(safeFluidOf('susy:impure_ethylene_oxide', 900))
    .outputFluids(safeFluidOf('minecraft:water', 100))
    .outputFluids(safeFluidOf('susy:ethylene_oxide', 800))
    .EUt(30)
    .duration(200)

  event.recipes.susy.tube_furnace('5lxrxldiak4jzn') // remapped from original line 3376
    .itemInputs('1x #forge:dusts/any_purity_aluminium')
    .inputFluids(safeFluidOf('gtceu:nitrogen', 1000))
    .notConsumable('6x #forge:dusts/ammonium_chloride')
    .itemOutputs('2x #forge:dusts/aluminium_nitride')
    .EUt(1920)
    .duration(20)

  event.recipes.susy.sintering_oven('gumbf0p5jcr9db') // remapped from original line 3385
    .itemInputs('10x #forge:dusts/aluminium_nitride')
    .itemInputs('45x #forge:dusts/alumina')
    .notConsumable(safeFluidOf('gtceu:argon', 1000))
    .itemOutputs('1x #forge:dusts/aluminium_oxynitride')
    .EUt(1920)
    .duration(20)

  event.recipes.susy.continuous_stirred_tank_reactor('kfq3mqfexlyuxm') // remapped from original line 3396
    .inputFluids(safeFluidOf('susy:butanediol', 50))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:tetrahydrofuran_solution', 150))
    .EUt(30)
    .duration(5)

  event.recipes.gtceu.distillation_tower('wwprzepxfr7f5i') // remapped from original line 3404
    .inputFluids(safeFluidOf('susy:tetrahydrofuran_solution', 3000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:tetrahydrofuran', 1000))
    .EUt(90)
    .duration(600)

  event.recipes.susy.batch_reactor('uxsmikkfopxrbg') // remapped from original line 3415
    .inputFluids(safeFluidOf('gtceu:sodium', 144))
    .inputFluids(safeFluidOf('susy:cyclopentadiene', 1000))
    .inputFluids(safeFluidOf('susy:tetrahydrofuran', 1000))
    .outputFluids(safeFluidOf('susy:sodium_cyclopentadienide_solution', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 1000))
    .EUt(1920)
    .duration(60)

  event.recipes.susy.batch_reactor('i76r35e9wjnuqj') // remapped from original line 3425
    .itemInputs('5x #forge:dusts/zirconium_tetrachloride')
    .inputFluids(safeFluidOf('susy:tetrahydrofuran', 2000))
    .itemOutputs('7x #forge:dusts/zirconium_tetrachloride_tetrahydrofuran_complex')
    .EUt(1920)
    .duration(60)

  event.recipes.susy.batch_reactor('evfjrgpoagxnoj') // remapped from original line 3433
    .itemInputs('7x #forge:dusts/zirconium_tetrachloride_tetrahydrofuran_complex')
    .inputFluids(safeFluidOf('susy:sodium_cyclopentadienide_solution', 2000))
    .itemOutputs('1x #forge:dusts/zirconocene_dichloride')
    .itemOutputs('4x #forge:dusts/salt')
    .outputFluids(safeFluidOf('susy:tetrahydrofuran', 4000))
    .EUt(1920)
    .duration(60)

  event.recipes.susy.batch_reactor('kyr8xokx4hvhyr') // remapped from original line 3443
    .itemInputs('1x #forge:dusts/any_purity_aluminium')
    .itemInputs('3x #forge:dusts/any_purity_sodium')
    .inputFluids(safeFluidOf('gtceu:chloromethane', 3000))
    .itemOutputs('6x #forge:dusts/salt')
    .outputFluids(safeFluidOf('susy:trimethylaluminium', 1000))
    .EUt(1920)
    .duration(60)

  event.recipes.susy.batch_reactor('8pkfxih6afuazx') // remapped from original line 3453
    .inputFluids(safeFluidOf('susy:trimethylaluminium', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('1x #forge:dusts/methylaluminoxane')
    .outputFluids(safeFluidOf('gtceu:methane', 2000))
    .EUt(1920)
    .duration(60)

  event.recipes.susy.batch_reactor('poimjjtupwc3eu') // remapped from original line 3462
    .itemInputs('6x #forge:dusts/zirconium_dioxide')
    .itemInputs('1x #forge:dusts/methylaluminoxane')
    .itemInputs('1x #forge:dusts/zirconocene_dichloride')
    .notConsumable(safeFluidOf('gtceu:toluene', 1000))
    .itemOutputs('1x #forge:dusts/kaminsky_catalyst')
    .EUt(1920)
    .duration(60)

  event.recipes.gtceu.distillation_tower('nbxdoskpxsi9kt') // remapped from original line 3474
    .inputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 500))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 250))
    .outputFluids(safeFluidOf('minecraft:water', 250))
    .EUt(30)
    .duration(50)

  event.recipes.gtceu.mixer('rbvhb3xrxva0l9') // remapped from original line 3482
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 2000))
    .EUt(30)
    .duration(120)

  event.recipes.susy.batch_reactor('holcbx2mja8abx') // remapped from original line 3493
    .itemInputs('14x #forge:dusts/phosphorus_pentoxide')
    .inputFluids(safeFluidOf('minecraft:water', 4000))
    .outputFluids(safeFluidOf('gtceu:phosphoric_acid', 4000))
    .EUt(30)
    .duration(40)

  event.recipes.susy.batch_reactor('wkpswvjlhb9wkp') // remapped from original line 3505
    .inputFluids(safeFluidOf('gtceu:phenol', 1000))
    .inputFluids(safeFluidOf('gtceu:nitration_mixture', 6000))
    .outputFluids(safeFluidOf('susy:tnp_slurry', 3000))
    .duration(200)
    .EUt(24)

  event.recipes.gtceu.distillery('iimeaiq003svw2') // remapped from original line 3513
    .inputFluids(safeFluidOf('susy:tnp_slurry', 1000))
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 1000))
    .itemOutputs('7x #forge:dusts/picric_acid')
    .duration(300)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('sny5s5l7hspyix') // remapped from original line 3523
    .inputFluids(safeFluidOf('susy:carbon_disulfide', 50))
    .inputFluids(safeFluidOf('susy:ammonia_solution', 50))
    .outputFluids(safeFluidOf('susy:ammonium_thiocyanate_solution', 50))
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 50))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillery('eyecgquo5mqe3q') // remapped from original line 3532
    .inputFluids(safeFluidOf('susy:ammonium_thiocyanate_solution', 1000))
    .itemOutputs('8x #forge:dusts/ammonium_thiocyanate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(60)
    .EUt(30)

  event.recipes.susy.trickle_bed_reactor('qp3qrom1re46yy') // remapped from original line 3541
    .notConsumable('1x #forge:dusts/aluminium_chloride')
    .circuit(1)
    .inputFluids(safeFluidOf('gtceu:benzene', 50))
    .inputFluids(safeFluidOf('gtceu:chloromethane', 50))
    .outputFluids(safeFluidOf('gtceu:toluene', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .duration(10)
    .EUt(30)

  event.recipes.susy.trickle_bed_reactor('bkfi87gdzpkiau') // remapped from original line 3553
    .notConsumable('1x #forge:dusts/aluminium_chloride')
    .circuit(2)
    .inputFluids(safeFluidOf('gtceu:benzene', 50))
    .inputFluids(safeFluidOf('gtceu:chloromethane', 100))
    .outputFluids(safeFluidOf('susy:ortho_para_xylene_mixture', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 100))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('qkhae9tkmiflli') // remapped from original line 3564
    .inputFluids(safeFluidOf('susy:ortho_para_xylene_mixture', 1000))
    .outputFluids(safeFluidOf('susy:para_xylene', 575))
    .outputFluids(safeFluidOf('susy:ortho_xylene', 375))
    .outputFluids(safeFluidOf('susy:meta_xylene', 50))
    .duration(100)
    .EUt(voltAmps[1] * 2)

  event.recipes.susy.trickle_bed_reactor('qhkssfntogchaa') // remapped from original line 3574
    .notConsumable('1x #forge:dusts/aluminium_chloride')
    .inputFluids(safeFluidOf('gtceu:toluene', 50))
    .inputFluids(safeFluidOf('gtceu:chloromethane', 50))
    .outputFluids(safeFluidOf('susy:ortho_para_xylene_mixture', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.cracker('4cbbbbjgyfek3b') // remapped from original line 3586
    .inputFluids(safeFluidOf('gtceu:toluene', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 4000))
    .outputFluids(safeFluidOf('susy:hydrodealkylated_toluene_mixture', 1000))
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.gtceu.distillation_tower('yq31zjecz7fckr') // remapped from original line 3594
    .inputFluids(safeFluidOf('susy:hydrodealkylated_toluene_mixture', 1000))
    .chancedOutput('1x #forge:dusts/biphenyl', 250, 0)
    .outputFluids(safeFluidOf('gtceu:toluene', 200))
    .outputFluids(safeFluidOf('gtceu:benzene', 750))
    .outputFluids(safeFluidOf('gtceu:methane', 750))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 2400))
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('5fb1ugt3aqbnfv') // remapped from original line 3605
    .notConsumable('1x #forge:dusts/iron_iii_chloride')
    .itemInputs('1x #forge:dusts/biphenyl')
    .inputFluids(safeFluidOf('gtceu:chlorine', 5000))
    .outputFluids(safeFluidOf('gtceu:polychlorinated_biphenyl', 1000))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 5000))
    .duration(15)
    .EUt(30)

  event.recipes.susy.fluidized_bed_reactor('gec7g6cyq7ig7q') // remapped from original line 3615
    .notConsumable('1x #forge:springs/nichrome')
    .inputFluids(safeFluidOf('gtceu:benzene', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 50))
    .chancedOutput('1x #forge:dusts/biphenyl', 500, 0)
    .outputFluids(safeFluidOf('gtceu:benzene', 900))
    .outputFluids(safeFluidOf('minecraft:water', 50))
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('uvacfoz7de87dn') // remapped from original line 3626
    .inputFluids(safeFluidOf('gtceu:sodium_hydroxide', 432))
    .inputFluids(safeFluidOf('gtceu:chlorobenzene', 1000))
    .itemOutputs('2x #forge:dusts/salt')
    .outputFluids(safeFluidOf('gtceu:phenol', 1000))
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('erwdblvof1r4gj') // remapped from original line 3635
    .inputFluids(safeFluidOf('susy:sodium_phenoxide_solution', 1000))
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .outputFluids(safeFluidOf('gtceu:phenol', 1000))
    .outputFluids(safeFluidOf('gtceu:salt_water', 1000))
    .duration(100)
    .EUt(30)

  event.recipes.susy.roaster('8fdihjbqvfepw6') // remapped from original line 3645
    .inputFluids(safeFluidOf('gtceu:phenol', 1000))
    .itemInputs('1x #forge:dusts/any_purity_zinc')
    .outputFluids(safeFluidOf('gtceu:benzene', 1000))
    .itemOutputs('2x #forge:dusts/zinc_oxide')
    .duration(120)
    .EUt(30)

  event.recipes.susy.batch_reactor('adgzcagan9bn8s') // remapped from original line 3655
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .itemInputs('1x #forge:dusts/zinc_oxide')
    .outputFluids(safeFluidOf('susy:diluted_zinc_chloride_solution', 2000))
    .duration(120)
    .EUt(30)

  event.recipes.gtceu.distillery('bqyvbkdai2nk5t') // remapped from original line 3663
    .inputFluids(safeFluidOf('susy:diluted_zinc_chloride_solution', 2000))
    .itemOutputs('3x #forge:dusts/zinc_chloride')
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.continuous_stirred_tank_reactor('p4h0exynsuxu50') // remapped from original line 3672
    .inputFluids(safeFluidOf('susy:triethylaluminium', 50))
    .inputFluids(safeFluidOf('gtceu:ethylene', 300))
    .inputFluids(safeFluidOf('susy:diethyl_ether', 50))
    .outputFluids(safeFluidOf('susy:alfol_trialkylaluminium_mixture', 50))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('ebvidovcc0ildu') // remapped from original line 3681
    .inputFluids(safeFluidOf('susy:alfol_trialkylaluminium_mixture', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 3000))
    .outputFluids(safeFluidOf('susy:aluminium_alkoxide_solution', 1000))
    .duration(500)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillery('xjyjuvt8lbsffb') // remapped from original line 3689
    .inputFluids(safeFluidOf('susy:aluminium_alkoxide_solution', 1000))
    .itemOutputs('1x #forge:dusts/aluminium_alkoxide_mixture')
    .outputFluids(safeFluidOf('susy:diethyl_ether', 1000))
    .duration(500)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('v4teb10jgugkrl') // remapped from original line 3697
    .itemInputs('1x #forge:dusts/aluminium_alkoxide_mixture')
    .inputFluids(safeFluidOf('minecraft:water', 3000))
    .itemOutputs('7x #forge:dusts/aluminium_hydroxide')
    .outputFluids(safeFluidOf('susy:ziegler_alfol_mixture', 3000))
    .duration(500)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillation_tower('apd9lakbuuylbg') // remapped from original line 3706
    .inputFluids(safeFluidOf('susy:ziegler_alfol_mixture', 1000))
    .outputFluids(safeFluidOf('susy:n_hexadecanol', 30))
    .outputFluids(safeFluidOf('susy:n_tetradecanol', 45))
    .outputFluids(safeFluidOf('susy:n_dodecanol', 60))
    .outputFluids(safeFluidOf('susy:n_decanol', 90))
    .outputFluids(safeFluidOf('susy:n_octanol', 115))
    .outputFluids(safeFluidOf('susy:n_hexanol', 150))
    .outputFluids(safeFluidOf('susy:n_butanol', 215))
    .outputFluids(safeFluidOf('gtceu:ethanol', 295))
    .duration(166)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('kpiyeltqk6cluh') // remapped from original line 3723
    .itemInputs('3x #forge:dusts/nickel_chloride')
    .itemInputs('2x #forge:dusts/triphenylphosphine')
    .notConsumable(safeFluidOf('gtceu:acetic_acid', 1000))
    .itemOutputs('1x #forge:dusts/dichlorobistriphenylphosphinenickel_ii')
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('nfmdrpndpwmywr') // remapped from original line 3732
    .itemInputs('1x #forge:dusts/any_purity_zinc')
    .itemInputs('1x #forge:dusts/dichlorobistriphenylphosphinenickel_ii')
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 2000))
    .notConsumable(safeFluidOf('susy:tetrahydrofuran', 1000))
    .itemOutputs('1x #forge:dusts/dicarbonylbistriphenylphosphinenickel_zero')
    .itemOutputs('3x #forge:dusts/zinc_chloride')
    .duration(200)
    .EUt(voltAmps[3])

  event.recipes.susy.trickle_bed_reactor('pe6bhfoxoa60no') // remapped from original line 3743
    .notConsumable('1x #forge:dusts/dicarbonylbistriphenylphosphinenickel_zero')
    .inputFluids(safeFluidOf('gtceu:butadiene', 100))
    .outputFluids(safeFluidOf('susy:cyclooctadiene', 50))
    .duration(10)
    .EUt(voltAmps[3])

  event.recipes.susy.continuous_stirred_tank_reactor('dyl58thz9heszy') // remapped from original line 3753
    .inputFluids(safeFluidOf('gtceu:ethanol', 150))
    .inputFluids(safeFluidOf('susy:phosphoryl_chloride', 50))
    .outputFluids(safeFluidOf('susy:acidic_triethyl_phosphate', 200))
    .duration(3)
    .EUt(120)

  event.recipes.susy.batch_reactor('ksehylhi7o41g9') // remapped from original line 3761
    .itemInputs('9x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('susy:acidic_triethyl_phosphate', 4000))
    .outputFluids(safeFluidOf('susy:triethyl_phosphate', 1000))
    .outputFluids(safeFluidOf('gtceu:salt_water', 3000))
    .duration(100)
    .EUt(120)

  event.recipes.susy.reaction_furnace('ipaz4tysnxq2w7') // remapped from original line 3770
    .notConsumable(safeFluidOf('gtceu:ammonia', 1000))
    .notConsumable(safeFluidOf('susy:triethyl_phosphate', 1000))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 1000))
    .outputFluids(safeFluidOf('gtceu:ethenone', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(40)
    .EUt(480)

  event.recipes.susy.continuous_stirred_tank_reactor('ckinfsdnwakegr') // remapped from original line 3782
    .inputFluids(safeFluidOf('gtceu:ethenone', 50))
    .inputFluids(safeFluidOf('gtceu:acetone', 50))
    .outputFluids(safeFluidOf('susy:isopropenyl_acetate', 50))
    .duration(20)
    .EUt(120)

  event.recipes.gtceu.pyrolyse_oven('5ezrxgtjdib2pv') // remapped from original line 3790
    .inputFluids(safeFluidOf('susy:isopropenyl_acetate', 1000))
    .outputFluids(safeFluidOf('susy:acetylacetone', 1000))
    .duration(400)
    .EUt(120)

  event.recipes.susy.batch_reactor('aizlf8asfhkoyg') // remapped from original line 3799
    .itemInputs('2x #forge:dusts/nickel_ii_oxide')
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 2000))
    .outputFluids(safeFluidOf('susy:nickel_nitrate_solution', 1000))
    .duration(20)
    .EUt(30)

  event.recipes.gtceu.distillery('m7gksyowdvlcl4') // remapped from original line 3807
    .inputFluids(safeFluidOf('susy:nickel_nitrate_solution', 1000))
    .itemOutputs('9x #forge:dusts/nickel_ii_nitrate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(20)
    .EUt(30)

  event.recipes.susy.batch_reactor('m6lppnx8bcdp5q') // remapped from original line 3815
    .itemInputs('9x #forge:dusts/nickel_ii_nitrate')
    .inputFluids(safeFluidOf('susy:acetylacetone', 2000))
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .outputFluids(safeFluidOf('susy:nickel_ii_bisacetylacetonate_solution', 2000))
    .duration(120)
    .EUt(30)

  event.recipes.susy.roaster('2oir327bvpuxdr') // remapped from original line 3824
    .inputFluids(safeFluidOf('susy:nickel_ii_bisacetylacetonate_solution', 2000))
    .itemOutputs('1x #forge:dusts/nickel_ii_bisacetylacetonate')
    .itemOutputs('10x #forge:dusts/sodium_nitrate')
    .outputFluids(safeFluidOf('susy:dense_steam', 2000))
    .duration(120)
    .EUt(480)

  event.recipes.susy.batch_reactor('plhp52jlwqtyba') // remapped from original line 3833
    .itemInputs('1x #forge:dusts/nickel_ii_bisacetylacetonate')
    .inputFluids(safeFluidOf('susy:cyclooctadiene', 2000))
    .inputFluids(safeFluidOf('susy:triethylaluminium', 2000))
    .itemOutputs('1x #forge:dusts/biscyclooctadienenickel_zero')
    .outputFluids(safeFluidOf('gtceu:ethane', 1000))
    .outputFluids(safeFluidOf('gtceu:ethylene', 1000))
    .outputFluids(safeFluidOf('susy:diethylaluminium_acetylacetonate', 2000))
    .duration(120)
    .EUt(30)

  event.recipes.susy.batch_reactor('8vqhhv8t5v9fba') // remapped from original line 3845
    .inputFluids(safeFluidOf('susy:diethylaluminium_acetylacetonate', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 3000))
    .outputFluids(safeFluidOf('susy:aluminium_chloride_solution', 3000))
    .outputFluids(safeFluidOf('susy:acetylacetone', 1000))
    .outputFluids(safeFluidOf('gtceu:ethylene', 2000))
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.distillery('07c6aikawp55eu') // remapped from original line 3855
    .inputFluids(safeFluidOf('susy:aluminium_chloride_solution', 3000))
    .itemOutputs('4x #forge:dusts/aluminium_chloride')
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.susy.batch_reactor('zbdshvq1j75jqq') // remapped from original line 3863
    .itemInputs('1x #forge:dusts/triphenylphosphine')
    .inputFluids(safeFluidOf('susy:phosphorus_trichloride', 500))
    .outputFluids(safeFluidOf('susy:chlorodiphenylphosphine', 1500))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.continuous_stirred_tank_reactor('x5f2spzr40hf9t') // remapped from original line 3871
    .inputFluids(safeFluidOf('susy:chlorodiphenylphosphine', 50))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 50))
    .notConsumable(safeFluidOf('susy:sodium_hydroxide_solution', 50))
    .outputFluids(safeFluidOf('susy:diphenylphosphinoacetic_acid', 50))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('r4atfxo6bnbzm9') // remapped from original line 3880
    .itemInputs('1x #forge:dusts/biscyclooctadienenickel_zero')
    .inputFluids(safeFluidOf('susy:diphenylphosphinoacetic_acid', 1000))
    .inputFluids(safeFluidOf('susy:ethylene_glycol', 1000))
    .outputFluids(safeFluidOf('susy:shell_higher_olefin_catalyst_solution', 1000))
    .duration(200)
    .EUt(voltAmps[3])

  event.recipes.susy.batch_reactor('hqdvmptizgkwoi') // remapped from original line 3889
    .inputFluids(safeFluidOf('gtceu:ethylene', 4000))
    .notConsumable(safeFluidOf('susy:shell_higher_olefin_catalyst_solution', 1000))
    .outputFluids(safeFluidOf('susy:alpha_olefin_mixture', 1000))
    .duration(125)
    .EUt(voltAmps[3])

  event.recipes.gtceu.distillation_tower('l55uufrn8lajif') // remapped from original line 3897
    .inputFluids(safeFluidOf('susy:alpha_olefin_mixture', 1000))
    .outputFluids(safeFluidOf('susy:one_tetracosene', 20))
    .outputFluids(safeFluidOf('susy:one_docosene', 30))
    .outputFluids(safeFluidOf('susy:one_icosene', 35))
    .outputFluids(safeFluidOf('susy:one_octadecene', 40))
    .outputFluids(safeFluidOf('susy:one_hexadecene', 50))
    .outputFluids(safeFluidOf('susy:one_tetradecene', 60))
    .outputFluids(safeFluidOf('susy:one_dodecene', 75))
    .outputFluids(safeFluidOf('susy:one_decene', 90))
    .outputFluids(safeFluidOf('susy:one_octene', 130))
    .outputFluids(safeFluidOf('susy:one_hexene', 110))
    .outputFluids(safeFluidOf('susy:one_butene', 160))
    .outputFluids(safeFluidOf('gtceu:ethylene', 200))
    .duration(125)
    .EUt(voltAmps[3])

  event.recipes.gtceu.large_chemical_reactor('rrw4ii4boum3gx') // remapped from original line 3916
    .inputFluids(safeFluidOf('susy:ethylene_glycol', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 4000))
    .notConsumable(safeFluidOf('gtceu:nitric_acid', 800))
    .notConsumable('7x #forge:dusts/vanadium_pentoxide')
    .notConsumable('4x #forge:dusts/iron_iii_chloride')
    .itemOutputs('1x #forge:dusts/oxalic_acid')
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .duration(120)
    .EUt(voltAmps[3])

  event.recipes.susy.continuous_stirred_tank_reactor('9mpqpabwersbxc') // remapped from original line 3929
    .inputFluids(safeFluidOf('gtceu:benzene', 50))
    .inputFluids(safeFluidOf('gtceu:nitration_mixture', 100))
    .outputFluids(safeFluidOf('susy:acidic_nitrobenzene_mixture', 150))
    .duration(5)
    .EUt(voltAmps[2])

  event.recipes.susy.phase_separator('4ktedi4mk7vksg') // remapped from original line 3937
    .inputFluids(safeFluidOf('susy:acidic_nitrobenzene_mixture', 3000))
    .outputFluids(safeFluidOf('gtceu:nitrobenzene', 1000))
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 2000))
    .duration(50)

  // Contains GTFO resources
  //event.recipes.susy.fixed_bed_reactor('wnyrpuuntsvs8m') // remapped from original line 3944
    //.notConsumable('1x #forge:catalysts/bed_palladium')
    //.inputFluids(safeFluidOf('gtceu:nitrobenzene', 50))
    //.inputFluids(safeFluidOf('susy:hot_hp_hydrogen', 150))
    //.outputFluids(safeFluidOf('susy:gtfo_aniline', 50))
    //.outputFluids(safeFluidOf('minecraft:water', 100))
    //.duration(100)
    //.EUt(voltAmps[2])

  // Contains GTFO resources
  //event.recipes.gtceu.fluid_heater('9bjqmid27bf5mm') // remapped from original line 3955
    //.circuit(2)
    //.inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    //.outputFluids(safeFluidOf('susy:gtfo_heated_water', 1000))
    //.duration(20)
    //.EUt(voltAmps[1])

  event.recipes.susy.bubble_column_reactor('icnieosjhe4ibl') // remapped from original line 3964
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 100))
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 50))
    .outputFluids(safeFluidOf('susy:diluted_sodium_carbonate_solution', 150))
    .duration(4)
    .EUt(30)

  event.recipes.gtceu.distillery('auigisxsptgohm') // remapped from original line 3972
    .inputFluids(safeFluidOf('susy:diluted_sodium_carbonate_solution', 3000))
    .itemOutputs('6x #forge:dusts/soda_ash')
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .duration(120)
    .EUt(30)

  event.recipes.susy.batch_reactor('ttbvu9tt2dzcwo') // remapped from original line 3982
    .itemInputs('1x #forge:dusts/palladium_chloride')
    .itemInputs('4x #forge:dusts/activated_carbon')
    .inputFluids(safeFluidOf('susy:demineralized_water', 250))
    .inputFluids(safeFluidOf('susy:formaldehyde', 50))
    .itemOutputs('5x #forge:dusts/palladium_on_carbon')
    .duration(120)
    .EUt(30)

  event.recipes.susy.batch_reactor('czwj57lqwz4fjx') // remapped from original line 3994
    .itemInputs('5x #forge:dusts/calcite') 
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 2000))
    .outputFluids(safeFluidOf('gtceu:dissolved_calcium_acetate', 1000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .duration(1800)
    .EUt(16)

  event.recipes.susy.batch_reactor('evf0xbtmkdtl9c') // remapped from original line 4003
    .itemInputs('2x #forge:dusts/quicklime') 
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 2000))
    .outputFluids(safeFluidOf('gtceu:dissolved_calcium_acetate', 1000))
    .duration(1800)
    .EUt(16)

  event.recipes.gtceu.distillery('dpnlxe4d1q2dio') // remapped from original line 4011
    .inputFluids(safeFluidOf('gtceu:dissolved_calcium_acetate', 1000))
    .itemOutputs('15x #forge:dusts/calcium_acetate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(20)
    .EUt(16)

  event.recipes.susy.roaster('3xgbffkmfn6jf9') // remapped from original line 4019
    .itemInputs('15x #forge:dusts/calcium_acetate')
    .itemOutputs('2x #forge:dusts/quicklime')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .outputFluids(safeFluidOf('gtceu:acetone', 1000))
    .duration(600)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('lqcz1cfbvfhwyp') // remapped from original line 4030
    .inputFluids(safeFluidOf('gtceu:benzene', 50))
    .inputFluids(safeFluidOf('gtceu:ethylene', 50))
    .notConsumable(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('gtceu:ethylbenzene', 50))
    .duration(5)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('jjeqfvizvv4anf') // remapped from original line 4041
    .inputFluids(safeFluidOf('gtceu:propane', 50))
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 150))
    .outputFluids(safeFluidOf('susy:diluted_nitromethane', 200))
    .outputFluids(safeFluidOf('gtceu:nitric_oxide', 100))
    .duration(5)
    .EUt(120)

  event.recipes.gtceu.distillation_tower('bv9g1hhc7ywrwo') // remapped from original line 4050
    .inputFluids(safeFluidOf('susy:diluted_nitromethane', 4000))
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .outputFluids(safeFluidOf('gtceu:nitromethane', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('sdatn8nrmrzzy8') // remapped from original line 4060
    .inputFluids(safeFluidOf('susy:isobutane', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 100))
    .outputFluids(safeFluidOf('susy:tert_butyl_hydroperoxide', 50))
    .duration(5)
    .EUt(120)

  event.recipes.susy.trickle_bed_reactor('ijqwvbqpsv7yn0') // remapped from original line 4068
    .inputFluids(safeFluidOf('susy:tert_butyl_hydroperoxide', 50))
    .inputFluids(safeFluidOf('susy:tert_butyl_alcohol', 50))
    .notConsumable('1x #forge:dusts/molecular_sieve')
    .outputFluids(safeFluidOf('susy:diluted_di_tert_butyl_peroxide', 100))
    .duration(5)
    .EUt(120)

  event.recipes.gtceu.distillation_tower('dzy37gxxlnhs3j') // remapped from original line 4077
    .inputFluids(safeFluidOf('susy:diluted_di_tert_butyl_peroxide', 2000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:di_tert_butyl_peroxide', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('nq8bu7llmtvozf') // remapped from original line 4087
    .inputFluids(safeFluidOf('gtceu:dimethylamine', 50))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 50))
    .outputFluids(safeFluidOf('susy:dimethylacetamide_solution', 100))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('yizr7tvfttvzy7') // remapped from original line 4095
    .inputFluids(safeFluidOf('susy:dimethylacetamide_solution', 2000))
    .outputFluids(safeFluidOf('susy:dimethylacetamide', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(200)
    .EUt(240)

  event.recipes.susy.continuous_stirred_tank_reactor('mzt0vglzn2hnll') // remapped from original line 4105
    .inputFluids(safeFluidOf('susy:acetylene', 50))
    .inputFluids(safeFluidOf('susy:formaldehyde', 100))
    .outputFluids(safeFluidOf('susy:butanediol', 50))
    .EUt(120)
    .duration(4)

  event.recipes.susy.fixed_bed_reactor('uhpmqr7dihq1tn') // remapped from original line 4113
    .inputFluids(safeFluidOf('susy:butanediol', 50))
    .notConsumable('1x #forge:catalysts/bed_copper')
    .outputFluids(safeFluidOf('susy:gamma_butyrolactone', 50))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 200))
    .EUt(120)
    .duration(4)

  event.recipes.susy.batch_reactor('t6r2onltmnzfdo') // remapped from original line 4124
    .inputFluids(safeFluidOf('gtceu:iodine', 576))
    .inputFluids(safeFluidOf('gtceu:hydrazine', 1000))
    .outputFluids(safeFluidOf('susy:hydrogen_iodide', 4000))
    .outputFluids(safeFluidOf('gtceu:nitrogen', 2000))
    .duration(80)
    .EUt(30)

  // Contains GTFO resources
  //event.recipes.susy.batch_reactor('9wfbmvvmqdpgnk') // remapped from original line 4135
    //.notConsumable('1x #forge:springs/cupronickel')
    //.inputFluids(safeFluidOf('susy:gtfo_acetaldehyde', 2000))
    //.inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    //.outputFluids(safeFluidOf('susy:crotonaldehyde_mixture', 1000))
    //.outputFluids(safeFluidOf('susy:dense_steam', 2000))
    //.duration(400)
    //.EUt(120)

  event.recipes.gtceu.distillery('in79xlis3jjts7') // remapped from original line 4145
    .inputFluids(safeFluidOf('susy:crotonaldehyde_mixture', 1000))
    .itemOutputs('3x #forge:dusts/sodium_hydroxide')
    .outputFluids(safeFluidOf('susy:crotonaldehyde', 1000))
    .duration(20)
    .EUt(30)

  event.recipes.susy.fixed_bed_reactor('rcxccvijeokdjh') // remapped from original line 4153
    .notConsumable('1x #forge:catalysts/bed_copper')
    .inputFluids(safeFluidOf('susy:crotonaldehyde', 50))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 100))
    .outputFluids(safeFluidOf('gtceu:butyraldehyde', 50))
    .duration(20)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('ubie8lvipjuzaj') // remapped from original line 4164
    .inputFluids(safeFluidOf('susy:hot_sulfuric_acid', 50))
    .inputFluids(safeFluidOf('susy:n_butanol', 50))
    .outputFluids(safeFluidOf('susy:one_butene', 50))
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 100))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.mixer('ihsgwknbwphoi3') // remapped from original line 4175
    .circuit(1)
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('6x #forge:dusts/sodium_bicarbonate')
    .outputFluids(safeFluidOf('susy:sodium_bicarbonate_solution', 1000))
    .EUt(30)
    .duration(80)

  // Contains GTFO resources
  //event.recipes.gtceu.mixer('qnjoyeaecii3m9') // remapped from original line 4184
    //.circuit(2)
    //.inputFluids(safeFluidOf('minecraft:water', 1000))
    //.itemInputs('1x #forge:dusts/sodium_bicarbonate')
    //.outputFluids(safeFluidOf('susy:gtfo_baking_soda_solution', 1000))
    //.EUt(30)
    //.duration(80)

  event.recipes.gtceu.mixer('ih1us6ejtv5kii') // remapped from original line 4195
    .itemInputs('2x #forge:dusts/sodium_fluoride')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:sodium_fluoride_solution', 1000))
    .duration(20)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('m9h6d8qwnynf9z') // remapped from original line 4203
    .inputFluids(safeFluidOf('susy:sodium_fluoride_solution', 50))
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .outputFluids(safeFluidOf('susy:salty_hydrofluoric_acid', 50))
    .duration(2)
    .EUt(30)

  event.recipes.gtceu.distillery('3x8jobhruqsof6') // remapped from original line 4211
    .inputFluids(safeFluidOf('susy:salty_hydrofluoric_acid', 1000))
    .itemOutputs('2x #forge:dusts/salt')
    .outputFluids(safeFluidOf('gtceu:hydrofluoric_acid', 1000))
    .duration(20)
    .EUt(30)

  event.recipes.gtceu.mixer('ye9ph1qeldvt5r') // remapped from original line 4221
    .itemInputs('5x #forge:dusts/calcium_hydroxide')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:calcium_hydroxide_slurry', 1000))
    .EUt(30)
    .duration(100)

  event.recipes.gtceu.mixer('hnlny7zhmklfmp') // remapped from original line 4229
    .itemInputs('2x #forge:dusts/quicklime')
    .circuit(2)
    .inputFluids(safeFluidOf('minecraft:water', 2000))
    .outputFluids(safeFluidOf('susy:calcium_hydroxide_slurry', 1000))
    .EUt(30)
    .duration(120)

  event.recipes.gtceu.mixer('httsvjoy0stun8') // remapped from original line 4240
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('3x #forge:dusts/zinc_chloride')
    .outputFluids(safeFluidOf('susy:zinc_chloride_solution', 1000))
    .EUt(16)
    .duration(80)

  event.recipes.gtceu.distillery('yagvzzum0kergl') // remapped from original line 4248
    .inputFluids(safeFluidOf('susy:diluted_sodium_sulfate_solution', 2000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .itemOutputs('7x #forge:dusts/sodium_sulfate')
    .duration(30)
    .EUt(200)

  event.recipes.gtceu.fluid_heater('ajpvvd6w9zl7rq') // remapped from original line 4258
    .circuit(3)
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .duration(80)
    .EUt(30)

  event.recipes.susy.condenser('hv4pcv7gjdrsy7') // remapped from original line 4266
    .inputFluids(safeFluidOf('susy:dense_steam', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(5)

  event.recipes.gtceu.mixer('x2gr5cmgjclrg7') // remapped from original line 4275
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 1000))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('gtceu:nitration_mixture', 2000))
    .EUt(30)
    .duration(160)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (carbon in sources) {
  //     ROASTER.recipeBuilder()
  //         .fluidInputs(fluid('oxygen') * 1000)
  //         .inputs(ore(carbon.name) * carbon.equivalent(1))
  //         .circuitMeta(1)
  //         .fluidOutputs(fluid('carbon_monoxide') * 1000)
  //         .duration(80)
  //         .EUt(7)
  //         .buildAndRegister()
  // }

  // for (carbon in sources) {
  //     ROASTER.recipeBuilder()
  //         .fluidInputs(fluid('oxygen') * 2000)
  //         .inputs(ore(carbon.name) * carbon.equivalent(1))
  //         .circuitMeta(2)
  //         .fluidOutputs(fluid('carbon_dioxide') * 1000)
  //         .duration(40)
  //         .EUt(7)
  //         .buildAndRegister()
  // }

  // for (carbon in sources) {
  //     ROASTER.recipeBuilder()
  //         .inputs(ore(carbon.name) * carbon.equivalent(1))
  //         .inputs(ore('dustAnyPuritySulfur') * 2)
  //         .fluidOutputs(fluid('carbon_disulfide') * 1000)
  //         .duration(100)
  //         .EUt(60)
  //         .buildAndRegister()
  // }

  // for (int i = 0; i < 16; i++) {
  //     MIXER.recipeBuilder()
  //     .inputs(ore('dye' + dyesUppercase[i]) * 1)
  //     .inputs(ore('dustSalt') * 2)
  //     .fluidInputs(fluid('sulfuric_acid') * 250)
  //     .fluidOutputs(fluid('dye_' + dyesLowercase[i]) * 288)
  //     .duration(160)
  //     .EUt(24)
  //     .buildAndRegister()
  // }

  // for (carbon in sources) {
  //     ADVANCED_ARC_FURNACE.recipeBuilder()
  //             .inputs(ore('dustQuicklime') * 2)
  //             .inputs(ore(carbon.name) * carbon.equivalent(3))
  //             .outputs(metaitem('dustCalciumCarbide') * 3)
  //             .fluidOutputs(fluid('carbon_monoxide') * 1000)
  //             .EUt(120)
  //             .duration(400)
  //             .buildAndRegister()
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.CarbonGlobals.*
  // import static gregtech.api.unification.material.Materials.*;
  // import gregtech.api.unification.material.MarkerMaterials;
  // import static gregtech.api.unification.ore.OrePrefix.dye;
  // VACUUM_FREEZER = recipemap('vacuum_freezer')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // TBR = recipemap('trickle_bed_reactor')
  // FBR = recipemap('fixed_bed_reactor')
  // BCR = recipemap('bubble_column_reactor')
  // BR = recipemap('batch_reactor')
  // POLYMERIZATION = recipemap('polymerization_tank')
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
  // ADVANCED_ARC_FURNACE = recipemap('advanced_arc_furnace')
  // AUTOCLAVE = recipemap('autoclave')
  // COMPRESSOR = recipemap('compressor')
  // ASSEMBLER = recipemap('assembler')
  // ELECTROLYZER = recipemap('electrolyzer')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // ELECTROMAGNETIC_SEPARATOR = recipemap('electromagnetic_separator')
  // PSA = recipemap('pressure_swing_adsorption')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // ION_EXCHANGE = recipemap('ion_exchange_column')
  // FLUID_EXTRACTOR = recipemap('extractor')
  // TUBE_FURNACE = recipemap('tube_furnace')
  // SINTERING_OVEN = recipemap('sintering_oven')
  // VACUUM_DT = recipemap('vacuum_distillation')
  // CRACKER = recipemap('cracker')
  // FLUID_HEATER = recipemap('fluid_heater')
  // PHASE_SEPARATOR = recipemap('phase_separator')
  // CONDENSER = recipemap('condenser')
  //     // Solvay Process
  // dyesLowercase = ["black", "red", "green", "brown", "blue", "purple", "cyan", "light_gray", "gray", "pink", "lime", "yellow", "light_blue", "magenta", "orange", "white"]
  // dyesUppercase = ["Black", "Red", "Green", "Brown", "Blue", "Purple", "Cyan", "LightGray", "Gray", "Pink", "Lime", "Yellow", "LightBlue", "Magenta", "Orange", "White"]
  // oreDict.add('dyeWhite', metaitem('dustTitaniumDioxide'))
  //      .inputs(ore('dustPyromelliticDianhydride'))
  // Let us produce a 5% wt solution of hydrogen silsesquioxane (H8Si8O12) in MIBK.
  // Assume 100g.
  // 5g HSQ / (424.744 g/mol) = 0.0117718 mol HSQ
  // 95g MIBK / (100.16 g/mol) = 0.94848 mol MIBK
  // Thus, HSQ should be 1.24% molar in MIBK
  // */
  //         //.circuitMeta(2)
});