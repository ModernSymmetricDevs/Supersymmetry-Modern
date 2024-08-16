ServerEvents.recipes(event => {

  event.recipes.susy.recipemap('assembler')('ycli4tjhanvytq') // remapped from original line 75
    .itemInputs(safeItemId('4x gregtech:stone_smooth', ')) * 4)
    .itemInputs(metaitem('electric.motor.lv') * 2)
    .itemInputs('8x #forge:rods/steel')
    .itemInputs('8x #forge:plates/steel')
    .itemInputs('8x #forge:screws/steel')
    .itemOutputs(safeItemId('1x multistorage:vault'))
    .duration(200)
    .EUt(30)

  event.recipes.susy.recipemap('assembler')('pfjkhp8fhhb6jv') // remapped from original line 86
    .circuit(12)
    .inputFluids(safeFluidOf('gtceu:concrete', 144))
    .itemInputs('1x #forge:frames/steel')
    .itemInputs('6x #forge:plates/steel')
    .itemOutputs(safeItemId('1x multistorage:vault', ')).withNbt(["color": "silver", "cvalue": 10329495]) * 2)
    .duration(200)
    .EUt(30)

  event.recipes.susy.recipemap('assembler')('vwjpzcsf1gxvup') // remapped from original line 96
    .circuit(12)
    .itemInputs(safeItemId('1x gregtech:transparent_casing'))
    .itemInputs('1x #forge:frames/steel')
    .itemInputs('6x #forge:rods/steel')
    .itemOutputs(safeItemId('13x multistorage:vault', 1')).withNbt(["color": "silver", "cvalue": 10329495]) * 2)
    .duration(200)
    .EUt(30)

  event.recipes.susy.recipemap('assembler')('pi0hcopxwaogqa') // remapped from original line 106
    .circuit(13)
    .inputFluids(safeFluidOf('gtceu:concrete', 144))
    .itemInputs(safeItemId('1x minecraft:chest'))
    .itemInputs('1x #forge:frames/steel')
    .itemInputs('4x #forge:plates/steel')
    .itemOutputs(safeItemId('2x multistorage:vault', ')).withNbt(["color": "silver", "cvalue": 10329495]))
    .duration(200)
    .EUt(30)

  event.recipes.susy.recipemap('assembler')('jhj6rzquwwgkwr') // remapped from original line 117
    .circuit(14)
    .inputFluids(safeFluidOf('gtceu:concrete', 144))
    .itemInputs('2x #forge:wires/gt_single_red_alloy')
    .itemInputs('1x #forge:frames/steel')
    .itemInputs('4x #forge:plates/steel')
    .itemOutputs(safeItemId('3x multistorage:vault', ')).withNbt(["color": "silver", "cvalue": 10329495]))
    .duration(200)
    .EUt(30)

  event.recipes.susy.recipemap('assembler')('phf8vsytryuq26') // remapped from original line 128
    .circuit(15)
    .inputFluids(safeFluidOf('gtceu:concrete', 144))
    .itemInputs('1x #forge:pipes/small_fluid_steel')
    .itemInputs('1x #forge:frames/steel')
    .itemInputs('4x #forge:plates/steel')
    .itemOutputs(safeItemId('4x multistorage:vault', ')).withNbt(["color": "silver", "cvalue": 10329495]))
    .duration(200)
    .EUt(30)

  event.recipes.susy.recipemap('assembler')('salafezpcjp9jo') // remapped from original line 139
    .circuit(16)
    .inputFluids(safeFluidOf('gtceu:concrete', 144))
    .itemInputs('2x #forge:cables/gt_single_tin')
    .itemInputs('1x #forge:frames/steel')
    .itemInputs('4x #forge:plates/steel')
    .itemOutputs(safeItemId('5x multistorage:vault', ')).withNbt(["color": "silver", "cvalue": 10329495]))
    .duration(200)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (name in name_removals) {
  //     crafting.remove(name)
  // }

  // for (int i = 1; i < 16; i++) {
  //     recipemap('chemical_bath').recipeBuilder()
  //             .fluidInputs(fluid('dye_' + dyes[i]) * 18)
  //             .inputs(item('multistorage:vault', 1).withNbt(["color": "silver", "cvalue": 10329495]))
  //             .outputs(item('multistorage:vault', 1).withNbt(["color": vaultcolors[i], "cvalue": cvalues[i]]))
  //             .duration(20)
  //             .EUt(7)
  //             .buildAndRegister()
  // }

  // for (int i = 1; i < 16; i++) {
  //     recipemap('chemical_bath').recipeBuilder()
  //             .fluidInputs(fluid('dye_' + dyes[i]) * 18)
  //             .inputs(item('multistorage:vault', 2).withNbt(["color": "silver", "cvalue": 10329495]))
  //             .outputs(item('multistorage:vault', 2).withNbt(["color": vaultcolors[i], "cvalue": cvalues[i]]))
  //             .duration(20)
  //             .EUt(7)
  //             .buildAndRegister()
  // }

  // for (int i = 1; i < 16; i++) {
  //     recipemap('chemical_bath').recipeBuilder()
  //             .fluidInputs(fluid('dye_' + dyes[i]) * 18)
  //             .inputs(item('multistorage:vault', 3).withNbt(["color": "silver", "cvalue": 10329495]))
  //             .outputs(item('multistorage:vault', 3).withNbt(["color": vaultcolors[i], "cvalue": cvalues[i]]))
  //             .duration(20)
  //             .EUt(7)
  //             .buildAndRegister()
  // }

  // for (int i = 1; i < 16; i++) {
  //     recipemap('chemical_bath').recipeBuilder()
  //             .fluidInputs(fluid('dye_' + dyes[i]) * 18)
  //             .inputs(item('multistorage:vault', 4).withNbt(["color": "silver", "cvalue": 10329495]))
  //             .outputs(item('multistorage:vault', 4).withNbt(["color": vaultcolors[i], "cvalue": cvalues[i]]))
  //             .duration(20)
  //             .EUt(7)
  //             .buildAndRegister()
  // }

  // for (int i = 1; i < 16; i++) {
  //     recipemap('chemical_bath').recipeBuilder()
  //             .fluidInputs(fluid('dye_' + dyes[i]) * 18)
  //             .inputs(item('multistorage:vault', 5).withNbt(["color": "silver", "cvalue": 10329495]))
  //             .outputs(item('multistorage:vault', 5).withNbt(["color": vaultcolors[i], "cvalue": cvalues[i]]))
  //             .duration(20)
  //             .EUt(7)
  //             .buildAndRegister()
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // def name_removals = [
  //         'multistorage:vault-bucket-gray',
  //         'multistorage:vault-bucket-cyan',
  //         'multistorage:vault-bucket-pink',
  //         'multistorage:vault-bucket-black',
  //         'multistorage:vault-bucket-light_blue',
  //         'multistorage:vault-bucket-silver',
  //         'multistorage:vault-bucket-purple',
  //         'multistorage:vault-bucket-blue',
  //         'multistorage:vault-bucket-magenta',
  //         'multistorage:vault-bucket-green',
  //         'multistorage:vault-bucket-yellow',
  //         'multistorage:vault-bucket-lime',
  //         'multistorage:vault-bucket-red',
  //         'multistorage:vault-bucket-orange',
  //         'multistorage:vault-bucket-white',
  //         'multistorage:vault-bucket-brown',
  //         'multistorage:enderbag_gray',
  //         'multistorage:enderbag_cyan',
  //         'multistorage:enderbag_pink',
  //         'multistorage:enderbag_black',
  //         'multistorage:enderbag_light_blue',
  //         'multistorage:enderbag_silver',
  //         'multistorage:enderbag_purple',
  //         'multistorage:enderbag_blue',
  //         'multistorage:enderbag_magenta',
  //         'multistorage:enderbag_green',
  //         'multistorage:enderbag_yellow',
  //         'multistorage:enderbag_lime',
  //         'multistorage:enderbag_red',
  //         'multistorage:enderbag_orange',
  //         'multistorage:enderbag_white',
  //         'multistorage:enderbag_brown',
  //         'multistorage:enderchest_gray',
  //         'multistorage:enderchest_cyan',
  //         'multistorage:enderchest_pink',
  //         'multistorage:enderchest_black',
  //         'multistorage:enderchest_light_blue',
  //         'multistorage:enderchest_silver',
  //         'multistorage:enderchest_purple',
  //         'multistorage:enderchest_blue',
  //         'multistorage:enderchest_magenta',
  //         'multistorage:enderchest_green',
  //         'multistorage:enderchest_yellow',
  //         'multistorage:enderchest_lime',
  //         'multistorage:enderchest_red',
  //         'multistorage:enderchest_orange',
  //         'multistorage:enderchest_white',
  //         'multistorage:enderchest_brown',
  //         'multistorage:vault-door',
  //         'multistorage:vault-corer_alt3',
  //         'multistorage:vault-corer_alt2',
  //         'multistorage:vault-corer_alt',
  //         'multistorage:vault-corer',
  //         'multistorage:stone-upgrade',
  //         'multistorage:stone-stacking',
  //         'multistorage:stone-stacking_dense',
  //         'multistorage:stone-chameleon',
  //         'multistorage:stone-chameleon_dense',
  //         'multistorage:stone-junkbox',
  //         'multistorage:stone-junkbox_dense',
  //         'multistorage:stone-queue',
  //         'multistorage:stone-queue_dense',
  //         'multistorage:enderbag'
  // ]
  // def cvalues = [10329495, 16351261, 8439583, 15961002, 11546150, 16383998, 3847130, 16701501, 8606770, 3949738, 4673362, 1481884, 6192150, 13061821, 1908001, 8991416]
  // def vaultcolors = ["silver", "orange", "lime", "pink", "red", "white", "light_blue", "yellow", "brown", "blue", "gray", "cyan", "green", "magenta", "black", "purple"]
  // def dyes = ["light_gray", "orange", "lime", "pink", "red", "white", "light_blue", "yellow", "brown", "blue", "gray", "cyan", "green", "magenta", "black", "purple"]
});