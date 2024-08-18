ServerEvents.recipes(event => {

  event.recipes.susy.mods.gregtech.assembler('vzdphivlhsq7tn') // remapped from original line 178
    .itemInputs('1x #forge:plates/rubber')
    .itemInputs('1x #forge:wires/gt_single_copper')
    .circuit(2)
    .itemOutputs(safeItemId('1x opencomputers:cable'))
    .duration(100)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('mfgqbbe22lbipm') // remapped from original line 187
    .circuit(2)
    .itemInputs('4x #forge:cables/gt_single_copper')
    .itemInputs(safeItemId('1x susy:hull.mv'))
    .itemInputs('1x #forge:circuits/mv')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:adapter'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('bl2lyv9kscyn6b') // remapped from original line 198
    .itemInputs('4x #forge:cables/gt_single_copper')
    .itemInputs(safeItemId('1x susy:hull.mv'))
    .itemInputs(safeItemId('1x susy:robot.arm.mv'))
    .itemInputs(safeItemId('2x susy:conveyor.module.mv'))
    .itemInputs('1x #forge:circuits/mv')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:assembler'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('dplewbp4xsofhb') // remapped from original line 210
    .circuit(1)
    .itemInputs('4x #forge:cables/gt_single_copper')
    .itemInputs(safeItemId('1x susy:hull.mv'))
    .itemInputs('4x #forge:screws/aluminium')
    .itemInputs('2x #forge:rotors/steel')
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs('1x #forge:circuits/mv')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:case1'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('jwcbcxc3x2orgg') // remapped from original line 224
    .itemInputs('4x #forge:cables/gt_single_gold')
    .itemInputs(safeItemId('1x susy:hull.hv'))
    .itemInputs('4x #forge:screws/stainless_steel')
    .itemInputs('2x #forge:rotors/stainless_steel')
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs('1x #forge:circuits/hv')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:case2'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('9xanu6exg7ewvk') // remapped from original line 237
    .itemInputs('4x #forge:cables/gt_single_aluminium')
    .itemInputs(safeItemId('1x susy:hull.ev'))
    .itemInputs('4x #forge:screws/titanium')
    .itemInputs('2x #forge:rotors/titanium')
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs('1x #forge:circuits/ev')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:case3'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('spstyfihmjdnfv') // remapped from original line 250
    .itemInputs(safeItemId('1x susy:hull.mv'))
    .itemInputs('4x #forge:cables/gt_single_copper')
    .circuitMeta([4])
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:charger'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('xhmhvjv61pdwek') // remapped from original line 260
    .itemInputs(safeItemId('1x susy:hull.mv'))
    .itemInputs('1x #forge:circuits/mv')
    .itemInputs(safeItemId('1x susy:sensor.mv'))
    .itemInputs(safeItemId('1x susy:emitter.mv'))
    .itemInputs('1x #forge:lenss/glass')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:diskdrive'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('8fvosmcvcxxdnu') // remapped from original line 272
    .itemInputs(safeItemId('1x susy:hull.hv'))
    .itemInputs('1x #forge:circuits/hv')
    .itemInputs(safeItemId('2x susy:sensor.hv'))
    .circuitMeta([1])
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:geolyzer'))
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('tvy9mttyhusmgg') // remapped from original line 283
    .itemInputs(safeItemId('1x susy:hull.hv'))
    .itemInputs('1x #forge:circuits/hv')
    .itemInputs(safeItemId('2x susy:emitter.hv'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:hologram1'))
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('sxpwnyqt9zxzd3') // remapped from original line 293
    .itemInputs(safeItemId('1x susy:hull.ev'))
    .itemInputs('1x #forge:circuits/ev')
    .itemInputs(safeItemId('2x susy:emitter.ev'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:hologram2'))
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('6ia5p5iw9dw8ba') // remapped from original line 303
    .itemInputs(safeItemId('1x susy:hull.hv'))
    .itemInputs('1x #forge:circuits/hv')
    .itemInputs(safeItemId('1x susy:sensor.hv'))
    .circuitMeta([2])
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:motionsensor'))
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('4li2espt2ofqqi') // remapped from original line 314
    .itemInputs(safeItemId('1x susy:hull.mv'))
    .itemInputs('1x #forge:plates/iron')
    .itemInputs('2x #forge:wires/gt_single_copper')
    .itemInputs('4x #forge:cables/gt_single_copper')
    .itemInputs('1x #forge:circuits/mv')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:powerdistributor'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('cijskevvawk2ak') // remapped from original line 326
    .itemInputs(safeItemId('1x susy:hull.ev'))
    .itemInputs(safeItemId('1x susy:drum.stainless_steel'))
    .itemInputs(safeItemId('2x susy:electric.pump.ev'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:printer'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('3jyzp2bjh7ednn') // remapped from original line 336
    .itemInputs(safeItemId('1x susy:hull.hv'))
    .itemInputs(safeItemId('1x susy:plate.random_access_memory'))
    .itemInputs(safeItemId('1x susy:plate.central_processing_unit'))
    .itemInputs(safeItemId('3x opencomputers:diskdrive'))
    .itemInputs('1x #forge:circuits/hv')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:raid'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('sdz5emfdmj6a30') // remapped from original line 348
    .itemInputs(safeItemId('1x susy:hull.mv'))
    .itemInputs(safeItemId('1x opencomputers:card'))
    .itemInputs('1x #forge:circuits/mv')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:redstone'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('nhrdbiswe8mcyw') // remapped from original line 358
    .itemInputs(safeItemId('1x susy:hull.mv'))
    .itemInputs(safeItemId('1x opencomputers:card'))
    .itemInputs('4x #forge:cables/gt_single_copper')
    .itemInputs('1x #forge:circuits/mv')
    .inputFluids(solder)
    .circuit(1)
    .itemOutputs(safeItemId('1x opencomputers:relay'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('9rmqx0klzzaup5') // remapped from original line 370
    .itemInputs(safeItemId('1x susy:hull.mv'))
    .itemInputs(safeItemId('1x susy:monitor_screen'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:screen1'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('hqtzw6flu40fm5') // remapped from original line 379
    .itemInputs(safeItemId('1x susy:hull.hv'))
    .itemInputs(safeItemId('2x susy:monitor_screen'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:screen2'))
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('ty3zuiubltbtav') // remapped from original line 388
    .itemInputs(safeItemId('1x susy:hull.ev'))
    .itemInputs(safeItemId('4x susy:monitor_screen'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:screen3'))
    .duration(200)
    .EUt(1920)

  event.recipes.susy.mods.gregtech.assembler('x9ejnxzkik53ir') // remapped from original line 397
    .itemInputs(safeItemId('1x opencomputers:relay'))
    .itemInputs(safeItemId('1x opencomputers:powerdistributor'))
    .itemInputs(safeItemId('1x susy:hull.mv'))
    .itemInputs(safeItemId('1x opencomputers:upgrade'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:rack'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('vgy0guzwp6q0uh') // remapped from original line 408
    .itemInputs(safeItemId('1x susy:hull.mv'))
    .itemInputs(safeItemId('1x opencomputers:card'))
    .circuitMeta([2])
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:waypoint'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('h4pfsbvwgohpc4') // remapped from original line 418
    .itemInputs(safeItemId('1x susy:hull.mv'))
    .itemInputs('2x #forge:cables/gt_single_copper')
    .itemInputs('2x #forge:circuits/lv')
    .circuitMeta([2])
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:netsplitter'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('k9em2s8ztshmwe') // remapped from original line 429
    .itemInputs(safeItemId('1x susy:hull.mv'))
    .itemInputs('2x #forge:pipes/normal_item_polyvinyl_chloride')
    .itemInputs('2x #forge:pipes/normal_fluid_aluminium')
    .itemInputs('2x #forge:circuits/lv')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:transposer'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('klec853kkrodcs') // remapped from original line 440
    .itemInputs('1x #forge:rods/iron')
    .itemInputs(safeItemId('1x susy:circuit_board.plastic'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:material'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('s1ot4e0cv9js9d') // remapped from original line 449
    .inputNBT(safeItemId('1x susy:power_unit.mv').item, 1, safeItemId('1x susy:power_unit.mv').metadata, NBTMatcher.ANY, NBTCondition.ANY)
    .itemInputs('4x #forge:cables/gt_single_copper')
    .itemInputs('2x #forge:screws/aluminium')
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs(safeItemId('1x opencomputers:component'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:material'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('ox3yydvrwop73u') // remapped from original line 462
    .inputNBT(safeItemId('1x susy:power_unit.hv').item, 1, safeItemId('1x susy:power_unit.hv').metadata, NBTMatcher.ANY, NBTCondition.ANY)
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs('2x #forge:screws/stainless_steel')
    .itemInputs('4x #forge:cables/gt_single_gold')
    .itemInputs(safeItemId('1x opencomputers:component'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:material'))
    .circuitMeta([1])
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('jtmiylsto45n9g') // remapped from original line 475
    .inputNBT(safeItemId('1x susy:power_unit.mv').item, 1, safeItemId('1x susy:power_unit.mv').metadata, NBTMatcher.ANY, NBTCondition.ANY)
    .itemInputs('2x #forge:cables/gt_single_copper')
    .itemInputs('1x #forge:plates/aluminium')
    .itemInputs(safeItemId('1x opencomputers:component'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('1x opencomputers:material'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('8mcavnopaptd7f') // remapped from original line 487
    .inputNBT(safeItemId('1x susy:power_unit.hv').item, 1, safeItemId('1x susy:power_unit.hv').metadata, NBTMatcher.ANY, NBTCondition.ANY)
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs('4x #forge:cables/gt_single_gold')
    .itemInputs(safeItemId('1x opencomputers:component'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:material'))
    .circuitMeta([2])
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('q7mu8nhtzqsuly') // remapped from original line 499
    .inputNBT(safeItemId('1x susy:power_unit.mv').item, 1, safeItemId('1x susy:power_unit.mv').metadata, NBTMatcher.ANY, NBTCondition.ANY)
    .itemInputs('2x #forge:cables/gt_single_copper')
    .itemInputs('1x #forge:plates/aluminium')
    .itemInputs(safeItemId('1x opencomputers:material'))
    .itemInputs(safeItemId('1x opencomputers:component'))
    .inputFluids(solder)
    .circuitMeta([4])
    .itemOutputs(safeItemId('1x opencomputers:material'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('d4gfjc1edj8xzj') // remapped from original line 512
    .inputNBT(safeItemId('1x susy:power_unit.hv').item, 1, safeItemId('1x susy:power_unit.hv').metadata, NBTMatcher.ANY, NBTCondition.ANY)
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs('4x #forge:cables/gt_single_gold')
    .itemInputs(safeItemId('1x opencomputers:material'))
    .itemInputs(safeItemId('1x opencomputers:component'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:material'))
    .circuitMeta([4])
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('6ebnqjpgnx0dar') // remapped from original line 525
    .itemInputs('4x #forge:plates/plastic')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:material'))
    .circuitMeta([15])
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('wh6hcwocxkuw8a') // remapped from original line 534
    .itemInputs('1x #forge:dyes/black')
    .itemInputs('1x #forge:dyes/cyan')
    .itemInputs('1x #forge:dyes/yellow')
    .itemInputs('1x #forge:dyes/magenta')
    .itemInputs(safeItemId('1x opencomputers:material'))
    .itemOutputs(safeItemId('1x opencomputers:material'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('v2w5flz6zpnrrr') // remapped from original line 545
    .inputNBT(safeItemId('1x susy:power_unit.mv').item, 1, safeItemId('1x susy:power_unit.mv').metadata, NBTMatcher.ANY, NBTCondition.ANY)
    .itemInputs('1x #forge:cables/gt_single_copper')
    .itemInputs('2x #forge:plates/aluminium')
    .itemInputs(safeItemId('1x susy:sensor.mv'))
    .itemInputs('1x #forge:circuits/mv')
    .inputFluids(solder)
    .circuitMeta([3])
    .itemOutputs(safeItemId('1x opencomputers:tool'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('7uhika1zzdhjso') // remapped from original line 558
    .inputNBT(safeItemId('1x susy:power_unit.mv').item, 1, safeItemId('1x susy:power_unit.mv').metadata, NBTMatcher.ANY, NBTCondition.ANY)
    .itemInputs(safeItemId('1x opencomputers:card'))
    .itemInputs('2x #forge:plates/aluminium')
    .itemInputs(safeItemId('1x susy:monitor_screen'))
    .itemInputs('1x #forge:circuits/mv')
    .inputFluids(solder)
    .circuitMeta([3])
    .itemOutputs(safeItemId('1x opencomputers:tool'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('qbixn3marhdmnk') // remapped from original line 571
    .itemInputs('2x #forge:plates/aluminium')
    .itemInputs(safeItemId('1x susy:sensor.lv'))
    .itemInputs('1x #forge:circuits/mv')
    .inputFluids(solder)
    .circuitMeta([4])
    .itemOutputs(safeItemId('1x opencomputers:tool'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('2wp7pkv4fzn3ax') // remapped from original line 582
    .itemInputs(safeItemId('1x susy:plate.central_processing_unit'))
    .itemInputs(safeItemId('1x susy:circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:component'))
    .duration(200)
    .EUt(30)

  event.recipes.susy.mods.gregtech.circuit_assembler('wioehei2i3lfwi') // remapped from original line 592
    .itemInputs(safeItemId('2x susy:plate.central_processing_unit'))
    .itemInputs(safeItemId('1x susy:circuit_board.plastic'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('1x opencomputers:component'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('mkle5hujce9vxk') // remapped from original line 602
    .itemInputs(safeItemId('4x susy:plate.central_processing_unit'))
    .itemInputs(safeItemId('1x susy:circuit_board.advanced'))
    .inputFluids(solder)
    .circuitMeta([3])
    .itemOutputs(safeItemId('1x opencomputers:component'))
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.circuit_assembler('39xpqpkejaqhez') // remapped from original line 612
    .itemInputs(safeItemId('1x susy:plate.integrated_logic_circuit'))
    .itemInputs(safeItemId('1x susy:circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:component'))
    .duration(200)
    .EUt(30)

  event.recipes.susy.mods.gregtech.circuit_assembler('menq8z7cxa1wvx') // remapped from original line 622
    .itemInputs(safeItemId('2x susy:plate.integrated_logic_circuit'))
    .itemInputs(safeItemId('1x susy:circuit_board.plastic'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('1x opencomputers:component'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('zrnomszkfydcd7') // remapped from original line 632
    .itemInputs(safeItemId('4x susy:plate.integrated_logic_circuit'))
    .itemInputs(safeItemId('1x susy:circuit_board.advanced'))
    .inputFluids(solder)
    .circuitMeta([3])
    .itemOutputs(safeItemId('1x opencomputers:component'))
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.circuit_assembler('gpgxifqxbusyu9') // remapped from original line 642
    .itemInputs(safeItemId('1x susy:plate.random_access_memory'))
    .itemInputs(safeItemId('1x susy:circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:component'))
    .duration(200)
    .EUt(30)

  event.recipes.susy.mods.gregtech.circuit_assembler('fbo3zyasztz10p') // remapped from original line 652
    .itemInputs(safeItemId('2x susy:plate.random_access_memory'))
    .itemInputs(safeItemId('1x susy:circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('1x opencomputers:component'))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.circuit_assembler('8bz7vzxaqxwonf') // remapped from original line 662
    .itemInputs(safeItemId('4x susy:plate.random_access_memory'))
    .itemInputs(safeItemId('1x susy:circuit_board.plastic'))
    .inputFluids(solder)
    .circuitMeta([3])
    .itemOutputs(safeItemId('1x opencomputers:component'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('5plc2ygosykozv') // remapped from original line 672
    .itemInputs(safeItemId('6x susy:plate.random_access_memory'))
    .itemInputs(safeItemId('1x susy:circuit_board.plastic'))
    .inputFluids(solder)
    .circuitMeta([4])
    .itemOutputs(safeItemId('1x opencomputers:component'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('0zd20ywpvyklsw') // remapped from original line 682
    .itemInputs(safeItemId('8x susy:plate.random_access_memory'))
    .itemInputs(safeItemId('1x susy:circuit_board.advanced'))
    .inputFluids(solder)
    .circuitMeta([5])
    .itemOutputs(safeItemId('1x opencomputers:component'))
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.circuit_assembler('zpyqst6ubqh0jr') // remapped from original line 692
    .itemInputs(safeItemId('12x susy:plate.random_access_memory'))
    .itemInputs(safeItemId('1x susy:circuit_board.advanced'))
    .inputFluids(solder)
    .circuitMeta([6])
    .itemOutputs(safeItemId('1x opencomputers:component'))
    .duration(400)
    .EUt(480)

  event.recipes.susy.mods.gregtech.circuit_assembler('wiap6pzpgcxjq3') // remapped from original line 702
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs('4x #forge:wires/fine_copper')
    .itemInputs(safeItemId('1x susy:circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([15])
    .itemOutputs(safeItemId('1x opencomputers:component'))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.circuit_assembler('9ptw789ucp5oxj') // remapped from original line 714
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs('8x #forge:wires/fine_gold')
    .itemInputs(safeItemId('1x susy:circuit_board.plastic'))
    .inputFluids(solder)
    .circuitMeta([15])
    .itemOutputs(safeItemId('1x opencomputers:component'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('xr7pvugn8tsfnh') // remapped from original line 726
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs('16x #forge:wires/fine_aluminium')
    .itemInputs(safeItemId('1x susy:circuit_board.advanced'))
    .inputFluids(solder)
    .circuitMeta([15])
    .itemOutputs(safeItemId('1x opencomputers:component'))
    .duration(400)
    .EUt(480)

  event.recipes.susy.mods.gregtech.circuit_assembler('s73iw6ggjsccfs') // remapped from original line 738
    .itemInputs(safeItemId('1x opencomputers:card'))
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs('16x #forge:wires/fine_copper')
    .itemInputs(safeItemId('1x susy:circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:component'))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.circuit_assembler('qqv0l0sbzzf9j6') // remapped from original line 751
    .itemInputs(safeItemId('1x opencomputers:card'))
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs('4x #forge:wires/fine_gold')
    .itemInputs(safeItemId('1x susy:circuit_board.advanced'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('1x opencomputers:component'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('1duqly4ebqv5ae') // remapped from original line 764
    .itemInputs(safeItemId('1x susy:circuit_board.plastic'))
    .itemInputs('1x #forge:circuits/mv')
    .itemInputs(safeItemId('1x susy:sensor.mv'))
    .itemInputs(safeItemId('1x susy:emitter.mv'))
    .itemInputs('1x #forge:lenss/glass')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:diskdrive'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('r1jjux21hp8rxm') // remapped from original line 776
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs('4x #forge:wires/fine_copper')
    .itemInputs(safeItemId('1x susy:circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:card'))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.circuit_assembler('ffgnaavyawe7tg') // remapped from original line 788
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs('4x #forge:wires/fine_gold')
    .itemInputs(safeItemId('1x susy:circuit_board.plastic'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('1x opencomputers:card'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('pchexaj0nuqtyc') // remapped from original line 800
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs('4x #forge:wires/fine_aluminium')
    .itemInputs(safeItemId('1x susy:circuit_board.advanced'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('1x opencomputers:card'))
    .duration(400)
    .EUt(480)

  event.recipes.susy.mods.gregtech.circuit_assembler('f4aqtdhk8ecivd') // remapped from original line 812
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs('4x #forge:wires/fine_red_alloy')
    .itemInputs(safeItemId('1x susy:circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:card'))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.circuit_assembler('dcjczbv3auibzw') // remapped from original line 823
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs('16x #forge:wires/fine_red_alloy')
    .itemInputs(safeItemId('1x susy:circuit_board.plastic'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('1x opencomputers:card'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('domv0ya2volywq') // remapped from original line 834
    .itemInputs('1x #forge:wires/gt_single_copper')
    .itemInputs('4x #forge:wires/fine_copper')
    .itemInputs(safeItemId('1x susy:sensor.mv'))
    .itemInputs(safeItemId('1x susy:emitter.mv'))
    .itemInputs(safeItemId('1x susy:circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:card'))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.circuit_assembler('cizedzuslzfjhj') // remapped from original line 847
    .itemInputs('8x #forge:wires/fine_gold')
    .itemInputs(safeItemId('1x susy:sensor.hv'))
    .itemInputs(safeItemId('1x susy:emitter.hv'))
    .itemInputs(safeItemId('1x susy:circuit_board.plastic'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('1x opencomputers:card'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('ye1sjxni4xn6cc') // remapped from original line 859
    .itemInputs('8x #forge:wires/fine_aluminium')
    .itemInputs(safeItemId('1x susy:sensor.ev'))
    .itemInputs(safeItemId('1x susy:emitter.ev'))
    .itemInputs(safeItemId('1x susy:circuit_board.advanced'))
    .inputFluids(solder)
    .circuitMeta([3])
    .itemOutputs(safeItemId('1x opencomputers:card'))
    .duration(400)
    .EUt(480)

  event.recipes.susy.mods.gregtech.circuit_assembler('x9jg4yxjgqrq1g') // remapped from original line 871
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs('4x #forge:wires/fine_copper')
    .itemInputs(safeItemId('1x susy:circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([10])
    .itemOutputs(safeItemId('1x opencomputers:card'))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.circuit_assembler('phmgdxebs1wllc') // remapped from original line 882
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs('4x #forge:wires/fine_gold')
    .itemInputs(safeItemId('1x susy:circuit_board.plastic'))
    .inputFluids(solder)
    .circuitMeta([11])
    .itemOutputs(safeItemId('1x opencomputers:card'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('4djlitdhxf2wqp') // remapped from original line 893
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs('4x #forge:wires/fine_aluminium')
    .itemInputs(safeItemId('1x susy:circuit_board.advanced'))
    .inputFluids(solder)
    .circuitMeta([12])
    .itemOutputs(safeItemId('1x opencomputers:card'))
    .duration(400)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('o6a0rcgnspwaem') // remapped from original line 904
    .inputNBT(safeItemId('1x susy:power_unit.mv').item, 1, safeItemId('1x susy:power_unit.mv').metadata, NBTMatcher.ANY, NBTCondition.ANY)
    .itemInputs(safeItemId('1x susy:circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('zracawhinro822') // remapped from original line 914
    .inputNBT(safeItemId('1x susy:power_unit.hv').item, 1, safeItemId('1x susy:power_unit.hv').metadata, NBTMatcher.ANY, NBTCondition.ANY)
    .itemInputs(safeItemId('1x susy:circuit_board.plastic'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('aoqprsigk86hnl') // remapped from original line 924
    .itemInputs(safeItemId('1x susy:power_unit.ev'))
    .itemInputs(safeItemId('1x susy:circuit_board.advanced'))
    .inputFluids(solder)
    .circuitMeta([3])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('r38afucwaeqjcc') // remapped from original line 934
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs(safeItemId('1x opencomputers:material'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('wbsosfnymfrupb') // remapped from original line 944
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs(safeItemId('1x opencomputers:material'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('q9u6rcncxct5wn') // remapped from original line 954
    .itemInputs('4x #forge:plates/titanium')
    .itemInputs(safeItemId('1x opencomputers:material'))
    .inputFluids(solder)
    .circuitMeta([3])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('0khpzmz4z86eyx') // remapped from original line 964
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs('4x #forge:screws/aluminium')
    .inputFluids(solder)
    .circuitMeta([11])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('kg9lorxrw9rgmk') // remapped from original line 974
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs('4x #forge:screws/stainless_steel')
    .inputFluids(solder)
    .circuitMeta([12])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('ewc0j5lqeavckm') // remapped from original line 984
    .itemInputs('4x #forge:plates/titanium')
    .itemInputs('4x #forge:screws/titanium')
    .inputFluids(solder)
    .circuitMeta([13])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('4pegk8y1amkhlk') // remapped from original line 994
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs(safeItemId('1x minecraft:crafting_table'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('cc1ryl0os8zbte') // remapped from original line 1004
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs(safeItemId('1x oc:hdd1'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('gjhnizljixjhd9') // remapped from original line 1014
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs(safeItemId('1x oc:hdd2'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('syccbhqyqqcgkx') // remapped from original line 1024
    .itemInputs('4x #forge:plates/titanium')
    .itemInputs(safeItemId('1x oc:hdd3'))
    .inputFluids(solder)
    .circuitMeta([3])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('vlayk6xkscwejk') // remapped from original line 1034
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs(safeItemId('1x susy:crate.steel'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('mth502egdqouda') // remapped from original line 1044
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs(safeItemId('1x susy:robot.arm.hv'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('bftwr194xlo9qx') // remapped from original line 1054
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs(safeItemId('1x minecraft:compass'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('4nlrcnn4aezryc') // remapped from original line 1064
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs(safeItemId('1x susy:electric.piston.mv'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('opjziidxvwq1bz') // remapped from original line 1074
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs('2x #forge:dyes/black')
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('l98jnsufgvfqgf') // remapped from original line 1084
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs(safeItemId('1x susy:drum.aluminium'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('p1nrl0ickf65ee') // remapped from original line 1094
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs(safeItemId('1x susy:electric.pump.hv'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('tcnkhcstyfr5kt') // remapped from original line 1104
    .itemInputs('4x #forge:plates/titanium')
    .itemInputs('1x #forge:rods/neodymium_alloy_magnetic')
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('rdwkldhpvtmtuk') // remapped from original line 1114
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs(safeItemId('1x minecraft:lead'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('mj4zpv1j6jnvd8') // remapped from original line 1124
    .itemInputs('4x #forge:plates/titanium')
    .itemInputs(safeItemId('1x susy:sensor.ev'))
    .itemInputs(safeItemId('1x susy:emitter.ev'))
    .inputFluids(solder)
    .circuitMeta([10])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('snqhhl1h3wdbmu') // remapped from original line 1135
    .itemInputs('4x #forge:plates/steel')
    .itemInputs('4x #forge:wires/fine_red_alloy')
    .itemInputs(safeItemId('1x susy:sensor.lv'))
    .itemInputs(safeItemId('1x susy:emitter.lv'))
    .inputFluids(solder)
    .circuitMeta([10])
    .itemOutputs(safeItemId('1x opencomputers:card'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('gq9qojjkejthda') // remapped from original line 1147
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs('4x #forge:wires/fine_red_alloy')
    .itemInputs(safeItemId('1x susy:sensor.mv'))
    .itemInputs(safeItemId('1x susy:emitter.mv'))
    .inputFluids(solder)
    .circuitMeta([10])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('7jutdzhjh8hai3') // remapped from original line 1159
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs(safeItemId('1x susy:electric.piston.lv'))
    .inputFluids(safeFluidOf('gtceu:glue', 36))
    .circuitMeta([10])
    .itemOutputs(safeItemId('1x opencomputers:upgrade'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('euibieoppmtq1g') // remapped from original line 1169
    .itemInputs(safeItemId('16x susy:component.transistor'))
    .itemInputs(safeItemId('1x susy:circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:storage'))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('emslbs7ze9zrk1') // remapped from original line 1179
    .itemInputs(safeItemId('1x opencomputers:material'))
    .itemInputs('1x #forge:plates/plastic')
    .itemInputs('1x #forge:dyes/black')
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:storage'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('zyt9snaylmi8vi') // remapped from original line 1190
    .itemInputs(safeItemId('1x opencomputers:material'))
    .itemInputs('4x #forge:plates/aluminium')
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:storage'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('7lc2egbcw6ojdl') // remapped from original line 1200
    .itemInputs(safeItemId('2x opencomputers:material'))
    .itemInputs('4x #forge:plates/stainless_steel')
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:storage'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('id5bhyuyhixegt') // remapped from original line 1210
    .itemInputs(safeItemId('4x opencomputers:material'))
    .itemInputs('4x #forge:plates/titanium')
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:storage'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('fqllywaylavjxs') // remapped from original line 1220
    .itemInputs('1x #forge:circuits/hv')
    .itemInputs(safeItemId('1x oc:wlanCard2'))
    .itemInputs(safeItemId('1x susy:circuit_board.plastic'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:component'))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.forming_press('dmxrmk5ciknjqf') // remapped from original line 1231
    .itemInputs('4x #forge:foils/polycaprolactam')
    .itemOutputs(safeItemId('1x opencomputers:material'))
    .duration(160)
    .EUt(120)

  event.recipes.susy.	mods.gregtech.assembler('snkifhfces8sqk') // remapped from original line 1245
    .itemInputs('4x #forge:lenss/glass')
    .itemInputs('1x #forge:dusts/small_cobalt')
    .itemOutputs(safeItemId('1x opencomputers:material'))
    .duration(400)
    .EUt(120)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (item in name_removals) {
  //     crafting.remove(item);
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import gregtech.api.recipes.ingredients.nbtmatch.*
  // def solder = fluid('soldering_alloy') * 72
  // def name_removals = [
  // "opencomputers:adapter0",
  // "opencomputers:assembler1",
  // "opencomputers:cable2",
  // "opencomputers:capacitor3",
  // "opencomputers:case14",
  // "opencomputers:case35",
  // "opencomputers:case26",
  // "opencomputers:chameliumblock7",
  // "opencomputers:material157",
  // "opencomputers:chameliumblock158",
  // "opencomputers:charger8",
  // "opencomputers:disassembler9",
  // "opencomputers:diskdrive10",
  // "opencomputers:geolyzer11",
  // "opencomputers:hologram112",
  // "opencomputers:hologram213",
  // "opencomputers:motionsensor15",
  // "opencomputers:powerconverter16",
  // "opencomputers:powerdistributor17",
  // "opencomputers:material41",
  // "opencomputers:printer18",
  // "opencomputers:raid19",
  // "opencomputers:redstone20",
  // "opencomputers:relay21",
  // "opencomputers:screen122",
  // "opencomputers:screen323",
  // "opencomputers:screen224",
  // "opencomputers:rack25",
  // "opencomputers:waypoint26",
  // "opencomputers:endstone27",
  // "opencomputers:netsplitter28",
  // "opencomputers:transposer29",
  // "opencomputers:carpetedcapacitor30",
  // "opencomputers:material31",
  // "opencomputers:material32", // GROG
  // "opencomputers:material33",
  // "opencomputers:material34",
  // "opencomputers:material35",
  // "opencomputers:material36", //microchips
  // "opencomputers:material37",
  // "opencomputers:material38",
  // "opencomputers:material39", //ALU
  // "opencomputers:material40",
  // "opencomputers:material42", //interweb !! WARNING !! REDDIT REFERENCE !! ACIDIC !!
  // "opencomputers:material46", //tablet case 1
  // "opencomputers:material47", //tablet case 2
  // "opencomputers:material48", //microcontroller cases
  // "opencomputers:material49", 
  // "opencomputers:material50", //drone cases
  // "opencomputers:material51", 
  // "opencomputers:material52", //ink cartridges	
  // "opencomputers:material53", 
  // "opencomputers:material54", //chamelium
  // "opencomputers:material132", //diamond chip
  // "opencomputers:tool55", //analyzer
  // "opencomputers:tool56", //remote control
  // "opencomputers:tool57", //texture picker
  // "opencomputers:tool58", //manual
  // "opencomputers:tool61", //nanomachines
  // "opencomputers:wrench59", //scrench
  // "opencomputers:hoverboots60",
  // "opencomputers:component62", //CPUs
  // "opencomputers:component63",
  // "opencomputers:component64",
  // "opencomputers:component65", //Component Buses
  // "opencomputers:component66",
  // "opencomputers:component67",
  // "opencomputers:component68", //RAMs
  // "opencomputers:component69",
  // "opencomputers:component70",
  // "opencomputers:component71",
  // "opencomputers:component72",
  // "opencomputers:component73",
  // "opencomputers:component74", //Servers
  // "opencomputers:component75",
  // "opencomputers:component76",
  // "opencomputers:component77", //APUs
  // "opencomputers:component78",
  // "opencomputers:component79",
  // "opencomputers:component80",
  // "opencomputers:card81", //GPUs
  // "opencomputers:card82",
  // "opencomputers:card83",
  // "opencomputers:card84", //Redstone cards
  // "opencomputers:card85",
  // "opencomputers:card86", //Network cards
  // "opencomputers:card87",
  // "opencomputers:card88",
  // "opencomputers:card89", //Linked cards (interdimensional transfer is too OP i guess)
  // "opencomputers:card90", //Data cards
  // "opencomputers:card91",
  // "opencomputers:card92",
  // "opencomputers:upgrade93", //TODO: Angel ring upgrade(might need flight?)
  // "opencomputers:upgrade94", //Battery upgrades
  // "opencomputers:upgrade95",
  // "opencomputers:upgrade96",
  // "opencomputers:upgrade97", //TODO: Chunkloader upgrade
  // "opencomputers:upgrade98", //Card containers
  // "opencomputers:upgrade99",
  // "opencomputers:upgrade100",
  // "opencomputers:upgrade101", //Upgrade containers
  // "opencomputers:upgrade102",
  // "opencomputers:upgrade103",
  // "opencomputers:upgrade104", //Crafting table upgrade
  // "opencomputers:upgrade105", //Storage upgrades
  // "opencomputers:upgrade106",
  // "opencomputers:upgrade107",
  // "opencomputers:upgrade108", //XP upgrades
  // "opencomputers:upgrade109", //Generator upgrade (might be unrealistic) TODO
  // "opencomputers:upgrade110", //Inventory upgrade
  // "opencomputers:upgrade111", //Inventory control upgrade
  // "opencomputers:upgrade112", //Navigation upgrade
  // "opencomputers:upgrade113", //Piston upgrade
  // "opencomputers:upgrade114", //Sign upgrade
  // "opencomputers:upgrade115", //Solar generator upgrade (might be unrealistic) TODO
  // "opencomputers:upgrade116", //Tank upgrade
  // "opencomputers:upgrade117", //Tank control upgrade
  // "opencomputers:upgrade118", //Magnet upgrade
  // "opencomputers:upgrade119", //Lead upgrade
  // "opencomputers:upgrade120", //Hover upgrade
  // "opencomputers:upgrade121", //Hover upgrade
  // "opencomputers:upgrade122", //Trading upgrade
  // "opencomputers:upgrade123", //MFU
  // "opencomputers:upgrade124", //Redstone Wireless Card
  // "opencomputers:upgrade125", //Sticky Piston Upgrade
  // "opencomputers:storage126", //EEPROM
  // "opencomputers:storage127", //Floppy
  // "opencomputers:storage128", //HDDs
  // "opencomputers:storage129",
  // "opencomputers:storage130",
  // "computronics:iron_note_block0",
  // "computronics:audio_cable1",
  // "computronics:speaker5",
  // "computronics:tape_reader7",
  // "computronics:camera3",
  // "computronics:chat_box4",
  // "computronics:cipher8",
  // "computronics:cipher_advanced10",
  // "computronics:colorful_lamp2",
  // "computronics:parts21", //tape track
  // "computronics:tape12", //tapes
  // "computronics:tape13",
  // "computronics:tape14",
  // "computronics:tape15",
  // "computronics:tape16",
  // "computronics:tape17",
  // "computronics:tape18",
  // "computronics:tape19",
  // "computronics:tape20",
  // "computronics:portable_tape_drive11",
  // "computronics:oc_parts22",
  // "computronics:oc_parts23",
  // "computronics:oc_parts24",
  // "computronics:oc_parts25",
  // "computronics:oc_parts26",
  // "computronics:oc_parts27",
  // "computronics:oc_parts28",
  // "computronics:oc_parts29",
  // "computronics:oc_parts30",
  // "computronics:oc_parts31",
  // "computronics:oc_parts32",
  // "computronics:oc_parts33",
  // "computronics:oc_parts34",
  // "computronics:oc_parts35",
  // "computronics:speech_box6"
  // ]
  // 		
  // 		
  // 		
  // 	
  // 		
  // 		
  // 		
  // 		
  // 		
  // crafting.addShaped('opencomputers:scrench', item('opencomputers:wrench'), [
  //     [ore('ingotAluminium'), ore('craftingToolHardHammer'), ore('ingotAluminium')],
  //     [ore('ingotSteel'), ore('ingotSteel'), ore('ingotSteel')],
  //     [null, ore('ingotSteel'), null]
  // ])
});