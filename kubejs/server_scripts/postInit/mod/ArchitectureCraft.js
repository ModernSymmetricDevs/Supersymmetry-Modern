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
  //     'architecturecraft:item.architecturecraft.sawblade1'
  // ]
  // crafting.replaceShaped('architecturecraft:tile.architecturecraft.sawbench0', item('architecturecraft:sawbench'), [
  //     [ore('plateIron'), metaitem('toolHeadBuzzSawIron'), ore('plateIron')],
  //     [ore('stickWood'), item('architecturecraft:largepulley'), ore('stickWood')],
  //     [ore('stickWood'), metaitem('gearWood'), ore('stickWood')]
  // ])
  // crafting.replaceShaped('architecturecraft:item.architecturecraft.largepulley2', item('architecturecraft:largepulley'), [
  //         [null, metaitem('ringIron'), null],
  //         [item('minecraft:string'), null, item('minecraft:string')],
  //         [null, metaitem('ringIron'), null]
  // ])
  // crafting.replaceShaped('architecturecraft:item.architecturecraft.chisel3', item('architecturecraft:chisel'), [
  //         [metaitem('plateIron'), null, null],
  //         [null, metaitem('plateIron'), null],
  //         [null, null, item('minecraft:stick')]
  // ])
  // crafting.replaceShaped('architecturecraft:item.architecturecraft.hammer4', item('architecturecraft:hammer'), [
  //         [null, null, null],
  //         [ore('plateIron'), ore('plateIron'), ore('plateIron')],
  //         [ore('craftingToolFile'), item('minecraft:stick'), ore('craftingToolHardHammer')]
  // ])
});