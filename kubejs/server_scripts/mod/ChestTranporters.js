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

  event.recipes.susy.recipemap('assembler')('nuqdcnjjeu4zwv') // remapped from original line 36
    .itemInputs(safeItemId('4x minecraft:stick'))
    .inputFluids(safeFluidOf('gtceu:glue', 20))
    .itemOutputs(safeItemId('1x chesttransporter:chesttransporter'))
    .duration(400)
    .EUt(16)

  event.recipes.susy.recipemap('assembler')('htrs4tvqdeqbil') // remapped from original line 44
    .itemInputs(safeItemId('4x minecraft:stick'))
    .inputFluids(safeFluidOf('gtceu:resin', 100))
    .itemOutputs(safeItemId('1x chesttransporter:chesttransporter'))
    .duration(800)
    .EUt(16)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (name in name_removals) {
  //   crafting.remove(name)
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // def name_removals = [
  //   'chesttransporter:tin_transporter',
  //   'chesttransporter:gold_transporter',
  //   'chesttransporter:obsidian_transporter',
  //   'chesttransporter:diamond_transporter'
  // ];
  // crafting.replaceShaped('chesttransporter:wooden_transporter', item('chesttransporter:chesttransporter'), [
  //   [metaitem('rubber_drop'), null, metaitem('rubber_drop')],
  //   [item('minecraft:stick'), item('minecraft:stick') , item('minecraft:stick')],
  //   [null, item('minecraft:stick'), null]
  // ]);
  // crafting.replaceShaped('chesttransporter:iron_transporter', item('chesttransporter:chesttransporter_iron'), [
  //   [ore('plateWroughtIron'), null, ore('plateWroughtIron')],
  //   [ore('screwWroughtIron'), ore('gearSmallIron') , ore('screwWroughtIron')],
  //   [ore('craftingToolScrewdriver'), ore('stickWroughtIron'), ore('craftingToolHardHammer')]
  // ]);
  // crafting.replaceShaped('chesttransporter:silver_transporter', item('chesttransporter:chesttransporter_silver'), [
  //   [metaitem('robot.arm.lv'), null, metaitem('robot.arm.lv')],
  //   [ore('screwSteel'), ore('gearSmallSteel') , ore('screwSteel')],
  //   [ore('craftingToolScrewdriver'), ore('stickSilver'), ore('craftingToolHardHammer')]
  // ]);
  // crafting.replaceShaped('chesttransporter:copper_transporter', item('chesttransporter:chesttransporter_copper'), [
  //   [ore('plateBronze'), null, ore('plateBronze')],
  //   [ore('screwBronze'), ore('gearSmallBronze') , ore('screwBronze')],
  //   [ore('craftingToolScrewdriver'), ore('stickBronze'), ore('craftingToolHardHammer')]
  // ]);
});