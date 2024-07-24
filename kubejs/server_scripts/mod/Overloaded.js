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
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // def name_removals = [
  //         "overloaded:blocks/basic/container/infinite_barrel",
  //         "overloaded:blocks/basic/container/infinite_tank",
  //         "overloaded:blocks/basic/container/infinite_capacitor",
  //         "overloaded:blocks/basic/hypertransfer/hyper_item_receiver",
  //         "overloaded:blocks/basic/hypertransfer/hyper_item_sender",
  //         "overloaded:blocks/basic/hypertransfer/hyper_fluid_receiver",
  //         "overloaded:blocks/basic/hypertransfer/hyper_fluid_sender",
  //         "overloaded:blocks/basic/hypertransfer/hyper_energy_receiver",
  //         "overloaded:blocks/basic/hypertransfer/hyper_energy_sender",
  //         "overloaded:blocks/basic/infinite_water_source",
  //         "overloaded:blocks/basic/energy_extractor",
  //         "overloaded:blocks/basic/item_interface",
  //         "overloaded:blocks/basic/player_interface",
  //         "overloaded:items/functional/linking_card",
  //         "overloaded:items/functional/multi_tool",
  //         "overloaded:items/crafting/energy_core",
  //         "overloaded:items/crafting/fluid_core",
  //         "overloaded:items/crafting/item_core",
  //         "overloaded:items/functional/armor/multi_helmet",
  //         "overloaded:items/functional/armor/multi_chestplate",
  //         "overloaded:items/functional/armor/multi_leggings",
  //         "overloaded:items/functional/armor/multi_boots",
  //         "overloaded:items/functional/rail_gun",
  //         "overloaded:items/functional/settings_editor",
  //         "overloaded:compressed_cobblestone",
  //         "overloaded:compressed_cobblestone_1",
  //         "overloaded:compressed_cobblestone_2",
  //         "overloaded:compressed_cobblestone_4",
  //         "overloaded:compressed_cobblestone_3",
  //         "overloaded:compressed_cobblestone_6",
  //         "overloaded:compressed_cobblestone_5",
  //         "overloaded:compressed_sand",
  //         "overloaded:compressed_sand_1",
  //         "overloaded:compressed_sand_2",
  //         "overloaded:compressed_sand_4",
  //         "overloaded:compressed_sand_3",
  //         "overloaded:compressed_sand_6",
  //         "overloaded:compressed_sand_5",
  //         "overloaded:compressed_stone",
  //         "overloaded:compressed_stone_1",
  //         "overloaded:compressed_stone_2",
  //         "overloaded:compressed_stone_4",
  //         "overloaded:compressed_stone_3",
  //         "overloaded:compressed_stone_6",
  //         "overloaded:compressed_stone_5",
  //         "overloaded:compressed_obsidian",
  //         "overloaded:compressed_obsidian_1",
  //         "overloaded:compressed_obsidian_2",
  //         "overloaded:compressed_obsidian_4",
  //         "overloaded:compressed_obsidian_3",
  //         "overloaded:compressed_obsidian_6",
  //         "overloaded:compressed_obsidian_5",
  //         "overloaded:compressed_netherrack",
  //         "overloaded:compressed_netherrack_1",
  //         "overloaded:compressed_netherrack_2",
  //         "overloaded:compressed_netherrack_4",
  //         "overloaded:compressed_netherrack_3",
  //         "overloaded:compressed_netherrack_6",
  //         "overloaded:compressed_netherrack_5",
  //         "overloaded:compressed_dirt",
  //         "overloaded:compressed_dirt_1",
  //         "overloaded:compressed_dirt_2",
  //         "overloaded:compressed_dirt_4",
  //         "overloaded:compressed_dirt_3",
  //         "overloaded:compressed_dirt_6",
  //         "overloaded:compressed_dirt_5",
  //         "overloaded:compressed_gravel",
  //         "overloaded:compressed_gravel_1",
  //         "overloaded:compressed_gravel_2",
  //         "overloaded:compressed_gravel_4",
  //         "overloaded:compressed_gravel_3",
  //         "overloaded:compressed_gravel_6",
  //         "overloaded:compressed_gravel_5"
  // ]
});