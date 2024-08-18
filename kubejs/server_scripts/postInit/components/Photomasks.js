ServerEvents.recipes(event => {

  event.recipes.susy.batch_reactor('zhb4ti4nthqbw8') // remapped from original line 14
    .inputFluids(safeFluidOf('gtceu:butyraldehyde', 1000))
    .inputFluids(safeFluidOf('susy:formaldehyde', 3000))
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .itemOutputs('1x #forge:dusts/trimethylolpropane')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.roaster('nmu9fxg8o5zvzp') // remapped from original line 24
    .itemInputs('1x #forge:dusts/copper')
    .itemInputs('1x #forge:dusts/nickel')
    .inputFluids(safeFluidOf('gtceu:bromine', 4000))
    .itemOutputs('1x #forge:dusts/acrylic_catalyst')
    .duration(200)
    .EUt(120)

  event.recipes.susy.reaction_furnace('oi5cz4xkrqaryj') // remapped from original line 33
    .notConsumable('1x #forge:dusts/acrylic_catalyst')
    .inputFluids(safeFluidOf('susy:acetylene', 1000))
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:acrylic_acid', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.reaction_furnace('w10t7m2sihkuu8') // remapped from original line 45
    .itemInputs('4x #forge:dusts/molybdenum_trioxide')
    .itemInputs('7x #forge:dusts/vanadium_pentoxide')
    .itemInputs('5x #forge:dusts/alumina')
    .itemOutputs('1x #forge:dusts/supported_molybdenum_vanadium')
    .duration(200)
    .EUt(120)

  event.recipes.susy.fixed_bed_reactor('jkvzmhxqsc7vbn') // remapped from original line 54
    .notConsumable('1x #forge:dusts/phosphomolybdic_acid')
    .inputFluids(safeFluidOf('gtceu:propene', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 100))
    .outputFluids(safeFluidOf('susy:acrolein', 50))
    .outputFluids(safeFluidOf('susy:dense_steam', 50))
    .duration(8)
    .EUt(120)

  event.recipes.susy.fixed_bed_reactor('nezd6nsdtrg1xj') // remapped from original line 64
    .notConsumable('1x #forge:catalysts/bed_supported_molybdenum_vanadium')
    .inputFluids(safeFluidOf('susy:acrolein', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 50))
    .outputFluids(safeFluidOf('susy:acrylic_acid', 50))
    .duration(8)
    .EUt(120)

  event.recipes.susy.batch_reactor('8fviuaev4aernt') // remapped from original line 75
    .notConsumable('1x #forge:springs/cupronickel')
    .notConsumable(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemInputs('1x #forge:dusts/trimethylolpropane')
    .inputFluids(safeFluidOf('susy:acrylic_acid', 3000))
    .outputFluids(safeFluidOf('susy:trimethylolpropane_triacrylate', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 3000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.batch_reactor('5zyrb24f8vtkll') // remapped from original line 88
    .circuit(1)
    .itemInputs('4x #forge:dusts/sodium_nitrite')
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 2000))
    .inputFluids(safeFluidOf('susy:gtfo_aniline', 1000))
    .itemOutputs('1x #forge:dusts/benzenediazonium_chloride')
    .outputFluids(safeFluidOf('susy:diluted_saltwater', 2000))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.mixer('8rzpb6iybsh5ik') // remapped from original line 99
    .itemInputs('1x #forge:dusts/benzenediazonium_chloride')
    .itemInputs('8x #forge:dusts/gelatin')
    .inputFluids(safeFluidOf('susy:trimethylolpropane_triacrylate', 8000))
    .outputFluids(safeFluidOf('susy:acrylic_photoemulsion', 8000))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.mixer('jpkzh9q6wusij6') // remapped from original line 108
    .itemInputs('1x #forge:foils/plastic')
    .inputFluids(safeFluidOf('susy:dye_red', 100))
    .inputFluids(safeFluidOf('susy:acrylic_photoemulsion', 500))
    .itemOutputs(metaitem('rubylith_film'))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.assembler('mdkrgclv535sdh') // remapped from original line 117
    .itemInputs('1x #forge:foils/mylar')
    .itemInputs(metaitem('rubylith_film'))
    .inputFluids(safeFluidOf('gtceu:glue', 100))
    .itemOutputs(metaitem('rubylith'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.roaster('vxak2gpfucwbzi') // remapped from original line 128
    .itemInputs('1x #forge:dusts/silver')
    .inputFluids(safeFluidOf('gtceu:chlorine', 1000))
    .itemOutputs('2x #forge:dusts/silver_chloride')
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.assembler('ajjbtdoztcwrek') // remapped from original line 136
    .itemInputs('1x #forge:plates/glass')
    .itemInputs('1x #forge:dusts/gelatin')
    .itemInputs('1x #forge:dusts/silver_chloride')
    .itemOutputs(metaitem('mask.blank'))
    .duration(200)
    .EUt(7)

  event.recipes.susy.uv_light_box('5rxyf6xw3faghm') // remapped from original line 151
    .itemInputs(metaitem('stencil.ram'))
    .itemInputs(metaitem('mask.blank'))
    .itemOutputs(metaitem('mask.ram'))
    .duration(200)
    .EUt(7)

  event.recipes.susy.uv_light_box('12sjjbchyofixr') // remapped from original line 165
    .itemInputs(metaitem('stencil.ic'))
    .itemInputs(metaitem('mask.blank'))
    .itemOutputs(metaitem('mask.ic'))
    .duration(200)
    .EUt(7)

  event.recipes.susy.uv_light_box('38aeemmr0gqzhu') // remapped from original line 179
    .itemInputs(metaitem('stencil.pcb'))
    .itemInputs(metaitem('mask.blank'))
    .itemOutputs(metaitem('mask.pcb'))
    .duration(200)
    .EUt(7)

  event.recipes.susy.uv_light_box('szhdj2fj6jzauy') // remapped from original line 193
    .itemInputs(metaitem('stencil.ulpic'))
    .itemInputs(metaitem('mask.blank'))
    .itemOutputs(metaitem('mask.ulpic'))
    .duration(200)
    .EUt(7)

  event.recipes.susy.uv_light_box('pwnyfzrqt1by7x') // remapped from original line 207
    .itemInputs(metaitem('stencil.lpic'))
    .itemInputs(metaitem('mask.blank'))
    .itemOutputs(metaitem('mask.lpic'))
    .duration(200)
    .EUt(7)

  event.recipes.susy.uv_light_box('trwqumw7hy5ylv') // remapped from original line 221
    .itemInputs(metaitem('stencil.cpu'))
    .itemInputs(metaitem('mask.blank'))
    .itemOutputs(metaitem('mask.cpu'))
    .duration(200)
    .EUt(7)

  event.recipes.susy.reaction_furnace('quyzwpz6t0moae') // remapped from original line 231
    .notConsumable(metaitem('shape.mold.plate'))
    .inputFluids(safeFluidOf('susy:silicon_tetrachloride', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 3000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .itemOutputs(metaitem('fused_quartz'))
    .duration(400)
    .EUt(120)

  event.recipes.gtceu.assembler('nh6kcsktjzl9xo') // remapped from original line 241
    .itemInputs(metaitem('fused_quartz'))
    .itemInputs('1x #forge:dusts/tiny_chromium_trioxide')
    .circuit(1)
    .itemOutputs(metaitem('mask.advanced'))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.assembler('lvoy93ylgcnlqr') // remapped from original line 250
    .itemInputs(metaitem('fused_quartz'))
    .itemInputs('1x #forge:dusts/tiny_chromium_trioxide')
    .circuit(2)
    .itemOutputs(metaitem('mask.nand'))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.assembler('ne5odsrup8etyu') // remapped from original line 259
    .itemInputs(metaitem('fused_quartz'))
    .itemInputs('1x #forge:dusts/tiny_chromium_trioxide')
    .circuit(3)
    .itemOutputs(metaitem('mask.nor'))
    .duration(200)
    .EUt(120)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // ASSEMBLER = recipemap('assembler')
  // BR = recipemap('batch_reactor')
  // FBR = recipemap('fixed_bed_reactor')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // ROASTER = recipemap('roaster')
  // MIXER = recipemap('mixer')
  // UV_LIGHT_BOX = recipemap('uv_light_box')
  //     // Reppe route
  //     // Propene route
  //         
  // crafting.addShaped("rubylith_ram", metaitem('stencil.ram'), [
  //     [ore('craftingToolKnife'), null, null],
  //     [null, metaitem('rubylith'), null],
  //     [null, null, null]
  // ]);
  // crafting.addShaped("rubylith_ic", metaitem('stencil.ic'), [
  //     [null, ore('craftingToolKnife'), null],
  //     [null, metaitem('rubylith'), null],
  //     [null, null, null]
  // ]);
  // crafting.addShaped("rubylith_pcb", metaitem('stencil.pcb'), [
  //     [null, null, ore('craftingToolKnife')],
  //     [null, metaitem('rubylith'), null],
  //     [null, null, null]
  // ]);
  // crafting.addShaped("rubylith_ulpic", metaitem('stencil.ulpic'), [
  //     [null, null, null],
  //     [ore('craftingToolKnife'), metaitem('rubylith'), null],
  //     [null, null, null]
  // ]);
  // crafting.addShaped("rubylith_lpic", metaitem('stencil.lpic'), [
  //     [null, null, null],
  //     [null, metaitem('rubylith'), ore('craftingToolKnife')],
  //     [null, null, null]
  // ]);
  // crafting.addShaped("rubylith_cpu", metaitem('stencil.cpu'), [
  //     [null, null, null],
  //     [null, metaitem('rubylith'), null],
  //     [ore('craftingToolKnife'), null, null]
  // ]);
});