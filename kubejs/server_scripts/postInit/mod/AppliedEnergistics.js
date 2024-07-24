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

  event.recipes.susy.mods.gregtech.assembler('8b4br3plwazcsy') // remapped from original line 324
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs('4x #forge:wires/fine_gold')
    .itemInputs('4x #forge:wires/fine_silver')
    .itemInputs('1x #forge:plates/certus_quartz')
    .itemInputs(safeItemId('2x appliedenergistics2:part', 1'):part', 16))
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('2x appliedenergistics2:material', 3'):material', 39))
    .duration(80)
    .EUt(voltAmps[4])

  event.recipes.susy.mods.gregtech.assembler('yuw4jpxyhbvlez') // remapped from original line 336
    .itemInputs('1x #forge:plates/stainless_steel')
    .itemInputs('1x #forge:wires/fine_platinum')
    .itemInputs(metaitem('pattern.memory'))
    .itemInputs(safeItemId('2x appliedenergistics2:part', 1'):part', 16))
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('2x appliedenergistics2:material', 5'):material', 52))
    .duration(80)
    .EUt(voltAmps[4])

  event.recipes.susy.mods.gregtech.assembler('mtcifnp2m0r4e4') // remapped from original line 347
    .itemInputs('4x #forge:plates/naquadah_alloy')
    .itemInputs('4x #forge:wires/fine_gold')
    .itemInputs('4x #forge:wires/fine_silver')
    .itemInputs('1x #forge:plates/certus_quartz')
    .itemInputs(safeItemId('2x appliedenergistics2:part', 1'):part', 16))
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('1x extracells:storage.casing'))
    .duration(80)
    .EUt(voltAmps[5])

  event.recipes.susy.mods.gregtech.assembler('tv3w8ogcjqsfq3') // remapped from original line 359
    .itemInputs('1x #forge:circuits/ev')
    .itemInputs('1x #forge:gems/exquisite_fluix')
    .itemInputs('1x #forge:wires/fine_silver')
    .itemInputs('1x #forge:plates/titanium')
    .itemInputs('1x #forge:plates/certus_quartz')
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('2x appliedenergistics2:part', 46'):part', 460))
    .duration(80)
    .EUt(voltAmps[4])

  event.recipes.susy.mods.gregtech.assembler('geomnjebaovsna') // remapped from original line 371
    .itemInputs('1x #forge:frames/gt_titanium')
    .itemInputs('1x #forge:plates/titanium')
    .itemInputs('1x #forge:plates/certus_quartz')
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('1x threng:big_assembler'))
    .duration(100)
    .EUt(voltAmps[4])

  event.recipes.susy.mods.gregtech.assembler('orialo38zzj92h') // remapped from original line 381
    .itemInputs(safeItemId('2x gregtech:multiblock_casing', ')))
    .itemInputs('1x #forge:plates/titanium')
    .itemInputs('1x #forge:plates/certus_quartz')
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('1x threng:big_assembler', ')))
    .duration(100)
    .EUt(voltAmps[4])

  event.recipes.susy.mods.gregtech.assembler('ew0akgefsfov6o') // remapped from original line 391
    .itemInputs(safeItemId('1x threng:big_assembler'))
    .itemInputs('1x #forge:plates/titanium')
    .itemInputs(safeItemId('2x appliedenergistics2:molecular_assembler'):molecular_assembler'))
    .itemInputs(safeItemId('2x appliedenergistics2:part', 1'):part', 16) * 2)
    .itemInputs(safeItemId('2x appliedenergistics2:interface'):interface'))
    .itemInputs('1x #forge:circuits/ev')
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('2x threng:big_assembler', ')))
    .duration(100)
    .EUt(voltAmps[4])

  event.recipes.susy.mods.gregtech.assembler('hduuyyzohetwgx') // remapped from original line 404
    .itemInputs(safeItemId('1x threng:big_assembler'))
    .itemInputs('1x #forge:plates/titanium')
    .itemInputs(safeItemId('2x appliedenergistics2:part', 1'):part', 16) * 2)
    .itemInputs(safeItemId('2x appliedenergistics2:interface'):interface'))
    .itemInputs(metaitem('pattern.memory'))
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('3x threng:big_assembler', ')))
    .duration(100)
    .EUt(voltAmps[4])

  event.recipes.susy.mods.gregtech.assembler('hdexpo9kepqbfg') // remapped from original line 416
    .itemInputs(safeItemId('1x threng:big_assembler'))
    .itemInputs('1x #forge:plates/titanium')
    .itemInputs(safeItemId('2x appliedenergistics2:part', 1'):part', 16) * 2)
    .itemInputs(safeItemId('2x appliedenergistics2:interface'):interface'))
    .itemInputs(safeItemId('2x appliedenergistics2:crafting_accelerator'):crafting_accelerator'))
    .itemInputs(metaitem('pattern.processor'))
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('4x threng:big_assembler', ')))
    .duration(100)
    .EUt(voltAmps[4])

  event.recipes.susy.mods.gregtech.assembler('etbpszih16ybng') // remapped from original line 429
    .itemInputs(safeItemId('1x threng:big_assembler'))
    .itemInputs('1x #forge:plates/titanium')
    .itemInputs(safeItemId('2x appliedenergistics2:part', 1'):part', 16) * 2)
    .itemInputs(safeItemId('2x appliedenergistics2:interface'):interface'))
    .itemInputs(safeItemId('2x appliedenergistics2:io_port'):io_port'))
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('5x threng:big_assembler', ')))
    .duration(100)
    .EUt(voltAmps[4])

  event.recipes.susy.mods.gregtech.assembler('bun5dk8mqjw4cg') // remapped from original line 441
    .itemInputs('1x #forge:plates/titanium')
    .itemInputs(metaitem('plate.power_integrated_circuit'))
    .itemInputs(metaitem('storage.segment'))
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('2x appliedenergistics2:energy_cell'):energy_cell'))
    .duration(100)
    .EUt(voltAmps[4])

  event.recipes.susy.mods.gregtech.assembler('rpyzo4md9c9ssu') // remapped from original line 451
    .itemInputs('1x #forge:plates/titanium')
    .itemInputs(metaitem('plate.high_power_integrated_circuit'))
    .itemInputs(metaitem('storage.segment') * 8)
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('2x appliedenergistics2:dense_energy_cell'):dense_energy_cell'))
    .duration(100)
    .EUt(voltAmps[5])

  event.recipes.susy.mods.gregtech.assembler('crp3xo6ocjs3zg') // remapped from original line 461
    .itemInputs(safeItemId('1x rs_ctr:edge_trigger'))
    .itemInputs(safeItemId('2x appliedenergistics2:part', 28'):part', 280) * 2)
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('2x appliedenergistics2:part', 8'):part', 80))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.mods.gregtech.assembler('ipyif1i97ubsbo') // remapped from original line 470
    .itemInputs(metaitem('hull.iv'))
    .itemInputs('1x #forge:circuits/iv')
    .itemInputs(safeItemId('2x appliedenergistics2:interface'):interface'))
    .itemInputs(safeItemId('2x appliedenergistics2:crafting_accelerator'):crafting_accelerator') * 2)
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('3x threng:machine', ')))
    .duration(100)
    .EUt(voltAmps[5])

  event.recipes.susy.mods.gregtech.assembler('sfppc7zx7k3ylg') // remapped from original line 481
    .itemInputs(metaitem('hull.iv'))
    .itemInputs('1x #forge:circuits/iv')
    .itemInputs(safeItemId('2x appliedenergistics2:material', 5'):material', 53))
    .itemInputs(safeItemId('2x appliedenergistics2:part', 28'):part', 280) * 3)
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('4x threng:machine', ')))
    .duration(100)
    .EUt(voltAmps[5])

  event.recipes.susy.mods.gregtech.assembler('a6f6aaabp58xlm') // remapped from original line 492
    .itemInputs(metaitem('hull.ev'))
    .itemInputs('1x #forge:circuits/ev')
    .itemInputs('2x #forge:plates/titanium')
    .itemInputs('2x #forge:wires/fine_gold')
    .itemInputs('4x #forge:gems/exquisite_fluix')
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('2x appliedenergistics2:controller'):controller'))
    .duration(200)
    .EUt(voltAmps[4])

  event.recipes.susy.mods.gregtech.assembler('nophv5r2ijnue5') // remapped from original line 504
    .itemInputs('4x #forge:plates/titanium')
    .itemInputs('4x #forge:rods/titanium')
    .itemInputs('1x #forge:gems/exquisite_fluix')
    .itemInputs(safeItemId('2x appliedenergistics2:material', 4'):material', 43))
    .itemInputs(safeItemId('2x appliedenergistics2:material', 4'):material', 44))
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('2x appliedenergistics2:spatial_pylon'):spatial_pylon'))
    .duration(140)
    .EUt(voltAmps[4])

  event.recipes.susy.mods.gregtech.assembler('litnfue0hwunrp') // remapped from original line 516
    .itemInputs('1x #forge:plates/stainless_steel')
    .itemInputs('1x #forge:wires/fine_gold')
    .itemInputs('1x #forge:wires/fine_red_alloy')
    .itemInputs('1x #forge:circuits/hv')
    .circuit(1)
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('2x appliedenergistics2:memory_card'):memory_card'))
    .duration(80)
    .EUt(voltAmps[3])

  event.recipes.susy.mods.gregtech.assembler('q1zchnmg4p2g2m') // remapped from original line 528
    .itemInputs('1x #forge:plates/stainless_steel')
    .itemInputs('1x #forge:wires/fine_gold')
    .itemInputs('1x #forge:wires/fine_red_alloy')
    .itemInputs('1x #forge:circuits/hv')
    .circuit(2)
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('2x appliedenergistics2:biometric_card'):biometric_card'))
    .duration(80)
    .EUt(voltAmps[3])

  event.recipes.susy.mods.gregtech.assembler('u2htc2vhkhxaao') // remapped from original line 540
    .itemInputs('1x #forge:plates/rhodium_plated_palladium')
    .itemInputs(metaitem('emitter.luv'))
    .itemInputs(metaitem('sensor.luv'))
    .itemInputs('1x #forge:circuits/luv')
    .itemInputs(safeItemId('2x appliedenergistics2:part', 1'):part', 16) * 4)
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('2x appliedenergistics2:material', 4'):material', 42))
    .duration(80)
    .EUt(voltAmps[5])

  event.recipes.susy.mods.gregtech.assembler('zc77wohbxlliee') // remapped from original line 573
    .itemInputs('1x #forge:wires/fine_red_alloy')
    .itemInputs(safeItemId('2x appliedenergistics2:part', 1'):part', 16))
    .circuit(1)
    .inputFluids(safeFluidOf('gtceu:red_alloy', 144))
    .itemOutputs(safeItemId('2x appliedenergistics2:part', 28'):part', 280) * 8)
    .duration(80)
    .EUt(voltAmps[1])

  event.recipes.susy.mods.gregtech.assembler('xlrrghoqxkpvmq') // remapped from original line 583
    .itemInputs('1x #forge:wires/fine_red_alloy')
    .itemInputs(safeItemId('2x appliedenergistics2:part', 1'):part', 16))
    .circuit(2)
    .inputFluids(safeFluidOf('gtceu:red_alloy', 144))
    .itemOutputs(safeItemId('2x appliedenergistics2:part', 28'):part', 281) * 8)
    .duration(80)
    .EUt(voltAmps[1])

  event.recipes.susy.mods.gregtech.circuit_assembler('5n6vqqp2liofx0') // remapped from original line 622
    .itemInputs('1x #forge:circuits/ev')
    .itemInputs('4x #forge:wires/fine_silver')
    .itemInputs(metaitem('plate.random_access_memory') * 1)
    .itemInputs(metaitem('storage.segment') * 1)
    .circuit(1)
    .itemOutputs(safeItemId('2x appliedenergistics2:material:35'):material:35'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(voltAmps[4])

  event.recipes.susy.mods.gregtech.circuit_assembler('ffluxfz1xiucsc') // remapped from original line 634
    .itemInputs('1x #forge:circuits/iv')
    .itemInputs('4x #forge:wires/fine_silver')
    .itemInputs(metaitem('plate.random_access_memory') * 4)
    .itemInputs(metaitem('storage.segment') * 1)
    .circuit(1)
    .itemOutputs(safeItemId('2x appliedenergistics2:material:36'):material:36'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(voltAmps[5])

  event.recipes.susy.mods.gregtech.circuit_assembler('0ghkvnvp9mm8xa') // remapped from original line 646
    .itemInputs('1x #forge:circuits/luv')
    .itemInputs('4x #forge:wires/fine_silver')
    .itemInputs(metaitem('plate.random_access_memory') * 16)
    .itemInputs(metaitem('storage.segment') * 1)
    .circuit(1)
    .itemOutputs(safeItemId('2x appliedenergistics2:material:37'):material:37'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(voltAmps[6])

  event.recipes.susy.mods.gregtech.circuit_assembler('bn8vxunskt5yff') // remapped from original line 658
    .itemInputs('1x #forge:circuits/zpm')
    .itemInputs('4x #forge:wires/fine_silver')
    .itemInputs(metaitem('plate.random_access_memory') * 64)
    .itemInputs(metaitem('storage.segment') * 1)
    .circuit(1)
    .itemOutputs(safeItemId('2x appliedenergistics2:material:38'):material:38'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(voltAmps[7])

  event.recipes.susy.mods.gregtech.circuit_assembler('asltxsnuoh1ysi') // remapped from original line 673
    .itemInputs('1x #forge:circuits/uv')
    .itemInputs('4x #forge:wires/fine_silver')
    .itemInputs(metaitem('plate.advanced_random_access_memory') * 1)
    .itemInputs(metaitem('storage.segment') * 1)
    .circuit(1)
    .itemOutputs(safeItemId('1x extracells:storage.component:0')'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(voltAmps[8])

  event.recipes.susy.mods.gregtech.circuit_assembler('knoqjr8rhiylvs') // remapped from original line 685
    .itemInputs('1x #forge:circuits/uhv')
    .itemInputs('4x #forge:wires/fine_silver')
    .itemInputs(metaitem('plate.advanced_random_access_memory') * 4)
    .itemInputs(metaitem('storage.segment') * 1)
    .circuit(1)
    .itemOutputs(safeItemId('1x extracells:storage.component:1')'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(voltAmps[9])

  event.recipes.susy.mods.gregtech.circuit_assembler('yroiajrf7ack9v') // remapped from original line 697
    .itemInputs('1x #forge:circuits/uev')
    .itemInputs('4x #forge:wires/fine_silver')
    .itemInputs(metaitem('plate.advanced_random_access_memory') * 16)
    .itemInputs(metaitem('storage.segment') * 1)
    .circuit(1)
    .itemOutputs(safeItemId('2x extracells:storage.component:2')'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(voltAmps[10])

  event.recipes.susy.mods.gregtech.circuit_assembler('pqleqf7s9pcvsq') // remapped from original line 709
    .itemInputs('1x #forge:circuits/uiv')
    .itemInputs('4x #forge:wires/fine_silver')
    .itemInputs(metaitem('plate.advanced_random_access_memory') * 64)
    .itemInputs(metaitem('storage.segment') * 1)
    .circuit(1)
    .itemOutputs(safeItemId('3x extracells:storage.component:3')'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(voltAmps[11])

  event.recipes.susy.mods.gregtech.circuit_assembler('dsgva5g02bztbp') // remapped from original line 723
    .itemInputs('1x #forge:circuits/ev')
    .itemInputs('4x #forge:wires/fine_silver')
    .itemInputs(metaitem('plate.random_access_memory') * 1)
    .itemInputs(metaitem('storage.segment') * 1)
    .circuit(2)
    .itemOutputs(safeItemId('2x appliedenergistics2:material:54'):material:54'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(voltAmps[4])

  event.recipes.susy.mods.gregtech.circuit_assembler('gciijeffwboj6t') // remapped from original line 735
    .itemInputs('1x #forge:circuits/iv')
    .itemInputs('4x #forge:wires/fine_silver')
    .itemInputs(metaitem('plate.random_access_memory') * 4)
    .itemInputs(metaitem('storage.segment') * 1)
    .circuit(2)
    .itemOutputs(safeItemId('2x appliedenergistics2:material:55'):material:55'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(voltAmps[5])

  event.recipes.susy.mods.gregtech.circuit_assembler('o7vy12omjbdwtj') // remapped from original line 747
    .itemInputs('1x #forge:circuits/luv')
    .itemInputs('4x #forge:wires/fine_silver')
    .itemInputs(metaitem('plate.random_access_memory') * 16)
    .itemInputs(metaitem('storage.segment') * 1)
    .circuit(2)
    .itemOutputs(safeItemId('2x appliedenergistics2:material:56'):material:56'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(voltAmps[6])

  event.recipes.susy.mods.gregtech.circuit_assembler('uii9t5owtebsb9') // remapped from original line 759
    .itemInputs('1x #forge:circuits/zpm')
    .itemInputs('4x #forge:wires/fine_silver')
    .itemInputs(metaitem('plate.random_access_memory') * 64)
    .itemInputs(metaitem('storage.segment') * 1)
    .circuit(2)
    .itemOutputs(safeItemId('2x appliedenergistics2:material:57'):material:57'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(voltAmps[7])

  event.recipes.susy.mods.gregtech.circuit_assembler('flsgdbn2pxprhs') // remapped from original line 772
    .itemInputs('1x #forge:circuits/uv')
    .itemInputs('4x #forge:wires/fine_silver')
    .itemInputs(metaitem('plate.advanced_random_access_memory') * 1)
    .itemInputs(metaitem('storage.segment') * 1)
    .circuit(2)
    .itemOutputs(safeItemId('8x extracells:storage.component:8')'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(voltAmps[8])

  event.recipes.susy.mods.gregtech.circuit_assembler('4tatwbpleat1cr') // remapped from original line 784
    .itemInputs('1x #forge:circuits/uhv')
    .itemInputs('4x #forge:wires/fine_silver')
    .itemInputs(metaitem('plate.advanced_random_access_memory') * 4)
    .itemInputs(metaitem('storage.segment') * 1)
    .circuit(2)
    .itemOutputs(safeItemId('9x extracells:storage.component:9')'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(voltAmps[9])

  event.recipes.susy.mods.gregtech.circuit_assembler('dfzkdm3m9wfeks') // remapped from original line 796
    .itemInputs('1x #forge:circuits/uev')
    .itemInputs('4x #forge:wires/fine_silver')
    .itemInputs(metaitem('plate.advanced_random_access_memory') * 1)
    .itemInputs(metaitem('storage.segment') * 1)
    .circuit(2)
    .itemOutputs(safeItemId('10x extracells:storage.component:10')0'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(voltAmps[10])

  event.recipes.susy.mods.gregtech.circuit_assembler('kvzabbjmqvmpcf') // remapped from original line 810
    .itemInputs('1x #forge:circuits/iv')
    .itemInputs('4x #forge:wires/fine_silver')
    .itemInputs(metaitem('plate.random_access_memory') * 1)
    .itemInputs(metaitem('storage.segment') * 1)
    .circuit(3)
    .itemOutputs(safeItemId('2x appliedenergistics2:material:32'):material:32'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(7680)

  event.recipes.susy.mods.gregtech.circuit_assembler('3kijm9ycp6sn5u') // remapped from original line 822
    .itemInputs('1x #forge:circuits/luv')
    .itemInputs('4x #forge:wires/fine_silver')
    .itemInputs(metaitem('plate.random_access_memory') * 4)
    .itemInputs(metaitem('storage.segment') * 1)
    .circuit(3)
    .itemOutputs(safeItemId('2x appliedenergistics2:material:33'):material:33'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(30720)

  event.recipes.susy.mods.gregtech.circuit_assembler('tsgycsywqnkiyz') // remapped from original line 834
    .itemInputs('1x #forge:circuits/zpm')
    .itemInputs('4x #forge:wires/fine_silver')
    .itemInputs(metaitem('plate.random_access_memory') * 16)
    .itemInputs(metaitem('storage.segment') * 1)
    .circuit(3)
    .itemOutputs(safeItemId('2x appliedenergistics2:material:34'):material:34'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(122880)

  event.recipes.susy.mods.gregtech.assembler('cfb4m0y2ocbf4d') // remapped from original line 872
    .itemInputs('1x #forge:circuits/ev')
    .itemInputs('2x #forge:wires/fine_silver')
    .itemInputs(safeItemId('2x appliedenergistics2:crafting_unit'):crafting_unit'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('2x appliedenergistics2:crafting_accelerator'):crafting_accelerator'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(80)
    .EUt(1920)

  event.recipes.susy.mods.gregtech.assembler('q6jjaankhxlmxi') // remapped from original line 883
    .itemInputs(safeItemId('2x appliedenergistics2:material:35'):material:35'))
    .itemInputs('2x #forge:wires/fine_silver')
    .itemInputs(safeItemId('2x appliedenergistics2:crafting_unit'):crafting_unit'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('2x appliedenergistics2:crafting_storage_1k'):crafting_storage_1k'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(80)
    .EUt(1920)

  event.recipes.susy.mods.gregtech.assembler('9irhtxf0y4a0gu') // remapped from original line 894
    .itemInputs(safeItemId('2x appliedenergistics2:material:36'):material:36'))
    .itemInputs('2x #forge:wires/fine_silver')
    .itemInputs(safeItemId('2x appliedenergistics2:crafting_unit'):crafting_unit'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('2x appliedenergistics2:crafting_storage_4k'):crafting_storage_4k'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(80)
    .EUt(1920)

  event.recipes.susy.mods.gregtech.assembler('oxxnv9rghlhtgk') // remapped from original line 905
    .itemInputs(safeItemId('2x appliedenergistics2:material:37'):material:37'))
    .itemInputs('2x #forge:wires/fine_silver')
    .itemInputs(safeItemId('2x appliedenergistics2:crafting_unit'):crafting_unit'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('2x appliedenergistics2:crafting_storage_16k'):crafting_storage_16k'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(80)
    .EUt(1920)

  event.recipes.susy.mods.gregtech.assembler('yguvoxrizxka0a') // remapped from original line 916
    .itemInputs(safeItemId('2x appliedenergistics2:material:38'):material:38'))
    .itemInputs('2x #forge:wires/fine_silver')
    .itemInputs(safeItemId('2x appliedenergistics2:crafting_unit'):crafting_unit'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('2x appliedenergistics2:crafting_storage_64k'):crafting_storage_64k'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(80)
    .EUt(1920)

  event.recipes.susy.mods.gregtech.assembler('2vjenqdzmlmkws') // remapped from original line 927
    .itemInputs(safeItemId('1x extracells:storage.component', ')))
    .itemInputs('2x #forge:wires/fine_silver')
    .itemInputs(safeItemId('2x appliedenergistics2:crafting_unit'):crafting_unit'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('256x extracpus:crafting_storage_256k')56k'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(80)
    .EUt(1920)

  event.recipes.susy.mods.gregtech.assembler('n6o4dn4cicbsk9') // remapped from original line 938
    .itemInputs(safeItemId('1x extracells:storage.component', ')))
    .itemInputs('2x #forge:wires/fine_silver')
    .itemInputs(safeItemId('2x appliedenergistics2:crafting_unit'):crafting_unit'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1024x extracpus:crafting_storage_1024k')024k'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(80)
    .EUt(1920)

  event.recipes.susy.mods.gregtech.assembler('pv1xd12bfz0iw4') // remapped from original line 949
    .itemInputs(safeItemId('2x extracells:storage.component', ')))
    .itemInputs('2x #forge:wires/fine_silver')
    .itemInputs(safeItemId('2x appliedenergistics2:crafting_unit'):crafting_unit'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('4096x extracpus:crafting_storage_4096k')096k'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(80)
    .EUt(1920)

  event.recipes.susy.mods.gregtech.assembler('erwcbqbcsoh0bu') // remapped from original line 960
    .itemInputs(safeItemId('3x extracells:storage.component', ')))
    .itemInputs('2x #forge:wires/fine_silver')
    .itemInputs(safeItemId('2x appliedenergistics2:crafting_unit'):crafting_unit'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('16384x extracpus:crafting_storage_16384k')6384k'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(80)
    .EUt(1920)

  event.recipes.susy.mods.gregtech.circuit_assembler('3qdkbhzny3uixv') // remapped from original line 971
    .itemInputs(metaitem('circuit_board.plastic'))
    .itemInputs('1x #forge:circuits/hv')
    .itemInputs('4x #forge:wires/fine_electrum')
    .inputFluids(solder)
    .itemOutputs(safeItemId('2x appliedenergistics2:material:25'):material:25'))
    .duration(80)
    .EUt(1920)

  event.recipes.susy.mods.gregtech.circuit_assembler('3ymt8ovw1crju9') // remapped from original line 981
    .itemInputs(metaitem('circuit_board.advanced'))
    .itemInputs('1x #forge:circuits/ev')
    .itemInputs('4x #forge:wires/fine_platinum')
    .inputFluids(solder)
    .itemOutputs(safeItemId('2x appliedenergistics2:material:28'):material:28'))
    .duration(80)
    .EUt(1920)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (name in name_removals) {
  //     crafting.remove(name)
  // }

  // Globals.wireCoatings.each { key, val ->
  //         mods.gregtech.assembler.recipeBuilder()
  //                 .inputs(item('appliedenergistics2:part', 16))
  //                 .circuitMeta(1)
  //                 .fluidInputs(fluid(key) * val)
  //                 .outputs(item('appliedenergistics2:part', 36))
  //                 .duration(40)
  //                 .EUt(Globals.voltAmps[2])
  //                 .buildAndRegister()
  // 
  //         mods.gregtech.assembler.recipeBuilder()
  //                 .inputs(item('appliedenergistics2:part', 16))
  //                 .inputs(ore('wireFineBorosilicateGlass'))
  //                 .circuitMeta(2)
  //                 .fluidInputs(fluid(key) * val)
  //                 .outputs(item('appliedenergistics2:part', 56))
  //                 .duration(40)
  //                 .EUt(Globals.voltAmps[2])
  //                 .buildAndRegister()
  // }

  // for(quartz in quartz_dusts) {
  //         mods.gregtech.electric_blast_furnace.recipeBuilder()
  //                 .inputs(ore(quartz) * 60)
  //                 .circuitMeta(1)
  //                 .outputs(item('appliedenergistics2:quartz_glass') * 60)
  //                 .blastFurnaceTemp(2500)
  //                 .duration(1200)
  //                 .EUt(60)
  //                 .buildAndRegister();
  // 
  //         mods.gregtech.electric_blast_furnace.recipeBuilder()
  //                 .inputs(ore(quartz) * 60)
  //                 .inputs(ore('dustGlowstone') * 1)
  //                 .outputs(item('appliedenergistics2:quartz_vibrant_glass') * 60)
  //                 .blastFurnaceTemp(2500)
  //                 .duration(1200)
  //                 .EUt(60)
  //                 .buildAndRegister();
  // }

  // for (circuit in circuits_list) {
  //         mods.gregtech.assembler.recipeBuilder()
  //                 .inputs(ore(circuit) * 4)
  //                 .inputs(ore('plateTitanium') * 8)
  //                 .inputs(item('appliedenergistics2:part:16') * 16)
  //                 .circuitMeta(1)
  //                 .fluidInputs(solder)
  //                 .outputs(item('appliedenergistics2:crafting_unit') * (4 << i))
  //                 .cleanroom(CleanroomType.CLEANROOM)
  //                 .duration(200)
  //                 .EUt(480 * (4 << i))
  //                 .buildAndRegister()
  //         i++
  // }

  // for (int n = 20; n < 36; n++) {
  //         mods.gregtech.chemical_bath.recipeBuilder()
  //                 .inputs(item('appliedenergistics2:part', n))
  //                 .outputs(item('appliedenergistics2:part', 36))
  //                 .fluidInputs(fluid('water') * 100)
  //                 .duration(20)
  //                 .EUt(Globals.voltAmps[0])
  //                 .buildAndRegister()
  // }

  // for (int n = 40; n < 56; n++) {
  //         mods.gregtech.chemical_bath.recipeBuilder()
  //                 .inputs(item('appliedenergistics2:part', n))
  //                 .outputs(item('appliedenergistics2:part', 56))
  //                 .fluidInputs(fluid('water') * 100)
  //                 .duration(20)
  //                 .EUt(Globals.voltAmps[0])
  //                 .buildAndRegister()
  // }

  // for (int n = 60; n < 76; n++) {
  //         mods.gregtech.chemical_bath.recipeBuilder()
  //                 .inputs(item('appliedenergistics2:part', n))
  //                 .outputs(item('appliedenergistics2:part', 76))
  //                 .fluidInputs(fluid('water') * 100)
  //                 .duration(20)
  //                 .EUt(Globals.voltAmps[0])
  //                 .buildAndRegister()
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import com.cleanroommc.groovyscript.api.GroovyLog
  // import gregtech.api.metatileentity.multiblock.CleanroomType
  // import globals.Globals
  // def solders = [
  //         fluid('soldering_alloy') * 72,
  //         fluid('tin') * 144
  // ]
  // */
  // def name_removals = [
  //         'appliedenergistics2:misc/grindstone_woodengear',
  //         'appliedenergistics2:decorative/quartz_glass',
  //         'appliedenergistics2:decorative/quartz_vibrant_glass',
  //         'appliedenergistics2:misc/meteors_sky_compass',
  //         'appliedenergistics2:network/blocks/crystal_processing_charger',
  //         'appliedenergistics2:network/cells/storage_components_cell_1k_part',
  //         'appliedenergistics2:network/cells/storage_components_cell_4k_part',
  //         'appliedenergistics2:network/cells/storage_components_cell_16k_part',
  //         'appliedenergistics2:network/cells/storage_components_cell_64k_part',
  //         'appliedenergistics2:network/cells/fluid_storage_components_cell_1k_part',
  //         'appliedenergistics2:network/cells/fluid_storage_components_cell_4k_part',
  //         'appliedenergistics2:network/cells/fluid_storage_components_cell_16k_part',
  //         'appliedenergistics2:network/cells/fluid_storage_components_cell_64k_part',
  //         'appliedenergistics2:network/cells/spatial_components',
  //         'appliedenergistics2:network/cells/spatial_components_0',
  //         'appliedenergistics2:network/cells/spatial_components_1',
  //         'appliedenergistics2:network/crafting/cpu_crafting_unit',
  //         'appliedenergistics2:network/crafting/cpu_crafting_accelerator',
  //         'appliedenergistics2:network/crafting/cpu_crafting_storage_1k',
  //         'appliedenergistics2:network/crafting/cpu_crafting_storage_4k',
  //         'appliedenergistics2:network/crafting/cpu_crafting_storage_16k',
  //         'appliedenergistics2:network/crafting/cpu_crafting_storage_64k',
  //         'appliedenergistics2:network/parts/oredict_storage_bus',
  //         'appliedenergistics2:materials/formationcore',
  //         'appliedenergistics2:materials/annihilationcore',
  //         'appliedenergistics2:materials/basiccard',
  //         'appliedenergistics2:materials/advancedcard',
  //         'extracells:storagecomponent/item/256k',
  //         'extracells:storagecomponent/item/1024k',
  //         'extracells:storagecomponent/item/4096k',
  //         'extracells:storagecomponent/item/16384k',
  //         'extracells:storagecomponent/fluid/256k',
  //         'extracells:storagecomponent/fluid/1024k',
  //         'extracells:storagecomponent/fluid/4096k',
  //         'appliedenergistics2:network/cells/storage_cell_1k',
  //         'appliedenergistics2:network/cells/storage_cell_4k',
  //         'appliedenergistics2:network/cells/storage_cell_16k',
  //         'appliedenergistics2:network/cells/storage_cell_64k',
  //         'appliedenergistics2:network/cells/fluid_storage_cell_1k',
  //         'appliedenergistics2:network/cells/fluid_storage_cell_4k',
  //         'appliedenergistics2:network/cells/fluid_storage_cell_16k',
  //         'appliedenergistics2:network/cells/fluid_storage_cell_64k',
  //         'appliedenergistics2:network/cells/spatial_storage_cell_2_cubed',
  //         'appliedenergistics2:network/cells/spatial_storage_cell_16_cubed',
  //         'appliedenergistics2:network/cells/spatial_storage_cell_128_cubed',
  //         'extracells:storagecells/item/owncasing/256k',
  //         'extracells:storagecells/item/owncasing/1024k',
  //         'extracells:storagecells/item/owncasing/4096k',
  //         'extracells:storagecells/item/owncasing/16384k',
  //         'extracells:storagecells/fluid/owncasing/256k',
  //         'extracells:storagecells/fluid/owncasing/1024k',
  //         'extracells:storagecells/fluid/owncasing/4096k',
  //         'extracells:storagecells/case/fluid',
  //         'extracells:storagecells/case/item',
  //         'appliedenergistics2:network/parts/export_bus',
  //         'appliedenergistics2:network/parts/export_bus_fluid',
  //         'appliedenergistics2:network/cells/empty_storage_cell',
  //         'appliedenergistics2:network/parts/level_emitter',
  //         'appliedenergistics2:network/parts/fluid_level_emitter',
  //         'appliedenergistics2:network/crafting/patterns_blank',
  //         'appliedenergistics2:network/parts/planes_formation_fluid',
  //         'appliedenergistics2:network/parts/planes_formation_fluid_alt',
  //         'appliedenergistics2:network/parts/planes_formation',
  //         'appliedenergistics2:network/parts/planes_formation_alt',
  //         'appliedenergistics2:network/parts/planes_annihilation_fluid',
  //         'appliedenergistics2:network/parts/planes_annihilation_fluid_alt',
  //         'appliedenergistics2:network/parts/planes_annihilation',
  //         'appliedenergistics2:network/parts/planes_annihilation_alt',
  //         'appliedenergistics2:network/parts/planes_annihilation_alt2',
  //         'appliedenergistics2:network/parts/planes_annihilatition_identity',
  //         'appliedenergistics2:network/parts/import_bus_fluid',
  //         'appliedenergistics2:network/parts/import_bus',
  //         'extracpus:crafting_storage_256k',
  //         'extracpus:crafting_storage_1024k',
  //         'extracpus:crafting_storage_4096k',
  //         'extracpus:crafting_storage_16384k',
  //         'appliedenergistics2:network/blocks/crystal_processing_quartz_growth_accelerator',
  //         'appliedenergistics2:network/blocks/energy_vibration_chamber',
  //         'appliedenergistics2:network/blocks/quantum_link',
  //         'appliedenergistics2:network/blocks/quantum_ring',
  //         'appliedenergistics2:misc/tiny_tnt',
  //         'appliedenergistics2:network/blocks/inscribers',
  //         'appliedenergistics2:misc/fluixpearl',
  //         'ae2wtlib:booster_card_new',
  //         'threng:aggregator',
  //         'threng:centrifuge',
  //         'threng:etcher',
  //         'threng:energizer',
  //         'appliedenergistics2:network/parts/tunnels_me',
  //         'threng:ma_vent',
  //         'threng:ma_frame',
  //         'threng:ma_controller',
  //         'threng:ma_mod_pattern',
  //         'threng:ma_mod_cpu',
  //         'threng:ma_io_port',
  //         'appliedenergistics2:network/blocks/energy_energy_cell',
  //         'appliedenergistics2:network/blocks/energy_dense_energy_cell',
  //         'appliedenergistics2:network/cables/covered_fluix',
  //         'appliedenergistics2:network/cables/smart_fluix',
  //         'appliedenergistics2:network/wireless_part',
  //         'appliedenergistics2:network/parts/toggle_bus',
  //         'appliedenergistics2:network/cables/glass_fluix',
  //         'appliedenergistics2:network/parts/quartz_fiber_part',
  //         'threng:pau',
  //         'threng:level_maintainer',
  //         'appliedenergistics2:misc/seeds_certus',
  //         'appliedenergistics2:misc/seeds_nether',
  //         'appliedenergistics2:misc/seeds_fluix',
  //         'appliedenergistics2:network/blocks/controller',
  //         'appliedenergistics2:network/blocks/io_condenser',
  //         'appliedenergistics2:network/blocks/spatial_io_pylon',
  //         'appliedenergistics2:tools/network_biometric_card',
  //         'appliedenergistics2:tools/network_memory_card',
  //         'appliedenergistics2:network/wireless_booster'
  // ]
  // crafting.replaceShaped('appliedenergistics2:decorative/quartz_fixture', item('appliedenergistics2:quartz_fixture') * 1, [
  //         [null, null, null],
  //         [item('appliedenergistics2:material'), ore('ringIron'), null],
  //         [null, null, null]
  // ])
  // crafting.replaceShaped('appliedenergistics2:decorative/light_detector', item('appliedenergistics2:light_detector') * 1, [
  //         [null, null, null],
  //         [ore('gemNetherQuartz'), ore('ringIron'), null],
  //         [null, null, null]
  // ])
  // crafting.replaceShaped('appliedenergistics2:network/wireless_access_point', item('appliedenergistics2:wireless_access_point'), [
  //         [null, metaitem('emitter.ev'), null],
  //         [metaitem('sensor.ev'), ore('circuitEv'), null],
  //         [null, null, item('appliedenergistics2:part:16')]
  // ])
  // crafting.replaceShaped('appliedenergistics2:network/blocks/security_station', item('appliedenergistics2:security_station'), [
  //         [ore('plateTitanium'), item('appliedenergistics2:chest'), ore('plateTitanium')],
  //         [item('appliedenergistics2:part:16'), ore('circuitEv'), item('appliedenergistics2:part:16')],
  //         [ore('plateTitanium'), ore('plateTitanium'), ore('plateTitanium')]
  // ])
  // crafting.replaceShaped('appliedenergistics2:network/blocks/storage_drive', item('appliedenergistics2:drive'), [
  //         [ore('plateTitanium'), ore('circuitEv'), ore('plateTitanium')],
  //         [item('appliedenergistics2:part:16'), null, item('appliedenergistics2:part:16')],
  //         [ore('plateTitanium'), ore('circuitEv'), ore('plateTitanium')]
  // ])
  // crafting.replaceShaped('appliedenergistics2:network/blocks/storage_chest', item('appliedenergistics2:chest'), [
  //         [ore('plateGlass'), item('appliedenergistics2:part:380'), ore('plateGlass')],
  //         [item('appliedenergistics2:material:43'), null, item('appliedenergistics2:material:44')],
  //         [ore('plateTitanium'), ore('circuitEv'), ore('plateTitanium')]
  // ])
  // crafting.replaceShaped('appliedenergistics2:network/blocks/interfaces_interface', item('appliedenergistics2:interface'), [
  //         [ore('plateTitanium'), item('appliedenergistics2:part:16'), ore('plateTitanium')],
  //         [item('appliedenergistics2:material:44'), metaitem('robot.arm.ev'), item('appliedenergistics2:material:43')],
  //         [ore('plateTitanium'), item('appliedenergistics2:part:16'), ore('plateTitanium')]
  // ])
  // crafting.replaceShaped('appliedenergistics2:network/blocks/fluid_interfaces_interface', item('appliedenergistics2:fluid_interface'), [
  //         [ore('plateTitanium'), item('appliedenergistics2:part:16'), ore('plateTitanium')],
  //         [item('appliedenergistics2:material:44'), metaitem('electric.pump.ev'), item('appliedenergistics2:material:43')],
  //         [ore('plateTitanium'), item('appliedenergistics2:part:16'), ore('plateTitanium')]
  // ])
  // crafting.replaceShaped('appliedenergistics2:network/blocks/io_port', item('appliedenergistics2:io_port'), [
  //         [ore('plateGlass'), ore('plateGlass'), ore('plateGlass')],
  //         [item('appliedenergistics2:part:16'), item('appliedenergistics2:drive'), item('appliedenergistics2:part:16')],
  //         [ore('plateTitanium'), ore('circuitEv'), ore('plateTitanium')]
  // ])
  // crafting.replaceShaped('appliedenergistics2:network/blocks/spatial_io_port', item('appliedenergistics2:spatial_io_port'), [
  //         [ore('plateGlass'), ore('plateGlass'), ore('plateGlass')],
  //         [item('appliedenergistics2:part:16'), item('appliedenergistics2:io_port'), item('appliedenergistics2:part:16')],
  //         [ore('plateTitanium'), ore('circuitEv'), ore('plateTitanium')]
  // ])
  // crafting.replaceShaped('appliedenergistics2:network/blocks/cell_workbench', item('appliedenergistics2:cell_workbench'), [
  //         [ore('plateTitanium'), ore('circuitEv'), ore('plateTitanium')],
  //         [ore('plateTitanium'), ore('chestWood'), ore('plateTitanium')],
  //         [ore('plateTitanium'), ore('plateTitanium'), ore('plateTitanium')]
  // ])
  // crafting.replaceShaped('appliedenergistics2:network/blocks/energy_energy_acceptor', item('appliedenergistics2:energy_acceptor'), [
  //         [ore('plateTitanium'), item('appliedenergistics2:part:16'), ore('plateTitanium')],
  //         [item('appliedenergistics2:part:16'), metaitem('energy_hatch.input.ev'), item('appliedenergistics2:part:16')],
  //         [ore('plateTitanium'), item('appliedenergistics2:part:16'), ore('plateTitanium')]
  // ])
  // crafting.replaceShaped('appliedenergistics2:network/parts/export_bus', item('appliedenergistics2:part:260'), [
  //         [null, null, null],
  //         [ore('plateTitanium'), item('appliedenergistics2:material:43'), ore('plateTitanium')],
  //         [ore('plateTitanium'), metaitem('conveyor.module.ev'), ore('plateTitanium')]
  // ])
  // crafting.replaceShaped('appliedenergistics2:network/parts/export_bus_fluid', item('appliedenergistics2:part:261'), [
  //         [null, null, null],
  //         [ore('plateTitanium'), item('appliedenergistics2:material:43'), ore('plateTitanium')],
  //         [ore('plateTitanium'), metaitem('electric.pump.ev'), ore('plateTitanium')]
  // ])
  // crafting.replaceShaped('appliedenergistics2:network/parts/panels_semi_dark_monitor', item('appliedenergistics2:part:180'), [
  //         [null, null, null],
  //         [item('appliedenergistics2:part:16'), metaitem('cover.screen'), item('appliedenergistics2:part:16')],
  //         [null, null, null]
  // ])
  // crafting.replaceShaped('appliedenergistics2:network/parts/terminals', item('appliedenergistics2:part:380'), [
  //         [null, null, null],
  //         [item('appliedenergistics2:material:43'), ore('itemIlluminatedPanel'), item('appliedenergistics2:material:44')],
  //         [null, item('appliedenergistics2:part:16'), null]
  // ])
  // crafting.replaceShaped('appliedenergistics2:network/crafting/molecular_assembler', item('appliedenergistics2:molecular_assembler'), [
  //         [ore('plateTitanium'), ore('plateGlass'), ore('plateTitanium')],
  //         [ore('plateGlass'), metaitem('pattern.processor'), ore('plateGlass')],
  //         [ore('plateTitanium'), ore('plateGlass'), ore('plateTitanium')]
  // ])
  // crafting.replaceShapeless('appliedenergistics2:network/parts/terminals_interface', item('appliedenergistics2:part:480'), [ore('itemIlluminatedPanel'), item('appliedenergistics2:interface')])
  // crafting.replaceShapeless('appliedenergistics2:network/parts/terminals_crafting', item('appliedenergistics2:part:360'), [item('appliedenergistics2:part:380'), item('minecraft:crafting_table')])
  // crafting.replaceShapeless('appliedenergistics2:network/parts/storage_bus', item('appliedenergistics2:part', 220), [item('appliedenergistics2:interface'), metaitem('conveyor.module.ev')])
  // crafting.replaceShapeless('appliedenergistics2:network/parts/storage_bus_fluid', item('appliedenergistics2:part', 221), [item('appliedenergistics2:fluid_interface'), metaitem('electric.pump.ev')])
  // crafting.replaceShapeless('appliedenergistics2:materials/cardredstone', item('appliedenergistics2:material:26'), [item('appliedenergistics2:material:25')])
  // crafting.replaceShapeless('appliedenergistics2:materials/cardcrafting', item('appliedenergistics2:material:53'), [item('appliedenergistics2:material:26')])
  // crafting.replaceShapeless('appliedenergistics2:materials/cardcapacity', item('appliedenergistics2:material:27'), [item('appliedenergistics2:material:53')])
  // crafting.replaceShapeless('appliedenergistics2:materials/cardspeed', item('appliedenergistics2:material:30'), [item('appliedenergistics2:material:28')])
  // crafting.replaceShapeless('appliedenergistics2:materials/cardpatternexpansion', item('appliedenergistics2:material:58'), [item('appliedenergistics2:material:30')])
  // crafting.replaceShapeless('appliedenergistics2:materials/cardinverter', item('appliedenergistics2:material:31'), [item('appliedenergistics2:material:58')])
  // crafting.replaceShapeless('appliedenergistics2:materials/cardfuzzy', item('appliedenergistics2:material:29'), [item('appliedenergistics2:material:31')])
  // crafting.replaceShapeless('appliedenergistics2:network/cells/view_cell_storage', item('appliedenergistics2:view_cell'), [item('appliedenergistics2:material', 39), metaitem('cover.screen')])
  // crafting.replaceShapeless('appliedenergistics2:network/parts/terminals_pattern', item('appliedenergistics2:part', 340), [item('appliedenergistics2:part', 360), item('appliedenergistics2:interface')])
  // crafting.replaceShapeless('appliedenergistics2:network/parts/terminals_fluid', item('appliedenergistics2:part', 520), [item('appliedenergistics2:part', 380), ore('bucket')])
  // crafting.replaceShaped('appliedenergistics2:network/parts/terminal_expanded_processing', item('appliedenergistics2:part', 341), [
  //         [null, null, null],
  //         [item('appliedenergistics2:part', 340), item('appliedenergistics2:part', 16), item('appliedenergistics2:part', 340)],
  //         [null, null, null]
  // ])
  // crafting.replaceShaped('appliedenergistics2:network/cables/dense_smart_fluix', item('appliedenergistics2:part', 76), [
  //         [item('appliedenergistics2:part', 56), item('appliedenergistics2:part', 56), null],
  //         [item('appliedenergistics2:part', 56), item('appliedenergistics2:part', 56), null],
  //         [null, null, null]
  // ])
  // crafting.replaceShaped('appliedenergistics2:network/parts/cable_anchor', item('appliedenergistics2:part', 120) * 4, [
  //         [ore('boltSteel'), ore('boltSteel'), null],
  //         [null, null, null],
  //         [null, null, null]
  // ])
  // crafting.replaceShaped('appliedenergistics2:network/wireless_terminal', item('appliedenergistics2:wireless_terminal'), [
  //         [null, item('appliedenergistics2:wireless_access_point'), null],
  //         [null, item('appliedenergistics2:part', 380), null],
  //         [null, item('appliedenergistics2:dense_energy_cell'), null]
  // ])
  // crafting.replaceShaped('appliedenergistics2:tools/network_tool', item('appliedenergistics2:network_tool'), [
  //         [ore('itemIlluminatedPanel'), ore('chestWood'), null],
  //         [ore('itemQuartzWrench'), ore('circuitEv'), null],
  //         [null, null, null]
  // ])
  // crafting.replaceShaped('appliedenergistics2:tools/network_color_applicator', item('appliedenergistics2:color_applicator'), [
  //         [item('appliedenergistics2:material', 43), ore('plateTitanium'), null],
  //         [ore('plateTitanium'), item('appliedenergistics2:material', 36), null],
  //         [null, null, item('appliedenergistics2:energy_cell')]
  // ])
  // crafting.replaceShaped('appliedenergistics2:tools/matter_cannon', item('appliedenergistics2:matter_cannon'), [
  //         [ore('plateTitanium'), ore('plateTitanium'), item('appliedenergistics2:material', 43)],
  //         [item('appliedenergistics2:material', 36), item('appliedenergistics2:energy_cell'), null],
  //         [ore('plateTitanium'), null, null]
  // ])
  // crafting.replaceShaped('appliedenergistics2:tools/misctools_charged_staff', item('appliedenergistics2:charged_staff'), [
  //         [metaitem('emitter.ev'), null, null],
  //         [null, ore('stickTitanium'), null],
  //         [null, null, item('appliedenergistics2:energy_cell')]
  // ])
  // crafting.replaceShaped('appliedenergistics2:tools/misctools_entropy_manipulator', item('appliedenergistics2:entropy_manipulator'), [
  //         [metaitem('emitter.ev'), item('appliedenergistics2:material', 43), null],
  //         [item('appliedenergistics2:material', 44), ore('stickTitanium'), null],
  //         [null, null, item('appliedenergistics2:energy_cell')]
  // ])
  // def quartz_dusts = [
  //         'dustCertusQuartz',
  //         'dustNetherQuartz',
  //         'dustQuartzite'
  // ]
  // def circuits_list = [
  //         'circuitEv',
  //         'circuitIv',
  //         'circuitLuv',
  //         'circuitZpm',
  //         'circuitUv'
  // ]
  // int i = 0
  // solder = fluid('soldering_alloy') * 72
});