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
  // for (rock in rocks) {
  //     int a = 0;
  //     for (oreList in rock.oreLists) {
  //         def recipe = recipemap('ore_sorter').recipeBuilder();
  //         recipe.circuitMeta(a + 1)
  //         recipe.inputs(metaitem(rock.input_rock) * (oreList.size()));
  //         for (ore in oreList) {
  //             if (ore.getKey() == 'gregtech:ore_coal_0') {
  //                 recipe.chancedOutput(item(ore.getKey()) * 2, oreList[ore.getKey()], 0);
  //             } else {
  //                 recipe.chancedOutput(item(ore.getKey()), oreList[ore.getKey()], 0);
  //             }
  //         }
  //         recipe.duration(20);
  //         recipe.EUt(Globals.voltAmps[rock.starting_tier + a]);
  //         recipe.buildAndRegister();
  //         a += 1;
  //     }
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import classes.*
  // import globals.Globals
  // log.infoMC("Running OreSorting.groovy...")
  // int fluid_amount = 100;
  // def orthomagmatic_tier_1 = [
  //     'gregtech:ore_spodumene_0' : 10000,
  //     'gregtech:ore_lepidolite_0' : 10000,
  //     'gregtech:ore_magnetite_0' : 10000,
  //     'gregtech:ore_chalcopyrite_0' : 10000,
  //     'gregtech:ore_sphalerite_0' : 10000,
  //     'gregtech:ore_cassiterite_0' : 10000
  // ];
  // def orthomagmatic_tier_2 = [
  //     'gregtech:ore_spodumene_0' : 10000,
  //     'gregtech:ore_lepidolite_0' : 10000,
  //     'gregtech:ore_chromite_0' : 10000,
  //     'gregtech:ore_magnetite_0' : 10000,
  //     'gregtech:ore_chalcopyrite_0' : 10000,
  //     'gregtech:ore_sphalerite_0' : 10000,
  //     'gregtech:ore_cassiterite_0' : 10000,
  //     'gregtech:ore_pollucite_0' : 10000
  // ];
  // def orthomagmatic_tier_3 = [
  //     'gregtech:ore_spodumene_0' : 10000,
  //     'gregtech:ore_lepidolite_0' : 10000,
  //     'gregtech:ore_thortveitite_0' : 10000,
  //     'gregtech:ore_vanadiferous_titanomagnetite_0' : 10000,
  //     'gregtech:ore_perovskite_0' : 10000,
  //     'minecraft:soul_sand' : 10000,
  //     'gregtech:ore_chromite_0' : 10000,
  //     'gregtech:ore_magnetite_0' : 10000,
  //     'gregtech:ore_pentlandite_0' : 10000,
  //     'gregtech:ore_chalcopyrite_0' : 10000,
  //     'gregtech:ore_sphalerite_0' : 10000,
  //     'gregtech:ore_pyrochlore_0' : 10000,
  //     'gregtech:ore_molybdenite_0' : 10000,
  //     'gregtech:ore_cassiterite_0' : 10000,
  //     'gregtech:ore_tantalite_0' : 10000,
  //     'gregtech:ore_columbite_0' : 10000,
  //     'gregtech:ore_pollucite_0' : 10000
  // ];
  // def orthomagmatic_tier_4 = [
  //     'gregtech:ore_spodumene_0' : 10000,
  //     'gregtech:ore_lepidolite_0' : 10000,
  //     'susy:resource_block:8' : 10000,
  //     'gregtech:ore_thortveitite_0' : 10000,
  //     'gregtech:ore_vanadiferous_titanomagnetite_0' : 10000,
  //     'gregtech:ore_perovskite_0' : 10000,
  //     'minecraft:soul_sand' : 10000,
  //     'gregtech:ore_baddeleyite_0' : 10000,
  //     'gregtech:ore_chromite_0' : 10000,
  //     'gregtech:ore_magnetite_0' : 10000,
  //     'gregtech:ore_pentlandite_0' : 10000,
  //     'gregtech:ore_chalcopyrite_0' : 10000,
  //     'gregtech:ore_sphalerite_0' : 10000,
  //     'gregtech:ore_pyrochlore_0' : 10000,
  //     'gregtech:ore_molybdenite_0' : 10000,
  //     'gregtech:ore_cassiterite_0' : 10000,
  //     'gregtech:ore_tantalite_0' : 10000,
  //     'gregtech:ore_columbite_0' : 10000,
  //     'gregtech:ore_pollucite_0' : 10000
  // ];
  // def metamorphic_tier_1 = [
  //     'gregtech:ore_magnetite_0' : 10000,
  //     'gregtech:ore_pyrite_0' : 10000,
  //     'gregtech:ore_cobaltite_0' : 10000,
  //     'gregtech:ore_realgar_0' : 10000,
  //     'gregtech:ore_arsenopyrite_0' : 10000,
  //     'gregtech:ore_pyrargyrite_0' : 10000,
  //     'gregtech:ore_redstone_0' : 10000,
  //     'gregtech:ore_tetrahedrite_0' : 10000,
  //     'gregtech:ore_cinnabar_0' : 10000
  // ];
  // def metamorphic_tier_2 = [
  //     'gregtech:ore_magnesite_0' : 10000,
  //     'gregtech:ore_magnetite_0' : 10000,
  //     'gregtech:ore_pyrite_0' : 10000,
  //     'gregtech:ore_cobaltite_0' : 10000,
  //     'gregtech:ore_realgar_0' : 10000,
  //     'gregtech:ore_arsenopyrite_0' : 10000,
  //     'gregtech:ore_pyrargyrite_0' : 10000,
  //     'gregtech:ore_stephanite_0' : 10000,
  //     'gregtech:ore_redstone_0' : 10000,
  //     'gregtech:ore_tetrahedrite_0' : 10000,
  //     'gregtech:ore_cinnabar_0' : 10000
  // ];
  // def metamorphic_tier_3 = [
  //     'gregtech:ore_magnesite_0' : 10000,
  //     'gregtech:ore_ilmenite_0' : 10000,
  //     'gregtech:ore_magnetite_0' : 10000,
  //     'gregtech:ore_pyrite_0' : 10000,
  //     'gregtech:ore_cobaltite_0' : 10000,
  //     'gregtech:ore_realgar_0' : 10000,
  //     'gregtech:ore_arsenopyrite_0' : 10000,
  //     'gregtech:ore_pyrargyrite_0' : 10000,
  //     'gregtech:ore_stephanite_0' : 10000,
  //     'gregtech:ore_redstone_0' : 10000,
  //     'gregtech:ore_tetrahedrite_0' : 10000,
  //     'gregtech:ore_cinnabar_0' : 10000
  // ];
  // def sedimentary_tier_1 = [
  //     'gregtech:ore_coal_0' : 10000,
  //     'gregtech:ore_saltpeter_0' : 10000,
  //     'susy:resource_block:12' : 10000,
  //     'gregtech:ore_banded_iron_0' : 10000,
  //     'gregtech:ore_pyrite_0' : 10000,
  //     'gregtech:ore_malachite_0' : 10000,
  //     'gregtech:ore_cinnabar_0' : 10000,
  //     'gregtech:ore_fluorite_0' : 10000,
  //     'susy:resource_block:0' : 10000,
  //     'gregtech:ore_pyrolusite_0' : 10000
  // ];
  // def sedimentary_tier_2 = [
  //     'gregtech:ore_coal_0' : 10000,
  //     'gregtech:ore_saltpeter_0' : 10000,
  //     'susy:resource_block:12' : 10000,
  //     'gregtech:ore_banded_iron_0' : 10000,
  //     'gregtech:ore_pyrite_0' : 10000,
  //     'gregtech:ore_malachite_0' : 10000,
  //     'gregtech:ore_cinnabar_0' : 10000,
  //     'gregtech:ore_fluorite_0' : 10000,
  //     'gregtech:ore_magnesite_0' : 10000,
  //     'susy:resource_block:0' : 10000,
  //     'gregtech:ore_pyrolusite_0' : 10000
  // ];
  // def sedimentary_tier_3 = [
  //     'gregtech:ore_coal_0' : 10000,
  //     'gregtech:ore_saltpeter_0' : 10000,
  //     'susy:resource_block:12' : 10000,
  //     'gregtech:ore_banded_iron_0' : 10000,
  //     'gregtech:ore_pyrite_0' : 10000,
  //     'gregtech:ore_malachite_0' : 10000,
  //     'gregtech:ore_celestine_0' : 10000,
  //     'gregtech:ore_barite_0' : 10000,
  //     'gregtech:ore_cinnabar_0' : 10000,
  //     'gregtech:ore_fluorite_0' : 10000,
  //     'gregtech:ore_magnesite_0' : 10000,
  //     'susy:resource_block:0' : 10000,
  //     'gregtech:ore_ilmenite_0' : 10000,
  //     'susy:resource_block:1' : 10000,
  //     'gregtech:ore_pyrolusite_0' : 10000
  // ];
  // def sedimentary_tier_4 = [
  //     'gregtech:ore_coal_0' : 10000,
  //     'gregtech:ore_saltpeter_0' : 10000,
  //     'susy:resource_block:12' : 10000,
  //     'gregtech:ore_banded_iron_0' : 10000,
  //     'gregtech:ore_pyrite_0' : 10000,
  //     'gregtech:ore_malachite_0' : 10000,
  //     'gregtech:ore_celestine_0' : 10000,
  //     'gregtech:ore_barite_0' : 10000,
  //     'gregtech:ore_cinnabar_0' : 10000,
  //     'gregtech:ore_uraninite_0' : 10000,
  //     'gregtech:ore_fluorite_0' : 10000,
  //     'gregtech:ore_magnesite_0' : 10000,
  //     'susy:resource_block:0' : 10000,
  //     'gregtech:ore_ilmenite_0' : 10000,
  //     'susy:resource_block:1' : 10000,
  //     'gregtech:ore_pyrolusite_0' : 10000,
  //     'gregtech:ore_carnotite_0' : 10000
  // ];
  // def magmatic_hydrothermal_tier_1 = [
  //     'gregtech:ore_magnetite_0' : 10000,
  //     'gregtech:ore_pyrite_0' : 10000,
  //     'gregtech:ore_cobaltite_0' : 10000,
  //     'gregtech:ore_chalcopyrite_0' : 10000,
  //     'gregtech:ore_sphalerite_0' : 10000,
  //     'gregtech:ore_enargite_0' : 10000,
  //     'gregtech:ore_redstone_0' : 10000,
  //     'gregtech:ore_cassiterite_0' : 10000
  // ];
  // def magmatic_hydrothermal_tier_2 = [
  //     'gregtech:ore_magnetite_0' : 10000,
  //     'gregtech:ore_pyrite_0' : 10000,
  //     'gregtech:ore_cobaltite_0' : 10000,
  //     'gregtech:ore_chalcopyrite_0' : 10000,
  //     'gregtech:ore_sphalerite_0' : 10000,
  //     'gregtech:ore_enargite_0' : 10000,
  //     'gregtech:ore_redstone_0' : 10000,
  //     'gregtech:ore_cassiterite_0' : 10000
  // ];
  // def magmatic_hydrothermal_tier_3 = [
  //     'gregtech:ore_magnetite_0' : 10000,
  //     'gregtech:ore_pyrite_0' : 10000,
  //     'gregtech:ore_cobaltite_0' : 10000,
  //     'gregtech:ore_chalcopyrite_0' : 10000,
  //     'gregtech:ore_sphalerite_0' : 10000,
  //     'gregtech:ore_enargite_0' : 10000,
  //     'gregtech:ore_pyrochlore_0' : 10000,
  //     'gregtech:ore_wolframite_0' : 10000,
  //     'gregtech:ore_scheelite_0' : 10000,
  //     'gregtech:ore_redstone_0' : 10000,
  //     'gregtech:ore_cassiterite_0' : 10000
  // ];
  // def magmatic_hydrothermal_tier_4 = [
  //     'susy:resource_block:7' : 10000,
  //     'gregtech:ore_magnetite_0' : 10000,
  //     'gregtech:ore_pyrite_0' : 10000,
  //     'gregtech:ore_cobaltite_0' : 10000,
  //     'gregtech:ore_chalcopyrite_0' : 10000,
  //     'gregtech:ore_sphalerite_0' : 10000,
  //     'gregtech:ore_enargite_0' : 10000,
  //     'gregtech:ore_pyrochlore_0' : 10000,
  //     'gregtech:ore_wolframite_0' : 10000,
  //     'gregtech:ore_scheelite_0' : 10000,
  //     'gregtech:ore_redstone_0' : 10000,
  //     'gregtech:ore_cassiterite_0' : 10000,
  //     'gregtech:ore_uraninite_0' : 10000
  // ];
  // def hydrothermal_tier_1 = [
  //     'gregtech:ore_fluorite_0' : 10000,
  //     'gregtech:ore_pyrolusite_0' : 10000,
  //     'gregtech:ore_pyrite_0' : 10000,
  //     'gregtech:ore_cobaltite_0' : 10000,
  //     'gregtech:ore_bornite_0' : 10000,
  //     'gregtech:ore_realgar_0' : 10000,
  //     'gregtech:ore_arsenopyrite_0' : 10000,
  //     'gregtech:ore_proustite_0' : 10000,
  //     'gregtech:ore_cassiterite_0' : 10000,
  //     'gregtech:ore_acanthite_0' : 10000,
  //     'gregtech:ore_stibnite_0' : 10000,
  //     'gregtech:ore_cinnabar_0' : 10000,
  //     'gregtech:ore_galena_0' : 10000
  // ];
  // def hydrothermal_tier_2 = [
  //     'gregtech:ore_fluorite_0' : 10000,
  //     'gregtech:ore_vanadinite_0' : 10000,
  //     'gregtech:ore_pyrolusite_0' : 10000,
  //     'gregtech:ore_pyrite_0' : 10000,
  //     'gregtech:ore_cobaltite_0' : 10000,
  //     'gregtech:ore_bornite_0' : 10000,
  //     'gregtech:ore_realgar_0' : 10000,
  //     'gregtech:ore_arsenopyrite_0' : 10000,
  //     'gregtech:ore_proustite_0' : 10000,
  //     'gregtech:ore_cassiterite_0' : 10000,
  //     'gregtech:ore_acanthite_0' : 10000,
  //     'gregtech:ore_stibnite_0' : 10000,
  //     'gregtech:ore_cinnabar_0' : 10000,
  //     'gregtech:ore_galena_0' : 10000
  // ];
  // def hydrothermal_tier_3 = [
  //     'gregtech:ore_fluorite_0' : 10000,
  //     'gregtech:ore_vanadinite_0' : 10000,
  //     'gregtech:ore_pyrolusite_0' : 10000,
  //     'gregtech:ore_pyrite_0' : 10000,
  //     'gregtech:ore_cobaltite_0' : 10000,
  //     'gregtech:ore_bornite_0' : 10000,
  //     'gregtech:ore_realgar_0' : 10000,
  //     'gregtech:ore_arsenopyrite_0' : 10000,
  //     'gregtech:ore_proustite_0' : 10000,
  //     'gregtech:ore_strontianite_0' : 10000,
  //     'gregtech:ore_cassiterite_0' : 10000,
  //     'gregtech:ore_acanthite_0' : 10000,
  //     'gregtech:ore_stibnite_0' : 10000,
  //     'gregtech:ore_witherite_0' : 10000,
  //     'gregtech:ore_cinnabar_0' : 10000,
  //     'gregtech:ore_galena_0' : 10000,
  //     'gregtech:ore_bismuthinite_0' : 10000
  // ];
  // def hydrothermal_tier_4 = [
  //     'gregtech:ore_fluorite_0' : 10000,
  //     'susy:resource_block:9' : 10000,
  //     'gregtech:ore_vanadinite_0' : 10000,
  //     'gregtech:ore_pyrolusite_0' : 10000,
  //     'gregtech:ore_pyrite_0' : 10000,
  //     'gregtech:ore_cobaltite_0' : 10000,
  //     'gregtech:ore_bornite_0' : 10000,
  //     'gregtech:ore_realgar_0' : 10000,
  //     'gregtech:ore_arsenopyrite_0' : 10000,
  //     'gregtech:ore_proustite_0' : 10000,
  //     'gregtech:ore_strontianite_0' : 10000,
  //     'gregtech:ore_cassiterite_0' : 10000,
  //     'gregtech:ore_acanthite_0' : 10000,
  //     'gregtech:ore_stibnite_0' : 10000,
  //     'gregtech:ore_witherite_0' : 10000,
  //     'gregtech:ore_cinnabar_0' : 10000,
  //     'gregtech:ore_galena_0' : 10000,
  //     'gregtech:ore_bismuthinite_0' : 10000,
  // ];
  // def alluvial_tier_1 = [
  //     'gregtech:ore_cassiterite_0' : 10000
  // ];
  // def alluvial_tier_2 = [
  //     'gregtech:ore_cassiterite_0' : 10000,
  //     'susy:resource_block:10' : 100,
  //     'susy:resource_block:11' : 5000
  // ];
  // def alluvial_tier_3 = [
  //     'minecraft:soul_sand' : 10000,
  //     'gregtech:ore_cassiterite_0' : 10000,
  //     'susy:resource_block:10' : 100,
  //     'susy:resource_block:11' : 5000
  // ];
  // def alluvial_tier_4 = [
  //     'susy:resource_block:6' : 10000,
  //     'minecraft:soul_sand' : 10000,
  //     'gregtech:ore_cassiterite_0' : 10000,
  //     'susy:resource_block:10' : 10000,
  //     'susy:resource_block:11' : 10000
  // ];
  // def rock_orthomagmatic = new IOreRock('rock.orthomagmatic', 'water', 'water', [orthomagmatic_tier_1, orthomagmatic_tier_2, orthomagmatic_tier_3, orthomagmatic_tier_4], 1);
  // def rock_sedimentary = new IOreRock('rock.sedimentary', 'water', 'water', [sedimentary_tier_1, sedimentary_tier_2, sedimentary_tier_3, sedimentary_tier_4], 1);
  // def rock_metamorphic = new IOreRock('rock.metamorphic', 'water', 'water', [metamorphic_tier_1, metamorphic_tier_2, metamorphic_tier_3], 1);
  // def rock_magmatic_hydrothermal = new IOreRock('rock.magmatic_hydrothermal', 'water', 'water', [magmatic_hydrothermal_tier_1, magmatic_hydrothermal_tier_2, magmatic_hydrothermal_tier_3, magmatic_hydrothermal_tier_4], 1);
  // def rock_hydrothermal = new IOreRock('rock.hydrothermal', 'water', 'water', [hydrothermal_tier_1, hydrothermal_tier_2, hydrothermal_tier_3, hydrothermal_tier_4], 1);
  // def rock_alluvial = new IOreRock('rock.alluvial', 'water', 'water', [alluvial_tier_1, alluvial_tier_2, alluvial_tier_3, alluvial_tier_4], 1);
  // def rocks = [
  //         rock_orthomagmatic,
  //         rock_metamorphic,
  //         rock_sedimentary,
  //         rock_magmatic_hydrothermal,
  //         rock_hydrothermal,
  //         rock_alluvial
  // ];
});