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

  event.recipes.susy.mods.gregtech.chemical_bath('lc8yycnejd9slp') // remapped from original line 84
    .inputFluids(safeFluidOf('susy:dye_yellow', 18))
    .itemInputs(safeItemId('1x xnet:netcable'))
    .itemOutputs(safeItemId('2x xnet:netcable', ')).withNbt(["display": ["LocName": "tile.xnet.netcable_yellow.name"]]))
    .duration(20)
    .EUt(7)

  event.recipes.susy.mods.gregtech.chemical_bath('s8b51soixjivmu') // remapped from original line 92
    .inputFluids(safeFluidOf('susy:dye_yellow', 18))
    .itemInputs(safeItemId('1x xnet:netcable', ')))
    .itemOutputs(safeItemId('2x xnet:netcable', ')).withNbt(["display": ["LocName": "tile.xnet.netcable_yellow.name"]]))
    .duration(20)
    .EUt(7)

  event.recipes.susy.mods.gregtech.chemical_bath('rqjckvigrcyuls') // remapped from original line 100
    .inputFluids(safeFluidOf('susy:dye_yellow', 18))
    .itemInputs(safeItemId('3x xnet:netcable', ')))
    .itemOutputs(safeItemId('2x xnet:netcable', ')).withNbt(["display": ["LocName": "tile.xnet.netcable_yellow.name"]]))
    .duration(20)
    .EUt(7)

  event.recipes.susy.mods.gregtech.chemical_bath('jwrmtmnuqek2se') // remapped from original line 108
    .inputFluids(safeFluidOf('susy:dye_blue', 18))
    .itemInputs(safeItemId('2x xnet:netcable', ')))
    .itemOutputs(safeItemId('1x xnet:netcable').withNbt(["display": ["LocName": "tile.xnet.netcable_blue.name"]]))
    .duration(20)
    .EUt(7)

  event.recipes.susy.mods.gregtech.chemical_bath('ybbcj9dquojkyu') // remapped from original line 116
    .inputFluids(safeFluidOf('susy:dye_blue', 18))
    .itemInputs(safeItemId('1x xnet:netcable', ')))
    .itemOutputs(safeItemId('1x xnet:netcable').withNbt(["display": ["LocName": "tile.xnet.netcable_blue.name"]]))
    .duration(20)
    .EUt(7)

  event.recipes.susy.mods.gregtech.chemical_bath('o40abt7eltus8e') // remapped from original line 124
    .inputFluids(safeFluidOf('susy:dye_blue', 18))
    .itemInputs(safeItemId('3x xnet:netcable', ')))
    .itemOutputs(safeItemId('1x xnet:netcable').withNbt(["display": ["LocName": "tile.xnet.netcable_blue.name"]]))
    .duration(20)
    .EUt(7)

  event.recipes.susy.mods.gregtech.chemical_bath('wuqucymgquqwtu') // remapped from original line 132
    .inputFluids(safeFluidOf('susy:dye_red', 18))
    .itemInputs(safeItemId('2x xnet:netcable', ')))
    .itemOutputs(safeItemId('1x xnet:netcable', ')).withNbt(["display": ["LocName": "tile.xnet.netcable_red.name"]]))
    .duration(20)
    .EUt(7)

  event.recipes.susy.mods.gregtech.chemical_bath('lsctkk1vrtmdfl') // remapped from original line 140
    .inputFluids(safeFluidOf('susy:dye_red', 18))
    .itemInputs(safeItemId('1x xnet:netcable'))
    .itemOutputs(safeItemId('1x xnet:netcable', ')).withNbt(["display": ["LocName": "tile.xnet.netcable_red.name"]]))
    .duration(20)
    .EUt(7)

  event.recipes.susy.mods.gregtech.chemical_bath('zadhmuonvadqoe') // remapped from original line 148
    .inputFluids(safeFluidOf('susy:dye_red', 18))
    .itemInputs(safeItemId('3x xnet:netcable', ')))
    .itemOutputs(safeItemId('1x xnet:netcable', ')).withNbt(["display": ["LocName": "tile.xnet.netcable_red.name"]]))
    .duration(20)
    .EUt(7)

  event.recipes.susy.mods.gregtech.chemical_bath('x189gso7drgcw8') // remapped from original line 156
    .inputFluids(safeFluidOf('susy:dye_green', 18))
    .itemInputs(safeItemId('2x xnet:netcable', ')))
    .itemOutputs(safeItemId('3x xnet:netcable', ')).withNbt(["display": ["LocName": "tile.xnet.netcable_green.name"]]))
    .duration(20)
    .EUt(7)

  event.recipes.susy.mods.gregtech.chemical_bath('xsibhuehyetjek') // remapped from original line 164
    .inputFluids(safeFluidOf('susy:dye_green', 18))
    .itemInputs(safeItemId('1x xnet:netcable'))
    .itemOutputs(safeItemId('3x xnet:netcable', ')).withNbt(["display": ["LocName": "tile.xnet.netcable_green.name"]]))
    .duration(20)
    .EUt(7)

  event.recipes.susy.mods.gregtech.chemical_bath('ws2eqhaoumk80q') // remapped from original line 172
    .inputFluids(safeFluidOf('susy:dye_green', 18))
    .itemInputs(safeItemId('1x xnet:netcable', ')))
    .itemOutputs(safeItemId('3x xnet:netcable', ')).withNbt(["display": ["LocName": "tile.xnet.netcable_green.name"]]))
    .duration(20)
    .EUt(7)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (item in name_removals) {
  //     crafting.remove(item);
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // def name_removals = [
  //         "xnet:netcable_0",
  //         "xnet:netcable_routing",
  //         "xnet:connector_0",
  //         "xnet:advanced_connector_0",
  //         "xnet:controller_rftools",
  //         "xnet:router_rftools",
  //         "xnet:wireless_router_rftools",
  //         "xnet:redstone_proxy_rftools",
  //         "xnet:redstone_proxy_upd",
  //         "xnet:connector_routing",
  //         "xnet:connector_upgrade",
  //         "xnet:xnet_manual",
  //         "xnet:netcable_1",
  //         "xnet:netcable_2",
  //         "xnet:netcable_3",
  //         "xnet:netcable_4",
  //         "xnet:antenna",
  //         "xnet:antenna_base",
  //         "xnet:antenna_dish"
  // ]
  // crafting.addShapeless("xnet_redstone_proxy_1", item('xnet:redstone_proxy'), [item('xnet:redstone_proxy_upd')]);
  // crafting.addShapeless("xnet_redstone_proxy_2", item('xnet:redstone_proxy_upd'), [item('xnet:redstone_proxy')]);
  // crafting.addShaped("xnet_cable", item('xnet:netcable:0') * 24, [
  //         [ore('cableGtSingleTin'), ore('cableGtSingleTin'), ore('cableGtSingleTin')],
  //         [ore('plateSteel'), ore('plateSteel'), ore('plateSteel')],
  //         [metaitem('pipeTinyFluidSteel'), metaitem('pipeTinyFluidSteel'), metaitem('pipeTinyFluidSteel')]
  // ]);
  // crafting.addShaped("xnet_cable_routing", item('xnet:netcable:4') * 48, [
  //         [ore('cableGtQuadrupleTin'), ore('cableGtQuadrupleTin'), ore('cableGtQuadrupleTin')],
  //         [ore('plateSteel'), ore('plateSteel'), ore('plateSteel')],
  //         [metaitem('pipeNormalFluidSteel'), metaitem('pipeNormalFluidSteel'), metaitem('pipeNormalFluidSteel')]
  // ]);
  // crafting.addShaped("xnet_connector", item('xnet:connector:0') * 4, [
  //         [null, ore('circuitLv'), null],
  //         [metaitem('robot.arm.lv'), metaitem('hull.lv'), metaitem('electric.pump.lv')],
  //         [null, ore('wireGtSingleTin'), null]
  // ]);
  // crafting.addShaped("xnet_connector_advanced", item('xnet:advanced_connector:0') * 4, [
  //         [null, ore('circuitMv'), null],
  //         [metaitem('robot.arm.mv'), metaitem('hull.mv'), metaitem('electric.pump.mv')],
  //         [null, ore('wireGtSingleAnnealedCopper'), null]
  // ]);
  // crafting.addShaped("xnet_controller", item('xnet:controller'), [
  //         [item('xnet:netcable:0'), item('xnet:netcable:0'), item('xnet:netcable:0')],
  //         [ore('wireFineRedAlloy'), metaitem('hull.lv'), ore('wireFineRedAlloy')],
  //         [ore('plateSteel'), ore('circuitLv'), ore('plateSteel')]
  // ]);
  // crafting.addShaped("xnet_router", item('xnet:router'), [
  //         [item('xnet:netcable:0'), item('xnet:connector:0'), item('xnet:netcable:0')],
  //         [ore('wireFineRedAlloy'), metaitem('hull.lv'), ore('wireFineRedAlloy')],
  //         [ore('plateSteel'), ore('circuitLv'), ore('plateSteel')]
  // ]);
  // crafting.addShaped("xnet_redstone_proxy", item('xnet:redstone_proxy'), [
  //         [ore('wireFineRedAlloy'), ore('blockRedstone'), ore('wireFineRedAlloy')],
  //         [ore('wireFineRedAlloy'), metaitem('hull.lv'), ore('wireFineRedAlloy')],
  //         [ore('wireFineRedAlloy'), ore('wireFineRedAlloy'), ore('wireFineRedAlloy')]
  // ]);
  // crafting.addShaped("xnet_routing_connector", item('xnet:connector:4'), [
  //         [ore('wireFineRedAlloy'), ore('wireFineRedAlloy'), ore('wireFineRedAlloy')],
  //         [ore('plateGold'), item('xnet:connector:0'), ore('plateGold')],
  //         [ore('wireFineRedAlloy'), ore('wireFineRedAlloy'), ore('wireFineRedAlloy')]
  // ]);
  // crafting.addShaped("xnet_connector_upgrade", item('xnet:connector_upgrade'), [
  //         [ore('plateAluminium'), ore('plateAluminium'), ore('plateAluminium')],
  //         [metaitem('robot.arm.mv'), ore('circuitMv'), metaitem('electric.pump.mv')],
  //         [ore('plateAluminium'), ore('plateAluminium'), ore('plateAluminium')]
  // ]);
});