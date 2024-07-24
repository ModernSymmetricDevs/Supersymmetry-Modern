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

  event.recipes.susy.mods.gregtech.circuit_assembler('oma78hachs0tth') // remapped from original line 13
    .itemInputs(safeItemId('10x opencomputers:component', 1')0))
    .itemInputs(safeItemId('3x opencomputers:component', ')))
    .itemInputs('4x #forge:wires/fine_aluminium')
    .itemInputs(metaitem('circuit_board.advanced'))
    .itemInputs(metaitem('sensor.ev'))
    .itemInputs(metaitem('emitter.ev'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x openglasses:openglasses_card'))
    .duration(400)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('o66c1pmimsnrzy') // remapped from original line 26
    .itemInputs(safeItemId('10x opencomputers:component', 1')0))
    .itemInputs(metaitem('hull.ev'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('1x openglasses:openglassesterminal'))
    .duration(400)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('ibecisuvcgmgol') // remapped from original line 36
    .itemInputs(safeItemId('10x opencomputers:component', 1')0))
    .itemInputs(safeItemId('3x opencomputers:component', ')))
    .itemInputs(safeItemId('3x opencomputers:screen3')') * 2)
    .itemInputs('4x #forge:wires/fine_aluminium')
    .itemInputs(safeItemId('1x oc:wlanCard'))
    .itemInputs(safeItemId('3x opencomputers:card', ')))
    .itemInputs(metaitem('sensor.ev'))
    .itemInputs(metaitem('emitter.ev'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('1x openglasses:openglasses'))
    .duration(400)
    .EUt(480)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (item in name_removals) {
  //     crafting.remove(item);
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // def solder = fluid('soldering_alloy') * 72
  // def name_removals = [
  // "openglasses:items/openglasses_card",
  // "openglasses:blocks/openglasses_terminal",
  // "openglasses:items/openglasses"
  // ]
});