ServerEvents.recipes(event => {
  event.remove({ type: 'susy:railroad_engineering_station', input: '#forge:plates/steel' && '#forge:plates/iron'})
  event.remove({ type: 'susy:railroad_engineering_station', input: 'immersiverailroading:item_rolling_stock'})

  event.recipes.susy.mods.gregtech.bender('ogx4ntld69zdqh') // remapped from original line 132
    .circuit(3)
    .itemInputs('1x #forge:plates/steel')
    .itemOutputs(safeItemId('10x immersiverailroading:item_rail_part'))
    .duration(200)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('nblihfgdeu2rj3') // remapped from original line 140
    .inputFluids(safeFluidOf('gtceu:concrete', 144))
    .itemInputs('8x #forge:rods/steel')
    .itemInputs('2x #forge:plates/steel')
    .itemOutputs(safeItemId('5x susy:meta_item', ')) * 2)
    .duration(200)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('esxovmaiunuews') // remapped from original line 149
    .inputFluids(safeFluidOf('gtceu:concrete', 144))
    .itemInputs('8x #forge:rods/aluminium')
    .itemInputs('2x #forge:plates/aluminium')
    .itemOutputs(safeItemId('5x susy:meta_item', ')) * 4)
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('krfmhu1nokht2m') // remapped from original line 158
    .inputFluids(safeFluidOf('gtceu:concrete', 144))
    .itemInputs('8x #forge:rods/stainless_steel')
    .itemInputs('2x #forge:plates/stainless_steel')
    .itemOutputs(safeItemId('5x susy:meta_item', ')) * 8)
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('ryjaxygyyctodj') // remapped from original line 167
    .itemInputs(metaitem('component.grinder.diamond') * 4)
    .itemInputs('4x #forge:gears/steel')
    .itemInputs('16x #forge:plates/double_steel')
    .itemOutputs(metaitem('tunnelbore.drillhead'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.forge_hammer('vh2gx0lyj4o0zj') // remapped from original line 176
    .itemInputs('16x #forge:rods/long_steel')
    .itemOutputs(metaitem('tunnelbore.axle'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('qw0b3yqc66hp8t') // remapped from original line 183
    .itemInputs(metaitem('electric.motor.mv') * 8)
    .itemInputs('64x #forge:wires/fine_copper')
    .itemInputs('4x #forge:gears/aluminium')
    .itemInputs('4x #forge:gears/small_aluminium')
    .itemInputs('8x #forge:plates/steel')
    .inputFluids(safeFluidOf('gtceu:lubricant', 8000))
    .itemOutputs(metaitem('tunnelbore.engine'))
    .duration(200)
    .EUt(120)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (item in name_removals) {
  // 	crafting.remove(item);
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // log.infoMC("Running ImmersiveRailroading.groovy...")
  // import globals.Globals
  // import supersymmetry.api.recipes.SuSyRecipeMaps;
  // import cam72cam.immersiverailroading.IRItems;
  // import cam72cam.mod.serialization.TagCompound;
  // import trackapi.lib.Gauges;
  // ArrayList<String> name_removals = [
  // 		"immersiverailroading:item_manual",
  // 		"immersiverailroading:item_conductor_whistle",
  // 		"immersiverailroading:item_paint_brush",
  // 		"immersiverailroading:item_golden_spike",
  // 		"immersiverailroading:item_radio_control_card",
  // 		"immersiverailroading:item_switch_key",
  // 		"immersiverailroading:item_track_exchanger",
  // 		"immersiverailroading:item_large_wrench"
  // ];
  // crafting.addShaped("ir_conductor_whistle", item('immersiverailroading:item_conductor_whistle'), [
  // 		[ore('foilGold'), ore('foilGold'), null],
  // 		[ore('foilGold'), ore('foilGold'), null],
  // 		[ore('foilGold'), ore('foilGold'), null]
  // ]);
  // crafting.addShaped("ir_paint_brush", item('immersiverailroading:item_paint_brush'), [
  // 		[null, ore('wool'), null],
  // 		[null, ore('plateSteel'), null],
  // 		[null, ore('stickWood'), null]
  // ]);
  // crafting.addShaped("ir_large_wrench", item('immersiverailroading:item_large_wrench'), [
  // 		[null, ore('plateSteel'), null],
  // 		[ore('plateSteel'), ore('plateSteel'), ore('plateSteel')],
  // 		[ore('plateSteel'), ore('craftingToolHardHammer'), ore('plateSteel')]
  // ]);
  // crafting.addShaped("ir_gold_spike", item('immersiverailroading:item_golden_spike'), [
  // 		[ore('plateGold'), ore('plateGold'), null],
  // 		[ore('stickGold'), null, null],
  // 		[ore('stickGold'), null, null]
  // ]);
  // crafting.addShaped("ir_switch_key", item('immersiverailroading:item_switch_key'), [
  // 		[null, ore('stickSteel'), null],
  // 		[ore('craftingToolFile'), ore('stickSteel'), null],
  // 		[null, ore('ringSteel'), null]
  // ]);
  // crafting.addShaped("ir_track_exchanger", item('immersiverailroading:item_track_exchanger'), [
  // 		[ore('paneGlass'), ore('paneGlass'), ore('paneGlass')],
  // 		[item('immersiverailroading:item_large_wrench'), ore('plateSteel'), item('immersiverailroading:item_rail')],
  // 		[ore('paneGlass'), ore('wireFineRedAlloy'), ore('paneGlass')]
  // ]);
  // crafting.addShaped("ir_item_hook", item('immersiverailroading:item_hook'), [
  // 		[null, null, metaitem('ringSteel')],
  // 		[null, metaitem('stickSteel'), null],
  // 		[metaitem('stickSteel'), null, null]
  // ]);
  // crafting.replaceShaped("immersiverailroading:item_rail", item('immersiverailroading:item_rail'), [
  // 		[metaitem('screwSteel'), ore('dyeBlack'), metaitem('screwSteel')],
  // 		[metaitem('stickSteel'), item('minecraft:paper'), metaitem('stickSteel')],
  // 		[metaitem('screwSteel'), metaitem('stickSteel'), metaitem('screwSteel')]
  // ]);
  // crafting.replaceShaped("immersiverailroading:item_radio_control_card", item('immersiverailroading:item_radio_control_card'), [
  // 		[null, item('opencomputers:component', 3), null],
  // 		[metaitem('sensor.lv'), metaitem('plateSteel'), metaitem('emitter.lv')],
  // 		[null, ore('circuitLv'), null]
  // ]);
  // crafting.addShaped("ir_coupler", item('immersiverailroading:item_augment').withNbt(["gauge": 1.435D, "augment": 8]), [
  // 		[null, metaitem('robot.arm.lv'), null],
  // 		[metaitem('stickSteel'), metaitem('plateSteel'), metaitem('stickSteel')],
  // 		[null, null, null]
  // ]);
  // crafting.addShaped("ir_fluid_loader", item('immersiverailroading:item_augment').withNbt(["gauge": 1.435D, "augment": 5]), [
  // 		[null, metaitem('electric.pump.lv'), null],
  // 		[metaitem('stickSteel'), metaitem('plateSteel'), metaitem('stickSteel')],
  // 		[null, null, null]
  // ]);
  // crafting.addShaped("ir_item_loader", item('immersiverailroading:item_augment').withNbt(["gauge": 1.435D, "augment": 3]), [
  // 		[null, metaitem('conveyor.module.lv'), null],
  // 		[metaitem('stickSteel'), metaitem('plateSteel'), metaitem('stickSteel')],
  // 		[null, null, null]
  // ]);
  // crafting.addShaped("ir_detector", item('immersiverailroading:item_augment').withNbt(["gauge": 1.435D, "augment": 7]), [
  // 		[null, metaitem('sensor.lv'), null],
  // 		[metaitem('stickSteel'), metaitem('plateSteel'), metaitem('stickSteel')],
  // 		[null, metaitem('wireFineRedAlloy'), null]
  // ]);
  // crafting.addShaped("ir_fluid_unloader", item('immersiverailroading:item_augment').withNbt(["gauge": 1.435D, "augment": 6]), [
  // 		[null, null, null],
  // 		[metaitem('stickSteel'), metaitem('plateSteel'), metaitem('stickSteel')],
  // 		[null, metaitem('electric.pump.lv'), null]
  // ]);
  // crafting.addShaped("ir_locomotive_control", item('immersiverailroading:item_augment').withNbt(["gauge": 1.435D, "augment": 2]), [
  // 		[null, metaitem('emitter.lv'), null],
  // 		[metaitem('stickSteel'), metaitem('plateSteel'), metaitem('stickSteel')],
  // 		[null, metaitem('wireFineRedAlloy'), null]
  // ]);
  // crafting.addShaped("ir_item_unloader", item('immersiverailroading:item_augment').withNbt(["gauge": 1.435D, "augment": 4]), [
  // 		[null, null, null],
  // 		[metaitem('stickSteel'), metaitem('plateSteel'), metaitem('stickSteel')],
  // 		[null, metaitem('conveyor.module.lv'), null]
  // ]);
  // crafting.addShaped("ir_speed_retarder", item('immersiverailroading:item_augment').withNbt(["gauge": 1.435D, "augment": 0]), [
  // 		[metaitem('stickSteel'), item('minecraft:redstone_torch'), metaitem('stickSteel')],
  // 		[metaitem('stickSteel'), metaitem('plateSteel'), metaitem('stickSteel')],
  // 		[null, null, null]
  // ]);
  // 		
});