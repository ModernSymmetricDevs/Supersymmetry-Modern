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
  event.remove({ type: 'gtceu:circuit_assembler', input: 'susy:circuit_board.plastic' && 'susy:circuit.assembly' && 'susy:component.diode' && 'susy:plate.random_access_memory' && '#forge:wires/fine_electrum' && '#forge:bolts/blue_alloy' && safeFluidOf('gtceu:soldering_alloy')})
  event.remove({ type: 'gtceu:circuit_assembler', input: 'susy:circuit_board.plastic' && 'susy:circuit.assembly' && 'susy:component.diode' && 'susy:plate.random_access_memory' && '#forge:wires/fine_electrum' && '#forge:bolts/blue_alloy' && safeFluidOf('gtceu:tin')})

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // Globals.solders.each { key, val ->
  // 	recipemap('circuit_assembler').recipeBuilder()
  // 		.inputs(metaitem('frameAluminium'))
  // 		.inputs(metaitem('circuit.assembly') * 2)
  // 		.inputs(ore('componentDiode') * 4)
  // 		.inputs(metaitem('plate.random_access_memory') * 4)
  // 		.inputs(metaitem('plate.nand_memory_chip') * 4)
  // 		.inputs(ore('cableGtSingleElectrum') * 4)
  // 		.fluidInputs(fluid(key) * val)
  // 		.outputs(metaitem('circuit.workstation'))
  // 		.cleanroom(CleanroomType.CLEANROOM)
  // 		.duration(250)
  // 		.EUt(120)
  // 		.buildAndRegister();
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import classes.*;
  // import globals.Globals
  // import gregtech.api.metatileentity.multiblock.CleanroomType
});