ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:redstone_torch') && safeItemId('minecraft:redstone') && safeFluidOf('gtceu:concrete')})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:planks') && safeItemId('minecraft:cobblestone') && safeItemId('minecraft:redstone') && '#forge:plates/bronze'})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:planks') && safeItemId('minecraft:cobblestone') && safeItemId('minecraft:redstone') && '#forge:plates/iron'})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:planks') && safeItemId('minecraft:cobblestone') && safeItemId('minecraft:redstone') && '#forge:plates/steel'})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:planks') && safeItemId('minecraft:cobblestone') && safeItemId('minecraft:redstone') && '#forge:plates/aluminium'})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:planks') && safeItemId('minecraft:cobblestone') && safeItemId('minecraft:redstone') && '#forge:plates/titanium'})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:stick') && safeItemId('minecraft:redstone') && '#forge:rods/gold' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:arc_furnace', input: safeItemId('minecraft:golden_rail') && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:cobblestone') && safeItemId('minecraft:bow') && safeItemId('minecraft:redstone')})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:cobblestone') && safeItemId('minecraft:redstone')})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:obsidian') && safeItemId('minecraft:diamond') && safeItemId('minecraft:book')})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:obsidian') && safeItemId('minecraft:ender_eye')})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:chorus_fruit_popped') && safeItemId('minecraft:blaze_rod')})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:ghast_tear') && safeItemId('minecraft:ender_eye') && safeFluidOf('gtceu:glass')})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:chest') && safeItemId('minecraft:shulker_shell')})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:stick') && safeItemId('minecraft:redstone') && '#forge:rods/gold'})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('biomesoplenty:bamboo') && safeItemId('minecraft:redstone') && '#forge:rods/gold' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:stick') && safeItemId('minecraft:redstone') && '#forge:rods/iron'})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:stick') && '#forge:rods/iron'})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:stick') && safeItemId('minecraft:redstone_torch') && '#forge:rods/iron'})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:magma_cream')})
  event.remove({ type: 'gtceu:chemical_bath', input: safeItemId('minecraft:ender_pearl') && safeFluidOf('gtceu:blaze')})
  event.remove({ type: 'gtceu:chemical_bath', input: safeItemId('minecraft:reeds') && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:chemical_bath', input: safeItemId('minecraft:reeds') && safeFluidOf('gtceu:distilled_water')})
  event.remove({ type: 'gtceu:chemical_bath', input: '#forge:dusts/wood' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:chemical_bath', input: '#forge:dusts/wood' && safeFluidOf('gtceu:distilled_water')})
  event.remove({ type: 'gtceu:macerator', input: safeItemId('minecraft:reeds')})
  event.remove({ type: 'gtceu:mixer', input: safeItemId('minecraft:sugar') && safeItemId('minecraft:red_mushroom') && safeItemId('minecraft:spider_eye')})
  event.remove({ type: 'gtceu:mixer', input: safeItemId('minecraft:sugar') && safeItemId('minecraft:brown_mushroom') && safeItemId('minecraft:spider_eye')})
  event.remove({ type: 'gtceu:mixer', input: safeItemId('minecraft:gunpowder') && safeItemId('minecraft:blaze_powder') && '#forge:dusts/coal'})
  event.remove({ type: 'gtceu:mixer', input: '#forge:dusts/saltpeter' && '#forge:dusts/sulfur' && '#forge:dusts/carbon' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:mixer', input: '#forge:dusts/saltpeter' && '#forge:dusts/sulfur' && '#forge:dusts/coal' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:mixer', input: '#forge:dusts/saltpeter' && '#forge:dusts/sulfur' && '#forge:dusts/charcoal' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:macerator', input: safeItemId('minecraft:golden_apple')})
  event.remove({ type: 'gtceu:arc_furnace', input: safeItemId('minecraft:golden_apple') && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:macerator', input: safeItemId('minecraft:rail')})
  event.remove({ type: 'gtceu:arc_furnace', input: safeItemId('minecraft:rail') && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:macerator', input: safeItemId('minecraft:golden_rail')})

  event.recipes.susy.mods.gregtech.assembler('dqkyqcxhsriive') // remapped from original line 370
    .itemInputs('1x #forge:wires/fine_red_alloy')
    .itemInputs('1x #forge:plates/stone')
    .itemInputs(safeItemId('2x minecraft:redstone_torch'))
    .itemOutputs(safeItemId('1x minecraft:repeater'))
    .duration(20)
    .EUt(16)

  event.recipes.susy.mods.gregtech.assembler('bctwnpakklfsyz') // remapped from original line 395
    .circuit(2)
    .itemInputs('12x #forge:rods/brass')
    .itemInputs('1x #forge:rods/wood')
    .itemInputs('1x #forge:wires/fine_red_alloy')
    .itemOutputs(safeItemId('12x minecraft:golden_rail'))
    .duration(100)
    .EUt(30)

  event.recipes.susy.mods.gregtech.arc_furnace('6mclttolcdi6yb') // remapped from original line 405
    .itemInputs(safeItemId('12x minecraft:golden_rail'))
    .inputFluids(safeFluidOf('gtceu:oxygen', 87))
    .itemOutputs('6x #forge:ingots/brass')
    .itemOutputs('1x #forge:nuggets/red_alloy')
    .duration(100)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('3rhkfgj8kvbwcm') // remapped from original line 414
    .circuit(10)
    .itemInputs(safeItemId('4x susy:cobblestone'))
    .itemInputs('3x #forge:planks/wood')
    .itemInputs('1x #forge:wires/fine_red_alloy')
    .itemInputs(safeItemId('1x susy:electric.piston.lv'))
    .itemOutputs(safeItemId('1x minecraft:piston'))
    .duration(20)
    .EUt(16)

  event.recipes.susy.mods.gregtech.assembler('cuk07c3hupwyie') // remapped from original line 427
    .circuit(11)
    .itemInputs(safeItemId('1x susy:cobblestone'))
    .itemInputs('1x #forge:springs/steel')
    .itemInputs(safeItemId('1x susy:string'))
    .itemInputs('1x #forge:wires/fine_red_alloy')
    .itemInputs(safeItemId('1x susy:electric.motor.lv'))
    .itemOutputs(safeItemId('1x minecraft:dispenser'))
    .duration(20)
    .EUt(16)

  event.recipes.susy.mods.gregtech.assembler('kcx0ksjayrgq3n') // remapped from original line 441
    .circuit(12)
    .itemInputs(safeItemId('1x susy:cobblestone'))
    .itemInputs('1x #forge:wires/fine_red_alloy')
    .itemInputs(safeItemId('1x susy:electric.piston.lv'))
    .itemOutputs(safeItemId('1x minecraft:dropper'))
    .duration(20)
    .EUt(16)

  event.recipes.susy.mods.gregtech.assembler('9pxn2gfp0r6der') // remapped from original line 469
    .itemInputs('1x #forge:rods/wood')
    .inputFluids(safeFluidOf('gtceu:steel', 144))
    .itemOutputs(safeItemId('16x minecraft:rail'))
    .duration(20)
    .EUt(10)

  event.recipes.susy.mods.gregtech.autoclave('y2s9wi4rfm86m9') // remapped from original line 481
    .itemInputs('1x #forge:dusts/wood')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 100))
    .itemOutputs('1x #forge:dusts/paper')
    .duration(200)
    .EUt(4)

  event.recipes.susy.mods.gregtech.autoclave('2scmnkrsuydwp3') // remapped from original line 489
    .itemInputs('1x #forge:dusts/wood')
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .itemOutputs('1x #forge:dusts/paper')
    .duration(200)
    .EUt(4)

  event.recipes.susy.mods.gregtech.centrifuge('r3n7vpaoa48zl5') // remapped from original line 501
    .itemInputs(safeItemId('1x susy:sugar_cane_dust'))
    .inputFluids(safeFluidOf('minecraft:water', 250))
    .itemOutputs('1x #forge:dusts/wood')
    .outputFluids(safeFluidOf('susy:sugary_water', 250))
    .duration(100)
    .EUt(7)

  event.recipes.susy.mods.gregtech.chemical_bath('egscrmighb4og8') // remapped from original line 524
    .itemInputs(safeItemId('1x minecraft:rotten_flesh'))
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .itemOutputs(safeItemId('1x susy:washed_rotten_flesh'))
    .duration(200)
    .EUt(4)

  event.recipes.susy.mods.gregtech.chemical_bath('tfczvpgyrs9ku8') // remapped from original line 532
    .itemInputs(safeItemId('1x minecraft:rotten_flesh'))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 100))
    .itemOutputs(safeItemId('1x susy:washed_rotten_flesh'))
    .duration(200)
    .EUt(4)

  event.recipes.susy.mods.gregtech.chemical_bath('ua4dv9mlce7f6o') // remapped from original line 540
    .itemInputs(safeItemId('1x susy:washed_rotten_flesh'))
    .inputFluids(safeFluidOf('gtceu:creosote', 50))
    .itemOutputs(safeItemId('1x minecraft:leather'))
    .duration(200)
    .EUt(4)

  event.recipes.susy.crystallizer('onvef44qge307y') // remapped from original line 550
    .inputFluids(safeFluidOf('susy:clarified_sugary_water', 1000))
    .itemOutputs(safeItemId('6x minecraft:sugar'))
    .duration(200)
    .EUt(7)

  event.recipes.susy.crystallizer('6coc2b68wlht2c') // remapped from original line 557
    .inputFluids(safeFluidOf('susy:sugary_water', 1000))
    .itemOutputs(safeItemId('3x minecraft:sugar'))
    .duration(300)
    .EUt(7)

  event.recipes.susy.mods.gregtech.extractor('rt7nwvcxdbsszx') // remapped from original line 565
    .itemInputs(safeItemId('1x quark:glass_shards:0'))
    .outputFluids(safeFluidOf('gtceu:glass', 36))
    .duration(20)
    .EUt(7)

  event.recipes.susy.mods.gregtech.macerator('ifk6v4afsfnk2p') // remapped from original line 577
    .itemInputs(safeItemId('1x minecraft:reeds'))
    .itemOutputs(safeItemId('1x susy:sugar_cane_dust'))
    .duration(400)
    .EUt(2)

  event.recipes.susy.mods.gregtech.mixer('ow7okr7xwcws7o') // remapped from original line 591
    .itemInputs('1x #forge:dusts/coal')
    .itemInputs('1x #forge:dusts/gunpowder')
    .itemInputs('1x #forge:dusts/magnesium')
    .itemOutputs(safeItemId('3x minecraft:fire_charge'))
    .duration(20)
    .EUt(7)

  event.recipes.susy.mods.gregtech.mixer('ehaqxuvohgn6nh') // remapped from original line 600
    .itemInputs('1x #forge:dusts/quicklime')
    .inputFluids(safeFluidOf('susy:sugary_water', 10000))
    .outputFluids(safeFluidOf('susy:clarified_sugary_water', 10000))
    .duration(400)
    .EUt(7)

  event.recipes.gtceu.assembler('o5secx4bvv6fph') // remapped from original line 662
    .itemInputs([
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 72))
    .itemOutputs(safeItemId('1x minecraft:elytra'))
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.mixer('0jqmdwbusoguup') // remapped from original line 746
    .itemInputs('2x #forge:dusts/saltpeter')
    .itemInputs('1x #forge:dusts/sulfur')
    .itemInputs('3x #forge:dusts/coal')
    .itemOutputs(safeItemId('6x minecraft:gunpowder'))
    .duration(150)
    .EUt(16)

  event.recipes.gtceu.mixer('cu1nf6unkfcz0d') // remapped from original line 755
    .itemInputs('2x #forge:dusts/saltpeter')
    .itemInputs('1x #forge:dusts/sulfur')
    .itemInputs('3x #forge:dusts/lignite')
    .itemOutputs(safeItemId('6x minecraft:gunpowder'))
    .duration(150)
    .EUt(16)

  event.recipes.gtceu.mixer('yhh65j2o6a4tzx') // remapped from original line 764
    .itemInputs('2x #forge:dusts/saltpeter')
    .itemInputs('1x #forge:dusts/sulfur')
    .itemInputs('3x #forge:dusts/anthracite')
    .itemOutputs(safeItemId('6x minecraft:gunpowder'))
    .duration(150)
    .EUt(16)

  event.recipes.gtceu.mixer('irfasyqhxh8ijx') // remapped from original line 773
    .itemInputs('2x #forge:dusts/saltpeter')
    .itemInputs('1x #forge:dusts/sulfur')
    .itemInputs('3x #forge:dusts/charcoal')
    .itemOutputs(safeItemId('6x minecraft:gunpowder'))
    .duration(150)
    .EUt(16)

  event.recipes.gtceu.mixer('utstj3rjaeige0') // remapped from original line 782
    .itemInputs('2x #forge:dusts/saltpeter')
    .itemInputs('1x #forge:dusts/sulfur')
    .itemInputs('3x #forge:dusts/carbon')
    .itemOutputs(safeItemId('6x minecraft:gunpowder'))
    .duration(150)
    .EUt(16)

  event.recipes.susy.mods.gregtech.mixer('epa4tvgvnvijpu') // remapped from original line 801
    .itemInputs('6x #forge:dusts/sodium_bicarbonate')
    .inputFluids(safeFluidOf('gtceu:polyvinyl_acetate', 576))
    .inputFluids(safeFluidOf('gtceu:salt_water', 1000))
    .itemOutputs(safeItemId('9x minecraft:slime_ball'))
    .duration(100)
    .EUt(30)

  event.recipes.susy.mods.gregtech.mixer('h4pdavxsilqwts') // remapped from original line 810
    .itemInputs('6x #forge:dusts/sodium_bicarbonate')
    .inputFluids(safeFluidOf('gtceu:glue', 576))
    .inputFluids(safeFluidOf('gtceu:salt_water', 1000))
    .itemOutputs(safeItemId('3x minecraft:slime_ball'))
    .duration(100)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for(name in recipesToRemove) {
  //     crafting.remove(name)
  // }

  // for (entry in pressurePlateItemMap) {
  //     crafting.replaceShaped(entry.key, item(entry.key), [
  //         [item(entry.value), item(entry.value), null],
  //         [ore('springSteel'), ore('springSteel'), null],
  //         [ore('dustRedstone'), ore('dustRedstone'), null]
  //     ])
  // }

  // for (entry in pressurePlateOreMap) {
  //     crafting.replaceShaped(entry.key, item(entry.key), [
  //         [ore(entry.value), ore(entry.value), null],
  //         [ore('springSteel'), ore('springSteel'), null],
  //         [ore('dustRedstone'), ore('dustRedstone'), null]
  //     ])
  // }

  // for (entry in buttonOreMap) {
  //     crafting.replaceShaped(entry.key, item(entry.key), [
  //         [ore(entry.value), null, null],
  //         [ore('springSmallSteel'), null, null],
  //         [ore('dustRedstone'), null, null]
  //     ])
  // }

  // for (entry in buttonItemMap) {
  //     crafting.replaceShaped(entry.key, item(entry.key), [
  //         [item(entry.value), null, null],
  //         [ore('springSmallSteel'), null, null],
  //         [ore('dustRedstone'), null, null]
  //     ])
  // }

  // for (int i = 0; i < 16; i++) {
  // 	recipemap('mixer').recipeBuilder()
  // 			.fluidInputs(fluid('water') * 100)
  // 			.inputs(item('minecraft:concrete_powder', i))
  // 			.outputs(item('minecraft:concrete', i))
  // 			.duration(40)
  // 			.EUt(16)
  // 			.buildAndRegister()
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import classes.*;
  // import globals.Globals
  // def circuit(x) {
  //     return metaitem('circuit.integrated').withNbt([Configuration: x])
  // }
  // def recipesToRemove = [
  //     'minecraft:dispenser',
  //     'gregtech:piston_bronze',
  //     'gregtech:piston_steel',
  //     'gregtech:piston_aluminium',
  //     'gregtech:piston_titanium',
  //     'quark:hopper',
  //     'quark:gravisand',
  //     'quark:ender_watcher',
  //     'quark:redstone_inductor',
  //     'minecraft:fermented_spider_eye',
  //     'minecraft:speckled_melon',
  //     'minecraft:magma_cream',
  //     'minecraft:brewing_stand',
  //     'minecraft:golden_carrot',
  //     'quark:golden_frog_leg',
  //     'minecraft:white_bed',
  // 	'minecraft:orange_bed',
  // 	'minecraft:magenta_bed',
  // 	'minecraft:light_blue_bed',
  // 	'minecraft:yellow_bed',
  // 	'minecraft:lime_bed',
  // 	'minecraft:pink_bed',
  // 	'minecraft:gray_bed',
  // 	'minecraft:light_gray_bed',
  // 	'minecraft:cyan_bed',
  // 	'minecraft:purple_bed',
  // 	'minecraft:blue_bed',
  // 	'minecraft:brown_bed',
  // 	'minecraft:green_bed',
  // 	'minecraft:red_bed',
  // 	'minecraft:black_bed',
  //     'minecraft:enchanting_table',
  //     'minecraft:ender_chest',
  //     'minecraft:end_rod',
  //     'minecraft:end_crystal',
  //     'quark:glass',
  //     'quark:stained_glass',
  //     'quark:stained_glass_1',
  //     'quark:stained_glass_2',
  //     'quark:stained_glass_3',
  //     'quark:stained_glass_4',
  //     'quark:stained_glass_5',
  //     'quark:stained_glass_6',
  //     'quark:stained_glass_7',
  //     'quark:stained_glass_8',
  //     'quark:stained_glass_9',
  //     'quark:stained_glass_10',
  //     'quark:stained_glass_11',
  //     'quark:stained_glass_12',
  //     'quark:stained_glass_13',
  //     'quark:stained_glass_14',
  //     'quark:stained_glass_15',
  //     'rsgauges:misc/switchlinkperl_to_enderpearl',
  //     'minecraft:ender_eye',
  //     'minecraft:fire_charge',
  //     'minecraft:writable_book',
  //     'minecraft:bread',
  //     'agricraft:combine_nugget_diamond',
  //     'agricraft:combine_nugget_emerald',
  //     'agricraft:combine_nugget_quartz',
  //     'minecraft:purple_shulker_box',
  //     'quark:purple_shulker_box',
  // 	'agricraft:combine_nugget_iron',
  // 	'chisel:uncraft_blockiron',
  // 	'chisel:diamond',
  // 	'chisel:uncraft_blockgold',
  // 	'appliedenergistics2:decorative/quartz_block_pure',
  // 	'endercore:shapeless_paper',
  // 	'gregtech:paper_dust',
  // 	'gregtech:sugar',
  // 	'minecraft:bone_meal_from_bone',
  // 	'minecraft:diorite',
  // 	'minecraft:granite',
  // 	'minecraft:andesite',
  // 	'minecraft:minecart',
  // 	'quark:trapdoor',
  // 	'minecraft:golden_apple',
  // 	'chisel:uncraft_blockcopper',
  // 	'chisel:uncraft_blocksteel',
  // 	'chisel:uncraft_blocktin',
  // 	'chisel:uncraft_blockbronze',
  // 	'chisel:redstone',
  // 	'chisel:emerald',
  // 	'chisel:coal',
  // 	'chisel:charcoal',
  // 	'quark:charcoal_block'
  // ]
  // def pressurePlateOreMap = [
  //         'minecraft:stone_pressure_plate':'stone',
  //         'minecraft:light_weighted_pressure_plate':'plateGold',
  //         'minecraft:heavy_weighted_pressure_plate':'plateIron',
  //         'quark:obsidian_pressure_plate':'obsidian'
  //     ]
  // def pressurePlateItemMap = [
  //     'minecraft:wooden_pressure_plate':'minecraft:planks:0',
  //     'quark:spruce_pressure_plate':'minecraft:planks:1',
  //     'quark:birch_pressure_plate':'minecraft:planks:2',
  //     'quark:jungle_pressure_plate':'minecraft:planks:3',
  //     'quark:acacia_pressure_plate':'minecraft:planks:4',
  //     'quark:dark_oak_pressure_plate':'minecraft:planks:5'
  //     ]
  // def buttonOreMap = [
  //         'minecraft:stone_button':'stone',
  //         'quark:iron_button':'plateIron',
  //         'quark:gold_button':'plateGold'
  //     ]
  // def buttonItemMap = [
  //     'minecraft:wooden_button':'minecraft:planks:0',
  //     'quark:spruce_button':'minecraft:planks:1',
  //     'quark:birch_button':'minecraft:planks:2',
  //     'quark:jungle_button':'minecraft:planks:3',
  //     'quark:acacia_button':'minecraft:planks:4',
  //     'quark:dark_oak_button':'minecraft:planks:5'
  // ]
  // crafting.replaceShaped('minecraft:dispenser', item('minecraft:dispenser'), [
  // 	[ore('cobblestone'), ore('gearIron'), ore('cobblestone')],
  // 	[ore('string'), ore('springSteel'), metaitem('electric.motor.lv')],//metaitem('electric.motor.lv')
  // 	[ore('cobblestone'), ore('wireFineRedAlloy'), ore('cobblestone')]
  // ])
  // crafting.replaceShaped('minecraft:noteblock', item('minecraft:noteblock'), [
  //     [ore('plankWood'), ore('leather'), ore('plankWood')],
  //     [ore('wireFineRedAlloy'), ore('stickIronMagnetic'), ore('wireFineRedAlloy')],
  //     [ore('plankWood'), ore('leather'), ore('plankWood')]
  // ])
  // crafting.replaceShaped('minecraft:piston', item('minecraft:piston'),  [
  //     [ore('plankWood'), ore('plankWood'), ore('plankWood')],
  //     [ore('cobblestone'), metaitem('electric.piston.lv'), ore('cobblestone')],
  //     [ore('cobblestone'), ore('wireFineRedAlloy'), ore('cobblestone')]
  // ])
  // crafting.replaceShaped('minecraft:lever', item('minecraft:lever'), [
  //     [null, ore('stickWood'), ore('craftingToolHardHammer')],
  //     [ore('ringIron'), ore('cobblestone'), ore('screwIron')],
  //     [null, ore('dustRedstone'), ore('craftingToolScrewdriver')]
  // ])
  // crafting.replaceShaped('minecraft:tripwire_hook', item('minecraft:tripwire_hook') * 2, [
  //     [null, ore('ringIron'), null],
  //     [ore('springSmallIron'), ore('stickWood'), null],
  //     [ore('dustRedstone'), ore('cobblestone'), null]
  // ])
  // crafting.replaceShaped('quark:iron_rod', item('quark:iron_rod'), [
  //     [null, ore('stickIron'), null],
  //     [null, ore('stickIron'), null],
  //     [null, ore('stickIron'), null]
  // ])
  // crafting.replaceShaped('minecraft:redstone_lamp', item('minecraft:redstone_lamp'), [
  //     [null, ore('plateRedstone'), null],
  //     [ore('plateRedstone'), ore('blockGlowstone'), ore('plateRedstone')],
  //     [null, ore('plateRedstone'), null]
  // ])
  // crafting.replaceShaped('minecraft:dropper', item('minecraft:dropper'), [
  // 	[ore('cobblestone'), ore('cobblestone'), ore('cobblestone')],
  // 	[ore('cobblestone'), metaitem('electric.piston.lv'), null],
  // 	[ore('cobblestone'), ore('wireFineRedAlloy'), ore('cobblestone')]
  // ])
  // crafting.replaceShaped('minecraft:repeater', item('minecraft:repeater'), [
  //     [item('minecraft:redstone_torch'), ore('wireFineRedAlloy'), item('minecraft:redstone_torch')],
  //     [ore('plateStone'), ore('plateStone'), ore('plateStone')]
  // ])
  // crafting.replaceShaped('minecraft:comparator', item('minecraft:comparator'), [
  //     [null, item('minecraft:redstone_torch'), null],
  //     [item('minecraft:redstone_torch'), ore('wireFineRedAlloy'), item('minecraft:redstone_torch')],
  //     [ore('plateStone'), ore('plateNetherQuartz'), ore('plateStone')]
  // ])
  // crafting.replaceShaped('appliedenergistics2:misc/vanilla_comparator', item('minecraft:comparator'), [
  //     [null, item('minecraft:redstone_torch'), null],
  //     [item('minecraft:redstone_torch'), ore('wireFineRedAlloy'), item('minecraft:redstone_torch')],
  //     [ore('plateStone'), ore('plateCertusQuartz'), ore('plateStone')]
  // ])
  // crafting.replaceShaped('gregtech:comparator_quartzite', item('minecraft:comparator'), [
  //     [null, item('minecraft:redstone_torch'), null],
  //     [item('minecraft:redstone_torch'), ore('wireFineRedAlloy'), item('minecraft:redstone_torch')],
  //     [ore('plateStone'), ore('plateQuartzite'), ore('plateStone')]
  // ])
  // crafting.replaceShaped('minecraft:daylight_detector', item('minecraft:daylight_detector'), [
  //     [ore('plateNetherQuartz'), ore('plateNetherQuartz'), ore('plateNetherQuartz')],
  //     [ore('wireFineRedAlloy'), ore('wireFineRedAlloy'), ore('wireFineRedAlloy')],
  //     [ore('plankWood'), ore('plankWood'), ore('plankWood')]
  // ])
  // crafting.replaceShaped('appliedenergistics2:misc/vanilla_daylight_detector', item('minecraft:daylight_detector'), [
  //     [ore('plateCertusQuartz'), ore('plateCertusQuartz'), ore('plateCertusQuartz')],
  //     [ore('wireFineRedAlloy'), ore('wireFineRedAlloy'), ore('wireFineRedAlloy')],
  //     [ore('plankWood'), ore('plankWood'), ore('plankWood')]
  // ])
  // crafting.replaceShaped('gregtech:daylight_detector_quartzite', item('minecraft:daylight_detector'), [
  //     [ore('plateQuartzite'), ore('plateQuartzite'), ore('plateQuartzite')],
  //     [ore('wireFineRedAlloy'), ore('wireFineRedAlloy'), ore('wireFineRedAlloy')],
  //     [ore('plankWood'), ore('plankWood'), ore('plankWood')]
  // ])
  // crafting.replaceShaped('minecraft:observer', item('minecraft:observer'), [
  //     [ore('cobblestone'), ore('cobblestone'), ore('cobblestone')],
  //     [ore('wireFineRedAlloy'), ore('wireFineRedAlloy'), ore('plateNetherQuartz')],
  //     [ore('cobblestone'), ore('cobblestone'), ore('cobblestone')]
  // ])
  // crafting.replaceShaped('quark:rain_detector', item('quark:rain_detector'), [
  //     [ore('wireFineRedAlloy'), ore('wireFineRedAlloy'), ore('wireFineRedAlloy')],
  //     [ore('plateNetherQuartz'), ore('plateNetherQuartz'), ore('plateNetherQuartz')],
  //     [ore('cobblestone'), ore('cobblestone'), ore('cobblestone')]
  // ])
  // crafting.replaceShaped('quark:iron_ladder', item('quark:iron_ladder') * 16, [
  //     [ore('stickIron'), ore('craftingToolHardHammer'), ore('stickIron')],
  //     [ore('stickIron'), ore('stickIron'), ore('stickIron')],
  //     [ore('stickIron'), ore('craftingToolFile'), ore('stickIron')]
  // ])
  // crafting.replaceShaped('quark:paper_lantern', item('quark:paper_lantern'), [
  //     [ore('paper'), ore('stickWood'), ore('paper')],
  //     [ore('paper'), item('minecraft:torch'), ore('paper')],
  //     [ore('paper'), ore('stickWood'), ore('paper')]
  // ])
  // crafting.replaceShaped('quark:framed_glass', item('quark:framed_glass') * 4, [
  //     [ore('blockGlassColorless'), ore('stickIron'), ore('blockGlassColorless')],
  //     [ore('stickIron'), ore('blockGlassColorless'), ore('stickIron')],
  //     [ore('blockGlassColorless'), ore('stickIron'), ore('blockGlassColorless')]
  // ])
  // crafting.replaceShaped('minecraft:golden_rail', item('minecraft:golden_rail') * 6, [
  //     [ore('stickBrass'), ore('stickSteelMagnetic'), ore('stickBrass')],
  //     [ore('stickBrass'), ore('stickWood'), ore('stickBrass')],
  //     [ore('stickBrass'), ore('wireFineRedAlloy'), ore('stickBrass')]
  // ])
  // crafting.replaceShaped('minecraft:detector_rail', item('minecraft:detector_rail') * 6, [
  //     [ore('stickSteel'), null, ore('stickSteel')],
  //     [ore('stickSteel'), item('minecraft:stone_pressure_plate'), ore('stickSteel')],
  //     [ore('stickSteel'), null, ore('stickSteel')]
  // ])
  // crafting.replaceShaped('minecraft:rail', item('minecraft:rail') * 16, [
  //     [ore('stickSteel'), null, ore('stickSteel')],
  //     [ore('stickSteel'), ore('stickWood'), ore('stickSteel')],
  //     [ore('stickSteel'), null, ore('stickSteel')]
  // ])
  // crafting.replaceShaped('minecraft:activator_rail', item('minecraft:activator_rail') * 6, [
  //     [ore('stickSteel'), ore('stickWood'), ore('stickSteel')],
  //     [ore('stickSteel'), item('minecraft:redstone_torch'), ore('stickSteel')],
  //     [ore('stickSteel'), ore('stickWood'), ore('stickSteel')]
  // ])
  // crafting.replaceShaped('quark:chain', item('quark:chain') * 3, [
  //     [ore('ringIron'), null, null],
  //     [null, ore('ringIron'), null],
  //     [null, null, ore('ringIron')]
  // ])
  // crafting.replaceShaped('minecraft:torchLig', item('minecraft:torch') * 2, [
  //     [metaitem('gemLignite')],
  //     [ore('stickWood')]
  // ])
  // crafting.replaceShaped('minecraft:torchLigDust', item('minecraft:torch') * 2, [
  //     [metaitem('dustLignite')],
  //     [ore('stickWood')]
  // ])
  // crafting.replaceShaped('minecraft:torchAnth', item('minecraft:torch') * 8, [
  //     [metaitem('gemAnthracite')],
  //     [ore('stickWood')]
  // ])
  // crafting.replaceShaped('minecraft:torchAnthDust', item('minecraft:torch') * 8, [
  //     [metaitem('dustAnthracite')],
  //     [ore('stickWood')]
  // ])
  // crafting.addShaped('minecraft:torchCarbonDust', item('minecraft:torch') * 8, [
  //     [metaitem('dustCarbon')],
  //     [ore('stickWood')]
  // ])
  // crafting.addShaped('gregtech:chad_from_wood', metaitem('dustPaper') * 4, [
  // 		[ore('dustWood'), ore('dustWood'), ore('dustWood')],
  // 		[ore('dustWood'), ore('dustWood'), ore('dustWood')],
  // 		[null, fluid('water') * 1000, null]
  // ])
  // crafting.addShaped('gregtech:washing_rotten_flesh', metaitem('washed_rotten_flesh') * 8, [
  // 		[item('minecraft:rotten_flesh'), item('minecraft:rotten_flesh'), item('minecraft:rotten_flesh')],
  // 		[item('minecraft:rotten_flesh'), item('minecraft:rotten_flesh'), item('minecraft:rotten_flesh')],
  // 		[item('minecraft:rotten_flesh'), fluid('water') * 1000, item('minecraft:rotten_flesh')]
  // ])
  // crafting.addShaped('gregtech:curing_rotten_flesh', item('minecraft:leather') * 6, [
  // 		[metaitem('washed_rotten_flesh'), metaitem('washed_rotten_flesh'), metaitem('washed_rotten_flesh')],
  // 		[metaitem('washed_rotten_flesh'), metaitem('washed_rotten_flesh'), metaitem('washed_rotten_flesh')],
  // 		[metaitem('washed_rotten_flesh'), fluid('creosote') * 1000, metaitem('washed_rotten_flesh')]
  // ])
  // crafting.replaceShaped('minecraft:compass', item('minecraft:compass'), [
  //     [null, ore('plateIron'), null],
  //     [ore('plateIron'), ore('stickIronMagnetic'), ore('plateIron')],
  //     [null, ore('plateIron'), null]
  // ])
  // */
  // crafting.replaceShaped('minecraft:cobblestone_slab', item('minecraft:stone_slab', 3) * 6, [
  // 		[null, null, null],
  // 		[ore('cobblestone'), ore('cobblestone'), ore('cobblestone')],
  // 		[null, null, null]
  // ])
  // crafting.replaceShaped('minecraft:trapdoor', item('minecraft:trapdoor') * 4, [
  // 		[item('minecraft:planks'), item('minecraft:planks'), ore('craftingToolHardHammer')],
  // 		[item('minecraft:planks'), item('minecraft:planks'), null],
  // 		[ore('craftingToolSaw'), null, null]
  // ])
  // crafting.replaceShaped('minecraft:iron_trapdoor', item('minecraft:iron_trapdoor'), [
  // 		[metaitem('plateIron'), metaitem('plateIron'), ore('craftingToolHardHammer')],
  // 		[metaitem('plateIron'), metaitem('plateIron'), null],
  // 		[ore('craftingToolSaw'), null, null]
  // ])
  // crafting.replaceShaped('quark:spruce_trapdoor', item('quark:spruce_trapdoor') * 4, [
  // 		[item('minecraft:planks', 1), item('minecraft:planks', 1), ore('craftingToolHardHammer')],
  // 		[item('minecraft:planks', 1), item('minecraft:planks', 1), null],
  // 		[ore('craftingToolSaw'), null, null]
  // ])
  // crafting.replaceShaped('quark:birch_trapdoor', item('quark:birch_trapdoor') * 4, [
  // 		[item('minecraft:planks', 2), item('minecraft:planks', 2), ore('craftingToolHardHammer')],
  // 		[item('minecraft:planks', 2), item('minecraft:planks', 2), null],
  // 		[ore('craftingToolSaw'), null, null]
  // ])
  // crafting.replaceShaped('quark:jungle_trapdoor', item('quark:jungle_trapdoor') * 4, [
  // 		[item('minecraft:planks', 3), item('minecraft:planks', 3), ore('craftingToolHardHammer')],
  // 		[item('minecraft:planks', 3), item('minecraft:planks', 3), null],
  // 		[ore('craftingToolSaw'), null, null]
  // ])
  // crafting.replaceShaped('quark:acacia_trapdoor', item('quark:acacia_trapdoor') * 4, [
  // 		[item('minecraft:planks', 4), item('minecraft:planks', 4), ore('craftingToolHardHammer')],
  // 		[item('minecraft:planks', 4), item('minecraft:planks', 4), null],
  // 		[ore('craftingToolSaw'), null, null]
  // ])
  // crafting.replaceShaped('quark:dark_oak_trapdoor', item('quark:dark_oak_trapdoor') * 4, [
  // 		[item('minecraft:planks', 5), item('minecraft:planks', 5), ore('craftingToolHardHammer')],
  // 		[item('minecraft:planks', 5), item('minecraft:planks', 5), null],
  // 		[ore('craftingToolSaw'), null, null]
  // ])
  // crafting.replaceShaped('minecraft:stone_slab', item('minecraft:stone_slab') * 6, [
  // 		[null, null, null],
  // 		[ore('stone'), ore('stone'), ore('stone')],
  // 		[null, null, null]
  // ])
  //                 metaitem('platePolytetrafluoroethylene') * 2,
  //                 metaitem('plateStainlessSteel'),
  //                 metaitem('ringStainlessSteel') * 2
  //         ])
  // crafting.replaceShaped('minecraft:leather_helmet', item('minecraft:leather_helmet'), [
  // 		[metaitem('bound_leather'), metaitem('bound_leather'), metaitem('bound_leather')],
  // 		[metaitem('bound_leather'), null, metaitem('bound_leather')],
  // 		[null, null, null]])
  // 		
  // 		
  // crafting.replaceShaped('minecraft:leather_chestplate', item('minecraft:leather_chestplate'), [
  // 		[metaitem('bound_leather'), null, metaitem('bound_leather')],
  // 		[metaitem('bound_leather'), metaitem('bound_leather'), metaitem('bound_leather')],
  // 		[metaitem('bound_leather'), metaitem('bound_leather'), metaitem('bound_leather')]])
  // crafting.replaceShaped('minecraft:leather_leggings', item('minecraft:leather_leggings'), [
  // 		[metaitem('bound_leather'), metaitem('bound_leather'), metaitem('bound_leather')],
  // 		[metaitem('bound_leather'), null, metaitem('bound_leather')],
  // 		[metaitem('bound_leather'), null, metaitem('bound_leather')]])
  // crafting.replaceShaped('minecraft:leather_boots', item('minecraft:leather_boots'), [
  // 		[null, null, null],
  // 		[metaitem('bound_leather'), null, metaitem('bound_leather')],
  // 		[metaitem('bound_leather'), null, metaitem('bound_leather')]])
  // crafting.remove("quark:chainmail_helmet");
  // crafting.remove("quark:chainmail_chestplate");
  // crafting.remove("quark:chainmail_leggings");
  // crafting.remove("quark:chainmail_boots");
  // crafting.remove("gregtech:golden_helmet");
  // crafting.remove("gregtech:golden_chestplate");
  // crafting.remove("gregtech:golden_leggings");
  // crafting.remove("gregtech:golden_boots");
  // crafting.remove("gregtech:diamond_helmet");
  // crafting.remove("gregtech:diamond_chestplate");
  // crafting.remove("gregtech:diamond_leggings");
  // crafting.remove("gregtech:diamond_boots");
  // crafting.replaceShaped('gregtech:iron_helmet', item('minecraft:iron_helmet'), [
  // 		[ore('screwIron'), ore('plateIron'), ore('screwIron')],
  // 		[ore('plateIron'), ore('leather'), ore('plateIron')],
  // 		[null, null, null]])
  // crafting.replaceShaped('gregtech:iron_chestplate', item('minecraft:iron_chestplate'), [
  // 		[ore('screwIron'), null, ore('screwIron')],
  // 		[ore('plateIron'), ore('leather'), ore('plateIron')],
  // 		[ore('plateIron'), ore('plateIron'), ore('plateIron')]])
  // crafting.replaceShaped('gregtech:iron_leggings', item('minecraft:iron_leggings'), [
  // 		[ore('screwIron'), ore('plateIron'), ore('screwIron')],
  // 		[ore('plateIron'), ore('leather'), ore('plateIron')],
  // 		[ore('plateIron'), null, ore('plateIron')]])
  // crafting.addShaped('minecraft:arrow_from_paper', item('minecraft:arrow') * 8, [
  // 		[null, item('minecraft:flint'), null],
  // 		[null, ore('stickWood'), null],
  // 		[null, item('minecraft:paper'), null]])
  // 		
  // crafting.addShaped("tnt_block", item('minecraft:tnt'), [
  //         [null, ore('dustTnt'), null],
  //         [ore('dustSiliconDioxide'), ore('wireFineRedAlloy'), ore('dustSiliconDioxide')],
  //         [null, ore('dustTnt'), null]
  // ]);
});