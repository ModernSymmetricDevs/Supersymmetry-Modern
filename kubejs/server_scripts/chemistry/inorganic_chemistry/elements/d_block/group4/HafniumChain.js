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

  event.recipes.gtceu.centrifuge('rbgfcuz6ujhysk') // remapped from original line 24
    .inputFluids(safeFluidOf('susy:hafnium_extract', 1000))
    .inputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 80))
    .outputFluids(safeFluidOf('susy:hafnium_extraction_mixture', 1000))
    .outputFluids(safeFluidOf('susy:hafnium_sulfate_solution', 40))
    .EUt(voltAmps[3])
    .duration(20)

  event.recipes.susy.roaster('qebm8ahzlw6wmx') // remapped from original line 33
    .inputFluids(safeFluidOf('susy:hafnium_sulfate_solution', 2000))
    .itemOutputs('3x #forge:dusts/hafnium_dioxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 2000))
    .outputFluids(safeFluidOf('gtceu:sulfur_trioxide', 2000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.susy.REACTION_FURNACE('hf2tpauvlda1yk') // remapped from original line 54
    .itemInputs('5x #forge:dusts/impure_hafnium_tetrachloride')
    .notConsumable(safeFluidOf('gtceu:nitrogen', 1000))
    .notConsumable(safeFluidOf('gtceu:hydrogen', 1000))
    .outputFluids(safeFluidOf('susy:hafnium_tetrachloride', 720))
    .duration(100)
    .EUt(voltAmps[4])

  event.recipes.susy.vacuum_chamber('ow5eiqpgpp0tgt') // remapped from original line 77
    .itemInputs(metaitem('sponge.hafnium.crude'))
    .itemOutputs(metaitem('sponge.hafnium'))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.gtceu.macerator('nazjwizguju7yy') // remapped from original line 84
    .itemInputs(metaitem('sponge.hafnium'))
    .itemOutputs('1x #forge:dusts/hafnium')
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('4lafkfsfktwgbp') // remapped from original line 93
    .itemInputs('1x #forge:dusts/hafnium')
    .itemInputs('4x #forge:dusts/any_purity_iodine')
    .itemOutputs('5x #forge:dusts/hafnium_iodide')
    .duration(360)
    .EUt(voltAmps[3])

  event.recipes.susy.CVD('1yd2jdghrkmepb') // remapped from original line 101
    .itemInputs('5x #forge:dusts/hafnium_iodide')
    .notConsumable('1x #forge:rods/tungsten')
    .itemOutputs('1x #forge:dusts/high_purity_hafnium')
    .outputFluids(safeFluidOf('gtceu:iodine', 576))
    .duration(180)
    .EUt(voltAmps[4])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (highPurityCombustible in highPurityCombustibles()) {
  //         FLUIDIZED_BED_REACTOR.recipeBuilder()
  //                 .inputs(ore('dustHafniumDioxide'))
  //                 .inputs(ore(highPurityCombustible.name) * highPurityCombustible.equivalent(2))
  //                 .fluidInputs(fluid('chlorine') * 4000)
  //                 .outputs(metaitem('dustImpureHafniumTetrachloride') * 5)
  //                 .fluidOutputs(fluid('carbon_monoxide') * 2000)
  //                 .duration(200 * highPurityCombustible.duration)
  //                 .EUt(Globals.voltAmps[3])
  //                 .buildAndRegister()
  // }

  // for (inertGas in Globals.inertGases) {
  //         EBF.recipeBuilder()
  //                 .circuitMeta(2)
  //                 .fluidInputs(fluid('hafnium_tetrachloride') * 720)
  //                 .notConsumable(fluid(inertGas.name) * inertGas.amount_required)
  //                 .inputs(ore('dustAnyPurityMagnesium') * 2)
  //                 .outputs(metaitem('sponge.hafnium.crude'))
  //                 .fluidOutputs(fluid('magnesium_chloride') * 864)
  //                 .blastFurnaceTemp(2150)
  //                 .duration(100 * inertGas.duration)
  //                 .EUt(Globals.voltAmps[4])
  //                 .buildAndRegister()
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.CarbonGlobals.*
  // MIXER = recipemap('mixer')
  // FF = recipemap('froth_flotation')
  // CLARIFIER = recipemap('clarifier')
  // CENTRIFUGE = recipemap('centrifuge')
  // ELECTROMAGNETIC_SEPARATOR = recipemap('electromagnetic_separator')
  // BR = recipemap('batch_reactor')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // SIFTER = recipemap('sifter')
  // FLUIDIZED_BED_REACTOR = recipemap('fluidized_bed_reactor')
  // VACUUM_FREEZER = recipemap('vacuum_freezer')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // VACUUM_CHAMBER = recipemap('vacuum_chamber')
  // MACERATOR = recipemap('macerator')
  // FIXED_BED_REACTOR = recipemap('fixed_bed_reactor')
  // EBF = recipemap('electric_blast_furnace')
  // DISTILLERY = recipemap('distillery')
  // GRAVITY_SEPARATOR = recipemap('gravity_separator')
  // ADVANCED_ARC_FURNACE = recipemap('advanced_arc_furnace')
  // ROASTER = recipemap('roaster')
});