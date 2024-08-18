ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:primitive_blast_furnace', input: '#forge:ingots/wrought_iron' && '#forge:dusts/coke'})
  event.remove({ type: 'gtceu:primitive_blast_furnace', input: '#forge:ingots/wrought_iron' && '#forge:gems/coke'})
  event.remove({ type: 'gtceu:primitive_blast_furnace', input: 'minecraft:coal' && '#forge:ingots/wrought_iron'})
  event.remove({ type: 'gtceu:primitive_blast_furnace', input: '#forge:ingots/wrought_iron' && '#forge:dusts/coal'})
  event.remove({ type: 'gtceu:primitive_blast_furnace', input: '#forge:ingots/wrought_iron' && '#forge:dusts/charcoal'})
  event.remove({ type: 'gtceu:primitive_blast_furnace', input: 'minecraft:coal' && '#forge:ingots/wrought_iron'})
  event.remove({ type: 'gtceu:primitive_blast_furnace', input: 'minecraft:iron_ingot' && '#forge:dusts/coke'})
  event.remove({ type: 'gtceu:primitive_blast_furnace', input: 'minecraft:iron_ingot' && '#forge:gems/coke'})
  event.remove({ type: 'gtceu:primitive_blast_furnace', input: 'minecraft:iron_ingot' && '#forge:dusts/coal'})
  event.remove({ type: 'gtceu:primitive_blast_furnace', input: 'minecraft:iron_ingot' && '#forge:dusts/charcoal'})
  event.remove({ type: 'gtceu:primitive_blast_furnace', input: 'minecraft:iron_ingot' && 'minecraft:coal'})
  event.remove({ type: 'gtceu:primitive_blast_furnace', input: 'minecraft:iron_ingot' && 'minecraft:coal'})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: 'minecraft:iron_ingot' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/iron' && 'susy:circuit.integrated' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:ingots/wrought_iron' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/wrought_iron' && 'susy:circuit.integrated' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/iron' && '#forge:dusts/carbon'})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/wrought_iron' && '#forge:dusts/carbon'})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/steel'})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/steel_magnetic'})

  event.recipes.susy.EBF_RECIPES('8vo4ft7kzgkuoi') // remapped from original line 151
    .itemInputs('1x #forge:dusts/steel')
    .itemOutputs('1x #forge:ingots/steel')
    .duration(60)
    .blastFurnaceTemp(1750)
    .EUt(60)

  event.recipes.susy.EBF_RECIPES('lnhnxqi0u2qhbj') // remapped from original line 158
    .itemInputs('1x #forge:dusts/steel_magnetic')
    .itemOutputs('1x #forge:ingots/steel')
    .duration(60)
    .blastFurnaceTemp(1750)
    .EUt(60)

  event.recipes.gtceu.forge_hammer('9lpckscm3ebapc') // remapped from original line 172
    .itemInputs('1x #forge:ingots/pig_iron')
    .itemOutputs('1x #forge:ingots/wrought_iron')
    .duration(20)
    .EUt(voltAmps[0])

  event.recipes.susy.EBF_RECIPES('cbcwkjxleyv5uq') // remapped from original line 180
    .itemInputs('1x #forge:ingots/pig_iron')
    .inputFluids(safeFluidOf('gtceu:oxygen', 50))
    .itemOutputs('1x #forge:ingots/steel')
    .blastFurnaceTemp(1750)
    .EUt(voltAmps[1])
    .duration(10)
    .circuit(1)

  event.recipes.susy.EBF_RECIPES('6zbqqqdiazxmau') // remapped from original line 190
    .itemInputs('1x #forge:ingots/pig_iron')
    .inputFluids(safeFluidOf('gtceu:oxygen', 50))
    .itemOutputs(safeItemId('1x minecraft:iron_ingot'))
    .blastFurnaceTemp(1750)
    .EUt(voltAmps[1])
    .duration(10)
    .circuit(2)

  event.recipes.susy.reaction_furnace('zfe8gayefzyad6') // remapped from original line 222
    .itemInputs('1x #forge:dusts/iron')
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 5000))
    .outputFluids(safeFluidOf('susy:crude_iron_pentacarbonyl', 1000))
    .duration(200)
    .EUt(60)

  event.recipes.gtceu.distillery('h9t0wumjmsmnij') // remapped from original line 230
    .inputFluids(safeFluidOf('susy:crude_iron_pentacarbonyl', 1000))
    .outputFluids(safeFluidOf('susy:iron_pentacarbonyl', 1000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.roaster('ll45vf2jr3r9bg') // remapped from original line 237
    .inputFluids(safeFluidOf('susy:iron_pentacarbonyl', 1000))
    .itemOutputs('1x #forge:dusts/high_purity_iron')
    .outputFluids(safeFluidOf('gtceu:carbon_monoxide', 5000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.EBF_RECIPES('jkwm5a12snpbrj') // remapped from original line 245
    .circuit(1)
    .itemInputs('1x #forge:dusts/any_purity_iron')
    .itemOutputs(safeItemId('1x minecraft:iron_ingot'))
    .duration(60)
    .blastFurnaceTemp(1750)
    .EUt(60)

  event.recipes.susy.roaster('pnztjwvzed3mjg') // remapped from original line 256
    .itemInputs('14x #forge:dusts/iron_iii_hydroxide')
    .itemOutputs('5x #forge:dusts/iron_iii_oxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 3000))
    .duration(80)
    .EUt(30)

  event.recipes.susy.roaster('ow7tbhrsi1dq7b') // remapped from original line 264
    .itemInputs('5x #forge:dusts/iron_ii_hydroxide')
    .itemOutputs('2x #forge:dusts/iron_ii_oxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .EUt(voltAmps[1])
    .duration(200)

  event.recipes.gtceu.BR('bzdax4gpirkpza') // remapped from original line 273
    .itemInputs('4x #forge:dusts/iron_iii_chloride')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 3000))
    .itemOutputs('7x #forge:dusts/iron_iii_hydroxide')
    .outputFluids(safeFluidOf('gtceu:salt_water', 3000))
    .duration(20)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (blastable in blastables) {
  //     for (combustible in combustibles) {
  //         //BESSEMER PROCESS
  //         PBF_RECIPES.recipeBuilder()
  //         .inputs(ore(blastable.name) * blastable.amount_required)
  //         .inputs(ore(combustible.name) * (combustible.equivalent(1) * blastable.reductant_required))
  //         .outputs(metaitem('ingotPigIron') * blastable.amount_produced)
  //         .outputs(metaitem(combustible.byproduct) * (combustible.equivalent(1) * blastable.reductant_required))
  //         .duration((int) (combustible.duration * blastable.amount_produced * blastable.duration))
  //         .buildAndRegister()
  // 
  //         //MODERN BLAST FURNACE
  //         EBF_RECIPES.recipeBuilder()
  //         .inputs(ore(blastable.name) * blastable.amount_required)
  //         .inputs(ore(combustible.name) * (combustible.equivalent(1) * blastable.reductant_required))
  //         .outputs(metaitem('ingotPigIron') * blastable.amount_produced)
  //         .outputs(metaitem(combustible.byproduct) * (combustible.equivalent(1) * blastable.reductant_required))
  //         .duration((int) (combustible.duration * blastable.amount_produced * blastable.duration / 2))
  //         .blastFurnaceTemp(1750)
  //         .EUt(Globals.voltAmps[1])
  //         .buildAndRegister()
  //     }
  // 
  //     //DIRECT REDUCED IRON
  //     for (reductant in reductants) {
  //         EBF_RECIPES.recipeBuilder()
  //         .inputs(ore(blastable.name) * blastable.amount_required)
  //         .fluidInputs(fluid(reductant.name) * (blastable.reductant_required * reductant.amount_required))
  //         .outputs(item('minecraft:iron_ingot') * blastable.amount_produced)
  //         .chancedOutput(metaitem('dustSiliconDioxide'), 5000, 0)
  //         .fluidOutputs(fluid(reductant.byproduct) * (blastable.reductant_required * reductant.byproduct_amount))
  //         .duration((int) (blastable.amount_produced * blastable.duration / 4))
  //         .circuitMeta(1)
  //         .blastFurnaceTemp(1750)
  //         .EUt(Globals.voltAmps[3])
  //         .buildAndRegister()
  // 
  //         EBF_RECIPES.recipeBuilder()
  //         .inputs(ore(blastable.name) * blastable.amount_required)
  //         .fluidInputs(fluid(reductant.name) * (blastable.reductant_required * reductant.amount_required))
  //         .outputs(metaitem('ingotPigIron') * blastable.amount_produced)
  //         .fluidOutputs(fluid(reductant.byproduct) * (blastable.reductant_required * reductant.byproduct_amount))
  //         .duration((int)(blastable.amount_produced * blastable.duration / 4))
  //         .blastFurnaceTemp(1750)
  //         .circuitMeta(2)
  //         .EUt(Globals.voltAmps[3])
  //         .buildAndRegister()
  //     }
  // }

  // for (combustible in combustibles) {
  //     PBF_RECIPES.recipeBuilder()
  //     .inputs(item('minecraft:iron_ingot'))
  //     .inputs(ore(combustible.name) * combustible.equivalent(1))
  //     .outputs(metaitem('ingotSteel'))
  //     .outputs(metaitem(combustible.byproduct) * combustible.equivalent(1))
  //     .duration(combustible.duration * 120)
  //     .buildAndRegister()
  // 
  //     PBF_RECIPES.recipeBuilder()
  //     .inputs(ore('ingotWroughtIron'))
  //     .inputs(ore(combustible.name) * combustible.equivalent(1))
  //     .outputs(metaitem('ingotSteel'))
  //     .outputs(metaitem(combustible.byproduct) * combustible.equivalent(1))
  //     .duration(combustible.duration * 60)
  //     .buildAndRegister()
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.CarbonGlobals.*
  // FORGE_HAMMER = recipemap('forge_hammer')
  // RF = recipemap('reaction_furnace')
  // DISTILLERY = recipemap('distillery')
  // ROASTER = recipemap('roaster')
  // class BlastableIron {
  //     String name
  //     int amount_required
  //     int amount_produced
  //     //In liters
  //     int reductant_required
  //     int duration
  //     BlastableIron(name, amount_required, amount_produced, reductant_required, duration) {
  //         this.name = name
  //         this.amount_required = amount_required
  //         this.amount_produced = amount_produced
  //         this.reductant_required = reductant_required
  //         this.duration = duration
  //     }
  // }
  // class ReductantIron {
  //     String name
  //     String byproduct
  //     int amount_required
  //     int byproduct_amount
  //     ReductantIron(name, byproduct, amount_required, byproduct_amount) {
  //         this.name = name
  //         this.byproduct = byproduct
  //         this.amount_required = 1000 * amount_required
  //         this.byproduct_amount = 1000 * byproduct_amount
  //     }
  // }
  // def PBF_RECIPES = recipemap("primitive_blast_furnace")
  // def EBF_RECIPES = recipemap("electric_blast_furnace")
  // def blastables = [
  //     new BlastableIron('dustMagnetite', 2, 6, 4, 80),
  //     new BlastableIron('dustBandedIron', 2, 4, 3, 80),
  //     new BlastableIron('dustHematite', 2, 4, 3, 80),
  //     new BlastableIron('dustIronIiiOxide', 5, 2, 3, 20),
  //     new BlastableIron('dustIronIiOxide', 2, 1, 1, 20),
  //     new BlastableIron('dustGraniticMineralSand', 2, 6, 4, 80),
  //     new BlastableIron('oreIron', 2, 2, 2, 60),
  //     new BlastableIron('oreMagnetite', 1, 3, 4, 60),
  //     new BlastableIron('oreBandedIron', 1, 2, 3, 60),
  //     new BlastableIron('oreNetherrackMagnetite', 1, 6, 4, 60),
  //     new BlastableIron('oreNetherrackBandedIron', 1, 4, 3, 60),
  //     new BlastableIron('oreEndstoneMagnetite', 1, 6, 4, 60),
  //     new BlastableIron('oreEndstoneBandedIron', 1, 4, 3, 60)
  // ]
  // def reductants = [
  //     new ReductantIron('carbon_monoxide', 'carbon_dioxide', 1, 1),
  //     new ReductantIron('hydrogen', 'dense_steam', 2, 1)
  // ]
  // def combustibles = combustibles()
  // furnace.add(metaitem('dustBrownLimonite'), metaitem('dustBandedIron'))
  // furnace.add(metaitem('dustYellowLimonite'), metaitem('dustBandedIron'))
  // furnace.add(metaitem('ingotWroughtIron'), item('minecraft:iron_ingot'))
  // crafting.addShapeless('pig_iron_shearing', metaitem('ingotWroughtIron'), [
  //     ore('craftingToolHardHammer'),
  //     metaitem('ingotPigIron')
  // ])
});