// requires a full rework

ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:mixer', input: safeItemId('minecraft:dirt') && safeItemId('minecraft:sand') && '#forge:dusts/wood' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:mixer', input: "#c:dyes" && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('gregtechfoodoption:cupric_hydrogen_arsenite_dust') && safeItemId('gtceu:transparent_casing') && 'susy:gregtechfoodoption:cupric_hydrogen_arsenite_dust'})

  event.recipes.gtceu.extruder('ijtzzmjhybqmc9') // remapped from original line 35
    .itemInputs(safeItemId('20x susy:crop.cotton'))
    .notConsumable('8x #forge:gears/steel')
    .itemOutputs(safeItemId('5x susy:seed.cotton'))
    .itemOutputs(safeItemId('5x susy:stem.cotton'))
    .itemOutputs('40x #forge:fibers/cotton')
    .EUt(7)
    .duration(80)

  event.recipes.gtceu.extractor('gavklfaouzqekc') // remapped from original line 45
    .itemInputs(safeItemId('1x susy:seed.cotton'))
    .outputFluids(safeFluidOf('gtceu:seed_oil', 10))
    .EUt(2)
    .duration(32)

  event.recipes.gtceu.macerator('q4evlwyognfree') // remapped from original line 56
    .itemInputs('2x #forge:threads/cotton')
    .itemOutputs('1x #forge:dusts/cellulose')
    .duration(100)
    .EUt(voltAmps[1])

  // Contains GTFO resources
  //event.recipes.gtceu.chemical_bath('mfg2lrlb18107u') // remapped from original line 65
    //.itemInputs(safeItemId('1x gregtech:transparent_casing'))
    //.inputFluids(safeFluidOf('susy:dye_green', 144))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_glass_casing'))
    //.EUt(7)
    //.duration(40)

  event.recipes.gtceu.mixer('misabtp7zt31kn') // remapped from original line 75
    .itemInputs('1x #forge:nutrients/nitrogen')
    .itemInputs('1x #forge:nutrients/potassium')
    .itemInputs('1x #forge:nutrients/phosphorous')
    .itemOutputs(safeItemId('5x susy:fertilizer'))
    .EUt(30)
    .duration(100)

  event.recipes.gtceu.mixer('qpw4llxt9oudih') // remapped from original line 84
    .itemInputs('2x #forge:dusts/ammonium_dihydrogen_phosphate')
    .itemInputs('1x #forge:nutrients/potassium')
    .itemOutputs(safeItemId('5x susy:fertilizer'))
    .EUt(30)
    .duration(100)

  event.recipes.gtceu.mixer('rllufvayqn0roj') // remapped from original line 92
    .itemInputs('2x #forge:dusts/saltpeter')
    .itemInputs('1x #forge:nutrients/phosphorous')
    .itemOutputs(safeItemId('5x susy:fertilizer'))
    .EUt(30)
    .duration(100)

  event.recipes.gtceu.mixer('49zsj1wwqnycyq') // remapped from original line 100
    .itemInputs(safeItemId('2x susy:bio_chaff'))
    .itemInputs('1x #forge:nutrients/phosphorous')
    .itemOutputs(safeItemId('5x susy:fertilizer'))
    .EUt(30)
    .duration(100)

  event.recipes.gtceu.mixer('fg8cyxcmcbxgp8') // remapped from original line 108
    .inputFluids(safeFluidOf('gtceu:fermented_biomass', 1000))
    .itemInputs('1x #forge:nutrients/phosphorous')
    .itemOutputs(safeItemId('5x susy:fertilizer'))
    .EUt(30)
    .duration(100)

  // Contains GTFO resources
  //event.recipes.gtceu.mixer('qsvfncz7tibnhb') // remapped from original line 116
    //.itemInputs(safeItemId('2x susy:fertilizer'))
    //.inputFluids(safeFluidOf('minecraft:water', 1000))
    //.outputFluids(safeFluidOf('susy:gtfo_fertilizer_solution', 1000))
    //.EUt(30)
    //.duration(60)

  event.recipes.gtceu.compressor('x0ssm2ogkutmgj') // remapped from original line 126
    .itemInputs('16x #forge:trees/leaves')
    .itemOutputs(safeItemId('1x susy:plant_ball'))
    .EUt(2)
    .duration(300)

  event.recipes.gtceu.pyrolyse_oven('wytaz6z2gq1dic') // remapped from original line 133
    .itemInputs(safeItemId('24x minecraft:sugar'))
    .itemOutputs('6x #forge:dusts/carbon')
    .outputFluids(safeFluidOf('gtceu:steam', 6000))
    .duration(320)
    .EUt(64)

  // Contains GTFO resources
  //event.recipes.gtceu.mixer('twh3oryoyabnfk') // remapped from original line 143
    //.inputFluids(safeFluidOf('gtceu:acetic_acid', 100))
    //.inputFluids(safeFluidOf('susy:gtfo_sodium_stearate', 100))
    //.inputFluids(safeFluidOf('gtceu:salt_water', 1000))
    //.outputFluids(safeFluidOf('susy:weed_killer', 1000))
    //.EUt(30)
    //.duration(60)

  // Contains GTFO resources
  //event.recipes.gtceu.mixer('y3gpnmyhehj1ir') // remapped from original line 152
    //.inputFluids(safeFluidOf('gtceu:seed_oil', 100))
    //.inputFluids(safeFluidOf('susy:gtfo_sodium_stearate', 100))
    //.inputFluids(safeFluidOf('minecraft:water', 1000))
    //.outputFluids(safeFluidOf('susy:pesticide', 1000))
    //.EUt(30)
    //.duration(60)

  event.recipes.gtceu.mixer('stfgocavd0x2wl') // remapped from original line 163
    .inputFluids(safeFluidOf('gtceu:air', 1000))
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 100))
    .outputFluids(safeFluidOf('susy:greenhouse_gases', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.fluid_heater('ybvk0wvuule7wr') // remapped from original line 171
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 1000))
    .outputFluids(safeFluidOf('susy:warm_greenhouse_gases', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.centrifuge('eutuz9cfqjqxjv') // remapped from original line 178
    .inputFluids(safeFluidOf('minecraft:water', 40))
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 1000))
    .outputFluids(safeFluidOf('susy:cool_greenhouse_gases', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.mixer('rco46acv4zt9el') // remapped from original line 186
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .outputFluids(safeFluidOf('susy:humid_greenhouse_gases', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.mixer('dm54ytbdxwq2f7') // remapped from original line 194
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 1000))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 20))
    .outputFluids(safeFluidOf('susy:dry_greenhouse_gases', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.mixer('zc1oy0zl8cggmc') // remapped from original line 202
    .inputFluids(safeFluidOf('susy:warm_greenhouse_gases', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .outputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.mixer('qft9fqe4fy1ckl') // remapped from original line 210
    .inputFluids(safeFluidOf('susy:warm_greenhouse_gases', 1000))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 20))
    .outputFluids(safeFluidOf('susy:warm_dry_greenhouse_gases', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.mixer('isgznmbfel7gbb') // remapped from original line 218
    .inputFluids(safeFluidOf('susy:cool_greenhouse_gases', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .outputFluids(safeFluidOf('susy:cool_humid_greenhouse_gases', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.mixer('yvczbu1zxr3bof') // remapped from original line 226
    .inputFluids(safeFluidOf('susy:cool_greenhouse_gases', 1000))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 20))
    .outputFluids(safeFluidOf('susy:cool_dry_greenhouse_gases', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.mixer('vygsbgmdwmgd0z') // remapped from original line 236
    .inputFluids(safeFluidOf('gtceu:nitrogen', 780))
    .inputFluids(safeFluidOf('gtceu:oxygen', 220))
    .outputFluids(safeFluidOf('susy:earth_like_air', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.mixer('aky6ngyfd2eaqy') // remapped from original line 244
    .inputFluids(safeFluidOf('susy:earth_like_air', 1000))
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 100))
    .outputFluids(safeFluidOf('susy:greenhouse_gases', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.susy.greenhouse('afery1wxpn3fhs') // remapped from original line 253
    .notConsumable(safeItemId('1x minecraft:sapling'))
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(safeItemId('4x susy:fertilizer'))
    .itemOutputs(safeItemId('6x minecraft:log'))
    .itemOutputs(safeItemId('12x minecraft:leaves'))
    .itemOutputs(safeItemId('2x minecraft:sapling'))
    .itemOutputs(safeItemId('1x minecraft:apple'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('swjzhomueaffjx') // remapped from original line 266
    .notConsumable(safeItemId('1x minecraft:sapling'))
    .inputFluids(safeFluidOf('susy:cool_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(safeItemId('4x susy:fertilizer'))
    .itemOutputs(safeItemId('1x minecraft:log'))
    .itemOutputs(safeItemId('1x minecraft:leaves'))
    .itemOutputs(safeItemId('1x minecraft:sapling'))
    .EUt(30)
    .duration(480)

  event.recipes.susy.greenhouse('fbl04sihyfticw') // remapped from original line 278
    .notConsumable(safeItemId('2x minecraft:sapling'))
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(safeItemId('4x susy:fertilizer'))
    .itemOutputs(safeItemId('2x minecraft:log'))
    .itemOutputs(safeItemId('2x minecraft:leaves'))
    .itemOutputs(safeItemId('2x minecraft:sapling'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('chn0fw6lvymaor') // remapped from original line 290
    .notConsumable(safeItemId('3x minecraft:sapling'))
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(safeItemId('8x susy:fertilizer'))
    .itemOutputs(safeItemId('3x minecraft:log'))
    .itemOutputs(safeItemId('3x minecraft:leaves'))
    .itemOutputs(safeItemId('3x minecraft:sapling'))
    .EUt(30)
    .duration(1440)

  event.recipes.susy.greenhouse('wrkaemdo3nhkok') // remapped from original line 302
    .notConsumable(safeItemId('4x minecraft:sapling'))
    .inputFluids(safeFluidOf('susy:warm_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(safeItemId('4x susy:fertilizer'))
    .itemOutputs(safeItemId('2x minecraft:log2'))
    .itemOutputs(safeItemId('2x minecraft:leaves2'))
    .itemOutputs(safeItemId('4x minecraft:sapling'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('jwhxl4jctsnbtt') // remapped from original line 314
    .notConsumable(safeItemId('5x minecraft:sapling'))
    .inputFluids(safeFluidOf('susy:cool_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(safeItemId('8x susy:fertilizer'))
    .itemOutputs(safeItemId('2x minecraft:log2'))
    .itemOutputs(safeItemId('2x minecraft:leaves2'))
    .itemOutputs(safeItemId('5x minecraft:sapling'))
    .itemOutputs(safeItemId('2x minecraft:apple'))
    .EUt(30)
    .duration(1440)

  event.recipes.susy.greenhouse('224turlncpuotb') // remapped from original line 327
    .notConsumable(safeItemId('1x gregtech:rubber_sapling'))
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(safeItemId('4x susy:fertilizer'))
    .itemOutputs(safeItemId('6x gregtech:rubber_log'))
    .itemOutputs(safeItemId('12x gregtech:rubber_leaves'))
    .itemOutputs(safeItemId('4x susy:rubber_drop'))
    .EUt(30)
    .duration(360)

  // Contains GTFO resources
  //event.recipes.susy.greenhouse('rymfeecqttjqcs') // remapped from original line 341
    //.notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.circuit(1)
    //.inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    //.inputFluids(safeFluidOf('minecraft:water', 5000))
    //.itemInputs(safeItemId('4x susy:fertilizer'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_0'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_0'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.itemOutputs(safeItemId('4x gregtechfoodoption:food.banana'))
    //.EUt(30)
    //.duration(360)

  // Contains GTFO resources
  //event.recipes.susy.greenhouse('3rixvfqpfoasnl') // remapped from original line 355
    //.notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.circuit(2)
    //.inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    //.inputFluids(safeFluidOf('minecraft:water', 5000))
    //.inputFluids(safeFluidOf('susy:pesticide', 500))
    //.itemInputs(safeItemId('4x susy:fertilizer'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_0'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_0'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.itemOutputs(safeItemId('8x gregtechfoodoption:food.banana'))
    //.EUt(30)
    //.duration(360)

  // Contains GTFO resources
  //event.recipes.susy.greenhouse('fdpwqalkjnxtb6') // remapped from original line 370
    //.notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.circuit(1)
    //.inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    //.inputFluids(safeFluidOf('minecraft:water', 5000))
    //.itemInputs(safeItemId('4x susy:fertilizer'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_0'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_0'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.itemOutputs(safeItemId('4x gregtechfoodoption:food.orange'))
    //.EUt(30)
    //.duration(360)

  // Contains GTFO resources
  //event.recipes.susy.greenhouse('na1mbkxm7sjlth') // remapped from original line 384
    //.notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.circuit(2)
    //.inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    //.inputFluids(safeFluidOf('minecraft:water', 5000))
    //.inputFluids(safeFluidOf('susy:pesticide', 500))
    //.itemInputs(safeItemId('4x susy:fertilizer'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_0'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_0'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.itemOutputs(safeItemId('8x gregtechfoodoption:food.orange'))
    //.EUt(30)
    //.duration(360)

  // Contains GTFO resources
  //event.recipes.susy.greenhouse('qecc4gnhktlqqi') // remapped from original line 399
    //.notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.circuit(1)
    //.inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    //.inputFluids(safeFluidOf('minecraft:water', 5000))
    //.itemInputs(safeItemId('4x susy:fertilizer'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_0'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_0'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.itemOutputs(safeItemId('4x gregtechfoodoption:food.mango'))
    //.EUt(30)
    //.duration(360)

  // Contains GTFO resources
  //event.recipes.susy.greenhouse('16ukvnqhhq3fwb') // remapped from original line 413
    //.notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.circuit(2)
    //.inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    //.inputFluids(safeFluidOf('minecraft:water', 5000))
    //.inputFluids(safeFluidOf('susy:pesticide', 500))
    //.itemInputs(safeItemId('4x susy:fertilizer'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_0'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_0'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.itemOutputs(safeItemId('8x gregtechfoodoption:food.mango'))
    //.EUt(30)
    //.duration(360)

  // Contains GTFO resources
  //event.recipes.susy.greenhouse('jbtkblhuxukdtr') // remapped from original line 428
    //.notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.circuit(1)
    //.inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    //.inputFluids(safeFluidOf('minecraft:water', 5000))
    //.itemInputs(safeItemId('4x susy:fertilizer'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_0'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_0'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.itemOutputs(safeItemId('4x gregtechfoodoption:food.apricot'))
    //.EUt(30)
    //.duration(360)

  // Contains GTFO resources
  //event.recipes.susy.greenhouse('fqtdcmgnp3vee4') // remapped from original line 442
    //.notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.circuit(2)
    //.inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    //.inputFluids(safeFluidOf('minecraft:water', 5000))
    //.inputFluids(safeFluidOf('susy:pesticide', 500))
    //.itemInputs(safeItemId('4x susy:fertilizer'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_0'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_0'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.itemOutputs(safeItemId('8x gregtechfoodoption:food.apricot'))
    //.EUt(30)
    //.duration(360)

  // Contains GTFO resources
  //event.recipes.susy.greenhouse('sa0xgj6bmcm52p') // remapped from original line 457
    //.notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.circuit(1)
    //.inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    //.inputFluids(safeFluidOf('minecraft:water', 5000))
    //.itemInputs(safeItemId('4x susy:fertilizer'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_1'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_1'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.itemOutputs(safeItemId('5x gregtechfoodoption:food.lemon'))
    //.EUt(30)
    //.duration(360)

  // Contains GTFO resources
  //event.recipes.susy.greenhouse('nkvazk8hlrv1wd') // remapped from original line 471
    //.notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.circuit(2)
    //.inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    //.inputFluids(safeFluidOf('minecraft:water', 5000))
    //.inputFluids(safeFluidOf('susy:pesticide', 500))
    //.itemInputs(safeItemId('4x susy:fertilizer'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_1'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_1'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.itemOutputs(safeItemId('10x gregtechfoodoption:food.lemon'))
    //.EUt(30)
    //.duration(360)

  // Contains GTFO resources
  //event.recipes.susy.greenhouse('kvpqqgqfc38mww') // remapped from original line 486
    //.notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.circuit(1)
    //.inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    //.inputFluids(safeFluidOf('minecraft:water', 5000))
    //.itemInputs(safeItemId('4x susy:fertilizer'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_1'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_1'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.itemOutputs(safeItemId('6x gregtechfoodoption:food.lime'))
    //.EUt(30)
    //.duration(360)

  // Contains GTFO resources
  //event.recipes.susy.greenhouse('aee03j5thc0gbd') // remapped from original line 500
    //.notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.circuit(2)
    //.inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    //.inputFluids(safeFluidOf('minecraft:water', 5000))
    //.inputFluids(safeFluidOf('susy:pesticide', 500))
    //.itemInputs(safeItemId('4x susy:fertilizer'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_1'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_1'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.itemOutputs(safeItemId('12x gregtechfoodoption:food.lime'))
    //.EUt(30)
    //.duration(360)

  // Contains GTFO resources
  //event.recipes.susy.greenhouse('ahc92kpq0akfeb') // remapped from original line 515
    //.notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.circuit(1)
    //.inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    //.inputFluids(safeFluidOf('minecraft:water', 5000))
    //.itemInputs(safeItemId('4x susy:fertilizer'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_1'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_1'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.itemOutputs(safeItemId('20x gregtechfoodoption:crop.olive'))
    //.EUt(30)
    //.duration(360)

  // Contains GTFO resources
  //event.recipes.susy.greenhouse('gglf7q7krrovmv') // remapped from original line 529
    //.notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.circuit(2)
    //.inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    //.inputFluids(safeFluidOf('minecraft:water', 5000))
    //.inputFluids(safeFluidOf('susy:pesticide', 500))
    //.itemInputs(safeItemId('4x susy:fertilizer'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_1'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_1'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.itemOutputs(safeItemId('40x gregtechfoodoption:crop.olive'))
    //.EUt(30)
    //.duration(360)

  // Contains GTFO resources
  //event.recipes.susy.greenhouse('rsfdfcgh5wojet') // remapped from original line 544
    //.notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.circuit(1)
    //.inputFluids(safeFluidOf('susy:greenhouse_gases', 10000))
    //.inputFluids(safeFluidOf('minecraft:water', 5000))
    //.itemInputs(safeItemId('4x susy:fertilizer'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_1'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_1'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.itemOutputs(safeItemId('20x gregtechfoodoption:crop.olive'))
    //.EUt(30)
    //.duration(360)

  // Contains GTFO resources
  //event.recipes.susy.greenhouse('qpfiojpadudfb1') // remapped from original line 558
    //.notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.circuit(2)
    //.inputFluids(safeFluidOf('susy:greenhouse_gases', 10000))
    //.inputFluids(safeFluidOf('minecraft:water', 5000))
    //.inputFluids(safeFluidOf('susy:pesticide', 500))
    //.itemInputs(safeItemId('4x susy:fertilizer'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_1'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_1'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0'))
    //.itemOutputs(safeItemId('40x gregtechfoodoption:crop.olive'))
    //.EUt(30)
    //.duration(360)

  // Contains GTFO resources
  //event.recipes.susy.greenhouse('odup6ebqwf3cxd') // remapped from original line 573
    //.notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_1'))
    //.circuit(1)
    //.inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    //.inputFluids(safeFluidOf('minecraft:water', 5000))
    //.itemInputs(safeItemId('4x susy:fertilizer'))
    //.itemOutputs(safeItemId('2x gregtechfoodoption:gtfo_log_2'))
    //.itemOutputs(safeItemId('2x gregtechfoodoption:gtfo_leaves_2'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_1'))
    //.itemOutputs(safeItemId('10x gregtechfoodoption:component.nutmeg'))
    //.EUt(30)
    //.duration(360)

  // Contains GTFO resources
  //event.recipes.susy.greenhouse('dsmwhyzirkgyj1') // remapped from original line 587
    //.notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_1'))
    //.circuit(2)
    //.inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    //.inputFluids(safeFluidOf('minecraft:water', 5000))
    //.inputFluids(safeFluidOf('susy:pesticide', 500))
    //.itemInputs(safeItemId('4x susy:fertilizer'))
    //.itemOutputs(safeItemId('2x gregtechfoodoption:gtfo_log_2'))
    //.itemOutputs(safeItemId('2x gregtechfoodoption:gtfo_leaves_2'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_1'))
    //.itemOutputs(safeItemId('20x gregtechfoodoption:component.nutmeg'))
    //.EUt(30)
    //.duration(360)

  // Contains GTFO resources
  //event.recipes.susy.greenhouse('mnkobyopq6cnc0') // remapped from original line 602
    //.notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_1'))
    //.circuit(2)
    //.inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    //.inputFluids(safeFluidOf('minecraft:water', 5000))
    //.itemInputs(safeItemId('4x susy:fertilizer'))
    //.itemOutputs(safeItemId('2x gregtechfoodoption:gtfo_log_2'))
    //.itemOutputs(safeItemId('2x gregtechfoodoption:gtfo_leaves_2'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_1'))
    //.itemOutputs(safeItemId('2x gregtechfoodoption:component.coconut'))
    //.EUt(30)
    //.duration(360)

  // Contains GTFO resources
  //event.recipes.susy.greenhouse('yzd9kag7x4g6xu') // remapped from original line 616
    //.notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_1'))
    //.circuit(2)
    //.inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    //.inputFluids(safeFluidOf('minecraft:water', 5000))
    //.inputFluids(safeFluidOf('susy:pesticide', 500))
    //.itemInputs(safeItemId('4x susy:fertilizer'))
    //.itemOutputs(safeItemId('2x gregtechfoodoption:gtfo_log_2'))
    //.itemOutputs(safeItemId('2x gregtechfoodoption:gtfo_leaves_2'))
    //.itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_1'))
    //.itemOutputs(safeItemId('4x gregtechfoodoption:component.coconut'))
    //.EUt(30)
    //.duration(360)

  event.recipes.susy.greenhouse('mqegq5wnfstci8') // remapped from original line 632
    .notConsumable(sapling)
    .circuit(1)
    .inputFluids(safeFluidOf('susy:asType', 1))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(safeItemId('4x susy:fertilizer'))
    .itemOutputs(wood * 6)
    .itemOutputs(leaves * 12)
    .itemOutputs(sapling * 2)
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('edemkcpk7m8eiy') // remapped from original line 646
    .notConsumable(safeItemId('1x biomesoplenty:sapling_0'))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(safeItemId('4x susy:fertilizer'))
    .itemOutputs(safeItemId('12x biomesoplenty:bamboo'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('bahfsinhu3p5bh') // remapped from original line 657
    .notConsumable(safeItemId('1x biomesoplenty:sapling_1'))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 20000))
    .inputFluids(safeFluidOf('minecraft:water', 20000))
    .itemInputs(safeItemId('16x susy:fertilizer'))
    .itemOutputs(safeItemId('1x biomesoplenty:log_0'))
    .itemOutputs(safeItemId('64x minecraft:leaves'))
    .EUt(30)
    .duration(6000)

  event.recipes.susy.greenhouse('getjcmal9l6ro2') // remapped from original line 693
    .notConsumable(safeItemId('1x minecraft:cactus'))
    .notConsumable(safeItemId('1x minecraft:sand'))
    .inputFluids(safeFluidOf('susy:warm_dry_greenhouse_gases', 10000))
    .itemOutputs(safeItemId('12x minecraft:cactus'))
    .EUt(30)
    .duration(2400)

  event.recipes.susy.greenhouse('dw84b3jpmv39ro') // remapped from original line 702
    .notConsumable(safeItemId('3x minecraft:dye'))
    .notConsumable(safeItemId('3x minecraft:log'))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(safeItemId('2x susy:fertilizer'))
    .itemOutputs(safeItemId('3x minecraft:dye'))
    .EUt(30)
    .duration(2400)

  event.recipes.susy.greenhouse('2aynneiqmwwn8a') // remapped from original line 714
    .notConsumable(safeItemId('3x minecraft:dye'))
    .notConsumable(safeItemId('3x minecraft:log'))
    .circuit(2)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:pesticide', 500))
    .itemInputs(safeItemId('2x susy:fertilizer'))
    .itemOutputs(safeItemId('3x minecraft:dye'))
    .EUt(30)
    .duration(2400)

  event.recipes.susy.greenhouse('nmnqrk7mlh15kn') // remapped from original line 727
    .notConsumable(safeItemId('1x minecraft:reeds'))
    .notConsumable(safeItemId('1x minecraft:sand'))
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(safeItemId('2x susy:fertilizer'))
    .itemOutputs(safeItemId('40x minecraft:reeds'))
    .EUt(30)
    .duration(2400)

  event.recipes.susy.greenhouse('a4ggrshjda56ji') // remapped from original line 738
    .notConsumable(safeItemId('1x minecraft:wheat_seeds'))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(safeItemId('2x susy:fertilizer'))
    .itemOutputs(safeItemId('25x minecraft:wheat_seeds'))
    .itemOutputs(safeItemId('30x minecraft:wheat'))
    .EUt(30)
    .duration(1200)

  event.recipes.susy.greenhouse('ouue8eky1tgjrw') // remapped from original line 750
    .notConsumable(safeItemId('1x minecraft:wheat_seeds'))
    .circuit(2)
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:weed_killer', 500))
    .itemInputs(safeItemId('2x susy:fertilizer'))
    .itemOutputs(safeItemId('50x minecraft:wheat_seeds'))
    .itemOutputs(safeItemId('60x minecraft:wheat'))
    .EUt(30)
    .duration(1200)

  event.recipes.susy.greenhouse('x9zo1rymobjczq') // remapped from original line 763
    .notConsumable(safeItemId('1x minecraft:wheat_seeds'))
    .circuit(3)
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:pesticide', 500))
    .itemInputs(safeItemId('2x susy:fertilizer'))
    .itemOutputs(safeItemId('50x minecraft:wheat_seeds'))
    .itemOutputs(safeItemId('60x minecraft:wheat'))
    .EUt(30)
    .duration(1200)

  event.recipes.susy.greenhouse('usapxczm47tbrc') // remapped from original line 776
    .notConsumable(safeItemId('1x minecraft:wheat_seeds'))
    .circuit(4)
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:pesticide', 500))
    .inputFluids(safeFluidOf('susy:weed_killer', 500))
    .itemInputs(safeItemId('2x susy:fertilizer'))
    .itemOutputs(safeItemId('75x minecraft:wheat_seeds'))
    .itemOutputs(safeItemId('90x minecraft:wheat'))
    .EUt(30)
    .duration(1200)

  event.recipes.susy.greenhouse('accva78hpdiu9f') // remapped from original line 790
    .notConsumable(safeItemId('1x minecraft:brown_mushroom'))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:cool_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(safeItemId('2x susy:fertilizer'))
    .itemOutputs(safeItemId('10x minecraft:brown_mushroom'))
    .EUt(30)
    .duration(1200)

  event.recipes.susy.greenhouse('dltwphoz9fv6vs') // remapped from original line 801
    .notConsumable(safeItemId('1x minecraft:brown_mushroom'))
    .circuit(2)
    .inputFluids(safeFluidOf('susy:cool_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:weed_killer', 500))
    .itemInputs(safeItemId('2x susy:fertilizer'))
    .itemOutputs(safeItemId('20x minecraft:brown_mushroom'))
    .EUt(30)
    .duration(1200)

  event.recipes.susy.greenhouse('zsjtwg8wgs5fvo') // remapped from original line 813
    .notConsumable(safeItemId('1x minecraft:red_mushroom'))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:cool_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(safeItemId('2x susy:fertilizer'))
    .itemOutputs(safeItemId('10x minecraft:red_mushroom'))
    .EUt(30)
    .duration(1200)

  event.recipes.susy.greenhouse('flw1tmbxwupq12') // remapped from original line 824
    .notConsumable(safeItemId('1x minecraft:red_mushroom'))
    .circuit(2)
    .inputFluids(safeFluidOf('susy:cool_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:weed_killer', 500))
    .itemInputs(safeItemId('2x susy:fertilizer'))
    .itemOutputs(safeItemId('20x minecraft:red_mushroom'))
    .EUt(30)
    .duration(1200)

  event.recipes.susy.greenhouse('z6jokbb7nw0zze') // remapped from original line 837
    .notConsumable(input)
    .circuit(1)
    .inputFluids(safeFluidOf('susy:asType', 1))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(safeItemId('2x susy:fertilizer'))
    .itemOutputs(output * multiplier)
    .EUt(30)
    .duration(1200)

  event.recipes.susy.greenhouse('d5rxh00839yqei') // remapped from original line 848
    .notConsumable(input)
    .circuit(2)
    .inputFluids(safeFluidOf('susy:asType', 1))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:weed_killer', 500))
    .itemInputs(safeItemId('2x susy:fertilizer'))
    .itemOutputs(output * (multiplier * 2))
    .EUt(30)
    .duration(1200)

  event.recipes.susy.greenhouse('nw2mhrklgltnxg') // remapped from original line 860
    .notConsumable(input)
    .circuit(3)
    .inputFluids(safeFluidOf('susy:asType', 1))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:pesticide', 500))
    .itemInputs(safeItemId('2x susy:fertilizer'))
    .itemOutputs(output * (multiplier * 2))
    .EUt(30)
    .duration(1200)

  event.recipes.susy.greenhouse('dw2h62ebu33nsb') // remapped from original line 872
    .notConsumable(input)
    .circuit(4)
    .inputFluids(safeFluidOf('susy:asType', 1))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:pesticide', 500))
    .inputFluids(safeFluidOf('susy:weed_killer', 500))
    .itemInputs(safeItemId('2x susy:fertilizer'))
    .itemOutputs(output * (multiplier * 3))
    .EUt(30)
    .duration(1200)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import gregtech.api.recipes.ModHandler;
  // import gregtech.api.unification.material.Materials;
  // import gregtech.api.unification.ore.OrePrefix;
  // import gregtech.api.unification.stack.UnificationEntry;
  // MIXER = recipemap('mixer')
  // FLUID_HEATER = recipemap('fluid_heater')
  // CENTRIFUGE = recipemap('centrifuge')
  // GREENHOUSE = recipemap('greenhouse')
  // COMPRESSOR = recipemap('compressor')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // PYROLYSE_OVEN = recipemap('pyrolyse_oven')
  // EXTRUDER = recipemap('extruder')
  // EXTRACTOR = recipemap('extractor')
  // MACERATOR = recipemap('macerator')
  // crafting.addShaped("susy:cotton_seeds", metaitem('seed.cotton') * 2, [
  //         [null, null, null],
  //         [null, null, null],
  //         [null, metaitem('gregtechfoodoption:seed.unknown'), metaitem('gregtechfoodoption:seed.unknown')]
  // ])
  // crafting.addShapeless('string.cotton', item('minecraft:string'), [
  //     metaitem('threadCotton')
  // ]) 
  // def generateGreenhouseTreeRecipes(String gasType, sapling, leaves, wood) {
  // }
  // generateGreenhouseTreeRecipes('greenhouse_gases', item('biomesoplenty:sapling_0', 1), item('biomesoplenty:leaves_0', 1), item('minecraft:log2', 1))
  // generateGreenhouseTreeRecipes('greenhouse_gases', item('biomesoplenty:sapling_0', 0), item('biomesoplenty:leaves_0', 0), item('minecraft:log', 2))
  // generateGreenhouseTreeRecipes('greenhouse_gases', item('biomesoplenty:sapling_0', 3), item('biomesoplenty:leaves_0', 11), item('biomesoplenty:log_1', 5))
  // generateGreenhouseTreeRecipes('greenhouse_gases', item('biomesoplenty:sapling_0', 4), item('biomesoplenty:leaves_1', 8), item('biomesoplenty:log_0', 6))
  // generateGreenhouseTreeRecipes('greenhouse_gases', item('biomesoplenty:sapling_0', 5), item('biomesoplenty:leaves_1', 9), item('biomesoplenty:log_4', 5))
  // generateGreenhouseTreeRecipes('greenhouse_gases', item('biomesoplenty:sapling_0', 6), item('biomesoplenty:leaves_1', 10), item('biomesoplenty:log_0', 7))
  // generateGreenhouseTreeRecipes('greenhouse_gases', item('biomesoplenty:sapling_0', 7), item('biomesoplenty:leaves_1', 11), item('biomesoplenty:log_1', 4))
  // generateGreenhouseTreeRecipes('greenhouse_gases', item('biomesoplenty:sapling_1', 0), item('biomesoplenty:leaves_2', 8), item('minecraft:log'))
  // generateGreenhouseTreeRecipes('greenhouse_gases', item('biomesoplenty:sapling_1', 1), item('biomesoplenty:leaves_2', 1), item('biomesoplenty:log_0', 5))
  // generateGreenhouseTreeRecipes('greenhouse_gases', item('biomesoplenty:sapling_1', 2), item('biomesoplenty:leaves_2', 10), item('biomesoplenty:log_0', 5))
  // generateGreenhouseTreeRecipes('greenhouse_gases', item('biomesoplenty:sapling_1', 3), item('biomesoplenty:leaves_2', 3), item('minecraft:log'))
  // generateGreenhouseTreeRecipes('greenhouse_gases', item('biomesoplenty:sapling_1', 5), item('biomesoplenty:leaves_3', 1), item('minecraft:log'))
  // generateGreenhouseTreeRecipes('greenhouse_gases', item('biomesoplenty:sapling_1', 6), item('biomesoplenty:leaves_3', 10), item('biomesoplenty:log_3', 4))
  // generateGreenhouseTreeRecipes('greenhouse_gases', item('biomesoplenty:sapling_2', 0), item('biomesoplenty:leaves_4', 8), item('biomesoplenty:log_1', 6))
  // generateGreenhouseTreeRecipes('greenhouse_gases', item('biomesoplenty:sapling_2', 1), item('biomesoplenty:leaves_4', 9), item('biomesoplenty:log_1', 7))
  // generateGreenhouseTreeRecipes('greenhouse_gases', item('biomesoplenty:sapling_2', 2), item('biomesoplenty:leaves_4', 10), item('biomesoplenty:log_2', 4))
  // generateGreenhouseTreeRecipes('greenhouse_gases', item('biomesoplenty:sapling_2', 3), item('biomesoplenty:leaves_4', 11), item('biomesoplenty:log_2', 5))
  // generateGreenhouseTreeRecipes('greenhouse_gases', item('biomesoplenty:sapling_2', 4), item('biomesoplenty:leaves_5', 8), item('biomesoplenty:log_2', 6))
  // generateGreenhouseTreeRecipes('greenhouse_gases', item('biomesoplenty:sapling_2', 5), item('biomesoplenty:leaves_5', 9), item('biomesoplenty:log_3', 5))
  // generateGreenhouseTreeRecipes('greenhouse_gases', item('biomesoplenty:sapling_2', 6), item('biomesoplenty:leaves_5', 10), item('biomesoplenty:log_3', 6))
  // generateGreenhouseTreeRecipes('greenhouse_gases', item('biomesoplenty:sapling_2', 7), item('biomesoplenty:leaves_5', 11), item('biomesoplenty:log_3', 7))
  // def generateGreenhouseCropRecipes(String gasType, input, output, int multiplier) {
  // }
  // generateGreenhouseCropRecipes('greenhouse_gases', item('minecraft:potato'), item('minecraft:potato'), 30)
  // generateGreenhouseCropRecipes('greenhouse_gases', item('minecraft:carrot'), item('minecraft:carrot'), 30)
  // generateGreenhouseCropRecipes('greenhouse_gases', item('minecraft:beetroot_seeds'), item('minecraft:beetroot'), 30)
  // generateGreenhouseCropRecipes('warm_greenhouse_gases', item('minecraft:melon_seeds'), item('minecraft:melon_block'), 10)
  // generateGreenhouseCropRecipes('cool_greenhouse_gases', item('minecraft:pumpkin_seeds'), item('minecraft:pumpkin'), 10)
  // generateGreenhouseCropRecipes('warm_greenhouse_gases', metaitem('gregtechfoodoption:seed.soy'), metaitem('gregtechfoodoption:component.soybean'), 20)
  // generateGreenhouseCropRecipes('greenhouse_gases', metaitem('gregtechfoodoption:seed.tomato'), metaitem('gregtechfoodoption:crop.tomato'), 20)
  // generateGreenhouseCropRecipes('warm_greenhouse_gases', metaitem('gregtechfoodoption:seed.cucumber'), metaitem('gregtechfoodoption:crop.cucumber'), 20)
  // generateGreenhouseCropRecipes('greenhouse_gases', metaitem('gregtechfoodoption:seed.onion'), metaitem('gregtechfoodoption:crop.onion'), 20)
  // generateGreenhouseCropRecipes('warm_humid_greenhouse_gases', metaitem('gregtechfoodoption:seed.grape'), metaitem('gregtechfoodoption:food.grapes'), 20)
  // generateGreenhouseCropRecipes('warm_humid_greenhouse_gases', metaitem('gregtechfoodoption:seed.coffee'), metaitem('gregtechfoodoption:seed.coffee'), 20)
  // generateGreenhouseCropRecipes('greenhouse_gases', metaitem('gregtechfoodoption:seed.pea'), metaitem('gregtechfoodoption:seed.pea'), 20)
  // generateGreenhouseCropRecipes('greenhouse_gases', metaitem('gregtechfoodoption:seed.bean'), metaitem('gregtechfoodoption:seed.bean'), 20)
  // generateGreenhouseCropRecipes('cool_humid_greenhouse_gases', metaitem('gregtechfoodoption:seed.horseradish'), metaitem('gregtechfoodoption:component.horseradish'), 20)
  // generateGreenhouseCropRecipes('warm_dry_greenhouse_gases', metaitem('gregtechfoodoption:seed.oregano'), metaitem('gregtechfoodoption:component.oregano'), 20)
  // generateGreenhouseCropRecipes('cool_greenhouse_gases', metaitem('gregtechfoodoption:seed.garlic'), metaitem('gregtechfoodoption:seed.garlic'), 20)
  // generateGreenhouseCropRecipes('warm_humid_greenhouse_gases', metaitem('gregtechfoodoption:seed.basil'), metaitem('gregtechfoodoption:component.basil'), 20)
  // generateGreenhouseCropRecipes('warm_humid_greenhouse_gases', metaitem('gregtechfoodoption:seed.aubergine'), metaitem('gregtechfoodoption:crop.aubergine'), 20)
  // generateGreenhouseCropRecipes('warm_greenhouse_gases', metaitem('gregtechfoodoption:component.corn.ear'), metaitem('gregtechfoodoption:component.corn.ear'), 20)
  // generateGreenhouseCropRecipes('greenhouse_gases', metaitem('gregtechfoodoption:seed.artichoke'), metaitem('gregtechfoodoption:component.artichoke'), 20)
  // generateGreenhouseCropRecipes('warm_humid_greenhouse_gases', metaitem('gregtechfoodoption:component.black_pepper'), metaitem('gregtechfoodoption:component.black_pepper'), 20)
  // generateGreenhouseCropRecipes('warm_humid_greenhouse_gases', metaitem('gregtechfoodoption:component.rice'), metaitem('gregtechfoodoption:component.rice'), 20)
  // generateGreenhouseCropRecipes('warm_humid_greenhouse_gases', metaitem('seed.cotton'), metaitem('crop.cotton'), 20)
});