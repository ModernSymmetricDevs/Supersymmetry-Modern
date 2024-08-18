ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:centrifuge', input: safeFluidOf('gtceu:salt_water')})

  event.recipes.gtceu.distillery('hhhed1xmlztpfe') // remapped from original line 32
    .inputFluids(safeFluidOf('gtceu:salt_water', 1000))
    .itemOutputs('2x #forge:dusts/salt')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(240)
    .EUt(30)

  event.recipes.gtceu.distillery('ecvq5dabgobvud') // remapped from original line 40
    .inputFluids(safeFluidOf('susy:concentrated_salt_water', 1000))
    .itemOutputs('4x #forge:dusts/salt')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(280)
    .EUt(30)

  event.recipes.gtceu.distillery('zrvfasnxfql1ey') // remapped from original line 48
    .inputFluids(safeFluidOf('susy:hypersaline_water', 1000))
    .itemOutputs('8x #forge:dusts/salt')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(320)
    .EUt(30)

  event.recipes.gtceu.distillery('r6tnlppqm3pzsj') // remapped from original line 56
    .inputFluids(safeFluidOf('susy:sea_water', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(240)
    .EUt(30)

  event.recipes.susy.evaporation_pool('ck5pmdrlvn3du2') // remapped from original line 63
    .inputFluids(safeFluidOf('gtceu:salt_water', 20000))
    .itemOutputs('40x #forge:dusts/salt')
    .duration(1800)

  event.recipes.susy.evaporation_pool('80mffbe7mvkflg') // remapped from original line 69
    .inputFluids(safeFluidOf('susy:sea_water', 20000))
    .itemOutputs('20x #forge:dusts/salt')
    .duration(1800)

  event.recipes.susy.evaporation_pool('z0xhp5uqc7y1xu') // remapped from original line 75
    .inputFluids(safeFluidOf('susy:concentrated_salt_water', 20000))
    .itemOutputs('64x #forge:dusts/salt')
    .itemOutputs('16x #forge:dusts/salt')
    .duration(1800)

  event.recipes.susy.evaporation_pool('1rtem0xp4tqgbr') // remapped from original line 82
    .inputFluids(safeFluidOf('susy:hypersaline_water', 20000))
    .itemOutputs('64x #forge:dusts/salt')
    .itemOutputs('64x #forge:dusts/salt')
    .itemOutputs('32x #forge:dusts/salt')
    .duration(1800)

  event.recipes.susy.evaporation_pool('twqn7dq9c3mzmb') // remapped from original line 90
    .inputFluids(safeFluidOf('susy:brine', 10000))
    .itemOutputs('64x #forge:dusts/salt')
    .itemOutputs('16x #forge:dusts/salt')
    .outputFluids(safeFluidOf('susy:concentrated_brine', 2500))
    .duration(1800)

  event.recipes.susy.evaporation_pool('mjeu753jtqafoz') // remapped from original line 98
    .inputFluids(safeFluidOf('susy:concentrated_brine', 2500))
    .itemOutputs('50x #forge:dusts/carnallite')
    .itemOutputs('20x #forge:dusts/potassium_carbonate')
    .itemOutputs('15x #forge:dusts/calcium_chloride')
    .outputFluids(safeFluidOf('susy:very_concentrated_brine', 250))
    .duration(1800)

  event.recipes.susy.batch_reactor('cdzha7dhotlpfv') // remapped from original line 107
    .inputFluids(safeFluidOf('susy:very_concentrated_brine', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 200))
    .itemOutputs('7x #forge:dusts/boric_acid')
    .outputFluids(safeFluidOf('susy:boron_free_brine', 1000))
    .duration(120)
    .EUt(120)

  // Contains GTFO resources
  //event.recipes.susy.batch_reactor('tkm9khiumpu17k') // remapped from original line 116
    //.inputFluids(safeFluidOf('susy:boron_free_brine', 1000))
    //.itemInputs('6x #forge:dusts/soda_ash')
    //.itemOutputs(safeItemId('6x gregtechfoodoption:lithium_carbonate_dust'))
    //.outputFluids(safeFluidOf('susy:lithium_free_brine', 1000))
    //.duration(120)
    //.EUt(120)

  event.recipes.susy.bubble_column_reactor('jy7fdr3op8bzqd') // remapped from original line 125
    .inputFluids(safeFluidOf('susy:lithium_free_brine', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 25))
    .outputFluids(safeFluidOf('susy:chlorinated_brine', 50))
    .duration(1)
    .EUt(120)

  event.recipes.susy.vacuum_chamber('j5qxqmkv6geabi') // remapped from original line 133
    .inputFluids(safeFluidOf('gtceu:steam', 250))
    .inputFluids(safeFluidOf('susy:chlorinated_brine', 1000))
    .outputFluids(safeFluidOf('susy:impure_bromine', 500))
    .outputFluids(safeFluidOf('susy:wastewater_sludge', 500))
    .duration(120)
    .EUt(120)

  event.recipes.gtceu.centrifuge('kwukrwcrvaooqy') // remapped from original line 142
    .inputFluids(safeFluidOf('susy:impure_bromine', 1000))
    .outputFluids(safeFluidOf('gtceu:bromine', 1000))
    .chancedOutput('1x #forge:dusts/iodine', 1000, 1000)
    .duration(120)
    .EUt(120)

  event.recipes.susy.multi_stage_flash_distillation('od3sjbyrphwonl') // remapped from original line 150
    .inputFluids(safeFluidOf('susy:sea_water', 10000))
    .inputFluids(safeFluidOf('gtceu:steam', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 5000))
    .outputFluids(safeFluidOf('gtceu:salt_water', 5000))
    .duration(10)
    .EUt(120)

  event.recipes.susy.multi_stage_flash_distillation('fwhl6mpopnjhkt') // remapped from original line 159
    .inputFluids(safeFluidOf('gtceu:salt_water', 5000))
    .inputFluids(safeFluidOf('gtceu:steam', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 2500))
    .outputFluids(safeFluidOf('susy:concentrated_salt_water', 2500))
    .duration(10)
    .EUt(120)

  event.recipes.susy.multi_stage_flash_distillation('rusohiq3vw28fk') // remapped from original line 168
    .inputFluids(safeFluidOf('susy:concentrated_salt_water', 2500))
    .inputFluids(safeFluidOf('gtceu:steam', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1250))
    .outputFluids(safeFluidOf('susy:hypersaline_water', 1250))
    .duration(10)
    .EUt(120)

  event.recipes.susy.multi_stage_flash_distillation('bqtuldtewcliga') // remapped from original line 177
    .inputFluids(safeFluidOf('minecraft:water', 8750))
    .inputFluids(safeFluidOf('gtceu:steam', 1000))
    .outputFluids(safeFluidOf('gtceu:distilled_water', 8750))
    .duration(5)
    .EUt(120)

  event.recipes.susy.pressure_swing_adsorption('s65tmggjxh6wdt') // remapped from original line 185
    .notConsumable(safeItemId('1x susy:cellulose_acetate_mesh'))
    .inputFluids(safeFluidOf('gtceu:salt_water', 10000))
    .itemOutputs('20x #forge:dusts/salt')
    .outputFluids(safeFluidOf('minecraft:water', 10000))
    .duration(80)
    .EUt(480)

  event.recipes.susy.pressure_swing_adsorption('j83pjr83xxdlre') // remapped from original line 194
    .notConsumable(safeItemId('1x susy:cellulose_acetate_mesh'))
    .inputFluids(safeFluidOf('susy:concentrated_salt_water', 10000))
    .itemOutputs('40x #forge:dusts/salt')
    .outputFluids(safeFluidOf('minecraft:water', 10000))
    .duration(80)
    .EUt(480)

  event.recipes.susy.pressure_swing_adsorption('duwgc8zxpmlrps') // remapped from original line 203
    .notConsumable(safeItemId('1x susy:cellulose_acetate_mesh'))
    .inputFluids(safeFluidOf('susy:hypersaline_water', 5000))
    .itemOutputs('40x #forge:dusts/salt')
    .outputFluids(safeFluidOf('minecraft:water', 5000))
    .duration(40)
    .EUt(480)

  event.recipes.gtceu.fluid_heater('p2jgewglhbft8u') // remapped from original line 212
    .inputFluids(safeFluidOf('susy:wastewater', 1000))
    .outputFluids(safeFluidOf('susy:heated_wastewater', 1000))
    .duration(80)
    .EUt(30)

  event.recipes.gtceu.mixer('kwm9tfzixzxzy1') // remapped from original line 219
    .inputFluids(safeFluidOf('susy:heated_wastewater', 1000))
    .itemInputs('1x #forge:dusts/flocculant')
    .outputFluids(safeFluidOf('susy:flocculated_wastewater', 1000))
    .duration(80)
    .EUt(30)

  event.recipes.susy.clarifier('2yik2cliww5oks') // remapped from original line 227
    .inputFluids(safeFluidOf('susy:flocculated_wastewater', 8000))
    .itemOutputs('8x #forge:dusts/aluminium_sulfate')
    .outputFluids(safeFluidOf('susy:wastewater_sludge', 2000))
    .outputFluids(safeFluidOf('minecraft:water', 6000))
    .duration(600)
    .EUt(30)

  event.recipes.susy.dryer('hmprepgsmnyi6e') // remapped from original line 236
    .itemInputs('1x #forge:dusts/wet_molecular_sieve')
    .itemOutputs('1x #forge:dusts/molecular_sieve')
    .duration(100)
    .EUt(30)

  event.recipes.susy.ion_exchange_column('wie2ffchs2ihwe') // remapped from original line 243
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .notConsumable('1x #forge:dusts/molecular_sieve')
    .outputFluids(safeFluidOf('susy:demineralized_water', 900))
    .duration(100)
    .EUt(30)

  event.recipes.susy.vacuum_chamber('nvv655fkmpoymj') // remapped from original line 251
    .inputFluids(safeFluidOf('susy:demineralized_water', 1000))
    .inputFluids(safeFluidOf('gtceu:steam', 100))
    .outputFluids(safeFluidOf('susy:deaerated_water', 900))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.compressor('bbt4mwbutvjfmi') // remapped from original line 259
    .inputFluids(safeFluidOf('susy:deaerated_water', 1000))
    .notConsumable(safeItemId('1x susy:cellulose_acetate_mesh'))
    .outputFluids(safeFluidOf('susy:filtered_water', 900))
    .duration(100)
    .EUt(30)

  event.recipes.susy.uv_light_box('i1khhlysgfhqvd') // remapped from original line 267
    .inputFluids(safeFluidOf('susy:filtered_water', 1000))
    .outputFluids(safeFluidOf('susy:sterilized_water', 900))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.distillery('wou44n4uwz9rp8') // remapped from original line 274
    .inputFluids(safeFluidOf('susy:deaerated_water', 100))
    .outputFluids(safeFluidOf('susy:ultrapure_water', 15))
    .duration(10)
    .EUt(50)

  event.recipes.gtceu.distillery('yk7w1k4gnqwf8c') // remapped from original line 281
    .inputFluids(safeFluidOf('susy:filtered_water', 100))
    .outputFluids(safeFluidOf('susy:ultrapure_water', 30))
    .duration(10)
    .EUt(40)

  event.recipes.gtceu.distillery('dymqdikole65xa') // remapped from original line 288
    .inputFluids(safeFluidOf('susy:demineralized_water', 100))
    .outputFluids(safeFluidOf('susy:ultrapure_water', 5))
    .duration(10)
    .EUt(60)

  event.recipes.gtceu.distillery('r6c4rmrlzk0e7y') // remapped from original line 295
    .inputFluids(safeFluidOf('susy:sterilized_water', 100))
    .outputFluids(safeFluidOf('susy:ultrapure_water', 90))
    .duration(10)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import gregtech.api.recipes.ModHandler;
  // import gregtech.api.unification.material.Materials;
  // import gregtech.api.unification.ore.OrePrefix;
  // import gregtech.api.unification.stack.UnificationEntry;
  // def MIXER = recipemap('mixer');
  // def CLARIFIER = recipemap('clarifier');
  // def DRYER = recipemap('dryer');
  // def DISTILLERY = recipemap('distillery');
  // def PSA = recipemap('pressure_swing_adsorption');
  // def MSFD = recipemap('multi_stage_flash_distillation');
  // def EVAPORATION_POOL = recipemap('evaporation_pool');
  // def FLUID_HEATER = recipemap('fluid_heater');
  // def ION_EXCHANGE = recipemap('ion_exchange_column');
  // def VACUUM_CHAMBER = recipemap('vacuum_chamber');
  // def COMPRESSOR = recipemap('compressor');
  // def UV_LIGHT_BOX = recipemap('uv_light_box');
  // def BR = recipemap('batch_reactor');
  // def BCR = recipemap('bubble_column_reactor');
  // def CENTRIFUGE = recipemap('centrifuge');
  // def SIFTER = recipemap('sifter');
  // oreDict.add('dustFlocculant', metaitem('dustPotassiumAlum'))
  // oreDict.add('dustFlocculant', metaitem('dustSodiumAlum'))
  // oreDict.add('dustFlocculant', metaitem('dustAluminiumSulfate'))
});