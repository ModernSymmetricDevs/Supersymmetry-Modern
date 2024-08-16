ServerEvents.recipes(event => {

  event.recipes.susy.mods.gregtech.assembler('none8qgom89yq1') // remapped from original line 34
    .itemInputs(metaitem('hull.mv'))
    .itemInputs(safeItemId('1x oc:materialNumPad'))
    .itemInputs(safeItemId('1x oc:cpu1')'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opensecurity:keypad'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('dp1rqgcxmtgmv9') // remapped from original line 44
    .itemInputs(metaitem('hull.mv'))
    .itemInputs(safeItemId('1x oc:cpu1')'))
    .itemInputs(safeItemId('1x oc:ram1')'))
    .itemInputs(metaitem('emitter.mv'))
    .circuit(3)
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opensecurity:rfid_reader'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('vjp3c1uiykabdr') // remapped from original line 56
    .itemInputs(metaitem('hull.mv'))
    .itemInputs(safeItemId('1x oc:cpu1')'))
    .itemInputs(safeItemId('1x oc:ram1')'))
    .itemInputs(safeItemId('1x opensecurity:rfid_card'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opensecurity:card_writer'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('1nyuja9ll6wpvp') // remapped from original line 67
    .itemInputs(metaitem('hull.mv'))
    .itemInputs(safeItemId('1x oc:cpu1')'))
    .itemInputs('8x #forge:wires/fine_red_alloy')
    .itemInputs(safeItemId('1x minecraft:noteblock'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opensecurity:alarm'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('nw4jpr2unrzev2') // remapped from original line 78
    .itemInputs(metaitem('hull.mv'))
    .itemInputs(safeItemId('1x oc:cpu1')'))
    .itemInputs(safeItemId('1x oc:ram1')'))
    .itemInputs(safeItemId('1x oc:dataCard1')'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opensecurity:data_block'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('jyzjunfgsphzix') // remapped from original line 89
    .itemInputs(metaitem('hull.mv'))
    .itemInputs(safeItemId('1x oc:cpu1')'))
    .itemInputs(safeItemId('1x oc:dataCard1')'))
    .itemInputs(metaitem('sensor.lv'))
    .itemInputs(metaitem('emitter.lv'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opensecurity:entity_detector'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('ljhhekpwsla2pj') // remapped from original line 101
    .itemInputs(metaitem('hull.mv'))
    .itemInputs(safeItemId('1x oc:cpu1')'))
    .itemInputs(metaitem('emitter.mv'))
    .circuit(1)
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opensecurity:mag_reader'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('hmja2i9tsjlgzg') // remapped from original line 112
    .itemInputs(metaitem('hull.mv'))
    .itemInputs(safeItemId('1x oc:cpu1')'))
    .itemInputs(metaitem('emitter.mv'))
    .itemInputs('1x #forge:blocks/concrete')
    .circuit(2)
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opensecurity:mag_reader_camo'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('s1skeayovvp8ot') // remapped from original line 124
    .itemInputs(metaitem('hull.hv'))
    .itemInputs(safeItemId('2x oc:cpu2')'))
    .itemInputs(safeItemId('2x oc:ram2')'))
    .itemInputs(metaitem('sensor.hv'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opensecurity:biometric_reader'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('rmkts5kea9e4i0') // remapped from original line 135
    .itemInputs(safeItemId('1x oc:cpu1')'))
    .itemInputs('5x #forge:plates/steel')
    .itemInputs('1x #forge:blocks/concrete')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opensecurity:secure_door'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('3fddis1d8vr1ki') // remapped from original line 145
    .itemInputs(safeItemId('2x oc:cpu2')'))
    .itemInputs(safeItemId('2x oc:ram2')'))
    .itemInputs('5x #forge:plates/steel')
    .itemInputs('1x #forge:blocks/concrete')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opensecurity:private_secure_door'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('ey5wlc2tea7eqb') // remapped from original line 156
    .itemInputs(safeItemId('1x oc:cpu1')'))
    .itemInputs('8x #forge:plates/steel')
    .circuitMeta([1])
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opensecurity:rolldoor'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('h9dods1skrnhnu') // remapped from original line 166
    .itemInputs(metaitem('hull.mv'))
    .itemInputs(safeItemId('1x oc:cpu1')'))
    .itemInputs(safeItemId('1x oc:ram1')'))
    .circuitMeta([10])
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opensecurity:door_controller'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('9ongvwwratyo2y') // remapped from original line 177
    .itemInputs(metaitem('hull.mv'))
    .itemInputs(safeItemId('1x oc:cpu1')'))
    .itemInputs(safeItemId('1x oc:ram1')'))
    .circuitMeta([20])
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opensecurity:rolldoor_controller')) //same recipe, diff circuit
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('cwpowncqgid7h4') // remapped from original line 188
    .itemInputs('1x #forge:plates/plastic')
    .itemInputs(metaitem('plate.integrated_logic_circuit'))
    .itemInputs('1x #forge:foils/copper')
    .circuit(2)
    .itemOutputs(safeItemId('1x opensecurity:rfid_card')) 
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('xdcf6yxnac8qzk') // remapped from original line 198
    .itemInputs('1x #forge:plates/plastic')
    .itemInputs(metaitem('plate.integrated_logic_circuit'))
    .itemInputs('1x #forge:dusts/iron_magnetic')
    .circuit(3)
    .itemOutputs(safeItemId('1x opensecurity:mag_card')) 
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('fyu3lyqmgbmsis') // remapped from original line 208
    .itemInputs(safeItemId('6x opencomputers:component', ')))
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs('4x #forge:wires/fine_copper')
    .itemInputs(metaitem('plate.integrated_logic_circuit'))
    .itemInputs(metaitem('circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([13])
    .itemOutputs(safeItemId('1x opensecurity:rfid_reader_card'))
    .duration(400)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (item in name_removals) {
  //     crafting.remove(item);
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // def solder = fluid('soldering_alloy') * 72
  // def name_removals = [
  // "opensecurity:blocks/keypad",
  // "opensecurity:blocks/entity_detector",
  // "opensecurity:blocks/rfid_reader",
  // "opensecurity:blocks/security_terminal",
  // "opensecurity:blocks/card_writer",
  // "opensecurity:blocks/alarm",
  // "opensecurity:blocks/data_block",
  // "opensecurity:blocks/card_writer",
  // "opensecurity:blocks/mag_reader",
  // "opensecurity:blocks/biometric_reader",
  // "opensecurity:blocks/energy_turret",
  // "opensecurity:blocks/nanofog_terminal",
  // "opensecurity:blocks/secure_door",
  // "opensecurity:blocks/private_secure_door",
  // "opensecurity:blocks/rolldoor",
  // "opensecurity:blocks/door_controller",
  // "opensecurity:items/energy_upgrade",
  // "opensecurity:items/damage_upgrade",
  // "opensecurity:items/movement_upgrade",
  // "opensecurity:items/movement_upgrade",
  // "opensecurity:items/rfid_card",
  // "opensecurity:items/mag_card",
  // "opensecurity:items/rfid_reader_card",
  // "opensecurity:items/nanodna"
  // ]
  // 		
});