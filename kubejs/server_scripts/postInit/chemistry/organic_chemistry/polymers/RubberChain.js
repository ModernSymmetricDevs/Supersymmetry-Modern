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
  event.remove({ type: 'gtceu:extractor', input: 'minecraft:slime_ball'})
  event.remove({ type: 'gtceu:extractor', input: 'susy:rubber_drop'})
  event.remove({ type: 'gtceu:extractor', input: 'gregtech:rubber_sapling'})
  event.remove({ type: 'gtceu:extractor', input: 'gregtech:rubber_leaves'})
  event.remove({ type: 'gtceu:extractor', input: 'gregtech:rubber_log'})
  event.remove({ type: 'gtceu:extractor', input: '#forge:dusts/latex'})

  event.recipes.susy.COAGULATION_RECIPES('buwffuwuk3wow6') // remapped from original line 96
    .inputFluids(safeFluidOf('susy:latex', 1000) * amount))
    .notConsumable(fluid(coagulant.name) * (coagulant.amount_required * amount))
    .itemOutputs(metaitem('dustLatex') * (coagulant.yield_bonus * amount))
    .duration(duration.intdiv(coagulant.speed_bonus))

  event.recipes.susy.COAGULATION_RECIPES('noffg8hm5jindd') // remapped from original line 104
    .inputFluids(safeFluidOf('susy:latex', 1000) * amount))
    .notConsumable(ore(coagulant.name) * (coagulant.amount_required * amount))
    .itemOutputs(metaitem('dustLatex') * (coagulant.yield_bonus * amount))
    .duration(duration.intdiv(coagulant.speed_bonus))

  event.recipes.susy.COAGULATION_RECIPES('xh2r8hkjcjlpuq') // remapped from original line 116
    .inputFluids(safeFluidOf('susy:latex', 1000) * amount))
    .notConsumable('1x #forge:rods/iron')
    .itemOutputs(metaitem('dustLatex') * amount)
    .duration(duration)

  event.recipes.susy.polymerization_tank('fckf5dymlizuxi') // remapped from original line 218
    .inputFluids(safeFluidOf('gtceu:isoprene', 1000))
    .itemOutputs('4x #forge:dusts/polyisoprene')
    .notConsumable('1x #forge:dusts/ziegler_natta_catalyst')
    .duration(200)
    .EUt(120)

  event.recipes.susy.polymerization_tank('nu3yfwg5gtcwmx') // remapped from original line 226
    .inputFluids(safeFluidOf('gtceu:isoprene', 1000))
    .itemOutputs('6x #forge:dusts/polyisoprene')
    .notConsumable(safeFluidOf('susy:butyllithium', 100))
    .duration(200)
    .EUt(120)

  event.recipes.susy.polymerization_tank('mxn5nefrhpchwg') // remapped from original line 234
    .inputFluids(safeFluidOf('susy:purified_isoprene', 1000))
    .itemOutputs('6x #forge:dusts/polyisoprene')
    .notConsumable('1x #forge:dusts/ziegler_natta_catalyst')
    .duration(200)
    .EUt(120)

  event.recipes.susy.polymerization_tank('vffs8etlwnc4t1') // remapped from original line 242
    .inputFluids(safeFluidOf('susy:purified_isoprene', 1000))
    .itemOutputs('8x #forge:dusts/polyisoprene')
    .notConsumable(safeFluidOf('susy:butyllithium', 100))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.mixer('fkiall4tycmwsw') // remapped from original line 252
    .inputFluids(safeFluidOf('gtceu:styrene', 1000))
    .inputFluids(safeFluidOf('gtceu:isoprene', 3000))
    .inputFluids(safeFluidOf('gtceu:ethanol', 1000))
    .outputFluids(safeFluidOf('susy:styrene_isoprene_solution', 5000))
    .EUt(60)
    .duration(200)

  event.recipes.susy.POLYMERIZATION('gh2kf8z7doptvr') // remapped from original line 261
    .inputFluids(safeFluidOf('susy:styrene_isoprene_solution', 5000))
    .notConsumable(safeFluidOf('susy:butyllithium', 100))
    .outputFluids(safeFluidOf('susy:polymerized_styrene_isoprene_solution', 5000))
    .EUt(120)
    .duration(533)

  event.recipes.susy.dryer('uyvdhtwvhmi1jb') // remapped from original line 269
    .inputFluids(safeFluidOf('susy:polymerized_styrene_isoprene_solution', 5000))
    .outputFluids(safeFluidOf('gtceu:ethanol', 1000))
    .itemOutputs('16x #forge:dusts/raw_styrene_isoprene_rubber')
    .EUt(120)
    .duration(533)

  event.recipes.gtceu.sifter('wup4r72ojmbz56') // remapped from original line 279
    .inputFluids(safeFluidOf('susy:ethanol_water_azeotrope', 1000))
    .itemInputs('4x #forge:dusts/molecular_sieve')
    .outputFluids(safeFluidOf('gtceu:ethanol', 900))
    .itemOutputs('4x #forge:dusts/wet_molecular_sieve')
    .EUt(30)
    .duration(200)

  event.recipes.gtceu.mixer('a2w3imbqpq9aco') // remapped from original line 288
    .inputFluids(safeFluidOf('gtceu:styrene', 1000))
    .inputFluids(safeFluidOf('gtceu:butadiene', 3000))
    .inputFluids(safeFluidOf('gtceu:ethanol', 1000))
    .outputFluids(safeFluidOf('susy:styrene_butadiene_solution', 5000))
    .EUt(60)
    .duration(200)

  event.recipes.susy.POLYMERIZATION('2t1oqgpltyvme3') // remapped from original line 297
    .inputFluids(safeFluidOf('susy:styrene_butadiene_solution', 5000))
    .notConsumable(safeFluidOf('susy:butyllithium', 100))
    .outputFluids(safeFluidOf('susy:polymerized_styrene_butadiene_solution', 5000))
    .EUt(120)
    .duration(533)

  event.recipes.susy.dryer('9opjtcuipntdla') // remapped from original line 305
    .inputFluids(safeFluidOf('susy:polymerized_styrene_butadiene_solution', 5000))
    .outputFluids(safeFluidOf('gtceu:ethanol', 1000))
    .itemOutputs('16x #forge:dusts/raw_styrene_butadiene_rubber')
    .EUt(120)
    .duration(533)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (rubber in rubbers) {
  //     for (sulfurSource in sulfurSources) { 
  //         for(shape in shapes) {
  //             for (catalyser in catalysers) {
  //                     if(rubber.isFluid)  {
  //                         VULCANIZING_RECIPES.recipeBuilder()
  //                         .fluidInputs(fluid(rubber.name) * rubber.amount_required * 1000)
  //                         .inputs(ore(sulfurSource.name) * sulfurSource.amount_required)
  //                         .notConsumable(ore(catalyser.name))
  //                         .notConsumable(metaitem('shape.extruder.' + shape.name))
  //                         .outputs(metaitem(shape.name + rubber.output) * (rubber.yield * shape.yield))
  //                         .duration(rubber.duration.intdiv(catalyser.speed_bonus))
  //                         .EUt(7)
  //                         .buildAndRegister()
  //                     } 
  //                     else {
  //                         VULCANIZING_RECIPES.recipeBuilder()
  //                         .inputs(ore(rubber.name) * rubber.amount_required)
  //                         .inputs(ore(sulfurSource.name) * sulfurSource.amount_required)
  //                         .notConsumable(ore(catalyser.name))
  //                         .notConsumable(metaitem('shape.extruder.' + shape.name))
  //                         .outputs(metaitem(shape.name + rubber.output) * (rubber.yield * shape.yield))
  //                         .duration(rubber.duration.intdiv(catalyser.speed_bonus))
  //                         .EUt(7)
  //                         .buildAndRegister()
  //                     }
  //                 }
  //                 if(rubber.isFluid)  {
  //                     VULCANIZING_RECIPES.recipeBuilder()
  //                     .fluidInputs(fluid(rubber.name) * rubber.amount_required * 1000)
  //                     .inputs(ore(sulfurSource.name) * sulfurSource.amount_required)
  //                     .notConsumable(metaitem('shape.extruder.' + shape.name))
  //                     .circuitMeta(2)
  //                     .outputs(metaitem(shape.name + rubber.output) * (rubber.yield * shape.yield))
  //                     .duration(rubber.duration)
  //                     .EUt(7)
  //                     .buildAndRegister()
  //                 } 
  //                 else {
  //                     VULCANIZING_RECIPES.recipeBuilder()
  //                     .inputs(ore(rubber.name) * rubber.amount_required)
  //                     .inputs(ore(sulfurSource.name) * sulfurSource.amount_required)
  //                     .notConsumable(metaitem('shape.extruder.' + shape.name))
  //                     .circuitMeta(2)
  //                     .outputs(metaitem(shape.name + rubber.output) * (rubber.yield * shape.yield))
  //                     .duration(rubber.duration)
  //                     .EUt(7)
  //                     .buildAndRegister()
  //             }
  //         }    
  //     }
  // }

  // for (coagulant in coagulants) {
  //     CoagulationRecipe(coagulant, 1, 150)
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import gregtech.api.recipes.ModHandler;
  // import gregtech.api.unification.material.Materials;
  // import gregtech.api.unification.ore.OrePrefix;
  // import gregtech.api.unification.stack.UnificationEntry;
  // POLYMERIZATION_TANK = recipemap('polymerization_tank')
  // MIXER = recipemap('mixer')
  // SIFTER = recipemap('sifter')
  // DRYER = recipemap('dryer')
  // EXTRACTOR = recipemap('extractor')
  // class Catalyser {
  //     String name
  //     int speed_bonus
  //     Catalyser(name, speed_bonus) {
  //         this.name = name
  //         this.speed_bonus = speed_bonus
  //     }
  // }
  // class SulfurSource {
  //     String name
  //     int amount_required
  //     SulfurSource(name, amount_required) {
  //         this.name = name
  //         this.amount_required = amount_required
  //     }
  // }
  // class Rubber {
  //     String name 
  //     String output
  //     int amount_required
  //     int duration
  //     int yield
  //     boolean isFluid 
  //     Rubber(name, output, amount_required, duration, yield, isFluid){
  //         this.name = name
  //         this.output = output
  //         this.amount_required = amount_required
  //         this.duration = duration
  //         this.yield = yield
  //         this.isFluid = isFluid
  //     }
  // }
  // class Coagulant {
  //     String name
  //     int amount_required
  //     int speed_bonus
  //     int yield_bonus
  //     boolean isFluid
  //     Coagulant(name, amount_required, speed_bonus, yield_bonus, isFluid){
  //         this.name = name
  //         this.amount_required = amount_required
  //         this.speed_bonus = speed_bonus
  //         this.yield_bonus = yield_bonus
  //         this.isFluid = isFluid
  //     }
  // }
  // class Shape {
  //     String name
  //     int yield
  //     Shape(name, yield){
  //         this.name = name
  //         this.yield = yield
  //     }
  // }
  // def CoagulationRecipe(coagulant, amount, duration){
  //     def COAGULATION_RECIPES = recipemap("coagulation_tank")
  //     if(coagulant.isFluid){
  //     }
  //     else{
  //     }
  // }
  // def CoagulationRecipe(amount, duration){
  //     def COAGULATION_RECIPES = recipemap("coagulation_tank")
  // }
  // def rubbers = [
  //     new Rubber('dustLatex', 'Rubber', 4, 40 * 20, 4, false),
  //     new Rubber('dustPolyisoprene', 'Rubber', 8, 225, 8, false),
  //     new Rubber('dustRawStyreneIsopreneRubber', 'StyreneIsopreneRubber', 4, 30 * 20, 4, false),
  //     new Rubber('dustRawStyreneButadieneRubber', 'StyreneButadieneRubber', 4, 30 * 20, 4, false)
  // ]
  // def sulfurSources = [
  //     new SulfurSource('dustSulfur', 1)
  // ]
  // def catalysers = [
  //     new Catalyser('dustZincite', 2),
  //     new Catalyser('dustMagnesia', 2)
  // ]
  // def coagulants = [
  //     new Coagulant('dustCalciumChloride', 2, 1, 1, false),
  //     new Coagulant('acetic_acid', 250, 4, 1, true),
  //     new Coagulant('sulfuric_acid', 125, 2, 1, true)
  // ]
  // def shapes = [
  //     new Shape('plate', 1),
  //     new Shape('ring', 4),
  //     new Shape('foil', 4),
  //     new Shape('ingot', 1),
  // ]
  // def VULCANIZING_RECIPES = recipemap("vulcanizing_press")
  // CoagulationRecipe(1, 150)
});