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

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (name in name_removals) {
  //     crafting.remove(name)
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // def name_removals = [
  //         "scannable:scanner",
  //         "regeneration:fob_watch",
  //         "regeneration:fob_watch_2",
  //         "regeneration:arch",
  //         "regeneration:hand_jar",
  //         "regeneration:lindos_vial",
  //         "tardis:tardis_coral",
  // 	"tardis:bessie",
  //         "sync:sync_core",
  //         "sync:shell_constructor",
  //         "sync:shell_storage",
  //         "sync:treadmill",
  //         "weeping-angels:timey_wimey_dectecterino",
  //         "weeping-angels:chronodyne_generator",
  //         'quark:redstone_randomizer',
  //         "gravitygun:gravitygun",
  //         "gravitygun:supercharged_gravitygun",
  //         "portalgun:portalgun"
  // ]
  // crafting.replaceShaped('cd4017be_lib:dimstack/dim_pipe', item('dimstack:dim_pipe') * 2, [
  //         [ore('frameGtSteel'), ore('gemQuartzite'), ore('frameGtSteel')],
  //         [ore('frameGtSteel'), metaitem('crate.wood'), ore('frameGtSteel')],
  //         [ore('frameGtSteel'), ore('gemQuartzite'), ore('frameGtSteel')]
  // ])
  // crafting.replaceShaped('naturescompass:natures_compass', item('naturescompass:naturescompass'), [
  //         [null, metaitem('sensor.hv'), null],
  //         [metaitem('plateTreatedWood'), item('minecraft:compass'), metaitem('plateTreatedWood')],
  //         [null, ore('circuitHv'), null]
  // ])
  // crafting.replaceShaped('travelersbackpack:travelers_backpack_standard', item('travelersbackpack:travelers_backpack'), [
  //         [item('minecraft:leather'), metaitem('workbench'), item('minecraft:leather')],
  //         [metaitem('large_fluid_cell.steel'), item('minecraft:chest'), metaitem('large_fluid_cell.steel')],
  //         [item('minecraft:leather'), item('minecraft:bed'), item('minecraft:leather')]
  // ])
  // crafting.addShaped('quark:redstone_randomizer', item('quark:redstone_randomizer'), [
  //         [null, metaitem('wireFineRedAlloy'), null],
  //         [null, ore('circuitLv'), null],
  //         [null, item('minecraft:comparator'), null]
  // ])
  // crafting.replaceShaped('toolbelt:pouch', item('toolbelt:pouch'), [
  //         [metaitem('boltGold'), null, metaitem('boltGold')],
  //         [metaitem('bound_leather'), null, metaitem('bound_leather')],
  //         [item('minecraft:string'), metaitem('bound_leather'), item('minecraft:string')]
  // ]) 
  // crafting.replaceShaped('toolbelt:belt', item('toolbelt:belt'), [
  //         [item('minecraft:string'), metaitem('bound_leather'), item('minecraft:string')],
  //         [metaitem('bound_leather'), null, metaitem('bound_leather')],
  //         [item('toolbelt:pouch'), metaitem('ringSteel'), item('toolbelt:pouch')]
  // ]) 
});