ServerEvents.recipes(event => {

  event.recipes.susy.mods.gregtech.assembler('7dcxgrptp77fg1') // remapped from original line 24
    .itemInputs(safeItemId('4x susy:electric.motor.lv'))
    .itemInputs('4x #forge:rotors/steel')
    .itemInputs('4x #forge:rods/steel')
    .itemInputs('2x #forge:plates/tin')
    .itemInputs(safeItemId('1x susy:chest'))
    .itemInputs('1x #forge:craftings/tool_butchery_knife')
    .itemInputs(safeItemId('1x susy:robot.arm.lv'))
    .itemInputs('1x #forge:batterys/lv')
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('1x susy:drone.lv').withNbt(["Charge": 0L]))
    .EUt(voltAmps[1])
    .duration(80)

  event.recipes.susy.drone_pad('assrnoe1ccg0s1') // remapped from original line 39
    .itemInputs(safeItemId('1x susy:drone.lv').withNbt(["Charge": 10000L]))
    .circuit(5)
    .itemOutputs(safeItemId('1x susy:drone.lv').withNbt(["Charge": 0L]))
    .chancedOutput(safeItemId('8x minecraft:bone'), 8000, 400)
    .chancedOutput(safeItemId('8x minecraft:rotten_flesh'), 8000, 400)
    .EUt(4)
    .duration(800)
    .dimension(0)

  event.recipes.susy.drone_pad('li7qbsbsmokcgk') // remapped from original line 50
    .itemInputs(safeItemId('1x susy:drone.lv').withNbt(["Charge": 10000L]))
    .circuit(1)
    .itemOutputs(safeItemId('1x susy:drone.lv').withNbt(["Charge": 0L]))
    .chancedOutput(safeItemId('8x minecraft:porkchop'), 8000, 400)
    .chancedOutput(safeItemId('8x minecraft:beef'), 8000, 400)
    .chancedOutput(safeItemId('8x minecraft:chicken'), 8000, 400)
    .EUt(4)
    .duration(800)
    .dimension(0)

  event.recipes.susy.drone_pad('mhsvopz9bin2py') // remapped from original line 62
    .itemInputs(safeItemId('1x susy:drone.lv').withNbt(["Charge": 10000L]))
    .circuit(2)
    .itemOutputs(safeItemId('1x susy:drone.lv').withNbt(["Charge": 0L]))
    .chancedOutput(safeItemId('8x minecraft:rabbit'), 8000, 400)
    .chancedOutput(safeItemId('8x minecraft:mutton'), 8000, 400)
    .EUt(4)
    .duration(800)
    .dimension(0)

  event.recipes.susy.drone_pad('daemunxkqectjc') // remapped from original line 73
    .itemInputs(safeItemId('1x susy:drone.lv').withNbt(["Charge": 10000L]))
    .circuit(3)
    .itemOutputs(safeItemId('1x susy:drone.lv').withNbt(["Charge": 0L]))
    .chancedOutput(safeItemId('8x minecraft:fish'), 8000, 400)
    .chancedOutput(safeItemId('8x minecraft:fish'), 8000, 400)
    .chancedOutput(safeItemId('8x minecraft:dye'), 8000, 400)
    .EUt(4)
    .duration(800)
    .dimension(0)

  event.recipes.susy.drone_pad('xmsiht7eeqda8g') // remapped from original line 85
    .itemInputs(safeItemId('1x susy:drone.lv').withNbt(["Charge": 10000L]))
    .circuit(4)
    .itemOutputs(safeItemId('1x susy:drone.lv').withNbt(["Charge": 0L]))
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