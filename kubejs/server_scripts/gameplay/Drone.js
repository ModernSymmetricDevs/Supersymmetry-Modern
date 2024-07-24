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

  event.recipes.susy.mods.gregtech.assembler('vudcr2uueuzmta') // remapped from original line 24
    .itemInputs(metaitem('electric.motor.lv') * 4)
    .itemInputs('4x #forge:rotors/steel')
    .itemInputs('4x #forge:rods/steel')
    .itemInputs('2x #forge:plates/tin')
    .itemInputs(ore('chest') * 1)
    .itemInputs('1x #forge:craftings/tool_butchery_knife')
    .itemInputs(metaitem('robot.arm.lv') * 1)
    .itemInputs('1x #forge:batterys/lv')
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(metaitem('drone.lv').withNbt(["Charge": 0L]))
    .EUt(voltAmps[1])
    .duration(80)

  event.recipes.susy.DRONE_PAD('vab537dtglyfeb') // remapped from original line 39
    .itemInputs(metaitem('drone.lv').withNbt(["Charge": 10000L]))
    .circuit(5)
    .itemOutputs(metaitem('drone.lv').withNbt(["Charge": 0L]))
    .chancedOutput(safeItemId('8x minecraft:bone'), 8000, 400)
    .chancedOutput(safeItemId('8x minecraft:rotten_flesh'), 8000, 400)
    .EUt(4)
    .duration(800)
    .dimension(0)

  event.recipes.susy.DRONE_PAD('kbisblbhq77pf5') // remapped from original line 50
    .itemInputs(metaitem('drone.lv').withNbt(["Charge": 10000L]))
    .circuit(1)
    .itemOutputs(metaitem('drone.lv').withNbt(["Charge": 0L]))
    .chancedOutput(safeItemId('8x minecraft:porkchop'), 8000, 400)
    .chancedOutput(safeItemId('8x minecraft:beef'), 8000, 400)
    .chancedOutput(safeItemId('8x minecraft:chicken'), 8000, 400)
    .EUt(4)
    .duration(800)
    .dimension(0)

  event.recipes.susy.DRONE_PAD('kbvtd0on7wrbja') // remapped from original line 62
    .itemInputs(metaitem('drone.lv').withNbt(["Charge": 10000L]))
    .circuit(2)
    .itemOutputs(metaitem('drone.lv').withNbt(["Charge": 0L]))
    .chancedOutput(safeItemId('8x minecraft:rabbit'), 8000, 400)
    .chancedOutput(safeItemId('8x minecraft:mutton'), 8000, 400)
    .EUt(4)
    .duration(800)
    .dimension(0)

  event.recipes.susy.DRONE_PAD('gavo8ydvguwzwf') // remapped from original line 73
    .itemInputs(metaitem('drone.lv').withNbt(["Charge": 10000L]))
    .circuit(3)
    .itemOutputs(metaitem('drone.lv').withNbt(["Charge": 0L]))
    .chancedOutput(safeItemId('8x minecraft:fish'), 8000, 400)
    .chancedOutput(safeItemId('1x minecraft:fish', ')) * 8, 8000, 400)
    .chancedOutput(safeItemId('8x minecraft:dye'), 8000, 400)
    .EUt(4)
    .duration(800)
    .dimension(0)

  event.recipes.susy.DRONE_PAD('wyrdbkvochtezx') // remapped from original line 85
    .itemInputs(metaitem('drone.lv').withNbt(["Charge": 10000L]))
    .circuit(4)
    .itemOutputs(metaitem('drone.lv').withNbt(["Charge": 0L]))
    .chancedOutput(safeItemId('8x minecraft:leather'), 8000, 400)
    .chancedOutput(safeItemId('8x minecraft:wool'), 8000, 400)
    .EUt(4)
    .duration(800)
    .dimension(0)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import gregtech.api.recipes.RecipeBuilder
  // import globals.Globals
  // def DRONE_PAD = recipemap('drone_pad');
  // crafting.addShaped("susy:drone_pad_controller", metaitem('drone_pad'), [
  //     [ore('plateSteel'), metaitem('emitter.lv'), ore('plateSteel')],
  //     [item('susy:susy_multiblock_casing', 4), item('gregtech:metal_casing', 4), item('susy:susy_multiblock_casing', 4)],
  //     [ore('plateSteel'), item('susy:susy_multiblock_casing', 4), ore('plateSteel')]
  // ])
  // crafting.addShaped("susy:drone_pad_block", item('susy:susy_multiblock_casing', 4) * 3, [
  //     [null, null, null],
  //     [ore('plateSteel'), ore('plateSteel'), ore('plateSteel')],
  //     [ore('blockConcrete'), ore('blockConcrete'), ore('blockConcrete')]
  // ])
  // crafting.addShaped("susy:drone_pad_block_alt", item('susy:susy_multiblock_casing', 4) * 3, [
  //     [null, null, null],
  //     [ore('plateSteel'), ore('plateSteel'), ore('plateSteel')],
  //     [ore('stonePolished'), ore('stonePolished'), ore('stonePolished')]
  // ])
});