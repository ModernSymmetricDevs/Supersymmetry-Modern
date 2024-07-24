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
  event.remove({ type: 'gtceu:centrifuge', input: safeFluidOf('gtceu:salt_water')})

  event.recipes.gtceu.DISTILLERY('o8c6sm6nupnax1') // remapped from original line 32
    .inputFluids(safeFluidOf('gtceu:salt_water', 1000))
    .itemOutputs('2x #forge:dusts/salt')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(240)
    .EUt(30)

  event.recipes.gtceu.DISTILLERY('eymzue0qqhm7va') // remapped from original line 40
    .inputFluids(safeFluidOf('susy:concentrated_salt_water', 1000))
    .itemOutputs('4x #forge:dusts/salt')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(280)
    .EUt(30)

  event.recipes.gtceu.DISTILLERY('jw0nvfavyf4epy') // remapped from original line 48
    .inputFluids(safeFluidOf('susy:hypersaline_water', 1000))
    .itemOutputs('8x #forge:dusts/salt')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(320)
    .EUt(30)

  event.recipes.gtceu.DISTILLERY('aykyskfzqandny') // remapped from original line 56
    .inputFluids(safeFluidOf('susy:sea_water', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(240)
    .EUt(30)

  event.recipes.susy.EVAPORATION_POOL('gy15jufknwpxyv') // remapped from original line 63
    .inputFluids(safeFluidOf('gtceu:salt_water', 20000))
    .itemOutputs('40x #forge:dusts/salt')
    .duration(1800)

  event.recipes.susy.EVAPORATION_POOL('lhsf5hay8cwxdk') // remapped from original line 69
    .inputFluids(safeFluidOf('susy:sea_water', 20000))
    .itemOutputs('20x #forge:dusts/salt')
    .duration(1800)

  event.recipes.susy.EVAPORATION_POOL('4p5ywhxhun7std') // remapped from original line 75
    .inputFluids(safeFluidOf('susy:concentrated_salt_water', 20000))
    .itemOutputs('64x #forge:dusts/salt')
    .itemOutputs('16x #forge:dusts/salt')
    .duration(1800)

  event.recipes.susy.EVAPORATION_POOL('mdm3qi7x3d1dry') // remapped from original line 82
    .inputFluids(safeFluidOf('susy:hypersaline_water', 20000))
    .itemOutputs('64x #forge:dusts/salt')
    .itemOutputs('64x #forge:dusts/salt')
    .itemOutputs('32x #forge:dusts/salt')
    .duration(1800)

  event.recipes.susy.EVAPORATION_POOL('201nn97fqtlgge') // remapped from original line 90
    .inputFluids(safeFluidOf('susy:brine', 10000))
    .itemOutputs('64x #forge:dusts/salt')
    .itemOutputs('16x #forge:dusts/salt')
    .outputFluids(safeFluidOf('susy:concentrated_brine', 2500))
    .duration(1800)

  event.recipes.susy.EVAPORATION_POOL('2jqp7cd5mufddj') // remapped from original line 98
    .inputFluids(safeFluidOf('susy:concentrated_brine', 2500))
    .itemOutputs('50x #forge:dusts/carnallite')
    .itemOutputs('20x #forge:dusts/potassium_carbonate')
    .itemOutputs('15x #forge:dusts/calcium_chloride')
    .outputFluids(safeFluidOf('susy:very_concentrated_brine', 250))
    .duration(1800)

  event.recipes.gtceu.BR('a4ep0njan0u5mi') // remapped from original line 107
    .inputFluids(safeFluidOf('susy:very_concentrated_brine', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 200))
    .itemOutputs('7x #forge:dusts/boric_acid')
    .outputFluids(safeFluidOf('susy:boron_free_brine', 1000))
    .duration(120)
    .EUt(120)

  event.recipes.gtceu.BR('78fjp3og3ndt2c') // remapped from original line 116
    .inputFluids(safeFluidOf('susy:boron_free_brine', 1000))
    .itemInputs('6x #forge:dusts/soda_ash')
    .itemOutputs(safeItemId('6x gregtechfoodoption:lithium_carbonate_dust'))
    .outputFluids(safeFluidOf('susy:lithium_free_brine', 1000))
    .duration(120)
    .EUt(120)

  event.recipes.susy.BCR('yfgzrayjwa1mis') // remapped from original line 125
    .inputFluids(safeFluidOf('susy:lithium_free_brine', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 25))
    .outputFluids(safeFluidOf('susy:chlorinated_brine', 50))
    .duration(1)
    .EUt(120)

  event.recipes.susy.VACUUM_CHAMBER('wal9x4jtk412y4') // remapped from original line 133
    .inputFluids(safeFluidOf('gtceu:steam', 250))
    .inputFluids(safeFluidOf('susy:chlorinated_brine', 1000))
    .outputFluids(safeFluidOf('susy:impure_bromine', 500))
    .outputFluids(safeFluidOf('susy:wastewater_sludge', 500))
    .duration(120)
    .EUt(120)

  event.recipes.gtceu.CENTRIFUGE('xmrzgypifrp3hb') // remapped from original line 142
    .inputFluids(safeFluidOf('susy:impure_bromine', 1000))
    .outputFluids(safeFluidOf('gtceu:bromine', 1000))
    .chancedOutput('1000x #forge:dusts/iodine', 1000, 1000)
    .duration(120)
    .EUt(120)

  event.recipes.susy.MSFD('rek0fltfa8j840') // remapped from original line 150
    .inputFluids(safeFluidOf('susy:sea_water', 10000))
    .inputFluids(safeFluidOf('gtceu:steam', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 5000))
    .outputFluids(safeFluidOf('gtceu:salt_water', 5000))
    .duration(10)
    .EUt(120)

  event.recipes.susy.MSFD('8qrvrtlohhagtw') // remapped from original line 159
    .inputFluids(safeFluidOf('gtceu:salt_water', 5000))
    .inputFluids(safeFluidOf('gtceu:steam', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 2500))
    .outputFluids(safeFluidOf('susy:concentrated_salt_water', 2500))
    .duration(10)
    .EUt(120)

  event.recipes.susy.MSFD('x0hog6ntqx0pqr') // remapped from original line 168
    .inputFluids(safeFluidOf('susy:concentrated_salt_water', 2500))
    .inputFluids(safeFluidOf('gtceu:steam', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1250))
    .outputFluids(safeFluidOf('susy:hypersaline_water', 1250))
    .duration(10)
    .EUt(120)

  event.recipes.susy.MSFD('ttrcuugbg2trtn') // remapped from original line 177
    .inputFluids(safeFluidOf('minecraft:water', 8750))
    .inputFluids(safeFluidOf('gtceu:steam', 1000))
    .outputFluids(safeFluidOf('gtceu:distilled_water', 8750))
    .duration(5)
    .EUt(120)

  event.recipes.susy.PSA('svuzkdqgmhlcj3') // remapped from original line 185
    .notConsumable(metaitem('cellulose_acetate_mesh'))
    .inputFluids(safeFluidOf('gtceu:salt_water', 10000))
    .itemOutputs('20x #forge:dusts/salt')
    .outputFluids(safeFluidOf('minecraft:water', 10000))
    .duration(80)
    .EUt(480)

  event.recipes.susy.PSA('wrgjtny0mtkvsy') // remapped from original line 194
    .notConsumable(metaitem('cellulose_acetate_mesh'))
    .inputFluids(safeFluidOf('susy:concentrated_salt_water', 10000))
    .itemOutputs('40x #forge:dusts/salt')
    .outputFluids(safeFluidOf('minecraft:water', 10000))
    .duration(80)
    .EUt(480)

  event.recipes.susy.PSA('hlrucmafmqu5ne') // remapped from original line 203
    .notConsumable(metaitem('cellulose_acetate_mesh'))
    .inputFluids(safeFluidOf('susy:hypersaline_water', 5000))
    .itemOutputs('40x #forge:dusts/salt')
    .outputFluids(safeFluidOf('minecraft:water', 5000))
    .duration(40)
    .EUt(480)

  event.recipes.gtceu.FLUID_HEATER('gck8tlbydhimkt') // remapped from original line 212
    .inputFluids(safeFluidOf('susy:wastewater', 1000))
    .outputFluids(safeFluidOf('susy:heated_wastewater', 1000))
    .duration(80)
    .EUt(30)

  event.recipes.gtceu.MIXER('fmggvuwy2xaydb') // remapped from original line 219
    .inputFluids(safeFluidOf('susy:heated_wastewater', 1000))
    .itemInputs('1x #forge:dusts/flocculant')
    .outputFluids(safeFluidOf('susy:flocculated_wastewater', 1000))
    .duration(80)
    .EUt(30)

  event.recipes.susy.CLARIFIER('miswmallnfb0hx') // remapped from original line 227
    .inputFluids(safeFluidOf('susy:flocculated_wastewater', 8000))
    .itemOutputs('8x #forge:dusts/aluminium_sulfate')
    .outputFluids(safeFluidOf('susy:wastewater_sludge', 2000))
    .outputFluids(safeFluidOf('minecraft:water', 6000))
    .duration(600)
    .EUt(30)

  event.recipes.susy.DRYER('xywkdabqqoyvnd') // remapped from original line 236
    .itemInputs('1x #forge:dusts/wet_molecular_sieve')
    .itemOutputs('1x #forge:dusts/molecular_sieve')
    .duration(100)
    .EUt(30)

  event.recipes.susy.ION_EXCHANGE('zarzytsbox8mss') // remapped from original line 243
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .notConsumable('1x #forge:dusts/molecular_sieve')
    .outputFluids(safeFluidOf('susy:demineralized_water', 900))
    .duration(100)
    .EUt(30)

  event.recipes.susy.VACUUM_CHAMBER('n8tlezc6dtmxyr') // remapped from original line 251
    .inputFluids(safeFluidOf('susy:demineralized_water', 1000))
    .inputFluids(safeFluidOf('gtceu:steam', 100))
    .outputFluids(safeFluidOf('susy:deaerated_water', 900))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.COMPRESSOR('z9orxtj6a4rr1h') // remapped from original line 259
    .inputFluids(safeFluidOf('susy:deaerated_water', 1000))
    .notConsumable(metaitem('cellulose_acetate_mesh'))
    .outputFluids(safeFluidOf('susy:filtered_water', 900))
    .duration(100)
    .EUt(30)

  event.recipes.susy.UV_LIGHT_BOX('bxtzlmy81ivxrh') // remapped from original line 267
    .inputFluids(safeFluidOf('susy:filtered_water', 1000))
    .outputFluids(safeFluidOf('susy:sterilized_water', 900))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.DISTILLERY('pgrystywkgrnwb') // remapped from original line 274
    .inputFluids(safeFluidOf('susy:deaerated_water', 100))
    .outputFluids(safeFluidOf('susy:ultrapure_water', 15))
    .duration(10)
    .EUt(50)

  event.recipes.gtceu.DISTILLERY('u0kr9rpumwfdeb') // remapped from original line 281
    .inputFluids(safeFluidOf('susy:filtered_water', 100))
    .outputFluids(safeFluidOf('susy:ultrapure_water', 30))
    .duration(10)
    .EUt(40)

  event.recipes.gtceu.DISTILLERY('xyqdnvqgx12g30') // remapped from original line 288
    .inputFluids(safeFluidOf('susy:demineralized_water', 100))
    .outputFluids(safeFluidOf('susy:ultrapure_water', 5))
    .duration(10)
    .EUt(60)

  event.recipes.gtceu.DISTILLERY('qvebjqyyahrgye') // remapped from original line 295
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