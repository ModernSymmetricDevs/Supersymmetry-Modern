// priority: 0
const $PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty')
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty')
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty')
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys')
const $FluidPipeProperties = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties')
const $WireProperties = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties')
const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty')
const $GasTier = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty$GasTier')
const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')
const $FiberProperty = Java.loadClass('belletti.supersymmetry.common.materials.properties.FiberProperty')
const SusyFluidStorageKeys = Java.loadClass('belletti.supersymmetry.common.materials.properties.SuSyFluidStorageKeys')
const SuSyPropertyKey = Java.loadClass('belletti.supersymmetry.common.materials.properties.SuSyPropertyKey')
const SuSyMaterialFlags = Java.loadClass('belletti.supersymmetry.common.materials.SuSyMaterialFlags')
const GroovySuSyMaterials = Java.loadClass('belletti.supersymmetry.common.materials.groovy.GroovySuSyMaterials')

function setupSlurries(material) {
    const property = new $FluidProperty()
    property.storage.enqueueRegistration(SusyFluidStorageKeys.SLURRY, new GTFluidBuilder())
    property.storage.enqueueRegistration(SusyFluidStorageKeys.IMPURE_SLURRY, new GTFluidBuilder())
    property.storage.enqueueRegistration($FluidStorageKeys.LIQUID, new GTFluidBuilder())
    material.setProperty($PropertyKey.FLUID, property)
}

function setupFluidType(material, key, temp) {
    if (material.getProperty($PropertyKey.FLUID) === null) {
        const property = new $FluidProperty()
        const builder = temp ? new GTFluidBuilder().temperature(temp) : new GTFluidBuilder()
        property.storage.enqueueRegistration(key, builder)
        material.setProperty($PropertyKey.FLUID, property)
    } else {
        const property = material.getProperty($PropertyKey.FLUID)
        if (property.storage.getQueuedBuilder(key) !== null) {
            property.storage.getQueuedBuilder(key).temperature(temp)
        } else {
            property.storage.enqueueRegistration(key, new GTFluidBuilder().temperature(temp))
        }
    }
}

function setupFluidTypeNoTemperature(material, key) {
    if (material.getProperty($PropertyKey.FLUID) === null) {
        const property = new $FluidProperty();
        property.storage.enqueueRegistration(key, new GTFluidBuilder());
        material.setProperty($PropertyKey.FLUID, property);
    } else {
        const property = material.getProperty($PropertyKey.FLUID);
        property.storage.enqueueRegistration(key, new GTFluidBuilder());
    }
}

