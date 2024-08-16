ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/coal'})
  event.remove({ type: 'gtceu:extractor', input: '#forge:dusts/monazite'})
  event.remove({ type: 'gtceu:mixer', input: '#forge:dusts/graphite' && '#forge:dusts/silicon' && '#forge:dusts/carbon' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/ilmenite' && '#forge:dusts/carbon'})
  event.remove({ type: 'gtceu:cutter', input: 'minecraft:stone' && safeFluidOf('gtceu:lubricant')})
  event.remove({ type: 'gtceu:cutter', input: 'minecraft:stone' && safeFluidOf('gtceu:distilled_water')})
  event.remove({ type: 'gtceu:cutter', input: 'minecraft:cobblestone' && safeFluidOf('gtceu:lubricant')})
  event.remove({ type: 'gtceu:cutter', input: 'minecraft:cobblestone' && safeFluidOf('gtceu:distilled_water')})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/titanium_trifluoride' && safeFluidOf('gtceu:hydrogen')})
  event.remove({ type: 'gtceu:fluid_heater', input: 'susy:circuit.integrated' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:fluid_solidifier', input: 'susy:shape.mold.plate' && safeFluidOf('susy:beryllium_oxide')})
  event.remove({ type: 'gtceu:compressor', input: '#forge:dusts/beryllium_oxide'})
  event.remove({ type: 'gtceu:forming_press', input: 'gregtech:transparent_casing' && '#forge:plates/polyvinyl_butyral'})
  event.remove({ type: 'gtceu:arc_furnace', input: 'gregtech:turbine_casing' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:macerator', input: 'gregtech:turbine_casing'})
  event.remove({ type: 'gtceu:mixer', input: '#forge:dusts/collagen' && safeFluidOf('gtceu:phosphoric_acid') && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:centrifuge', input: safeFluidOf('gtceu:gelatin_mixture')})
  event.remove({ type: 'gtceu:assembler', input: 'susy:cover.infinite_water' && 'susy:fluid_hatch.import.ev' && 'susy:electric.pump.ev'})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:wool' && '#forge:plates/wood'})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:wool' && '#forge:plates/wood'})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:wool' && '#forge:plates/wood'})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:wool' && '#forge:plates/wood'})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:wool' && '#forge:plates/wood'})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:wool' && '#forge:plates/wood'})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:wool' && '#forge:plates/wood'})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:wool' && '#forge:plates/wood'})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:wool' && '#forge:plates/wood'})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:wool' && '#forge:plates/wood'})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:wool' && '#forge:plates/wood'})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:wool' && '#forge:plates/wood'})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:wool' && '#forge:plates/wood'})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:wool' && '#forge:plates/wood'})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:wool' && '#forge:plates/wood'})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:wool' && '#forge:plates/wood'})
  event.remove({ type: 'minecraft:furnace', input: 'minecraft:iron_nugget'})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/caprolactam' && safeFluidOf('gtceu:nitrogen')})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/silicon' && '#forge:dusts/small_gallium_arsenide' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:assembler', input: '#forge:wires/gt_double_cupronickel' && '#forge:foils/bronze' && safeFluidOf('gtceu:tin_alloy')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:wires/gt_double_kanthal' && '#forge:foils/aluminium' && safeFluidOf('gtceu:copper')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:wires/gt_double_nichrome' && '#forge:foils/stainless_steel' && safeFluidOf('gtceu:aluminium')})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:gems/ruby'})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:gems/sapphire'})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:gems/green_sapphire'})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/green_sapphire'})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/sapphire'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/ferrochromium'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/stainless_steel'})
  event.remove({ type: 'gtceu:arc_furnace', input: 'susy:pyrolyse_oven' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:macerator', input: 'susy:pyrolyse_oven'})
  event.remove({ type: 'gtceu:assembler', input: '#forge:gems/lapotron' && 'susy:circuit.advanced_integrated'})
  event.remove({ type: 'gtceu:fluid_solidifier', input: 'susy:shape.mold.plate' && safeFluidOf('gtceu:carbon')})
  event.remove({ type: 'gtceu:alloy_smelter', input: '#forge:dusts/sulfur' && '#forge:dusts/raw_rubber'})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:ender_pearl' && '#forge:screws/steel' && 'susy:cover.item.detector' && '#forge:pipes/normal_item_brass'})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:ender_pearl' && '#forge:screws/steel' && 'susy:cover.fluid.detector' && '#forge:pipes/normal_fluid_bronze'})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:cauldron' && 'susy:electric.pump.hv' && 'susy:circuit.assembly'})
  event.remove({ type: 'gtceu:assembler', input: 'susy:cover.fluid.voiding' && 'susy:circuit.processor'})
  event.remove({ type: 'gtceu:assembler', input: 'susy:cover.item.voiding' && 'susy:circuit.processor'})
  event.remove({ type: 'gtceu:assembler', input: '#forge:plates/ender_pearl' && '#forge:plates/double_stainless_steel' && 'susy:sensor.hv' && 'susy:emitter.hv' && 'susy:electric.pump.hv' && safeFluidOf('gtceu:plastic')})
  event.remove({ type: 'gtceu:fluid_heater', input: 'susy:circuit.integrated' && safeFluidOf('gtceu:dissolved_calcium_acetate')})
  event.remove({ type: 'gtceu:mixer', input: '#forge:dusts/raw_rubber' && safeFluidOf('gtceu:concrete')})
  event.remove({ type: 'gtceu:macerator', input: 'minecraft:cobblestone'})
  event.remove({ type: 'gtceu:cutter', input: 'minecraft:stone' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:cutter', input: 'minecraft:cobblestone' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:forge_hammer', input: 'minecraft:stone'})
  event.remove({ type: 'gtceu:alloy_blast_smelter', input: '#forge:dusts/nickel' && '#forge:dusts/zinc' && '#forge:dusts/iron' && 'susy:circuit.integrated' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:alloy_blast_smelter', input: '#forge:dusts/yttrium' && '#forge:dusts/barium' && '#forge:dusts/copper' && 'susy:circuit.integrated' && safeFluidOf('gtceu:oxygen') && safeFluidOf('gtceu:argon')})
  event.remove({ type: 'gtceu:alloy_blast_smelter', input: '#forge:dusts/yttrium' && '#forge:dusts/barium' && '#forge:dusts/copper' && 'susy:circuit.integrated' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:alloy_blast_smelter', input: '#forge:dusts/barium' && '#forge:dusts/calcium' && '#forge:dusts/copper' && 'susy:circuit.integrated' && safeFluidOf('gtceu:mercury') && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:alloy_blast_smelter', input: '#forge:dusts/barium' && '#forge:dusts/calcium' && '#forge:dusts/copper' && 'susy:circuit.integrated' && safeFluidOf('gtceu:mercury') && safeFluidOf('gtceu:oxygen') && safeFluidOf('gtceu:nitrogen')})
  event.remove({ type: 'gtceu:alloy_blast_smelter', input: '#forge:dusts/indium' && '#forge:dusts/tin' && '#forge:dusts/barium' && '#forge:dusts/titanium' && '#forge:dusts/copper' && 'susy:circuit.integrated' && safeFluidOf('gtceu:oxygen') && safeFluidOf('gtceu:argon')})
  event.remove({ type: 'gtceu:alloy_blast_smelter', input: '#forge:dusts/indium' && '#forge:dusts/tin' && '#forge:dusts/barium' && '#forge:dusts/titanium' && '#forge:dusts/copper' && 'susy:circuit.integrated' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:alloy_blast_smelter', input: '#forge:dusts/samarium' && '#forge:dusts/iron' && '#forge:dusts/arsenic' && 'susy:circuit.integrated' && safeFluidOf('gtceu:oxygen') && safeFluidOf('gtceu:helium')})
  event.remove({ type: 'gtceu:alloy_blast_smelter', input: '#forge:dusts/samarium' && '#forge:dusts/iron' && '#forge:dusts/arsenic' && 'susy:circuit.integrated' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:circuit_assembler', input: 'susy:circuit_board.good' && 'susy:plate.simple_system_on_chip' && '#forge:bolts/red_alloy' && '#forge:wires/fine_tin' && safeFluidOf('gtceu:soldering_alloy')})
  event.remove({ type: 'gtceu:circuit_assembler', input: 'susy:circuit_board.good' && 'susy:plate.simple_system_on_chip' && '#forge:bolts/red_alloy' && '#forge:wires/fine_tin' && safeFluidOf('gtceu:tin')})
  event.remove({ type: 'gtceu:circuit_assembler', input: 'susy:circuit_board.plastic' && 'susy:plate.simple_system_on_chip' && '#forge:bolts/red_alloy' && '#forge:wires/fine_tin' && safeFluidOf('gtceu:soldering_alloy')})
  event.remove({ type: 'gtceu:circuit_assembler', input: 'susy:circuit_board.plastic' && 'susy:plate.simple_system_on_chip' && '#forge:bolts/red_alloy' && '#forge:wires/fine_tin' && safeFluidOf('gtceu:tin')})
  event.remove({ type: 'gtceu:circuit_assembler', input: 'susy:circuit_board.plastic' && 'susy:plate.central_processing_unit' && 'susy:component.resistor' && 'susy:component.capacitor' && 'susy:component.transistor' && '#forge:wires/fine_copper' && safeFluidOf('gtceu:soldering_alloy')})
  event.remove({ type: 'gtceu:circuit_assembler', input: 'susy:circuit_board.plastic' && 'susy:plate.central_processing_unit' && 'susy:component.resistor' && 'susy:component.capacitor' && 'susy:component.transistor' && '#forge:wires/fine_copper' && safeFluidOf('gtceu:tin')})
  event.remove({ type: 'gtceu:circuit_assembler', input: 'susy:circuit_board.plastic' && 'susy:plate.system_on_chip' && '#forge:wires/fine_copper' && '#forge:bolts/tin' && safeFluidOf('gtceu:soldering_alloy')})
  event.remove({ type: 'gtceu:circuit_assembler', input: 'susy:circuit_board.plastic' && 'susy:plate.system_on_chip' && '#forge:wires/fine_copper' && '#forge:bolts/tin' && safeFluidOf('gtceu:tin')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:plates/magnalium' && '#forge:frames/blue_steel' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/dark_ash'})
  event.remove({ type: 'susy:semi_fluid_generator', input: safeFluidOf('gtceu:sulfuric_heavy_fuel')})
  event.remove({ type: 'susy:semi_fluid_generator', input: safeFluidOf('gtceu:heavy_fuel')})
  event.remove({ type: 'gtceu:fluid_solidifier', input: 'susy:shape.mold.block' && safeFluidOf('gtceu:concrete')})
  event.remove({ type: 'gtceu:assembler', input: 'susy:cover.digital' && 'susy:wireless' && safeFluidOf('gtceu:plastic')})
  event.remove({ type: 'gtceu:arc_furnace', input: 'gregtech:turbine_casing' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: 'gregtech:turbine_casing' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: 'gregtech:turbine_casing' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:plates/steel' && '#forge:frames/steel' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:assembler', input: '#forge:rods/steel' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:macerator', input: 'gregtech:metal_casing'})
  event.remove({ type: 'gtceu:arc_furnace', input: 'gregtech:metal_casing' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:macerator', input: 'gregtech:boiler_casing'})
  event.remove({ type: 'gtceu:arc_furnace', input: 'gregtech:boiler_casing' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:macerator', input: 'gregtech:boiler_firebox_casing'})
  event.remove({ type: 'gtceu:arc_furnace', input: 'gregtech:boiler_firebox_casing' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:macerator', input: '#forge:frames/steel'})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:frames/steel' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:extractor', input: '#forge:frames/steel'})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:chest' && 'susy:hull.ulv' && 'susy:circuit.integrated' && safeFluidOf('gtceu:glue')})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:chest' && 'susy:hull.ulv' && 'susy:circuit.integrated' && safeFluidOf('gtceu:plastic')})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:chest' && 'susy:hull.ulv' && 'susy:circuit.integrated' && safeFluidOf('gtceu:polytetrafluoroethylene')})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:chest' && 'susy:hull.ulv' && 'susy:circuit.integrated' && safeFluidOf('gtceu:polybenzimidazole')})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:chest' && 'susy:hull.ulv' && 'susy:circuit.integrated' && safeFluidOf('gtceu:glue')})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:chest' && 'susy:hull.ulv' && 'susy:circuit.integrated' && safeFluidOf('gtceu:plastic')})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:chest' && 'susy:hull.ulv' && 'susy:circuit.integrated' && safeFluidOf('gtceu:polytetrafluoroethylene')})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:chest' && 'susy:hull.ulv' && 'susy:circuit.integrated' && safeFluidOf('gtceu:polybenzimidazole')})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:glass' && 'susy:hull.ulv' && 'susy:circuit.integrated' && safeFluidOf('gtceu:glue')})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:glass' && 'susy:hull.ulv' && 'susy:circuit.integrated' && safeFluidOf('gtceu:plastic')})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:glass' && 'susy:hull.ulv' && 'susy:circuit.integrated' && safeFluidOf('gtceu:polytetrafluoroethylene')})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:glass' && 'susy:hull.ulv' && 'susy:circuit.integrated' && safeFluidOf('gtceu:polybenzimidazole')})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:glass' && 'susy:hull.ulv' && 'susy:circuit.integrated' && safeFluidOf('gtceu:glue')})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:glass' && 'susy:hull.ulv' && 'susy:circuit.integrated' && safeFluidOf('gtceu:plastic')})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:glass' && 'susy:hull.ulv' && 'susy:circuit.integrated' && safeFluidOf('gtceu:polytetrafluoroethylene')})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:glass' && 'susy:hull.ulv' && 'susy:circuit.integrated' && safeFluidOf('gtceu:polybenzimidazole')})
  event.remove({ type: 'gtceu:macerator', input: 'gregtech:stone_smooth'})
  event.remove({ type: 'gtceu:macerator', input: 'gregtech:stone_smooth'})
  event.remove({ type: 'gtceu:mixer', input: safeFluidOf('gtceu:polyvinyl_acetate') && safeFluidOf('gtceu:methyl_acetate')})
  event.remove({ type: 'gtceu:mixer', input: safeFluidOf('gtceu:polyvinyl_acetate') && safeFluidOf('gtceu:acetone')})

  event.recipes.susy.mods.gregtech.assembler('5udzpaifuxklqu') // remapped from original line 263
    .itemInputs('3x #forge:plates/bronze')
    .itemInputs('2x #forge:rods/bronze')
    .itemInputs('1x #forge:gears/small_bronze')
    .itemInputs('2x #forge:pipes/tiny_fluid_bronze')
    .itemOutputs(metaitem('steam.piston'))
    .duration(100)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('vdikdfny0m3nlo') // remapped from original line 287
    .itemInputs('2x #forge:plates/bronze')
    .itemInputs('3x #forge:rods/bronze')
    .itemInputs('2x #forge:gears/small_bronze')
    .itemInputs(metaitem('steam.piston') * 2)
    .itemOutputs(metaitem('steam.motor'))
    .duration(100)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('ufzzzmy71kz9gt') // remapped from original line 309
    .itemInputs('1x #forge:screws/bronze')
    .itemInputs('1x #forge:rotors/bronze')
    .itemInputs('2x #forge:rings/iron')
    .itemInputs(metaitem('steam.motor'))
    .itemInputs('2x #forge:pipes/tiny_fluid_bronze')
    .itemOutputs(safeItemId('1x susy:pump.steam'))
    .duration(100)
    .EUt(30)

  event.recipes.susy.//mods.gregtech.alloy_smelter('yjlmrgz6et9wb0') // remapped from original line 415

  event.recipes.susy.mods.gregtech.mixer('usu8blhc0xaxb5') // remapped from original line 452
    .itemInputs('2x #forge:dusts/quicklime')
    .circuit(1)
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('5x #forge:dusts/calcium_hydroxide')
    .duration(20)
    .EUt(30)

  event.recipes.susy.mods.gregtech.fluid_solidifier('4ydgeree2feppk') // remapped from original line 463
    .inputFluids(safeFluidOf('gtceu:iron_iii_chloride', 144))
    .itemOutputs('1x #forge:dusts/iron_iii_chloride')
    .duration(30)
    .EUt(16)

  event.recipes.susy.mods.gregtech.fluid_solidifier('4lczregdzzzcu7') // remapped from original line 472
    .inputFluids(safeFluidOf('susy:chilled_lava', 1000))
    .notConsumable(metaitem('shape.mold.block'))
    .itemOutputs(safeItemId('1x minecraft:obsidian'))
    .duration(210)
    .EUt(16)

  event.recipes.susy.mods.gregtech.centrifuge('sywtht6ngeo6rz') // remapped from original line 482
    .inputFluids(safeFluidOf('gtceu:lava', 1000))
    .notConsumable('1x #forge:rods/steel')
    .itemOutputs(metaitem('mineral_wool') * 16)
    .duration(500)
    .EUt(30)

  event.recipes.susy.mods.gregtech.centrifuge('btgrzwrpdfufku') // remapped from original line 490
    .inputFluids(safeFluidOf('susy:chilled_lava', 1000))
    .notConsumable('1x #forge:rods/steel')
    .itemOutputs(metaitem('mineral_wool') * 16)
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('f01ea9rpyzixsc') // remapped from original line 498
    .inputFluids(safeFluidOf('gtceu:tin_alloy', 144))
    .itemInputs('8x #forge:wires/gt_double_cupronickel')
    .itemInputs(metaitem('mineral_wool') * 8)
    .itemInputs('8x #forge:foils/bronze')
    .itemOutputs(safeItemId('1x gregtech:wire_coil'))
    .duration(200)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('awialqcq7cvx6s') // remapped from original line 508
    .inputFluids(safeFluidOf('gtceu:copper', 144))
    .itemInputs('8x #forge:wires/gt_double_kanthal')
    .itemInputs(metaitem('mineral_wool') * 8)
    .itemInputs('8x #forge:foils/aluminium')
    .itemOutputs(safeItemId('1x gregtech:wire_coil', ')))
    .duration(300)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('jvntjqvewi1pk2') // remapped from original line 518
    .inputFluids(safeFluidOf('gtceu:aluminium', 144))
    .itemInputs('8x #forge:wires/gt_double_nichrome')
    .itemInputs(metaitem('mineral_wool') * 8)
    .itemInputs('8x #forge:foils/stainless_steel')
    .itemOutputs(safeItemId('2x gregtech:wire_coil', ')))
    .duration(400)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('wfdpbwmksykfov') // remapped from original line 530
    .itemInputs('4x #forge:plates/steel')
    .itemInputs('8x #forge:foils/aluminium')
    .itemInputs('8x #forge:foils/polypropylene')
    .itemOutputs(metaitem('hepa_filter'))
    .duration(80)
    .EUt(120)

  event.recipes.susy.mods.gregtech.assembler('3lwbydlzix3drt') // remapped from original line 547
    .itemInputs('4x #forge:rods/long_wood')
    .itemInputs('8x #forge:plates/wood')
    .itemInputs('16x #forge:plates/polyurethane')
    .itemInputs('64x #forge:threads/rayon')
    .itemInputs('8x #forge:springs/small_steel')
    .itemOutputs(safeItemId('1x minecraft:bed'))
    .duration(400)
    .EUt(960)

  event.recipes.susy.mods.gregtech.assembler('1kcrwgsmvwmey4') // remapped from original line 560
    .itemInputs('2x #forge:cables/gt_single_tin')
    .itemInputs(metaitem('graphite_electrode'))
    .itemInputs(metaitem('component.glass.tube') * 8)
    .itemOutputs(metaitem('carbon_arc_lamp') * 8)
    .duration(100)
    .EUt(30)

  event.recipes.susy.mods.gregtech.macerator('ykyek2jusr5hr6') // remapped from original line 571
    .itemInputs(safeItemId('1x susy:resource_block'))
    .itemOutputs('4x #forge:crusheds/bauxite')
    .chancedOutput('6700x #forge:dusts/stone', 6700, 800)
    .duration(400)
    .EUt(2)

  event.recipes.susy.mods.gregtech.centrifuge('nmn3citrk2gveh') // remapped from original line 581
    .inputFluids(safeFluidOf('susy:mud', 1000))
    .chancedOutput(safeItemId('2500x minecraft:clay'), 2500, 250)
    .chancedOutput(safeItemId('2500x minecraft:sand'), 2500, 250)
    .chancedOutput(safeItemId('2500x minecraft:gravel'), 2500, 250)
    .chancedOutput('2500x #forge:dusts/limestone', 2500, 250)
    .duration(20)
    .EUt(30)

  event.recipes.susy.mods.gregtech.fluid_solidifier('xuyvnfdb6pvbvo') // remapped from original line 591
    .inputFluids(safeFluidOf('susy:mud', 250))
    .notConsumable(metaitem('shape.mold.ball'))
    .itemOutputs(safeItemId('1x biomesoplenty:mudball'))
    .duration(40)
    .EUt(4)

  event.recipes.susy.mods.gregtech.sifter('hcydjtgbnjdtp1') // remapped from original line 613
    .itemInputs('3x #forge:dusts/pegmatite_tailings')
    .chancedOutput('5000x #forge:dusts/quartzite', 5000, 500)
    .chancedOutput('5000x #forge:dusts/quartzite', 5000, 500)
    .chancedOutput('5000x #forge:dusts/quartzite', 5000, 500)
    .chancedOutput('5000x #forge:dusts/quartzite', 5000, 500)
    .chancedOutput(safeItemId('1000x minecraft:emerald'), 1000, 250)
    .chancedOutput('1000x #forge:gems/tourmaline', 1000, 250)
    .duration(100)
    .EUt(30)

  event.recipes.susy.mods.gregtech.sifter('q8o1j4v6jn8rcg') // remapped from original line 625
    .itemInputs('3x #forge:dusts/granite_tailings')
    .chancedOutput('5000x #forge:dusts/quartzite', 5000, 500)
    .chancedOutput('5000x #forge:dusts/quartzite', 5000, 500)
    .chancedOutput('5000x #forge:dusts/quartzite', 5000, 500)
    .chancedOutput('5000x #forge:dusts/quartzite', 5000, 500)
    .duration(100)
    .EUt(30)

  event.recipes.susy.mods.gregtech.sifter('ea4woq8bwuqulu') // remapped from original line 635
    .itemInputs('3x #forge:dusts/limestone_tailings')
    .chancedOutput('5000x #forge:dusts/limestone', 5000, 500)
    .chancedOutput('5000x #forge:dusts/limestone', 5000, 500)
    .chancedOutput('5000x #forge:dusts/limestone', 5000, 500)
    .chancedOutput('5000x #forge:dusts/limestone', 5000, 500)
    .duration(100)
    .EUt(30)

  event.recipes.susy.mods.gregtech.sifter('qdtyne0f6ypvgz') // remapped from original line 645
    .itemInputs('3x #forge:dusts/ultramafic_tailings')
    .chancedOutput('5000x #forge:dusts/quartzite', 5000, 500)
    .chancedOutput('5000x #forge:dusts/quartzite', 5000, 500)
    .chancedOutput('5000x #forge:dusts/quartzite', 5000, 500)
    .chancedOutput('5000x #forge:dusts/quartzite', 5000, 500)
    .chancedOutput('2000x #forge:dusts/magnesia', 2000, 500)
    .chancedOutput('1000x #forge:dusts/magnetite', 1000, 500)
    .duration(100)
    .EUt(30)

  event.recipes.susy.mods.gregtech.sifter('c2jfa1iomi5n76') // remapped from original line 657
    .itemInputs('1x #forge:dusts/kimberlite')
    .chancedOutput('7500x #forge:dusts/ultramafic_tailings', 7500, 500)
    .chancedOutput(safeItemId('1000x minecraft:diamond'), 1000, 500)
    .chancedOutput('500x #forge:gems/pyrope', 500, 250)
    .chancedOutput('500x #forge:gems/almandine', 500, 250)
    .chancedOutput(safeItemId('4x minecraft:dye', ')), 500, 250)
    .chancedOutput('500x #forge:dusts/chromite', 500, 250)
    .duration(60)
    .EUt(30)

  event.recipes.susy.mods.gregtech.sifter('f69x1vb6oig7gq') // remapped from original line 669
    .itemInputs('1x #forge:dusts/corundum')
    .chancedOutput('7500x #forge:dusts/ultramafic_tailings', 7500, 500)
    .chancedOutput('1000x #forge:gems/ruby', 1000, 250)
    .chancedOutput('1000x #forge:gems/sapphire', 1000, 250)
    .duration(60)
    .EUt(30)

  event.recipes.susy.mods.gregtech.macerator('xj624w1wgb5uzr') // remapped from original line 678
    .itemInputs(safeItemId('2x susy:resource_block', ')))
    .itemOutputs('4x #forge:dusts/non_marine_evaporite')
    .duration(240)
    .EUt(7)

  event.recipes.susy.mods.gregtech.macerator('eqzgtyy78oiuwv') // remapped from original line 685
    .itemInputs(safeItemId('4x susy:resource_block', ')))
    .itemOutputs('4x #forge:dusts/sulfate_evaporite')
    .duration(240)
    .EUt(7)

  event.recipes.susy.mods.gregtech.macerator('fokr2sfuwadglh') // remapped from original line 692
    .itemInputs(safeItemId('5x susy:resource_block', ')))
    .itemOutputs('4x #forge:dusts/carbonate_evaporite')
    .duration(240)
    .EUt(7)

  event.recipes.susy.mods.gregtech.macerator('k4rhpgw6ivdidg') // remapped from original line 699
    .itemInputs(safeItemId('3x susy:resource_block', ')))
    .itemOutputs('4x #forge:dusts/halide_evaporite')
    .duration(240)
    .EUt(7)

  event.recipes.susy.mods.gregtech.macerator('qcpwmogvcf1n4z') // remapped from original line 706
    .itemInputs(safeItemId('12x susy:resource_block', 1')2))
    .itemOutputs('8x #forge:dusts/phosphorite')
    .duration(240)
    .EUt(7)

  event.recipes.susy.mods.gregtech.macerator('wwo4pxaju9psh4') // remapped from original line 713
    .itemInputs(safeItemId('13x susy:resource_block', 1')3))
    .itemOutputs('8x #forge:dusts/potash_concentrate')
    .duration(240)
    .EUt(7)

  event.recipes.susy.mods.gregtech.macerator('gqe3imakusdwls') // remapped from original line 720
    .itemInputs(safeItemId('14x susy:resource_block', 1')4))
    .itemOutputs('8x #forge:dusts/sulfur')
    .duration(240)
    .EUt(7)

  event.recipes.susy.mods.gregtech.sifter('odxvikcuhdslss') // remapped from original line 727
    .itemInputs('1x #forge:dusts/non_marine_evaporite')
    .chancedOutput('8000x #forge:dusts/salt', 8000, 500)
    .chancedOutput('7000x #forge:dusts/borax', 7000, 250)
    .chancedOutput('5000x #forge:dusts/trona', 5000, 250)
    .duration(60)
    .EUt(30)

  event.recipes.susy.mods.gregtech.sifter('lkfrnypiaedruz') // remapped from original line 736
    .itemInputs('1x #forge:dusts/sulfate_evaporite')
    .chancedOutput('8000x #forge:dusts/salt', 8000, 500)
    .chancedOutput('5000x #forge:dusts/gypsum', 5000, 250)
    .chancedOutput('5000x #forge:dusts/kieserite', 5000, 250)
    .chancedOutput('5000x #forge:dusts/langbeinite', 5000, 250)
    .chancedOutput('5000x #forge:dusts/polyhalite', 5000, 250)
    .duration(60)
    .EUt(30)

  event.recipes.susy.mods.gregtech.sifter('yyst70ndvfpb3v') // remapped from original line 747
    .itemInputs('1x #forge:dusts/carbonate_evaporite')
    .chancedOutput('8000x #forge:dusts/salt', 8000, 500)
    .chancedOutput('5000x #forge:dusts/dolomite', 5000, 250)
    .chancedOutput('5000x #forge:dusts/calcite', 5000, 250)
    .chancedOutput('5000x #forge:dusts/magnesite', 5000, 250)
    .chancedOutput('5000x #forge:dusts/trona', 5000, 250)
    .duration(60)
    .EUt(30)

  event.recipes.susy.mods.gregtech.sifter('kp9vmib31oxvu6') // remapped from original line 758
    .itemInputs('1x #forge:dusts/halide_evaporite')
    .chancedOutput('8000x #forge:dusts/salt', 8000, 500)
    .chancedOutput('8000x #forge:dusts/salt', 8000, 500)
    .chancedOutput('7000x #forge:dusts/carnallite', 7000, 250)
    .chancedOutput('5000x #forge:dusts/kainite', 5000, 250)
    .duration(60)
    .EUt(30)

  event.recipes.susy.mods.gregtech.centrifuge('zbv1t9g6b9jb7b') // remapped from original line 768
    .itemInputs('1x #forge:dusts/limestone')
    .itemOutputs('1x #forge:dusts/calcite')
    .duration(40)
    .EUt(30)

  event.recipes.susy.mods.gregtech.packer('9w8uiljfsmiysb') // remapped from original line 775
    .itemInputs(safeItemId('1x minecraft:sand'))
    .itemOutputs(metaitem('sand.dust') * 4)
    .duration(20)
    .EUt(7)

  event.recipes.susy.mods.gregtech.packer('quee5jcjjapxmh') // remapped from original line 782
    .itemInputs(metaitem('sand.dust') * 4)
    .itemOutputs(safeItemId('1x minecraft:sand'))
    .duration(20)
    .EUt(7)

  event.recipes.susy.latex_collector('9ldmkkyvpvwyiu') // remapped from original line 817
    .notConsumable(safeFluidOf('minecraft:water', 10))
    .outputFluids(safeFluidOf('susy:latex', 100))
    .blockStates("latex_logs", MetaBlocks.RUBBER_LOG.getBlockState())
    .duration(20)
    .EUt(7)

  event.recipes.susy.latex_collector('uhvtmt26t5ybyi') // remapped from original line 825
    .notConsumable(safeFluidOf('gtceu:distilled_water', 10))
    .outputFluids(safeFluidOf('gtceu:resin', 100))
    .blockStates("extractable_logs_1", Blocks.LOG.getBlockState())
    .duration(20)
    .EUt(7)

  event.recipes.susy.latex_collector('rnmzdtvetiwcsk') // remapped from original line 833
    .notConsumable(safeFluidOf('gtceu:lubricant', 10))
    .outputFluids(safeFluidOf('gtceu:resin', 100))
    .blockStates("extractable_logs_2", Blocks.LOG2.getBlockState())
    .duration(20)
    .EUt(7)

  event.recipes.gtceu.MIXER('cej54okuv5f7p0') // remapped from original line 845
    .itemInputs('1x #forge:dusts/rubber')
    .inputFluids(safeFluidOf('gtceu:concrete', 576))
    .outputFluids(safeFluidOf('gtceu:construction_foam', 8000))
    .duration(20)
    .EUt(16)

  event.recipes.gtceu.CENTRIFUGE('opreobn6rqs4kn') // remapped from original line 853
    .itemInputs('1x #forge:dusts/anthracite')
    .chancedOutput('9000x #forge:dusts/carbon', 9000, 0)
    .duration(80)
    .EUt(30)

  event.recipes.gtceu.CENTRIFUGE('b2jam7zemnuqje') // remapped from original line 860
    .itemInputs('1x #forge:dusts/coal')
    .chancedOutput('7500x #forge:dusts/carbon', 7500, 0)
    .duration(80)
    .EUt(30)

  event.recipes.gtceu.CENTRIFUGE('acbzznwye5sioh') // remapped from original line 867
    .itemInputs('1x #forge:dusts/charcoal')
    .chancedOutput('6000x #forge:dusts/carbon', 6000, 0)
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.CENTRIFUGE('fifxdspbtvbn9b') // remapped from original line 874
    .itemInputs('1x #forge:dusts/coke')
    .itemOutputs('1x #forge:dusts/carbon')
    .duration(60)
    .EUt(30)

  event.recipes.gtceu.CENTRIFUGE('ppeenzstednab6') // remapped from original line 881
    .itemInputs('1x #forge:dusts/diamond')
    .itemOutputs('1x #forge:dusts/carbon')
    .duration(40)
    .EUt(30)

  event.recipes.gtceu.CENTRIFUGE('shzpde5cpq6oye') // remapped from original line 888
    .itemInputs('1x #forge:dusts/graphite')
    .itemOutputs('1x #forge:dusts/carbon')
    .duration(40)
    .EUt(30)

  event.recipes.gtceu.CENTRIFUGE('bbsmyspaclfwql') // remapped from original line 895
    .itemInputs('3x #forge:dusts/magnalium')
    .itemOutputs('1x #forge:dusts/magnesium')
    .itemOutputs('2x #forge:dusts/aluminium')
    .duration(72)
    .EUt(30)

  event.recipes.susy.mods.gregtech.macerator('ycqdtkgqa6mmbx') // remapped from original line 933
    .itemInputs(ore('cobblestone'))
    .itemOutputs('1x #forge:dusts/stone')
    .duration(98)
    .EUt(2)

  event.recipes.susy.mods.gregtech.cutter('0q31y8nuyhimpn') // remapped from original line 943
    .itemInputs(ore('stone'))
    .itemOutputs(safeItemId('2x minecraft:stone_slab'))
    .duration(25)
    .EUt(7)

  event.recipes.susy.mods.gregtech.cutter('xgtcrczsuu1tvt') // remapped from original line 953
    .itemInputs(ore('cobblestone'))
    .itemOutputs(safeItemId('3x minecraft:stone_slab', ')) * 2)
    .duration(25)
    .EUt(7)

  event.recipes.susy.mods.gregtech.gas_collector('3acachnon9aafy') // remapped from original line 960
    .circuit(4)
    .outputFluids(safeFluidOf('gtceu:air', 10000))
    .dimension(10)
    .duration(200)
    .EUt(16)

  event.recipes.susy.mods.gregtech.forming_press('vls4zwgula0nsd') // remapped from original line 968
    .itemInputs(safeItemId('2x gregtech:transparent_casing'))
    .itemInputs('2x #forge:plates/polyvinyl_butyral')
    .itemInputs('2x #forge:plates/polycarbonate')
    .itemOutputs(safeItemId('2x gregtech:transparent_casing', ')))
    .duration(200)
    .EUt(480)

  event.recipes.susy.mods.gregtech.forming_press('mfk9aypki98f8e') // remapped from original line 980
    .itemInputs(safeItemId('1x minecraft:stone'))
    .itemOutputs(safeItemId('1x minecraft:cobblestone'))
    .duration(10)
    .EUt(16)

  event.recipes.susy.mods.gregtech.centrifuge('ols7z1mlhwgvsq') // remapped from original line 1080
    .inputFluids(safeFluidOf('susy:gtfo_soybean_oil', 1000))
    .outputFluids(safeFluidOf('gtceu:seed_oil', 1000))
    .duration(160)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('g2ujm5eqbt3kh5') // remapped from original line 1090
    .circuit(6)
    .itemInputs('2x #forge:rods/long_steel')
    .itemInputs('4x #forge:plates/steel')
    .itemInputs(safeItemId('4x gregtech:stone_smooth', ')))
    .itemOutputs(safeItemId('5x gregtech:turbine_casing', ')) * 4)
    .duration(50)
    .EUt(16)

  event.recipes.susy.mods.gregtech.centrifuge('unfvd8ex7w1i28') // remapped from original line 1103
    .itemInputs('1x #forge:dusts/dark_ash')
    .itemOutputs('1x #forge:dusts/ash')
    .itemOutputs('1x #forge:dusts/carbon')
    .duration(100)
    .EUt(6)

  event.recipes.susy.mods.gregtech.semi_fluid_generator('guqfm5ezp8zutd') // remapped from original line 1116
    .inputFluids(safeFluidOf('susy:sulfuric_diesel', 16))
    .duration(5)
    .EUt(-32)

  event.recipes.susy.mods.gregtech.semi_fluid_generator('a5xw4khzdizhxv') // remapped from original line 1122
    .inputFluids(safeFluidOf('gtceu:diesel', 8))
    .duration(15)
    .EUt(-32)

  event.recipes.susy.mods.gregtech.semi_fluid_generator('skzh1mpfuvqusv') // remapped from original line 1128
    .inputFluids(safeFluidOf('susy:sulfuric_fuel_oil', 16))
    .duration(7)
    .EUt(-32)

  event.recipes.susy.mods.gregtech.semi_fluid_generator('ad1jyrkctzfbch') // remapped from original line 1134
    .inputFluids(safeFluidOf('susy:fuel_oil', 8))
    .duration(21)
    .EUt(-32)

  event.recipes.susy.mods.gregtech.semi_fluid_generator('d3j8eonytpkkhw') // remapped from original line 1140
    .inputFluids(safeFluidOf('susy:sulfuric_refinery_gas', 16))
    .duration(4)
    .EUt(-32)

  event.recipes.susy.mods.gregtech.semi_fluid_generator('impdiusyegvbiv') // remapped from original line 1146
    .inputFluids(safeFluidOf('gtceu:refinery_gas', 8))
    .duration(12)
    .EUt(-32)

  event.recipes.susy.mods.gregtech.semi_fluid_generator('1usmfxypdaeuje') // remapped from original line 1152
    .inputFluids(safeFluidOf('susy:sulfuric_natural_gas', 16))
    .duration(4)
    .EUt(-32)

  event.recipes.susy.mods.gregtech.semi_fluid_generator('vowdqihtmjf4tl') // remapped from original line 1158
    .inputFluids(safeFluidOf('gtceu:natural_gas', 8))
    .duration(12)
    .EUt(-32)

  event.recipes.susy.mods.gregtech.semi_fluid_generator('qrfdce68stnia3') // remapped from original line 1164
    .inputFluids(safeFluidOf('gtceu:propane', 8))
    .duration(15)
    .EUt(-32)

  event.recipes.susy.mods.gregtech.semi_fluid_generator('cmlfjjkygcdb7t') // remapped from original line 1170
    .inputFluids(safeFluidOf('susy:gtfo_stearin', 8))
    .duration(15)
    .EUt(-32)

  event.recipes.susy.mods.gregtech.fluid_solidifier('kqiz7uhb47skkf') // remapped from original line 1179
    .notConsumable(metaitem('shape.mold.block'))
    .inputFluids(safeFluidOf('gtceu:concrete', 144))
    .itemOutputs(safeItemId('4x gregtech:stone_smooth', ')))
    .duration(20)
    .EUt(7)

  event.recipes.susy.mods.gregtech.arc_furnace('8gc6ojjwmwugcj') // remapped from original line 1187
    .inputFluids(safeFluidOf('gtceu:oxygen', 150))
    .itemInputs(safeItemId('5x gregtech:turbine_casing', ')) * 4)
    .itemOutputs('6x #forge:ingots/steel')
    .itemOutputs(safeItemId('4x gregtech:stone_smooth', ')))
    .duration(150)
    .EUt(30)

  event.recipes.susy.mods.gregtech.macerator('1mvivn5xnwhdvo') // remapped from original line 1196
    .itemInputs(safeItemId('5x gregtech:turbine_casing', ')) * 4)
    .itemOutputs('6x #forge:dusts/steel')
    .itemOutputs('1x #forge:dusts/concrete')
    .duration(150)
    .EUt(7)

  event.recipes.susy.mods.gregtech.assembler('uqx5ajnv1ymly2') // remapped from original line 1225
    .circuit(6)
    .itemInputs('6x #forge:plates/steel')
    .itemInputs('1x #forge:frames/gt_steel')
    .itemOutputs(safeItemId('4x gregtech:metal_casing', ')) * 4)
    .EUt(16)
    .duration(50)

  event.recipes.susy.mods.gregtech.assembler('jurxqma1fyxhzv') // remapped from original line 1243
    .circuit(4)
    .itemInputs('4x #forge:rods/steel')
    .itemOutputs('2x #forge:frames/steel')
    .EUt(7)
    .duration(60)

  event.recipes.susy.mods.gregtech.macerator('eibqljhcwzas5u') // remapped from original line 1290
    .itemInputs(safeItemId('4x gregtech:metal_casing', ')))
    .itemOutputs('7x #forge:dusts/small_steel')
    .duration(220)
    .EUt(7)

  event.recipes.susy.mods.gregtech.arc_furnace('su9kygwt4ehwqj') // remapped from original line 1297
    .itemInputs(safeItemId('4x gregtech:metal_casing', ')))
    .inputFluids(safeFluidOf('gtceu:oxygen', 224))
    .itemOutputs('15x #forge:nuggets/steel')
    .duration(220)
    .EUt(30)

  event.recipes.susy.mods.gregtech.macerator('gsbpv5imqaz6d3') // remapped from original line 1306
    .itemInputs(safeItemId('1x gregtech:boiler_casing', ')))
    .itemOutputs('4x #forge:dusts/steel')
    .duration(220)
    .EUt(7)

  event.recipes.susy.mods.gregtech.arc_furnace('od9uanok06efil') // remapped from original line 1313
    .itemInputs(safeItemId('1x gregtech:boiler_casing', ')))
    .inputFluids(safeFluidOf('gtceu:oxygen', 504))
    .itemOutputs('4x #forge:ingots/steel')
    .duration(220)
    .EUt(30)

  event.recipes.susy.mods.gregtech.macerator('prj7vkmh0tv96m') // remapped from original line 1322
    .itemInputs(safeItemId('1x gregtech:boiler_firebox_casing', ')))
    .itemOutputs('7x #forge:dusts/small_steel')
    .duration(220)
    .EUt(7)

  event.recipes.susy.mods.gregtech.arc_furnace('zi0rhcijgzsdw2') // remapped from original line 1329
    .itemInputs(safeItemId('1x gregtech:boiler_firebox_casing', ')))
    .inputFluids(safeFluidOf('gtceu:oxygen', 224))
    .itemOutputs('15x #forge:nuggets/steel')
    .duration(220)
    .EUt(30)

  event.recipes.susy.mods.gregtech.macerator('lzengouqtvt0il') // remapped from original line 1337
    .itemInputs('1x #forge:frames/steel')
    .itemOutputs('1x #forge:dusts/steel')
    .duration(220)
    .EUt(7)

  event.recipes.susy.mods.gregtech.arc_furnace('ufttz79sebmlvn') // remapped from original line 1344
    .itemInputs('1x #forge:frames/steel')
    .inputFluids(safeFluidOf('gtceu:oxygen', 112))
    .itemOutputs('1x #forge:ingots/steel')
    .duration(220)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('cd9tjzhvjqiqan') // remapped from original line 1353
    .itemInputs('4x #forge:foils/plastic')
    .inputFluids(safeFluidOf('gtceu:glue', 250))
    .itemOutputs(metaitem('basic_tape') * 8)
    .duration(100)
    .EUt(7)

  event.recipes.susy.mods.gregtech.assembler('tlkm9somaiqc4y') // remapped from original line 1361
    .itemInputs('4x #forge:foils/polypropylene')
    .inputFluids(safeFluidOf('gtceu:glue', 250))
    .itemOutputs(metaitem('basic_tape') * 16)
    .duration(100)
    .EUt(7)

  event.recipes.susy.mods.gregtech.macerator('p45slru1rjfpg9') // remapped from original line 1422
    .itemInputs(safeItemId('1x gregtech:stone_smooth'))
    .itemOutputs('1x #forge:dusts/granite_black')
    .duration(150)
    .EUt(2)

  event.recipes.susy.mods.gregtech.macerator('merzrxidrulm8q') // remapped from original line 1432
    .itemInputs(safeItemId('1x gregtech:stone_smooth',0')1))
    .itemOutputs('1x #forge:dusts/granite_red')
    .duration(150)
    .EUt(2)

  event.recipes.gtceu.MIXER('nvvxxcdwemtifq') // remapped from original line 1452
    .inputFluids(safeFluidOf('gtceu:polyvinyl_acetate', 144))
    .inputFluids(safeFluidOf('gtceu:methyl_acetate', 1500))
    .outputFluids(safeFluidOf('gtceu:glue', 1500))
    .duration(50)
    .EUt(7)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (name in name_removals) {
  //     crafting.remove(name)
  // }

  // for (name in ore_smelting_removals) {
  //     furnace.removeByInput(item('gregtech:ore_' + name + '_0', 0))
  //     furnace.removeByInput(item('gregtech:ore_' + name + '_0', 1))
  //     furnace.removeByInput(item('gregtech:ore_' + name + '_0', 2))
  // }

  // Globals.solders.each { key, val ->
  // 	mods.gregtech.assembler.recipeBuilder()
  // 		.inputs(metaitem('circuit_board.good'))
  // 		.inputs(metaitem('plate.integrated_logic_circuit'))
  // 		.inputs(ore('boltRedAlloy') * 2)
  // 		.inputs(ore('wireFineTin') * 2)
  // 		.fluidInputs(fluid(key) * val)
  // 		.outputs(metaitem('circuit.nand_chip') * 16)
  // 		.duration(10)
  // 		.EUt(16)
  // 		.buildAndRegister();
  // }

  // Globals.solders.each { key, val ->
  // 	mods.gregtech.assembler.recipeBuilder()
  // 		.inputs(metaitem('circuit_board.plastic'))
  // 		.inputs(metaitem('plate.integrated_logic_circuit'))
  // 		.inputs(ore('boltRedAlloy') * 2)
  // 		.inputs(ore('wireFineTin') * 2)
  // 		.fluidInputs(fluid(key) * val)
  // 		.outputs(metaitem('circuit.nand_chip') * 24)
  // 		.duration(10)
  // 		.EUt(16)
  // 		.buildAndRegister();
  // }

  // Globals.solders.each { key, val ->
  // 	mods.gregtech.circuit_assembler.recipeBuilder()
  // 		.inputs(metaitem('circuit_board.plastic'))
  // 		.inputs(metaitem('plate.central_processing_unit'))
  // 		.inputs(ore('componentResistor') * 2)
  // 		.inputs(ore('componentCapacitor') * 2)
  // 		.inputs(ore('componentTransistor') * 2)
  // 		.inputs(ore('wireFineCopper') * 2)
  // 		.fluidInputs(fluid(key) * val)
  // 		.outputs(metaitem('circuit.microprocessor') * 5)
  // 		.duration(200)
  // 		.EUt(60)
  // 		.buildAndRegister();
  // }

  // Globals.solders.each { key, val ->
  // 	mods.gregtech.circuit_assembler.recipeBuilder()
  // 		.inputs(metaitem('circuit_board.plastic'))
  // 		.inputs(metaitem('plate.system_on_chip'))
  // 		.inputs(ore('wireFineCopper') * 2)
  // 		.inputs(ore('boltTin') * 2)
  // 		.fluidInputs(fluid(key) * val)
  // 		.outputs(metaitem('circuit.microprocessor') * 10)
  // 		.duration(50)
  // 		.EUt(600)
  // 		.buildAndRegister();
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import globals.GroovyUtils
  // import gregtech.api.recipes.recipeproperties.RecipeProperty;
  // import gregtech.api.recipes.RecipeBuilder;
  // import gregtech.api.recipes.ingredients.GTRecipeInput;
  // import gregtech.api.recipes.ModHandler;
  // import gregtech.api.unification.material.Materials;
  // import gregtech.api.unification.ore.OrePrefix;
  // import gregtech.api.unification.stack.UnificationEntry;
  // import gregtech.common.blocks.MetaBlocks;
  // import gregtech.common.blocks.MetaBlocks.*;
  // import supersymmetry.api.capability.impl.PseudoMultiRecipeLogic;
  // import supersymmetry.api.recipes.builders.PseudoMultiRecipeBuilder;
  // import net.minecraft.init.Blocks;
  // log.infoMC("Running GregTech.groovy...")
  // def name_removals = [
  // 	'gregtech:cover_fluid_voiding',
  // 	'gregtech:cover_item_voiding',
  // 	'gregtech:fluid_filter_lapis',
  // 	'gregtech:fluid_filter_sodalite',
  // 	'gregtech:fluid_filter_lazurite',
  // 	'gregtech:comparator_certus',
  // 	'gregtech:gregtech.machine.world_accelerator.lv',
  // 	'gregtech:gregtech.machine.world_accelerator.mv',
  // 	'gregtech:gregtech.machine.world_accelerator.hv',
  // 	'gregtech:gregtech.machine.world_accelerator.ev',
  // 	'gregtech:gregtech.machine.world_accelerator.iv',
  // 	'gregtech:gregtech.machine.world_accelerator.luv',
  // 	'gregtech:gregtech.machine.world_accelerator.zpm',
  // 	'gregtech:gregtech.machine.world_accelerator.uv',
  // 	'gregtech:nano_helmet',
  // 	'gregtech:nano_chestplate',
  // 	'gregtech:nano_leggings',
  // 	'gregtech:nano_boots',
  // 	'gregtech:super_chest_lv',
  // 	'gregtech:super_chest_mv',
  // 	'gregtech:super_chest_hv',
  // 	'gregtech:super_chest_ev',
  // 	'gregtech:super_tank_lv',
  // 	'gregtech:super_tank_mv',
  // 	'gregtech:super_tank_hv',
  // 	'gregtech:super_tank_ev',
  // 	'gregtech:quantum_chest_iv',
  // 	'gregtech:quantum_chest_luv',
  // 	'gregtech:quantum_chest_zpm',
  // 	'gregtech:quantum_chest_uv',
  // 	'gregtech:quantum_chest_uhv',
  // 	'gregtech:quantum_tank_iv',
  // 	'gregtech:quantum_tank_luv',
  // 	'gregtech:quantum_tank_zpm',
  // 	'gregtech:quantum_tank_uv',
  // 	'gregtech:quantum_tank_uhv',
  // 	'gregtech:large_combustion_engine',
  // 	'gregtech:extreme_combustion_engine',
  // 	'gregtech:gregtech.machine.fisher.lv',
  // 	'gregtech:gregtech.machine.fisher.mv',
  // 	'gregtech:gregtech.machine.fisher.hv',
  // 	'gregtech:gregtech.machine.fisher.ev',
  // ]
  // def ore_smelting_removals = [
  //         'lapis',
  //         'emerald',
  //         'almandine',
  //         'lazurite',
  //         'pyrope',
  //         'spessartine',
  //         'sodalite',
  //         'grossular',
  //         'garnet_red',
  //         'apatite',
  //         'blue_topaz',
  //         'certus_quartz',
  //         'garnet_yellow',
  //         'olivine',
  //         'monazite',
  //         'vanadinite',
  //         'celestine',
  //         'green_sapphire',
  //         'sperrylite',
  //         'sapphire',
  //         'ruby',
  //         'proustite',
  //         'topaz',
  //         'lorandite',
  //         'fluorite',
  //         'realgar',
  //         'amethyst',
  //         'opal',
  //         'perovskite',
  //         'cinnabar',
  //         'fluorapatite',
  //         'diamond'
  // ]
  // crafting.addShapeless('gregtech:salt_water_bucket', item('forge:bucketfilled').withNbt(["FluidName": "salt_water", "Amount": 1000]), [item('minecraft:water_bucket').noreturn(), metaitem('dustSalt'), metaitem('dustSalt')])
  // crafting.addShaped('gregtech:pbf_bronze', metaitem('primitive_blast_furnace.bronze'), [
  //     [ore('craftingToolHardHammer'), ore('stickBronze'), ore('screwBronze')],
  //     [ore('plateBronze'), item('gregtech:metal_casing:1'), ore('stickBronze')],
  //     [ore('craftingToolScrewdriver'), ore('stickBronze'), ore('screwBronze')]
  // ])
  // crafting.addShaped('gregtech:high_pressure_latex_extractor', metaitem('latex_collector.steel'), [
  //         [metaitem('pipeSmallFluidSteel'), metaitem('susy:pump.steam'), metaitem('pipeSmallFluidSteel')],
  //         [metaitem('plateSteel'), metaitem('latex_collector.bronze'), metaitem('plateSteel')],
  //         [metaitem('plateWroughtIron'), metaitem('plateWroughtIron'), metaitem('plateWroughtIron')]
  // ])
  // crafting.addShaped('gregtech:steam_macerator', metaitem('steam_macerator_bronze'), [
  //     [metaitem('toolHeadBuzzSawSteel'), metaitem('pipeSmallFluidBronze'), metaitem('toolHeadBuzzSawSteel')],
  //     [metaitem('pipeSmallFluidBronze'), item('gregtech:steam_casing'), metaitem('pipeSmallFluidBronze')],
  //     [metaitem('steam.piston'), metaitem('pipeSmallFluidBronze'), metaitem('steam.piston')]
  // ])
  // crafting.addShaped('gregtech:co_bronze', metaitem('coke_oven'), [
  //     [item('gregtech:metal_casing:8'), ore('plateBronze'), item('gregtech:metal_casing:8')],
  //     [ore('plateBronze'), ore('craftingToolWrench'), ore('plateBronze')],
  //     [item('gregtech:metal_casing:8'), ore('plateBronze'), item('gregtech:metal_casing:8')]
  // ])
  // crafting.addShaped('gregtech:drum_wood', metaitem('drum.wood'), [
  //     [ore('craftingToolSoftHammer'), metaitem('rubber_drop'), ore('craftingToolSaw')],
  //     [ore('plankWood'), ore('stickLongBronze'), ore('plankWood')],
  //     [ore('plankWood'), ore('stickLongBronze'), ore('plankWood')]
  // ])
  // crafting.addShaped("pig_iron_tiny_pile_manual", metaitem('dustTinyPigIron'), [
  //         [ore('craftingToolHardHammer'), null],
  //         [null, metaitem('nuggetPigIron')]
  // ]);
  // crafting.addShaped("gregtech:steam_piston", metaitem('steam.piston'), [
  //     [ore('plateBronze'), ore('plateBronze'), ore('plateBronze')],
  //     [ore('pipeTinyFluidBronze'), ore('stickBronze'), ore('stickBronze')],
  //     [ore('pipeTinyFluidBronze'), ore('craftingToolHardHammer'), ore('gearSmallBronze')]
  // ])
  // crafting.addShaped("gregtech:steam_motor", metaitem('steam.motor'), [
  //     [ore('plateBronze'), ore('stickBronze'), ore('plateBronze')],
  //     [metaitem('gearSmallBronze'), ore('stickBronze'), metaitem('gearSmallBronze')],
  //     [metaitem('steam.piston'), ore('stickBronze'), metaitem('steam.piston')]
  // ]);
  // crafting.addShaped("gregtech:steam_conveyor", metaitem('susy:conveyor.steam'), [
  //     [ore('plateRubber'), ore('plateRubber'), ore('plateRubber')],
  //     [metaitem('steam.motor'), ore('gearSmallBronze'), metaitem('steam.motor')],
  //     [ore('plateRubber'), ore('plateRubber'), ore('plateRubber')]
  // ])
  // crafting.addShaped("gregtech:steam_pump_iron", metaitem('susy:pump.steam'), [
  //     [ore('screwBronze'), ore('rotorBronze'), ore('ringIron')],
  //     [ore('toolScrewdriver'), ore('pipeTinyFluidBronze'), ore('toolWrench')],
  //     [ore('ringIron'), metaitem('steam.motor'), ore('pipeTinyFluidBronze')]
  // ])
  // crafting.addShaped("gregtech:steam_pump_brass", metaitem('susy:pump.steam'), [
  //     [ore('screwBronze'), ore('rotorBronze'), ore('ringBrass')],
  //     [ore('toolScrewdriver'), ore('pipeTinyFluidBronze'), ore('toolWrench')],
  //     [ore('ringBrass'), metaitem('steam.motor'), ore('pipeTinyFluidBronze')]
  // ])
  // 		
  // crafting.replaceShaped("gregtech:steam_extractor_bronze", metaitem('steam_extractor_bronze'), [
  //     [ore('pipeSmallFluidBronze'), ore('pipeSmallFluidBronze'), ore('pipeSmallFluidBronze')],
  //     [metaitem('steam.piston'), item('gregtech:steam_casing'), ore('blockGlass')],
  //     [ore('pipeSmallFluidBronze'), ore('pipeSmallFluidBronze'), ore('pipeSmallFluidBronze')]
  // ])
  // crafting.replaceShaped("gregtech:steam_vacuum_chamber", metaitem('vacuum_chamber.bronze'), [
  //     [ore('pipeSmallFluidBronze'), ore('pipeSmallFluidBronze'), ore('pipeSmallFluidBronze')],
  //     [metaitem('susy:pump.steam'), item('gregtech:steam_casing'), ore('blockGlass')],
  //     [ore('pipeSmallFluidBronze'), ore('pipeSmallFluidBronze'), ore('pipeSmallFluidBronze')]
  // ])
  // crafting.replaceShaped('gregtech:steam_macerator_bronze', metaitem('steam_macerator_bronze'), [
  //     [ore('gemDiamond'), metaitem('pipeSmallFluidBronze'), ore('gemDiamond')],
  //     [metaitem('pipeSmallFluidBronze'), item('gregtech:steam_casing'), metaitem('pipeSmallFluidBronze')],
  //     [metaitem('steam.piston'), metaitem('pipeSmallFluidBronze'), metaitem('steam.piston')]
  // ])
  // crafting.replaceShaped("gregtech:steam_compressor_bronze", metaitem('steam_compressor_bronze'), [
  //     [ore('pipeSmallFluidBronze'), ore('pipeSmallFluidBronze'), ore('pipeSmallFluidBronze')],
  //     [metaitem('steam.piston'), item('gregtech:steam_casing'), metaitem('steam.piston')],
  //     [ore('pipeSmallFluidBronze'), ore('pipeSmallFluidBronze'), ore('pipeSmallFluidBronze')]
  // ])
  // crafting.replaceShaped("gregtech:steam_hammer_bronze", metaitem('steam_hammer_bronze'), [
  //     [ore('pipeSmallFluidBronze'), metaitem('steam.piston'), ore('pipeSmallFluidBronze')],
  //     [ore('pipeSmallFluidBronze'), item('gregtech:steam_casing'), ore('pipeSmallFluidBronze')],
  //     [ore('pipeSmallFluidBronze'), ore('craftingAnvil'), ore('pipeSmallFluidBronze')]
  // ])
  // crafting.replaceShaped("gregtech:steam_rock_breaker_bronze", metaitem('steam_rock_breaker_bronze'), [
  //     [metaitem('steam.piston'), ore('pipeSmallFluidBronze'), metaitem('steam.piston')],
  //     [ore('pipeSmallFluidBronze'), item('gregtech:steam_casing'), ore('pipeSmallFluidBronze')],
  //     [ore('gemDiamond'), ore('pipeSmallFluidBronze'), ore('gemDiamond')]
  // ])
  // crafting.replaceShaped("gregtech:gregtech.machine.lathe.lv", metaitem('gregtech:lathe.lv'), [
  //     [metaitem('cableGtSingleTin'),  ore('circuitLv'), metaitem('cableGtSingleTin')],
  //     [metaitem('electric.motor.lv'), metaitem('gregtech:hull.lv'), metaitem('toolHeadDrillSteel')],
  //     [ore('circuitLv'), metaitem('cableGtSingleTin'), metaitem('electric.piston.lv')]
  // ])
  // crafting.replaceShaped("gregtech:gregtech.machine.macerator.lv", metaitem('gregtech:macerator.lv'), [
  //     [metaitem('electric.piston.lv'), metaitem('electric.motor.lv') , metaitem('toolHeadBuzzSawSteel')],
  //     [metaitem('cableGtSingleTin'), metaitem('cableGtSingleTin'), metaitem('gregtech:hull.lv')],
  //     [ore('circuitLv'), ore('circuitLv'), metaitem('cableGtSingleTin')]
  // ])
  // crafting.replaceShaped("gregtech:gregtech.machine.cutter.lv", metaitem('gregtech:cutter.lv'), [
  //     [metaitem('cableGtSingleTin'), ore('circuitLv'), item('minecraft:glass')],
  // 	[metaitem('conveyor.module.lv'), metaitem('gregtech:hull.lv'), metaitem('toolHeadBuzzSawSteel')],
  // 	[ore('circuitLv'), metaitem('cableGtSingleTin'), metaitem('electric.motor.lv')]
  // ])
  // crafting.replaceShaped("gregtech:gregtech.machine.cutter.mv", metaitem('gregtech:cutter.mv'), [
  //     [metaitem('cableGtSingleCopper'), ore('circuitMv'), item('minecraft:glass')],
  // 	[metaitem('conveyor.module.mv'), metaitem('gregtech:hull.mv'), metaitem('toolHeadBuzzSawAluminium')],
  // 	[ore('circuitMv'), metaitem('cableGtSingleCopper'), metaitem('electric.motor.mv')]
  // ])
  // crafting.replaceShaped("gregtech:gregtech.machine.cutter.hv", metaitem('gregtech:cutter.hv'), [
  //     [metaitem('cableGtSingleGold'), ore('circuitHv'), item('gregtech:transparent_casing')],
  // 	[metaitem('conveyor.module.hv'), metaitem('gregtech:hull.hv'), metaitem('toolHeadBuzzSawVanadiumSteel')],
  // 	[ore('circuitHv'), metaitem('cableGtSingleGold'), metaitem('electric.motor.hv')]
  // ])
  // crafting.replaceShaped("gregtech:gregtech.machine.electrolyzer.lv", metaitem('gregtech:electrolyzer.lv'), [
  // 		[metaitem('wireGtSingleSilver'), item('minecraft:glass'), metaitem('wireGtSingleSilver')],
  // 		[metaitem('wireGtSingleSilver'), metaitem('gregtech:hull.lv'), metaitem('wireGtSingleSilver')],
  // 		[ore('circuitLv'), metaitem('cableGtSingleTin'), ore('circuitLv')]
  // ])
  // crafting.replaceShaped("gregtech:gregtech.machine.electrolyzer.mv", metaitem('gregtech:electrolyzer.mv'), [
  // 		[metaitem('wireGtSingleGold'), item('minecraft:glass'), metaitem('wireGtSingleGold')],
  // 		[metaitem('wireGtSingleGold'), metaitem('gregtech:hull.mv'), metaitem('wireGtSingleGold')],
  // 		[ore('circuitMv'), metaitem('cableGtSingleCopper'), ore('circuitMv')]
  // ])
  // furnace.add(metaitem('dustLimestone'), metaitem('dustQuicklime'))
  // crafting.addShapeless('convert_old_slaked_lime', metaitem('dustCalciumHydroxide'), [metaitem('slaked_lime')])
  // crafting.replaceShaped('gregtech:filter_casing', item('gregtech:cleanroom_casing', 1) * 2, [
  //         [item('minecraft:iron_bars'), item('minecraft:iron_bars'), item('minecraft:iron_bars')],
  //         [metaitem('electric.motor.mv'), metaitem('rotorSteel'), metaitem('electric.pump.mv')],
  //         [metaitem('frameSteel'), metaitem('hepa_filter'), metaitem('frameSteel')]
  // ])
  // crafting.replaceShaped('susy:home_block', item('susy:home_block'), [
  //         [null, ore('craftingToolFile'), null],
  //         [null, ore('stoneSmooth'), null],
  //         [null, null, null]
  // ])
  // crafting.addShapeless('susy:home_block_1', item('susy:home_block', 4), [item('susy:home_block', 0)])
  // crafting.addShapeless('susy:home_block_2', item('susy:home_block', 8), [item('susy:home_block', 4)])
  // crafting.addShapeless('susy:home_block_3', item('susy:home_block', 12), [item('susy:home_block', 8)])
  // crafting.addShapeless('susy:home_block_4', item('susy:home_block', 0), [item('susy:home_block', 12)])
  // crafting.addShaped('gregtech:fluid_filter_brass', metaitem('fluid_filter'), [
  //         [ore('foilZinc'), ore('foilZinc'), ore('foilZinc')],
  //         [ore('foilZinc'), ore('plateBrass'), ore('foilZinc')],
  //         [ore('foilZinc'), ore('foilZinc'), ore('foilZinc')]
  // ])
  // crafting.addShaped('gregtech:brass_drum', metaitem('drum.brass'), [
  //         [null, ore('craftingToolHardHammer'), null],
  //         [metaitem('plateBrass'), metaitem('stickLongBrass'), metaitem('plateBrass')],
  //         [metaitem('plateBrass'), metaitem('stickLongBrass'), metaitem('plateBrass')]
  // ])
  // crafting.addShaped('gregtech:electrolytic_cell', metaitem('electrolytic_cell'), [
  //         [ore('plateSteel'), ore('circuitLv'), ore('plateSteel')],
  //         [ore('wireGtQuadrupleTin'), metaitem('hull.lv'), ore('wireGtQuadrupleTin')],
  //         [ore('circuitLv'), ore('cableGtSingleTin'), ore('circuitLv')]
  // ])
  // crafting.addShaped('gregtech:prospector_lead_acid', metaitem('prospector.lv'), [
  //         [metaitem('emitter.lv'), ore('plateSteel'), metaitem('sensor.lv')],
  //         [ore('circuitLv'), ore('plateGlass'), ore('circuitLv')],
  //         [ore('plateSteel'), metaitem('battery.lead_acid'), ore('plateSteel')]
  // ])
  // LATEX_COLLECTOR = recipemap('latex_collector')
  // crafting.replaceShaped('gregtech:distillation_tower', metaitem('distillation_tower'), [
  //         [ore('circuitHv'), metaitem('pipeLargeFluidStainlessSteel'), ore('circuitHv')],
  //         [metaitem('electric.pump.hv'), metaitem('hull.mv'), metaitem('electric.pump.hv')],
  //         [ore('circuitHv'), metaitem('pipeLargeFluidStainlessSteel'), ore('circuitHv')]
  // ])
  // crafting.replaceShaped('gregtech:lv_magnet_lead_acid', metaitem('item_magnet.lv'), [
  //         [ore('stickSteelMagnetic'), ore('toolWrench'), ore('stickSteelMagnetic')],
  //         [ore('stickSteelMagnetic'), metaitem('battery.lead_acid'), ore('stickSteelMagnetic')],
  //         [ore('cableGtSingleTin'), ore('plateSteel'), ore('cableGtSingleTin')]
  // ])
  // crafting.replaceShaped('gregtech:lv_power_unit_lead_acid', metaitem('power_unit.lv'), [
  //         [ore('screwSteel'), null, ore('toolScrewdriver')],
  //         [ore('gearSmallSteel'), metaitem('electric.motor.lv'), ore('gearSmallSteel')],
  //         [ore('plateSteel'), metaitem('battery.lead_acid'), ore('plateSteel')]
  // ])
  // 	
  //         
  // crafting.replaceShaped("gregtech:casing_steel_solid", item('gregtech:metal_casing', 4) * 4, [
  //         [ore('plateSteel'), ore('craftingToolHardHammer'), ore('plateSteel')],
  //         [ore('plateSteel'), ore('frameGtSteel'), ore('plateSteel')],
  //         [ore('plateSteel'), ore('craftingToolWrench'), ore('plateSteel')]
  // ])
  // crafting.replaceShaped("gregtech:frame_steel", metaitem('frameSteel') * 4, [
  //         [ore('stickSteel'), ore('stickSteel'), ore('stickSteel')],
  //         [ore('stickSteel'), ore('craftingToolWrench'), ore('stickSteel')],
  //         [ore('stickSteel'), ore('stickSteel'), ore('stickSteel')]
  // ])
  // crafting.replaceShaped("gregtech:casing_steel_pipe", item('gregtech:boiler_casing', 1) * 4, [
  //         [ore('plateSteel'), ore('pipeNormalFluidSteel'), ore('plateSteel')],
  //         [ore('pipeNormalFluidSteel'), ore('frameGtSteel'), ore('pipeNormalFluidSteel')],
  //         [ore('plateSteel'), ore('pipeNormalFluidSteel'), ore('plateSteel')]
  // ])
  // crafting.replaceShaped("gregtech:casing_steel_firebox", item('gregtech:boiler_firebox_casing', 1) * 4, [
  //         [ore('plateSteel'), ore('stickSteel'), ore('plateSteel')],
  //         [ore('stickSteel'), ore('frameGtSteel'), ore('stickSteel')],
  //         [ore('plateSteel'), ore('stickSteel'), ore('plateSteel')]
  // ])
  // crafting.addShaped("gregtech:item_bus.import.ulv", metaitem('item_bus.import.ulv'), [
  // 		[null, ore('chestWood'), null],
  // 		[null, metaitem('hull.ulv'), null],
  // 		[null, null, null]
  // ])
  // crafting.addShaped("gregtech:item_bus.export.ulv", metaitem('item_bus.export.ulv'), [
  // 		[null, null, null],
  // 		[null, metaitem('hull.ulv'), null],
  // 		[null, ore('chestWood'), null]
  // ])
  // crafting.addShaped("gregtech:fluid_hatch.import.ulv", metaitem('fluid_hatch.import.ulv'), [
  // 		[null, item('minecraft:glass'), null],
  // 		[null, metaitem('hull.ulv'), null],
  // 		[null, null, null]
  // ])
  // crafting.addShaped("gregtech:fluid_hatch.export.ulv", metaitem('fluid_hatch.export.ulv'), [
  // 		[null, null, null],
  // 		[null, metaitem('hull.ulv'), null],
  // 		[null, item('minecraft:glass'), null]
  // ])
  // crafting.replaceShaped("gregtech:multiblock_builder", metaitem('tool.multiblock_builder'), [
  //         [ore('craftingToolWrench'), metaitem('robot.arm.ev'), metaitem('field.generator.hv')],
  //         [ore('screwStainlessSteel'), ore('stickPolytetrafluoroethylene'), metaitem('robot.arm.ev')],
  //         [ore('stickPolytetrafluoroethylene'), ore('screwStainlessSteel'), ore('craftingToolScrewdriver')]
  // ])
  // GroovyUtils.removeRecipesContainingFluid(mods.gregtech.assembler, fluid('polybenzimidazole'))
  // GroovyUtils.removeRecipesContainingFluid(mods.gregtech.autoclave, fluid('polybenzimidazole'))
  // GroovyUtils.removeRecipesContainingFluid(mods.gregtech.fluid_solidifier, fluid('polybenzimidazole'))
  // GroovyUtils.removeRecipesContainingFluid(mods.gregtech.assembly_line, fluid('polybenzimidazole'))
});