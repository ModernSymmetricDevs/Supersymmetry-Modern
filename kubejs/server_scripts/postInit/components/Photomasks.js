ServerEvents.recipes(event => {

  event.recipes.susy.batch_reactor('9w2ckv1ngfslan') // remapped from original line 14
    .inputFluids(safeFluidOf('gtceu:butyraldehyde', 1000))
    .inputFluids(safeFluidOf('susy:formaldehyde', 3000))
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .itemOutputs('1x #forge:dusts/trimethylolpropane')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.roaster('sejtnvxbgy3smr') // remapped from original line 24
    .itemInputs('1x #forge:dusts/copper')
    .itemInputs('1x #forge:dusts/nickel')
    .inputFluids(safeFluidOf('gtceu:bromine', 4000))
    .itemOutputs('1x #forge:dusts/acrylic_catalyst')
    .duration(200)
    .EUt(120)

  event.recipes.susy.reaction_furnace('yuonzm5i9vvvtc') // remapped from original line 33
    .notConsumable('1x #forge:dusts/acrylic_catalyst')
    .inputFluids(safeFluidOf('susy:acetylene', 1000))
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:acrylic_acid', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.reaction_furnace('lm79porhkbop1a') // remapped from original line 45
    .itemInputs('4x #forge:dusts/molybdenum_trioxide')
    .itemInputs('7x #forge:dusts/vanadium_pentoxide')
    .itemInputs('5x #forge:dusts/alumina')
    .itemOutputs('1x #forge:dusts/supported_molybdenum_vanadium')
    .duration(200)
    .EUt(120)

  event.recipes.susy.fixed_bed_reactor('fkzmbkcldto159') // remapped from original line 54
    .notConsumable('1x #forge:dusts/phosphomolybdic_acid')
    .inputFluids(safeFluidOf('gtceu:propene', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 100))
    .outputFluids(safeFluidOf('susy:acrolein', 50))
    .outputFluids(safeFluidOf('susy:dense_steam', 50))
    .duration(8)
    .EUt(120)

  event.recipes.susy.fixed_bed_reactor('04ifjbh5yiw1f9') // remapped from original line 64
    .notConsumable('1x #forge:catalysts/bed_supported_molybdenum_vanadium')
    .inputFluids(safeFluidOf('susy:acrolein', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 50))
    .outputFluids(safeFluidOf('susy:acrylic_acid', 50))
    .duration(8)
    .EUt(120)

  event.recipes.susy.batch_reactor('nlg6x4q4gzokqw') // remapped from original line 75
    .notConsumable('1x #forge:springs/cupronickel')
    .notConsumable(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemInputs('1x #forge:dusts/trimethylolpropane')
    .inputFluids(safeFluidOf('susy:acrylic_acid', 3000))
    .outputFluids(safeFluidOf('susy:trimethylolpropane_triacrylate', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 3000))
    .duration(200)
    .EUt(120)

  // Contains GTFO resources
  //event.recipes.susy.batch_reactor('r7kxlv6f1re34y') // remapped from original line 88
    //.circuit(1)
    //.itemInputs('4x #forge:dusts/sodium_nitrite')
    //.inputFluids(safeFluidOf('susy:hydrogen_chloride', 2000))
    //.inputFluids(safeFluidOf('susy:gtfo_aniline', 1000))
    //.itemOutputs('1x #forge:dusts/benzenediazonium_chloride')
    //.outputFluids(safeFluidOf('susy:diluted_saltwater', 2000))
    //.duration(200)
    //.EUt(120)

  event.recipes.gtceu.mixer('twkz35077c7ec6') // remapped from original line 99
    .itemInputs('1x #forge:dusts/benzenediazonium_chloride')
    .itemInputs('8x #forge:dusts/gelatin')
    .inputFluids(safeFluidOf('susy:trimethylolpropane_triacrylate', 8000))
    .outputFluids(safeFluidOf('susy:acrylic_photoemulsion', 8000))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.mixer('hcscmu6mqdygas') // remapped from original line 108
    .itemInputs('1x #forge:foils/plastic')
    .inputFluids(safeFluidOf('susy:dye_red', 100))
    .inputFluids(safeFluidOf('susy:acrylic_photoemulsion', 500))
    .itemOutputs(safeItemId('1x susy:rubylith_film'))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.assembler('lyfk1n1g79ye8a') // remapped from original line 117
    .itemInputs('1x #forge:foils/mylar')
    .itemInputs(safeItemId('1x susy:rubylith_film'))
    .inputFluids(safeFluidOf('gtceu:glue', 100))
    .itemOutputs(safeItemId('1x susy:rubylith'))
    .duration(200)
    .EUt(120)

  event.recipes.susy.roaster('ml9mkbeyn677iz') // remapped from original line 128
    .itemInputs('1x #forge:dusts/silver')
    .inputFluids(safeFluidOf('gtceu:chlorine', 1000))
    .itemOutputs('2x #forge:dusts/silver_chloride')
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.assembler('xc5znw4bwmdebl') // remapped from original line 136
    .itemInputs('1x #forge:plates/glass')
    .itemInputs('1x #forge:dusts/gelatin')
    .itemInputs('1x #forge:dusts/silver_chloride')
    .itemOutputs(safeItemId('1x susy:mask.blank'))
    .duration(200)
    .EUt(7)

  event.recipes.susy.uv_light_box('nyb3lv0n4llhuc') // remapped from original line 151
    .itemInputs(safeItemId('1x susy:stencil.ram'))
    .itemInputs(safeItemId('1x susy:mask.blank'))
    .itemOutputs(safeItemId('1x susy:mask.ram'))
    .duration(200)
    .EUt(7)

  event.recipes.susy.uv_light_box('vrecghgrroddi5') // remapped from original line 165
    .itemInputs(safeItemId('1x susy:stencil.ic'))
    .itemInputs(safeItemId('1x susy:mask.blank'))
    .itemOutputs(safeItemId('1x susy:mask.ic'))
    .duration(200)
    .EUt(7)

  event.recipes.susy.uv_light_box('v3ohcmuo8svpti') // remapped from original line 179
    .itemInputs(safeItemId('1x susy:stencil.pcb'))
    .itemInputs(safeItemId('1x susy:mask.blank'))
    .itemOutputs(safeItemId('1x susy:mask.pcb'))
    .duration(200)
    .EUt(7)

  event.recipes.susy.uv_light_box('bhghqfw5yo2afi') // remapped from original line 193
    .itemInputs(safeItemId('1x susy:stencil.ulpic'))
    .itemInputs(safeItemId('1x susy:mask.blank'))
    .itemOutputs(safeItemId('1x susy:mask.ulpic'))
    .duration(200)
    .EUt(7)

  event.recipes.susy.uv_light_box('78h6rh2wzo17ky') // remapped from original line 207
    .itemInputs(safeItemId('1x susy:stencil.lpic'))
    .itemInputs(safeItemId('1x susy:mask.blank'))
    .itemOutputs(safeItemId('1x susy:mask.lpic'))
    .duration(200)
    .EUt(7)

  event.recipes.susy.uv_light_box('gb3fiimknm5h84') // remapped from original line 221
    .itemInputs(safeItemId('1x susy:stencil.cpu'))
    .itemInputs(safeItemId('1x susy:mask.blank'))
    .itemOutputs(safeItemId('1x susy:mask.cpu'))
    .duration(200)
    .EUt(7)

  event.recipes.susy.reaction_furnace('nzbijt6rlpzydb') // remapped from original line 231
    .notConsumable(safeItemId('1x susy:shape.mold.plate'))
    .inputFluids(safeFluidOf('susy:silicon_tetrachloride', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 3000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .itemOutputs(safeItemId('1x susy:fused_quartz'))
    .duration(400)
    .EUt(120)

  event.recipes.gtceu.assembler('yofqjpnnum2dxy') // remapped from original line 241
    .itemInputs(safeItemId('1x susy:fused_quartz'))
    .itemInputs('1x #forge:dusts/tiny_chromium_trioxide')
    .circuit(1)
    .itemOutputs(safeItemId('1x susy:mask.advanced'))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.assembler('i8slu4rnc2hkxh') // remapped from original line 250
    .itemInputs(safeItemId('1x susy:fused_quartz'))
    .itemInputs('1x #forge:dusts/tiny_chromium_trioxide')
    .circuit(2)
    .itemOutputs(safeItemId('1x susy:mask.nand'))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.assembler('webfqupqyuoacx') // remapped from original line 259
    .itemInputs(safeItemId('1x susy:fused_quartz'))
    .itemInputs('1x #forge:dusts/tiny_chromium_trioxide')
    .circuit(3)
    .itemOutputs(safeItemId('1x susy:mask.nor'))
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