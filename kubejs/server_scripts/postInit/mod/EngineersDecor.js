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

  event.recipes.susy.mods.gregtech.cutter('dhooizfcbuddmv') // remapped from original line 108
    .itemInputs(safeItemId('1x engineersdecor:rebar_concrete'))
    .itemOutputs(safeItemId('2x engineersdecor:rebar_concrete_slab'))
    .duration(25)
    .EUt(7)

  event.recipes.susy.mods.gregtech.cutter('tqd8klfdsnuczh') // remapped from original line 115
    .itemInputs(safeItemId('1x engineersdecor:rebar_concrete_slab'))
    .itemOutputs(safeItemId('4x engineersdecor:halfslab_rebar_concrete'))
    .duration(25)
    .EUt(7)

  event.recipes.susy.mods.gregtech.cutter('fxgvdokiq86zp5') // remapped from original line 122
    .itemInputs(safeItemId('1x engineersdecor:rebar_concrete_tile'))
    .itemOutputs(safeItemId('2x engineersdecor:rebar_concrete_tile_slab'))
    .duration(25)
    .EUt(7)

  event.recipes.susy.mods.gregtech.cutter('27qgoweuw1i9d6') // remapped from original line 129
    .itemInputs(safeItemId('1x engineersdecor:gas_concrete'))
    .itemOutputs(safeItemId('2x engineersdecor:gas_concrete_slab'))
    .duration(25)
    .EUt(7)

  event.recipes.susy.mods.gregtech.cutter('0qqwrablrb289e') // remapped from original line 136
    .itemInputs(safeItemId('1x engineersdecor:gas_concrete_slab'))
    .itemOutputs(safeItemId('4x engineersdecor:halfslab_gas_concrete'))
    .duration(25)
    .EUt(7)

  event.recipes.susy.mods.gregtech.autoclave('nttartsxu1qjrv') // remapped from original line 155
    .inputFluids(safeFluidOf('gtceu:concrete', 144))
    .itemInputs('1x #forge:dusts/quartzite')
    .itemInputs('1x #forge:dusts/tiny_aluminium')
    .itemOutputs(safeItemId('8x engineersdecor:gas_concrete'))
    .duration(80)
    .EUt(120)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (item in name_removals) {
  //     crafting.remove(item)
  // }

  // for (name in oreRod) {
  // 	mods.gregtech.assembler.recipeBuilder()
  // 			.circuitMeta(2)
  // 			.fluidInputs(fluid('concrete') * 144)
  // 			.inputs(ore('dustPolypropylene'))
  // 			.inputs(ore(name) * 4)
  // 			.outputs(item('engineersdecor:rebar_concrete') * 2)
  // 			.duration(40)
  // 			.EUt(120)
  // 			.buildAndRegister();
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // def name_removals = [
  // 		"engineersdecor:alternative/small_electrical_furnace_recipe_standalone",
  // 		"engineersdecor:alternative/small_lab_furnace_recipe_standalone",
  // 		"engineersdecor:alternative/labeled_crate_recipe_standalone",
  // 		"engineersdecor:alternative/factory_hopper_recipe_standalone",
  // 		"engineersdecor:alternative/factory_dropper_recipe_standalone",
  // 		"engineersdecor:alternative/factory_placer_recipe_standalone",
  // 		"engineersdecor:alternative/small_block_breaker_recipe_standalone",
  // 		"engineersdecor:alternative/small_tree_cutter_recipe_standalone",
  // 		"engineersdecor:alternative/small_waste_incinerator_recipe_standalone",
  // 		"engineersdecor:alternative/small_solar_panel_standalone",
  // 		"engineersdecor:alternative/small_mineral_smelter_recipe_standalone",
  // 		"engineersdecor:alternative/straight_pipe_valve_recipe_standalone",
  // 		"engineersdecor:alternative/straight_pipe_valve_redstone_recipe_standalone",
  // 		"engineersdecor:alternative/straight_pipe_valve_redstone_recipe_backcycle",
  // 		"engineersdecor:alternative/straight_pipe_valve_redstone_analog_recipe",
  // 		"engineersdecor:alternative/small_fluid_funnel_recipe_standalone",
  // 		"engineersdecor:alternative/passive_fluid_accumulator_recipe_standalone",
  // 		"engineersdecor:alternative/small_milking_machine_recipe_standalone",
  // 		"engineersdecor:alternative/rebar_concrete_block_recipe_standalone",
  // 		"engineersdecor:alternative/gas_concrete_block_recipe_standalone"
  // ]
  // def oreRod = [
  // 		'stickSteel',
  // 		'stickIron',
  // 		'stickWroughtIron'
  // ]
  // crafting.replaceShaped('engineersdecor:independent/clinker_brick_block_recipe', item('engineersdecor:clinker_brick_block') * 2, [
  //     [ore('ingotBrick'), metaitem('cement.clinker'), ore('ingotBrick')],
  //     [metaitem('cement.clinker'), ore('ingotBrick'), metaitem('cement.clinker')],
  //     [ore('ingotBrick'), metaitem('cement.clinker'), ore('ingotBrick')]
  // ])
  // crafting.replaceShaped('engineersdecor:independent/slag_brick_block_recipe', item('engineersdecor:slag_brick_block') * 9, [
  //     [ore('ingotBrick'), ore('dustTinyAsh'), ore('ingotBrick')],
  //     [ore('dustTinyAsh'), ore('blockGlass'), ore('dustTinyAsh')],
  //     [ore('ingotBrick'), ore('dustTinyAsh'), ore('ingotBrick')]
  // ])
  // crafting.replaceShaped('engineersdecor:alternative/panzerglass_block_recipe_standalone', item('engineersdecor:panzerglass_block') * 9, [
  //     [ore('blockGlass'), ore('screwSteel'), ore('blockGlass')],
  //     [ore('screwSteel'), ore('blockGlass'), ore('screwSteel')],
  //     [ore('blockGlass'), ore('screwSteel'), ore('blockGlass')]
  // ])
  // crafting.replaceShaped('engineersdecor:alternative/steel_framed_window_recipe_standalone', item('engineersdecor:steel_framed_window') * 9, [
  //     [ore('paneGlass'), ore('screwSteel'), ore('paneGlass')],
  //     [ore('screwSteel'), ore('paneGlass'), ore('screwSteel')],
  //     [ore('paneGlass'), ore('screwSteel'), ore('paneGlass')]
  // ])
  // crafting.replaceShaped('engineersdecor:alternative/thin_steel_pole_recipe_standalone', item('engineersdecor:thin_steel_pole') * 9, [
  //     [null, ore('stickSteel'), null],
  //     [null, ore('stickSteel'), null],
  //     [null, ore('stickSteel'), null]
  // ])
  // crafting.replaceShaped('engineersdecor:independent/clinker_brick_stairs_recipe', item('engineersdecor:clinker_brick_stairs') * 8, [
  //     [item('engineersdecor:clinker_brick_block'), null, null],
  //     [item('engineersdecor:clinker_brick_block'), item('engineersdecor:clinker_brick_block'), null],
  //     [item('engineersdecor:clinker_brick_block'), item('engineersdecor:clinker_brick_block'), item('engineersdecor:clinker_brick_block')]
  // ])
  // crafting.replaceShaped('engineersdecor:independent/clinker_brick_stained_stairs_recipe', item('engineersdecor:clinker_brick_stained_stairs') * 8, [
  //     [item('engineersdecor:clinker_brick_stained_block'), null, null],
  //     [item('engineersdecor:clinker_brick_stained_block'), item('engineersdecor:clinker_brick_stained_block'), null],
  //     [item('engineersdecor:clinker_brick_stained_block'), item('engineersdecor:clinker_brick_stained_block'), item('engineersdecor:clinker_brick_stained_block')]
  // ])
  // crafting.replaceShaped('engineersdecor:independent/slag_brick_stairs_recipe', item('engineersdecor:slag_brick_stairs') * 8, [
  //     [item('engineersdecor:slag_brick_block'), null, null],
  //     [item('engineersdecor:slag_brick_block'), item('engineersdecor:slag_brick_block'), null],
  //     [item('engineersdecor:slag_brick_block'), item('engineersdecor:slag_brick_block'), item('engineersdecor:slag_brick_block')]
  // ])
  // crafting.replaceShaped('engineersdecor:independent/rebar_concrete_stairs_recipe', item('engineersdecor:rebar_concrete_stairs') * 8, [
  //     [item('engineersdecor:rebar_concrete'), null, null],
  //     [item('engineersdecor:rebar_concrete'), item('engineersdecor:rebar_concrete'), null],
  //     [item('engineersdecor:rebar_concrete'), item('engineersdecor:rebar_concrete'), item('engineersdecor:rebar_concrete')]
  // ])
  // crafting.replaceShaped('engineersdecor:independent/rebar_concrete_tile_stairs_recipe', item('engineersdecor:rebar_concrete_tile_stairs') * 8, [
  //     [item('engineersdecor:rebar_concrete_tile'), null, null],
  //     [item('engineersdecor:rebar_concrete_tile'), item('engineersdecor:rebar_concrete_tile'), null],
  //     [item('engineersdecor:rebar_concrete_tile'), item('engineersdecor:rebar_concrete_tile'), item('engineersdecor:rebar_concrete_tile')]
  // ])
  // crafting.replaceShaped('engineersdecor:independent/gas_concrete_stairs_recipe', item('engineersdecor:gas_concrete_stairs') * 8, [
  //     [item('engineersdecor:gas_concrete'), null, null],
  //     [item('engineersdecor:gas_concrete'), item('engineersdecor:gas_concrete'), null],
  //     [item('engineersdecor:gas_concrete'), item('engineersdecor:gas_concrete'), item('engineersdecor:gas_concrete')]
  // ])
  // crafting.replaceShaped('engineersdecor:independent/gas_concrete_stairs_recipe', item('engineersdecor:gas_concrete_stairs') * 8, [
  // 	[item('engineersdecor:gas_concrete'), null, null],
  // 	[item('engineersdecor:gas_concrete'), item('engineersdecor:gas_concrete'), null],
  // 	[item('engineersdecor:gas_concrete'), item('engineersdecor:gas_concrete'), item('engineersdecor:gas_concrete')]
  // ])
});