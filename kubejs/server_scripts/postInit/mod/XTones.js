ServerEvents.recipes(event => {

  event.recipes.gtceu.assembler('qxb32ufcu6ouw2') // remapped from original line 39
    .itemInputs(safeItemId('1x susy:stone'))
    .itemInputs(safeItemId('6x minecraft:stone_slab'))
    .itemOutputs(safeItemId('32x xtones:base'))
    .duration(20)
    .EUt(7)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // crafting.replaceShaped('xtones:zome', item('xtones:zome') * 8, [
  //         [item('xtones:base'), item('xtones:base'), item('xtones:base')],
  //         [item('xtones:base'), ore('cobblestone'), item('xtones:base')],
  //         [item('xtones:base'), item('xtones:base'), item('xtones:base')]
  // ])
  // crafting.replaceShaped('xtones:zoea', item('xtones:zoea') * 8, [
  //         [item('xtones:base'), item('xtones:base'), item('xtones:base')],
  //         [item('xtones:base'), ore('wool'), item('xtones:base')],
  //         [item('xtones:base'), item('xtones:base'), item('xtones:base')]
  // ])
  // crafting.replaceShaped('xtones:iszm', item('xtones:iszm') * 8, [
  //         [item('xtones:base'), item('xtones:base'), item('xtones:base')],
  //         [item('xtones:base'), ore('stone'), item('xtones:base')],
  //         [item('xtones:base'), item('xtones:base'), item('xtones:base')]
  // ])
  // crafting.replaceShaped('xtones:lair', item('xtones:lair') * 8, [
  //         [item('xtones:base'), item('xtones:base'), item('xtones:base')],
  //         [item('xtones:base'), ore('netherrack'), item('xtones:base')],
  //         [item('xtones:base'), item('xtones:base'), item('xtones:base')]
  // ])
  // crafting.replaceShaped('xtones:vena', item('xtones:vena') * 8, [
  //         [item('xtones:base'), item('xtones:base'), item('xtones:base')],
  //         [item('xtones:base'), ore('plankWood'), item('xtones:base')],
  //         [item('xtones:base'), item('xtones:base'), item('xtones:base')]
  // ])
  // crafting.replaceShaped('xtones:base', item('xtones:base') * 32, [
  //         [ore('slabStone'), ore('slabStone'), null],
  //         [ore('slabStone'), ore('stone'), ore('slabStone')],
  //         [null, ore('slabStone'), ore('slabStone')]
  // ])
  // ASSEMBLER = recipemap('assembler')
});