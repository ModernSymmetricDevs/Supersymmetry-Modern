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
  event.remove({ type: 'gtceu:assembler', input: '#forge:cables/gt_double_tungsten' && '#forge:rods/tungsten_steel' && '#forge:rods/neodymium_magnetic' && '#forge:wires/gt_double_graphene'})
  event.remove({ type: 'gtceu:assembler', input: '#forge:cables/gt_double_aluminium' && '#forge:rods/titanium' && '#forge:rods/neodymium_magnetic' && '#forge:wires/gt_double_kanthal'})
  event.remove({ type: 'gtceu:assembler', input: '#forge:rods/neodymium_magnetic' && '#forge:wires/fine_tungsten_steel' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:assembler', input: '#forge:rods/neodymium_magnetic' && '#forge:wires/fine_iridium' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:assembler', input: '#forge:rods/samarium_magnetic' && '#forge:wires/fine_osmiridium' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:assembler', input: '#forge:rods/samarium_magnetic' && '#forge:wires/fine_europium' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:assembler', input: '#forge:rods/samarium_magnetic' && '#forge:wires/fine_tritanium' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:assembly_line', input: '#forge:rods/long_samarium_magnetic' && '#forge:rods/long_hsss' && '#forge:rings/hsss' && '#forge:rounds/hsss' && '#forge:wires/fine_ruridit' && '#forge:cables/gt_single_niobium_titanium' && safeFluidOf('gtceu:soldering_alloy') && safeFluidOf('gtceu:lubricant')})
  event.remove({ type: 'gtceu:assembly_line', input: '#forge:rods/long_samarium_magnetic' && '#forge:rods/long_osmiridium' && '#forge:rings/osmiridium' && '#forge:rounds/osmiridium' && '#forge:wires/fine_europium' && '#forge:wires/fine_europium' && '#forge:cables/gt_single_vanadium_gallium' && safeFluidOf('gtceu:soldering_alloy') && safeFluidOf('gtceu:lubricant')})
  event.remove({ type: 'gtceu:assembly_line', input: '#forge:rods/long_samarium_magnetic' && '#forge:rods/long_tritanium' && '#forge:rings/tritanium' && '#forge:rounds/tritanium' && '#forge:wires/fine_americium' && '#forge:wires/fine_americium' && '#forge:cables/gt_single_yttrium_barium_cuprate' && safeFluidOf('gtceu:soldering_alloy') && safeFluidOf('gtceu:lubricant') && safeFluidOf('gtceu:naquadria')})

  event.recipes.susy.mods.gregtech.mixer('pr6ohwu72lntmy') // remapped from original line 9
    .itemInputs('2x #forge:dusts/neodymium')
    .itemInputs('14x #forge:dusts/iron')
    .itemInputs('1x #forge:dusts/boron')
    .itemOutputs('17x #forge:dusts/neodymium_alloy')
    .duration(400)
    .EUt(256)

  event.recipes.susy.mods.gregtech.electrolyzer('pznfdqwqmqrmqw') // remapped from original line 18
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemInputs('1x #forge:ingots/neodymium_alloy')
    .itemInputs('1x #forge:dusts/small_nickel')
    .itemInputs('1x #forge:dusts/tiny_boric_acid')
    .itemOutputs('1x #forge:ingots/treated_neodymium_alloy')
    .duration(120)
    .EUt(256)

  event.recipes.susy.mods.gregtech.electrolyzer('jg5snhohiqb11i') // remapped from original line 28
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemInputs('1x #forge:plates/neodymium_alloy')
    .itemInputs('1x #forge:dusts/small_nickel')
    .itemInputs('1x #forge:dusts/tiny_boric_acid')
    .itemOutputs('1x #forge:plates/treated_neodymium_alloy')
    .duration(120)
    .EUt(256)

  event.recipes.susy.mods.gregtech.electrolyzer('b5yvif6eb3p3yy') // remapped from original line 38
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemInputs('1x #forge:rods/neodymium_alloy')
    .itemInputs('1x #forge:dusts/small_nickel')
    .itemInputs('1x #forge:dusts/tiny_boric_acid')
    .itemOutputs('1x #forge:rods/treated_neodymium_alloy')
    .duration(120)
    .EUt(256)

  event.recipes.susy.mods.gregtech.electrolyzer('qmy148pybd81ku') // remapped from original line 48
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemInputs('1x #forge:rods/long_neodymium_alloy')
    .itemInputs('1x #forge:dusts/small_nickel')
    .itemInputs('1x #forge:dusts/tiny_boric_acid')
    .itemOutputs('1x #forge:rods/long_treated_neodymium_alloy')
    .duration(120)
    .EUt(256)

  event.recipes.susy.mods.gregtech.electrolyzer('9yl3r9dx4h2cos') // remapped from original line 58
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemInputs('1x #forge:rings/neodymium_alloy')
    .itemInputs('1x #forge:dusts/small_nickel')
    .itemInputs('1x #forge:dusts/tiny_boric_acid')
    .itemOutputs('1x #forge:rings/treated_neodymium_alloy')
    .duration(120)
    .EUt(256)

  event.recipes.gtceu.alloy_blast_smelter('ffckncdwwqjrmu') // remapped from original line 70
    .itemInputs('1x #forge:dusts/samarium')
    .itemInputs('5x #forge:dusts/cobalt')
    .inputFluids(safeFluidOf('gtceu:argon', 300))
    .outputFluids(safeFluidOf('susy:samarium_alloy', 864))
    .blastFurnaceTemp(1800)
    .duration(300)
    .EUt(1920)

  event.recipes.gtceu.forming_press('4dcqcvj9n1qfl7') // remapped from original line 80
    .notConsumable(metaitem('shape.mold.long_rod'))
    .itemInputs('1x #forge:dusts/samarium_alloy')
    .itemOutputs('1x #forge:rods/long_samarium_alloy')
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.forming_press('lppnof6mk12h0u') // remapped from original line 88
    .notConsumable(metaitem('shape.mold.ring'))
    .itemInputs('1x #forge:dusts/samarium_alloy')
    .itemOutputs('4x #forge:rings/samarium_alloy')
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.forming_press('leenpqsuxbd70q') // remapped from original line 96
    .notConsumable(metaitem('shape.mold.rod'))
    .itemInputs('1x #forge:dusts/samarium_alloy')
    .itemOutputs('2x #forge:rods/samarium_alloy')
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.forming_press('xa21jhgzwbndp2') // remapped from original line 104
    .notConsumable(metaitem('shape.mold.plate'))
    .itemInputs('1x #forge:dusts/samarium_alloy')
    .itemOutputs('1x #forge:plates/samarium_alloy')
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.forming_press('13hbsptjmxvk10') // remapped from original line 112
    .notConsumable(metaitem('shape.mold.ingot'))
    .itemInputs('1x #forge:dusts/samarium_alloy')
    .itemOutputs('1x #forge:ingots/samarium_alloy')
    .duration(200)
    .EUt(240)

  event.recipes.susy.mods.gregtech.electrolyzer('eiln12nonxrciu') // remapped from original line 120
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemInputs('1x #forge:ingots/samarium_alloy')
    .itemInputs('1x #forge:dusts/small_nickel')
    .itemInputs('1x #forge:dusts/tiny_boric_acid')
    .itemOutputs('1x #forge:ingots/treated_samarium_alloy')
    .duration(120)
    .EUt(256)

  event.recipes.susy.mods.gregtech.electrolyzer('e2brngpipokxnp') // remapped from original line 130
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemInputs('1x #forge:plates/samarium_alloy')
    .itemInputs('1x #forge:dusts/small_nickel')
    .itemInputs('1x #forge:dusts/tiny_boric_acid')
    .itemOutputs('1x #forge:plates/treated_samarium_alloy')
    .duration(120)
    .EUt(256)

  event.recipes.susy.mods.gregtech.electrolyzer('6zxbodh2osnpwv') // remapped from original line 140
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemInputs('1x #forge:rods/samarium_alloy')
    .itemInputs('1x #forge:dusts/small_nickel')
    .itemInputs('1x #forge:dusts/tiny_boric_acid')
    .itemOutputs('1x #forge:rods/treated_samarium_alloy')
    .duration(120)
    .EUt(256)

  event.recipes.susy.mods.gregtech.electrolyzer('xpq1pdbhjfedyp') // remapped from original line 150
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemInputs('1x #forge:rods/long_samarium_alloy')
    .itemInputs('1x #forge:dusts/small_nickel')
    .itemInputs('1x #forge:dusts/tiny_boric_acid')
    .itemOutputs('1x #forge:rods/long_treated_samarium_alloy')
    .duration(120)
    .EUt(256)

  event.recipes.susy.mods.gregtech.electrolyzer('qjhcu56yunwgpi') // remapped from original line 160
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemInputs('1x #forge:rings/samarium_alloy')
    .itemInputs('1x #forge:dusts/small_nickel')
    .itemInputs('1x #forge:dusts/tiny_boric_acid')
    .itemOutputs('1x #forge:rings/treated_samarium_alloy')
    .duration(120)
    .EUt(256)

  event.recipes.susy.mods.gregtech.assembler('xr9nugerg4mkbz') // remapped from original line 253
    .itemInputs('2x #forge:cables/gt_double_aluminium')
    .itemInputs('2x #forge:rods/titanium')
    .itemInputs('1x #forge:rods/steel_magnetic')
    .itemInputs('4x #forge:wires/gt_double_kanthal')
    .itemOutputs(metaitem('electric.motor.ev'))
    .duration(100)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('fzeyorqd1pybtm') // remapped from original line 263
    .itemInputs('2x #forge:cables/gt_double_tungsten')
    .itemInputs('2x #forge:rods/tungsten_steel')
    .itemInputs('1x #forge:rods/neodymium_alloy_magnetic')
    .itemInputs('4x #forge:wires/gt_double_graphene')
    .itemOutputs(metaitem('electric.motor.iv'))
    .duration(100)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('brfhsbfomkwdm4') // remapped from original line 273
    .itemInputs('1x #forge:rods/steel_magnetic')
    .itemInputs('16x #forge:wires/fine_tungsten_steel')
    .itemOutputs(metaitem('voltage_coil.ev'))
    .duration(200)
    .EUt(1920)

  event.recipes.susy.mods.gregtech.assembler('srfiaeg6y04cbc') // remapped from original line 281
    .itemInputs('1x #forge:rods/neodymium_alloy_magnetic')
    .itemInputs('16x #forge:wires/fine_iridium')
    .itemOutputs(metaitem('voltage_coil.iv'))
    .duration(200)
    .EUt(7680)

  event.recipes.susy.mods.gregtech.assembler('ifvj5ibyrm3vaa') // remapped from original line 289
    .itemInputs('1x #forge:rods/samarium_alloy_magnetic')
    .itemInputs('16x #forge:wires/fine_osmiridium')
    .itemOutputs(metaitem('voltage_coil.luv'))
    .duration(200)
    .EUt(30720)

  event.recipes.susy.mods.gregtech.assembler('4vagbqw6apfk4j') // remapped from original line 297
    .itemInputs('1x #forge:rods/samarium_alloy_magnetic')
    .itemInputs('16x #forge:wires/fine_europium')
    .itemOutputs(metaitem('voltage_coil.zpm'))
    .duration(200)
    .EUt(122880)

  event.recipes.susy.mods.gregtech.assembler('dtvdvhk8rhxrbe') // remapped from original line 305
    .itemInputs('1x #forge:rods/samarium_alloy_magnetic')
    .itemInputs('16x #forge:wires/fine_tritanium')
    .itemOutputs(metaitem('voltage_coil.uv'))
    .duration(200)
    .EUt(491520)

  event.recipes.susy.mods.gregtech.assembly_line('mybixxmb8qeok8') // remapped from original line 313
    .itemInputs('1x #forge:rods/long_samarium_alloy_magnetic')
    .itemInputs('2x #forge:rods/long_hsss')
    .itemInputs('2x #forge:rings/hsss')
    .itemInputs('4x #forge:rounds/hsss')
    .itemInputs('64x #forge:wires/fine_ruridit')
    .itemInputs('2x #forge:cables/gt_single_niobium_titanium')
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 144))
    .inputFluids(safeFluidOf('gtceu:lubricant', 250))
    .itemOutputs(metaitem('electric.motor.luv'))
    .duration(600)
    .EUt(6000)

  event.recipes.susy.mods.gregtech.assembly_line('f2gdqu8ndvhkh6') // remapped from original line 327
    .itemInputs('1x #forge:rods/long_samarium_alloy_magnetic')
    .itemInputs('4x #forge:rods/long_osmiridium')
    .itemInputs('4x #forge:rings/osmiridium')
    .itemInputs('8x #forge:rounds/osmiridium')
    .itemInputs('64x #forge:wires/fine_europium')
    .itemInputs('32x #forge:wires/fine_europium')
    .itemInputs('2x #forge:cables/gt_single_vanadium_gallium')
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 288))
    .inputFluids(safeFluidOf('gtceu:lubricant', 500))
    .itemOutputs(metaitem('electric.motor.zpm'))
    .duration(600)
    .EUt(24000)

  event.recipes.susy.mods.gregtech.assembly_line('mgm66d3txgkazw') // remapped from original line 342
    .itemInputs('1x #forge:rods/long_samarium_alloy_magnetic')
    .itemInputs('4x #forge:rods/long_tritanium')
    .itemInputs('4x #forge:rings/tritanium')
    .itemInputs('8x #forge:rounds/tritanium')
    .itemInputs('64x #forge:wires/fine_americium')
    .itemInputs('64x #forge:wires/fine_americium')
    .itemInputs('2x #forge:cables/gt_single_yttrium_barium_cuprate')
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 576))
    .inputFluids(safeFluidOf('gtceu:lubricant', 1000))
    .inputFluids(safeFluidOf('gtceu:naquadria', 576))
    .itemOutputs(metaitem('electric.motor.uv'))
    .duration(600)
    .EUt(100000)

  event.recipes.susy.mods.gregtech.polarizer('obwlhactplfrbb') // remapped from original line 358
    .itemInputs('1x #forge:rods/long_treated_samarium_alloy')
    .itemOutputs('1x #forge:rods/long_samarium_alloy_magnetic')
    .duration(150)
    .EUt(240)

  event.recipes.susy.mods.gregtech.polarizer('2vn5r7lo7k0io6') // remapped from original line 365
    .itemInputs('1x #forge:rods/treated_samarium_alloy')
    .itemOutputs('1x #forge:rods/samarium_alloy_magnetic')
    .duration(75)
    .EUt(240)

  event.recipes.susy.mods.gregtech.polarizer('exree343hl2a6e') // remapped from original line 372
    .itemInputs('1x #forge:rings/treated_samarium_alloy')
    .itemOutputs('1x #forge:rings/samarium_alloy_magnetic')
    .duration(40)
    .EUt(240)

  event.recipes.susy.mods.gregtech.polarizer('di0xybdvi6kxpu') // remapped from original line 379
    .itemInputs('1x #forge:ingots/treated_samarium_alloy')
    .itemOutputs('1x #forge:ingots/samarium_alloy_magnetic')
    .duration(150)
    .EUt(240)

  event.recipes.susy.mods.gregtech.polarizer('dgztnlbovzcyzx') // remapped from original line 386
    .itemInputs('1x #forge:plates/treated_samarium_alloy')
    .itemOutputs('1x #forge:plates/samarium_alloy_magnetic')
    .duration(150)
    .EUt(240)

  event.recipes.susy.mods.gregtech.polarizer('toiebepwi43cdk') // remapped from original line 393
    .itemInputs('1x #forge:rods/long_treated_neodymium_alloy')
    .itemOutputs('1x #forge:rods/long_neodymium_alloy_magnetic')
    .duration(150)
    .EUt(240)

  event.recipes.susy.mods.gregtech.polarizer('8djgjislnjuebh') // remapped from original line 400
    .itemInputs('1x #forge:rods/treated_neodymium_alloy')
    .itemOutputs('1x #forge:rods/neodymium_alloy_magnetic')
    .duration(75)
    .EUt(240)

  event.recipes.susy.mods.gregtech.polarizer('qtcmv43qsyfmam') // remapped from original line 407
    .itemInputs('1x #forge:rings/treated_neodymium_alloy')
    .itemOutputs('1x #forge:rings/neodymium_alloy_magnetic')
    .duration(40)
    .EUt(240)

  event.recipes.susy.mods.gregtech.polarizer('exlah3cipnh3xv') // remapped from original line 414
    .itemInputs('1x #forge:ingots/treated_neodymium_alloy')
    .itemOutputs('1x #forge:ingots/neodymium_alloy_magnetic')
    .duration(150)
    .EUt(240)

  event.recipes.susy.mods.gregtech.polarizer('0r61bpplkrrqex') // remapped from original line 421
    .itemInputs('1x #forge:plates/treated_neodymium_alloy')
    .itemOutputs('1x #forge:plates/neodymium_alloy_magnetic')
    .duration(150)
    .EUt(240)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import globals.SinteringGlobals
  // ABS = recipemap('alloy_blast_smelter')
  // FORMING_PRESS = recipemap("forming_press")
  // crafting.replaceShaped('gregtech:electric_motor_ev', metaitem('electric.motor.ev'), [
  //         [metaitem('cableGtDoubleAluminium'), metaitem('wireGtDoubleKanthal'), metaitem('stickTitanium')],
  //         [metaitem('wireGtDoubleKanthal'), metaitem('stickSteelMagnetic'), metaitem('wireGtDoubleKanthal')],
  //         [metaitem('stickTitanium'), metaitem('wireGtDoubleKanthal'), metaitem('cableGtDoubleAluminium')]
  // ])
  // crafting.replaceShaped('gregtech:electric_motor_iv', metaitem('electric.motor.iv'), [
  //         [metaitem('cableGtDoubleTungsten'), metaitem('wireGtDoubleGraphene'), metaitem('stickTungstenSteel')],
  //         [metaitem('wireGtDoubleGraphene'), metaitem('stickNeodymiumAlloyMagnetic'), metaitem('wireGtDoubleGraphene')],
  //         [metaitem('stickTungstenSteel'), metaitem('wireGtDoubleGraphene'), metaitem('cableGtDoubleTungsten')]
  // ])
  // crafting.replaceShaped('gregtech:magnet_hv_battery.re.hv.sodium', metaitem('item_magnet.hv'), [
  //         [metaitem('stickNeodymiumAlloyMagnetic'), ore('toolWrench'), metaitem('stickNeodymiumAlloyMagnetic')],
  //         [metaitem('stickNeodymiumAlloyMagnetic'), metaitem('battery.re.hv.sodium'), metaitem('stickNeodymiumAlloyMagnetic')],
  //         [metaitem('wireGtSingleGold'), metaitem('plateStainlessSteel'), metaitem('wireGtSingleGold')]
  // ])
  // crafting.replaceShaped('gregtech:magnet_hv_battery.re.hv.lithium', metaitem('item_magnet.hv'), [
  //         [metaitem('stickNeodymiumAlloyMagnetic'), ore('toolWrench'), metaitem('stickNeodymiumAlloyMagnetic')],
  //         [metaitem('stickNeodymiumAlloyMagnetic'), metaitem('battery.re.hv.lithium'), metaitem('stickNeodymiumAlloyMagnetic')],
  //         [metaitem('wireGtSingleGold'), metaitem('plateStainlessSteel'), metaitem('wireGtSingleGold')]
  // ])
  // crafting.replaceShaped('gregtech:magnet_hv_battery.re.hv.cadmium', metaitem('item_magnet.hv'), [
  //         [metaitem('stickNeodymiumAlloyMagnetic'), ore('toolWrench'), metaitem('stickNeodymiumAlloyMagnetic')],
  //         [metaitem('stickNeodymiumAlloyMagnetic'), metaitem('battery.re.hv.cadmium'), metaitem('stickNeodymiumAlloyMagnetic')],
  //         [metaitem('wireGtSingleGold'), metaitem('plateStainlessSteel'), metaitem('wireGtSingleGold')]
  // ])
  // crafting.replaceShaped('gregtech:magnet_hv_energy_crystal', metaitem('item_magnet.hv'), [
  //         [metaitem('stickNeodymiumAlloyMagnetic'), ore('toolWrench'), metaitem('stickNeodymiumAlloyMagnetic')],
  //         [metaitem('stickNeodymiumAlloyMagnetic'), metaitem('energy_crystal'), metaitem('stickNeodymiumAlloyMagnetic')],
  //         [metaitem('wireGtSingleGold'), metaitem('plateStainlessSteel'), metaitem('wireGtSingleGold')]
  // ])
  // crafting.replaceShaped('gregtech:gregtech.machine.electromagnetic_separator.ev', metaitem('electromagnetic_separator.ev'), [
  //         [metaitem('conveyor.module.ev'), metaitem('cableGtSingleAluminium'), metaitem('wireGtQuadrupleNichrome')],
  //         [metaitem('cableGtSingleAluminium'), metaitem('hull.ev'), metaitem('stickSteelMagnetic')],
  //         [ore('circuitEv'), metaitem('cableGtSingleAluminium'), metaitem('wireGtQuadrupleNichrome')]
  // ])
  // crafting.replaceShaped('gregtech:gregtech.machine.electromagnetic_separator.iv', metaitem('electromagnetic_separator.iv'), [
  //         [metaitem('conveyor.module.iv'), metaitem('cableGtSinglePlatinum'), metaitem('wireGtQuadrupleTungstenSteel')],
  //         [metaitem('cableGtSinglePlatinum'), metaitem('hull.iv'), metaitem('stickNeodymiumAlloyMagnetic')],
  //         [ore('circuitIv'), metaitem('cableGtSinglePlatinum'), metaitem('wireGtQuadrupleTungstenSteel')]
  // ])
  // crafting.replaceShaped('gregtech:gregtech.machine.polarizer.ev', metaitem('polarizer.ev'), [
  //         [metaitem('wireGtQuadrupleNichrome'), metaitem('stickSteelMagnetic'), metaitem('wireGtQuadrupleNichrome')],
  //         [metaitem('cableGtSingleAluminium'), metaitem('hull.ev'), metaitem('cableGtSingleAluminium')],
  //         [metaitem('wireGtQuadrupleNichrome'), metaitem('stickSteelMagnetic'), metaitem('wireGtQuadrupleNichrome')]
  // ])
  // crafting.replaceShaped('gregtech:gregtech.machine.polarizer.iv', metaitem('polarizer.iv'), [
  //         [metaitem('wireGtQuadrupleTungstenSteel'), metaitem('stickNeodymiumAlloyMagnetic'), metaitem('wireGtQuadrupleTungstenSteel')],
  //         [metaitem('cableGtSinglePlatinum'), metaitem('hull.iv'), metaitem('cableGtSinglePlatinum')],
  //         [metaitem('wireGtQuadrupleTungstenSteel'), metaitem('stickNeodymiumAlloyMagnetic'), metaitem('wireGtQuadrupleTungstenSteel')]
  // ])
});