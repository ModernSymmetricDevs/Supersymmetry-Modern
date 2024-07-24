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

  event.recipes.susy.continuous_stirred_tank_reactor('edj5r2b8rvqtao') // remapped from original line 13
    .inputFluids(safeFluidOf('susy:gtfo_hydrogen_cyanide', 50))
    .inputFluids(safeFluidOf('gtceu:acetone', 50))
    .outputFluids(safeFluidOf('susy:acetone_cyanohydrin', 50))
    .duration(10)
    .EUt(30)

  event.recipes.susy.batch_reactor('6vxn90g3kvnum7') // remapped from original line 21
    .inputFluids(safeFluidOf('susy:acetone_cyanohydrin', 1000))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemOutputs('20x #forge:dusts/methacrylamide_sulfate')
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('y7gxcj1jbmciri') // remapped from original line 29
    .itemInputs('20x #forge:dusts/methacrylamide_sulfate')
    .inputFluids(safeFluidOf('gtceu:methanol', 1000))
    .outputFluids(safeFluidOf('susy:methyl_methacrylate', 1000))
    .itemOutputs('11x #forge:dusts/ammonium_bisulfate')
    .duration(300)
    .EUt(30)

  event.recipes.susy.FBR('6icdeh8rw6hfh0') // remapped from original line 40
    .notConsumable('1x #forge:dusts/molybdenum_trioxide')
    .inputFluids(safeFluidOf('susy:isobutylene', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 100))
    .outputFluids(safeFluidOf('susy:gaseous_methacrolein_mixture', 100))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.large_chemical_reactor('rrztqjo9ryo8sg') // remapped from original line 49
    .itemInputs('48x #forge:dusts/purified_molybdenum_trioxide')
    .inputFluids(safeFluidOf('gtceu:phosphoric_acid', 1000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 28000))
    .itemOutputs('1x #forge:dusts/phosphomolybdic_acid')
    .duration(500)
    .EUt(480)

  event.recipes.susy.FBR('dgwkaqu67bgrii') // remapped from original line 58
    .notConsumable('1x #forge:dusts/phosphomolybdic_acid')
    .inputFluids(safeFluidOf('susy:gaseous_methacrolein_mixture', 100))
    .inputFluids(safeFluidOf('gtceu:oxygen', 50))
    .outputFluids(safeFluidOf('susy:gaseous_methacrylic_acid_mixture', 100))
    .duration(10)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('tnz0518hnuxqim') // remapped from original line 67
    .inputFluids(safeFluidOf('susy:gaseous_methacrylic_acid_mixture', 2000)L methacrolein
    .inputFluids(safeFluidOf('minecraft:water', 750))
    .outputFluids(safeFluidOf('susy:methacrylic_acid_solution', 1500))
    .outputFluids(safeFluidOf('susy:gaseous_methacrolein_residue', 1250))
    .duration(200)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('khvkxc7txjpbdx') // remapped from original line 76
    .inputFluids(safeFluidOf('susy:gaseous_methacrolein_residue', 1250))
    .inputFluids(safeFluidOf('minecraft:water', 250))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 1000))
    .outputFluids(safeFluidOf('susy:absorbed_methacrolein', 2500))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('2kdyc6xxrijdzi') // remapped from original line 85
    .inputFluids(safeFluidOf('susy:absorbed_methacrolein', 2500))
    .outputFluids(safeFluidOf('susy:diluted_acetic_acid', 2000))
    .outputFluids(safeFluidOf('susy:gaseous_methacrolein_mixture', 500))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('oxp9khkjbelc0m') // remapped from original line 93
    .inputFluids(safeFluidOf('susy:methacrylic_acid_solution', 2000))
    .outputFluids(safeFluidOf('susy:methacrylic_acid', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(250)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('qeg1ghvp41xbfw') // remapped from original line 101
    .inputFluids(safeFluidOf('susy:methacrylic_acid', 50))
    .inputFluids(safeFluidOf('gtceu:methanol', 50))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:methyl_methacrylate', 50))
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 100))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.mixer('pbtpjlw1vx15bo') // remapped from original line 113
    .inputFluids(safeFluidOf('susy:methyl_methacrylate', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .inputFluids(safeFluidOf('susy:gtfo_sodium_stearate', 100))
    .outputFluids(safeFluidOf('susy:methyl_methacrylate_emulsion', 2000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.polymerization_tank('z38u9mb1jlnu7d') // remapped from original line 122
    .inputFluids(safeFluidOf('susy:methyl_methacrylate_emulsion', 2000))
    .itemInputs('1x #forge:dusts/tiny_potassium_persulfate')
    .outputFluids(safeFluidOf('susy:polymethyl_methacrylate_solution', 2000))
    .duration(300)
    .EUt(30)

  event.recipes.susy.dryer('go9wbmktg2bo1w') // remapped from original line 130
    .inputFluids(safeFluidOf('susy:polymethyl_methacrylate_solution', 2000))
    .itemOutputs('1x #forge:dusts/pmma')
    .duration(300)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // BR = recipemap('batch_reactor')
  // POLYMERIZATION = recipemap('polymerization_tank')
  // MIXER = recipemap('mixer')
  // DRYER = recipemap('dryer')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // DT = recipemap('distillation_tower')
  // LCR = recipemap('large_chemical_reactor')
  // BCR = recipemap('bubble_column_reactor')
  // CENTRIFUGE = recipemap('centrifuge')
});