const voltageTiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv", "max"];
const voltageTiersInt = [8, 32, 128, 512, 2048, 8192, 32768, 131072, 524288, 2097152, 8388608, 33554432, 134217728, 536870912, 2147483647];
const voltAmps = [7, 30, 120, 480, 1920, 7680, 30720, 122880, 491520, 1966080, 7864320, 31457280, 125829120, 503316480, 2013265920];

function safeFluidOf(fluidId, amount) {
    if (Fluid.exists(fluidId)) {
        return Fluid.of(fluidId, amount);
    }
    throw new Error(`Fluid ${fluidId} does not exist.`);
}
function safeItemId(itemIdWithQuantifier) {
    const itemId = itemIdWithQuantifier.split(" ")[1];
    if (Item.exists(itemId)) {
        return itemIdWithQuantifier;
    }
    throw new Error(`ItemId ${itemId} does not exist.`);
}

ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:mixer', input: 'minecraft:dirt' && 'minecraft:sand' && '#forge:dusts/wood' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:mixer', input: 'minecraft:dye' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:assembler', input: 'gregtechfoodoption:cupric_hydrogen_arsenite_dust' && 'gregtech:transparent_casing' && 'susy:gregtechfoodoption:cupric_hydrogen_arsenite_dust'})

  event.recipes.gtceu.extruder('axz0dydegbl1mw') // remapped from original line 35
    .itemInputs(metaitem('crop.cotton') * 20)
    .notConsumable('8x #forge:gears/steel')
    .itemOutputs(metaitem('seed.cotton') * 5)
    .itemOutputs(metaitem('stem.cotton') * 5)
    .itemOutputs('40x #forge:fibers/cotton')
    .EUt(7)
    .duration(80)

  event.recipes.gtceu.extractor('u1gw1ybajssddo') // remapped from original line 45
    .itemInputs(metaitem('seed.cotton'))
    .outputFluids(safeFluidOf('gtceu:seed_oil', 10))
    .EUt(2)
    .duration(32)

  event.recipes.gtceu.macerator('5bkwtl2pzbgdyr') // remapped from original line 56
    .itemInputs('2x #forge:threads/cotton')
    .itemOutputs('1x #forge:dusts/cellulose')
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.gtceu.chemical_bath('ltgve83xwjt2fk') // remapped from original line 65
    .itemInputs(safeItemId('1x gregtech:transparent_casing'))
    .inputFluids(safeFluidOf('susy:dye_green', 144))
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_glass_casing'))
    .EUt(7)
    .duration(40)

  event.recipes.gtceu.mixer('xgew6gn7wwzumy') // remapped from original line 75
    .itemInputs('1x #forge:nutrients/nitrogen')
    .itemInputs('1x #forge:nutrients/potassium')
    .itemInputs('1x #forge:nutrients/phosphorous')
    .itemOutputs(metaitem('fertilizer') * 5)
    .EUt(30)
    .duration(100)

  event.recipes.gtceu.mixer('4atushpbn9qluq') // remapped from original line 84
    .itemInputs('2x #forge:dusts/ammonium_dihydrogen_phosphate')
    .itemInputs('1x #forge:nutrients/potassium')
    .itemOutputs(metaitem('fertilizer') * 5)
    .EUt(30)
    .duration(100)

  event.recipes.gtceu.mixer('jvy4yxdcpcotux') // remapped from original line 92
    .itemInputs('2x #forge:dusts/saltpeter')
    .itemInputs('1x #forge:nutrients/phosphorous')
    .itemOutputs(metaitem('fertilizer') * 5)
    .EUt(30)
    .duration(100)

  event.recipes.gtceu.mixer('o99ftdqsxvi1zw') // remapped from original line 100
    .itemInputs(metaitem('bio_chaff') * 2)
    .itemInputs('1x #forge:nutrients/phosphorous')
    .itemOutputs(metaitem('fertilizer') * 5)
    .EUt(30)
    .duration(100)

  event.recipes.gtceu.mixer('gdo7bykrrzeafs') // remapped from original line 108
    .inputFluids(safeFluidOf('gtceu:fermented_biomass', 1000))
    .itemInputs('1x #forge:nutrients/phosphorous')
    .itemOutputs(metaitem('fertilizer') * 5)
    .EUt(30)
    .duration(100)

  event.recipes.gtceu.mixer('wwr4auanxkirpq') // remapped from original line 116
    .itemInputs(metaitem('fertilizer') * 2)
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:gtfo_fertilizer_solution', 1000))
    .EUt(30)
    .duration(60)

  event.recipes.gtceu.compressor('ymw0oj92opdnre') // remapped from original line 126
    .itemInputs('16x #forge:trees/leaves')
    .itemOutputs(metaitem('plant_ball'))
    .EUt(2)
    .duration(300)

  event.recipes.gtceu.pyrolyse_oven('1tj6ecb2rtmeyd') // remapped from original line 133
    .itemInputs(safeItemId('24x minecraft:sugar'))
    .itemOutputs('6x #forge:dusts/carbon')
    .outputFluids(safeFluidOf('gtceu:steam', 6000))
    .duration(320)
    .EUt(64)

  event.recipes.gtceu.mixer('hys0y5gfxpgprp') // remapped from original line 143
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 100))
    .inputFluids(safeFluidOf('susy:gtfo_sodium_stearate', 100))
    .inputFluids(safeFluidOf('gtceu:salt_water', 1000))
    .outputFluids(safeFluidOf('susy:weed_killer', 1000))
    .EUt(30)
    .duration(60)

  event.recipes.gtceu.mixer('59nfysxoehszt3') // remapped from original line 152
    .inputFluids(safeFluidOf('gtceu:seed_oil', 100))
    .inputFluids(safeFluidOf('susy:gtfo_sodium_stearate', 100))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:pesticide', 1000))
    .EUt(30)
    .duration(60)

  event.recipes.gtceu.mixer('9kl07vjwfegy8k') // remapped from original line 163
    .inputFluids(safeFluidOf('gtceu:air', 1000))
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 100))
    .outputFluids(safeFluidOf('susy:greenhouse_gases', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.fluid_heater('w7gi5jzk2bti0v') // remapped from original line 171
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 1000))
    .outputFluids(safeFluidOf('susy:warm_greenhouse_gases', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.centrifuge('pjxxmgoscez40s') // remapped from original line 178
    .inputFluids(safeFluidOf('minecraft:water', 40))
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 1000))
    .outputFluids(safeFluidOf('susy:cool_greenhouse_gases', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.mixer('ihaljrafbuy1lz') // remapped from original line 186
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .outputFluids(safeFluidOf('susy:humid_greenhouse_gases', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.mixer('5z2lfr6fiwldan') // remapped from original line 194
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 1000))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 20))
    .outputFluids(safeFluidOf('susy:dry_greenhouse_gases', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.mixer('tuxl3pgdhvjwnc') // remapped from original line 202
    .inputFluids(safeFluidOf('susy:warm_greenhouse_gases', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .outputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.mixer('exaxqhlslzmi2k') // remapped from original line 210
    .inputFluids(safeFluidOf('susy:warm_greenhouse_gases', 1000))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 20))
    .outputFluids(safeFluidOf('susy:warm_dry_greenhouse_gases', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.mixer('6ky3hb71f1ut1e') // remapped from original line 218
    .inputFluids(safeFluidOf('susy:cool_greenhouse_gases', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .outputFluids(safeFluidOf('susy:cool_humid_greenhouse_gases', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.mixer('rmoubjhmxnhw2o') // remapped from original line 226
    .inputFluids(safeFluidOf('susy:cool_greenhouse_gases', 1000))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 20))
    .outputFluids(safeFluidOf('susy:cool_dry_greenhouse_gases', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.mixer('2whpiowt2rzrys') // remapped from original line 236
    .inputFluids(safeFluidOf('gtceu:nitrogen', 780))
    .inputFluids(safeFluidOf('gtceu:oxygen', 220))
    .outputFluids(safeFluidOf('susy:earth_like_air', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.mixer('1eoahhnzjvhtvj') // remapped from original line 244
    .inputFluids(safeFluidOf('susy:earth_like_air', 1000))
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 100))
    .outputFluids(safeFluidOf('susy:greenhouse_gases', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.susy.greenhouse('vcu8owkcrin26i') // remapped from original line 253
    .notConsumable(safeItemId('1x minecraft:sapling'))
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('6x minecraft:log'))
    .itemOutputs(safeItemId('12x minecraft:leaves'))
    .itemOutputs(safeItemId('2x minecraft:sapling'))
    .itemOutputs(safeItemId('1x minecraft:apple'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('q1m9lilddglgml') // remapped from original line 266
    .notConsumable(safeItemId('1x minecraft:sapling', ')))
    .inputFluids(safeFluidOf('susy:cool_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('1x minecraft:log', ')) * 8)
    .itemOutputs(safeItemId('1x minecraft:leaves', ')) * 14)
    .itemOutputs(safeItemId('1x minecraft:sapling', ')) * 2)
    .EUt(30)
    .duration(480)

  event.recipes.susy.greenhouse('n4uk9vkoch2mqn') // remapped from original line 278
    .notConsumable(safeItemId('2x minecraft:sapling', ')))
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('2x minecraft:log', ')) * 6)
    .itemOutputs(safeItemId('2x minecraft:leaves', ')) * 12)
    .itemOutputs(safeItemId('2x minecraft:sapling', ')) * 2)
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('mnnnetmsyn9cha') // remapped from original line 290
    .notConsumable(safeItemId('3x minecraft:sapling', ')))
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 8)
    .itemOutputs(safeItemId('3x minecraft:log', ')) * 24)
    .itemOutputs(safeItemId('3x minecraft:leaves', ')) * 40)
    .itemOutputs(safeItemId('3x minecraft:sapling', ')) * 5)
    .EUt(30)
    .duration(1440)

  event.recipes.susy.greenhouse('qqpxlgbl6luemw') // remapped from original line 302
    .notConsumable(safeItemId('4x minecraft:sapling', ')))
    .inputFluids(safeFluidOf('susy:warm_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('2x minecraft:log2')') * 6)
    .itemOutputs(safeItemId('2x minecraft:leaves2')') * 12)
    .itemOutputs(safeItemId('4x minecraft:sapling', ')) * 2)
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('bh5zolbb8ich0u') // remapped from original line 314
    .notConsumable(safeItemId('5x minecraft:sapling', ')))
    .inputFluids(safeFluidOf('susy:cool_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 8)
    .itemOutputs(safeItemId('2x minecraft:log2', ')', 1) * 24)
    .itemOutputs(safeItemId('2x minecraft:leaves2', ')', 1) * 40)
    .itemOutputs(safeItemId('5x minecraft:sapling', ')) * 5)
    .itemOutputs(safeItemId('2x minecraft:apple'))
    .EUt(30)
    .duration(1440)

  event.recipes.susy.greenhouse('qzm6bvrivo3lho') // remapped from original line 327
    .notConsumable(safeItemId('1x gregtech:rubber_sapling'))
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('6x gregtech:rubber_log'))
    .itemOutputs(safeItemId('12x gregtech:rubber_leaves'))
    .itemOutputs(metaitem('rubber_drop') * 4)
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('8u386kgyqbaacq') // remapped from original line 341
    .notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0')'))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_0')') * 6)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_0')') * 12)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0')') * 2)
    .itemOutputs(safeItemId('4x gregtechfoodoption:food.banana'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('eii9mbtldqjlvx') // remapped from original line 355
    .notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0')'))
    .circuit(2)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:pesticide', 500))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_0')') * 6)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_0')') * 12)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0')') * 2)
    .itemOutputs(safeItemId('8x gregtechfoodoption:food.banana'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('7qptxel76jajya') // remapped from original line 370
    .notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', ')', 2))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_0', ')', 4) * 6)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_0', ')', 4) * 12)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', ')', 2) * 2)
    .itemOutputs(safeItemId('4x gregtechfoodoption:food.orange'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('sjqamk8sxjh6ze') // remapped from original line 384
    .notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', ')', 2))
    .circuit(2)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:pesticide', 500))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_0', ')', 4) * 6)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_0', ')', 4) * 12)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', ')', 2) * 2)
    .itemOutputs(safeItemId('8x gregtechfoodoption:food.orange'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('ab9mneadbue7b5') // remapped from original line 399
    .notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', ')', 4))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_0', ')', 8) * 6)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_0', ')', 8) * 12)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', ')', 4) * 2)
    .itemOutputs(safeItemId('4x gregtechfoodoption:food.mango'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('klflna0kad3gle') // remapped from original line 413
    .notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', ')', 4))
    .circuit(2)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:pesticide', 500))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_0', ')', 8) * 6)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_0', ')', 8) * 12)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', ')', 4) * 2)
    .itemOutputs(safeItemId('8x gregtechfoodoption:food.mango'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('4wpz2xukxvsgti') // remapped from original line 428
    .notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', ')', 6))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_0', 1')', 12) * 6)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_0', 1')', 12) * 12)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', ')', 6) * 2)
    .itemOutputs(safeItemId('4x gregtechfoodoption:food.apricot'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('3w1akgszw2cma9') // remapped from original line 442
    .notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', ')', 6))
    .circuit(2)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:pesticide', 500))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_0', 1')', 12) * 6)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_0', 1')', 12) * 12)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', ')', 6) * 2)
    .itemOutputs(safeItemId('8x gregtechfoodoption:food.apricot'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('g0i3psunzrgwra') // remapped from original line 457
    .notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', ')', 8))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_1')') * 6)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_1')') * 12)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', ')', 8) * 2)
    .itemOutputs(safeItemId('5x gregtechfoodoption:food.lemon'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('ju3hwjm3mivzfc') // remapped from original line 471
    .notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', ')', 8))
    .circuit(2)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:pesticide', 500))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_1')') * 6)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_1')') * 12)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', ')', 8) * 2)
    .itemOutputs(safeItemId('10x gregtechfoodoption:food.lemon'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('pjpyaa4rcilkie') // remapped from original line 486
    .notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', 1')', 10))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_1', ')', 4) * 6)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_1', ')', 4) * 12)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', 1')', 10) * 2)
    .itemOutputs(safeItemId('6x gregtechfoodoption:food.lime'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('psiirzjtwyqydv') // remapped from original line 500
    .notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', 1')', 10))
    .circuit(2)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:pesticide', 500))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_1', ')', 4) * 6)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_1', ')', 4) * 12)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', 1')', 10) * 2)
    .itemOutputs(safeItemId('12x gregtechfoodoption:food.lime'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('hld1sgx69f6yur') // remapped from original line 515
    .notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', 1')', 12))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_1', ')', 8) * 6)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_1', ')', 8) * 12)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', 1')', 12) * 2)
    .itemOutputs(safeItemId('20x gregtechfoodoption:crop.olive'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('jhtjypobgnx54y') // remapped from original line 529
    .notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', 1')', 12))
    .circuit(2)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:pesticide', 500))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_1', ')', 8) * 6)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_1', ')', 8) * 12)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', 1')', 12) * 2)
    .itemOutputs(safeItemId('40x gregtechfoodoption:crop.olive'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('wzvv0fjfbulpkb') // remapped from original line 544
    .notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', 1')', 14))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_1', 1')', 12) * 6)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_1', 1')', 12) * 12)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', 1')', 14) * 2)
    .itemOutputs(safeItemId('20x gregtechfoodoption:crop.olive'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('cup3ece4ootv9e') // remapped from original line 558
    .notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', 1')', 14))
    .circuit(2)
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:pesticide', 500))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_log_1', 1')', 12) * 6)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_leaves_1', 1')', 12) * 12)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_0', 1')', 14) * 2)
    .itemOutputs(safeItemId('40x gregtechfoodoption:crop.olive'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('bg75thiljkotw2') // remapped from original line 573
    .notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_1')'))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('2x gregtechfoodoption:gtfo_log_2')') * 6)
    .itemOutputs(safeItemId('2x gregtechfoodoption:gtfo_leaves_2')') * 12)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_1')') * 2)
    .itemOutputs(safeItemId('10x gregtechfoodoption:component.nutmeg'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('vm3zrvgtqkstwc') // remapped from original line 587
    .notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_1')'))
    .circuit(2)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:pesticide', 500))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('2x gregtechfoodoption:gtfo_log_2')') * 6)
    .itemOutputs(safeItemId('2x gregtechfoodoption:gtfo_leaves_2')') * 12)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_1')') * 2)
    .itemOutputs(safeItemId('20x gregtechfoodoption:component.nutmeg'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('nkhalt8qkuivub') // remapped from original line 602
    .notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_1', ')', 2))
    .circuit(2)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('2x gregtechfoodoption:gtfo_log_2', ')', 4) * 6)
    .itemOutputs(safeItemId('2x gregtechfoodoption:gtfo_leaves_2', ')', 4) * 12)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_1', ')', 2) * 2)
    .itemOutputs(safeItemId('2x gregtechfoodoption:component.coconut'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('n0jjeytwrrbtws') // remapped from original line 616
    .notConsumable(safeItemId('1x gregtechfoodoption:gtfo_sapling_1', ')', 2))
    .circuit(2)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:pesticide', 500))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('2x gregtechfoodoption:gtfo_log_2', ')', 4) * 6)
    .itemOutputs(safeItemId('2x gregtechfoodoption:gtfo_leaves_2', ')', 4) * 12)
    .itemOutputs(safeItemId('1x gregtechfoodoption:gtfo_sapling_1', ')', 2) * 2)
    .itemOutputs(safeItemId('4x gregtechfoodoption:component.coconut'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('7irvqzvuryrdfw') // remapped from original line 632
    .notConsumable(sapling)
    .circuit(1)
    .inputFluids(safeFluidOf('susy:asType', 1))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(wood * 6)
    .itemOutputs(leaves * 12)
    .itemOutputs(sapling * 2)
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('ppakkpds9ik09w') // remapped from original line 646
    .notConsumable(safeItemId('1x biomesoplenty:sapling_0', ')', 2))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 4)
    .itemOutputs(safeItemId('12x biomesoplenty:bamboo'))
    .EUt(30)
    .duration(360)

  event.recipes.susy.greenhouse('pd7gy3k28k5nkp') // remapped from original line 657
    .notConsumable(safeItemId('1x biomesoplenty:sapling_1', ')', 7))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 20000))
    .inputFluids(safeFluidOf('minecraft:water', 20000))
    .itemInputs(metaitem('fertilizer') * 16)
    .itemOutputs(safeItemId('1x biomesoplenty:log_0', ')', 4) * 150)
    .itemOutputs(safeItemId('64x minecraft:leaves'))
    .EUt(30)
    .duration(6000)

  event.recipes.susy.greenhouse('qoobbyai6ar8cq') // remapped from original line 693
    .notConsumable(safeItemId('1x minecraft:cactus'))
    .notConsumable(safeItemId('1x minecraft:sand'))
    .inputFluids(safeFluidOf('susy:warm_dry_greenhouse_gases', 10000))
    .itemOutputs(safeItemId('12x minecraft:cactus'))
    .EUt(30)
    .duration(2400)

  event.recipes.susy.greenhouse('pw5mrvowhppyus') // remapped from original line 702
    .notConsumable(safeItemId('3x minecraft:dye', ')))
    .notConsumable(safeItemId('3x minecraft:log', ')))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 2)
    .itemOutputs(safeItemId('3x minecraft:dye', ')) * 15)
    .EUt(30)
    .duration(2400)

  event.recipes.susy.greenhouse('bh8blkdihtez95') // remapped from original line 714
    .notConsumable(safeItemId('3x minecraft:dye', ')))
    .notConsumable(safeItemId('3x minecraft:log', ')))
    .circuit(2)
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:pesticide', 500))
    .itemInputs(metaitem('fertilizer') * 2)
    .itemOutputs(safeItemId('3x minecraft:dye', ')) * 30)
    .EUt(30)
    .duration(2400)

  event.recipes.susy.greenhouse('86a57zyg2wbzve') // remapped from original line 727
    .notConsumable(safeItemId('1x minecraft:reeds'))
    .notConsumable(safeItemId('1x minecraft:sand'))
    .inputFluids(safeFluidOf('susy:warm_humid_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 2)
    .itemOutputs(safeItemId('40x minecraft:reeds'))
    .EUt(30)
    .duration(2400)

  event.recipes.susy.greenhouse('reyqhkdm22qtij') // remapped from original line 738
    .notConsumable(safeItemId('1x minecraft:wheat_seeds'))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 2)
    .itemOutputs(safeItemId('25x minecraft:wheat_seeds'))
    .itemOutputs(safeItemId('30x minecraft:wheat'))
    .EUt(30)
    .duration(1200)

  event.recipes.susy.greenhouse('qt1e8u9uc2gm5v') // remapped from original line 750
    .notConsumable(safeItemId('1x minecraft:wheat_seeds'))
    .circuit(2)
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:weed_killer', 500))
    .itemInputs(metaitem('fertilizer') * 2)
    .itemOutputs(safeItemId('50x minecraft:wheat_seeds'))
    .itemOutputs(safeItemId('60x minecraft:wheat'))
    .EUt(30)
    .duration(1200)

  event.recipes.susy.greenhouse('2ydhmlaaawopgn') // remapped from original line 763
    .notConsumable(safeItemId('1x minecraft:wheat_seeds'))
    .circuit(3)
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:pesticide', 500))
    .itemInputs(metaitem('fertilizer') * 2)
    .itemOutputs(safeItemId('50x minecraft:wheat_seeds'))
    .itemOutputs(safeItemId('60x minecraft:wheat'))
    .EUt(30)
    .duration(1200)

  event.recipes.susy.greenhouse('bdpb5yb1oovjnh') // remapped from original line 776
    .notConsumable(safeItemId('1x minecraft:wheat_seeds'))
    .circuit(4)
    .inputFluids(safeFluidOf('susy:greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:pesticide', 500))
    .inputFluids(safeFluidOf('susy:weed_killer', 500))
    .itemInputs(metaitem('fertilizer') * 2)
    .itemOutputs(safeItemId('75x minecraft:wheat_seeds'))
    .itemOutputs(safeItemId('90x minecraft:wheat'))
    .EUt(30)
    .duration(1200)

  event.recipes.susy.greenhouse('cwlq3vl8ilqv8h') // remapped from original line 790
    .notConsumable(safeItemId('1x minecraft:brown_mushroom'))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:cool_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 2)
    .itemOutputs(safeItemId('10x minecraft:brown_mushroom'))
    .EUt(30)
    .duration(1200)

  event.recipes.susy.greenhouse('864ajlmeshkjhq') // remapped from original line 801
    .notConsumable(safeItemId('1x minecraft:brown_mushroom'))
    .circuit(2)
    .inputFluids(safeFluidOf('susy:cool_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:weed_killer', 500))
    .itemInputs(metaitem('fertilizer') * 2)
    .itemOutputs(safeItemId('20x minecraft:brown_mushroom'))
    .EUt(30)
    .duration(1200)

  event.recipes.susy.greenhouse('yhcqgwuf05lxo4') // remapped from original line 813
    .notConsumable(safeItemId('1x minecraft:red_mushroom'))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:cool_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 2)
    .itemOutputs(safeItemId('10x minecraft:red_mushroom'))
    .EUt(30)
    .duration(1200)

  event.recipes.susy.greenhouse('gq6m8yilcklmr2') // remapped from original line 824
    .notConsumable(safeItemId('1x minecraft:red_mushroom'))
    .circuit(2)
    .inputFluids(safeFluidOf('susy:cool_greenhouse_gases', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:weed_killer', 500))
    .itemInputs(metaitem('fertilizer') * 2)
    .itemOutputs(safeItemId('20x minecraft:red_mushroom'))
    .EUt(30)
    .duration(1200)

  event.recipes.susy.greenhouse('qdoqhrqzn7p7oi') // remapped from original line 837
    .notConsumable(input)
    .circuit(1)
    .inputFluids(safeFluidOf('susy:asType', 1))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .itemInputs(metaitem('fertilizer') * 2)
    .itemOutputs(output * multiplier)
    .EUt(30)
    .duration(1200)

  event.recipes.susy.greenhouse('udw4vrl30dwjtd') // remapped from original line 848
    .notConsumable(input)
    .circuit(2)
    .inputFluids(safeFluidOf('susy:asType', 1))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:weed_killer', 500))
    .itemInputs(metaitem('fertilizer') * 2)
    .itemOutputs(output * (multiplier * 2))
    .EUt(30)
    .duration(1200)

  event.recipes.susy.greenhouse('0zjnxuzunrgoge') // remapped from original line 860
    .notConsumable(input)
    .circuit(3)
    .inputFluids(safeFluidOf('susy:asType', 1))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:pesticide', 500))
    .itemInputs(metaitem('fertilizer') * 2)
    .itemOutputs(output * (multiplier * 2))
    .EUt(30)
    .duration(1200)

  event.recipes.susy.greenhouse('p1joeaykctaxag') // remapped from original line 872
    .notConsumable(input)
    .circuit(4)
    .inputFluids(safeFluidOf('susy:asType', 1))
    .inputFluids(safeFluidOf('minecraft:water', 5000))
    .inputFluids(safeFluidOf('susy:pesticide', 500))
    .inputFluids(safeFluidOf('susy:weed_killer', 500))
    .itemInputs(metaitem('fertilizer') * 2)
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