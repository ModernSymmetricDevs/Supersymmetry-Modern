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

  event.recipes.gtceu.PYROLYSE_OVEN('9drpd53cqubifq') // remapped from original line 12
    .itemInputs('16x #forge:logs/wood')
    .itemOutputs(safeItemId('1x minecraft:coal', ')) * 8)
    .outputFluids(safeFluidOf('susy:unscrubbed_wood_gas', 3000))
    .outputFluids(safeFluidOf('gtceu:wood_vinegar', 2000))
    .outputFluids(safeFluidOf('gtceu:creosote', 2000))
    .duration(320)
    .EUt(64)

  event.recipes.gtceu.PYROLYSE_OVEN('2appq1ug4m2jlg') // remapped from original line 22
    .itemInputs('24x #forge:dusts/wood')
    .itemOutputs('20x #forge:dusts/wood_ash')
    .outputFluids(safeFluidOf('susy:unscrubbed_wood_gas', 3000))
    .duration(320)
    .EUt(64)

  event.recipes.gtceu.PYROLYSE_OVEN('xrzkmrjvbvcujz') // remapped from original line 30
    .itemInputs('24x #forge:trees/leaves')
    .itemOutputs('10x #forge:dusts/wood_ash')
    .duration(240)
    .EUt(64)

  event.recipes.gtceu.PYROLYSE_OVEN('tkmdibhx5ihi4q') // remapped from original line 37
    .inputFluids(safeFluidOf('gtceu:fermented_biomass', 5000))
    .itemOutputs('8x #forge:dusts/dark_ash')
    .outputFluids(safeFluidOf('susy:unscrubbed_wood_gas', 3000))
    .duration(320)
    .EUt(64)

  event.recipes.gtceu.PYROLYSE_OVEN('9zzwayvxgqx2qx') // remapped from original line 45
    .inputFluids(safeFluidOf('gtceu:biomass', 3000))
    .itemOutputs('8x #forge:dusts/dark_ash')
    .outputFluids(safeFluidOf('susy:unscrubbed_wood_gas', 3000))
    .duration(320)
    .EUt(64)

  event.recipes.gtceu.CENTRIFUGE('r1x9ydog8eva47') // remapped from original line 53
    .inputFluids(safeFluidOf('susy:unscrubbed_wood_gas', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 200))
    .outputFluids(safeFluidOf('gtceu:creosote', 50))
    .outputFluids(safeFluidOf('gtceu:wood_gas', 1000))
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.DISTILLATION_TOWER('gxxlltzrdp4zux') // remapped from original line 62
    .inputFluids(safeFluidOf('gtceu:wood_vinegar', 1000))
    .outputFluids(safeFluidOf('gtceu:acetic_acid', 100))
    .outputFluids(safeFluidOf('minecraft:water', 700))
    .outputFluids(safeFluidOf('gtceu:methanol', 100))
    .outputFluids(safeFluidOf('gtceu:acetone', 100))
    .duration(200)
    .EUt(24)

  event.recipes.gtceu.DISTILLATION_TOWER('6qbst6sjgknzs5') // remapped from original line 72
    .chancedOutput(metaitem('bitumen'), 5000, 0)
    .inputFluids(safeFluidOf('gtceu:creosote', 1000))
    .outputFluids(safeFluidOf('susy:creosol', 400))
    .outputFluids(safeFluidOf('susy:gtfo_guaiacol', 250))
    .outputFluids(safeFluidOf('susy:xylenol', 50))
    .outputFluids(safeFluidOf('susy:cresol', 200))
    .outputFluids(safeFluidOf('gtceu:phenol', 100))
    .duration(200)
    .EUt(48)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import gregtech.api.recipes.ModHandler;
  // import gregtech.api.unification.material.Materials;
  // import gregtech.api.unification.ore.OrePrefix;
  // import gregtech.api.unification.stack.UnificationEntry;
  // def PYROLYSE_OVEN = recipemap('pyrolyse_oven');
  // def DISTILLATION_TOWER = recipemap('distillation_tower');
  // def CENTRIFUGE = recipemap('centrifuge');
});