// FIXME: GroovySuSyMaterials should be rewritten after moving GroovySuSyMaterials into kjs
GTCEuStartupEvents.registry('gtceu:material', event => {
    console.info('Modifying flags...')

    // Recipe types
    GTRecipeTypes.BLAST_RECIPES.setMaxIOSize(3, 3, 2, 1); // setMaxFluidInputs(2)
    // SusyRecipeMaps.RAILROAD_ENGINEERING_STATION_RECIPES.setMaxFluidInputs(3)
    // SusyRecipeMaps.RAILROAD_ENGINEERING_STATION_RECIPES.setMaxInputs(12)

    // Properties
    GTMaterials.Germanium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Tellurium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Cadmium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Asbestos.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.BisphenolA.setProperty($PropertyKey.DUST, new $DustProperty())
    GTMaterials.Silver.setProperty($PropertyKey.FLUID_PIPE, new $FluidPipeProperties(1234, 50, false, false, true, false))

    setupFluidType(GTMaterials.AntimonyTrifluoride, $FluidStorageKeys.LIQUID, 565)
    setupFluidType(GTMaterials.LithiumChloride, $FluidStorageKeys.LIQUID, 890)
    setupFluidType(GTMaterials.SiliconDioxide, $FluidStorageKeys.LIQUID, 1986)
    setupFluidType(GTMaterials.Caesium, $FluidStorageKeys.LIQUID, 302)
    setupFluidType(GTMaterials.Cadmium, $FluidStorageKeys.LIQUID, 600)
    setupFluidType(GTMaterials.BisphenolA, $FluidStorageKeys.LIQUID, 428)
    setupFluidType(GTMaterials.Iodine, $FluidStorageKeys.GAS, 460)
    setupFluidTypeNoTemperature(GTMaterials.Chlorine, $FluidStorageKeys.PLASMA)
    setupFluidType(GTMaterials.Selenium, $FluidStorageKeys.LIQUID, 494)

    GTMaterials.Polybenzimidazole.setProperty(SuSyPropertyKey.FIBER, new $FiberProperty(false, true, true))
    GTMaterials.Polytetrafluoroethylene.setProperty(SuSyPropertyKey.FIBER, new $FiberProperty(false, true, false))
    GTMaterials.Polydimethylsiloxane.setProperty($PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Polydimethylsiloxane.getProperty($PropertyKey.FLUID).storage.enqueueRegistration($FluidStorageKeys.LIQUID, new GTFluidBuilder())

    GTMaterials.Tantalum.setProperty($PropertyKey.BLAST, new $BlastProperty(3293, $GasTier.MID, 480, 240))
    GTMaterials.Molybdenum.setProperty($PropertyKey.BLAST, new $BlastProperty(2890, $GasTier.MID, 480, 240))
    GTMaterials.Platinum.setProperty($PropertyKey.BLAST, new $BlastProperty(2045, $GasTier.LOW, 480, 240))
    GTMaterials.Thorium.setProperty($PropertyKey.BLAST, new $BlastProperty(2028, $GasTier.LOW, 480, 240))
    GTMaterials.Cobalt.setProperty($PropertyKey.BLAST, new $BlastProperty(1750, $GasTier.LOW, 120, 200))
    GTMaterials.Beryllium.setProperty($PropertyKey.BLAST, new $BlastProperty(1560, $GasTier.LOW, 120, 200))
    GTMaterials.Nickel.setProperty($PropertyKey.BLAST, new $BlastProperty(1728, $GasTier.LOW, 120, 120))

    // Flags
    GTMaterials.Asbestos.addFlags(GTMaterialFlags.GENERATE_FOIL)
    GTMaterials.Tellurium.addFlags(GTMaterialFlags.GENERATE_PLATE)
    GTMaterials.Steel.addFlags(GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_SPRING_SMALL)
    GTMaterials.Titanium.addFlags(GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_SPRING_SMALL)
    GTMaterials.Lead.addFlags(GTMaterialFlags.GENERATE_ROUND)
    GTMaterials.Aluminium.addFlags(GTMaterialFlags.GENERATE_ROUND)
    GTMaterials.Nickel.addFlags(GTMaterialFlags.GENERATE_ROD)
    GTMaterials.Tungsten.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.Molybdenum.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.Tantalum.addFlags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FINE_WIRE, SuSyMaterialFlags.GENERATE_CATALYST_BED)
    GTMaterials.ChromiumTrioxide.addFlags(SuSyMaterialFlags.GENERATE_CATALYST_BED)
    GTMaterials.Iron3Chloride.addFlags(SuSyMaterialFlags.GENERATE_CATALYST_BED)
    GTMaterials.Platinum.addFlags(SuSyMaterialFlags.GENERATE_CATALYST_BED)
    GroovySuSyMaterials.Alumina.addFlags(SuSyMaterialFlags.GENERATE_CATALYST_BED)
    GTMaterials.Silver.addFlags(SuSyMaterialFlags.GENERATE_CATALYST_BED)
    GTMaterials.Brass.addFlags(GTMaterialFlags.GENERATE_RING)
    GTMaterials.Indium.addFlags(GTMaterialFlags.GENERATE_PLATE)
    GTMaterials.BisphenolA.addFlags(GTMaterialFlags.NO_UNIFICATION)
    GTMaterials.Phosphorus.addFlags(GTMaterialFlags.NO_SMELTING)
    GTMaterials.Tetrahedrite.addFlags(GTMaterialFlags.NO_SMELTING)

    GTMaterials.ManganesePhosphide.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.UraniumTriplatinum.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.RutheniumTriniumAmericiumNeutronate.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)

    // Colors
    GTMaterials.Phosphorus.setMaterialARGB(0xfffed6)

    // Formulae
    GTMaterials.DilutedHydrochloricAcid.setFormula('(H2O)2(HCl)', true)
    GTMaterials.DilutedSulfuricAcid.setFormula('(H2SO4)(H2O)', true)
    GTMaterials.AquaRegia.setFormula('(HNO3)(HCl)3', true)
    GTMaterials.Tantalite.setFormula('(Fe,Mn)Ta2O6', true)
    GTMaterials.Lepidolite.setFormula('(K,Rb)AlLi2Si4O10(OH,F)2', true)
    GTMaterials.Tetrahedrite.setFormula('Cu12Sb4S13', true)
    GTMaterials.IndiumGalliumPhosphide.setFormula('InGaP2', true)
    GTMaterials.NetherAir.setFormula('(N78O21Ar9)24(CO2)2(H2S)(SO2)', true)

    // Ore Processing
    GTMaterials.Borax.setProperty($PropertyKey.ORE, new $OreProperty())
    GTMaterials.Scheelite.addFlags(SuSyMaterialFlags.GENERATE_SIFTED, SuSyMaterialFlags.GENERATE_FLOTATED)
    setupSlurries(GTMaterials.Scheelite)

    GTMaterials.Pyrochlore.addFlags(SuSyMaterialFlags.GENERATE_SIFTED, SuSyMaterialFlags.GENERATE_FLOTATED, SuSyMaterialFlags.GENERATE_CONCENTRATE)
    setupSlurries(GTMaterials.Pyrochlore)

    GTMaterials.Molybdenite.addFlags(SuSyMaterialFlags.GENERATE_FLOTATED)
    setupSlurries(GTMaterials.Molybdenite)

    GTMaterials.Tantalite.addFlags(SuSyMaterialFlags.GENERATE_SIFTED, SuSyMaterialFlags.GENERATE_FLOTATED, SuSyMaterialFlags.GENERATE_CONCENTRATE)
    setupSlurries(GTMaterials.Tantalite)

    setupSlurries(GTMaterials.Galena)
    setupSlurries(GTMaterials.Stibnite)
    setupSlurries(GTMaterials.Cinnabar)

    GTMaterials.Ilmenite.addFlags(SuSyMaterialFlags.GENERATE_FLOTATED, SuSyMaterialFlags.GENERATE_CONCENTRATE)
    setupSlurries(GTMaterials.Ilmenite)

    setupSlurries(GTMaterials.Barite)
    setupSlurries(GTMaterials.Spodumene)
    GTMaterials.Cassiterite.addFlags(SuSyMaterialFlags.GENERATE_CONCENTRATE)
    setupSlurries(GTMaterials.Cassiterite)
    setupSlurries(GTMaterials.Malachite)
    GTMaterials.Rutile.addFlags(SuSyMaterialFlags.GENERATE_CONCENTRATE)
    setupSlurries(GTMaterials.Sphalerite)
    setupSlurries(GTMaterials.Pollucite)
    setupSlurries(GroovySuSyMaterials.Arsenopyrite)

    setupFluidType(GTMaterials.PolyvinylAcetate, $FluidStorageKeys.LIQUID, 385)

    // Ore byproducts
    const pegmatiteTailings = GroovySuSyMaterials.PegmatiteTailings
    const limestoneTailings = GroovySuSyMaterials.LimestoneTailings
    const graniteTailings = GroovySuSyMaterials.GraniteTailings
    const ultramaficTailings = GroovySuSyMaterials.UltramaficTailings
    const clay = GTMaterials.Clay

    // FIXME: property is already set by GroovySuSyMaterials / GroovyOreMaterials
    // GroovySuSyMaterials.Petalite.setProperty($PropertyKey.ORE, new $OreProperty())
    GroovySuSyMaterials.Petalite.getProperty($PropertyKey.ORE).setOreByProducts(pegmatiteTailings, pegmatiteTailings, pegmatiteTailings, pegmatiteTailings)

    GTMaterials.Aluminium.getProperty($PropertyKey.ORE).getOreByProducts().clear()
    GTMaterials.Aluminium.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings)

    GTMaterials.Beryllium.getProperty($PropertyKey.ORE).getOreByProducts().clear()
    GTMaterials.Beryllium.getProperty($PropertyKey.ORE).setOreByProducts(pegmatiteTailings, pegmatiteTailings, pegmatiteTailings, pegmatiteTailings)

    GTMaterials.Cobalt.getProperty($PropertyKey.ORE).getOreByProducts().clear()
    GTMaterials.Cobalt.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings)

    GTMaterials.Copper.getProperty($PropertyKey.ORE).getOreByProducts().clear()
    GTMaterials.Copper.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings)

    GTMaterials.Gold.getProperty($PropertyKey.ORE).getOreByProducts().clear()
    GTMaterials.Gold.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings)

    GTMaterials.Iron.getProperty($PropertyKey.ORE).getOreByProducts().clear()
    GTMaterials.Iron.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings)

    GTMaterials.Lead.getProperty($PropertyKey.ORE).getOreByProducts().clear()
    GTMaterials.Lead.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings)

    GTMaterials.Lithium.getProperty($PropertyKey.ORE).getOreByProducts().clear()
    GTMaterials.Lithium.getProperty($PropertyKey.ORE).setOreByProducts(pegmatiteTailings, pegmatiteTailings, pegmatiteTailings, pegmatiteTailings)

    GTMaterials.Molybdenum.getProperty($PropertyKey.ORE).getOreByProducts().clear()
    GTMaterials.Molybdenum.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings)

    GTMaterials.Neodymium.getProperty($PropertyKey.ORE).getOreByProducts().clear()
    GTMaterials.Neodymium.getProperty($PropertyKey.ORE).setOreByProducts(pegmatiteTailings, pegmatiteTailings, pegmatiteTailings, pegmatiteTailings)

    GTMaterials.Nickel.getProperty($PropertyKey.ORE).getOreByProducts().clear()
    GTMaterials.Nickel.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings)

    GTMaterials.Palladium.getProperty($PropertyKey.ORE).getOreByProducts().clear()
    GTMaterials.Palladium.getProperty($PropertyKey.ORE).setOreByProducts(pegmatiteTailings, pegmatiteTailings, pegmatiteTailings, pegmatiteTailings)

    GTMaterials.Platinum.getProperty($PropertyKey.ORE).getOreByProducts().clear()
    GTMaterials.Platinum.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings)

    GTMaterials.Plutonium239.getProperty($PropertyKey.ORE).getOreByProducts().clear()
    GTMaterials.Plutonium239.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings)

    GTMaterials.Silver.getProperty($PropertyKey.ORE).getOreByProducts().clear()
    GTMaterials.Silver.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings)

    GTMaterials.Sulfur.getProperty($PropertyKey.ORE).getOreByProducts().clear()
    GTMaterials.Sulfur.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings)

    GTMaterials.Thorium.getProperty($PropertyKey.ORE).getOreByProducts().clear()
    GTMaterials.Thorium.getProperty($PropertyKey.ORE).setOreByProducts(pegmatiteTailings, pegmatiteTailings, pegmatiteTailings, pegmatiteTailings)

    GTMaterials.Tin.getProperty($PropertyKey.ORE).getOreByProducts().clear()
    GTMaterials.Tin.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings)

    GTMaterials.Naquadah.getProperty($PropertyKey.ORE).getOreByProducts().clear()

    GTMaterials.CertusQuartz.getProperty($PropertyKey.ORE).getOreByProducts().clear()
    GTMaterials.CertusQuartz.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings)

    GTMaterials.Almandine.getProperty($PropertyKey.ORE).getOreByProducts().clear()
    GTMaterials.Almandine.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings)

    GTMaterials.Asbestos.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Asbestos.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);
    // FIXME: What the hell is a BandedIron, where is it declared ?
    // GTMaterials.BandedIron.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    // GTMaterials.BandedIron.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);
    GTMaterials.BlueTopaz.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.BlueTopaz.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);
    // FIXME: where is it declared ? BrownLimonite
    // GTMaterials.BrownLimonite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    // GTMaterials.BrownLimonite.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);
    GTMaterials.YellowLimonite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.YellowLimonite.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.Calcite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Calcite.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.Cassiterite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Cassiterite.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.CassiteriteSand.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.CassiteriteSand.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.Chalcopyrite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Chalcopyrite.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.Chromite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Chromite.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.Cinnabar.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Cinnabar.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GTMaterials.Coal.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Coal.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.Cobaltite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Cobaltite.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.Cooperite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Cooperite.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.Diamond.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Diamond.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    // FIXME: apparently this kjs line is getting executed before belletti/supersymmetry/common/materials/SuSyMaterials.java:143 (susycore)
    // so GTMaterials.Electrum doesn't have the ProperyKey.ORE assigned yet
    // and thus, the getProperty returns null
    // GTMaterials.Electrum.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    // GTMaterials.Electrum.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);
    GTMaterials.Emerald.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Emerald.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.Galena.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Galena.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);
    GTMaterials.Garnierite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Garnierite.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.GreenSapphire.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.GreenSapphire.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.Grossular.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Grossular.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.Ilmenite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Ilmenite.getProperty($PropertyKey.ORE).setOreByProducts(pegmatiteTailings, pegmatiteTailings, pegmatiteTailings, pegmatiteTailings);

    GTMaterials.Bauxite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Bauxite.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.Lapis.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Lapis.getProperty($PropertyKey.ORE).setOreByProducts(pegmatiteTailings, pegmatiteTailings, pegmatiteTailings, pegmatiteTailings);

    GTMaterials.Magnesite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Magnesite.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.Magnetite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Magnetite.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.Molybdenite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Molybdenite.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GTMaterials.Powellite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Powellite.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GTMaterials.Scheelite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Scheelite.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GTMaterials.Pyrite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Pyrite.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.Pyrolusite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Pyrolusite.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GTMaterials.Pyrope.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Pyrope.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.RockSalt.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.RockSalt.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.Ruby.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Ruby.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.Salt.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Salt.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.Saltpeter.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Saltpeter.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.Sapphire.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Sapphire.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.Sodalite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Sodalite.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.Tantalite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Tantalite.getProperty($PropertyKey.ORE).setOreByProducts(pegmatiteTailings, pegmatiteTailings, pegmatiteTailings, pegmatiteTailings);

    GTMaterials.Spessartine.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Spessartine.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.Sphalerite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Sphalerite.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.Stibnite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Stibnite.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GTMaterials.Tetrahedrite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Tetrahedrite.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GTMaterials.Topaz.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Topaz.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.Tungstate.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Tungstate.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GTMaterials.Uraninite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Uraninite.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GTMaterials.Wulfenite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Wulfenite.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GTMaterials.NetherQuartz.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.NetherQuartz.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GTMaterials.Graphite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Graphite.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.Bornite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Bornite.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.Chalcocite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Chalcocite.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.Realgar.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Realgar.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GTMaterials.Bastnasite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Bastnasite.getProperty($PropertyKey.ORE).setOreByProducts(pegmatiteTailings, pegmatiteTailings, pegmatiteTailings, pegmatiteTailings);

    GTMaterials.Pentlandite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Pentlandite.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.Spodumene.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Spodumene.getProperty($PropertyKey.ORE).setOreByProducts(pegmatiteTailings, pegmatiteTailings, pegmatiteTailings, pegmatiteTailings);

    GTMaterials.Lepidolite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Lepidolite.getProperty($PropertyKey.ORE).setOreByProducts(pegmatiteTailings, pegmatiteTailings, pegmatiteTailings, pegmatiteTailings);

    GTMaterials.GlauconiteSand.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.GlauconiteSand.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.Malachite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Malachite.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.Alunite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Alunite.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GTMaterials.Talc.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Talc.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.Kyanite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Kyanite.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.Pyrochlore.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Pyrochlore.getProperty($PropertyKey.ORE).setOreByProducts(pegmatiteTailings, pegmatiteTailings, pegmatiteTailings, pegmatiteTailings);
    
    GTMaterials.Borax.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.Olivine.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Olivine.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.Opal.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.Amethyst.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.Apatite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Apatite.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.TricalciumPhosphate.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.TricalciumPhosphate.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.GarnetRed.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.GarnetRed.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.GarnetYellow.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.GarnetYellow.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.VanadiumMagnetite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.VanadiumMagnetite.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.Pollucite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Pollucite.getProperty($PropertyKey.ORE).setOreByProducts(pegmatiteTailings, pegmatiteTailings, pegmatiteTailings, pegmatiteTailings);

    GTMaterials.Pitchblende.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Pitchblende.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GTMaterials.Bentonite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Bentonite.getProperty($PropertyKey.ORE).setOreByProducts(clay, clay, clay, clay);

    GTMaterials.FullersEarth.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.FullersEarth.getProperty($PropertyKey.ORE).setOreByProducts(clay, clay, clay, clay);

    GTMaterials.Monazite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Monazite.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GTMaterials.Trona.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Trona.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.Gypsum.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Gypsum.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.Zeolite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Zeolite.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.Redstone.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Redstone.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.Electrotine.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Electrotine.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GTMaterials.Diatomite.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.Diatomite.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.GraniticMineralSand.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.GraniticMineralSand.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.GarnetSand.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.GarnetSand.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GTMaterials.BasalticMineralSand.getProperty($PropertyKey.ORE).getOreByProducts().clear();
    GTMaterials.BasalticMineralSand.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GroovySuSyMaterials.Thortveitite.getProperty($PropertyKey.ORE).setOreByProducts(pegmatiteTailings, pegmatiteTailings, pegmatiteTailings, pegmatiteTailings);

    GroovySuSyMaterials.Titanomagnetite.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GroovySuSyMaterials.VanadiferousTitanomagnetite.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GroovySuSyMaterials.Perovskite.getProperty($PropertyKey.ORE).setOreByProducts(pegmatiteTailings, pegmatiteTailings, pegmatiteTailings, pegmatiteTailings);

    GroovySuSyMaterials.Arsenopyrite.getProperty($PropertyKey.ORE).setOreByProducts(pegmatiteTailings, pegmatiteTailings, pegmatiteTailings, pegmatiteTailings);

    GroovySuSyMaterials.Smithsonite.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GroovySuSyMaterials.Smithsonite.getProperty($PropertyKey.ORE).setDirectSmeltResult(GTMaterials.Zinc);

    GroovySuSyMaterials.Enargite.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);
    
    GroovySuSyMaterials.Proustite.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GroovySuSyMaterials.Celestine.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GroovySuSyMaterials.Strontianite.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GroovySuSyMaterials.Acanthite.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GroovySuSyMaterials.Stephanite.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GroovySuSyMaterials.Pyrargyrite.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GTMaterials.Barite.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GroovySuSyMaterials.Witherite.getProperty($PropertyKey.ORE).setOreByProducts(limestoneTailings, limestoneTailings, limestoneTailings, limestoneTailings);

    GroovySuSyMaterials.Wolframite.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GroovySuSyMaterials.Sperrylite.getProperty($PropertyKey.ORE).setOreByProducts(ultramaficTailings, ultramaficTailings, ultramaficTailings, ultramaficTailings);

    GroovySuSyMaterials.Cerussite.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GroovySuSyMaterials.Anglesite.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GroovySuSyMaterials.Bismuthinite.getProperty($PropertyKey.ORE).setOreByProducts(graniteTailings, graniteTailings, graniteTailings, graniteTailings);

    GroovySuSyMaterials.Amblygonite.getProperty($PropertyKey.ORE).setOreByProducts(pegmatiteTailings, pegmatiteTailings, pegmatiteTailings, pegmatiteTailings);

    GroovySuSyMaterials.Cerussite.getProperty($PropertyKey.ORE).setDirectSmeltResult(GTMaterials.Lead);

    GroovySuSyMaterials.Anglesite.getProperty($PropertyKey.ORE).setDirectSmeltResult(GTMaterials.Lead);

    GTMaterials.Pyrolusite.getProperty($PropertyKey.ORE).setDirectSmeltResult(null);

    GTMaterials.Platinum.getProperty($PropertyKey.ORE).setDirectSmeltResult(null);

    GTMaterials.Molybdenum.getProperty($PropertyKey.ORE).setDirectSmeltResult(null);

    GTMaterials.Molybdenite.getProperty($PropertyKey.ORE).setDirectSmeltResult(null);

    GTMaterials.Beryllium.getProperty($PropertyKey.ORE).setDirectSmeltResult(null);

    GTMaterials.Cobaltite.getProperty($PropertyKey.ORE).setDirectSmeltResult(null);

    GTMaterials.Cobalt.getProperty($PropertyKey.ORE).setDirectSmeltResult(null);

    GTMaterials.Thorium.getProperty($PropertyKey.ORE).setDirectSmeltResult(null);

    GTMaterials.Nickel.getProperty($PropertyKey.ORE).setDirectSmeltResult(null);

    GTMaterials.Pentlandite.getProperty($PropertyKey.ORE).setDirectSmeltResult(null);

    GTMaterials.Garnierite.getProperty($PropertyKey.ORE).setDirectSmeltResult(null);

    GTMaterials.Ilmenite.getProperty($PropertyKey.ORE).setDirectSmeltResult(null);

    GTMaterials.Powellite.getProperty($PropertyKey.ORE).setDirectSmeltResult(null);

    GTMaterials.Uraninite.getProperty($PropertyKey.ORE).setDirectSmeltResult(null);

    GTMaterials.Magnesite.getProperty($PropertyKey.ORE).setDirectSmeltResult(null);

    // Flammables
    const flammableMaterials = [
        'Naphtha', 'NaturalGas', 'Methane', 'Propane', 'Butane', 'Butadiene', 'Toluene',
        'WoodGas', 'CoalGas', 'Ethylene', 'RefineryGas', 'Ammonia', 'Propene', 'Butene',
        'Phenol', 'Benzene', 'Hydrogen', 'Methanol', 'Ethanol'
    ];
    
    flammableMaterials.forEach(materialName => {
        GTMaterials[materialName].addFlags(GTMaterialFlags.FLAMMABLE);
    });
    
    console.info("Finished modifying flags");    
});