ServerEvents.recipes(event => {

  event.recipes.susy.fluid_compressor('wh4a1tc9rv3nj6') // remapped from original line 24
    .inputFluids(safeFluidOf('gtceu:air', 6000))
    .outputFluids(safeFluidOf('susy:compressed_air', 1000))
    .duration(31)
    .EUt(voltAmps[1])

  event.recipes.susy.heat_exchanger('y5tqrmkdct7vpt') // remapped from original line 32
    .inputFluids(safeFluidOf('susy:liquid_nitrogen', 10))
    .inputFluids(safeFluidOf('minecraft:water', 1280))
    .outputFluids(safeFluidOf('gtceu:nitrogen', 640))
    .outputFluids(safeFluidOf('susy:cold_water', 1280))
    .duration(31)

  event.recipes.susy.heat_exchanger('hy9xm7yx6l5od5') // remapped from original line 40
    .inputFluids(safeFluidOf('susy:purified_waste_gaseous_nitrogen', 640))
    .inputFluids(safeFluidOf('minecraft:water', 1280))
    .outputFluids(safeFluidOf('gtceu:nitrogen', 640))
    .outputFluids(safeFluidOf('susy:cold_water', 1280))
    .duration(5)

  event.recipes.susy.CONTACT_COOLER('xdgajwpz75pwmu') // remapped from original line 49
    .inputFluids(safeFluidOf('susy:compressed_air', 1000))
    .inputFluids(safeFluidOf('susy:cold_water', 640))
    .outputFluids(safeFluidOf('susy:chilled_air', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 640))
    .duration(31)
    .EUt(voltAmps[1])

  event.recipes.gtceu.sifter('1zxzmubzn58xoa') // remapped from original line 59
    .itemInputs('1x #forge:dusts/molecular_sieve')
    .inputFluids(safeFluidOf('gtceu:air', 12000))
    .outputFluids(safeFluidOf('susy:decarburized_air', 12000))
    .itemOutputs('1x #forge:dusts/dirty_molecular_sieve')
    .duration(4)
    .EUt(voltAmps[3])

  event.recipes.susy.vacuum_chamber('fvadsxxw6ev9di') // remapped from original line 69
    .itemInputs('1x #forge:dusts/dirty_molecular_sieve')
    .notConsumable('1x #forge:springs/kanthal')
    .itemOutputs('1x #forge:dusts/molecular_sieve')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 20))
    .duration(4)
    .EUt(voltAmps[1])

  event.recipes.susy.heat_exchanger('p8zp8jvyentsxy') // remapped from original line 78
    .inputFluids(safeFluidOf('susy:chilly_waste_gaseous_nitrogen', 640))
    .inputFluids(safeFluidOf('susy:hp_decarburized_air', 1000))
    .outputFluids(safeFluidOf('susy:waste_gaseous_nitrogen', 640))
    .outputFluids(safeFluidOf('susy:cold_hp_decarburized_air', 1000))
    .duration(1)

  event.recipes.gtceu.sifter('rd5zfuimpoispf') // remapped from original line 87
    .itemInputs('1x #forge:dusts/molecular_sieve')
    .inputFluids(safeFluidOf('gtceu:nether_air', 14000))
    .outputFluids(safeFluidOf('susy:decarburized_air', 12000))
    .itemOutputs('1x #forge:dusts/nether_molecular_sieve')
    .duration(4)
    .EUt(voltAmps[3])

  event.recipes.susy.vacuum_chamber('6ztdgf6tlpwg92') // remapped from original line 96
    .itemInputs('1x #forge:dusts/nether_molecular_sieve')
    .notConsumable('1x #forge:springs/kanthal')
    .itemOutputs('1x #forge:dusts/molecular_sieve')
    .outputFluids(safeFluidOf('susy:heavy_nether_gases', 2000))
    .duration(4)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillation_tower('6wbfjxyt8gdz6u') // remapped from original line 105
    .inputFluids(safeFluidOf('susy:heavy_nether_gases', 2000))
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 500))
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 500))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .duration(100)
    .EUt(64)

  event.recipes.susy./*FLUID_COMPRESSOR('bwqllbajzqgnyz') // remapped from original line 115
    .inputFluids(safeFluidOf('susy:purified_air', 1000))
    .outputFluids(safeFluidOf('susy:boosted_air', 300))
    .duration(114)
    .EUt(voltAmps[1])

  event.recipes.susy.TAPPED_OFF_HEAT_EXCHANGER('zjdgxzn1zkwr9r') // remapped from original line 123
    .inputFluids(safeFluidOf('susy:boosted_air', 300))
    .inputFluids(safeFluidOf('susy:purified_air', 500))
    .outputFluids(safeFluidOf('susy:chilled_boosted_air', 150))
    .outputFluids(safeFluidOf('susy:partially_liquefied_air', 150))
    .outputFluids(safeFluidOf('susy:gaseous_air_feedstock', 500))
    .duration(5)

  event.recipes.susy.heat_exchanger('2w4pdpf8u5b5oq') // remapped from original line 132
    .inputFluids(safeFluidOf('susy:purified_air', 500))
    .inputFluids(safeFluidOf('susy:untreated_liquid_oxygen', 15))
    .outputFluids(safeFluidOf('susy:gaseous_air_feedstock', 500))
    .outputFluids(safeFluidOf('gtceu:oxygen', 720))
    .duration(5)

  event.recipes.susy.heat_exchanger('zwngwdb2tnitm6') // remapped from original line 140
    .inputFluids(safeFluidOf('susy:untreated_liquid_oxygen', 10))
    .inputFluids(safeFluidOf('susy:chilly_waste_gaseous_nitrogen', 320))
    .outputFluids(safeFluidOf('gtceu:oxygen', 480))
    .outputFluids(safeFluidOf('susy:waste_gaseous_nitrogen', 320))
    .duration(5)

  event.recipes.susy.heat_exchanger('jcrezonyn1o4mv') // remapped from original line 148
    .inputFluids(safeFluidOf('susy:chilly_waste_gaseous_nitrogen', 320))
    .inputFluids(safeFluidOf('susy:untreated_liquid_nitrogen', 25))
    .outputFluids(safeFluidOf('susy:waste_gaseous_nitrogen', 320))
    .outputFluids(safeFluidOf('gtceu:nitrogen', 1200))
    .duration(5)

  event.recipes.susy.heat_exchanger('4ucy8gmerld0ng') // remapped from original line 157
    .inputFluids(safeFluidOf('susy:purified_air', 500))
    .inputFluids(safeFluidOf('gtceu:liquid_oxygen', 10))
    .outputFluids(safeFluidOf('susy:gaseous_air_feedstock', 500))
    .outputFluids(safeFluidOf('gtceu:oxygen', 640))
    .duration(5)

  event.recipes.susy.fluid_decompressor('bruvzc9vabzjuh') // remapped from original line 166
    .inputFluids(safeFluidOf('susy:chilled_boosted_air', 150))
    .outputFluids(safeFluidOf('susy:gaseous_air_feedstock', 500))
    .duration(114)
    .EUt(voltAmps[1])

  event.recipes.susy.phase_separator('aqhsnsd1nhva4r') // remapped from original line 173
    .inputFluids(safeFluidOf('susy:partially_liquified_air', 150))
    .outputFluids(safeFluidOf('susy:liquid_air_feedstock', 50))
    .outputFluids(safeFluidOf('susy:gaseous_air_feedstock', 100))
    .duration(114)

  event.recipes.susy.high_pressure_cryogenic_distillation('pardqmdqcqe636') // remapped from original line 181
    .circuit(1)
    .inputFluids(safeFluidOf('susy:liquid_decarburized_air', 100))
    .inputFluids(safeFluidOf('susy:cold_hp_decarburized_air', 5600))
    .outputFluids(safeFluidOf('susy:oxygen_rich_liquid', 50))
    .outputFluids(safeFluidOf('susy:oxygen_rich_gas', 200))
    .outputFluids(safeFluidOf('susy:nitrogen_rich_gas', 1400))
    .duration(20)
    .EUt(voltAmps[3])

  event.recipes.susy.bath_condenser('1fkubt9ku3tsz7') // remapped from original line 193
    .inputFluids(safeFluidOf('susy:nitrogen_rich_gas', 200))
    .outputFluids(safeFluidOf('susy:untreated_liquid_nitrogen', 25))
    .duration(1)

  event.recipes.susy.high_pressure_cryogenic_distillation('hzomtqmpmuarja') // remapped from original line 199
    .circuit(2)
    .inputFluids(safeFluidOf('susy:untreated_liquid_nitrogen', 25))
    .inputFluids(safeFluidOf('susy:liquid_decarburized_air', 100))
    .inputFluids(safeFluidOf('susy:cold_hp_decarburized_air', 5600))
    .outputFluids(safeFluidOf('susy:oxygen_rich_liquid', 50))
    .outputFluids(safeFluidOf('susy:oxygen_rich_gas', 200))
    .outputFluids(safeFluidOf('susy:nitrogen_rich_gas', 1600))
    .duration(5)
    .EUt(voltAmps[3])

  event.recipes.susy.low_pressure_cryogenic_distillation('e2rwhhmgboahkw') // remapped from original line 213
    .circuit(1)
    .inputFluids(safeFluidOf('susy:oxygen_rich_liquid', 50))
    .inputFluids(safeFluidOf('susy:oxygen_rich_gas', 800))
    .inputFluids(safeFluidOf('susy:nitrogen_rich_gas', 3200))
    .outputFluids(safeFluidOf('susy:untreated_liquid_oxygen', 50))
    .outputFluids(safeFluidOf('susy:cold_waste_gaseous_nitrogen', 5440))
    .outputFluids(safeFluidOf('susy:argon_rich_gas', 200))
    .duration(20)
    .EUt(voltAmps[3])

  event.recipes.susy.heat_exchanger('rfihubmfdun0qa') // remapped from original line 226
    .circuit(2)
    .inputFluids(safeFluidOf('susy:cold_waste_gaseous_nitrogen', 640))
    .inputFluids(safeFluidOf('susy:untreated_liquid_nitrogen', 50))
    .outputFluids(safeFluidOf('susy:chilly_waste_gaseous_nitrogen', 640))
    .outputFluids(safeFluidOf('susy:subcooled_liquid_nitrogen', 50))
    .duration(5)

  event.recipes.susy.heat_exchanger('2lfvmkturzh4sc') // remapped from original line 235
    .circuit(2)
    .inputFluids(safeFluidOf('susy:untreated_liquid_nitrogen', 25))
    .inputFluids(safeFluidOf('susy:untreated_liquid_oxygen', 50))
    .outputFluids(safeFluidOf('susy:subcooled_liquid_nitrogen', 25))
    .outputFluids(safeFluidOf('susy:liquid_oxygen_product', 50))
    .duration(5)

  event.recipes.susy.low_pressure_cryogenic_distillation('zdiezkbhghc8hw') // remapped from original line 244
    .circuit(2)
    .inputFluids(safeFluidOf('susy:oxygen_rich_liquid', 50))
    .inputFluids(safeFluidOf('susy:oxygen_rich_gas', 800))
    .inputFluids(safeFluidOf('susy:nitrogen_rich_gas', 3200))
    .inputFluids(safeFluidOf('susy:subcooled_liquid_nitrogen', 50))
    .outputFluids(safeFluidOf('susy:untreated_liquid_oxygen', 50))
    .outputFluids(safeFluidOf('susy:cold_waste_gaseous_nitrogen', 640))
    .outputFluids(safeFluidOf('susy:liquid_nitrogen', 150))
    .outputFluids(safeFluidOf('susy:argon_rich_gas', 200))
    .duration(5)
    .EUt(voltAmps[3])

  event.recipes.gtceu.centrifuge('svoflkzxuug35m') // remapped from original line 258
    .inputFluids(safeFluidOf('susy:liquid_nitrogen_product', 100))
    .outputFluids(safeFluidOf('susy:liquid_nitrogen', 75))
    .duration(1)
    .EUt(voltAmps[0])

  event.recipes.gtceu.centrifuge('cdltdqeaqovf4o') // remapped from original line 265
    .inputFluids(safeFluidOf('susy:liquid_oxygen_product', 100))
    .outputFluids(safeFluidOf('gtceu:liquid_oxygen', 75))
    .duration(1)
    .EUt(voltAmps[0])

  event.recipes.susy.high_pressure_cryogenic_distillation('xutwo2dbsncpf1') // remapped from original line 275
    .circuit(3)
    .inputFluids(safeFluidOf('susy:untreated_liquid_nitrogen', 25))
    .inputFluids(safeFluidOf('susy:liquid_decarburized_air', 100))
    .inputFluids(safeFluidOf('susy:cold_hp_decarburized_air', 5600))
    .outputFluids(safeFluidOf('susy:oxygen_rich_liquid', 75))
    .outputFluids(safeFluidOf('susy:nitrogen_rich_gas', 1600))
    .duration(5)
    .EUt(voltAmps[3])

  event.recipes.susy.single_column_cryogenic_distillation('kqrmtn0fufiywn') // remapped from original line 287
    .circuit(1)
    .inputFluids(safeFluidOf('susy:argon_rich_gas', 800))
    .outputFluids(safeFluidOf('susy:crude_argon_vapor', 80))
    .outputFluids(safeFluidOf('susy:oxygen_rich_liquid', 90))
    .duration(20)
    .EUt(voltAmps[3])

  event.recipes.susy.single_column_cryogenic_distillation('glevlgn8h9wieq') // remapped from original line 297
    .circuit(2)
    .inputFluids(safeFluidOf('susy:liquid_crude_argon', 5))
    .inputFluids(safeFluidOf('susy:argon_rich_gas', 400))
    .outputFluids(safeFluidOf('susy:crude_argon_vapor', 120))
    .outputFluids(safeFluidOf('susy:oxygen_rich_liquid', 90))
    .duration(10)
    .EUt(voltAmps[3])

  event.recipes.susy.bath_condenser('smlmsmtmnihxmy') // remapped from original line 308
    .inputFluids(safeFluidOf('susy:subcooled_oxygen_rich_liquid', 150))
    .inputFluids(safeFluidOf('susy:crude_argon_vapor', 60))
    .outputFluids(safeFluidOf('susy:liquid_crude_argon', 15))
    .outputFluids(safeFluidOf('susy:oxygen_rich_liquid', 100))
    .outputFluids(safeFluidOf('susy:oxygen_rich_gas', 400))
    .duration(1)

  event.recipes.gtceu.mixer('k3kfzskp6h4mcs') // remapped from original line 318
    .itemInputs('17x #forge:dusts/ammonium_hexachloroplatinate')
    .inputFluids(safeFluidOf('gtceu:phosphoric_acid', 1000))
    .outputFluids(safeFluidOf('susy:platinum_precursor_solution', 1000))
    .duration(100)
    .EUt(voltAmps[3])

  event.recipes.susy.sintering_oven('pn31v8kroqql4a') // remapped from original line 326
    .itemInputs('5x #forge:dusts/alumina')
    .inputFluids(safeFluidOf('susy:platinum_precursor_solution', 1000))
    .itemOutputs('1x #forge:dusts/supported_platinum')
    .outputFluids(safeFluidOf('gtceu:phosphoric_acid', 1000))
    .duration(100)
    .EUt(voltAmps[3])

  event.recipes.susy.fixed_bed_reactor('60c3tshi2ueql9') // remapped from original line 335
    .inputFluids(safeFluidOf('susy:liquid_crude_argon', 50))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 24))
    .notConsumable('1x #forge:catalysts/bed_supported_platinum')
    .chancedOutput('1x #forge:dusts/ice', 120, 0)
    .outputFluids(safeFluidOf('susy:liquid_deoxygenated_argon', 50))
    .duration(20)
    .EUt(voltAmps[3])

  event.recipes.susy.single_column_cryogenic_distillation('cza9xstlfnssxk') // remapped from original line 347
    .circuit(1)
    .inputFluids(safeFluidOf('susy:liquid_deoxygenated_argon', 200))
    .outputFluids(safeFluidOf('susy:cold_waste_gaseous_nitrogen', 16))
    .outputFluids(safeFluidOf('susy:liquid_argon_product', 200))
    .duration(200)
    .EUt(voltAmps[3])

  event.recipes.susy.bath_condenser('8sd70ktplwq0h7') // remapped from original line 357
    .inputFluids(safeFluidOf('susy:cold_waste_gaseous_nitrogen', 8))
    .outputFluids(safeFluidOf('susy:liquid_waste_nitrogen', 1))
    .duration(1)

  event.recipes.susy.single_column_cryogenic_distillation('glwhisdvoibsh8') // remapped from original line 363
    .circuit(2)
    .inputFluids(safeFluidOf('susy:liquid_deoxygenated_argon', 200))
    .inputFluids(safeFluidOf('gtceu:argon', 400))
    .inputFluids(fluid('liquid_waste_nitrogen'))
    .outputFluids(safeFluidOf('susy:cold_waste_gaseous_nitrogen', 24))
    .outputFluids(safeFluidOf('susy:liquid_argon_product', 250))
    .duration(83)
    .EUt(voltAmps[3])

  event.recipes.susy.heat_exchanger('m0ewhciqyhzgaj') // remapped from original line 375
    .inputFluids(safeFluidOf('susy:oxygen_rich_liquid', 75))
    .inputFluids(safeFluidOf('susy:liquid_nitrogen', 150))
    .outputFluids(safeFluidOf('susy:subcooled_oxygen_rich_liquid', 75))
    .outputFluids(safeFluidOf('gtceu:nitrogen', 9600))
    .duration(5)

  event.recipes.susy.heat_exchanger('5tjjghsdxvlg0s') // remapped from original line 384
    .inputFluids(safeFluidOf('susy:oxygen_rich_liquid', 75))
    .inputFluids(safeFluidOf('susy:liquid_argon_product', 5))
    .outputFluids(safeFluidOf('susy:subcooled_oxygen_rich_liquid', 75))
    .outputFluids(safeFluidOf('susy:partially_liquefied_argon', 18))
    .duration(5)

  event.recipes.susy.phase_separator('3vcc9lnrxwpclv') // remapped from original line 392
    .inputFluids(safeFluidOf('susy:partially_liquefied_argon', 450))
    .outputFluids(safeFluidOf('gtceu:argon', 400))
    .outputFluids(safeFluidOf('susy:liquid_argon_product', 50))
    .duration(29)
    .EUt(voltAmps[3])

  event.recipes.susy.low_pressure_cryogenic_distillation('exoeaokchfdlke') // remapped from original line 401
    .circuit(3)
    .inputFluids(safeFluidOf('susy:oxygen_rich_liquid', 100))
    .inputFluids(safeFluidOf('susy:oxygen_rich_gas', 1600))
    .inputFluids(safeFluidOf('susy:nitrogen_rich_gas', 6400))
    .inputFluids(safeFluidOf('susy:subcooled_liquid_nitrogen', 100))
    .outputFluids(safeFluidOf('susy:untreated_liquid_oxygen', 105))
    .outputFluids(safeFluidOf('susy:cold_waste_gaseous_nitrogen', 1280))
    .outputFluids(safeFluidOf('susy:liquid_nitrogen_product', 300))
    .outputFluids(safeFluidOf('susy:argon_rich_gas', 400))
    .duration(5)
    .EUt(voltAmps[3])

  event.recipes.susy.heat_exchanger('4jk6vp4eiqrivn') // remapped from original line 416
    .circuit(1)
    .inputFluids(safeFluidOf('susy:cold_waste_gaseous_nitrogen', 1280))
    .inputFluids(safeFluidOf('susy:untreated_liquid_nitrogen', 100))
    .outputFluids(safeFluidOf('susy:chilly_waste_gaseous_nitrogen', 1280))
    .outputFluids(safeFluidOf('susy:subcooled_liquid_nitrogen', 100))
    .duration(5)

  event.recipes.susy.heat_exchanger('7v0xm7oe1o24gw') // remapped from original line 425
    .circuit(1)
    .inputFluids(safeFluidOf('susy:untreated_liquid_nitrogen', 100))
    .inputFluids(safeFluidOf('susy:untreated_liquid_oxygen', 105))
    .outputFluids(safeFluidOf('susy:subcooled_liquid_nitrogen', 100))
    .outputFluids(safeFluidOf('susy:liquid_oxygen_product', 105))
    .duration(5)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // SIFTER = recipemap('sifter')
  // MIXER = recipemap('mixer')
  // VACUUM_CHAMBER = recipemap('vacuum_chamber')
  // FLUID_COMPRESSOR = recipemap('fluid_compressor')
  // FLUID_DECOMPRESSOR = recipemap('fluid_decompressor')
  // HEAT_EXCHANGER = recipemap('heat_exchanger')
  // PHASE_SEPARATOR = recipemap('phase_separator')
  // LOW_PRESSURE_DISTILLATION_TOWER = recipemap('low_pressure_cryogenic_distillation')
  // HIGH_PRESSURE_DISTILLATION_TOWER = recipemap('high_pressure_cryogenic_distillation')
  // SINGLE_COLUMN_CRYOGENIC_DISTILLATION_PLANT = recipemap('single_column_cryogenic_distillation')
  // BATH_CONDENSER = recipemap('bath_condenser')
  // FBR = recipemap('fixed_bed_reactor')
  // SINTERING_OVEN = recipemap('sintering_oven')
  // CENTRIFUGE = recipemap('centrifuge')
  // FLUID_HEATER = recipemap('fluid_heater')
  // DT = recipemap('distillation_tower')
  //     
});