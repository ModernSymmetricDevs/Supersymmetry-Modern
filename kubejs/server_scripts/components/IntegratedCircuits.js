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
  event.remove({ type: 'gtceu:assembler', input: '#forge:plates/silicon' && '#forge:wires/fine_tin' && safeFluidOf('gtceu:plastic')})

  event.recipes.susy.mods.gregtech.assembler('0d9p2pfn5tyxqm') // remapped from original line 5
    .itemInputs('6x #forge:wires/fine_tin')
    .itemInputs(metaitem('wafer.silicon'))
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemOutputs(metaitem('component.transistor') * 8)
    .duration(160)
    .EUt(120)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
});