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
  //     'storagedrawers:compacting_drawer',
  //     'storagedrawers:controller',
  //     'storagedrawers:controller_slave',
  //     'storagedrawers:upgrade_storage_gold',
  //     'storagedrawers:upgrade_storage_diamond',
  //     'storagedrawers:upgrade_storage_emerald',
  //     'storagedrawers:upgrade_void',
  //     'storagedrawers:upgrade_conversion'
  // ]
  // crafting.replaceShapeless("storagedrawers:key_quantify", item('storagedrawers:quantify_key'), [item('storagedrawers:drawer_key'), item('minecraft:book')])
  // crafting.replaceShapeless("storagedrawers:key_concealment", item('storagedrawers:shroud_key'), [item('storagedrawers:drawer_key'), item('minecraft:carpet')])
  // crafting.replaceShaped("storagedrawers:key_drawer", item('storagedrawers:drawer_key'), [
  //         [null, ore('stickBrass'), null],
  //         [ore('craftingToolFile'), ore('stickBrass'), null],
  //         [null, ore('plateBrass'), null]
  // ])
});