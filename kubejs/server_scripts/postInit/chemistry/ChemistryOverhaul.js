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
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/calcite' && '#forge:dusts/salt'})
  event.remove({ type: 'gtceu:centrifuge', input: safeFluidOf('susy:gtfo_sodium_carbonate_solution')})
  event.remove({ type: 'gtceu:mixer', input: '#forge:dusts/soda_ash' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:chemical_bath', input: 'gregtechfoodoption:chocolate_liquor_refined_crushed' && 'susy:gregtechfoodoption:chocolate_liquor_refined_crushed' && safeFluidOf('susy:gtfo_sodium_carbonate_solution')})
  event.remove({ type: 'susy:batch_reactor', input: '#forge:dusts/phosphorus_pentoxide' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:mixer', input: safeFluidOf('gtceu:nitric_acid') && safeFluidOf('gtceu:sulfuric_acid')})

  event.recipes.gtceu.assembler('2f5ghwko449yjs') // remapped from original line 49
    .itemInputs('4x #forge:rods/iron')
    .itemInputs('4x #forge:pipes/tiny_fluid_steel')
    .itemOutputs(safeItemId('1x susy:catalyst_bed_support_grid'))
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.centrifuge('bs8lpcj2ifw2n5') // remapped from original line 59
    .inputFluids(safeFluidOf('gtceu:methanol', 250))
    .inputFluids(safeFluidOf('gtceu:fish_oil', 6000))
    .outputFluids(safeFluidOf('gtceu:bio_diesel', 6000))
    .outputFluids(safeFluidOf('gtceu:glycerol', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.centrifuge('v3oxq97ov12rdx') // remapped from original line 68
    .inputFluids(safeFluidOf('gtceu:ethanol', 250))
    .inputFluids(safeFluidOf('gtceu:fish_oil', 6000))
    .outputFluids(safeFluidOf('gtceu:bio_diesel', 6000))
    .outputFluids(safeFluidOf('gtceu:glycerol', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.centrifuge('ykuq0j8tvtaymq') // remapped from original line 77
    .inputFluids(safeFluidOf('susy:ethanol_water_azeotrope', 280))
    .inputFluids(safeFluidOf('gtceu:fish_oil', 6000))
    .outputFluids(safeFluidOf('gtceu:bio_diesel', 6000))
    .outputFluids(safeFluidOf('gtceu:glycerol', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.centrifuge('ibfdgzzjtjgd34') // remapped from original line 86
    .inputFluids(safeFluidOf('gtceu:methanol', 250))
    .inputFluids(safeFluidOf('gtceu:seed_oil', 6000))
    .outputFluids(safeFluidOf('gtceu:bio_diesel', 6000))
    .outputFluids(safeFluidOf('gtceu:glycerol', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.centrifuge('85jhdkdpdjwfti') // remapped from original line 95
    .inputFluids(safeFluidOf('gtceu:ethanol', 250))
    .inputFluids(safeFluidOf('gtceu:seed_oil', 6000))
    .outputFluids(safeFluidOf('gtceu:bio_diesel', 6000))
    .outputFluids(safeFluidOf('gtceu:glycerol', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.centrifuge('tpopqlcdb6uzra') // remapped from original line 104
    .inputFluids(safeFluidOf('susy:ethanol_water_azeotrope', 280))
    .inputFluids(safeFluidOf('gtceu:seed_oil', 6000))
    .outputFluids(safeFluidOf('gtceu:bio_diesel', 6000))
    .outputFluids(safeFluidOf('gtceu:glycerol', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.centrifuge('kexaenm8xvhlzd') // remapped from original line 113
    .inputFluids(safeFluidOf('gtceu:methanol', 250))
    .inputFluids(safeFluidOf('susy:gtfo_stearin', 6000))
    .outputFluids(safeFluidOf('gtceu:bio_diesel', 6000))
    .outputFluids(safeFluidOf('gtceu:glycerol', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.centrifuge('fydcvxjktxh3nf') // remapped from original line 122
    .inputFluids(safeFluidOf('gtceu:ethanol', 250))
    .inputFluids(safeFluidOf('susy:gtfo_stearin', 6000))
    .outputFluids(safeFluidOf('gtceu:bio_diesel', 6000))
    .outputFluids(safeFluidOf('gtceu:glycerol', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.centrifuge('p0nyytkojndkhc') // remapped from original line 131
    .inputFluids(safeFluidOf('susy:ethanol_water_azeotrope', 280))
    .inputFluids(safeFluidOf('susy:gtfo_stearin', 6000))
    .outputFluids(safeFluidOf('gtceu:bio_diesel', 6000))
    .outputFluids(safeFluidOf('gtceu:glycerol', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('tlkdgtoprvrelq') // remapped from original line 142
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 50))
    .inputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('susy:ammonium_chloride_solution', 50))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillery('r23lnichp4rzvz') // remapped from original line 150
    .inputFluids(safeFluidOf('susy:ammonium_chloride_solution', 1000))
    .itemOutputs('6x #forge:dusts/ammonium_chloride')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(120)
    .EUt(30)

  event.recipes.susy.roaster('lyrqpmcr8z6rsx') // remapped from original line 199
    .inputFluids(safeFluidOf('gtceu:oxygen', 10000))
    .itemInputs('4x #forge:dusts/phosphorus')
    .itemOutputs('14x #forge:dusts/phosphorus_pentoxide')
    .duration(40)
    .EUt(30)

  event.recipes.susy.roaster('s27hcacnvu4nvo') // remapped from original line 209
    .inputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .itemInputs('1x #forge:dusts/any_purity_sulfur')
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .duration(60)
    .EUt(7)

  event.recipes.susy.batch_reactor('zqpb60f2p4bre9') // remapped from original line 219
    .itemInputs('1x #forge:dusts/phosphorus_pentoxide')
    .inputFluids(safeFluidOf('minecraft:water', 6000))
    .outputFluids(safeFluidOf('gtceu:phosphoric_acid', 4000))
    .duration(40)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('ajtz8xtutogt8n') // remapped from original line 229
    .inputFluids(safeFluidOf('gtceu:hydrogen', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .duration(1)
    .EUt(7)

  event.recipes.susy.bubble_column_reactor('yhzlvq3bqxogna') // remapped from original line 237
    .circuit(1)
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .inputFluids(safeFluidOf('minecraft:water', 50))
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 50))
    .duration(1)
    .EUt(7)

  event.recipes.susy.bubble_column_reactor('txmtuyoilzw069') // remapped from original line 246
    .circuit(2)
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .outputFluids(safeFluidOf('gtceu:diluted_hydrochloric_acid', 100))
    .duration(1)
    .EUt(7)

  event.recipes.susy.continuous_stirred_tank_reactor('msggz1spii5gl2') // remapped from original line 255
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 50))
    .inputFluids(safeFluidOf('minecraft:water', 50))
    .outputFluids(safeFluidOf('gtceu:diluted_hydrochloric_acid', 100))
    .duration(1)
    .EUt(7)

  event.recipes.susy.fluidized_bed_reactor('s3kt8lqzrtzuux') // remapped from original line 265
    .notConsumable('1x #forge:dusts/copper_ii_chloride')
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 500))
    .outputFluids(safeFluidOf('gtceu:chlorine', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 500))
    .duration(40)
    .EUt(120)

  event.recipes.susy.fluidized_bed_reactor('cbkeqigcuu5xfs') // remapped from original line 275
    .notConsumable('1x #forge:dusts/ruthenium_iv_oxide')
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 500))
    .outputFluids(safeFluidOf('gtceu:chlorine', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 500))
    .duration(10)
    .EUt(120)

  event.recipes.susy.batch_reactor('trwquprbioa5vp') // remapped from original line 287
    .itemInputs('3x #forge:dusts/silicon_dioxide')
    .inputFluids(safeFluidOf('gtceu:hydrofluoric_acid', 6000))
    .outputFluids(safeFluidOf('susy:diluted_hexafluorosilicic_acid', 9000))
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('co6evp0qpwiown') // remapped from original line 295
    .inputFluids(safeFluidOf('susy:diluted_hexafluorosilicic_acid', 9000))
    .outputFluids(safeFluidOf('susy:hexafluorosilicic_acid', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 8000))
    .duration(160)
    .EUt(30)

  event.recipes.susy.batch_reactor('adkwkhq7u63ncx') // remapped from original line 305
    .itemInputs('3x #forge:dusts/fluorite')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('susy:hydrogen_fluoride', 2000))
    .itemOutputs('6x #forge:dusts/calcium_sulfate')
    .duration(30)
    .EUt(7)

  event.recipes.susy.continuous_stirred_tank_reactor('61ors2tcekj7mu') // remapped from original line 314
    .inputFluids(safeFluidOf('gtceu:hydrogen', 50))
    .inputFluids(safeFluidOf('gtceu:fluorine', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_fluoride', 50))
    .duration(1)
    .EUt(7)

  event.recipes.susy.bubble_column_reactor('lmv9p2u0qprdim') // remapped from original line 322
    .inputFluids(safeFluidOf('susy:hydrogen_fluoride', 50))
    .inputFluids(safeFluidOf('minecraft:water', 50))
    .outputFluids(safeFluidOf('gtceu:hydrofluoric_acid', 50))
    .duration(1)
    .EUt(7)

  event.recipes.gtceu.distillation_tower('rd1i8jp1jxeqso') // remapped from original line 330
    .inputFluids(safeFluidOf('gtceu:hydrofluoric_acid', 500))
    .outputFluids(safeFluidOf('minecraft:water', 500))
    .outputFluids(safeFluidOf('susy:hydrogen_fluoride', 500))
    .duration(50)
    .EUt(30)

  event.recipes.susy.roaster('aon3m62pbcmdhr') // remapped from original line 338
    .itemInputs('6x #forge:dusts/calcium_sulfate')
    .itemInputs('2x #forge:dusts/any_purity_carbon')
    .itemOutputs('2x #forge:dusts/calcium_sulfide')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 2000))
    .duration(30)
    .EUt(7)

  event.recipes.susy.roaster('9krxlx9tnjal30') // remapped from original line 349
    .inputFluids(safeFluidOf('minecraft:water', 4000))
    .itemInputs('3x #forge:dusts/iron')
    .itemOutputs('7x #forge:dusts/iron_two_three_oxide')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 8000))
    .duration(160)
    .EUt(60)

  event.recipes.susy.roaster('2knocyznkbhbrx') // remapped from original line 358
    .inputFluids(safeFluidOf('minecraft:water', 4000))
    .itemInputs('3x #forge:dusts/high_purity_iron')
    .itemOutputs('7x #forge:dusts/purified_iron_two_three_oxide')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 8000))
    .duration(160)
    .EUt(60)

  event.recipes.susy.roaster('5ffhscnr94c4bs') // remapped from original line 367
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemInputs('14x #forge:dusts/iron_two_three_oxide')
    .itemOutputs('15x #forge:dusts/iron_iii_oxide')
    .duration(160)
    .EUt(60)

  event.recipes.susy.roaster('70itzjn1fg9kxi') // remapped from original line 375
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemInputs('14x #forge:dusts/purified_iron_two_three_oxide')
    .itemOutputs('15x #forge:dusts/purified_iron_iii_oxide')
    .duration(160)
    .EUt(60)

  event.recipes.susy.batch_reactor('vovtsftqnabzqd') // remapped from original line 383
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemInputs('2x #forge:dusts/iron_ii_sulfide')
    .itemOutputs('6x #forge:dusts/iron_sulfate')
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('7ejtelkyebbppo') // remapped from original line 392
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemInputs('1x #forge:dusts/any_purity_iron')
    .itemOutputs('6x #forge:dusts/iron_sulfate')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.roaster('ktntcgba4pxkdm') // remapped from original line 401
    .itemInputs('12x #forge:dusts/iron_sulfate')
    .itemOutputs('5x #forge:dusts/iron_iii_oxide')
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .outputFluids(safeFluidOf('gtceu:sulfur_trioxide', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('nh0dxen6iljxh3') // remapped from original line 412
    .itemInputs('2x #forge:dusts/iron_ii_sulfide')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .itemOutputs('3x #forge:dusts/iron_ii_chloride')
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 1000))
    .duration(30)
    .EUt(7)

  event.recipes.susy.roaster('xkmy40u0wzvjxd') // remapped from original line 421
    .itemInputs('1x #forge:dusts/any_purity_sulfur')
    .itemInputs('1x #forge:dusts/any_purity_iron')
    .itemOutputs('2x #forge:dusts/iron_ii_sulfide')
    .duration(160)
    .EUt(7)

  event.recipes.susy.roaster('mmmmyar4c80yi2') // remapped from original line 430
    .inputFluids(safeFluidOf('gtceu:oxygen', 3000))
    .itemInputs('1x #forge:dusts/any_purity_antimony')
    .itemOutputs('1x #forge:dusts/antimony_trioxide')
    .duration(60)
    .EUt(7)

  event.recipes.susy.batch_reactor('7nhf8r8xd6vyzm') // remapped from original line 440
    .itemInputs('7x #forge:dusts/sodium_sulfate')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemOutputs('14x #forge:dusts/sodium_bisulfate')
    .duration(120)
    .EUt(30)

  event.recipes.gtceu.mixer('efzofobaddvpsp') // remapped from original line 448
    .itemInputs('7x #forge:dusts/sodium_bisulfate')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:sodium_bisulfate_solution', 1000))
    .duration(120)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('kkoszsuny2hkwd') // remapped from original line 456
    .inputFluids(safeFluidOf('gtceu:salt_water', 50))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .outputFluids(safeFluidOf('susy:sodium_bisulfate_solution', 50))
    .duration(1)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('qr3kgstdzkbggs') // remapped from original line 465
    .inputFluids(safeFluidOf('susy:potassium_chloride_solution', 50))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .outputFluids(safeFluidOf('susy:potassium_bisulfate_solution', 50))
    .duration(1)
    .EUt(30)

  event.recipes.gtceu.distillery('usrwz1ns5jlwci') // remapped from original line 474
    .inputFluids(safeFluidOf('susy:sodium_bisulfate_solution', 1000))
    .itemOutputs('7x #forge:dusts/sodium_bisulfate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(60)
    .EUt(30)

  event.recipes.gtceu.distillery('gjg1cr7ubpjgvn') // remapped from original line 482
    .inputFluids(safeFluidOf('susy:potassium_bisulfate_solution', 1000))
    .itemOutputs('7x #forge:dusts/potassium_bisulfate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(60)
    .EUt(30)

  event.recipes.susy.roaster('hzvpg8es39tvzc') // remapped from original line 490
    .itemInputs('14x #forge:dusts/sodium_bisulfate')
    .itemOutputs('7x #forge:dusts/sodium_sulfate')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .outputFluids(safeFluidOf('gtceu:sulfur_trioxide', 1000))
    .duration(60)
    .EUt(30)

  event.recipes.susy.roaster('jqy3khekgeolfo') // remapped from original line 499
    .circuit(1)
    .itemInputs('14x #forge:dusts/potassium_bisulfate')
    .itemOutputs('7x #forge:dusts/potassium_sulfate')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .outputFluids(safeFluidOf('gtceu:sulfur_trioxide', 1000))
    .duration(60)
    .EUt(30)

  event.recipes.susy.roaster('id8xir4zotaxln') // remapped from original line 509
    .circuit(2)
    .itemInputs('14x #forge:dusts/potassium_bisulfate')
    .itemOutputs('11x #forge:dusts/potassium_pyrosulfate')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .duration(60)
    .EUt(30)

  event.recipes.susy.batch_reactor('x7zsokghcl6dsy') // remapped from original line 518
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemInputs('5x #forge:dusts/saltpeter')
    .outputFluids(safeFluidOf('gtceu:nitric_acid', 1000))
    .itemOutputs('7x #forge:dusts/potassium_bisulfate')
    .duration(60)
    .EUt(30)

  event.recipes.susy.roaster('4dtsgerhzplz8b') // remapped from original line 529
    .itemInputs('7x #forge:dusts/sodium_sulfate')
    .itemInputs('2x #forge:dusts/any_purity_carbon')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 2000))
    .itemOutputs('3x #forge:dusts/sodium_sulfide')
    .duration(60)
    .EUt(30)

  event.recipes.gtceu.centrifuge('o6zttdlud2iouk') // remapped from original line 540
    .itemInputs('1x #forge:dusts/quartzite')
    .itemOutputs('1x #forge:dusts/silicon_dioxide')
    .duration(60)
    .EUt(7)

  event.recipes.gtceu.centrifuge('ymtt513e9eqssm') // remapped from original line 547
    .itemInputs('1x #forge:dusts/nether_quartz')
    .itemOutputs('1x #forge:dusts/silicon_dioxide')
    .duration(60)
    .EUt(7)

  event.recipes.susy.batch_reactor('lifugioi3zu6tx') // remapped from original line 556
    .inputFluids(safeFluidOf('gtceu:hydrofluoric_acid', 6000))
    .itemInputs('5x #forge:dusts/antimony_trioxide')
    .itemOutputs('8x #forge:dusts/wet_antimony_trifluoride')
    .duration(60)
    .EUt(30)

  event.recipes.susy.dryer('uwmqstamizhfer') // remapped from original line 564
    .itemInputs('4x #forge:dusts/wet_antimony_trifluoride')
    .outputFluids(safeFluidOf('minecraft:water', 4500))
    .itemOutputs('4x #forge:dusts/antimony_trifluoride')
    .duration(200)
    .EUt(30)

  event.recipes.susy.roaster('5msxu92jznuabe') // remapped from original line 574
    .inputFluids(safeFluidOf('gtceu:chlorine', 3000))
    .itemInputs('1x #forge:dusts/any_purity_antimony')
    .itemOutputs('4x #forge:dusts/antimony_trichloride')
    .duration(200)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('losjm62iwh1wkx') // remapped from original line 582
    .inputFluids(safeFluidOf('susy:antimony_trichloride', 72))
    .inputFluids(safeFluidOf('gtceu:chlorine', 250))
    .outputFluids(safeFluidOf('susy:antimony_pentachloride', 125))
    .duration(10)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('s5o6qgzbwuawsg') // remapped from original line 590
    .inputFluids(safeFluidOf('susy:carbon_tetrachloride', 150))
    .inputFluids(safeFluidOf('susy:hydrogen_fluoride', 300))
    .inputFluids(safeFluidOf('susy:antimony_pentachloride', 50))
    .outputFluids(safeFluidOf('susy:chlorofluoromethane_mix', 500))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('c3qn4g16k4c4y5') // remapped from original line 599
    .inputFluids(safeFluidOf('susy:chlorofluoromethane_mix', 5000))
    .outputFluids(safeFluidOf('susy:antimony_pentachloride', 500))
    .outputFluids(safeFluidOf('susy:trichlorofluoromethane', 500))
    .outputFluids(safeFluidOf('susy:dichlorodifluoromethane', 500))
    .outputFluids(safeFluidOf('susy:chlorotrifluoromethane', 500))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 3000))
    .duration(160)
    .EUt(30)

  event.recipes.susy.reaction_furnace('0ikf0gqz3gigdc') // remapped from original line 612
    .notConsumable('1x #forge:catalysts/bed_nickel')
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 8000))
    .outputFluids(safeFluidOf('gtceu:methane', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 2000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.reaction_furnace('69dq7hfiz18dlr') // remapped from original line 622
    .notConsumable('1x #forge:catalysts/bed_nickel')
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 6000))
    .outputFluids(safeFluidOf('gtceu:methane', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .duration(150)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('qazxd4gatxupoi') // remapped from original line 635
    .inputFluids(safeFluidOf('gtceu:methane', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 250))
    .outputFluids(safeFluidOf('susy:chlorinated_methane_mixture', 200))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('0bzvvazgppucyc') // remapped from original line 643
    .inputFluids(safeFluidOf('susy:chlorinated_methane_mixture', 4000))
    .outputFluids(safeFluidOf('susy:carbon_tetrachloride', 250))
    .outputFluids(safeFluidOf('gtceu:chloroform', 250))
    .outputFluids(safeFluidOf('susy:dichloromethane', 250))
    .outputFluids(safeFluidOf('gtceu:chloromethane', 250))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 2500))
    .duration(160)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('h2e4idrmpz2nd2') // remapped from original line 654
    .inputFluids(safeFluidOf('gtceu:chloromethane', 45))
    .inputFluids(safeFluidOf('gtceu:chlorine', 180))
    .outputFluids(safeFluidOf('susy:chlorinated_chloromethane_mixture', 150))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('nr1muiffbpivc7') // remapped from original line 662
    .inputFluids(safeFluidOf('susy:chlorinated_chloromethane_mixture', 5000))
    .outputFluids(safeFluidOf('susy:carbon_tetrachloride', 500))
    .outputFluids(safeFluidOf('gtceu:chloroform', 500))
    .outputFluids(safeFluidOf('susy:dichloromethane', 500))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 3000))
    .duration(160)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('tifxjhqt76uz2e') // remapped from original line 672
    .inputFluids(safeFluidOf('susy:dichloromethane', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 150))
    .outputFluids(safeFluidOf('susy:chlorinated_dichloromethane_mixture', 150))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('7psmredaw7okvz') // remapped from original line 680
    .inputFluids(safeFluidOf('susy:chlorinated_dichloromethane_mixture', 3000))
    .outputFluids(safeFluidOf('susy:carbon_tetrachloride', 500))
    .outputFluids(safeFluidOf('gtceu:chloroform', 500))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 1500))
    .duration(160)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('xxkrsrstuu6bj3') // remapped from original line 689
    .inputFluids(safeFluidOf('gtceu:chloroform', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 50))
    .outputFluids(safeFluidOf('susy:carbon_tetrachloride', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .duration(5)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('tdeq5okqt7zj5p') // remapped from original line 700
    .inputFluids(safeFluidOf('gtceu:methanol', 50))
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 50))
    .outputFluids(safeFluidOf('susy:chloromethane_solution', 150))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('awl9zqyxunocfw') // remapped from original line 708
    .inputFluids(safeFluidOf('susy:chloromethane_solution', 3000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .outputFluids(safeFluidOf('gtceu:chloromethane', 1000))
    .duration(160)
    .EUt(30)

  event.recipes.susy.batch_reactor('modx2juqxxy4n0') // remapped from original line 719
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .itemInputs('2x #forge:dusts/calcium_sulfide')
    .outputFluids(safeFluidOf('susy:calcium_chloride_solution', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 1000))
    .duration(80)
    .EUt(30)

  event.recipes.gtceu.distillery('iar6cnpmbgfsqq') // remapped from original line 728
    .inputFluids(safeFluidOf('susy:calcium_chloride_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('3x #forge:dusts/calcium_chloride')
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.chemical_bath('bmnnsuzcst58np') // remapped from original line 745
    .itemInputs(safeItemId('1x gregtechfoodoption:chocolate_liquor_refined_crushed'))
    .notConsumable(safeFluidOf('susy:soda_ash_solution', 1000))
    .itemOutputs(safeItemId('1x gregtechfoodoption:chocolate_liquor_dutched_crushed'))
    .duration(160)
    .EUt(540)

  event.recipes.susy.roaster('cwfoiledjc4waz') // remapped from original line 755
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemInputs('4x #forge:dusts/salt')
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 1000))
    .itemOutputs('7x #forge:dusts/sodium_sulfate')
    .duration(60)
    .EUt(30)

  event.recipes.susy.roaster('pjx9iucvwdslyj') // remapped from original line 764
    .itemInputs('3x #forge:dusts/sodium_sulfide')
    .itemInputs('5x #forge:dusts/calcite')
    .itemOutputs('8x #forge:dusts/black_ash')
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.mixer('kvpexhejtbuxpt') // remapped from original line 772
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('6x #forge:dusts/soda_ash')
    .outputFluids(safeFluidOf('susy:soda_ash_solution', 1000))
    .duration(80)
    .EUt(30)

  event.recipes.gtceu.mixer('vbj5ohaumqsdyg') // remapped from original line 780
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('8x #forge:dusts/black_ash')
    .outputFluids(safeFluidOf('susy:soda_ash_solution', 1000))
    .itemOutputs('2x #forge:dusts/calcium_sulfide')
    .duration(80)
    .EUt(30)

  event.recipes.gtceu.distillery('4rzwmagny8k9yc') // remapped from original line 789
    .inputFluids(safeFluidOf('susy:soda_ash_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('6x #forge:dusts/soda_ash')
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.mixer('k1inarwa6woz13') // remapped from original line 799
    .inputFluids(safeFluidOf('gtceu:salt_water', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:diluted_saltwater', 2000))
    .duration(80)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('xvii1bj3cqzmb5') // remapped from original line 807
    .inputFluids(safeFluidOf('susy:diluted_saltwater', 100))
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 50))
    .inputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('susy:ammoniacal_sodium_bicarbonate_solution', 50))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillery('xpuspztiovnnky') // remapped from original line 816
    .inputFluids(safeFluidOf('susy:ammoniacal_sodium_bicarbonate_solution', 1000))
    .outputFluids(safeFluidOf('susy:ammonium_chloride_solution', 1000))
    .itemOutputs('6x #forge:dusts/sodium_bicarbonate')
    .duration(80)
    .EUt(30)

  event.recipes.susy.roaster('kessfbaxbijdgj') // remapped from original line 824
    .itemInputs('12x #forge:dusts/ammonium_chloride')
    .itemInputs('2x #forge:dusts/quicklime')
    .outputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .itemOutputs('3x #forge:dusts/calcium_chloride')
    .duration(120)
    .EUt(30)

  event.recipes.susy.roaster('yrtconqsnpkzgx') // remapped from original line 834
    .itemInputs('5x #forge:dusts/calcite')
    .circuit(1)
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .itemOutputs('2x #forge:dusts/quicklime')
    .duration(80)
    .EUt(30)

  event.recipes.susy.batch_reactor('vncvkxar73cquj') // remapped from original line 843
    .itemInputs('2x #forge:dusts/quicklime')
    .circuit(1)
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 3000))
    .itemOutputs('5x #forge:dusts/calcite')
    .duration(120)
    .EUt(7)

  event.recipes.susy.roaster('cg4vhwpdodtghx') // remapped from original line 852
    .itemInputs('5x #forge:dusts/limestone')
    .circuit(2)
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 3000))
    .itemOutputs('2x #forge:dusts/quicklime')
    .duration(80)
    .EUt(30)

  event.recipes.susy.batch_reactor('meqddxe7l0wxsn') // remapped from original line 861
    .inputFluids(safeFluidOf('susy:ammonium_chloride_solution', 2000))
    .itemInputs('2x #forge:dusts/quicklime')
    .outputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .outputFluids(safeFluidOf('susy:calcium_chloride_solution', 2000))
    .duration(80)
    .EUt(30)

  event.recipes.susy.roaster('6spesvdwgcaoiv') // remapped from original line 870
    .itemInputs('12x #forge:dusts/sodium_bicarbonate')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .itemOutputs('6x #forge:dusts/soda_ash')
    .duration(80)
    .EUt(30)

  event.recipes.susy.batch_reactor('erw1xpdiyeqovr') // remapped from original line 879
    .itemInputs('6x #forge:dusts/sodium_bicarbonate')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 1000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .outputFluids(safeFluidOf('susy:diluted_saltwater', 2000))
    .duration(80)
    .EUt(30)

  event.recipes.susy.roaster('fpdedbxzglpxfo') // remapped from original line 890
    .itemInputs('9x #forge:dusts/ammonium_nitrate')
    .outputFluids(safeFluidOf('susy:dense_steam', 2000))
    .outputFluids(safeFluidOf('gtceu:nitric_oxide', 1000))
    .duration(120)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('8pxc1oon6v707g') // remapped from original line 898
    .inputFluids(safeFluidOf('gtceu:ammonia', 100))
    .inputFluids(safeFluidOf('gtceu:oxygen', 250))
    .outputFluids(safeFluidOf('susy:dense_steam', 150))
    .outputFluids(safeFluidOf('gtceu:nitric_oxide', 100))
    .duration(5)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('h4ka9yrlcsjcso') // remapped from original line 909
    .inputFluids(safeFluidOf('susy:hot_sulfuric_acid', 90))
    .inputFluids(safeFluidOf('susy:ethanol_water_azeotrope', 100))
    .outputFluids(safeFluidOf('gtceu:ethylene', 90))
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 180))
    .duration(5)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('0whgy2zule47yr') // remapped from original line 918
    .inputFluids(safeFluidOf('susy:hot_sulfuric_acid', 100))
    .inputFluids(safeFluidOf('gtceu:ethanol', 100))
    .outputFluids(safeFluidOf('gtceu:ethylene', 100))
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 200))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('smzutmjxlgrnfd') // remapped from original line 941
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 500))
    .outputFluids(safeFluidOf('minecraft:water', 500))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 500))
    .duration(50)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('oeb1voybniqhvl') // remapped from original line 951
    .inputFluids(safeFluidOf('gtceu:chloroform', 50))
    .inputFluids(safeFluidOf('susy:hydrogen_fluoride', 100))
    .outputFluids(safeFluidOf('susy:acidic_chlorodifluoromethane', 150))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.centrifuge('ud8rk5tmndn4lo') // remapped from original line 959
    .inputFluids(safeFluidOf('susy:acidic_chlorodifluoromethane', 3000))
    .inputFluids(safeFluidOf('minecraft:water', 2000))
    .outputFluids(safeFluidOf('susy:chlorodifluoromethane', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.pyrolyse_oven('9wavyx9sz5iszv') // remapped from original line 968
    .inputFluids(safeFluidOf('susy:acidic_chlorodifluoromethane', 6000))
    .outputFluids(safeFluidOf('susy:acidic_tetrafluoroethylene', 5000))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.centrifuge('qvhsdto68kooah') // remapped from original line 975
    .inputFluids(safeFluidOf('susy:acidic_tetrafluoroethylene', 5000))
    .inputFluids(safeFluidOf('minecraft:water', 4000))
    .outputFluids(safeFluidOf('gtceu:tetrafluoroethylene', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 4000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('abnsg0dgwwkm6f') // remapped from original line 986
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 150))
    .inputFluids(safeFluidOf('susy:acetylene', 50))
    .outputFluids(safeFluidOf('susy:trinitromethane_solution', 150))
    .outputFluids(safeFluidOf('gtceu:carbon_monoxide', 50))
    .duration(5)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('8bnjn79alenhob') // remapped from original line 995
    .inputFluids(safeFluidOf('susy:trinitromethane_solution', 150))
    .inputFluids(safeFluidOf('gtceu:nitration_mixture', 100))
    .outputFluids(safeFluidOf('susy:tetranitromethane_solution', 250))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('jxzlznvovnupaw') // remapped from original line 1003
    .inputFluids(safeFluidOf('susy:tetranitromethane_solution', 5000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('gtceu:tetranitromethane', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.mixer('b70ux2w1evazf3') // remapped from original line 1014
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('6x #forge:dusts/ammonium_chloride')
    .outputFluids(safeFluidOf('susy:ammonium_chloride_solution', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.continuous_stirred_tank_reactor('kjyipekpn0tdcr') // remapped from original line 1022
    .inputFluids(safeFluidOf('susy:ammonium_chloride_solution', 50))
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 50))
    .outputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('gtceu:salt_water', 50))
    .duration(1)
    .EUt(7)

  event.recipes.gtceu.vacuum_freezer('kwoh3ozdohlsgz') // remapped from original line 1033
    .inputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 2000))
    .outputFluids(safeFluidOf('gtceu:dinitrogen_tetroxide', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('osqrneqr5aejul') // remapped from original line 1042
    .inputFluids(safeFluidOf('gtceu:monochloramine', 50))
    .inputFluids(safeFluidOf('gtceu:dimethylamine', 50))
    .outputFluids(safeFluidOf('gtceu:dimethylhydrazine', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .duration(10)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('pidp8cvjpfbmrw') // remapped from original line 1053
    .inputFluids(safeFluidOf('gtceu:monochloramine', 50))
    .inputFluids(safeFluidOf('gtceu:methylamine', 50))
    .outputFluids(safeFluidOf('susy:monomethylhydrazine', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .duration(10)
    .EUt(30)

  event.recipes.susy.fixed_bed_reactor('kcyfw6osffegqs') // remapped from original line 1064
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 50))
    .inputFluids(safeFluidOf('gtceu:ethylene', 50))
    .notConsumable('1x #forge:catalysts/bed_palladium')
    .outputFluids(safeFluidOf('gtceu:vinyl_acetate', 50))
    .duration(10)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('vprfwtppzehbl2') // remapped from original line 1075
    .inputFluids(safeFluidOf('minecraft:water', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 100))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .outputFluids(safeFluidOf('gtceu:hypochlorous_acid', 50))
    .duration(6)
    .EUt(30)

  event.recipes.susy.batch_reactor('ed84dbhlqu2o9b') // remapped from original line 1086
    .inputFluids(safeFluidOf('gtceu:polyvinyl_acetate', 144))
    .inputFluids(safeFluidOf('gtceu:ethanol', 1000))
    .itemOutputs('1x #forge:dusts/polyvinyl_alcohol')
    .outputFluids(safeFluidOf('gtceu:ethyl_acetate', 1000))
    .duration(400)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('43vwwyxyisryp0') // remapped from original line 1095
    .inputFluids(safeFluidOf('gtceu:ethyl_acetate', 50))
    .notConsumable(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('gtceu:ethanol', 50))
    .outputFluids(safeFluidOf('gtceu:acetic_acid', 50))
    .duration(20)
    .EUt(30)

  event.recipes.susy.batch_reactor('netrj9juffacia') // remapped from original line 1104
    .itemInputs('1x #forge:dusts/polyvinyl_alcohol')
    .inputFluids(safeFluidOf('gtceu:butyraldehyde', 1000))
    .itemOutputs('1x #forge:dusts/polyvinyl_butyral')
    .duration(400)
    .EUt(480)

  event.recipes.susy.trickle_bed_reactor('btvgfq8hv6jpoo') // remapped from original line 1114
    .inputFluids(safeFluidOf('gtceu:hydrogen', 300))
    .inputFluids(safeFluidOf('gtceu:benzene', 50))
    .notConsumable('1x #forge:dusts/activated_raney_nickel')
    .outputFluids(safeFluidOf('gtceu:cyclohexane', 50))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('j2egw0lvqslk79') // remapped from original line 1125
    .inputFluids(safeFluidOf('gtceu:chlorine', 1000))
    .itemInputs('3x #forge:dusts/iron_ii_chloride')
    .itemOutputs('4x #forge:dusts/iron_iii_chloride')
    .duration(160)
    .EUt(30)

  event.recipes.susy.roaster('s9p9gi4hdouhvl') // remapped from original line 1133
    .inputFluids(safeFluidOf('gtceu:chlorine', 6000))
    .itemInputs('2x #forge:dusts/any_purity_iron')
    .itemOutputs('8x #forge:dusts/iron_iii_chloride')
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.mixer('9pgdnghhgvyfoi') // remapped from original line 1141
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('4x #forge:dusts/iron_iii_chloride')
    .outputFluids(safeFluidOf('susy:iron_iii_chloride_solution', 1000))
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.large_chemical_reactor('h8fg9zhouj3y11') // remapped from original line 1151
    .circuit(1)
    .inputFluids(safeFluidOf('gtceu:hydrofluoric_acid', 4000))
    .itemInputs('4x #forge:dusts/antimony_trifluoride')
    .outputFluids(safeFluidOf('gtceu:fluoroantimonic_acid', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .duration(3000)
    .EUt(480)

  event.recipes.gtceu.mixer('ximeezqefnado5') // remapped from original line 1163
    .itemInputs('1x #forge:dusts/any_purity_sodium')
    .itemInputs('1x #forge:dusts/any_purity_potassium')
    .outputFluids(safeFluidOf('gtceu:sodium_potassium', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.polymerization_tank('jarwdfhvzgu57r') // remapped from original line 1173
    .inputFluids(safeFluidOf('susy:n_methyl_two_pyrrolidone', 1000))
    .itemInputs('12x #forge:dusts/dichlorobenzene')
    .itemInputs('3x #forge:dusts/sodium_sulfide')
    .outputFluids(safeFluidOf('susy:salty_n_methyl_two_pyrrolidone', 1000))
    .itemOutputs('11x #forge:dusts/polyphenylene_sulfide')
    .duration(600)
    .EUt(240)

  event.recipes.gtceu.distillery('0ztek7m3pwj9ax') // remapped from original line 1183
    .inputFluids(safeFluidOf('susy:salty_n_methyl_two_pyrrolidone', 1000))
    .outputFluids(safeFluidOf('susy:n_methyl_two_pyrrolidone', 1000))
    .itemOutputs('4x #forge:dusts/salt')
    .duration(400)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('vse5bdxqj6gie9') // remapped from original line 1193
    .inputFluids(safeFluidOf('gtceu:oxygen', 50))
    .inputFluids(safeFluidOf('gtceu:nitric_oxide', 50))
    .outputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 50))
    .duration(8)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('f3g701jay3qrip') // remapped from original line 1201
    .inputFluids(safeFluidOf('minecraft:water', 50))
    .inputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 150))
    .outputFluids(safeFluidOf('gtceu:nitric_acid', 100))
    .outputFluids(safeFluidOf('gtceu:nitric_oxide', 50))
    .duration(12)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('jz9edrmirokltl') // remapped from original line 1212
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 50))
    .inputFluids(safeFluidOf('gtceu:methanol', 50))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:methyl_acetate_solution', 150))
    .duration(12)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('ar9uctvbhscbm3') // remapped from original line 1221
    .inputFluids(safeFluidOf('susy:methyl_acetate_solution', 3000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('gtceu:methyl_acetate', 1000))
    .duration(120)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('rwart9nmdzcfhc') // remapped from original line 1232
    .inputFluids(safeFluidOf('gtceu:benzene', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 100))
    .notConsumable('1x #forge:dusts/iron_iii_chloride')
    .outputFluids(safeFluidOf('gtceu:chlorobenzene', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .duration(12)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('vsu5trwl1xv8eu') // remapped from original line 1244
    .notConsumable('1x #forge:springs/nichrome')
    .inputFluids(safeFluidOf('gtceu:chlorobenzene', 50))
    .inputFluids(safeFluidOf('gtceu:nitration_mixture', 100))
    .outputFluids(safeFluidOf('susy:acidic_chloronitrobenzene_mixture', 100))
    .duration(10)
    .EUt(480)

  event.recipes.susy.phase_separator('lw3aybv7cdmxt4') // remapped from original line 1253
    .inputFluids(safeFluidOf('susy:acidic_chloronitrobenzene_mixture', 2000))
    .itemOutputs('1x #forge:dusts/mixed_chloronitrobenzene')
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 2000))
    .duration(50)

  event.recipes.gtceu.distillery('xo7qi7j797hl6z') // remapped from original line 1260
    .inputFluids(safeFluidOf('susy:mixed_chloronitrobenzene', 144))
    .chancedOutput('6500x #forge:dusts/four_chloronitrobenzene', 6500, 0)
    .outputFluids(safeFluidOf('susy:two_chloronitrobenzene', 48))
    .duration(200)
    .EUt(30)

  event.recipes.susy.trickle_bed_reactor('hu6ajcz6turbyy') // remapped from original line 1270
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 100))
    .notConsumable('1x #forge:dusts/any_purity_carbon')
    .outputFluids(safeFluidOf('susy:phosgene', 50))
    .duration(10)
    .EUt(30)

  event.recipes.susy.reaction_furnace('qtm0xfo2mcmkpj') // remapped from original line 1279
    .inputFluids(safeFluidOf('susy:carbon_tetrachloride', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .outputFluids(safeFluidOf('susy:phosgene', 1000))
    .outputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .duration(30)
    .EUt(120)

  event.recipes.susy.reaction_furnace('qf3jycx4trze9x') // remapped from original line 1290
    .inputFluids(safeFluidOf('gtceu:titanium_tetrachloride', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .outputFluids(safeFluidOf('gtceu:chlorine', 4000))
    .itemOutputs('3x #forge:dusts/titanium_dioxide')
    .duration(200)
    .EUt(480)

  event.recipes.susy.reaction_furnace('sv0ocunspzzavs') // remapped from original line 1303
    .itemInputs('18x #forge:dusts/dicobalt_octacarbonyl')
    .inputFluids(safeFluidOf('gtceu:propene', 1000))
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .inputFluids(safeFluidOf('susy:hot_hp_hydrogen', 2000))
    .outputFluids(safeFluidOf('susy:butyraldehyde_mixture', 1000))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.distillation_tower('c16a0oyqetgidg') // remapped from original line 1313
    .inputFluids(safeFluidOf('susy:butyraldehyde_mixture', 1000))
    .itemOutputs('18x #forge:dusts/dicobalt_octacarbonyl')
    .outputFluids(safeFluidOf('gtceu:butyraldehyde', 800))
    .outputFluids(safeFluidOf('susy:isobutyraldehyde', 200))
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('5dx9enggnwrcbk') // remapped from original line 1324
    .inputFluids(safeFluidOf('susy:isobutyraldehyde', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .notConsumable(safeItemId('1x susy:hv_catalyst_bed_reduction'))
    .outputFluids(safeFluidOf('susy:isobutyl_alcohol', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.batch_reactor('yuc4fdfxq7mgzi') // remapped from original line 1333
    .inputFluids(safeFluidOf('susy:isobutyraldehyde', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .notConsumable('1x #forge:catalysts/bed_platinum')
    .outputFluids(safeFluidOf('susy:isobutyl_alcohol', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.roaster('3p91r9w3gbeefa') // remapped from original line 1344
    .inputFluids(safeFluidOf('gtceu:chlorine', 1000))
    .itemInputs('1x #forge:dusts/any_purity_sodium')
    .itemOutputs('2x #forge:dusts/salt')
    .duration(200)
    .EUt(7)

  event.recipes.susy.roaster('9maoun7s5ikhrx') // remapped from original line 1354
    .inputFluids(safeFluidOf('gtceu:chlorine', 1000))
    .itemInputs('1x #forge:dusts/any_purity_potassium')
    .itemOutputs('2x #forge:dusts/rock_salt')
    .duration(200)
    .EUt(7)

  event.recipes.susy.batch_reactor('mscj7xixe6t19h') // remapped from original line 1364
    .inputFluids(safeFluidOf('gtceu:toluene', 1000))
    .inputFluids(safeFluidOf('gtceu:nitration_mixture', 6000))
    .outputFluids(safeFluidOf('susy:tnt_slurry', 3000))
    .duration(200)
    .EUt(24)

  event.recipes.gtceu.distillery('bgblr465snjq8m') // remapped from original line 1372
    .inputFluids(safeFluidOf('susy:tnt_slurry', 1000))
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 1000))
    .itemOutputs('7x #forge:dusts/tnt')
    .duration(300)
    .EUt(30)

  event.recipes.susy.roaster('4ixmugvya6mijb') // remapped from original line 1382
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .inputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .notConsumable('1x #forge:dusts/vanadium_pentoxide')
    .outputFluids(safeFluidOf('gtceu:sulfur_trioxide', 1000))
    .duration(200)
    .EUt(7)

  event.recipes.gtceu.mixer('oxgmpuxru8tfaz') // remapped from original line 1394
    .circuit(1)
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('3x #forge:dusts/sodium_hydroxide')
    .outputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .duration(80)
    .EUt(7)

  event.recipes.gtceu.mixer('zn8qniug9pizj7') // remapped from original line 1403
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('9x #forge:dusts/ammonium_nitrate')
    .outputFluids(safeFluidOf('susy:ammonium_nitrate_solution', 1000))
    .duration(80)
    .EUt(7)

  event.recipes.gtceu.mixer('rwubhry86fxlcl') // remapped from original line 1411
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('3x #forge:dusts/potassium_hydroxide')
    .outputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 1000))
    .duration(80)
    .EUt(7)

  event.recipes.gtceu.mixer('v9enuw056x319b') // remapped from original line 1419
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('2x #forge:dusts/rock_salt')
    .outputFluids(safeFluidOf('susy:potassium_chloride_solution', 1000))
    .duration(80)
    .EUt(7)

  event.recipes.susy.continuous_stirred_tank_reactor('llynglxvupgp1z') // remapped from original line 1427
    .inputFluids(safeFluidOf('susy:ammonium_nitrate_solution', 50))
    .inputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 50))
    .outputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('susy:diluted_saltpeter_solution', 150))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillery('wgcbztdejowgft') // remapped from original line 1436
    .inputFluids(safeFluidOf('susy:diluted_saltpeter_solution', 3000))
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .itemOutputs('5x #forge:dusts/saltpeter')
    .duration(300)
    .EUt(24)

  event.recipes.susy.continuous_stirred_tank_reactor('mtcxfwwn6u4dka') // remapped from original line 1444
    .inputFluids(safeFluidOf('susy:ammonium_nitrate_solution', 50))
    .inputFluids(safeFluidOf('susy:potassium_chloride_solution', 50))
    .outputFluids(safeFluidOf('susy:nitrate_solution', 100))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillery('l3g5e5vqgsiexs') // remapped from original line 1452
    .inputFluids(safeFluidOf('susy:nitrate_solution', 2000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('11x #forge:dusts/nitrate_salt_mix')
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.centrifuge('j1es9yvjbycsrm') // remapped from original line 1460
    .itemInputs('11x #forge:dusts/nitrate_salt_mix')
    .itemOutputs('6x #forge:dusts/ammonium_chloride')
    .itemOutputs('5x #forge:dusts/saltpeter')
    .duration(200)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('vf4bs6kyaugqit') // remapped from original line 1468
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 50))
    .inputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 50))
    .outputFluids(safeFluidOf('susy:saltpeter_solution', 100))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.distillery('gjohbjoiwqp8gr') // remapped from original line 1476
    .inputFluids(safeFluidOf('susy:saltpeter_solution', 2000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('5x #forge:dusts/saltpeter')
    .duration(300)
    .EUt(30)

  event.recipes.susy.batch_reactor('3svbxhkvuoevkr') // remapped from original line 1484
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 1000))
    .itemInputs('3x #forge:dusts/sodium_hydroxide')
    .outputFluids(safeFluidOf('susy:sodium_nitrate_solution', 1000))
    .duration(160)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('idllh5qjhw7myq') // remapped from original line 1492
    .inputFluids(safeFluidOf('susy:sodium_nitrate_solution', 50))
    .inputFluids(safeFluidOf('susy:potassium_chloride_solution', 50))
    .outputFluids(safeFluidOf('susy:salty_saltpeter_solution', 100))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillery('oivi3jyqwxvhjn') // remapped from original line 1500
    .inputFluids(safeFluidOf('susy:salty_saltpeter_solution', 2000))
    .outputFluids(safeFluidOf('gtceu:salt_water', 1000))
    .itemOutputs('5x #forge:dusts/saltpeter')
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.distillery('vuyvuekimgoxy3') // remapped from original line 1510
    .inputFluids(safeFluidOf('susy:sodium_silicate_solution', 1000))
    .itemOutputs('6x #forge:dusts/sodium_silicate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(20)
    .EUt(30)

  event.recipes.susy.batch_reactor('tjec0kndjj6sxk') // remapped from original line 1518
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .inputFluids(safeFluidOf('susy:dense_steam', 1000))
    .itemInputs('3x #forge:dusts/silicon_dioxide')
    .outputFluids(safeFluidOf('susy:diluted_sodium_silicate_solution', 4000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.distillery('lxp5reangmdu3m') // remapped from original line 1527
    .inputFluids(safeFluidOf('susy:sodium_aluminate_solution', 1500))
    .outputFluids(safeFluidOf('minecraft:water', 1500))
    .itemOutputs('4x #forge:dusts/sodium_aluminate')
    .duration(160)
    .EUt(30)

  event.recipes.susy.batch_reactor('7mxirkmxiprgob') // remapped from original line 1535
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .itemInputs('2x #forge:dusts/any_purity_aluminium')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 6000))
    .itemOutputs('8x #forge:dusts/sodium_aluminate')
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.autoclave('oiwpg3ai93ikkw') // remapped from original line 1544
    .inputFluids(safeFluidOf('susy:diluted_sodium_silicate_solution', 4000))
    .itemInputs('4x #forge:dusts/sodium_aluminate')
    .outputFluids(safeFluidOf('susy:raw_molecular_sieve', 4000))
    .duration(180)
    .EUt(30)

  event.recipes.gtceu.autoclave('nqcrpbtwkudltk') // remapped from original line 1552
    .inputFluids(safeFluidOf('susy:sodium_silicate_solution', 1000))
    .itemInputs('4x #forge:dusts/sodium_aluminate')
    .outputFluids(safeFluidOf('susy:raw_molecular_sieve', 4000))
    .duration(180)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('xc7zqqyy8pkhhk') // remapped from original line 1560
    .inputFluids(safeFluidOf('susy:diluted_sodium_silicate_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 750))
    .outputFluids(safeFluidOf('susy:sodium_silicate_solution', 250))
    .duration(200)
    .EUt(30)

  event.recipes.susy.dryer('ta07g2vkuwfoen') // remapped from original line 1568
    .inputFluids(safeFluidOf('susy:raw_molecular_sieve', 4000))
    .itemOutputs('10x #forge:dusts/molecular_sieve')
    .duration(400)
    .EUt(30)

  event.recipes.gtceu.alloy_smelter('owiymlspm7yhr3') // remapped from original line 1575
    .itemInputs('1x #forge:dusts/molecular_sieve')
    .itemInputs('1x #forge:dusts/clay')
    .itemOutputs(metaitem('cracking_catalyst') * 1)
    .duration(100)
    .EUt(60)

  event.recipes.susy.batch_reactor('2h1xi7teqo8vic') // remapped from original line 1585
    .inputFluids(safeFluidOf('gtceu:glycerol', 1000))
    .inputFluids(safeFluidOf('gtceu:nitration_mixture', 6000))
    .outputFluids(safeFluidOf('gtceu:glyceryl_trinitrate', 1000))
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 6000))
    .duration(100)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('fyoehsahuuonmc') // remapped from original line 1596
    .inputFluids(safeFluidOf('gtceu:chlorine', 100))
    .inputFluids(safeFluidOf('susy:hot_hp_propene', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .outputFluids(safeFluidOf('gtceu:allyl_chloride', 50))
    .duration(8)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('e0rpgpegmqxsqa') // remapped from original line 1607
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 100))
    .inputFluids(safeFluidOf('gtceu:chlorine', 100))
    .outputFluids(safeFluidOf('susy:impure_bleach', 200))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('sh5hhdyrvjbwon') // remapped from original line 1615
    .inputFluids(safeFluidOf('susy:impure_bleach', 4000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .outputFluids(safeFluidOf('susy:bleach', 1000))
    .itemOutputs('2x #forge:dusts/salt')
    .duration(300)
    .EUt(30)

  event.recipes.susy.batch_reactor('l6wdvxw9irn41j') // remapped from original line 1624
    .inputFluids(safeFluidOf('susy:bleach', 1000))
    .inputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .outputFluids(safeFluidOf('gtceu:monochloramine', 1000))
    .outputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.fixed_bed_reactor('dqbogmxzzxzsnq') // remapped from original line 1635
    .inputFluids(safeFluidOf('gtceu:toluene', 50))
    .inputFluids(safeFluidOf('gtceu:chlorobenzene', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 100))
    .notConsumable('1x #forge:catalysts/bed_iron_iii_chloride')
    .outputFluids(safeFluidOf('susy:mixed_dichlorobenzene_solution', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('r2hwcy1fhgal0l') // remapped from original line 1646
    .inputFluids(safeFluidOf('susy:mixed_dichlorobenzene_solution', 1000))
    .outputFluids(safeFluidOf('susy:one_two_dichlorobenzene_solution', 400))
    .outputFluids(safeFluidOf('susy:one_four_dichlorobenzene_solution', 600))
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.distillery('53rarqdudoos3l') // remapped from original line 1654
    .inputFluids(safeFluidOf('susy:one_four_dichlorobenzene_solution', 1000))
    .outputFluids(safeFluidOf('gtceu:toluene', 1000))
    .itemOutputs('12x #forge:dusts/dichlorobenzene')
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.distillery('catvg14fgnlwll') // remapped from original line 1662
    .inputFluids(safeFluidOf('susy:one_two_dichlorobenzene_solution', 1000))
    .outputFluids(safeFluidOf('gtceu:toluene', 1000))
    .itemOutputs('12x #forge:dusts/one_two_dichlorobenzene')
    .duration(300)
    .EUt(30)

  event.recipes.susy.batch_reactor('bp7u33vou9rznk') // remapped from original line 1684
    .itemInputs('3x #forge:dusts/calcium_carbide')
    .inputFluids(safeFluidOf('minecraft:water', 2000))
    .itemOutputs('5x #forge:dusts/calcium_hydroxide')
    .outputFluids(safeFluidOf('susy:acetylene', 1000))
    .EUt(30)
    .duration(120)

  event.recipes.susy.roaster('ffr5g57cb71etn') // remapped from original line 1695
    .circuit(1)
    .itemInputs('5x #forge:dusts/calcium_hydroxide')
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .itemOutputs('5x #forge:dusts/calcite')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .EUt(30)
    .duration(120)

  event.recipes.susy.roaster('66pxoweqzdezyy') // remapped from original line 1705
    .circuit(2)
    .itemInputs('5x #forge:dusts/calcium_hydroxide')
    .itemOutputs('2x #forge:dusts/quicklime')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .EUt(30)
    .duration(120)

  event.recipes.susy.bubble_column_reactor('niqxncbbgps2lj') // remapped from original line 1716
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 50))
    .inputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('susy:ammonium_nitrate_solution', 50))
    .EUt(30)
    .duration(10)

  event.recipes.gtceu.distillation_tower('wfwbr94cb45hnh') // remapped from original line 1724
    .inputFluids(safeFluidOf('susy:ammonium_nitrate_solution', 1000))
    .itemOutputs('2x #forge:dusts/ammonium_nitrate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(90)
    .duration(300)

  event.recipes.susy.fixed_bed_reactor('0srb09n2qcbngo') // remapped from original line 1734
    .inputFluids(safeFluidOf('gtceu:chlorine', 100))
    .inputFluids(safeFluidOf('gtceu:ethylene', 50))
    .notConsumable('1x #forge:catalysts/bed_iron_iii_oxide')
    .outputFluids(safeFluidOf('susy:dichloroethane', 50))
    .EUt(30)
    .duration(10)

  event.recipes.susy.fixed_bed_reactor('oqjsus4gu1xz2u') // remapped from original line 1743
    .inputFluids(safeFluidOf('gtceu:ethylene', 50))
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 100))
    .inputFluids(safeFluidOf('gtceu:oxygen', 50))
    .notConsumable('1x #forge:catalysts/bed_copper_ii_chloride')
    .outputFluids(safeFluidOf('susy:dichloroethane', 50))
    .outputFluids(safeFluidOf('minecraft:water', 150))
    .EUt(30)
    .duration(10)

  event.recipes.susy.fluidized_bed_reactor('aolzp5pv0rgw7w') // remapped from original line 1756
    .inputFluids(safeFluidOf('gtceu:methanol', 300))
    .inputFluids(safeFluidOf('gtceu:ammonia', 150))
    .notConsumable('1x #forge:dusts/impregnated_alumina_catalyst')
    .outputFluids(safeFluidOf('susy:methylamine_mix', 450))
    .duration(8)
    .EUt(voltAmps[2])

  event.recipes.gtceu.distillation_tower('vk7sgsflvocbc8') // remapped from original line 1766
    .inputFluids(safeFluidOf('susy:methylamine_mix', 9000))
    .outputFluids(safeFluidOf('minecraft:water', 6000))
    .outputFluids(safeFluidOf('gtceu:methylamine', 1000))
    .outputFluids(safeFluidOf('gtceu:dimethylamine', 1000))
    .outputFluids(safeFluidOf('susy:trimethylamine', 1000))
    .EUt(90)
    .duration(1200)

  event.recipes.susy.fixed_bed_reactor('h99oztk00cu13b') // remapped from original line 1778
    .inputFluids(safeFluidOf('susy:formaldehyde', 100))
    .inputFluids(safeFluidOf('susy:acetylene', 50))
    .notConsumable('1x #forge:catalysts/bed_bismuth_copper')
    .outputFluids(safeFluidOf('susy:butynediol', 50))
    .EUt(30)
    .duration(10)

  event.recipes.susy.trickle_bed_reactor('rkf1x2voz7wldr') // remapped from original line 1787
    .inputFluids(safeFluidOf('susy:butynediol', 50))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 200))
    .notConsumable('1x #forge:dusts/activated_raney_nickel')
    .outputFluids(safeFluidOf('susy:butanediol', 50))
    .EUt(30)
    .duration(10)

  event.recipes.susy.fixed_bed_reactor('3nx48azicgqc7w') // remapped from original line 1798
    .inputFluids(safeFluidOf('gtceu:methanol', 100))
    .inputFluids(safeFluidOf('gtceu:oxygen', 100))
    .notConsumable('1x #forge:catalysts/bed_silver')
    .outputFluids(safeFluidOf('susy:formaldehyde', 100))
    .outputFluids(safeFluidOf('minecraft:water', 100))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.susy.fixed_bed_reactor('tfllesnom73toy') // remapped from original line 1811
    .inputFluids(safeFluidOf('susy:butanediol', 50))
    .notConsumable('1x #forge:catalysts/bed_chromium_trioxide')
    .outputFluids(safeFluidOf('susy:gamma_butyrolactone', 50))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 200))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.continuous_stirred_tank_reactor('arwpljohibhwj9') // remapped from original line 1822
    .inputFluids(safeFluidOf('susy:gamma_butyrolactone', 50))
    .inputFluids(safeFluidOf('gtceu:methylamine', 50))
    .outputFluids(safeFluidOf('susy:diluted_n_methyl_two_pyrrolidone', 100))
    .EUt(30)
    .duration(10)

  event.recipes.gtceu.distillation_tower('8ghljhecjecwxg') // remapped from original line 1830
    .inputFluids(safeFluidOf('susy:diluted_n_methyl_two_pyrrolidone', 2000))
    .outputFluids(safeFluidOf('susy:n_methyl_two_pyrrolidone', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(90)
    .duration(450)

  event.recipes.susy.continuous_stirred_tank_reactor('nenancqgoeu5fy') // remapped from original line 1840
    .inputFluids(safeFluidOf('susy:hydrobromic_acid', 50))
    .inputFluids(safeFluidOf('susy:n_butanol', 50))
    .outputFluids(safeFluidOf('susy:one_bromobutane', 50))
    .outputFluids(safeFluidOf('minecraft:water', 50))
    .EUt(30)
    .duration(10)

  event.recipes.gtceu.mixer('1qb6ai27zsxs6e') // remapped from original line 1851
    .itemInputs('2x #forge:dusts/any_purity_lithium')
    .inputFluids(safeFluidOf('susy:diethyl_ether', 1000))
    .outputFluids(safeFluidOf('susy:lithium_solution', 1000))
    .EUt(30)
    .duration(320)

  event.recipes.susy.batch_reactor('k8nuynpxqo9lxv') // remapped from original line 1859
    .inputFluids(safeFluidOf('susy:lithium_solution', 1000))
    .inputFluids(safeFluidOf('susy:one_bromobutane', 1000))
    .outputFluids(safeFluidOf('susy:diluted_butyllithium', 2000))
    .itemOutputs('2x #forge:dusts/lithium_bromide')
    .EUt(30)
    .duration(300)

  event.recipes.gtceu.distillation_tower('ouz41tadwyjwmw') // remapped from original line 1868
    .inputFluids(safeFluidOf('susy:diluted_butyllithium', 2000))
    .outputFluids(safeFluidOf('susy:butyllithium', 1000))
    .outputFluids(safeFluidOf('susy:diethyl_ether', 1000))
    .EUt(90)
    .duration(360)

  event.recipes.susy.continuous_stirred_tank_reactor('usokni6l599ph9') // remapped from original line 1878
    .inputFluids(safeFluidOf('gtceu:ethanol', 100))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:diethyl_ether_solution', 150))
    .EUt(30)
    .duration(5)

  event.recipes.gtceu.distillation_tower('qciclrrqoxyzhx') // remapped from original line 1886
    .inputFluids(safeFluidOf('susy:diethyl_ether_solution', 3000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:diethyl_ether', 1000))
    .EUt(90)
    .duration(600)

  event.recipes.susy.batch_reactor('vbegtenknee2fp') // remapped from original line 1897
    .itemInputs('3x #forge:dusts/potassium_hydroxide')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 1000))
    .outputFluids(safeFluidOf('susy:diluted_rock_salt_solution', 2000))
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.distillation_tower('keqje00quoesmk') // remapped from original line 1905
    .inputFluids(safeFluidOf('susy:diluted_rock_salt_solution', 2000))
    .outputFluids(safeFluidOf('susy:potassium_chloride_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(16)
    .duration(60)

  event.recipes.gtceu.distillery('hb25nupiulrqpb') // remapped from original line 1913
    .inputFluids(safeFluidOf('susy:potassium_chloride_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('2x #forge:dusts/rock_salt')
    .EUt(16)
    .duration(60)

  event.recipes.susy.continuous_stirred_tank_reactor('tyfb78lzgesmxy') // remapped from original line 1921
    .inputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 100))
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 50))
    .outputFluids(safeFluidOf('susy:diluted_potassium_carbonate_solution', 150))
    .EUt(30)
    .duration(15)

  event.recipes.gtceu.distillery('3ule3sxewckvwz') // remapped from original line 1929
    .inputFluids(safeFluidOf('susy:diluted_potassium_carbonate_solution', 3000))
    .itemOutputs('6x #forge:dusts/potassium_carbonate')
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .EUt(30)
    .duration(400)

  event.recipes.susy.batch_reactor('s3xrtynkoaeoey') // remapped from original line 1937
    .inputFluids(safeFluidOf('susy:ammonium_chloride_solution', 2000))
    .itemInputs('5x #forge:dusts/calcium_hydroxide')
    .outputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .outputFluids(safeFluidOf('susy:diluted_calcium_chloride_solution', 2000))
    .EUt(30)
    .duration(360)

  event.recipes.gtceu.distillery('gbjz5xcqai4flb') // remapped from original line 1946
    .inputFluids(safeFluidOf('susy:diluted_calcium_chloride_solution', 2000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .itemOutputs('3x #forge:dusts/calcium_chloride')
    .EUt(30)
    .duration(100)

  event.recipes.gtceu.mixer('86lq6nbc9882xk') // remapped from original line 1954
    .itemInputs('6x #forge:dusts/potassium_carbonate')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:potassium_carbonate_solution', 1000))
    .EUt(30)
    .duration(80)

  event.recipes.susy.batch_reactor('uciomybfnnz52r') // remapped from original line 1962
    .itemInputs('5x #forge:dusts/calcium_hydroxide')
    .inputFluids(safeFluidOf('susy:potassium_carbonate_solution', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('5x #forge:dusts/calcite')
    .outputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 2000))
    .EUt(30)
    .duration(200)

  event.recipes.susy.bubble_column_reactor('9ujc4mhriodi4j') // remapped from original line 1972
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 50))
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .outputFluids(safeFluidOf('gtceu:salt_water', 100))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('afc0hey9yjea1u') // remapped from original line 1980
    .itemInputs('2x #forge:dusts/quicklime')
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 2000))
    .outputFluids(safeFluidOf('susy:calcium_chloride_solution', 1000))
    .duration(100)
    .EUt(16)

  event.recipes.susy.batch_reactor('kezfifrgaql0gm') // remapped from original line 1988
    .itemInputs('5x #forge:dusts/calcium_hydroxide')
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 2000))
    .outputFluids(safeFluidOf('susy:diluted_calcium_chloride_solution', 2000))
    .duration(100)
    .EUt(16)

  event.recipes.susy.roaster('hdxe6r1ksk0o1f') // remapped from original line 1996
    .itemInputs('1x #forge:dusts/calcium')
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemOutputs('2x #forge:dusts/quicklime')
    .duration(60)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('r6wt0uw0fzcggs') // remapped from original line 2006
    .inputFluids(safeFluidOf('gtceu:methyl_acetate', 50))
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 50))
    .outputFluids(safeFluidOf('susy:gtfo_acetic_anhydride', 50))
    .EUt(480)
    .duration(1)

  event.recipes.susy.batch_reactor('bz8enmspgolrg4') // remapped from original line 2014
    .itemInputs('1x #forge:dusts/cellulose')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .inputFluids(safeFluidOf('susy:gtfo_acetic_anhydride', 1000))
    .outputFluids(safeFluidOf('susy:acidic_cellulose_solution', 1000))
    .EUt(480)
    .duration(160)

  event.recipes.susy.continuous_stirred_tank_reactor('vbf7bl7y7d89df') // remapped from original line 2023
    .inputFluids(safeFluidOf('susy:acidic_cellulose_solution', 50))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 50))
    .inputFluids(safeFluidOf('minecraft:water', 50))
    .outputFluids(safeFluidOf('susy:cellulose_acetate_solution', 100))
    .EUt(480)
    .duration(1)

  event.recipes.gtceu.fluid_heater('fdu6k2a4zlyyze') // remapped from original line 2032
    .inputFluids(safeFluidOf('gtceu:air', 1000))
    .outputFluids(safeFluidOf('susy:hot_air', 1000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.dryer('pqmdagprhftb7r') // remapped from original line 2039
    .inputFluids(safeFluidOf('susy:cellulose_acetate_solution', 2000))
    .inputFluids(safeFluidOf('susy:hot_air', 1000))
    .notConsumable(metaitem('spinneret'))
    .itemOutputs('8x #forge:fibers/cellulose_acetate')
    .outputFluids(safeFluidOf('gtceu:air', 1000))
    .outputFluids(safeFluidOf('susy:diluted_acetic_acid', 2000))
    .EUt(480)
    .duration(100)

  event.recipes.gtceu.assembler('kojjhfmykh80j6') // remapped from original line 2050
    .itemInputs('16x #forge:threads/cellulose_acetate')
    .itemOutputs(metaitem('cellulose_acetate_mesh'))
    .EUt(120)
    .duration(160)

  event.recipes.gtceu.distillery('phvfigmtkgndsv') // remapped from original line 2059
    .inputFluids(safeFluidOf('minecraft:water', 288))
    .circuit(1)
    .outputFluids(safeFluidOf('gtceu:distilled_water', 260))
    .duration(160)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('dqdpaioekcxrkc') // remapped from original line 2069
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemInputs('4x #forge:dusts/wood')
    .outputFluids(safeFluidOf('susy:furfural_solution', 5000))
    .duration(180)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillation_tower('ttv7rocndytcfy') // remapped from original line 2077
    .inputFluids(safeFluidOf('susy:furfural_solution', 5000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('susy:furfural', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .duration(240)
    .EUt(voltAmps[1])

  event.recipes.susy.reaction_furnace('g0oyvhoex9lynz') // remapped from original line 2090
    .inputFluids(safeFluidOf('susy:hot_hp_methane', 1000))
    .inputFluids(safeFluidOf('susy:dense_steam', 1000))
    .notConsumable('1x #forge:dusts/any_purity_nickel')
    .outputFluids(safeFluidOf('susy:syngas', 7000))
    .duration(160)
    .EUt(voltAmps[2])

  event.recipes.susy.reaction_furnace('r7908hhbu6vtb7') // remapped from original line 2099
    .inputFluids(safeFluidOf('susy:hot_hp_natural_gas', 1500))
    .inputFluids(safeFluidOf('susy:dense_steam', 1000))
    .notConsumable('1x #forge:dusts/any_purity_nickel')
    .outputFluids(safeFluidOf('susy:syngas', 7000))
    .duration(160)
    .EUt(voltAmps[2])

  event.recipes.susy.roaster('lozynvwjmm5ioa') // remapped from original line 2108
    .itemInputs('1x #forge:dusts/any_purity_zinc')
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemOutputs('2x #forge:dusts/zinc_oxide')
    .duration(300)
    .EUt(30)

  event.recipes.susy.batch_reactor('3c1u3jnx2zwru2') // remapped from original line 2116
    .itemInputs('1x #forge:dusts/chromium_trioxide')
    .itemInputs('12x #forge:dusts/iron_iii_oxide')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .itemOutputs('8x #forge:dusts/hts_catalyst')
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('pzjl0xojbckm6g') // remapped from original line 2125
    .itemInputs('1x #forge:dusts/zinc_oxide')
    .itemInputs('1x #forge:dusts/cupric_oxide')
    .itemInputs('1x #forge:dusts/alumina')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .itemOutputs('4x #forge:dusts/lts_catalyst')
    .duration(200)
    .EUt(30)

  event.recipes.susy.reaction_furnace('ugia0jdzks15ka') // remapped from original line 2135
    .inputFluids(safeFluidOf('susy:syngas', 7000))
    .inputFluids(safeFluidOf('susy:dense_steam', 1000))
    .notConsumable('1x #forge:catalysts/bed_lts_catalyst')
    .outputFluids(safeFluidOf('susy:reformed_syngas', 9000))
    .duration(320)
    .EUt(30)

  event.recipes.susy.reaction_furnace('ulj11dzhdvnkts') // remapped from original line 2144
    .inputFluids(safeFluidOf('susy:syngas', 7000))
    .inputFluids(safeFluidOf('susy:dense_steam', 1000))
    .notConsumable('1x #forge:dusts/hts_catalyst')
    .outputFluids(safeFluidOf('susy:reformed_syngas', 9000))
    .duration(160)
    .EUt(120)

  event.recipes.gtceu.pyrolyse_oven('wx3faxwka8u6zt') // remapped from original line 2153
    .inputFluids(safeFluidOf('gtceu:methane', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 4000))
    .itemInputs('1x #forge:dusts/any_purity_bismuth')
    .itemOutputs('2x #forge:dusts/spent_bismuth_catalyst')
    .duration(10)
    .EUt(voltAmps[3] * 2)

  event.recipes.gtceu.electromagnetic_separator('j71jqrd8xqufsj') // remapped from original line 2162
    .itemInputs('2x #forge:dusts/spent_bismuth_catalyst')
    .itemOutputs('1x #forge:dusts/bismuth')
    .itemOutputs('1x #forge:dusts/carbon')
    .duration(20)
    .EUt(480)

  event.recipes.susy.pressure_swing_adsorption('blcgzvz5cbvhe2') // remapped from original line 2170
    .inputFluids(safeFluidOf('susy:reformed_syngas', 9000))
    .notConsumable('5x #forge:dusts/molecular_sieve')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 8000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .duration(160)
    .EUt(120)

  event.recipes.susy.pressure_swing_adsorption('6nctywzrjz1sip') // remapped from original line 2179
    .inputFluids(safeFluidOf('susy:syngas', 7000))
    .notConsumable('5x #forge:dusts/molecular_sieve')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 6000))
    .outputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .duration(160)
    .EUt(120)

  event.recipes.susy.reaction_furnace('n6ote8iylvlbyj') // remapped from original line 2190
    .inputFluids(safeFluidOf('susy:hot_hp_air', 1500))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 3000))
    .notConsumable('1x #forge:dusts/wustite_catalyst')
    .outputFluids(safeFluidOf('susy:ammonia_rich_gas', 4000))
    .duration(160)
    .EUt(voltAmps[2])

  event.recipes.susy.reaction_furnace('ykulmvnqd9w4nv') // remapped from original line 2199
    .inputFluids(safeFluidOf('susy:hot_hp_nitrogen', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 3000))
    .notConsumable('1x #forge:dusts/wustite_catalyst')
    .outputFluids(safeFluidOf('susy:ammonia_rich_gas', 4000))
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.susy.reaction_furnace('nxbioov0qeqbe7') // remapped from original line 2208
    .inputFluids(safeFluidOf('susy:ammonia_reaction_mix', 4000))
    .notConsumable('1x #forge:dusts/wustite_catalyst')
    .outputFluids(safeFluidOf('susy:ammonia_rich_gas', 4000))
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.gtceu.mixer('zs0pzhn46bukul') // remapped from original line 2216
    .inputFluids(safeFluidOf('susy:ammonia_rich_gas', 4000))
    .inputFluids(safeFluidOf('minecraft:water', 500))
    .outputFluids(safeFluidOf('susy:ammonia_solution', 500))
    .outputFluids(safeFluidOf('susy:ammonia_reaction_mix', 2000))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('fckj4gfecjbitz') // remapped from original line 2225
    .inputFluids(safeFluidOf('susy:syngas', 1000))
    .itemInputs('5x #forge:dusts/iron_iii_oxide')
    .itemOutputs('5x #forge:dusts/wustite_catalyst')
    .duration(400)
    .EUt(voltAmps[2])

  event.recipes.gtceu.distillation_tower('qjmxghnbjsqte7') // remapped from original line 2233
    .inputFluids(safeFluidOf('susy:ammonia_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .duration(150)
    .EUt(30)

  event.recipes.susy.fixed_bed_reactor('ornfad5idtfuoc') // remapped from original line 2243
    .inputFluids(safeFluidOf('susy:gtfo_acetaldehyde', 50))
    .inputFluids(safeFluidOf('gtceu:ethanol', 50))
    .notConsumable('1x #forge:catalysts/bed_tantalum')
    .outputFluids(safeFluidOf('gtceu:butadiene', 50))
    .outputFluids(safeFluidOf('minecraft:water', 100))
    .duration(5)
    .EUt(voltAmps[1])

  event.recipes.gtceu.chemical_bath('szyyjm2urwihsa') // remapped from original line 2255
    .inputFluids(safeFluidOf('gtceu:phosphoric_acid', 500))
    .itemInputs('1x #forge:dusts/silica_gel')
    .itemOutputs('1x #forge:dusts/phosphoric_acid_silica_gel')
    .duration(80)
    .EUt(30)

  event.recipes.susy.fluidized_bed_reactor('rqcub6e2rcipdx') // remapped from original line 2263
    .inputFluids(safeFluidOf('gtceu:ethylene', 50))
    .inputFluids(safeFluidOf('susy:dense_steam', 50))
    .notConsumable('1x #forge:dusts/phosphoric_acid_silica_gel')
    .outputFluids(safeFluidOf('gtceu:ethanol', 50))
    .duration(5)
    .EUt(voltAmps[3])

  event.recipes.susy.roaster('wpagom721io1cw') // remapped from original line 2274
    .inputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .itemInputs('1x #forge:dusts/any_purity_palladium')
    .itemOutputs('3x #forge:dusts/palladium_chloride')
    .duration(280)
    .EUt(voltAmps[2])

  event.recipes.susy.roaster('zkmf9etatrhhed') // remapped from original line 2282
    .inputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .itemInputs('1x #forge:dusts/any_purity_copper')
    .itemOutputs('3x #forge:dusts/copper_ii_chloride')
    .duration(280)
    .EUt(voltAmps[2])

  event.recipes.gtceu.mixer('dcgek9wncbcbmy') // remapped from original line 2290
    .itemInputs('3x #forge:dusts/palladium_chloride')
    .itemInputs('3x #forge:dusts/copper_ii_chloride')
    .itemOutputs('1x #forge:dusts/wacker_catalyst')
    .duration(160)
    .EUt(voltAmps[2])

  event.recipes.gtceu.mixer('bvxugzdsktscmv') // remapped from original line 2298
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('6x #forge:dusts/wacker_catalyst')
    .outputFluids(safeFluidOf('susy:wacker_catalyst_solution', 1000))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.continuous_stirred_tank_reactor('3eksha7d4glojx') // remapped from original line 2307
    .inputFluids(safeFluidOf('susy:wacker_catalyst_solution', 50))
    .inputFluids(safeFluidOf('gtceu:ethylene', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 50))
    .outputFluids(safeFluidOf('susy:impure_acetaldehyde', 50))
    .duration(5)
    .EUt(voltAmps[2])

  event.recipes.gtceu.distillery('dhfazd68qixeob') // remapped from original line 2316
    .inputFluids(safeFluidOf('susy:impure_acetaldehyde', 1000))
    .outputFluids(safeFluidOf('susy:gtfo_acetaldehyde', 900))
    .itemOutputs('6x #forge:dusts/wacker_catalyst')
    .duration(400)
    .EUt(voltAmps[1])

  event.recipes.susy.continuous_stirred_tank_reactor('4z5dgw7pxra9yu') // remapped from original line 2326
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 50))
    .inputFluids(safeFluidOf('gtceu:dimethylamine', 50))
    .outputFluids(safeFluidOf('susy:dimethylformamide', 50))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.susy.continuous_stirred_tank_reactor('mlvv7kisbv8eml') // remapped from original line 2336
    .inputFluids(safeFluidOf('susy:hot_hp_propene', 50))
    .inputFluids(safeFluidOf('susy:hot_hp_benzene', 50))
    .inputFluids(safeFluidOf('gtceu:phosphoric_acid', 50))
    .outputFluids(safeFluidOf('susy:acidic_cumene', 100))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.susy.continuous_stirred_tank_reactor('8k3o63kb3ltt8y') // remapped from original line 2345
    .inputFluids(safeFluidOf('gtceu:oxygen', 50))
    .inputFluids(safeFluidOf('susy:acidic_cumene', 100))
    .outputFluids(safeFluidOf('susy:rearranged_cumene', 150))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillation_tower('udoqaqzbyoz8ws') // remapped from original line 2353
    .inputFluids(safeFluidOf('susy:rearranged_cumene', 150))
    .outputFluids(safeFluidOf('gtceu:phosphoric_acid', 50))
    .outputFluids(safeFluidOf('gtceu:phenol', 50))
    .outputFluids(safeFluidOf('gtceu:acetone', 50))
    .disableDistilleryRecipes(true)
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.susy.reaction_furnace('d2n5udarcenrdm') // remapped from original line 2365
    .inputFluids(safeFluidOf('gtceu:nitrogen', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .outputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 1000))
    .duration(60)
    .EUt(voltAmps[2])

  event.recipes.susy.continuous_stirred_tank_reactor('4nqltht60tbofs') // remapped from original line 2375
    .inputFluids(safeFluidOf('gtceu:butane', 50))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:alkylated_butane', 100))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillation_tower('pdiibfrwjqcfdd') // remapped from original line 2383
    .inputFluids(safeFluidOf('susy:alkylated_butane', 100))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:isobutane', 50))
    .duration(300)
    .EUt(voltAmps[1] * 2)

  event.recipes.susy.fixed_bed_reactor('qjh2ksjnrwumhv') // remapped from original line 2391
    .inputFluids(safeFluidOf('susy:isobutane', 50))
    .notConsumable('1x #forge:catalysts/bed_chromium_trioxide')
    .outputFluids(safeFluidOf('susy:isobutylene', 50))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 100))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.gtceu.mixer('gebh85uduiucmj') // remapped from original line 2402
    .inputFluids(safeFluidOf('gtceu:aluminium', 144))
    .itemInputs('1x #forge:dusts/any_purity_nickel')
    .itemInputs('1x #forge:dusts/tiny_zinc')
    .itemOutputs('2x #forge:dusts/raney_nickel')
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('ezdi8hdzayy92b') // remapped from original line 2411
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemInputs('11x #forge:dusts/sodium_dichromate')
    .itemOutputs('8x #forge:dusts/chromium_trioxide')
    .outputFluids(safeFluidOf('susy:sodium_sulfate_solution', 1000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillery('zsf5xmx2b7w75e') // remapped from original line 2420
    .inputFluids(safeFluidOf('susy:sodium_sulfate_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('7x #forge:dusts/sodium_sulfate')
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('1sdbdnivh1bbkm') // remapped from original line 2428
    .itemInputs('4x #forge:dusts/raney_nickel')
    .itemInputs('6x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('minecraft:water', 6000))
    .itemOutputs('2x #forge:dusts/activated_raney_nickel')
    .itemOutputs('20x #forge:dusts/sodium_aluminate')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 6000))
    .duration(240)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('1qacdgpsrqxkgp') // remapped from original line 2439
    .circuit(1)
    .itemInputs('1x #forge:dusts/any_purity_copper')
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemOutputs('2x #forge:dusts/cupric_oxide')
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('2sa0jgtmmxvv34') // remapped from original line 2448
    .circuit(2)
    .itemInputs('2x #forge:dusts/any_purity_copper')
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemOutputs('3x #forge:dusts/cuprous_oxide')
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('ddl9ivadwlljne') // remapped from original line 2459
    .itemInputs('2x #forge:dusts/any_purity_cobalt')
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 8000))
    .itemOutputs('18x #forge:dusts/dicobalt_octacarbonyl')
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.gtceu.alloy_smelter('bnraoh1lxpjydw') // remapped from original line 2469
    .itemInputs('3x #forge:dusts/silica_gel')
    .itemInputs('5x #forge:dusts/alumina')
    .itemOutputs('8x #forge:dusts/impregnated_alumina_catalyst')
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.gtceu.mixer('icyg2qrnimniaf') // remapped from original line 2479
    .itemInputs('1x #forge:dusts/any_purity_bismuth')
    .itemInputs('1x #forge:dusts/any_purity_copper')
    .itemOutputs('2x #forge:dusts/bismuth_copper')
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('8rujrd6tlyv1oo') // remapped from original line 2489
    .itemInputs('13x #forge:dusts/phthalic_anhydride')
    .inputFluids(safeFluidOf('gtceu:ethylbenzene', 1000))
    .outputFluids(safeFluidOf('susy:two_ethylanthraquinone', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.fixed_bed_reactor('z05qkirmgeoa7r') // remapped from original line 2500
    .inputFluids(safeFluidOf('susy:two_ethylanthraquinone', 50))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 100))
    .notConsumable('1x #forge:catalysts/bed_palladium')
    .outputFluids(safeFluidOf('susy:two_ethylanthrahydroquinone', 50))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.bubble_column_reactor('eqof5zv91ra1ct') // remapped from original line 2511
    .inputFluids(safeFluidOf('susy:two_ethylanthrahydroquinone', 50))
    .inputFluids(safeFluidOf('susy:hot_hp_oxygen', 100))
    .outputFluids(safeFluidOf('susy:two_ethylanthraquinone_solution', 200))
    .duration(100) // Adjust the duration as needed
    .EUt(voltAmps[1])

  event.recipes.susy.continuous_stirred_tank_reactor('b20d00z8vheheq') // remapped from original line 2519
    .inputFluids(safeFluidOf('susy:two_ethylanthraquinone_solution', 200))
    .inputFluids(safeFluidOf('minecraft:water', 150))
    .outputFluids(safeFluidOf('susy:two_ethylanthraquinone', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_peroxide_solution', 300))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.susy.vacuum_distillation('mpynyveadq33fw') // remapped from original line 2528
    .inputFluids(safeFluidOf('susy:hydrogen_peroxide_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:hydrogen_peroxide', 1000))
    .duration(40)
    .EUt(voltAmps[2])

  event.recipes.susy.fixed_bed_reactor('7nhduxz1wu1axv') // remapped from original line 2538
    .inputFluids(safeFluidOf('susy:two_butanol', 50))
    .notConsumable('1x #forge:catalysts/bed_chromium_trioxide')
    .outputFluids(safeFluidOf('susy:butanone', 50))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 100))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.trickle_bed_reactor('3v88sfb4ky5z5t') // remapped from original line 2549
    .inputFluids(safeFluidOf('gtceu:benzene', 50))
    .inputFluids(safeFluidOf('gtceu:bromine', 50))
    .notConsumable('1x #forge:dusts/aluminium_chloride')
    .outputFluids(safeFluidOf('susy:bromobenzene', 50))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 50))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.gtceu.alloy_smelter('hlisjk61kgnaqx') // remapped from original line 2561
    .itemInputs('3x #forge:dusts/silica_gel')
    .itemInputs('4x #forge:dusts/chromium_trioxide')
    .itemOutputs('7x #forge:dusts/philips_catalyst')
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('dhvitszd6hpetb') // remapped from original line 2571
    .itemInputs('1x #forge:dusts/any_purity_aluminium')
    .inputFluids(safeFluidOf('gtceu:chlorine', 3000))
    .itemOutputs('4x #forge:dusts/aluminium_chloride')
    .duration(100) // Adjust the duration as needed
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('azm9fumxgkdtin') // remapped from original line 2579
    .itemInputs('2x #forge:dusts/any_purity_aluminium')
    .inputFluids(safeFluidOf('gtceu:hydrogen', 6000))
    .inputFluids(safeFluidOf('gtceu:ethylene', 6000))
    .outputFluids(safeFluidOf('susy:triethylaluminium', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.mixer('xjpabfqlkwrmyr') // remapped from original line 2588
    .inputFluids(safeFluidOf('susy:triethylaluminium', 1000))
    .inputFluids(safeFluidOf('gtceu:titanium_tetrachloride', 1000))
    .itemOutputs('10x #forge:dusts/ziegler_natta_catalyst')
    .duration(160)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('ev4fdvgsznp9p9') // remapped from original line 2598
    .itemInputs('4x #forge:dusts/durene')
    .inputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .itemOutputs('3x #forge:dusts/pyromellitic_dianhydride')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.polymerization_tank('vzjbtu6lnezjq2') // remapped from original line 2609
    .itemInputs('1x #forge:dusts/pyromellitic_dianhydride')
    .itemInputs('1x #forge:dusts/four_four_oxydianiline')
    .inputFluids(safeFluidOf('gtceu:acetone', 2000))
    .outputFluids(safeFluidOf('susy:impure_kapton_k', 2000))
    .duration(400) 
    .EUt(voltAmps[3] * 2)

  event.recipes.gtceu.distillery('zfqp2ks9kxpeku') // remapped from original line 2618
    .inputFluids(safeFluidOf('susy:impure_kapton_k', 1000))
    .outputFluids(safeFluidOf('gtceu:acetone', 1000))
    .itemOutputs('1x #forge:dusts/kapton_k')
    .duration(200)
    .EUt(voltAmps[2])

  event.recipes.gtceu.mixer('eahbviiy6dissi') // remapped from original line 2628
    .itemInputs('1x #forge:dusts/four_four_oxydianiline')
    .itemInputs('1x #forge:dusts/biphenyl_tetracarboxylic_acid_dianhydride')
    .itemInputs('1x #forge:dusts/para_phenylenediamine')
    .inputFluids(safeFluidOf('gtceu:acetone', 4000))
    .outputFluids(safeFluidOf('susy:kapton_e_preparation', 4000))
    .duration(800)
    .EUt(voltAmps[1])

  event.recipes.susy.polymerization_tank('3vexihmfkwjkhg') // remapped from original line 2639
    .inputFluids(safeFluidOf('susy:kapton_e_preparation', 1000))
    .outputFluids(safeFluidOf('susy:impure_kapton_e', 1000))
    .duration(200)
    .EUt(voltAmps[2] * 2)

  event.recipes.susy.dryer('yltzgm4anrlhsl') // remapped from original line 2646
    .inputFluids(safeFluidOf('susy:impure_kapton_e', 1000))
    .outputFluids(safeFluidOf('gtceu:acetone', 1000))
    .itemOutputs('1x #forge:dusts/kapton_e')
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('d9lkxnhvcuvj4r') // remapped from original line 2656
    .inputFluids(safeFluidOf('gtceu:methanol', 6000))
    .inputFluids(safeFluidOf('gtceu:bromine', 3000))
    .itemInputs('1x #forge:dusts/any_purity_sulfur')
    .outputFluids(safeFluidOf('susy:bromomethane', 6000))
    .outputFluids(safeFluidOf('susy:very_diluted_sulfuric_acid', 3000))
    .duration(60) // Adjust the duration as needed
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillation_tower('5vilvf3si3b671') // remapped from original line 2666
    .inputFluids(safeFluidOf('susy:very_diluted_sulfuric_acid', 3000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .duration(60)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillation_tower('3updhiehptzc3c') // remapped from original line 2675
    .inputFluids(safeFluidOf('gtceu:butene', 1000))
    .outputFluids(safeFluidOf('susy:isobutylene', 500))
    .outputFluids(safeFluidOf('susy:one_butene', 300))
    .outputFluids(safeFluidOf('susy:two_butene', 200))
    .duration(300)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('wtbuvswd74j7lc') // remapped from original line 2684
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .inputFluids(safeFluidOf('susy:two_butene', 50))
    .inputFluids(safeFluidOf('minecraft:water', 50))
    .outputFluids(safeFluidOf('susy:two_butanol_solution', 100))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('ji5tjgghuxgq2f') // remapped from original line 2693
    .inputFluids(safeFluidOf('susy:two_butanol_solution', 2000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('susy:two_butanol', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('zjvocxpdtlccrj') // remapped from original line 2701
    .inputFluids(safeFluidOf('susy:ammonia_solution', 50))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 50))
    .outputFluids(safeFluidOf('susy:ammonium_acetate_solution', 50))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.distillery('iac9almqoy3uiu') // remapped from original line 2709
    .inputFluids(safeFluidOf('susy:ammonium_acetate_solution', 1000))
    .itemOutputs('9x #forge:dusts/acetamide')
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.mixer('b4olzvmhhols5u') // remapped from original line 2717
    .itemInputs('18x #forge:dusts/acetamide')
    .inputFluids(safeFluidOf('susy:butanone', 1000))
    .outputFluids(safeFluidOf('susy:acetamide_solution', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('1jw2gcuuemx0dg') // remapped from original line 2725
    .inputFluids(safeFluidOf('susy:acetamide_solution', 50))
    .inputFluids(safeFluidOf('susy:hydrogen_peroxide', 50))
    .inputFluids(safeFluidOf('gtceu:ammonia', 200))
    .outputFluids(safeFluidOf('susy:hydrazine_solution', 250))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('2qotp8pcu3mb5z') // remapped from original line 2734
    .inputFluids(safeFluidOf('susy:hydrazine_solution', 5000))
    .outputFluids(safeFluidOf('gtceu:hydrazine', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 4000))
    .outputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.batch_reactor('ogi4s91pqocozg') // remapped from original line 2745
    .inputFluids(safeFluidOf('susy:dichloroethane', 1525))
    .inputFluids(safeFluidOf('gtceu:ammonia', 2425))
    .outputFluids(safeFluidOf('susy:aminated_ethylene_mixture', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.batch_reactor('tahvyy2xxwnmep') // remapped from original line 2753
    .inputFluids(safeFluidOf('susy:aminated_ethylene_mixture', 1000))
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 3050))
    .outputFluids(safeFluidOf('susy:neutralized_aminated_ethylene_mixture', 4050))
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('khloqvcz3w2oh6') // remapped from original line 2761
    .inputFluids(safeFluidOf('susy:neutralized_aminated_ethylene_mixture', 4050))
    .itemOutputs('6x #forge:dusts/salt')
    .outputFluids(safeFluidOf('susy:piperazine', 50))
    .outputFluids(safeFluidOf('susy:triethylenetetramine', 100))
    .outputFluids(safeFluidOf('susy:aminoethylpiperazine', 50))
    .outputFluids(safeFluidOf('susy:diethylenetriamine', 300))
    .outputFluids(safeFluidOf('susy:ethylenediamine', 500))
    .duration(300)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('bxsbbzyuyeggu6') // remapped from original line 2774
    .inputFluids(safeFluidOf('gtceu:chlorine', 50))
    .inputFluids(safeFluidOf('gtceu:nitric_oxide', 50))
    .outputFluids(safeFluidOf('gtceu:nitrosyl_chloride', 50))
    .duration(10)
    .EUt(30)

  event.recipes.susy.roaster('nr3cbad4dv08vh') // remapped from original line 2782
    .itemInputs('1x #forge:dusts/any_purity_sulfur')
    .inputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .outputFluids(safeFluidOf('susy:sulfur_dichloride', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('lkpuectset0pdq') // remapped from original line 2791
    .inputFluids(safeFluidOf('gtceu:sulfur_trioxide', 50))
    .inputFluids(safeFluidOf('susy:sulfur_dichloride', 50))
    .outputFluids(safeFluidOf('susy:thionyl_chloride', 50))
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 50))
    .duration(20)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('3i1dtftfywkszj') // remapped from original line 2800
    .inputFluids(safeFluidOf('susy:thionyl_chloride', 50))
    .inputFluids(safeFluidOf('minecraft:water', 150))
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 50))
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 100))
    .duration(10)
    .EUt(30)

  event.recipes.susy.batch_reactor('u2xzpbtq3lcjls') // remapped from original line 2810
    .itemInputs('12x #forge:dusts/lithium_hydride')
    .inputFluids(safeFluidOf('susy:boron_trifluoride', 8000))
    .itemOutputs('36x #forge:dusts/lithium_tetrafluoroborate')
    .outputFluids(safeFluidOf('susy:diborane', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.roaster('hn6y7idesd90bz') // remapped from original line 2819
    .itemInputs('6x #forge:dusts/lithium_tetrafluoroborate')
    .itemOutputs('2x #forge:dusts/lithium_fluoride')
    .outputFluids(safeFluidOf('susy:boron_trifluoride', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.roaster('usrsgohly7k2bn') // remapped from original line 2828
    .itemInputs('1x #forge:dusts/any_purity_lithium')
    .inputFluids(safeFluidOf('gtceu:hydrogen', 1000))
    .itemOutputs('2x #forge:dusts/lithium_hydride')
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('ipr4dzbaije39l') // remapped from original line 2837
    .itemInputs('6x #forge:dusts/tetramethylammonium_chloride')
    .itemInputs('3x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('gtceu:methanol', 1000))
    .outputFluids(safeFluidOf('susy:tetramethylammonium_hydroxide_solution', 1000))
    .itemOutputs('2x #forge:dusts/salt')
    .duration(300)
    .EUt(30)

  event.recipes.susy.batch_reactor('ici9rguqqhe8om') // remapped from original line 2848
    .inputFluids(safeFluidOf('gtceu:phenol', 1000))
    .inputFluids(safeFluidOf('susy:hydrogen_peroxide', 1000))
    .itemOutputs('12x #forge:dusts/pyrocatechol')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.large_chemical_reactor('jgvmx7simsxf4r') // remapped from original line 2858
    .inputFluids(safeFluidOf('susy:trimethylamine', 1000))
    .inputFluids(safeFluidOf('gtceu:chloromethane', 1000))
    .inputFluids(safeFluidOf('gtceu:ethanol', 4000))
    .itemOutputs('6x #forge:dusts/tetramethylammonium_chloride')
    .duration(200)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('xbskpu2gjeqeaz') // remapped from original line 2868
    .inputFluids(safeFluidOf('susy:para_xylene', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 300))
    .outputFluids(safeFluidOf('susy:bistrichloromethylbenzene', 50))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 300))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.electrolyzer('wb2xxf40rwm8ab') // remapped from original line 2878
    .notConsumable('1x #forge:rods/platinum')
    .notConsumable(metaitem('graphite_electrode'))
    .inputFluids(safeFluidOf('susy:ammonium_bisulfate', 1584))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('vtqfwfzlbfntua') // remapped from original line 2890
    .inputFluids(safeFluidOf('gtceu:toluene', 50))
    .inputFluids(safeFluidOf('susy:oleum', 550))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 50))
    .outputFluids(safeFluidOf('susy:tosylic_acid_solution', 50))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 500))
    .duration(20)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('au8cpacc4olmx3') // remapped from original line 2900
    .inputFluids(safeFluidOf('susy:trichlorosilane', 50))
    .inputFluids(safeFluidOf('gtceu:toluene', 300))
    .outputFluids(safeFluidOf('susy:trichlorosilane_solution', 350))
    .duration(10)
    .EUt(30)

  event.recipes.susy.batch_reactor('del1itkern2ff4') // remapped from original line 2908
    .notConsumable(safeFluidOf('susy:tosylic_acid_solution', 3500))
    .inputFluids(safeFluidOf('susy:trichlorosilane_solution', 3500))
    .outputFluids(safeFluidOf('susy:acidic_hydrogen_silsesquioxane_solution', 3000))
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('rdaievdpizwru6') // remapped from original line 2916
    .inputFluids(safeFluidOf('susy:acidic_hydrogen_silsesquioxane_solution', 3000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 100))
    .outputFluids(safeFluidOf('susy:hydrogen_silsesquioxane_solution', 3050))
    .outputFluids(safeFluidOf('susy:acidic_wastewater', 50))
    .duration(100)
    .EUt(30)

  event.recipes.susy.vacuum_distillation('yhjyghk3bevq53') // remapped from original line 2925
    .inputFluids(safeFluidOf('susy:hydrogen_silsesquioxane_solution', 3050))
    .chancedOutput('625x #forge:dusts/hydrogen_silsesquioxane', 625, 0)
    .outputFluids(safeFluidOf('minecraft:water', 50))
    .outputFluids(safeFluidOf('gtceu:toluene', 3000))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.mixer('s26or8dnhmlmto') // remapped from original line 2944
    .itemInputs('1x #forge:dusts/tiny_hydrogen_silsesquioxane')
    .inputFluids(safeFluidOf('susy:methyl_isobutyl_ketone', 11000))
    .outputFluids(safeFluidOf('susy:hydrogen_silsesquioxane_photoresist', 11000))
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('q6bqk2wfwxvmov') // remapped from original line 2954
    .inputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 3000))
    .itemInputs('4x #forge:dusts/any_purity_phosphorus')
    .outputFluids(safeFluidOf('susy:phosphine', 1000))
    .itemOutputs('18x #forge:dusts/potassium_hypophosphite')
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('ic5ydmqh3tpzgw') // remapped from original line 2963
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 3000))
    .itemInputs('4x #forge:dusts/any_purity_phosphorus')
    .outputFluids(safeFluidOf('susy:phosphine', 1000))
    .itemOutputs('18x #forge:dusts/sodium_hypophosphite')
    .duration(200)
    .EUt(30)

  event.recipes.susy.roaster('cr3rjfxnraog6g') // remapped from original line 2972
    .itemInputs('12x #forge:dusts/sodium_hypophosphite')
    .outputFluids(safeFluidOf('susy:phosphine', 1000))
    .itemOutputs('8x #forge:dusts/disodium_phosphate')
    .duration(200)
    .EUt(30)

  event.recipes.susy.roaster('7nsyijblnvling') // remapped from original line 2980
    .itemInputs('12x #forge:dusts/potassium_hypophosphite')
    .outputFluids(safeFluidOf('susy:phosphine', 1000))
    .itemOutputs('8x #forge:dusts/dipotassium_phosphate')
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('0k0mnlnafbwscq') // remapped from original line 2990
    .itemInputs('5x #forge:dusts/boron_trioxide')
    .inputFluids(safeFluidOf('susy:hydrogen_fluoride', 6000))
    .outputFluids(safeFluidOf('susy:boron_trifluoride', 2000))
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('afsybcphnr1hgp') // remapped from original line 2999
    .itemInputs('7x #forge:dusts/boric_acid')
    .inputFluids(safeFluidOf('susy:hydrogen_fluoride', 3000))
    .outputFluids(safeFluidOf('susy:boron_trifluoride', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.large_chemical_reactor('q1rgf86pgytopr') // remapped from original line 3009
    .itemInputs('12x #forge:dusts/sodium_cyanide')
    .inputFluids(safeFluidOf('susy:ethylenediamine', 1000))
    .inputFluids(safeFluidOf('susy:formaldehyde', 4000))
    .inputFluids(safeFluidOf('gtceu:diluted_hydrochloric_acid', 8000))
    .itemOutputs('32x #forge:dusts/ethylenediaminetetraacetic_acid')
    .outputFluids(safeFluidOf('gtceu:ammonia', 4000))
    .outputFluids(safeFluidOf('susy:wastewater', 4000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.batch_reactor('wmuospegj7hgdx') // remapped from original line 3021
    .itemInputs('36x #forge:dusts/ethylenediaminetetraacetic_acid')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 4000))
    .outputFluids(safeFluidOf('susy:tetrasodium_ethylenediaminetetraacetate_solution', 4000))
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.distillery('xmxawn9zldsup7') // remapped from original line 3029
    .inputFluids(safeFluidOf('susy:tetrasodium_ethylenediaminetetraacetate_solution', 4000))
    .outputFluids(safeFluidOf('susy:diluted_saltwater', 8000))
    .itemOutputs('36x #forge:dusts/tetrasodium_ethylenediaminetetraacetate')
    .duration(300)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('tloieiyjkhilpj') // remapped from original line 3038
    .inputFluids(safeFluidOf('susy:phosphorus_trichloride', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 50))
    .outputFluids(safeFluidOf('susy:phosphoryl_chloride', 50))
    .duration(10)
    .EUt(30)

  event.recipes.susy.roaster('nafsailxskj6et') // remapped from original line 3047
    .itemInputs('4x #forge:dusts/any_purity_phosphorus')
    .inputFluids(safeFluidOf('gtceu:chlorine', 12000))
    .outputFluids(safeFluidOf('susy:phosphorus_trichloride', 2000))
    .itemOutputs('12x #forge:dusts/phosphorus_pentachloride')
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.mixer('jzuvvlyhlln7dq') // remapped from original line 3056
    .inputFluids(safeFluidOf('susy:phosphorus_trichloride', 1000))
    .itemInputs('4x #forge:dusts/any_purity_phosphorus')
    .outputFluids(safeFluidOf('susy:phosphorus_solution', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('vzlsmorrxjggqh') // remapped from original line 3064
    .inputFluids(safeFluidOf('susy:phosphorus_solution', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 600))
    .outputFluids(safeFluidOf('susy:phosphorus_trichloride', 250))
    .duration(10)
    .EUt(30)

  event.recipes.susy.batch_reactor('umccc07ssen22l') // remapped from original line 3072
    .inputFluids(safeFluidOf('susy:phosphorus_trichloride', 1000))
    .inputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .itemOutputs('6x #forge:dusts/phosphorus_pentachloride')
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('rzgieujhfkyaid') // remapped from original line 3081
    .inputFluids(safeFluidOf('susy:para_xylene', 1000))
    .inputFluids(safeFluidOf('gtceu:chloromethane', 2000))
    .itemOutputs('24x #forge:dusts/durene')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 2000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('2s1pygkjzsgjze') // remapped from original line 3093
    .inputFluids(safeFluidOf('gtceu:ammonia', 100))
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 50))
    .outputFluids(safeFluidOf('susy:urea_solution', 50))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.distillery('jfdnbh4mid2sgt') // remapped from original line 3101
    .inputFluids(safeFluidOf('susy:urea_solution', 1000))
    .itemOutputs('8x #forge:dusts/urea')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.distillery('zu7xvcdgu4nxsa') // remapped from original line 3110
    .inputFluids(safeFluidOf('susy:sodium_nitrate_solution', 1000))
    .itemOutputs('5x #forge:dusts/sodium_nitrate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(140)
    .EUt(30)

  event.recipes.susy.roaster('wmpqratpedcwi2') // remapped from original line 3118
    .itemInputs('5x #forge:dusts/sodium_nitrate')
    .itemOutputs('4x #forge:dusts/sodium_nitrite')
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .duration(400)
    .EUt(30)

  event.recipes.susy.batch_reactor('3xpwxbyc9ztopn') // remapped from original line 3126
    .inputFluids(safeFluidOf('susy:sodium_nitrate', 720))
    .inputFluids(safeFluidOf('gtceu:lead', 144))
    .outputFluids(safeFluidOf('susy:sodium_nitrite', 576))
    .itemOutputs('2x #forge:dusts/lead_oxide')
    .duration(20)
    .EUt(30)

  event.recipes.susy.roaster('cydir8pcge0get') // remapped from original line 3135
    .itemInputs('8x #forge:dusts/sodium_nitrite')
    .itemOutputs('3x #forge:dusts/sodium_oxide')
    .outputFluids(safeFluidOf('gtceu:nitric_oxide', 1000))
    .outputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 1000))
    .duration(60)
    .EUt(30)

  event.recipes.susy.batch_reactor('dzstmku3g9jbot') // remapped from original line 3144
    .itemInputs('3x #forge:dusts/sodium_oxide')
    .inputFluids(safeFluidOf('minecraft:water', 3000))
    .outputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .duration(60)
    .EUt(30)

  event.recipes.gtceu.large_chemical_reactor('bcgx0abful1phq') // remapped from original line 3152
    .itemInputs('5x #forge:dusts/sodium_nitrate')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .inputFluids(safeFluidOf('gtceu:phosphoric_acid', 1000))
    .inputFluids(safeFluidOf('susy:urea_solution', 1000))
    .itemInputs('16x #forge:dusts/para_phenylenediamine')
    .itemInputs('4x #forge:dusts/potassium_iodide')
    .outputFluids(safeFluidOf('susy:impure_diiodobenzene', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.centrifuge('aja52j73hj7ayn') // remapped from original line 3165
    .inputFluids(safeFluidOf('susy:impure_diiodobenzene', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('12x #forge:dusts/diiodobenzene')
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.mixer('8m8slxew16gg8f') // remapped from original line 3175
    .itemInputs('12x #forge:dusts/diiodobenzene')
    .inputFluids(safeFluidOf('gtceu:ethanol', 1000))
    .outputFluids(safeFluidOf('susy:diiodobenzene_solution', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.fixed_bed_reactor('cr9pjr72rca2fi') // remapped from original line 3183
    .inputFluids(safeFluidOf('susy:diiodobenzene_solution', 50))
    .inputFluids(safeFluidOf('susy:ammonia_solution', 150))
    .outputFluids(safeFluidOf('susy:impure_four_four_oxydianiline', 200))
    .notConsumable('1x #forge:catalysts/bed_copper')
    .duration(300)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('i1i3owhp1hyyss') // remapped from original line 3192
    .circuit(1)
    .inputFluids(safeFluidOf('minecraft:water', 50))
    .inputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('susy:ammonia_solution', 50))
    .duration(5)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('urbxqurgdoetug') // remapped from original line 3201
    .circuit(2)
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .inputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('susy:diluted_ammonia_solution', 100))
    .duration(1)
    .EUt(30)

  event.recipes.gtceu.mixer('nzhw2z8ex8xupf') // remapped from original line 3210
    .inputFluids(safeFluidOf('susy:ammonia_solution', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:diluted_ammonia_solution', 1000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy./*DISTILLATION_TOWER('agxl9ytwefh1om') // remapped from original line 3219
    .disableDistilleryRecipes(true)
    .circuit(1)
    .inputFluids(safeFluidOf('susy:diluted_ammonia_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .outputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .duration(40)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('1onkznrlinff8g') // remapped from original line 3229
    .inputFluids(safeFluidOf('susy:diluted_ammonia_solution', 1000))
    .outputFluids(safeFluidOf('susy:ammonia_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(20)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('owvwvy3fbo6idn') // remapped from original line 3238
    .inputFluids(safeFluidOf('susy:impure_four_four_oxydianiline', 8000))
    .outputFluids(safeFluidOf('susy:four_four_oxydianiline_slurry', 5000))
    .outputFluids(safeFluidOf('gtceu:ethanol', 2000))
    .itemOutputs('24x #forge:dusts/ammonium_iodide')
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.centrifuge('mjzo0b2jygktrl') // remapped from original line 3247
    .inputFluids(safeFluidOf('susy:four_four_oxydianiline_slurry', 5000))
    .outputFluids(safeFluidOf('minecraft:water', 5000))
    .itemOutputs('27x #forge:dusts/four_four_oxydianiline')
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.electrolytic_cell('knqncdwofnhl9c') // remapped from original line 3255
    .inputFluids(safeFluidOf('susy:ammonium_iodide', 1728))
    .outputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .itemOutputs('2x #forge:dusts/iodine')
    .duration(300)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('18a5xtlhyb8lmi') // remapped from original line 3265
    .inputFluids(safeFluidOf('susy:ethylene_oxide', 70))
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .outputFluids(safeFluidOf('susy:ethylene_glycol_mix', 100))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('jdmitdngqh224i') // remapped from original line 3273
    .inputFluids(safeFluidOf('susy:ethylene_glycol_mix', 1000))
    .outputFluids(safeFluidOf('susy:diethylene_glycol', 100))
    .outputFluids(safeFluidOf('susy:ethylene_glycol', 500))
    .outputFluids(safeFluidOf('minecraft:water', 400))
    .duration(200)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('iqe6opfw9f2unw') // remapped from original line 3283
    .inputFluids(safeFluidOf('gtceu:bromine', 100))
    .inputFluids(safeFluidOf('gtceu:sulfur_dioxide', 50))
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .outputFluids(safeFluidOf('susy:brominated_sulfur_dioxide', 150))
    .EUt(30)
    .duration(15)

  event.recipes.gtceu.distillation_tower('v9wbxsigaigwlw') // remapped from original line 3292
    .inputFluids(safeFluidOf('susy:brominated_sulfur_dioxide', 3000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('susy:hydrogen_bromide', 2000))
    .EUt(30)
    .duration(300)

  event.recipes.susy.bubble_column_reactor('ri5pamcuoumbvi') // remapped from original line 3300
    .inputFluids(safeFluidOf('susy:hydrogen_bromide', 50))
    .inputFluids(safeFluidOf('minecraft:water', 50))
    .outputFluids(safeFluidOf('susy:hydrobromic_acid', 50))
    .EUt(7)
    .duration(1)

  event.recipes.susy.batch_reactor('ceap1xhkrh2whe') // remapped from original line 3308
    .itemInputs('3x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('susy:hydrogen_bromide', 1000))
    .outputFluids(safeFluidOf('susy:sodium_bromide_solution', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.susy.reaction_furnace('ydtp9aoisqfb7r') // remapped from original line 3317
    .inputFluids(safeFluidOf('gtceu:methane', 50))
    .inputFluids(safeFluidOf('gtceu:ammonia', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 150))
    .notConsumable('1x #forge:catalysts/bed_platinum')
    .outputFluids(safeFluidOf('susy:gtfo_hydrogen_cyanide', 50))
    .outputFluids(safeFluidOf('minecraft:water', 150))
    .EUt(120)
    .duration(10)

  event.recipes.susy.batch_reactor('oaxn5gufprfi36') // remapped from original line 3328
    .inputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .itemInputs('1x #forge:dusts/any_purity_sodium')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 1000))
    .itemOutputs('4x #forge:dusts/sodium_amide')
    .EUt(120)
    .duration(200)

  event.recipes.susy.roaster('uxuuieklo4tbg2') // remapped from original line 3337
    .itemInputs('1x #forge:dusts/any_purity_carbon')
    .itemInputs('4x #forge:dusts/sodium_amide')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .itemOutputs('3x #forge:dusts/sodium_cyanide')
    .EUt(120)
    .duration(200)

  event.recipes.susy.batch_reactor('qf5drfqkse2ohx') // remapped from original line 3346
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 1000))
    .itemInputs('3x #forge:dusts/sodium_cyanide')
    .outputFluids(safeFluidOf('susy:gtfo_hydrogen_cyanide', 1000))
    .outputFluids(safeFluidOf('gtceu:salt_water', 1000))
    .EUt(120)
    .duration(200)

  event.recipes.susy.fixed_bed_reactor('ahq0xgo3emd9jh') // remapped from original line 3356
    .inputFluids(safeFluidOf('gtceu:ethylene', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 50))
    .notConsumable('1x #forge:catalysts/bed_silver')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 5))
    .outputFluids(safeFluidOf('susy:impure_ethylene_oxide', 45))
    .EUt(30)
    .duration(10)

  event.recipes.gtceu.distillation_tower('guqqjobuk1ws28') // remapped from original line 3366
    .inputFluids(safeFluidOf('susy:impure_ethylene_oxide', 900))
    .outputFluids(safeFluidOf('minecraft:water', 100))
    .outputFluids(safeFluidOf('susy:ethylene_oxide', 800))
    .EUt(30)
    .duration(200)

  event.recipes.susy.tube_furnace('kuu2mcqzvrtsx0') // remapped from original line 3376
    .itemInputs('1x #forge:dusts/any_purity_aluminium')
    .inputFluids(safeFluidOf('gtceu:nitrogen', 1000))
    .notConsumable('6x #forge:dusts/ammonium_chloride')
    .itemOutputs('2x #forge:dusts/aluminium_nitride')
    .EUt(1920)
    .duration(20)

  event.recipes.susy.sintering_oven('vjfz6s6lhfjfau') // remapped from original line 3385
    .itemInputs('10x #forge:dusts/aluminium_nitride')
    .itemInputs('45x #forge:dusts/alumina')
    .notConsumable(safeFluidOf('gtceu:argon', 1000))
    .itemOutputs('1x #forge:dusts/aluminium_oxynitride')
    .EUt(1920)
    .duration(20)

  event.recipes.susy.continuous_stirred_tank_reactor('p1dgpq8wzx8e18') // remapped from original line 3396
    .inputFluids(safeFluidOf('susy:butanediol', 50))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:tetrahydrofuran_solution', 150))
    .EUt(30)
    .duration(5)

  event.recipes.gtceu.distillation_tower('fxpp3ncmgocqrw') // remapped from original line 3404
    .inputFluids(safeFluidOf('susy:tetrahydrofuran_solution', 3000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:tetrahydrofuran', 1000))
    .EUt(90)
    .duration(600)

  event.recipes.susy.batch_reactor('cubmpovck2s7eh') // remapped from original line 3415
    .inputFluids(safeFluidOf('gtceu:sodium', 144))
    .inputFluids(safeFluidOf('susy:cyclopentadiene', 1000))
    .inputFluids(safeFluidOf('susy:tetrahydrofuran', 1000))
    .outputFluids(safeFluidOf('susy:sodium_cyclopentadienide_solution', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 1000))
    .EUt(1920)
    .duration(60)

  event.recipes.susy.batch_reactor('xsq6zydbcdnr2a') // remapped from original line 3425
    .itemInputs('5x #forge:dusts/zirconium_tetrachloride')
    .inputFluids(safeFluidOf('susy:tetrahydrofuran', 2000))
    .itemOutputs('7x #forge:dusts/zirconium_tetrachloride_tetrahydrofuran_complex')
    .EUt(1920)
    .duration(60)

  event.recipes.susy.batch_reactor('s2usgd6adh5whg') // remapped from original line 3433
    .itemInputs('7x #forge:dusts/zirconium_tetrachloride_tetrahydrofuran_complex')
    .inputFluids(safeFluidOf('susy:sodium_cyclopentadienide_solution', 2000))
    .itemOutputs('1x #forge:dusts/zirconocene_dichloride')
    .itemOutputs('4x #forge:dusts/salt')
    .outputFluids(safeFluidOf('susy:tetrahydrofuran', 4000))
    .EUt(1920)
    .duration(60)

  event.recipes.susy.batch_reactor('pwcxp1obbrcw5t') // remapped from original line 3443
    .itemInputs('1x #forge:dusts/any_purity_aluminium')
    .itemInputs('3x #forge:dusts/any_purity_sodium')
    .inputFluids(safeFluidOf('gtceu:chloromethane', 3000))
    .itemOutputs('6x #forge:dusts/salt')
    .outputFluids(safeFluidOf('susy:trimethylaluminium', 1000))
    .EUt(1920)
    .duration(60)

  event.recipes.susy.batch_reactor('eidkwjwsdd3pwz') // remapped from original line 3453
    .inputFluids(safeFluidOf('susy:trimethylaluminium', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('1x #forge:dusts/methylaluminoxane')
    .outputFluids(safeFluidOf('gtceu:methane', 2000))
    .EUt(1920)
    .duration(60)

  event.recipes.susy.batch_reactor('olivfndmwhzsmh') // remapped from original line 3462
    .itemInputs('6x #forge:dusts/zirconium_dioxide')
    .itemInputs('1x #forge:dusts/methylaluminoxane')
    .itemInputs('1x #forge:dusts/zirconocene_dichloride')
    .notConsumable(safeFluidOf('gtceu:toluene', 1000))
    .itemOutputs('1x #forge:dusts/kaminsky_catalyst')
    .EUt(1920)
    .duration(60)

  event.recipes.gtceu.distillation_tower('0cchh87wrmui87') // remapped from original line 3474
    .inputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 500))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 250))
    .outputFluids(safeFluidOf('minecraft:water', 250))
    .EUt(30)
    .duration(50)

  event.recipes.gtceu.mixer('0gueivdpeefzza') // remapped from original line 3482
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 2000))
    .EUt(30)
    .duration(120)

  event.recipes.susy.batch_reactor('1kzqsk3lqad68w') // remapped from original line 3493
    .itemInputs('14x #forge:dusts/phosphorus_pentoxide')
    .inputFluids(safeFluidOf('minecraft:water', 4000))
    .outputFluids(safeFluidOf('gtceu:phosphoric_acid', 4000))
    .EUt(30)
    .duration(40)

  event.recipes.susy.batch_reactor('edb2mr4oah7dui') // remapped from original line 3505
    .inputFluids(safeFluidOf('gtceu:phenol', 1000))
    .inputFluids(safeFluidOf('gtceu:nitration_mixture', 6000))
    .outputFluids(safeFluidOf('susy:tnp_slurry', 3000))
    .duration(200)
    .EUt(24)

  event.recipes.gtceu.distillery('xwj2y8ft80zh4v') // remapped from original line 3513
    .inputFluids(safeFluidOf('susy:tnp_slurry', 1000))
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 1000))
    .itemOutputs('7x #forge:dusts/picric_acid')
    .duration(300)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('mowucdaxitqjat') // remapped from original line 3523
    .inputFluids(safeFluidOf('susy:carbon_disulfide', 50))
    .inputFluids(safeFluidOf('susy:ammonia_solution', 50))
    .outputFluids(safeFluidOf('susy:ammonium_thiocyanate_solution', 50))
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 50))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillery('zmsffwhxfcmb4p') // remapped from original line 3532
    .inputFluids(safeFluidOf('susy:ammonium_thiocyanate_solution', 1000))
    .itemOutputs('8x #forge:dusts/ammonium_thiocyanate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(60)
    .EUt(30)

  event.recipes.susy.trickle_bed_reactor('8ttkenxh3ddhem') // remapped from original line 3541
    .notConsumable('1x #forge:dusts/aluminium_chloride')
    .circuit(1)
    .inputFluids(safeFluidOf('gtceu:benzene', 50))
    .inputFluids(safeFluidOf('gtceu:chloromethane', 50))
    .outputFluids(safeFluidOf('gtceu:toluene', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .duration(10)
    .EUt(30)

  event.recipes.susy.trickle_bed_reactor('ocpg7rapst1kjn') // remapped from original line 3553
    .notConsumable('1x #forge:dusts/aluminium_chloride')
    .circuit(2)
    .inputFluids(safeFluidOf('gtceu:benzene', 50))
    .inputFluids(safeFluidOf('gtceu:chloromethane', 100))
    .outputFluids(safeFluidOf('susy:ortho_para_xylene_mixture', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 100))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('vnqtuxpwehl6px') // remapped from original line 3564
    .inputFluids(safeFluidOf('susy:ortho_para_xylene_mixture', 1000))
    .outputFluids(safeFluidOf('susy:para_xylene', 575))
    .outputFluids(safeFluidOf('susy:ortho_xylene', 375))
    .outputFluids(safeFluidOf('susy:meta_xylene', 50))
    .duration(100)
    .EUt(voltAmps[1] * 2)

  event.recipes.susy.trickle_bed_reactor('2ash70f6pn3soh') // remapped from original line 3574
    .notConsumable('1x #forge:dusts/aluminium_chloride')
    .inputFluids(safeFluidOf('gtceu:toluene', 50))
    .inputFluids(safeFluidOf('gtceu:chloromethane', 50))
    .outputFluids(safeFluidOf('susy:ortho_para_xylene_mixture', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.cracker('tzcentbuekyxga') // remapped from original line 3586
    .inputFluids(safeFluidOf('gtceu:toluene', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 4000))
    .outputFluids(safeFluidOf('susy:hydrodealkylated_toluene_mixture', 1000))
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.gtceu.distillation_tower('jaqshs4l1po4bk') // remapped from original line 3594
    .inputFluids(safeFluidOf('susy:hydrodealkylated_toluene_mixture', 1000))
    .chancedOutput('250x #forge:dusts/biphenyl', 250, 0)
    .outputFluids(safeFluidOf('gtceu:toluene', 200))
    .outputFluids(safeFluidOf('gtceu:benzene', 750))
    .outputFluids(safeFluidOf('gtceu:methane', 750))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 2400))
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('zhnvnmbzuwmzoz') // remapped from original line 3605
    .notConsumable('1x #forge:dusts/iron_iii_chloride')
    .itemInputs('1x #forge:dusts/biphenyl')
    .inputFluids(safeFluidOf('gtceu:chlorine', 5000))
    .outputFluids(safeFluidOf('gtceu:polychlorinated_biphenyl', 1000))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 5000))
    .duration(15)
    .EUt(30)

  event.recipes.susy.fluidized_bed_reactor('jozeihamr1d621') // remapped from original line 3615
    .notConsumable('1x #forge:springs/nichrome')
    .inputFluids(safeFluidOf('gtceu:benzene', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 50))
    .chancedOutput('500x #forge:dusts/biphenyl', 500, 0)
    .outputFluids(safeFluidOf('gtceu:benzene', 900))
    .outputFluids(safeFluidOf('minecraft:water', 50))
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('ovr3612vpj4hkd') // remapped from original line 3626
    .inputFluids(safeFluidOf('gtceu:sodium_hydroxide', 432))
    .inputFluids(safeFluidOf('gtceu:chlorobenzene', 1000))
    .itemOutputs('2x #forge:dusts/salt')
    .outputFluids(safeFluidOf('gtceu:phenol', 1000))
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('qrifoeh8odbz5i') // remapped from original line 3635
    .inputFluids(safeFluidOf('susy:sodium_phenoxide_solution', 1000))
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .outputFluids(safeFluidOf('gtceu:phenol', 1000))
    .outputFluids(safeFluidOf('gtceu:salt_water', 1000))
    .duration(100)
    .EUt(30)

  event.recipes.susy.roaster('dtrupqmzdykylf') // remapped from original line 3645
    .inputFluids(safeFluidOf('gtceu:phenol', 1000))
    .itemInputs('1x #forge:dusts/any_purity_zinc')
    .outputFluids(safeFluidOf('gtceu:benzene', 1000))
    .itemOutputs('2x #forge:dusts/zinc_oxide')
    .duration(120)
    .EUt(30)

  event.recipes.susy.batch_reactor('ovbx1f0gh0tvfb') // remapped from original line 3655
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .itemInputs('1x #forge:dusts/zinc_oxide')
    .outputFluids(safeFluidOf('susy:diluted_zinc_chloride_solution', 2000))
    .duration(120)
    .EUt(30)

  event.recipes.gtceu.distillery('hyvvkl1gctso7r') // remapped from original line 3663
    .inputFluids(safeFluidOf('susy:diluted_zinc_chloride_solution', 2000))
    .itemOutputs('3x #forge:dusts/zinc_chloride')
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.continuous_stirred_tank_reactor('4cepvmc893hfzv') // remapped from original line 3672
    .inputFluids(safeFluidOf('susy:triethylaluminium', 50))
    .inputFluids(safeFluidOf('gtceu:ethylene', 300))
    .inputFluids(safeFluidOf('susy:diethyl_ether', 50))
    .outputFluids(safeFluidOf('susy:alfol_trialkylaluminium_mixture', 50))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('grlwt20lvi8aqr') // remapped from original line 3681
    .inputFluids(safeFluidOf('susy:alfol_trialkylaluminium_mixture', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 3000))
    .outputFluids(safeFluidOf('susy:aluminium_alkoxide_solution', 1000))
    .duration(500)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillery('tcvlijdx3v8jnd') // remapped from original line 3689
    .inputFluids(safeFluidOf('susy:aluminium_alkoxide_solution', 1000))
    .itemOutputs('1x #forge:dusts/aluminium_alkoxide_mixture')
    .outputFluids(safeFluidOf('susy:diethyl_ether', 1000))
    .duration(500)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('jfbi4dk5iecuzl') // remapped from original line 3697
    .itemInputs('1x #forge:dusts/aluminium_alkoxide_mixture')
    .inputFluids(safeFluidOf('minecraft:water', 3000))
    .itemOutputs('7x #forge:dusts/aluminium_hydroxide')
    .outputFluids(safeFluidOf('susy:ziegler_alfol_mixture', 3000))
    .duration(500)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillation_tower('el1q5ouzfe3j5g') // remapped from original line 3706
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

  event.recipes.susy.batch_reactor('2pzdnixl6ldfmv') // remapped from original line 3723
    .itemInputs('3x #forge:dusts/nickel_chloride')
    .itemInputs('2x #forge:dusts/triphenylphosphine')
    .notConsumable(safeFluidOf('gtceu:acetic_acid', 1000))
    .itemOutputs('1x #forge:dusts/dichlorobistriphenylphosphinenickel_ii')
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('z1iue6wh9gw5ef') // remapped from original line 3732
    .itemInputs('1x #forge:dusts/any_purity_zinc')
    .itemInputs('1x #forge:dusts/dichlorobistriphenylphosphinenickel_ii')
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 2000))
    .notConsumable(safeFluidOf('susy:tetrahydrofuran', 1000))
    .itemOutputs('1x #forge:dusts/dicarbonylbistriphenylphosphinenickel_zero')
    .itemOutputs('3x #forge:dusts/zinc_chloride')
    .duration(200)
    .EUt(voltAmps[3])

  event.recipes.susy.trickle_bed_reactor('aifioj8xzjnrhz') // remapped from original line 3743
    .notConsumable('1x #forge:dusts/dicarbonylbistriphenylphosphinenickel_zero')
    .inputFluids(safeFluidOf('gtceu:butadiene', 100))
    .outputFluids(safeFluidOf('susy:cyclooctadiene', 50))
    .duration(10)
    .EUt(voltAmps[3])

  event.recipes.susy.continuous_stirred_tank_reactor('wtwduporckjsds') // remapped from original line 3753
    .inputFluids(safeFluidOf('gtceu:ethanol', 150))
    .inputFluids(safeFluidOf('susy:phosphoryl_chloride', 50))
    .outputFluids(safeFluidOf('susy:acidic_triethyl_phosphate', 200))
    .duration(3)
    .EUt(120)

  event.recipes.susy.batch_reactor('qora1v3isej2y9') // remapped from original line 3761
    .itemInputs('9x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('susy:acidic_triethyl_phosphate', 4000))
    .outputFluids(safeFluidOf('susy:triethyl_phosphate', 1000))
    .outputFluids(safeFluidOf('gtceu:salt_water', 3000))
    .duration(100)
    .EUt(120)

  event.recipes.susy.reaction_furnace('huiik9x9zonszz') // remapped from original line 3770
    .notConsumable(safeFluidOf('gtceu:ammonia', 1000))
    .notConsumable(safeFluidOf('susy:triethyl_phosphate', 1000))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 1000))
    .outputFluids(safeFluidOf('gtceu:ethenone', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(40)
    .EUt(480)

  event.recipes.susy.continuous_stirred_tank_reactor('eqsoe0icjsixi4') // remapped from original line 3782
    .inputFluids(safeFluidOf('gtceu:ethenone', 50))
    .inputFluids(safeFluidOf('gtceu:acetone', 50))
    .outputFluids(safeFluidOf('susy:isopropenyl_acetate', 50))
    .duration(20)
    .EUt(120)

  event.recipes.gtceu.pyrolyse_oven('e2lsytxg5bcwyo') // remapped from original line 3790
    .inputFluids(safeFluidOf('susy:isopropenyl_acetate', 1000))
    .outputFluids(safeFluidOf('susy:acetylacetone', 1000))
    .duration(400)
    .EUt(120)

  event.recipes.susy.batch_reactor('yqg3ncj75o1zsx') // remapped from original line 3799
    .itemInputs('2x #forge:dusts/nickel_ii_oxide')
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 2000))
    .outputFluids(safeFluidOf('susy:nickel_nitrate_solution', 1000))
    .duration(20)
    .EUt(30)

  event.recipes.gtceu.distillery('0juenqxwzru55k') // remapped from original line 3807
    .inputFluids(safeFluidOf('susy:nickel_nitrate_solution', 1000))
    .itemOutputs('9x #forge:dusts/nickel_ii_nitrate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(20)
    .EUt(30)

  event.recipes.susy.batch_reactor('wshz7c0gmjemyb') // remapped from original line 3815
    .itemInputs('9x #forge:dusts/nickel_ii_nitrate')
    .inputFluids(safeFluidOf('susy:acetylacetone', 2000))
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .outputFluids(safeFluidOf('susy:nickel_ii_bisacetylacetonate_solution', 2000))
    .duration(120)
    .EUt(30)

  event.recipes.susy.roaster('zctff9hjr0jljf') // remapped from original line 3824
    .inputFluids(safeFluidOf('susy:nickel_ii_bisacetylacetonate_solution', 2000))
    .itemOutputs('1x #forge:dusts/nickel_ii_bisacetylacetonate')
    .itemOutputs('10x #forge:dusts/sodium_nitrate')
    .outputFluids(safeFluidOf('susy:dense_steam', 2000))
    .duration(120)
    .EUt(480)

  event.recipes.susy.batch_reactor('pmcegdszsrlkqc') // remapped from original line 3833
    .itemInputs('1x #forge:dusts/nickel_ii_bisacetylacetonate')
    .inputFluids(safeFluidOf('susy:cyclooctadiene', 2000))
    .inputFluids(safeFluidOf('susy:triethylaluminium', 2000))
    .itemOutputs('1x #forge:dusts/biscyclooctadienenickel_zero')
    .outputFluids(safeFluidOf('gtceu:ethane', 1000))
    .outputFluids(safeFluidOf('gtceu:ethylene', 1000))
    .outputFluids(safeFluidOf('susy:diethylaluminium_acetylacetonate', 2000))
    .duration(120)
    .EUt(30)

  event.recipes.susy.batch_reactor('kt4szgej02okbd') // remapped from original line 3845
    .inputFluids(safeFluidOf('susy:diethylaluminium_acetylacetonate', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 3000))
    .outputFluids(safeFluidOf('susy:aluminium_chloride_solution', 3000))
    .outputFluids(safeFluidOf('susy:acetylacetone', 1000))
    .outputFluids(safeFluidOf('gtceu:ethylene', 2000))
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.distillery('mvyugeolhjruut') // remapped from original line 3855
    .inputFluids(safeFluidOf('susy:aluminium_chloride_solution', 3000))
    .itemOutputs('4x #forge:dusts/aluminium_chloride')
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.susy.batch_reactor('7b5xms8afqddo3') // remapped from original line 3863
    .itemInputs('1x #forge:dusts/triphenylphosphine')
    .inputFluids(safeFluidOf('susy:phosphorus_trichloride', 500))
    .outputFluids(safeFluidOf('susy:chlorodiphenylphosphine', 1500))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.continuous_stirred_tank_reactor('vgx378gc2via0f') // remapped from original line 3871
    .inputFluids(safeFluidOf('susy:chlorodiphenylphosphine', 50))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 50))
    .notConsumable(safeFluidOf('susy:sodium_hydroxide_solution', 50))
    .outputFluids(safeFluidOf('susy:diphenylphosphinoacetic_acid', 50))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('ftcpiahxigz15u') // remapped from original line 3880
    .itemInputs('1x #forge:dusts/biscyclooctadienenickel_zero')
    .inputFluids(safeFluidOf('susy:diphenylphosphinoacetic_acid', 1000))
    .inputFluids(safeFluidOf('susy:ethylene_glycol', 1000))
    .outputFluids(safeFluidOf('susy:shell_higher_olefin_catalyst_solution', 1000))
    .duration(200)
    .EUt(voltAmps[3])

  event.recipes.susy.batch_reactor('7gcpfassazf3cw') // remapped from original line 3889
    .inputFluids(safeFluidOf('gtceu:ethylene', 4000)))
    .notConsumable(safeFluidOf('susy:shell_higher_olefin_catalyst_solution', 1000))
    .outputFluids(safeFluidOf('susy:alpha_olefin_mixture', 1000))
    .duration(125)
    .EUt(voltAmps[3])

  event.recipes.gtceu.distillation_tower('gumvwpxu78sgkw') // remapped from original line 3897
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

  event.recipes.gtceu.large_chemical_reactor('byxjo9uajffo6j') // remapped from original line 3916
    .inputFluids(safeFluidOf('susy:ethylene_glycol', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 4000))
    .notConsumable(safeFluidOf('gtceu:nitric_acid', 800))
    .notConsumable('7x #forge:dusts/vanadium_pentoxide')
    .notConsumable('4x #forge:dusts/iron_iii_chloride')
    .itemOutputs('1x #forge:dusts/oxalic_acid')
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .duration(120)
    .EUt(voltAmps[3])

  event.recipes.susy.continuous_stirred_tank_reactor('tysfotqsknmckd') // remapped from original line 3929
    .inputFluids(safeFluidOf('gtceu:benzene', 50))
    .inputFluids(safeFluidOf('gtceu:nitration_mixture', 100))
    .outputFluids(safeFluidOf('susy:acidic_nitrobenzene_mixture', 150))
    .duration(5)
    .EUt(voltAmps[2])

  event.recipes.susy.phase_separator('piymck02cxm4mr') // remapped from original line 3937
    .inputFluids(safeFluidOf('susy:acidic_nitrobenzene_mixture', 3000))
    .outputFluids(safeFluidOf('gtceu:nitrobenzene', 1000))
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 2000))
    .duration(50)

  event.recipes.susy.fixed_bed_reactor('mbpg57ptbwpanj') // remapped from original line 3944
    .notConsumable('1x #forge:catalysts/bed_palladium')
    .inputFluids(safeFluidOf('gtceu:nitrobenzene', 50))
    .inputFluids(safeFluidOf('susy:hot_hp_hydrogen', 150))
    .outputFluids(safeFluidOf('susy:gtfo_aniline', 50))
    .outputFluids(safeFluidOf('minecraft:water', 100))
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.gtceu.fluid_heater('fljuqcioi0t5la') // remapped from original line 3955
    .circuit(2)
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .outputFluids(safeFluidOf('susy:gtfo_heated_water', 1000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.bubble_column_reactor('ue3ycs38tevfud') // remapped from original line 3964
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 100))
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 50))
    .outputFluids(safeFluidOf('susy:diluted_sodium_carbonate_solution', 150))
    .duration(4)
    .EUt(30)

  event.recipes.gtceu.distillery('scdsghfxzvjiaa') // remapped from original line 3972
    .inputFluids(safeFluidOf('susy:diluted_sodium_carbonate_solution', 3000))
    .itemOutputs('6x #forge:dusts/soda_ash')
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .duration(120)
    .EUt(30)

  event.recipes.susy.batch_reactor('8k8ectjjiyr1kl') // remapped from original line 3982
    .itemInputs('1x #forge:dusts/palladium_chloride')
    .itemInputs('4x #forge:dusts/activated_carbon')
    .inputFluids(safeFluidOf('susy:demineralized_water', 250))
    .inputFluids(safeFluidOf('susy:formaldehyde', 50))
    .itemOutputs('5x #forge:dusts/palladium_on_carbon')
    .duration(120)
    .EUt(30)

  event.recipes.susy.batch_reactor('sdxe6f2sydtz54') // remapped from original line 3994
    .itemInputs('5x #forge:dusts/calcite') // CaCO3 + 2 CH3COOH --> Ca(CH3COO)2 + H2O + CO2
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 2000))
    .outputFluids(safeFluidOf('gtceu:dissolved_calcium_acetate', 1000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .duration(1800)
    .EUt(16)

  event.recipes.susy.batch_reactor('vbrdbtug0rg7oz') // remapped from original line 4003
    .itemInputs('2x #forge:dusts/quicklime') // CaO + 2 CH3COOH --> Ca(CH3COO)2 + H2O
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 2000))
    .outputFluids(safeFluidOf('gtceu:dissolved_calcium_acetate', 1000))
    .duration(1800)
    .EUt(16)

  event.recipes.gtceu.distillery('fiexugisxd7p3b') // remapped from original line 4011
    .inputFluids(safeFluidOf('gtceu:dissolved_calcium_acetate', 1000))
    .itemOutputs('15x #forge:dusts/calcium_acetate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(20)
    .EUt(16)

  event.recipes.susy.roaster('noitdgsu9oi0pc') // remapped from original line 4019
    .itemInputs('15x #forge:dusts/calcium_acetate')
    .itemOutputs('2x #forge:dusts/quicklime')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .outputFluids(safeFluidOf('gtceu:acetone', 1000))
    .duration(600)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('npsrrivgrdfa2c') // remapped from original line 4030
    .inputFluids(safeFluidOf('gtceu:benzene', 50))
    .inputFluids(safeFluidOf('gtceu:ethylene', 50))
    .notConsumable(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('gtceu:ethylbenzene', 50))
    .duration(5)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('1zkefszwqd2wyi') // remapped from original line 4041
    .inputFluids(safeFluidOf('gtceu:propane', 50))
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 150))
    .outputFluids(safeFluidOf('susy:diluted_nitromethane', 200))
    .outputFluids(safeFluidOf('gtceu:nitric_oxide', 100))
    .duration(5)
    .EUt(120)

  event.recipes.gtceu.distillation_tower('bv3lnxcalz3n6j') // remapped from original line 4050
    .inputFluids(safeFluidOf('susy:diluted_nitromethane', 4000))
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .outputFluids(safeFluidOf('gtceu:nitromethane', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('xey1roszi9hsyl') // remapped from original line 4060
    .inputFluids(safeFluidOf('susy:isobutane', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 100))
    .outputFluids(safeFluidOf('susy:tert_butyl_hydroperoxide', 50))
    .duration(5)
    .EUt(120)

  event.recipes.susy.trickle_bed_reactor('ljeoudpt2ewce1') // remapped from original line 4068
    .inputFluids(safeFluidOf('susy:tert_butyl_hydroperoxide', 50))
    .inputFluids(safeFluidOf('susy:tert_butyl_alcohol', 50))
    .notConsumable('1x #forge:dusts/molecular_sieve')
    .outputFluids(safeFluidOf('susy:diluted_di_tert_butyl_peroxide', 100))
    .duration(5)
    .EUt(120)

  event.recipes.gtceu.distillation_tower('zdhvd24xkxyhrq') // remapped from original line 4077
    .inputFluids(safeFluidOf('susy:diluted_di_tert_butyl_peroxide', 2000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:di_tert_butyl_peroxide', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('fxnrnrjwqg6qcb') // remapped from original line 4087
    .inputFluids(safeFluidOf('gtceu:dimethylamine', 50))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 50))
    .outputFluids(safeFluidOf('susy:dimethylacetamide_solution', 100))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('gmxdpwkyc26nfs') // remapped from original line 4095
    .inputFluids(safeFluidOf('susy:dimethylacetamide_solution', 2000))
    .outputFluids(safeFluidOf('susy:dimethylacetamide', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(200)
    .EUt(240)

  event.recipes.susy.continuous_stirred_tank_reactor('7evz8ekya8fwyn') // remapped from original line 4105
    .inputFluids(safeFluidOf('susy:acetylene', 50))
    .inputFluids(safeFluidOf('susy:formaldehyde', 100))
    .outputFluids(safeFluidOf('susy:butanediol', 50))
    .EUt(120)
    .duration(4)

  event.recipes.susy.fixed_bed_reactor('lrszwlmf1auwrl') // remapped from original line 4113
    .inputFluids(safeFluidOf('susy:butanediol', 50))
    .notConsumable('1x #forge:catalysts/bed_copper')
    .outputFluids(safeFluidOf('susy:gamma_butyrolactone', 50))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 200))
    .EUt(120)
    .duration(4)

  event.recipes.susy.batch_reactor('rz3nyh1mndroj9') // remapped from original line 4124
    .inputFluids(safeFluidOf('gtceu:iodine', 576))
    .inputFluids(safeFluidOf('gtceu:hydrazine', 1000))
    .outputFluids(safeFluidOf('susy:hydrogen_iodide', 4000))
    .outputFluids(safeFluidOf('gtceu:nitrogen', 2000))
    .duration(80)
    .EUt(30)

  event.recipes.susy.batch_reactor('rudngghdqrsi4v') // remapped from original line 4135
    .notConsumable('1x #forge:springs/cupronickel')
    .inputFluids(safeFluidOf('susy:gtfo_acetaldehyde', 2000))
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .outputFluids(safeFluidOf('susy:crotonaldehyde_mixture', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 2000))
    .duration(400)
    .EUt(120)

  event.recipes.gtceu.distillery('ufjztnvvqdvn2v') // remapped from original line 4145
    .inputFluids(safeFluidOf('susy:crotonaldehyde_mixture', 1000))
    .itemOutputs('3x #forge:dusts/sodium_hydroxide')
    .outputFluids(safeFluidOf('susy:crotonaldehyde', 1000))
    .duration(20)
    .EUt(30)

  event.recipes.susy.fixed_bed_reactor('g14sa6suajuwo0') // remapped from original line 4153
    .notConsumable('1x #forge:catalysts/bed_copper')
    .inputFluids(safeFluidOf('susy:crotonaldehyde', 50))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 100))
    .outputFluids(safeFluidOf('gtceu:butyraldehyde', 50))
    .duration(20)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('ne0jolffc1uecm') // remapped from original line 4164
    .inputFluids(safeFluidOf('susy:hot_sulfuric_acid', 50))
    .inputFluids(safeFluidOf('susy:n_butanol', 50))
    .outputFluids(safeFluidOf('susy:one_butene', 50))
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 100))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.mixer('podxlusf7dunr8') // remapped from original line 4175
    .circuit(1)
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('6x #forge:dusts/sodium_bicarbonate')
    .outputFluids(safeFluidOf('susy:sodium_bicarbonate_solution', 1000))
    .EUt(30)
    .duration(80)

  event.recipes.gtceu.mixer('0x4uk43vzwedz2') // remapped from original line 4184
    .circuit(2)
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('1x #forge:dusts/sodium_bicarbonate')
    .outputFluids(safeFluidOf('susy:gtfo_baking_soda_solution', 1000))
    .EUt(30)
    .duration(80)

  event.recipes.gtceu.mixer('iblp5ogvsogavq') // remapped from original line 4195
    .itemInputs('2x #forge:dusts/sodium_fluoride')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:sodium_fluoride_solution', 1000))
    .duration(20)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('b72i8vbuuybu2w') // remapped from original line 4203
    .inputFluids(safeFluidOf('susy:sodium_fluoride_solution', 50))
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .outputFluids(safeFluidOf('susy:salty_hydrofluoric_acid', 50))
    .duration(2)
    .EUt(30)

  event.recipes.gtceu.distillery('ycg97frmswmzd4') // remapped from original line 4211
    .inputFluids(safeFluidOf('susy:salty_hydrofluoric_acid', 1000))
    .itemOutputs('2x #forge:dusts/salt')
    .outputFluids(safeFluidOf('gtceu:hydrofluoric_acid', 1000))
    .duration(20)
    .EUt(30)

  event.recipes.gtceu.mixer('eugdksujgt2wly') // remapped from original line 4221
    .itemInputs('5x #forge:dusts/calcium_hydroxide')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:calcium_hydroxide_slurry', 1000))
    .EUt(30)
    .duration(100)

  event.recipes.gtceu.mixer('ue8pfsgkhct5za') // remapped from original line 4229
    .itemInputs('2x #forge:dusts/quicklime')
    .circuit(2)
    .inputFluids(safeFluidOf('minecraft:water', 2000))
    .outputFluids(safeFluidOf('susy:calcium_hydroxide_slurry', 1000))
    .EUt(30)
    .duration(120)

  event.recipes.gtceu.mixer('bosvbtcbw2ktyt') // remapped from original line 4240
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('3x #forge:dusts/zinc_chloride')
    .outputFluids(safeFluidOf('susy:zinc_chloride_solution', 1000))
    .EUt(16)
    .duration(80)

  event.recipes.gtceu.distillery('iwxfiwhsbgbgz1') // remapped from original line 4248
    .inputFluids(safeFluidOf('susy:diluted_sodium_sulfate_solution', 2000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .itemOutputs('7x #forge:dusts/sodium_sulfate')
    .duration(30)
    .EUt(200)

  event.recipes.gtceu.fluid_heater('tzmwv6x9rdfp6n') // remapped from original line 4258
    .circuit(3)
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .duration(80)
    .EUt(30)

  event.recipes.susy.condenser('8axkkt5qvyjjrb') // remapped from original line 4266
    .inputFluids(safeFluidOf('susy:dense_steam', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(5)

  event.recipes.gtceu.mixer('jsqddusudslg2e') // remapped from original line 4275
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