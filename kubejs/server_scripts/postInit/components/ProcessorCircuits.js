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