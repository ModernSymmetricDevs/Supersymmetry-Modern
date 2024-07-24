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

  event.recipes.susy.batch_reactor('k4aedcwagatjco') // remapped from original line 5
    .itemInputs('2x #forge:dusts/lead_oxide')
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 2000))
    .itemOutputs('9x #forge:dusts/lead_nitrate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(30)
    .duration(200)

  event.recipes.gtceu.mixer('mqi9cayrqye99z') // remapped from original line 14
    .itemInputs('1x #forge:dusts/manganese_ii_oxide')
    .itemInputs('1x #forge:dusts/iron_iii_oxide')
    .itemOutputs('2x #forge:dusts/sienna')
    .EUt(30)
    .duration(200)

  event.recipes.susy.batch_reactor('5ceamur4fhqnaf') // remapped from original line 24
    .itemInputs('5x #forge:dusts/arsenic_trioxide')
    .inputFluids(safeFluidOf('susy:soda_ash_solution', 1000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .outputFluids(safeFluidOf('susy:gtfo_sodium_arsenite_solution', 1000))
    .EUt(120)
    .duration(200)

  event.recipes.susy.batch_reactor('o3dbpbcye7fjpm') // remapped from original line 33
    .itemInputs('2x #forge:dusts/copper')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 2000))
    .inputFluids(safeFluidOf('susy:gtfo_sodium_arsenite_solution', 1000))
    .itemOutputs(safeItemId('12x gregtechfoodoption:cupric_hydrogen_arsenite_dust'))
    .EUt(120)
    .duration(200)

  event.recipes.gtceu.electric_blast_furnace('oc9us6cwgefqxo') // remapped from original line 42
    .itemInputs('5x #forge:dusts/alumina')
    .itemInputs('2x #forge:dusts/cobalt_oxide')
    .itemOutputs('7x #forge:dusts/cobalt_aluminate')
    .blastFurnaceTemp(1100)
    .EUt(120)
    .duration(200)

  event.recipes.susy.batch_reactor('v5zd2aclgewnyz') // remapped from original line 51
    .itemInputs('9x #forge:dusts/lead_nitrate')
    .inputFluids(safeFluidOf('susy:sodium_chromate_solution', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:sodium_nitrate_solution', 2000))
    .itemOutputs('6x #forge:dusts/lead_chromate')
    .EUt(120)
    .duration(200)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // BR = recipemap('batch_reactor')
  // MIXER = recipemap('mixer')
  // EBF = recipemap('electric_blast_furnace')
  // furnace.add(metaitem('dustSienna'), metaitem('dustBurntSienna'))
});