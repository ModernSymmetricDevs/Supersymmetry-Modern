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

  event.recipes.gtceu.electric_blast_furnace('ezq98s1b4q0yrz') // remapped from original line 4
    .itemInputs('12x #forge:dusts/cerium_iv_oxide')
    .itemOutputs('10x #forge:dusts/cerium_iii_oxide')
    .outputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .EUt(1920)
    .blastFurnaceTemp(2273)
    .duration(20)

  event.recipes.susy.fluidized_bed_reactor('c7fis2jwml4f75') // remapped from original line 13
    .itemInputs('10x #forge:dusts/cerium_iii_oxide')
    .inputFluids(safeFluidOf('minecraft:water', 2000))
    .itemOutputs('12x #forge:dusts/cerium_iv_oxide')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 4000))
    .EUt(1920)
    .duration(20)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // EBF = recipemap('electric_blast_furnace')
  // FBR = recipemap('fluidized_bed_reactor')
});