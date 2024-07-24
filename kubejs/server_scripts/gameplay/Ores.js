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

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (entry in RedundantOreRemovals) {
  //     for (item in entry.getMatchingStacks()) {
  //         mods.jei.ingredient.removeAndHide(item)
  //     }
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // def RedundantOreRemovals = [
  //         item('gregtech:ore_orthomagmatic_deposit_0'),
  //         ore('oreNetherrackOrthomagmaticDeposit'),
  //         ore('oreEndstoneOrthomagmaticDeposit'),
  //         ore('crushedOrthomagmaticDeposit'),
  //         ore('crushedPurifiedOrthomagmaticDeposit'),
  //         ore('crushedCentrifugedOrthomagmaticDeposit'),
  //         ore('dustImpureOrthomagmaticDeposit'),
  //         ore('dustPureOrthomagmaticDeposit'),
  //         ore('dustOrthomagmaticDeposit'),
  //         ore('dustSmallOrthomagmaticDeposit'),
  //         ore('dustTinyOrthomagmaticDeposit'),
  //         item('gregtech:ore_metamorphic_deposit_0'),
  //         ore('oreNetherrackMetamorphicDeposit'),
  //         ore('oreEndstoneMetamorphicDeposit'),
  //         ore('crushedMetamorphicDeposit'),
  //         ore('crushedPurifiedMetamorphicDeposit'),
  //         ore('crushedCentrifugedMetamorphicDeposit'),
  //         ore('dustImpureMetamorphicDeposit'),
  //         ore('dustPureMetamorphicDeposit'),
  //         ore('dustMetamorphicDeposit'),
  //         ore('dustSmallMetamorphicDeposit'),
  //         ore('dustTinyMetamorphicDeposit'),
  //         item('gregtech:ore_sedimentary_deposit_0'),
  //         ore('oreNetherrackSedimentaryDeposit'),
  //         ore('oreEndstoneSedimentaryDeposit'),
  //         ore('crushedSedimentaryDeposit'),
  //         ore('crushedPurifiedSedimentaryDeposit'),
  //         ore('crushedCentrifugedSedimentaryDeposit'),
  //         ore('dustImpureSedimentaryDeposit'),
  //         ore('dustPureSedimentaryDeposit'),
  //         ore('dustSedimentaryDeposit'),
  //         ore('dustSmallSedimentaryDeposit'),
  //         ore('dustTinySedimentaryDeposit'),
  //         item('gregtech:ore_hydrothermal_deposit_0'),
  //         ore('oreNetherrackHydrothermalDeposit'),
  //         ore('oreEndstoneHydrothermalDeposit'),
  //         ore('crushedHydrothermalDeposit'),
  //         ore('crushedPurifiedHydrothermalDeposit'),
  //         ore('crushedCentrifugedHydrothermalDeposit'),
  //         ore('dustImpureHydrothermalDeposit'),
  //         ore('dustPureHydrothermalDeposit'),
  //         ore('dustHydrothermalDeposit'),
  //         ore('dustSmallHydrothermalDeposit'),
  //         ore('dustTinyHydrothermalDeposit'),
  //         item('gregtech:ore_alluvial_deposit_0'),
  //         ore('oreNetherrackAlluvialDeposit'),
  //         ore('oreEndstoneAlluvialDeposit'),
  //         ore('crushedAlluvialDeposit'),
  //         ore('crushedPurifiedAlluvialDeposit'),
  //         ore('crushedCentrifugedAlluvialDeposit'),
  //         ore('dustImpureAlluvialDeposit'),
  //         ore('dustPureAlluvialDeposit'),
  //         ore('dustAlluvialDeposit'),
  //         ore('dustSmallAlluvialDeposit'),
  //         ore('dustTinyAlluvialDeposit'),
  //         item('gregtech:ore_magmatic_hydrothermal_deposit_0'),
  //         ore('oreNetherrackMagmaticHydrothermalDeposit'),
  //         ore('oreEndstoneMagmaticHydrothermalDeposit'),
  //         ore('crushedMagmaticHydrothermalDeposit'),
  //         ore('crushedPurifiedMagmaticHydrothermalDeposit'),
  //         ore('crushedCentrifugedMagmaticHydrothermalDeposit'),
  //         ore('dustImpureMagmaticHydrothermalDeposit'),
  //         ore('dustPureMagmaticHydrothermalDeposit'),
  //         ore('dustMagmaticHydrothermalDeposit'),
  //         ore('dustSmallMagmaticHydrothermalDeposit'),
  //         ore('dustTinyMagmaticHydrothermalDeposit')
  // ]
});