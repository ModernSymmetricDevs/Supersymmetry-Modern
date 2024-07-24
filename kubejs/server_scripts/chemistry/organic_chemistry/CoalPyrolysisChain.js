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

  event.recipes.gtceu.CENTRIFUGE('0uw6taqcbxhjua') // remapped from original line 79
    .inputFluids(safeFluidOf('gtceu:coal_gas', 10000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:syngas', 10000))
    .outputFluids(safeFluidOf('susy:ammonia_solution', 1000))
    .duration(120)
    .EUt(30)

  event.recipes.gtceu.DISTILLATION_TOWER('pph8wbhq1vr3ca') // remapped from original line 88
    .chancedOutput(metaitem('bitumen'), 5000, 0)
    .inputFluids(safeFluidOf('gtceu:coal_tar', 1000))
    .outputFluids(safeFluidOf('susy:anthracene_oil', 100))
    .outputFluids(safeFluidOf('susy:naphthalene_oil', 100))
    .outputFluids(safeFluidOf('gtceu:creosote', 450))
    .outputFluids(safeFluidOf('gtceu:light_oil', 350))
    .duration(200)
    .EUt(48)

  event.recipes.gtceu.CENTRIFUGE('awlwud4kxphiaa') // remapped from original line 99
    .inputFluids(safeFluidOf('susy:naphthalene_oil', 1000))
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 100))
    .outputFluids(safeFluidOf('gtceu:creosote', 100))
    .outputFluids(safeFluidOf('susy:alkaline_naphthalene_oil', 1000))
    .duration(120)
    .EUt(30)

  event.recipes.gtceu.CENTRIFUGE('l7vdevgftdcilm') // remapped from original line 108
    .inputFluids(safeFluidOf('susy:alkaline_naphthalene_oil', 1000))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .outputFluids(safeFluidOf('susy:sodium_sulfate_solution', 100))
    .outputFluids(safeFluidOf('susy:purified_naphthalene_oil', 1000))
    .duration(120)
    .EUt(30)

  event.recipes.gtceu.DISTILLATION_TOWER('jtoajgjqmksf1l') // remapped from original line 117
    .inputFluids(safeFluidOf('susy:purified_naphthalene_oil', 1000))
    .outputFluids(safeFluidOf('susy:anthracene_oil', 100))
    .outputFluids(safeFluidOf('gtceu:naphthalene', 800))
    .outputFluids(safeFluidOf('gtceu:light_oil', 100))
    .duration(200)
    .EUt(48)

  event.recipes.gtceu.MIXER('ifak4yfjnkgrdw') // remapped from original line 126
    .inputFluids(safeFluidOf('gtceu:light_oil', 1000))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .outputFluids(safeFluidOf('susy:acidic_light_oil', 1000))
    .duration(120)
    .EUt(30)

  event.recipes.gtceu.CENTRIFUGE('b3kzfkpltktvvk') // remapped from original line 134
    .inputFluids(safeFluidOf('susy:acidic_light_oil', 1000))
    .inputFluids(safeFluidOf('susy:furfural', 75))
    .outputFluids(safeFluidOf('susy:btex_extract', 750))
    .outputFluids(safeFluidOf('susy:crude_pyridinium_sulfate', 250))
    .duration(120)
    .EUt(30)

  event.recipes.susy.CSTR('kpe1ppza7dzwc3') // remapped from original line 143
    .inputFluids(safeFluidOf('susy:crude_pyridinium_sulfate', 50))
    .inputFluids(safeFluidOf('gtceu:ammonia', 100))
    .outputFluids(safeFluidOf('susy:impure_pyridine', 50))
    .duration(1)
    .EUt(30)

  event.recipes.gtceu.DISTILLATION_TOWER('lglam5zc5lazsw') // remapped from original line 151
    .inputFluids(safeFluidOf('susy:impure_pyridine', 1000))
    .itemOutputs('15x #forge:dusts/ammonium_sulfate')
    .outputFluids(safeFluidOf('susy:gtfo_aniline', 250))
    .outputFluids(safeFluidOf('susy:pyridine', 750))
    .duration(200)
    .EUt(48)

  event.recipes.gtceu.MIXER('fqykwe7xsp3nxl') // remapped from original line 160
    .inputFluids(safeFluidOf('susy:anthracene_oil', 1000))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .outputFluids(safeFluidOf('susy:acidic_anthracene_oil', 1000))
    .duration(120)
    .EUt(30)

  event.recipes.gtceu.CENTRIFUGE('ysfj5qbwcrmvpg') // remapped from original line 168
    .inputFluids(safeFluidOf('susy:acidic_anthracene_oil', 1000))
    .inputFluids(safeFluidOf('susy:ethylene_glycol', 75))
    .outputFluids(safeFluidOf('susy:anthracene_extract', 750))
    .outputFluids(safeFluidOf('susy:crude_quinolinium_sulfate', 250))
    .duration(120)
    .EUt(30)

  event.recipes.gtceu.DISTILLATION_TOWER('fpfxgq9b2dih2f') // remapped from original line 177
    .inputFluids(safeFluidOf('susy:anthracene_extract', 1000))
    .chancedOutput('8000x #forge:dusts/anthracene', 8000, 0)
    .outputFluids(safeFluidOf('susy:ethylene_glycol', 100))
    .outputFluids(safeFluidOf('gtceu:light_oil', 200))
    .duration(200)
    .EUt(48)

  event.recipes.susy.CSTR('tmg50ynvi61zvy') // remapped from original line 186
    .inputFluids(safeFluidOf('susy:crude_quinolinium_sulfate', 50))
    .inputFluids(safeFluidOf('gtceu:ammonia', 100))
    .outputFluids(safeFluidOf('susy:impure_quinoline', 50))
    .duration(1)
    .EUt(30)

  event.recipes.gtceu.DISTILLATION_TOWER('ogjusytqqtpbcc') // remapped from original line 194
    .inputFluids(safeFluidOf('susy:impure_quinoline', 1000))
    .itemOutputs('15x #forge:dusts/ammonium_sulfate')
    .outputFluids(safeFluidOf('susy:quinoline', 800))
    .outputFluids(safeFluidOf('susy:naphthalene_oil', 200))
    .duration(200)
    .EUt(48)

  event.recipes.gtceu.CENTRIFUGE('gvsgfnbzre24vd') // remapped from original line 204
    .itemInputs('1x #forge:dusts/lignite')
    .chancedOutput('2500x #forge:dusts/carbon', 2500, 0)
    .duration(80)
    .EUt(30)

  event.recipes.gtceu.CENTRIFUGE('w49bidh8pk2aa9') // remapped from original line 211
    .itemInputs('1x #forge:dusts/lignite_coke')
    .chancedOutput('7500x #forge:dusts/carbon', 7500, 0)
    .duration(80)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // byNames(['dustCoal', 'gemCoal', 'dustCharcoal', 'gemCharcoal']).each { input ->
  //     int CARBON_PROCESSED = 1200
  //     def output = byName(input.pyrolysis_product)
  //     PYROLYSE_OVEN.recipeBuilder()
  //         .inputs(ore(input.name) * input.num_items_by_carbon(CARBON_PROCESSED))
  //         .outputs(metaitem(output.name) * output.num_items_by_carbon(CARBON_PROCESSED))
  //         .fluidOutputs(fluid('coal_gas') * 2500)
  //         .fluidOutputs(fluid('coal_tar') * 2500)
  //         .duration(320)
  //         .EUt(60)
  //         .buildAndRegister()
  // }

  // byNames(['dustAnthracite', 'gemAnthracite']).each { input ->
  //     int CARBON_PROCESSED = 1400
  //     def output = byName(input.pyrolysis_product)
  //     PYROLYSE_OVEN.recipeBuilder()
  //         .inputs(ore(input.name) * input.num_items_by_carbon(CARBON_PROCESSED))
  //         .outputs(metaitem(output.name) * output.num_items_by_carbon(CARBON_PROCESSED))
  //         .fluidOutputs(fluid('coal_gas') * 3200)
  //         .fluidOutputs(fluid('coal_tar') * 3200)
  //         .duration(320)
  //         .EUt(60)
  //         .buildAndRegister()
  // }

  // byNames(['dustLignite', 'gemLignite']).each { input ->
  //     int CARBON_PROCESSED = 400
  //     def output = byName(input.pyrolysis_product)
  //     PYROLYSE_OVEN.recipeBuilder()
  //         .inputs(ore(input.name) * input.num_items_by_carbon(CARBON_PROCESSED))
  //         .outputs(metaitem(output.name) * output.num_items_by_carbon(CARBON_PROCESSED))
  //         .fluidOutputs(fluid('creosote') * 1600)
  //         .fluidOutputs(fluid('syngas') * 2000)
  //         .duration(320)
  //         .EUt(60)
  //         .buildAndRegister()
  // }

  // byNames(['dustCoke', 'gemCoke']).each { input ->
  //     def output = byName(input.pyrolysis_product)
  //     PYROLYSE_OVEN.recipeBuilder()
  //         .inputs(ore(input.name) * 16)
  //         .outputs(metaitem(output.name) * 12)
  //         .fluidInputs(fluid('steam') * 15000)
  //         .fluidOutputs(fluid('syngas') * 12000)
  //         .duration(320)
  //         .EUt(60)
  //         .buildAndRegister()
  // }

  // byNames(['dustLigniteCoke', 'gemLigniteCoke']).each { input ->
  //     def output = byName(input.pyrolysis_product)
  //     PYROLYSE_OVEN.recipeBuilder()
  //         .inputs(ore(input.name) * 16)
  //         .outputs(metaitem(output.name) * 9)
  //         .fluidInputs(fluid('steam') * 15000)
  //         .fluidOutputs(fluid('syngas') * 12000)
  //         .duration(320)
  //         .EUt(60)
  //         .buildAndRegister()
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.CarbonGlobals.*
  // import gregtech.api.recipes.ModHandler;
  // import gregtech.api.unification.material.Materials;
  // import gregtech.api.unification.ore.OrePrefix;
  // import gregtech.api.unification.stack.UnificationEntry;
  // def PYROLYSE_OVEN = recipemap('pyrolyse_oven');
  // def DISTILLATION_TOWER = recipemap('distillation_tower');
  // def CENTRIFUGE = recipemap('centrifuge');
  // def MIXER = recipemap('mixer');
  // def CSTR = recipemap('continuous_stirred_tank_reactor');
  // def DISTILLERY = recipemap('distillery');
});