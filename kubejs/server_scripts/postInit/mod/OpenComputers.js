ServerEvents.recipes(event => {

  event.recipes.susy.mods.gregtech.assembler('18aygb4czvxos2') // remapped from original line 178
    .itemInputs('1x #forge:plates/rubber')
    .itemInputs('1x #forge:wires/gt_single_copper')
    .circuit(2)
    .itemOutputs(safeItemId('1x opencomputers:cable'))
    .duration(100)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('3oeo86xt0zzxgv') // remapped from original line 187
    .circuit(2)
    .itemInputs('4x #forge:cables/gt_single_copper')
    .itemInputs(metaitem('hull.mv'))
    .itemInputs('1x #forge:circuits/mv')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:adapter'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('qo7qurgeisabbl') // remapped from original line 198
    .itemInputs('4x #forge:cables/gt_single_copper')
    .itemInputs(metaitem('hull.mv'))
    .itemInputs(metaitem('robot.arm.mv'))
    .itemInputs(metaitem('conveyor.module.mv') * 2)
    .itemInputs('1x #forge:circuits/mv')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:assembler'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('vot2bemhgqlf3z') // remapped from original line 210
    .circuit(1)
    .itemInputs('4x #forge:cables/gt_single_copper')
    .itemInputs(metaitem('hull.mv'))
    .itemInputs('4x #forge:screws/aluminium')
    .itemInputs('2x #forge:rotors/steel')
    .itemInputs(safeItemId('3x opencomputers:component', ')))
    .itemInputs('1x #forge:circuits/mv')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:case1')'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('ahyn8xeus7trce') // remapped from original line 224
    .itemInputs('4x #forge:cables/gt_single_gold')
    .itemInputs(metaitem('hull.hv'))
    .itemInputs('4x #forge:screws/stainless_steel')
    .itemInputs('2x #forge:rotors/stainless_steel')
    .itemInputs(safeItemId('4x opencomputers:component', ')))
    .itemInputs('1x #forge:circuits/hv')
    .inputFluids(solder)
    .itemOutputs(safeItemId('2x opencomputers:case2')'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('vyz32asv2v7wvx') // remapped from original line 237
    .itemInputs('4x #forge:cables/gt_single_aluminium')
    .itemInputs(metaitem('hull.ev'))
    .itemInputs('4x #forge:screws/titanium')
    .itemInputs('2x #forge:rotors/titanium')
    .itemInputs(safeItemId('5x opencomputers:component', ')))
    .itemInputs('1x #forge:circuits/ev')
    .inputFluids(solder)
    .itemOutputs(safeItemId('3x opencomputers:case3')'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('5rk9e1kmpkux6j') // remapped from original line 250
    .itemInputs(metaitem('hull.mv'))
    .itemInputs('4x #forge:cables/gt_single_copper')
    .circuitMeta([4])
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:charger'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('fcoo6111g1gzjd') // remapped from original line 260
    .itemInputs(metaitem('hull.mv'))
    .itemInputs('1x #forge:circuits/mv')
    .itemInputs(metaitem('sensor.mv'))
    .itemInputs(metaitem('emitter.mv'))
    .itemInputs('1x #forge:lenss/glass')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:diskdrive'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('qderwgchfbqswr') // remapped from original line 272
    .itemInputs(metaitem('hull.hv'))
    .itemInputs('1x #forge:circuits/hv')
    .itemInputs(metaitem('sensor.hv') * 2)
    .circuitMeta([1])
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:geolyzer'))
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('5c6b6p0h4xnrkh') // remapped from original line 283
    .itemInputs(metaitem('hull.hv'))
    .itemInputs('1x #forge:circuits/hv')
    .itemInputs(metaitem('emitter.hv') * 2)
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:hologram1')'))
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('ojdehxgckglppp') // remapped from original line 293
    .itemInputs(metaitem('hull.ev'))
    .itemInputs('1x #forge:circuits/ev')
    .itemInputs(metaitem('emitter.ev') * 2)
    .inputFluids(solder)
    .itemOutputs(safeItemId('2x opencomputers:hologram2')'))
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('plmxzomklxe1al') // remapped from original line 303
    .itemInputs(metaitem('hull.hv'))
    .itemInputs('1x #forge:circuits/hv')
    .itemInputs(metaitem('sensor.hv'))
    .circuitMeta([2])
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:motionsensor'))
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('rzdqsztx3zu44v') // remapped from original line 314
    .itemInputs(metaitem('hull.mv'))
    .itemInputs('1x #forge:plates/iron')
    .itemInputs('2x #forge:wires/gt_single_copper')
    .itemInputs('4x #forge:cables/gt_single_copper')
    .itemInputs('1x #forge:circuits/mv')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:powerdistributor'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('7eiob4rh4leveo') // remapped from original line 326
    .itemInputs(metaitem('hull.ev'))
    .itemInputs(metaitem('drum.stainless_steel'))
    .itemInputs(metaitem('electric.pump.ev') * 2)
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:printer'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('1v3aq2bkfulyae') // remapped from original line 336
    .itemInputs(metaitem('hull.hv'))
    .itemInputs(metaitem('plate.random_access_memory'))
    .itemInputs(metaitem('plate.central_processing_unit'))
    .itemInputs(safeItemId('3x opencomputers:diskdrive'))
    .itemInputs('1x #forge:circuits/hv')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:raid'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('phagzoleh3hgtd') // remapped from original line 348
    .itemInputs(metaitem('hull.mv'))
    .itemInputs(safeItemId('4x opencomputers:card', ')))
    .itemInputs('1x #forge:circuits/mv')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:redstone'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('gjduv553k6ecl5') // remapped from original line 358
    .itemInputs(metaitem('hull.mv'))
    .itemInputs(safeItemId('6x opencomputers:card', ')))
    .itemInputs('4x #forge:cables/gt_single_copper')
    .itemInputs('1x #forge:circuits/mv')
    .inputFluids(solder)
    .circuit(1)
    .itemOutputs(safeItemId('1x opencomputers:relay'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('td5unysj6fgdmu') // remapped from original line 370
    .itemInputs(metaitem('hull.mv'))
    .itemInputs(metaitem('monitor_screen'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:screen1')'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('lyjno6ddqn22ap') // remapped from original line 379
    .itemInputs(metaitem('hull.hv'))
    .itemInputs(metaitem('monitor_screen') * 2)
    .inputFluids(solder)
    .itemOutputs(safeItemId('2x opencomputers:screen2')'))
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('h0zokik2lrupxn') // remapped from original line 388
    .itemInputs(metaitem('hull.ev'))
    .itemInputs(metaitem('monitor_screen') * 4)
    .inputFluids(solder)
    .itemOutputs(safeItemId('3x opencomputers:screen3')'))
    .duration(200)
    .EUt(1920)

  event.recipes.susy.mods.gregtech.assembler('g4tpq1uysmsum4') // remapped from original line 397
    .itemInputs(safeItemId('1x opencomputers:relay'))
    .itemInputs(safeItemId('1x opencomputers:powerdistributor'))
    .itemInputs(metaitem('hull.mv'))
    .itemInputs(safeItemId('31x opencomputers:upgrade', 3')1))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:rack'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('ms57kxb9zbavei') // remapped from original line 408
    .itemInputs(metaitem('hull.mv'))
    .itemInputs(safeItemId('6x opencomputers:card', ')))
    .circuitMeta([2])
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:waypoint'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('nxw09boqxpr7pm') // remapped from original line 418
    .itemInputs(metaitem('hull.mv'))
    .itemInputs('2x #forge:cables/gt_single_copper')
    .itemInputs('2x #forge:circuits/lv')
    .circuitMeta([2])
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:netsplitter'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('khw4yfuhkbuvco') // remapped from original line 429
    .itemInputs(metaitem('hull.mv'))
    .itemInputs('2x #forge:pipes/normal_item_polyvinyl_chloride')
    .itemInputs('2x #forge:pipes/normal_fluid_aluminium')
    .itemInputs('2x #forge:circuits/lv')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:transposer'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('toawtlby8rt7ja') // remapped from original line 440
    .itemInputs('1x #forge:rods/iron')
    .itemInputs(metaitem('circuit_board.plastic'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('5x opencomputers:material', ')))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('hv3lkl7m2jusib') // remapped from original line 449
    .inputNBT(metaitem('power_unit.mv').item, 1, metaitem('power_unit.mv').metadata, NBTMatcher.ANY, NBTCondition.ANY)
    .itemInputs('4x #forge:cables/gt_single_copper')
    .itemInputs('2x #forge:screws/aluminium')
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs(safeItemId('3x opencomputers:component', ')))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('17x opencomputers:material', 1')7))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('2slpwkiek2p13y') // remapped from original line 462
    .inputNBT(metaitem('power_unit.hv').item, 1, metaitem('power_unit.hv').metadata, NBTMatcher.ANY, NBTCondition.ANY)
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs('2x #forge:screws/stainless_steel')
    .itemInputs('4x #forge:cables/gt_single_gold')
    .itemInputs(safeItemId('4x opencomputers:component', ')))
    .inputFluids(solder)
    .itemOutputs(safeItemId('18x opencomputers:material', 1')8))
    .circuitMeta([1])
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('bqzhwrfwii3aga') // remapped from original line 475
    .inputNBT(metaitem('power_unit.mv').item, 1, metaitem('power_unit.mv').metadata, NBTMatcher.ANY, NBTCondition.ANY)
    .itemInputs('2x #forge:cables/gt_single_copper')
    .itemInputs('1x #forge:plates/aluminium')
    .itemInputs(safeItemId('3x opencomputers:component', ')))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('20x opencomputers:material', 2')0))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('va0w6wkaigqyng') // remapped from original line 487
    .inputNBT(metaitem('power_unit.hv').item, 1, metaitem('power_unit.hv').metadata, NBTMatcher.ANY, NBTCondition.ANY)
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs('4x #forge:cables/gt_single_gold')
    .itemInputs(safeItemId('4x opencomputers:component', ')))
    .inputFluids(solder)
    .itemOutputs(safeItemId('21x opencomputers:material', 2')1))
    .circuitMeta([2])
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('fzmbijz6akuopm') // remapped from original line 499
    .inputNBT(metaitem('power_unit.mv').item, 1, metaitem('power_unit.mv').metadata, NBTMatcher.ANY, NBTCondition.ANY)
    .itemInputs('2x #forge:cables/gt_single_copper')
    .itemInputs('1x #forge:plates/aluminium')
    .itemInputs(safeItemId('20x opencomputers:material', 2')0))
    .itemInputs(safeItemId('3x opencomputers:component', ')))
    .inputFluids(solder)
    .circuitMeta([4])
    .itemOutputs(safeItemId('23x opencomputers:material', 2')3))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('0czszu9dsrfoag') // remapped from original line 512
    .inputNBT(metaitem('power_unit.hv').item, 1, metaitem('power_unit.hv').metadata, NBTMatcher.ANY, NBTCondition.ANY)
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs('4x #forge:cables/gt_single_gold')
    .itemInputs(safeItemId('21x opencomputers:material', 2')1))
    .itemInputs(safeItemId('4x opencomputers:component', ')))
    .inputFluids(solder)
    .itemOutputs(safeItemId('24x opencomputers:material', 2')4))
    .circuitMeta([4])
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('sy9raonkcfuveu') // remapped from original line 525
    .itemInputs('4x #forge:plates/plastic')
    .inputFluids(solder)
    .itemOutputs(safeItemId('26x opencomputers:material', 2')6))
    .circuitMeta([15])
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('ktmnwhbqbksbpl') // remapped from original line 534
    .itemInputs('1x #forge:dyes/black')
    .itemInputs('1x #forge:dyes/cyan')
    .itemInputs('1x #forge:dyes/yellow')
    .itemInputs('1x #forge:dyes/magenta')
    .itemInputs(safeItemId('26x opencomputers:material', 2')6))
    .itemOutputs(safeItemId('27x opencomputers:material', 2')7))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('7v0i3jbrrsqbzd') // remapped from original line 545
    .inputNBT(metaitem('power_unit.mv').item, 1, metaitem('power_unit.mv').metadata, NBTMatcher.ANY, NBTCondition.ANY)
    .itemInputs('1x #forge:cables/gt_single_copper')
    .itemInputs('2x #forge:plates/aluminium')
    .itemInputs(metaitem('sensor.mv'))
    .itemInputs('1x #forge:circuits/mv')
    .inputFluids(solder)
    .circuitMeta([3])
    .itemOutputs(safeItemId('1x opencomputers:tool'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('vikzomeneawtrw') // remapped from original line 558
    .inputNBT(metaitem('power_unit.mv').item, 1, metaitem('power_unit.mv').metadata, NBTMatcher.ANY, NBTCondition.ANY)
    .itemInputs(safeItemId('7x opencomputers:card', ')))
    .itemInputs('2x #forge:plates/aluminium')
    .itemInputs(metaitem('monitor_screen'))
    .itemInputs('1x #forge:circuits/mv')
    .inputFluids(solder)
    .circuitMeta([3])
    .itemOutputs(safeItemId('2x opencomputers:tool', ')))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('sbutgz3mfckpq9') // remapped from original line 571
    .itemInputs('2x #forge:plates/aluminium')
    .itemInputs(metaitem('sensor.lv'))
    .itemInputs('1x #forge:circuits/mv')
    .inputFluids(solder)
    .circuitMeta([4])
    .itemOutputs(safeItemId('3x opencomputers:tool', ')))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('j4xla7gdegzttp') // remapped from original line 582
    .itemInputs(metaitem('plate.central_processing_unit'))
    .itemInputs(metaitem('circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:component'))
    .duration(200)
    .EUt(30)

  event.recipes.susy.mods.gregtech.circuit_assembler('fc1y6bf50dicy4') // remapped from original line 592
    .itemInputs(metaitem('plate.central_processing_unit') * 2)
    .itemInputs(metaitem('circuit_board.plastic'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('1x opencomputers:component', ')))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('a0blqdzl4v6amj') // remapped from original line 602
    .itemInputs(metaitem('plate.central_processing_unit') * 4)
    .itemInputs(metaitem('circuit_board.advanced'))
    .inputFluids(solder)
    .circuitMeta([3])
    .itemOutputs(safeItemId('2x opencomputers:component', ')))
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.circuit_assembler('kcvwuoobni54mc') // remapped from original line 612
    .itemInputs(metaitem('plate.integrated_logic_circuit'))
    .itemInputs(metaitem('circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('3x opencomputers:component', ')))
    .duration(200)
    .EUt(30)

  event.recipes.susy.mods.gregtech.circuit_assembler('gaha4pv1ptftvw') // remapped from original line 622
    .itemInputs(metaitem('plate.integrated_logic_circuit') * 2)
    .itemInputs(metaitem('circuit_board.plastic'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('4x opencomputers:component', ')))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('lbvqxwfev13jzs') // remapped from original line 632
    .itemInputs(metaitem('plate.integrated_logic_circuit') * 4)
    .itemInputs(metaitem('circuit_board.advanced'))
    .inputFluids(solder)
    .circuitMeta([3])
    .itemOutputs(safeItemId('5x opencomputers:component', ')))
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.circuit_assembler('pjlxcyakfglglb') // remapped from original line 642
    .itemInputs(metaitem('plate.random_access_memory'))
    .itemInputs(metaitem('circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('6x opencomputers:component', ')))
    .duration(200)
    .EUt(30)

  event.recipes.susy.mods.gregtech.circuit_assembler('v0olxzsgopcpzz') // remapped from original line 652
    .itemInputs(metaitem('plate.random_access_memory') * 2)
    .itemInputs(metaitem('circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('7x opencomputers:component', ')))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.circuit_assembler('ifhz1bghptijlx') // remapped from original line 662
    .itemInputs(metaitem('plate.random_access_memory') * 4)
    .itemInputs(metaitem('circuit_board.plastic'))
    .inputFluids(solder)
    .circuitMeta([3])
    .itemOutputs(safeItemId('8x opencomputers:component', ')))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('gmjq4c80ktvuy5') // remapped from original line 672
    .itemInputs(metaitem('plate.random_access_memory') * 6)
    .itemInputs(metaitem('circuit_board.plastic'))
    .inputFluids(solder)
    .circuitMeta([4])
    .itemOutputs(safeItemId('9x opencomputers:component', ')))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('zomunzfxogkfvn') // remapped from original line 682
    .itemInputs(metaitem('plate.random_access_memory') * 8)
    .itemInputs(metaitem('circuit_board.advanced'))
    .inputFluids(solder)
    .circuitMeta([5])
    .itemOutputs(safeItemId('10x opencomputers:component', 1')0))
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.circuit_assembler('sv4pq5ooikma9i') // remapped from original line 692
    .itemInputs(metaitem('plate.random_access_memory') * 12)
    .itemInputs(metaitem('circuit_board.advanced'))
    .inputFluids(solder)
    .circuitMeta([6])
    .itemOutputs(safeItemId('11x opencomputers:component', 1')1))
    .duration(400)
    .EUt(480)

  event.recipes.susy.mods.gregtech.circuit_assembler('uddjxwvgrk21ru') // remapped from original line 702
    .itemInputs(safeItemId('7x opencomputers:component', ')))
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs('4x #forge:wires/fine_copper')
    .itemInputs(metaitem('circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([15])
    .itemOutputs(safeItemId('13x opencomputers:component', 1')3))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.circuit_assembler('aaudwujys46u8o') // remapped from original line 714
    .itemInputs(safeItemId('9x opencomputers:component', ')))
    .itemInputs(safeItemId('1x opencomputers:component', ')))
    .itemInputs('8x #forge:wires/fine_gold')
    .itemInputs(metaitem('circuit_board.plastic'))
    .inputFluids(solder)
    .circuitMeta([15])
    .itemOutputs(safeItemId('14x opencomputers:component', 1')4))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('cz1vejcf5ipesb') // remapped from original line 726
    .itemInputs(safeItemId('11x opencomputers:component', 1')1))
    .itemInputs(safeItemId('2x opencomputers:component', ')))
    .itemInputs('16x #forge:wires/fine_aluminium')
    .itemInputs(metaitem('circuit_board.advanced'))
    .inputFluids(solder)
    .circuitMeta([15])
    .itemOutputs(safeItemId('15x opencomputers:component', 1')5))
    .duration(400)
    .EUt(480)

  event.recipes.susy.mods.gregtech.circuit_assembler('oj85vspoxxprjm') // remapped from original line 738
    .itemInputs(safeItemId('2x opencomputers:card', ')))
    .itemInputs(safeItemId('4x opencomputers:component', ')))
    .itemInputs(safeItemId('1x opencomputers:component', ')))
    .itemInputs('16x #forge:wires/fine_copper')
    .itemInputs(metaitem('circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('16x opencomputers:component', 1')6))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.circuit_assembler('4hlkeabuo1bzsw') // remapped from original line 751
    .itemInputs(safeItemId('3x opencomputers:card', ')))
    .itemInputs(safeItemId('5x opencomputers:component', ')))
    .itemInputs(safeItemId('2x opencomputers:component', ')))
    .itemInputs('4x #forge:wires/fine_gold')
    .itemInputs(metaitem('circuit_board.advanced'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('17x opencomputers:component', 1')7))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('qwbz4zt0ctoscg') // remapped from original line 764
    .itemInputs(metaitem('circuit_board.plastic'))
    .itemInputs('1x #forge:circuits/mv')
    .itemInputs(metaitem('sensor.mv'))
    .itemInputs(metaitem('emitter.mv'))
    .itemInputs('1x #forge:lenss/glass')
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x opencomputers:diskdrive'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('q2n1xioxj3yf7s') // remapped from original line 776
    .itemInputs(safeItemId('6x opencomputers:component', ')))
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs('4x #forge:wires/fine_copper')
    .itemInputs(metaitem('circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:card', ')))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.circuit_assembler('e3ddg87ch2bfla') // remapped from original line 788
    .itemInputs(safeItemId('8x opencomputers:component', ')))
    .itemInputs(safeItemId('1x opencomputers:component', ')))
    .itemInputs('4x #forge:wires/fine_gold')
    .itemInputs(metaitem('circuit_board.plastic'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('2x opencomputers:card', ')))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('uekvw0ykofgwdr') // remapped from original line 800
    .itemInputs(safeItemId('9x opencomputers:component', ')))
    .itemInputs(safeItemId('2x opencomputers:component', ')))
    .itemInputs('4x #forge:wires/fine_aluminium')
    .itemInputs(metaitem('circuit_board.advanced'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('3x opencomputers:card', ')))
    .duration(400)
    .EUt(480)

  event.recipes.susy.mods.gregtech.circuit_assembler('1k7hftcpbdvcxu') // remapped from original line 812
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs('4x #forge:wires/fine_red_alloy')
    .itemInputs(metaitem('circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('4x opencomputers:card', ')))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.circuit_assembler('l3h3tdpwn89jci') // remapped from original line 823
    .itemInputs(safeItemId('1x opencomputers:component', ')))
    .itemInputs('16x #forge:wires/fine_red_alloy')
    .itemInputs(metaitem('circuit_board.plastic'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('5x opencomputers:card', ')))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('nq60mrxucq49wh') // remapped from original line 834
    .itemInputs('1x #forge:wires/gt_single_copper')
    .itemInputs('4x #forge:wires/fine_copper')
    .itemInputs(metaitem('sensor.mv'))
    .itemInputs(metaitem('emitter.mv'))
    .itemInputs(metaitem('circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('6x opencomputers:card', ')))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.circuit_assembler('ei5okiardlfgqr') // remapped from original line 847
    .itemInputs('8x #forge:wires/fine_gold')
    .itemInputs(metaitem('sensor.hv'))
    .itemInputs(metaitem('emitter.hv'))
    .itemInputs(metaitem('circuit_board.plastic'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('7x opencomputers:card', ')))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('oi4gx3gqix7w0o') // remapped from original line 859
    .itemInputs('8x #forge:wires/fine_aluminium')
    .itemInputs(metaitem('sensor.ev'))
    .itemInputs(metaitem('emitter.ev'))
    .itemInputs(metaitem('circuit_board.advanced'))
    .inputFluids(solder)
    .circuitMeta([3])
    .itemOutputs(safeItemId('8x opencomputers:card', ')))
    .duration(400)
    .EUt(480)

  event.recipes.susy.mods.gregtech.circuit_assembler('zkwpb96pufdsrm') // remapped from original line 871
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs('4x #forge:wires/fine_copper')
    .itemInputs(metaitem('circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([10])
    .itemOutputs(safeItemId('10x opencomputers:card', 1')0))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.circuit_assembler('c4khl5urdlgrss') // remapped from original line 882
    .itemInputs(safeItemId('1x opencomputers:component', ')))
    .itemInputs('4x #forge:wires/fine_gold')
    .itemInputs(metaitem('circuit_board.plastic'))
    .inputFluids(solder)
    .circuitMeta([11])
    .itemOutputs(safeItemId('11x opencomputers:card', 1')1))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('lt5hks3biwuz5u') // remapped from original line 893
    .itemInputs(safeItemId('2x opencomputers:component', ')))
    .itemInputs('4x #forge:wires/fine_aluminium')
    .itemInputs(metaitem('circuit_board.advanced'))
    .inputFluids(solder)
    .circuitMeta([12])
    .itemOutputs(safeItemId('12x opencomputers:card', 1')2))
    .duration(400)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('2dv0dahosbgnaz') // remapped from original line 904
    .inputNBT(metaitem('power_unit.mv').item, 1, metaitem('power_unit.mv').metadata, NBTMatcher.ANY, NBTCondition.ANY)
    .itemInputs(metaitem('circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:upgrade', ')))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('4zwv4vnzy8razr') // remapped from original line 914
    .inputNBT(metaitem('power_unit.hv').item, 1, metaitem('power_unit.hv').metadata, NBTMatcher.ANY, NBTCondition.ANY)
    .itemInputs(metaitem('circuit_board.plastic'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('2x opencomputers:upgrade', ')))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('mttryehtc7nj62') // remapped from original line 924
    .itemInputs(metaitem('power_unit.ev'))
    .itemInputs(metaitem('circuit_board.advanced'))
    .inputFluids(solder)
    .circuitMeta([3])
    .itemOutputs(safeItemId('3x opencomputers:upgrade', ')))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('red3wb0c6orhnm') // remapped from original line 934
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs(safeItemId('5x opencomputers:material', ')))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('5x opencomputers:upgrade', ')))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('exhbksnrlnki88') // remapped from original line 944
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs(safeItemId('5x opencomputers:material', ')))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('6x opencomputers:upgrade', ')))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('uy1saa5aswafvn') // remapped from original line 954
    .itemInputs('4x #forge:plates/titanium')
    .itemInputs(safeItemId('5x opencomputers:material', ')))
    .inputFluids(solder)
    .circuitMeta([3])
    .itemOutputs(safeItemId('7x opencomputers:upgrade', ')))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('6vjkjzwwxed53v') // remapped from original line 964
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs('4x #forge:screws/aluminium')
    .inputFluids(solder)
    .circuitMeta([11])
    .itemOutputs(safeItemId('8x opencomputers:upgrade', ')))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('unwrzt0sbhayxe') // remapped from original line 974
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs('4x #forge:screws/stainless_steel')
    .inputFluids(solder)
    .circuitMeta([12])
    .itemOutputs(safeItemId('9x opencomputers:upgrade', ')))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('l8wpihd1o4jw4x') // remapped from original line 984
    .itemInputs('4x #forge:plates/titanium')
    .itemInputs('4x #forge:screws/titanium')
    .inputFluids(solder)
    .circuitMeta([13])
    .itemOutputs(safeItemId('10x opencomputers:upgrade', 1')0))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('mfauyc6va0ooit') // remapped from original line 994
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs(safeItemId('1x minecraft:crafting_table'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('11x opencomputers:upgrade', 1')1))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('w9twyi7kqbhbye') // remapped from original line 1004
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs(safeItemId('1x oc:hdd1')'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('12x opencomputers:upgrade', 1')2))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('vpwpgdkwb9iocv') // remapped from original line 1014
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs(safeItemId('2x oc:hdd2')'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('13x opencomputers:upgrade', 1')3))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('zgzrrkdc74kwse') // remapped from original line 1024
    .itemInputs('4x #forge:plates/titanium')
    .itemInputs(safeItemId('3x oc:hdd3')'))
    .inputFluids(solder)
    .circuitMeta([3])
    .itemOutputs(safeItemId('14x opencomputers:upgrade', 1')4))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('ow6ry1iszv5ykp') // remapped from original line 1034
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs(metaitem('crate.steel'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('17x opencomputers:upgrade', 1')7))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('lacw1qzza0pg6e') // remapped from original line 1044
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs(metaitem('robot.arm.hv'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('18x opencomputers:upgrade', 1')8))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('xv4xy6rlcuozcl') // remapped from original line 1054
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs(safeItemId('1x minecraft:compass'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('19x opencomputers:upgrade', 1')9))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('zhc0k8wmxtewbf') // remapped from original line 1064
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs(metaitem('electric.piston.mv'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('20x opencomputers:upgrade', 2')0))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('ff3mqdk7cvj7cl') // remapped from original line 1074
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs('2x #forge:dyes/black')
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('21x opencomputers:upgrade', 2')1))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('d6soegk4wtcwsq') // remapped from original line 1084
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs(metaitem('drum.aluminium'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('23x opencomputers:upgrade', 2')3))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('ktkaur6nvwdcul') // remapped from original line 1094
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs(metaitem('electric.pump.hv'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('24x opencomputers:upgrade', 2')4))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('7vr0p2vmancq3u') // remapped from original line 1104
    .itemInputs('4x #forge:plates/titanium')
    .itemInputs('1x #forge:rods/neodymium_alloy_magnetic')
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('25x opencomputers:upgrade', 2')5))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('p6qjvlwzkynmkq') // remapped from original line 1114
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs(safeItemId('1x minecraft:lead'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('26x opencomputers:upgrade', 2')6))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('z5odnpwxd2rhaw') // remapped from original line 1124
    .itemInputs('4x #forge:plates/titanium')
    .itemInputs(metaitem('sensor.ev'))
    .itemInputs(metaitem('emitter.ev'))
    .inputFluids(solder)
    .circuitMeta([10])
    .itemOutputs(safeItemId('30x opencomputers:upgrade', 3')0))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('qewqqram4dpb0t') // remapped from original line 1135
    .itemInputs('4x #forge:plates/steel')
    .itemInputs('4x #forge:wires/fine_red_alloy')
    .itemInputs(metaitem('sensor.lv'))
    .itemInputs(metaitem('emitter.lv'))
    .inputFluids(solder)
    .circuitMeta([10])
    .itemOutputs(safeItemId('6x opencomputers:card', ')))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('8jwbar7nwvwhsc') // remapped from original line 1147
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs('4x #forge:wires/fine_red_alloy')
    .itemInputs(metaitem('sensor.mv'))
    .itemInputs(metaitem('emitter.mv'))
    .inputFluids(solder)
    .circuitMeta([10])
    .itemOutputs(safeItemId('31x opencomputers:upgrade', 3')1))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('814myokysfccab') // remapped from original line 1159
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs(metaitem('electric.piston.lv'))
    .inputFluids(safeFluidOf('gtceu:glue', 36))
    .circuitMeta([10])
    .itemOutputs(safeItemId('33x opencomputers:upgrade', 3')3))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('l9s1lk9dbp6lkc') // remapped from original line 1169
    .itemInputs(metaitem('component.transistor') * 16)
    .itemInputs(metaitem('circuit_board.good'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:storage'))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('q64c7uxx1tptjn') // remapped from original line 1179
    .itemInputs(safeItemId('12x opencomputers:material', 1')2))
    .itemInputs('1x #forge:plates/plastic')
    .itemInputs('1x #forge:dyes/black')
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('1x opencomputers:storage', ')))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('bjvvqr5gewqivf') // remapped from original line 1190
    .itemInputs(safeItemId('12x opencomputers:material', 1')2))
    .itemInputs('4x #forge:plates/aluminium')
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('2x opencomputers:storage', ')))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('nbnbkarfnplouo') // remapped from original line 1200
    .itemInputs(safeItemId('12x opencomputers:material', 1')) * 2)
    .itemInputs('4x #forge:plates/stainless_steel')
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('3x opencomputers:storage', ')))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('hpp6ulkkdddtou') // remapped from original line 1210
    .itemInputs(safeItemId('12x opencomputers:material', 1')) * 4)
    .itemInputs('4x #forge:plates/titanium')
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('4x opencomputers:storage', ')))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.circuit_assembler('qkep2nrmlacw5p') // remapped from original line 1220
    .itemInputs('1x #forge:circuits/hv')
    .itemInputs(safeItemId('2x oc:wlanCard2')'))
    .itemInputs(metaitem('circuit_board.plastic'))
    .inputFluids(solder)
    .circuitMeta([1])
    .itemOutputs(safeItemId('19x opencomputers:component', 1')9))
    .duration(400)
    .EUt(120)

  event.recipes.susy.mods.gregtech.forming_press('v2wzap0bist5xx') // remapped from original line 1231
    .itemInputs('4x #forge:foils/polycaprolactam')
    .itemOutputs(safeItemId('28x opencomputers:material', 2')8))
    .duration(160)
    .EUt(120)

  event.recipes.susy.	mods.gregtech.assembler('lfvs9ry1qvz7tb') // remapped from original line 1245
    .itemInputs('4x #forge:lenss/glass')
    .itemInputs('1x #forge:dusts/small_cobalt')
    .itemOutputs(safeItemId('12x opencomputers:material', 1')2))
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