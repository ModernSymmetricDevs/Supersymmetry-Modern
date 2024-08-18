ServerEvents.recipes(event => {

  event.recipes.gtceu.CENTRIFUGE('6m5vhllk7mxz9k') // remapped from original line 40
    .inputFluids(safeFluidOf('gtceu:construction_foam', 3000))
    .itemOutputs(safeItemId('16x buildinggadgets:constructionpaste'))
    .duration(20)
    .EUt(16)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (name in name_removals) {
  //     crafting.remove(name)
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // def name_removals = [
  //         'buildinggadgets:buildingtool',
  //         'buildinggadgets:exchangingtool',
  //         'buildinggadgets:copypastetool',
  //         'buildinggadgets:constructionpastepowder',
  //         'buildinggadgets:destructiontool'
  // ]
  // crafting.addShaped('buildinggadgets:buildingtool', item('buildinggadgets:buildingtool'), [
  //     [null, metaitem('electric.piston.hv'), null],
  //     [ore('plateStainlessSteel'), metaitem('power_unit.hv'), ore('plateStainlessSteel')],
  //     [ore('plateStainlessSteel'), ore('circuitHv'), ore('plateStainlessSteel')]
  // ])
  // crafting.addShaped('buildinggadgets:exchangertool', item('buildinggadgets:exchangertool'), [
  //     [null, metaitem('robot.arm.hv'), null],
  //     [ore('plateStainlessSteel'), metaitem('power_unit.hv'), ore('plateStainlessSteel')],
  //     [ore('plateStainlessSteel'), ore('circuitHv'), ore('plateStainlessSteel')]
  // ])
  // crafting.addShaped('buildinggadgets:copypastetool', item('buildinggadgets:copypastetool'), [
  //     [null, metaitem('electric.piston.hv'), ore('gearSmallStainlessSteel')],
  //     [ore('plateStainlessSteel'), metaitem('power_unit.hv'), ore('plateStainlessSteel')],
  //     [ore('plateStainlessSteel'), ore('circuitHv'), ore('plateStainlessSteel')]
  // ])
  // crafting.replaceShaped('buildinggadgets:templatemanager', item('buildinggadgets:templatemanager'), [
  //         [null, metaitem('electric.piston.hv'), null],
  //         [item('minecraft:paper'), metaitem('hull.hv'), item('minecraft:paper')],
  //         [ore('plateStainlessSteel'), ore('circuitHv'), ore('plateStainlessSteel')]
  // ])
  // crafting.replaceShaped('buildinggadgets:constructionpastecontainer', item('buildinggadgets:constructionpastecontainer'), [
  //         [null, metaitem('plateLapis'), null],
  //         [metaitem('plateLapis'), metaitem('large_fluid_cell.steel'), metaitem('plateLapis')],
  //         [null, metaitem('plateLapis'), null]
  // ])
  // crafting.replaceShaped('buildinggadgets:constructionpastecontainert2', item('buildinggadgets:constructionpastecontainert2'), [
  //         [null, metaitem('plateLapis'), null],
  //         [metaitem('plateLapis'), metaitem('large_fluid_cell.aluminium'), metaitem('plateLapis')],
  //         [null, metaitem('plateLapis'), null]
  // ])
  // crafting.replaceShaped('buildinggadgets:constructionpastecontainert3', item('buildinggadgets:constructionpastecontainert3'), [
  //         [null, metaitem('plateLapis'), null],
  //         [metaitem('plateLapis'), metaitem('large_fluid_cell.stainless_steel'), metaitem('plateLapis')],
  //         [null, metaitem('plateLapis'), null]
  // ])
});