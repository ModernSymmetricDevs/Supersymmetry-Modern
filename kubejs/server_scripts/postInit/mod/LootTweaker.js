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
  // import leviathan143.loottweaker.common.zenscript.LootTableTweakManager;
  // import leviathan143.loottweaker.common.zenscript.LootTableTweakManager.*;
  // import leviathan143.loottweaker.common.LootTweaker;
  // import leviathan143.loottweaker.common.LootTweaker.*;
  // import leviathan143.loottweaker.common.zenscript.wrapper.ZenLootTableWrapper;
  // import leviathan143.loottweaker.common.zenscript.LootTweakerContext;
  // import leviathan143.loottweaker.common.CTLoggingErrorHandler;
  // def context = new LootTweakerContext(new CTLoggingErrorHandler());
  // def tweak_manager = context.createLootTableTweakManager()
  // def simple_dungeon = tweak_manager.getTable('minecraft:chests/simple_dungeon');
  // def village_blacksmith = tweak_manager.getTable("minecraft:chests/village_blacksmith");
  // simple_dungeon.getPool("sgcraft0").clearEntries();
  // village_blacksmith.getPool("sgcraft0").clearEntries();
});