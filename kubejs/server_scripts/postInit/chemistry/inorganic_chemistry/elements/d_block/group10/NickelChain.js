ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/pentlandite' && safeFluidOf('gtceu:oxygen')})

  event.recipes.gtceu.electric_blast_furnace('ewsiiyiho3ej9v') // remapped from original line 14
    .itemInputs('1x #forge:dusts/pentlandite')
    .inputFluids(safeFluidOf('gtceu:oxygen', 3000))
    .itemOutputs('1x #forge:dusts/garnierite')
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .EUt(30)
    .blastFurnaceTemp(1728)
    .duration(40)

  event.recipes.gtceu.ELECTROLYTIC_CELL('lwvcqrutavto0r') // remapped from original line 60
    .inputFluids(safeFluidOf('susy:nickel_sulfate_solution', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 2000))
    .notConsumable('1x #forge:rods/nickel')
    .notConsumable(safeItemId('1x susy:graphite_electrode'))
    .itemOutputs('1x #forge:dusts/nickel')
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 2000))
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .duration(240)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('ifr3g4lrrgomyo') // remapped from original line 74
    .itemInputs('1x #forge:dusts/nickel')
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 4000))
    .outputFluids(safeFluidOf('susy:nickel_carbonyl', 1000))
    .EUt(30)
    .duration(200)

  event.recipes.susy.roaster('hzs1rwgyu2ee9g') // remapped from original line 82
    .inputFluids(safeFluidOf('susy:nickel_carbonyl', 1000))
    .itemOutputs('1x #forge:dusts/high_purity_nickel')
    .outputFluids(safeFluidOf('gtceu:carbon_monoxide', 4000))
    .EUt(30)
    .duration(200)

  event.recipes.susy.reaction_furnace('25l8kamyergc6x') // remapped from original line 90
    .itemInputs('1x #forge:dusts/garnierite')
    .inputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .itemOutputs('1x #forge:dusts/nickel')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .EUt(30)
    .duration(40)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (combustible in combustibles()) {
  //     PRIMITIVEBLASTFURNACE.recipeBuilder()
  //             .inputs(ore('dustAnyPurityNickel'))
  //             .inputs(ore(combustible.name) * combustible.equivalent(1))
  //             .outputs(metaitem('ingotNickel'))
  //             .outputs(metaitem(combustible.byproduct) * combustible.equivalent(1))
  //             .duration(250)
  //             .buildAndRegister()
  // 
  //     PRIMITIVEBLASTFURNACE.recipeBuilder()
  //             .inputs(ore('dustGarnierite'))
  //             .inputs(ore(combustible.name) * combustible.equivalent(1))
  //             .outputs(metaitem('ingotNickel'))
  //             .outputs(metaitem(combustible.byproduct) * combustible.equivalent(1))
  //             .duration(250)
  //             .buildAndRegister()
  // 
  //     PRIMITIVEBLASTFURNACE.recipeBuilder()
  //             .inputs(ore('dustPentlandite'))
  //             .inputs(ore(combustible.name) * combustible.equivalent(4))
  //             .outputs(metaitem('ingotNickel'))
  //             .outputs(metaitem(combustible.byproduct) * combustible.equivalent(4))
  //             .duration(250)
  //             .buildAndRegister()
  // 
  //     EBF.recipeBuilder()
  //             .inputs(ore('dustGarnierite'))
  //             .inputs(ore(combustible.name) * combustible.equivalent(1))
  //             .outputs(metaitem('ingotNickel'))
  //             .fluidOutputs(fluid('carbon_monoxide') * 1000)
  //             .EUt(30)
  //             .blastFurnaceTemp(1728)
  //             .duration(40)
  //             .buildAndRegister()
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import globals.CarbonGlobals
  // import static globals.CarbonGlobals.*
  // PRIMITIVEBLASTFURNACE = recipemap('primitive_blast_furnace')
  // EBF = recipemap('electric_blast_furnace')
  // ROASTER = recipemap('roaster')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // BR = recipemap('batch_reactor')
});